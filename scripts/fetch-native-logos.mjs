import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const out = "src/assets/client-logos";
const headers = { "User-Agent": "Mozilla/5.0 (compatible; LogoFetcher/1.0)" };

/** Direct high-res logo URLs discovered from official sites / Wikimedia. */
const direct = {
  ashoka: "https://www.ashokabuildcon.com/images/ashoka-buildcon-limited-logo.png",
  techmahindra:
    "https://www.techmahindra.com/content/dam/techm/global/logos/tech-mahindra-logo.png",
  hero: "https://www.heromotocorp.com/content/dam/hero-aem/hero-logo.png",
  mdindia: "https://www.mdindiaonline.com/images/logo.png",
  shubhada: "https://www.shubhadapolymers.com/images/logo.png",
  gscid: "https://www.gscid.com/images/logo.png",
  solitaire: "https://www.solitairehomes.in/assets/images/logo.png",
  spjimr: "https://www.spjimr.org/wp-content/themes/spjimr/images/logo.png",
  bafna: "https://www.bafnajewellers.com/images/logo.png",
  tejaswi: "https://www.tejaswijewellers.com/images/logo.png",
  elpro: "https://www.elpro.com/images/logo.png",
  ndcc: "https://www.ndcc.in/images/logo.png",
  puratos: "https://www.puratos.com/static/version1730000000/frontend/Puratos/default/en_US/images/logo.svg",
  "infra-market": "https://infra.market/assets/logo.svg",
  hpgas: "https://www.hindustanpetroleum.com/images/HP-logo.png",
  "reliance-trends": "https://www.reliancetrends.com/resources/images/logo.png",
  "hb-fuller": "https://www.hbfuller.com/-/media/project/hbfuller/hbfuller/logo/hbfuller-logo.svg",
};

async function download(url) {
  const res = await fetch(url, { headers, signal: AbortSignal.timeout(25000), redirect: "follow" });
  if (!res.ok) return null;
  const buf = Buffer.from(await res.arrayBuffer());
  return buf.length > 500 ? buf : null;
}

async function saveLogo(slug, buf) {
  const isSvg = buf.slice(0, 200).toString("utf8").includes("<svg");
  if (isSvg) {
    fs.writeFileSync(path.join(out, `${slug}.svg`), buf);
    console.log(`svg ${slug}`);
    return;
  }
  const meta = await sharp(buf).metadata();
  const maxSide = Math.max(meta.width ?? 0, meta.height ?? 0);
  const pipeline = sharp(buf);
  if (maxSide > 1024) {
    pipeline.resize(1024, 1024, { fit: "inside", withoutEnlargement: true });
  }
  await pipeline
    .png({ compressionLevel: 6 })
    .toFile(path.join(out, `${slug}.png`));
  console.log(`png ${slug} (${meta.width}x${meta.height})`);
}

async function scrapeLogo(domain) {
  const html = await fetch(`https://${domain}`, { headers, redirect: "follow" }).then((r) =>
    r.ok ? r.text() : "",
  );
  const candidates = [
    ...html.matchAll(/<img[^>]+src=["']([^"']*logo[^"']*)["']/gi),
    ...html.matchAll(/<link[^>]+rel=["']apple-touch-icon["'][^>]+href=["']([^"']+)["']/gi),
  ].map((m) => m[1]);

  for (const raw of candidates) {
    let url = raw;
    if (url.startsWith("//")) url = `https:${url}`;
    else if (url.startsWith("/")) url = `https://${domain}${url}`;
    else if (!/^https?:/i.test(url)) url = `https://${domain}/${url.replace(/^\.\//, "")}`;

    const buf = await download(url);
    if (buf) return buf;
  }
  return null;
}

const domains = {
  ashoka: "ashokabuildcon.com",
  techmahindra: "techmahindra.com",
  hero: "heromotocorp.com",
  mdindia: "mdindiaonline.com",
  shubhada: "shubhadapolymers.com",
  gscid: "gscid.com",
  solitaire: "solitairehomes.in",
  spjimr: "spjimr.org",
  bafna: "bafnajewellers.com",
  tejaswi: "tejaswijewellers.com",
  elpro: "elpro.com",
  ndcc: "ndcc.in",
  puratos: "puratos.com",
  "infra-market": "infra.market",
  hpgas: "hindustanpetroleum.com",
  "reliance-trends": "reliancetrends.com",
  "hb-fuller": "hbfuller.com",
  quinstreet: "quinstreet.com",
  "infra-market": "infra.market",
};

for (const [slug, url] of Object.entries(direct)) {
  await new Promise((r) => setTimeout(r, 800));
  let buf = await download(url);
  if (!buf && domains[slug]) buf = await scrapeLogo(domains[slug]);
  if (!buf) {
    console.log(`fail ${slug}`);
    continue;
  }
  await saveLogo(slug, buf);
}

console.log("done");
