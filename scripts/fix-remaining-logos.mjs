import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import * as si from "simple-icons";

const out = "src/assets/client-logos";
const headers = { "User-Agent": "Mozilla/5.0" };

function writeSvg(slug, icon) {
  const svg = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#${icon.hex}" d="${icon.path}"/></svg>`;
  fs.writeFileSync(path.join(out, `${slug}.svg`), svg);
  console.log("si", slug);
}

writeSvg("siemens", si.siSiemens);

const urls = {
  techmahindra: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Tech_Mahindra_Logo.svg",
  hero: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Hero_MotoCorp_Logo.svg",
};

for (const [slug, url] of Object.entries(urls)) {
  await new Promise((r) => setTimeout(r, 3000));
  const res = await fetch(url, { headers });
  if (!res.ok) {
    console.log("fail", slug, res.status);
    continue;
  }
  fs.writeFileSync(path.join(out, `${slug}.svg`), Buffer.from(await res.arrayBuffer()));
  console.log("svg", slug);
}

const domains = {
  ashoka: "ashokabuildcon.com",
  elpro: "elpro.com",
  "infra-market": "infra.market",
  "reliance-trends": "reliancetrends.com",
  solitaire: "solitairehomes.in",
  spjimr: "spjimr.org",
  tejaswi: "tejaswijewellers.com",
  puratos: "puratos.com",
  "hb-fuller": "hbfuller.com",
};

async function saveIcon(buf, slug) {
  await sharp(buf)
    .resize(512, 512, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({ sigma: 1 })
    .png()
    .toFile(path.join(out, `${slug}.png`));
}

for (const [slug, domain] of Object.entries(domains)) {
  await new Promise((r) => setTimeout(r, 1200));
  let html = "";
  try {
    html = await fetch(`https://${domain}`, { headers, redirect: "follow" }).then((r) =>
      r.ok ? r.text() : "",
    );
  } catch {
    /* ignore */
  }

  const patterns = [
    /<link[^>]+rel=["']apple-touch-icon["'][^>]+href=["']([^"']+)["']/i,
    /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']apple-touch-icon["']/i,
    /<link[^>]+rel=["']icon["'][^>]+type=["']image\/svg\+xml["'][^>]+href=["']([^"']+)["']/i,
  ];

  let saved = false;
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (!match?.[1]) continue;
    let iconUrl = match[1];
    if (iconUrl.startsWith("//")) iconUrl = `https:${iconUrl}`;
    else if (iconUrl.startsWith("/")) iconUrl = `https://${domain}${iconUrl}`;
    else if (!/^https?:/i.test(iconUrl)) iconUrl = `https://${domain}/${iconUrl.replace(/^\.\//, "")}`;

    const res = await fetch(iconUrl, { headers });
    if (!res.ok) continue;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 200) continue;

    if (iconUrl.endsWith(".svg")) {
      fs.writeFileSync(path.join(out, `${slug}.svg`), buf);
      console.log("site-svg", slug);
    } else {
      await saveIcon(buf, slug);
      console.log("site-png", slug);
    }
    saved = true;
    break;
  }

  if (saved) continue;

  const favUrl = `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=512`;
  const res = await fetch(favUrl, { headers });
  if (res.ok) {
    await saveIcon(Buffer.from(await res.arrayBuffer()), slug);
    console.log("fav", slug);
  } else {
    console.log("fail", slug);
  }
}

console.log("done");
