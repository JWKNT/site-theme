from math import cos, pi, sin
from pathlib import Path

from PIL import Image, ImageDraw


SIZE = 192
BG = "#171816"
FG = "#f1ede3"
MUTED = "#8e8b83"
OUT = Path(__file__).resolve().parents[1] / "v2" / "favicons"


def canvas():
    image = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    draw = ImageDraw.Draw(image)
    draw.rounded_rectangle((8, 8, 184, 184), radius=38, fill=BG, outline="#343630", width=4)
    return image, draw


def star(draw, center=(96, 96), inner=18, outer=70, points=16, color=FG):
    cx, cy = center
    for i in range(points):
        angle = i * 2 * pi / points
        length = outer if i % 2 == 0 else outer * .72
        draw.line((cx + cos(angle) * inner, cy + sin(angle) * inner,
                   cx + cos(angle) * length, cy + sin(angle) * length), fill=color, width=4)
    draw.ellipse((cx - 13, cy - 13, cx + 13, cy + 13), outline=color, width=5)
    draw.ellipse((cx - 5, cy - 5, cx + 5, cy + 5), fill=color)


def home(draw, accent):
    star(draw)
    draw.ellipse((90, 90, 102, 102), fill=accent)


def theme(draw, accent):
    star(draw, inner=17, outer=62, points=12)
    draw.rectangle((31, 31, 161, 161), outline=MUTED, width=3)
    draw.line((31, 62, 161, 62), fill=MUTED, width=2)
    draw.ellipse((88, 88, 104, 104), fill=accent)


def profile(draw, accent):
    points_a, points_b = [], []
    for y in range(38, 155, 6):
        x = 96 + sin((y - 38) / 18) * 38
        points_a.append((x, y))
        points_b.append((192 - x, y))
    draw.line(points_a, fill=FG, width=7)
    draw.line(points_b, fill=accent, width=7)
    for y in range(47, 151, 20):
        x = 96 + sin((y - 38) / 18) * 38
        draw.line((x, y, 192 - x, y), fill=MUTED, width=3)


def albatross(draw, accent):
    draw.arc((30, 52, 162, 151), 202, 338, fill=FG, width=7)
    draw.arc((50, 67, 152, 152), 205, 330, fill=accent, width=7)
    draw.line((88, 112, 145, 54), fill=FG, width=6)
    draw.line((88, 112, 63, 151), fill=MUTED, width=4)


def sheep(draw, accent):
    draw.arc((28, 42, 94, 119), 80, 282, fill=FG, width=8)
    draw.arc((98, 42, 164, 119), 258, 100, fill=FG, width=8)
    draw.ellipse((58, 65, 134, 146), fill="#272925", outline=accent, width=5)
    draw.ellipse((75, 93, 83, 101), fill=FG)
    draw.ellipse((109, 93, 117, 101), fill=FG)
    draw.line((86, 122, 106, 122), fill=FG, width=4)


def armory(draw, accent):
    draw.polygon(((96, 34), (148, 86), (96, 158), (44, 86)), outline=FG)
    draw.line((44, 86, 148, 86), fill=FG, width=5)
    draw.line((96, 34, 96, 158), fill=accent, width=6)
    draw.ellipse((84, 74, 108, 98), outline=FG, width=5)


def logical(draw, accent):
    for p in (47, 79, 111, 143):
        draw.line((47, p, 143, p), fill=MUTED, width=2)
        draw.line((p, 47, p, 143), fill=MUTED, width=2)
    path = [(47, 79), (79, 79), (79, 47), (143, 47), (143, 111), (111, 111), (111, 143), (47, 143), (47, 79)]
    draw.line(path, fill=accent, width=8, joint="curve")


def guide(draw, accent):
    draw.polygon(((34, 48), (91, 62), (91, 151), (34, 136)), outline=FG)
    draw.polygon(((101, 62), (158, 48), (158, 136), (101, 151)), outline=FG)
    draw.line((96, 61, 96, 153), fill=accent, width=5)
    for y in (82, 101, 120):
        draw.line((48, y, 80, y + 7), fill=MUTED, width=3)
        draw.line((112, y + 7, 144, y), fill=MUTED, width=3)


def mystery(draw, accent):
    draw.ellipse((41, 37, 126, 122), outline=FG, width=8)
    draw.line((113, 111, 157, 155), fill=accent, width=11)
    for radius in (12, 24):
        draw.arc((84 - radius, 79 - radius, 84 + radius, 79 + radius), 35, 305, fill=MUTED, width=4)
    draw.ellipse((80, 75, 88, 83), fill=FG)


def ngu(draw, accent):
    draw.arc((34, 34, 158, 158), 30, 330, fill=MUTED, width=5)
    draw.line((50, 141, 82, 108, 104, 119, 146, 62), fill=accent, width=9, joint="curve")
    draw.polygon(((146, 62), (122, 68), (140, 84)), fill=accent)
    draw.ellipse((44, 135, 56, 147), fill=FG)


def writing(draw, accent):
    draw.line((48, 140, 139, 49), fill=FG, width=9)
    draw.polygon(((137, 45), (157, 35), (147, 55)), fill=accent)
    draw.arc((38, 105, 117, 157), 165, 350, fill=MUTED, width=4)
    draw.line((39, 151, 112, 151), fill=FG, width=4)


ICONS = {
    "home": (home, "#c7ad62"),
    "site-theme": (theme, "#9ab8d2"),
    "profile": (profile, "#b88ad2"),
    "albatross-koukairoku": (albatross, "#8eb9c3"),
    "black-sheep-town": (sheep, "#c0a06b"),
    "bl2": (armory, "#e2a339"),
    "logical-solver": (logical, "#86b397"),
    "mtl-guide": (guide, "#b589c1"),
    "mystery-report": (mystery, "#c98d70"),
    "ngu-idle-dashboard": (ngu, "#88b68b"),
    "writing": (writing, "#a1abc5"),
}


OUT.mkdir(parents=True, exist_ok=True)
for name, (draw_icon, accent) in ICONS.items():
    image, drawing = canvas()
    draw_icon(drawing, accent)
    image.save(OUT / f"{name}.png", optimize=True)
