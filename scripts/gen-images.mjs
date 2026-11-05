/**
 * Generates optimized raster assets from source SVGs using sharp.
 *
 *   node scripts/gen-images.mjs
 *
 * Outputs:
 *   public/profile.png  / .webp / .avif   (1000x1000 portrait)
 *   public/og.png                          (1200x630 social card)
 *
 * ▶ To use the REAL photo of Tejash: replace public/profile.webp (and/or
 *   profile.png) with the actual image at ~1000x1000. next/image handles the
 *   rest. No need to re-run this script unless you want fresh avif/png too.
 */
import sharp from "sharp";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const pub = path.join(here, "..", "public");

async function run() {
  const portrait = readFileSync(path.join(here, "_portrait-src.svg"));
  const og = readFileSync(path.join(pub, "og.svg"));

  // Portrait → png / webp / avif
  await sharp(portrait).resize(1000, 1000).png({ quality: 90 }).toFile(path.join(pub, "profile.png"));
  await sharp(portrait).resize(1000, 1000).webp({ quality: 82 }).toFile(path.join(pub, "profile.webp"));
  await sharp(portrait).resize(1000, 1000).avif({ quality: 60 }).toFile(path.join(pub, "profile.avif"));

  // OG card → png (social platforms need raster, not svg)
  await sharp(og).resize(1200, 630).png({ quality: 90 }).toFile(path.join(pub, "og.png"));

  console.log("✓ Generated profile.{png,webp,avif} and og.png in /public");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
