#!/usr/bin/env python3
"""
Generate the 1200x630 share images in client/public/og/.

Run by hand when the cover art changes; the outputs are committed, so the
npm build stays pure JavaScript:

    python3 scripts/og-images.py

Two rules decide the treatment. Art that is already wide gets cover-cropped,
anchored the same way its card is anchored. Art that is square or portrait
gets contained on the site's dark field instead, because a 1.91:1 crop of a
portrait collage throws most of the drawing away.

JPEG, not WebP: LinkedIn's crawler is unreliable on WebP.
"""
from pathlib import Path
from PIL import Image, ImageChops, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "attached_assets"
OUT = ROOT / "client" / "public" / "og"

W, H = 1200, 630
# hsl(200 52% 7%) - the same dark the cards sit on.
FIELD = (9, 21, 27)
CREAM = (243, 238, 218)
GREEN = (94, 201, 154)
DEEP = (14, 41, 50)
# The gap-year page's charcoal ground.
CHARCOAL = (42, 43, 38)


def cover(src: Path, anchor: str = "center") -> Image.Image:
    """Fill the frame, keeping the anchored edge."""
    im = Image.open(src).convert("RGB")
    scale = max(W / im.width, H / im.height)
    im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
    left = {"left": 0, "right": im.width - W}.get(anchor, (im.width - W) // 2)
    top = {"top": 0, "bottom": im.height - H}.get(anchor, (im.height - H) // 2)
    return im.crop((left, top, left + W, top + H))


def contain(src: Path, margin: int = 28) -> Image.Image:
    """Whole artwork, centred on the dark field."""
    im = Image.open(src).convert("RGB")
    box = H - margin * 2
    scale = min((W - margin * 2) / im.width, box / im.height)
    im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
    canvas = Image.new("RGB", (W, H), FIELD)
    canvas.paste(im, ((W - im.width) // 2, (H - im.height) // 2))
    return canvas


def motif_on_field(src: Path, field, width_frac: float = 0.66) -> Image.Image:
    """Lift the drawing out of a card crop and re-centre it.

    Card artwork is composed with its motif riding high, because a card puts
    a title underneath. A share card has no title inside the image, so the
    same drawing wants to sit in the middle instead."""
    im = Image.open(src).convert("RGB")
    bbox = ImageChops.difference(im, Image.new("RGB", im.size, field)) \
        .convert("L").point(lambda v: 255 if v > 18 else 0).getbbox()
    im = im.crop(bbox)
    scale = min(W * width_frac / im.width, H * 0.62 / im.height)
    im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
    canvas = Image.new("RGB", (W, H), field)
    canvas.paste(im, ((W - im.width) // 2, (H - im.height) // 2))
    return canvas


def one_day_a_week() -> Image.Image:
    """The card's own cover, rebuilt at share size: torn paper, dark veil,
    and the week with one day given. Mirrors OneDayCover.tsx, opacities
    included - the six ordinary days are meant to sit back."""
    canvas = cover(ASSETS / "projects/one-day-a-week/collage.webp")
    canvas = Image.blend(canvas, Image.new("RGB", (W, H), DEEP), 0.62)

    # Drawn on the component's own 300x150 viewBox, scaled and centred, so
    # the proportions match the site exactly.
    s = 3.0
    ox, oy = (W - 300 * s) / 2, (H - 150 * s) / 2
    def P(x, y):
        return (ox + x * s, oy + y * s)

    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    faint = CREAM + (153,)   # opacity .6, the outlined days
    ring = CREAM + (128,)    # opacity .5
    scale_ink = CREAM + (128,)

    for i in range(7):
        x = 26 + i * 36
        given = i == 2
        d.rounded_rectangle([P(x, 52), P(x + 28, 90)], radius=5 * s,
                            fill=GREEN + (255,) if given else None,
                            outline=GREEN + (255,) if given else faint,
                            width=round(2 * s))
        if given:
            d.line([P(x + 9, 69), P(x + 13.5, 73.5), P(x + 18.5, 65)],
                   fill=DEEP + (255,), width=round(2.8 * s), joint="curve")
        d.line([P(x + 14, 42), P(x + 14, 52)],
               fill=GREEN + (242,) if given else ring, width=round(2 * s))

    # The scale one day carries: the component's two quadratic curves,
    # flattened to a polyline.
    def quad(p0, p1, p2, n=24):
        return [P(*(
            (1 - t) ** 2 * p0[j] + 2 * (1 - t) * t * p1[j] + t * t * p2[j]
            for j in (0, 1)
        )) for t in (k / n for k in range(n + 1))]

    curve = quad((118, 112), (132, 124), (150, 124)) + quad((150, 124), (168, 124), (182, 112))
    d.line(curve, fill=scale_ink, width=round(2 * s), joint="curve")
    d.polygon([P(176, 118), P(184, 113), P(184, 123)], fill=scale_ink)

    return Image.alpha_composite(canvas.convert("RGBA"), layer).convert("RGB")


JOBS = {
    "one-day-a-week": one_day_a_week,
    "gap-year": lambda: motif_on_field(ASSETS / "gapyear/card.webp", CHARCOAL),
    "atolla-ocean": lambda: cover(ASSETS / "projects/atolla-ocean/card.jpg", "left"),
    "charity-box": lambda: contain(ASSETS / "projects/charity-box/collage.webp"),
    "octopus-girl": lambda: contain(ASSETS / "projects/octopus-girl/hero.webp"),
    # A product screenshot reads as nothing at card size; cropping to the
    # top of the page keeps its headline legible instead.
    "catch-and-keep": lambda: cover(ASSETS / "projects/flashmind/cover.png", "top"),
    "nepal-travel": lambda: contain(ASSETS / "projects/nepal-travel/hero.webp"),
}

if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    for name, build in JOBS.items():
        if name == "home":
            continue  # the home card is hand-made: client/public/og-image.png
        path = OUT / f"{name}.jpg"
        build().save(path, "JPEG", quality=88, optimize=True, progressive=True)
        print(f"{path.relative_to(ROOT)}  {path.stat().st_size // 1024} KB")
