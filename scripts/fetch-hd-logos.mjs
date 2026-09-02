import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import * as simpleIcons from "simple-icons";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "src/assets/client-logos");
const assetsDir = path.join(root, "src/assets");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Wikimedia / official SVG sources — vectors stay crisp at any size. */
const svgUrls = {
  "hapag-lloyd":
    "https://upload.wikimedia.org/wikipedia/commons/5/52/Hapag-Lloyd_Executive_Logo.svg",
  mylan: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Mylan_Logo.svg",
  quinstreet: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Quinstreet.gif",
  capgemini: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg",
  wns: "https://upload.wikimedia.org/wikipedia/commons/b/bd/WNS_Global_Services_Logo.svg",
  pimco: "https://upload.wikimedia.org/wikipedia/commons/4/49/PIMCO_Logo.svg",
  techmahindra:
    "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tech_Mahindra_New_Logo.svg",
  hero: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Hero_MotoCorp_Logo.svg",
  hdfcbank: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg",
  "hb-fuller": "https://upload.wikimedia.org/wikipedia/commons/4/4e/H.B._Fuller_logo.svg",
  puratos: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Puratos_Group_logo.svg",
  siemens: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Siemens_AG_logo.svg",
  "knorr-bremse":
    "https://static.knorr-bremse.com/shared/media/logos/knorr-bremse-logo-blue-square.svg",
};

const localSvgCopies = {
  tajhotels: "logo-taj.svg",
  bob: "logo-bob.svg",
  sbi: "logo-sbi-alt.svg",
  hexaware: "logo-hexaware.svg",
};

const simpleIconSlugs = {
  infosys: "Infosys",
  skoda: "Skoda",
  vodafone: "Vodafone",
};

const faviconDomains = {
  ashoka: "ashokabuildcon.com",
  bafna: "bafnajewellers.com",
  elpro: "elpro.com",
  gscid: "gscid.com",
  hpgas: "hindustanpetroleum.com",
  "infra-market": "infra.market",
  mdindia: "mdindiaonline.com",
  ndcc: "ndcc.in",
  "reliance-trends": "reliancetrends.com",
  shubhada: "shubhadapolymers.com",
  solitaire: "solitairehomes.in",
  spjimr: "spjimr.org",
  tejaswi: "tejaswijewellers.com",
  paranjpe: "paranjpebrothers.com",
};

const headers = {
  "User-Agent": "HouseOfKalaaLogoFetcher/1.0 (contact@houseofkalaa.com)",
  Accept: "image/svg+xml,image/png,image/*,*/*",
};

async function download(url, dest) {
  const res = await fetch(url, { headers, signal: AbortSignal.timeout(30000) });
  if (!res.ok) return false;
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 200) return false;
  fs.writeFileSync(dest, buf);
  return true;
}

function writeSimpleIcon(slug, icon) {
  const svg = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>${icon.title}</title><path fill="#${icon.hex}" d="${icon.path}"/></svg>`;
  fs.writeFileSync(path.join(outDir, `${slug}.svg`), svg);
}

async function rasterizeToSquarePng(inputPath, slug, size = 512) {
  await sharp(inputPath)
    .resize(size, size, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({ sigma: 0.8, m1: 0.5, m2: 0.25 })
    .png({ compressionLevel: 6 })
    .toFile(path.join(outDir, `${slug}.png`));
}

async function fetchFaviconPng(domain, slug) {
  const url = `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=512`;
  const res = await fetch(url, { headers, signal: AbortSignal.timeout(20000) });
  if (!res.ok) return false;
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 300) return false;
  await sharp(buf)
    .resize(512, 512, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({ sigma: 1, m1: 0.6, m2: 0.3 })
    .png()
    .toFile(path.join(outDir, `${slug}.png`));
  return true;
}

fs.mkdirSync(outDir, { recursive: true });

for (const [slug, file] of Object.entries(localSvgCopies)) {
  fs.copyFileSync(path.join(assetsDir, file), path.join(outDir, `${slug}.svg`));
  console.log(`local: ${slug}`);
}

for (const [slug, iconName] of Object.entries(simpleIconSlugs)) {
  const key = `si${iconName}`;
  const icon = simpleIcons[key];
  if (!icon) {
    console.log(`missing simple-icon: ${slug}`);
    continue;
  }
  writeSimpleIcon(slug, icon);
  console.log(`simple-icon: ${slug}`);
}

for (const [slug, url] of Object.entries(svgUrls)) {
  const ext = url.endsWith(".gif") ? ".gif" : ".svg";
  const tmp = path.join(outDir, `_tmp-${slug}${ext}`);
  const dest = path.join(outDir, `${slug}.svg`);
  await sleep(2500);
  const ok = await download(url, tmp);
  if (!ok) {
    console.log(`fail svg: ${slug}`);
    continue;
  }
  if (ext === ".gif") {
    await rasterizeToSquarePng(tmp, slug);
    fs.unlinkSync(tmp);
    console.log(`gif->png: ${slug}`);
  } else {
    fs.renameSync(tmp, dest);
    console.log(`svg: ${slug}`);
  }
}

for (const [slug, domain] of Object.entries(faviconDomains)) {
  await sleep(800);
  const ok = await fetchFaviconPng(domain, slug);
  console.log(ok ? `favicon: ${slug}` : `fail favicon: ${slug}`);
}

console.log("done");
