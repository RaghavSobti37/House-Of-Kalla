import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.resolve(__dirname, "../src/assets/client-logos");
const canvas = 128;

async function normalizePng(filePath) {
  const image = sharp(filePath);
  const meta = await image.metadata();
  if (!meta.width || !meta.height) return;

  const aspect = meta.width / meta.height;
  if (aspect > 2.2 || aspect < 0.45) {
    const domain = path.basename(filePath, ".png");
    const favicon = await fetchFavicon(domain);
    if (favicon) {
      await writeSquarePng(favicon, filePath);
      console.log(`replaced wide banner: ${path.basename(filePath)}`);
      return;
    }
  }

  const trimmed = await sharp(filePath).trim({ threshold: 12 }).png().toBuffer();
  await writeSquarePng(trimmed, filePath);
  console.log(`normalized: ${path.basename(filePath)}`);
}

async function fetchFavicon(slug) {
  const domainMap = {
    bafna: "bafnajewellers.com",
    "reliance-trends": "reliancetrends.com",
    ashoka: "ashokabuildcon.com",
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
    shubhada: "shubhadapolymers.com",
    solitaire: "solitairehomes.in",
    spjimr: "spjimr.org",
    techmahindra: "techmahindra.com",
    tejaswi: "tejaswijewellers.com",
    wns: "wns.com",
  };
  const domain = domainMap[slug];
  if (!domain) return null;

  const url = `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=256`;
  const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
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
    .png()
    .toFile(filePath);
}

const files = fs.readdirSync(dir).filter((f) => f.endsWith(".png"));
for (const file of files) {
  await normalizePng(path.join(dir, file));
}

console.log("done");
