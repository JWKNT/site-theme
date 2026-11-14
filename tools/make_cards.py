"""Render the link preview card of each subject symbol: the symbol in ink on a square of paper.

Discord, Slack, Teams and other apps show the card beside the title and description of a page
when someone shares its link. The card is opaque, because some apps fill a transparent image
with black. The site card shows the seal as the homepage draws it, with the accent point.

  python3 tools/make_cards.py                       # a card for every symbol in v2/symbols
  python3 tools/make_cards.py mark.svg card.png     # one card, for a site that keeps its own mark

Requires Pillow and rsvg-convert, as tools/make_symbols.py does.
"""
from pathlib import Path
import sys
import tempfile

from PIL import Image

sys.path.insert(0, str(Path(__file__).resolve().parent))
from make_symbols import ROOT, SITE_COLORS, rasterize, site_seal  # noqa: E402

SIZE = 600      # px. Square, and at least the 200px that the apps ask for.
SYMBOL = 340    # px. The symbol box inside the card.
PAPER = SITE_COLORS["paper"]
INK = SITE_COLORS["ink"]


def card(source, out, colored=False):
    with tempfile.TemporaryDirectory() as temp:
        raster = Path(temp) / "symbol.png"
        if colored:
            svg = Path(temp) / "symbol.svg"
            svg.write_text(site_seal(source))
            source = svg
        rasterize(source, raster)
        symbol = Image.open(raster).convert("RGBA").resize((SYMBOL, SYMBOL), Image.Resampling.LANCZOS)
    if not colored:
        ink = Image.new("RGBA", symbol.size, INK)
        ink.putalpha(symbol.getchannel("A"))
        symbol = ink
    image = Image.new("RGBA", (SIZE, SIZE), PAPER)
    offset = (SIZE - SYMBOL) // 2
    image.alpha_composite(symbol, (offset, offset))
    image.convert("RGB").save(out, optimize=True)


def generate():
    (ROOT / "v2/cards").mkdir(exist_ok=True)
    for source in sorted((ROOT / "v2/symbols").glob("*.svg")):
        card(source, ROOT / "v2/cards" / (source.stem + ".png"), colored=source.stem == "home")


if __name__ == "__main__":
    if len(sys.argv) == 3:
        card(Path(sys.argv[1]), Path(sys.argv[2]))
    else:
        generate()
