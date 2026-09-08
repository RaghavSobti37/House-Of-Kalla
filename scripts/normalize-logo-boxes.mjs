/**
 * Trim dead padding from client logos, then place each mark centered
 * in a uniform transparent square (512×512) so marquee boxes match.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.resolve(__dirname, "../src/assets/client-logos");
const SIZE = 512;
const PAD = 24; // small inset so marks don't touch box edge

/** Slugs currently imported by src/lib/client-logos.ts */
const used = [
  "tajhotels",
  "capgemini",
  "infosys",
  "techmahindra",
  "siemens",
  "spjimr",
  "hpgas",
  "sbi",
  "ndcc",
  "bob",
  "hdfcbank",
  "pimco",
  "paranjpe",
  "solitaire",
  "gscid",
  "ashoka",
  "wns",
  "skoda",
  "reliance-trends",
  "bafna",
  "hero",
  "tejaswi",
  "elpro",
  "hexaware",
  "infra-market",
  "hapag-lloyd",
  "hb-fuller",
  "knorr-bremse",
  "vodafone",
  "quinstreet",
  "mdindia",
  "mylan",
  "puratos",
  "shubhada",
];

function findSource(slug) {
  // Prefer existing PNG; fall back to SVG
  for (const ext of [".png", ".svg", ".webp", ".jpg", ".jpeg"]) {
    const p = path.join(dir, `${slug}${ext}`);
    if (fs.existsSync(p)) return p;
  }
  return null;
}

async function normalizeOne(slug) {
  const src = findSource(slug);
  if (!src) {
    console.log(`missing: ${slug}`);
    return;
  }

  const input = sharp(src, { density: 300 });
  const meta = await input.metadata();

  // Flatten near-white / transparent empty margins via trim, then square.
  // threshold: treat near-transparent + near-white as padding to remove.
  let trimmed;
  try {
    trimmed = await sharp(src, { density: 300 })
      .ensureAlpha()
      .trim({ threshold: 12 })
      .png()
      .toBuffer();
  } catch {
    // All-one-color edge cases — skip trim
    trimmed = await sharp(src, { density: 300 }).ensureAlpha().png().toBuffer();
  }

  const trimMeta = await sharp(trimmed).metadata();
  const inner = SIZE - PAD * 2;

  const fitted = await sharp(trimmed)
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
      withoutEnlargement: false,
    })
    .png()
    .toBuffer();

  const outPath = path.join(dir, `${slug}.png`);
  await sharp({
    create: {
      width: SIZE,
      height: SIZE,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: fitted, gravity: "centre" }])
    .png({ compressionLevel: 6 })
    .toFile(outPath);

  console.log(
    `ok ${slug}: ${meta.width}x${meta.height} → trim ${trimMeta.width}x${trimMeta.height} → ${SIZE}x${SIZE}`,
  );
}

for (const slug of used) {
  await normalizeOne(slug);
}
console.log("done");
