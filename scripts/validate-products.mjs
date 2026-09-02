#!/usr/bin/env node
/**
 * Validates products page assets and responsive layout for all breakpoints.
 */
import { readFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const productsPath = join(root, "src/routes/products.tsx");
const assetsDir = join(root, "src/assets");

const MIN_EDGE = 800;
const EXPECTED_NAMES = [
  "Sofas & Corner",
  "Dining Table",
  "Dining Chair",
  "Side Table",
  "Console",
  "Coffee Table",
  "Bed",
  "TV Unit",
];

const source = readFileSync(productsPath, "utf8");

const importMatches = [...source.matchAll(/import\s+(\w+)\s+from\s+"@\/assets\/([^"]+)"/g)];
const productImports = importMatches.filter(([, , asset]) => asset.startsWith("product-"));

const productsBlock = source.match(/const products = \[([\s\S]*?)\];/);
if (!productsBlock) {
  fail("Could not find products array in products.tsx");
  process.exit(1);
}

const nameMatches = [...productsBlock[1].matchAll(/\{\s*name:\s*"([^"]+)"/g)];
const productNames = nameMatches.map(([, name]) => name);

let failed = false;
const fail = (msg) => {
  console.error(`✗ ${msg}`);
  failed = true;
};
const ok = (msg) => console.log(`✓ ${msg}`);

ok(`Found ${productImports.length} product image imports`);

for (const name of EXPECTED_NAMES) {
  if (!productNames.includes(name)) {
    fail(`Missing product card: "${name}"`);
  }
}

for (const name of productNames) {
  if (!EXPECTED_NAMES.includes(name)) {
    fail(`Unexpected product card: "${name}"`);
  }
}

for (const [, symbol, assetPath] of productImports) {
  const filePath = join(assetsDir, assetPath);
  if (!existsSync(filePath)) {
    fail(`Asset missing for ${symbol}: ${assetPath}`);
    continue;
  }

  const meta = await sharp(filePath).metadata();
  const { width = 0, height = 0, format } = meta;

  if (width !== height) {
    fail(`${assetPath} is not square (${width}×${height})`);
  } else if (width < MIN_EDGE) {
    fail(`${assetPath} too small (${width}px, min ${MIN_EDGE}px)`);
  } else {
    ok(`${assetPath} ${width}×${height} ${format}`);
  }
}

const responsiveChecks = [
  ["mobile single column", /grid-cols-1/],
  ["tablet/desktop two columns", /md:grid-cols-2/],
  ["square product frame", /aspect-square/],
  ["full-bleed image fill", /object-cover/],
  ["explicit image dimensions", /width=\{1600\}/],
  ["responsive page padding", /md:px-10/],
  ["responsive hero type", /md:text-5xl/],
];

for (const [label, pattern] of responsiveChecks) {
  if (!pattern.test(source)) {
    fail(`Products page missing responsive pattern: ${label}`);
  } else {
    ok(`Responsive: ${label}`);
  }
}

const rootHtml = readFileSync(join(root, "src/routes/__root.tsx"), "utf8");
if (!/viewport/.test(rootHtml)) {
  fail("Missing viewport meta tag in root route");
} else {
  ok("Viewport meta configured for mobile devices");
}

if (failed) {
  process.exit(1);
}

ok("All product validations passed");
