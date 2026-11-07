from pathlib import Path

from PIL import Image, ImageDraw


HERE = Path(__file__).resolve().parent
SCALE = 8


def box(draw, coords, radius, color):
    draw.rounded_rectangle(
        tuple(round(value * SCALE) for value in coords),
        radius=radius * SCALE,
        fill=color,
    )


image = Image.new("RGBA", (128 * SCALE, 128 * SCALE), (0, 0, 0, 0))
draw = ImageDraw.Draw(image)
box(draw, (0, 0, 127, 127), 29, "#172554")
box(draw, (21, 25, 87, 83), 12, "#3B82F6")
box(draw, (31, 35, 97, 93), 12, "#60A5FA")
box(draw, (41, 45, 107, 103), 12, "#2DD4BF")
draw.polygon(
    [(64 * SCALE, 58 * SCALE), (89 * SCALE, 73 * SCALE), (64 * SCALE, 88 * SCALE)],
    fill="#172554",
)

for size in (16, 48, 128):
    image.resize((size, size), Image.Resampling.LANCZOS).save(
        HERE / f"chanopy-icon-{size}.png"
    )
