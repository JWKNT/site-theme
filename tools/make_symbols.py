"""Render the authoritative monochrome SVG identities to compatible PNG assets.

Requires Pillow, and Inkscape or rsvg-convert on PATH. Run from any directory.
The generated 128px transparent mastheads and 192px circular favicons retain
existing consumer URLs. SVG sources use black ink only; the shared CSS inverts
mastheads in dark mode.
"""
from pathlib import Path
import shutil
import subprocess
import tempfile

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
CANVAS = 768
FIELD_INSET = 12
# The symbol box stays inside the circle unless a symbol reaches a viewBox corner.
SYMBOL = 560


def rasterize(source, raster):
    if shutil.which("inkscape"):
        command = ["inkscape", str(source), "--export-type=png", "--export-area-page",
                   f"--export-width={CANVAS}", f"--export-filename={raster}"]
    else:
        command = ["rsvg-convert", f"--width={CANVAS}", f"--height={CANVAS}", f"--output={raster}", str(source)]
    subprocess.run(command, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE)


def generate():
    with tempfile.TemporaryDirectory() as temp:
        for source in sorted((ROOT / "v2/symbols").glob("*.svg")):
            raster = Path(temp) / (source.stem + ".png")
            rasterize(source, raster)
            alpha = Image.open(raster).convert("RGBA").getchannel("A")
            mark = Image.new("RGBA", (128, 128), "black")
            mark.putalpha(alpha.resize((128, 128), Image.Resampling.LANCZOS))
            mark.save(ROOT / "v2/marks" / (source.stem + ".png"), optimize=True)
            # Render at 4x and downsample so the field and lines remain clean at 16px.
            favicon = Image.new("RGBA", (CANVAS, CANVAS), (0, 0, 0, 0))
            edge = CANVAS - FIELD_INSET - 1
            ImageDraw.Draw(favicon).ellipse((FIELD_INSET, FIELD_INSET, edge, edge), fill="black")
            symbol = Image.new("RGBA", (SYMBOL, SYMBOL), "white")
            symbol.putalpha(alpha.resize((SYMBOL, SYMBOL), Image.Resampling.LANCZOS))
            offset = (CANVAS - SYMBOL) // 2
            favicon.alpha_composite(symbol, (offset, offset))
            # A box filter keeps the outside of the circle fully transparent.
            favicon.reduce(CANVAS // 192).save(ROOT / "v2/favicons" / (source.stem + ".png"), optimize=True)


if __name__ == "__main__":
    generate()
