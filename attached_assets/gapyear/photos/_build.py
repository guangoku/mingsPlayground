from PIL import Image, ImageDraw, ImageOps
import math, os, subprocess, tempfile

SRC = '/Users/mingyunguan/projects/guanPersonalWebsite/gapYearSummaryImages'
OUT = 'attached_assets/gapyear/photos'
CREAM = (243, 238, 218)
VERM = (199, 80, 42)

MAP = {
    'IMG_1787.HEIC': 'friends-meal.jpg',
    'FENL8071.JPG':  'friends-bike.jpg',
    'IMG_1019.HEIC': 'friends-kids.jpg',
    'IMG_1017.HEIC': 'friends-afternoon.jpg',
    'IMG_0033.HEIC': 'friends-cat.jpg',
    'IMG_0028.HEIC': 'friends-game.jpg',
    'IMG_5039.HEIC': 'friends-boat.jpg',
    'IMG_0363.HEIC': 'planetree-spring.jpg',
    'IMG_0452.HEIC': 'planetree-dusk.jpg',
    'IMG_0361.HEIC': 'planetree-winter.jpg',
    'IMG_0408.heic': 'planetree-bark.jpg',
    'IMG_0453.HEIC': 'planetree-hug.jpg',
}

# normalized face centres and radii (fractions of width / height)
FACES = {
    'friends-meal.jpg':      [(0.463, 0.248, 0.062, 0.092), (0.668, 0.230, 0.062, 0.092)],
    'friends-bike.jpg':      [(0.331, 0.487, 0.056, 0.048), (0.479, 0.462, 0.056, 0.048),
                              (0.583, 0.499, 0.056, 0.048), (0.466, 0.541, 0.052, 0.045)],
    'friends-kids.jpg':      [(0.472, 0.185, 0.082, 0.125), (0.352, 0.640, 0.092, 0.152),
                              (0.641, 0.638, 0.094, 0.152)],
    'friends-afternoon.jpg': [(0.245, 0.437, 0.095, 0.080), (0.585, 0.480, 0.098, 0.082)],
    'friends-boat.jpg':      [(0.245, 0.632, 0.112, 0.162), (0.060, 0.638, 0.048, 0.078),
                              (0.518, 0.590, 0.034, 0.054), (0.922, 0.642, 0.038, 0.064)],
    'planetree-hug.jpg':     [(0.578, 0.474, 0.050, 0.043)],
}

def blob(draw, cx, cy, rx, ry, seed):
    """A hand-drawn looking sticker that hides a face."""
    pts = []
    n = 24
    for i in range(n):
        a = 2 * math.pi * i / n
        w = 1 + 0.08 * math.sin(a * 3 + seed) + 0.05 * math.cos(a * 5 - seed)
        pts.append((cx + rx * w * math.cos(a), cy + ry * w * math.sin(a)))
    draw.polygon(pts, fill=CREAM)
    draw.line(pts + [pts[0]], fill=VERM, width=max(2, int(min(rx, ry) * 0.10)))

tmp = tempfile.mkdtemp()
for src, name in MAP.items():
    path = os.path.join(SRC, src)
    if src.lower().endswith('.heic'):
        jpg = os.path.join(tmp, name)
        subprocess.run(['sips', '-s', 'format', 'jpeg', path, '--out', jpg], capture_output=True, check=True)
        path = jpg
    im = ImageOps.exif_transpose(Image.open(path)).convert('RGB')
    im.thumbnail((1100, 1100), Image.LANCZOS)
    W, H = im.size
    draw = ImageDraw.Draw(im)
    for i, (fx, fy, frx, fry) in enumerate(FACES.get(name, [])):
        blob(draw, fx * W, fy * H, frx * W, fry * H, seed=i * 1.7)
    im.save(os.path.join(OUT, name), quality=82, optimize=True, progressive=True)
    print(f'{name}: {W}x{H}, {len(FACES.get(name, []))} covered')
