"""Build simple geometric UI punctuation; independent of masthead illustrations."""
from pathlib import Path

from PIL import Image, ImageDraw


def puzzle_transition():
    scale = 4
    image = Image.new("RGBA", (128 * scale, 128 * scale), (0, 0, 0, 0))
    draw = ImageDraw.Draw(image)

    def diamond(cx, cy, radius, *, fill=None, outline=None, width=1):
        points = [(cx, cy - radius), (cx + radius, cy),
                  (cx, cy + radius), (cx - radius, cy), (cx, cy - radius)]
        points = [(round(x * scale), round(y * scale)) for x, y in points]
        if fill:
            draw.polygon(points, fill=fill)
        if outline:
            draw.line(points, fill=outline, width=width * scale, joint="curve")

    # A hollow lozenge and two smaller points: a transition, not a second logo.
    diamond(64, 64, 25, outline="#a58a55", width=5)
    diamond(17, 64, 8, fill="#a58a55")
    diamond(111, 64, 8, fill="#a58a55")
    return image.resize((128, 128), Image.Resampling.LANCZOS)


if __name__ == "__main__":
    output = Path(__file__).resolve().parents[1] / "v2" / "ornaments"
    output.mkdir(parents=True, exist_ok=True)
    puzzle_transition().save(output / "puzzle-transition.png", optimize=True)
