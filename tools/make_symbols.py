"""Render the authoritative monochrome SVG identities to compatible PNG assets.

Requires Inkscape on PATH and Pillow. Run from any directory. The generated
128px transparent mastheads and 192px favicons retain existing consumer URLs.
SVG sources use black ink only; the shared CSS inverts mastheads in dark mode.
"""
from pathlib import Path
import subprocess
import tempfile

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]


def generate():
    with tempfile.TemporaryDirectory() as temp:
        for source in sorted((ROOT / "v2/symbols").glob("*.svg")):
            raster = Path(temp) / (source.stem + ".png")
            subprocess.run([
                "inkscape", str(source), "--export-type=png", "--export-area-page",
                "--export-width=768", f"--export-filename={raster}",
            ], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE)
            alpha = Image.open(raster).convert("RGBA").getchannel("A")
            mark = Image.new("RGBA", (128, 128), "black")
            mark.putalpha(alpha.resize((128, 128), Image.Resampling.LANCZOS))
            mark.save(ROOT / "v2/marks" / (source.stem + ".png"), optimize=True)
            # Render at 4x and downsample so the field and lines remain clean at 16px.
            favicon = Image.new("RGBA", (768, 768), (0, 0, 0, 0))
            ImageDraw.Draw(favicon).rounded_rectangle((24, 24, 744, 744), radius=112, fill="black")
            symbol = Image.new("RGBA", (576, 576), "white")
            symbol.putalpha(alpha.resize((576, 576), Image.Resampling.LANCZOS))
            favicon.alpha_composite(symbol, (96, 96))
            favicon.resize((192, 192), Image.Resampling.LANCZOS).save(
                ROOT / "v2/favicons" / (source.stem + ".png"), optimize=True)


if __name__ == "__main__":
    generate()
