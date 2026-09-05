import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const imagesRoot = path.join(projectRoot, "public", "images");

async function loadEnvLocal() {
  const envPath = path.join(projectRoot, ".env.local");
  const raw = await readFile(envPath, "utf-8");
  for (const line of raw.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

// category: "hero" | "services" | "industries" | "team" | "articles"
// orientation: "landscape" | "portrait"
const items = [
  // Hero
  { category: "hero", slug: "hero", query: "modern accounting office desk with laptop and calculator", orientation: "landscape" },

  // Services (10)
  { category: "services", slug: "individual-tax-preparation", query: "person reviewing tax documents at home desk", orientation: "landscape" },
  { category: "services", slug: "tax-planning", query: "financial advisor meeting with client at desk", orientation: "landscape" },
  { category: "services", slug: "business-tax-returns", query: "small business owner reviewing paperwork in office", orientation: "landscape" },
  { category: "services", slug: "bookkeeping", query: "bookkeeper working on laptop surrounded by receipts", orientation: "landscape" },
  { category: "services", slug: "payroll", query: "office manager reviewing payroll paperwork", orientation: "landscape" },
  { category: "services", slug: "cfo-advisory", query: "business team reviewing financial charts in meeting", orientation: "landscape" },
  { category: "services", slug: "irs-representation", query: "person reading official letter looking concerned", orientation: "landscape" },
  { category: "services", slug: "entity-formation", query: "two business partners shaking hands in office", orientation: "landscape" },
  { category: "services", slug: "sales-tax-compliance", query: "warehouse worker scanning shipping boxes", orientation: "landscape" },
  { category: "services", slug: "estate-and-trust", query: "elderly couple reviewing documents with advisor", orientation: "landscape" },

  // Industries (6)
  { category: "industries", slug: "real-estate-and-short-term-rentals", query: "modern vacation rental living room interior", orientation: "landscape" },
  { category: "industries", slug: "medical-and-dental-practices", query: "dental clinic interior with chair and equipment", orientation: "landscape" },
  { category: "industries", slug: "restaurants-and-hospitality", query: "commercial kitchen chef cooking service", orientation: "landscape" },
  { category: "industries", slug: "construction-and-trades", query: "construction worker on job site with tools", orientation: "landscape" },
  { category: "industries", slug: "ecommerce-and-saas", query: "startup team working on laptops in modern office", orientation: "landscape" },
  { category: "industries", slug: "nonprofits", query: "volunteers organizing donation boxes at charity", orientation: "landscape" },

  // Team portraits (6) — portrait orientation
  { category: "team", slug: "sarah-whitfield", query: "professional businesswoman headshot smiling", orientation: "portrait" },
  { category: "team", slug: "marcus-odei", query: "professional businessman headshot smiling", orientation: "portrait" },
  { category: "team", slug: "elena-park", query: "professional woman headshot office attire", orientation: "portrait" },
  { category: "team", slug: "david-holloway", query: "middle aged man headshot beard portrait", orientation: "portrait" },
  { category: "team", slug: "priya-nair", query: "professional businesswoman headshot confident", orientation: "portrait" },
  { category: "team", slug: "james-calloway", query: "professional man headshot friendly office", orientation: "portrait" },

  // Articles (4)
  { category: "articles", slug: "s-corp-election-math", query: "calculator and tax documents on desk", orientation: "landscape" },
  { category: "articles", slug: "what-triggers-an-irs-notice", query: "person opening mail envelope looking concerned", orientation: "landscape" },
  { category: "articles", slug: "quarterly-estimates-stop-the-april-surprise", query: "calendar and financial planning on desk", orientation: "landscape" },
  { category: "articles", slug: "bookkeeping-cleanup-cost-of-neglect", query: "messy desk with receipts and paperwork", orientation: "landscape" },

  // Standalone page banners (3)
  { category: "pages", slug: "careers", query: "small team meeting around table discussion", orientation: "landscape" },
  { category: "pages", slug: "privacy", query: "laptop with padlock data security", orientation: "landscape" },
  { category: "pages", slug: "terms", query: "reviewing legal contract document with pen", orientation: "landscape" },
];

async function searchPexels(apiKey, query, orientation) {
  const url = new URL("https://api.pexels.com/v1/search");
  url.searchParams.set("query", query);
  url.searchParams.set("orientation", orientation);
  url.searchParams.set("per_page", "1");

  const res = await fetch(url, { headers: { Authorization: apiKey } });
  if (!res.ok) {
    throw new Error(`Pexels search failed for "${query}": ${res.status} ${res.statusText}`);
  }
  const data = await res.json();
  const photo = data.photos?.[0];
  if (!photo) {
    throw new Error(`No Pexels results for query: "${query}"`);
  }
  return photo;
}

async function downloadImage(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to download image from ${url}: ${res.status} ${res.statusText}`);
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  await writeFile(destPath, buffer);
}

async function main() {
  await loadEnvLocal();
  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) {
    throw new Error("PEXELS_API_KEY not found in .env.local");
  }

  const manifest = {};

  for (const item of items) {
    const dir = path.join(imagesRoot, item.category);
    await mkdir(dir, { recursive: true });

    console.log(`Searching: [${item.category}/${item.slug}] "${item.query}" (${item.orientation})`);
    const photo = await searchPexels(apiKey, item.query, item.orientation);

    const relPath = `/images/${item.category}/${item.slug}.jpg`;
    const destPath = path.join(imagesRoot, item.category, `${item.slug}.jpg`);
    await downloadImage(photo.src.large, destPath);
    console.log(`  Saved ${relPath} (photo by ${photo.photographer})`);

    manifest[`${item.category}/${item.slug}`] = {
      path: relPath,
      photographer: photo.photographer,
      pexelsUrl: photo.url,
    };

    // stay well under Pexels rate limits
    await new Promise((resolve) => setTimeout(resolve, 300));
  }

  const manifestPath = path.join(imagesRoot, "manifest.json");
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`\nWrote manifest for ${Object.keys(manifest).length} images to ${manifestPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
