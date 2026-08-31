"""Re-export portfolio TIFFs and product shots at max practical quality."""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
TAJ_PUNE_TIFF = ROOT / "src/assets/portfolio/taj-pune/Taj Pune"
TAJ_PUNE_HQ = ROOT / "src/assets/portfolio/taj-pune/hq"
KORTA_SRC = ROOT / "src/assets/products/korta"

SLUG_MAP = {
    "LOBBY B 336 main": "lobby-b-336-main",
    "LOBBY A 216": "lobby-a-216",
    "BOARDROOM 186": "boardroom-186",
    "DELI 238": "deli-238",
    "GYM 479 MAIN": "gym-479-main",
    "BANQUET SOCIAL 620 1": "banquet-social-620-1",
    "BUZZ BUFFET 266 main": "buzz-buffet-266-main",
    "FACADE MAIN ROAD 358 main": "facade-main-road-358-main",
    "BUZZ B 18": "buzz-b-18",
    "BANQUET CONF 139": "banquet-conf-139",
    "FACADE MALL 164 main light option": "facade-mall-164-main-light-option",
    "BUSINESS CENTRE 63 main": "business-centre-63-main",
    "BATHROOM 3": "bathroom-3",
}


def to_rgb(img: Image.Image) -> Image.Image:
    if img.mode in ("RGBA", "P", "LA"):
        bg = Image.new("RGB", img.size, (255, 255, 255))
        if img.mode == "P":
            img = img.convert("RGBA")
        if "A" in img.mode:
            bg.paste(img, mask=img.split()[-1])
        else:
            bg.paste(img)
        return bg
    if img.mode != "RGB":
        return img.convert("RGB")
    return img


def export_taj_pune_hq() -> None:
    TAJ_PUNE_HQ.mkdir(parents=True, exist_ok=True)
    for tiff in sorted(TAJ_PUNE_TIFF.glob("*.tiff")):
        stem = tiff.stem
        slug = SLUG_MAP.get(stem, stem.replace(" ", "-").lower())
        out = TAJ_PUNE_HQ / f"{slug}.jpg"
        img = to_rgb(Image.open(tiff))
        w, h = img.size
        if max(w, h) > 3200:
            scale = 3200 / max(w, h)
            img = img.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)
        img.save(out, "JPEG", quality=96, optimize=True, subsampling=0)
        print(f"Taj Pune HQ: {out.name} ({out.stat().st_size // 1024}KB)")


def upscale_korta() -> None:
    files = sorted(KORTA_SRC.glob("*.jpeg")) + sorted(KORTA_SRC.glob("*.jpg"))
    if len(files) < 2:
        print("Korta: source files missing, skip")
        return
    for idx, src in enumerate(files[:2], start=1):
        img = to_rgb(Image.open(src))
        w, h = img.size
        target = 2000
        if max(w, h) < target:
            scale = target / max(w, h)
            img = img.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)
        out = ROOT / f"src/assets/product-korta-{idx}.jpg"
        img.save(out, "JPEG", quality=95, optimize=True)
        print(f"Korta {idx}: {out.stat().st_size // 1024}KB")


if __name__ == "__main__":
    export_taj_pune_hq()
    upscale_korta()
    print("done")
