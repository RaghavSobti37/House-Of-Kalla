import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "src/assets/client-logos");
const assetsDir = path.join(root, "src/assets");
const canvas = 512;

const pngSlugs = {
  ashoka: "ashokabuildcon.com",
  bafna: "bafnajewellers.com",
  capgemini: "capgemini.com",
  elpro: "elpro.com",
  gscid: "gscid.com",
  "hapag-lloyd": "hapag-lloyd.de",
  "hb-fuller": "hbfuller.com",
  hero: "heromotocorp.com",
  hpgas: "hindustanpetroleum.com",
  "infra-market": "infra.market",
  mdindia: "mdindiaonline.com",
  mylan: "viatris.com",
  ndcc: "ndcc.in",
  pimco: "pimco.com",
  puratos: "puratos.com",
  quinstreet: "quinstreet.com",
  "reliance-trends": "reliancetrends.com",
  shubhada: "shubhadapolymers.com",
  solitaire: "solitairehomes.in",
  spjimr: "spjimr.org",
  techmahindra: "techmahindra.com",
  tejaswi: "tejaswijewellers.com",
  wns: "wns.com",
};

const svgCopies = {
  tajhotels: "logo-taj.svg",
  bob: "logo-bob.svg",
  sbi: "logo-sbi-alt.svg",
  hexaware: "logo-hexaware.svg",
};

async function fetchFavicon(domain) {
  const url = `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=${canvas}`;
  const res = await fetch(url, { signal: AbortSignal.timeout(20000) });
  if (!res.ok) return null;
  const buf = Buffer.from(await res.arrayBuffer());
  return buf.length > 300 ? buf : null;
}

async function writeSquarePng(input, filePath) {
  await sharp(input)
    .resize(canvas, canvas, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .png({ compressionLevel: 6 })
    .toFile(filePath);
}

for (const [slug, file] of Object.entries(svgCopies)) {
  const src = path.join(assetsDir, file);
  const dest = path.join(outDir, `${slug}.svg`);
  fs.copyFileSync(src, dest);
  console.log(`svg: ${slug}`);
}

for (const [slug, domain] of Object.entries(pngSlugs)) {
  const buf = await fetchFavicon(domain);
  if (!buf) {
    console.log(`skip: ${slug}`);
    continue;
  }
  await writeSquarePng(buf, path.join(outDir, `${slug}.png`));
  console.log(`png: ${slug}`);
}

console.log("done");
