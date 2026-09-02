import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as simpleIcons from "simple-icons";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "src/assets/client-logos");

const clients = [
  ["Taj Hotels", "tajhotels.com", "tajhotels"],
  ["Capgemini", "capgemini.com", "capgemini"],
  ["Infosys", "infosys.com", "infosys"],
  ["Tech Mahindra", "techmahindra.com", "techmahindra"],
  ["Siemens", "siemens.com", "siemens"],
  ["SPJIMR", "spjimr.org", "spjimr"],
  ["HP Gas", "hindustanpetroleum.com", "hpgas"],
  ["State Bank of India", "sbi.co.in", "sbi"],
  ["NDCC", "ndcc.in", "ndcc"],
  ["Bank of Baroda", "bankofbaroda.in", "bob"],
  ["HDFC Bank", "hdfcbank.com", "hdfcbank"],
  ["PIMCO", "pimco.com", "pimco"],
  ["Paranjpe Brothers", "paranjpebrothers.com", "paranjpe"],
  ["Solitaire", "solitairehomes.in", "solitaire"],
  ["GSCID", "gscid.com", "gscid"],
  ["Ashoka Buildcon", "ashokabuildcon.com", "ashoka"],
  ["WNS", "wns.com", "wns"],
  ["Skoda", "skoda-auto.com", "skoda"],
  ["Reliance Trends", "reliancetrends.com", "reliance-trends"],
  ["Bafna Jewellers", "bafnajewellers.com", "bafna"],
  ["Hero", "heromotocorp.com", "hero"],
  ["Tejaswi Jewellers", "tejaswijewellers.com", "tejaswi"],
  ["ELPRC", "elpro.com", "elpro"],
  ["Hexaware", "hexaware.com", "hexaware"],
  ["Infra.Market", "infra.market", "infra-market"],
  ["Hapag-Lloyd", "hapag-lloyd.de", "hapag-lloyd"],
  ["H.B. Fuller", "hbfuller.com", "hb-fuller"],
  ["Knorr-Bremse", "knorr-bremse.com", "knorr-bremse"],
  ["Vodafone", "vodafone.com", "vodafone"],
  ["QuinStreet", "quinstreet.com", "quinstreet"],
  ["MDIndia", "mdindiaonline.com", "mdindia"],
  ["Mylan", "viatris.com", "mylan"],
  ["Puratos", "puratos.com", "puratos"],
  ["Shubhada", "shubhadapolymers.com", "shubhada"],
];

const slugOverrides = {
  "tajhotels.com": "tajhotels",
  "skoda-auto.com": "skodaauto",
  "hindustanpetroleum.com": "hindustanpetroleum",
  "sbi.co.in": "statebankofindia",
  "bankofbaroda.in": "bankofbaroda",
  "hdfcbank.com": "hdfcbank",
  "heromotocorp.com": "heromotocorp",
  "skoda-auto.com": "skoda",
  "hapag-lloyd.de": "hapaglloyd",
  "knorr-bremse.com": "knorrbremse",
  "infra.market": "inframarket",
  "viatris.com": "viatris",
  "reliancetrends.com": "reliancetrends",
  "techmahindra.com": "techmahindra",
  "ashokabuildcon.com": "ashokabuildcon",
  "hbfuller.com": "hbfuller",
  "mdindiaonline.com": null,
  "solitairehomes.in": null,
  "gscid.com": null,
  "paranjpebrothers.com": null,
  "bafnajewellers.com": null,
  "tejaswijewellers.com": null,
  "elpro.com": null,
  "shubhadapolymers.com": null,
  "ndcc.in": null,
  "spjimr.org": null,
  "quinstreet.com": "quinstreet",
};

const localSvgMap = {
  "Taj Hotels": "logo-taj.svg",
  Hexaware: "logo-hexaware.svg",
  "State Bank of India": "logo-sbi-alt.svg",
  "Bank of Baroda": "logo-bob.svg",
};

fs.mkdirSync(outDir, { recursive: true });

function findSimpleIcon(domain) {
  const override = slugOverrides[domain];
  if (override === null) return null;
  const slug = override ?? domain.replace(/\.(com|org|in|de|market)$/i, "").replace(/[.-]/g, "");
  const key = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;
  return simpleIcons[key] ?? null;
}

async function fetchBuffer(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; HOKLogoFetcher/1.0)" },
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) return null;
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 200) return null;
  return buf;
}

async function fetchAppleTouchIcon(domain) {
  const html = await fetch(`https://${domain}`, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; HOKLogoFetcher/1.0)" },
    signal: AbortSignal.timeout(15000),
    redirect: "follow",
  })
    .then((r) => (r.ok ? r.text() : ""))
    .catch(() => "");

  const patterns = [
    /<link[^>]+rel=["']apple-touch-icon["'][^>]+href=["']([^"']+)["']/i,
    /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']apple-touch-icon["']/i,
    /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i,
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (!match?.[1]) continue;
    let iconUrl = match[1];
    if (iconUrl.startsWith("//")) iconUrl = `https:${iconUrl}`;
    else if (iconUrl.startsWith("/")) iconUrl = `https://${domain}${iconUrl}`;
    else if (!/^https?:/i.test(iconUrl))
      iconUrl = `https://${domain}/${iconUrl.replace(/^\.\//, "")}`;
    const buf = await fetchBuffer(iconUrl);
    if (buf) return buf;
  }
  return null;
}

async function fetchGoogleFavicon(domain, size = 256) {
  const url = `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=${size}`;
  return fetchBuffer(url);
}

function writeSvg(icon, filePath) {
  const svg = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>${icon.title}</title><path fill="#${icon.hex}" d="${icon.path}"/></svg>`;
  fs.writeFileSync(filePath, svg);
}

async function normalizePng(input, filePath) {
  await sharp(input)
    .resize(256, 256, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(filePath);
}

const results = [];

for (const [name, domain, fileSlug] of clients) {
  const svgPath = path.join(outDir, `${fileSlug}.svg`);
  const pngPath = path.join(outDir, `${fileSlug}.png`);

  if (localSvgMap[name]) {
    const src = path.join(root, "src/assets", localSvgMap[name]);
    fs.copyFileSync(src, svgPath);
    results.push({ name, fileSlug, source: "local-svg", ok: true });
    continue;
  }

  const icon = findSimpleIcon(domain);
  if (icon) {
    writeSvg(icon, svgPath);
    results.push({ name, fileSlug, source: "simple-icons", ok: true });
    continue;
  }

  let buf =
    (await fetchAppleTouchIcon(domain)) ??
    (await fetchGoogleFavicon(domain, 256)) ??
    (await fetchGoogleFavicon(domain, 128));

  if (buf) {
    await normalizePng(buf, pngPath);
    results.push({ name, fileSlug, source: "fetched-png", ok: true });
    continue;
  }

  results.push({ name, fileSlug, source: "missing", ok: false });
}

console.log(JSON.stringify(results, null, 2));
console.log(`\nOK: ${results.filter((r) => r.ok).length}/${results.length}`);
