/**
 * Turn a real photo into all the optimized assets the site needs.
 *
 *   node scripts/process-photo.mjs "C:/path/to/your-photo.jpg"
 *
 * Produces in /public:
 *   profile.png / profile.webp / profile.avif   (1000x1000, face-centered crop)
 *   og.png                                        (1200x630 card with your face)
 *
 * Crops anchored to the top so the full head/face stays in frame.
 */
import sharp from "sharp";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const pub = path.join(here, "..", "public");

const src = process.argv[2];
if (!src || !existsSync(src)) {
  console.error("✗ Pass a valid image path:\n   node scripts/process-photo.mjs \"C:/path/to/photo.jpg\"");
  process.exit(1);
}

async function run() {
  const square = sharp(src).resize(1000, 1000, { fit: "cover", position: "top" });

  await square.clone().png({ quality: 92 }).toFile(path.join(pub, "profile.png"));
  await square.clone().webp({ quality: 85 }).toFile(path.join(pub, "profile.webp"));
  await square.clone().avif({ quality: 62 }).toFile(path.join(pub, "profile.avif"));

  // OG card: circular portrait composited onto the brand background.
  const size = 360;
  const circleMask = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/></svg>`
  );
  const circlePhoto = await sharp(src)
    .resize(size, size, { fit: "cover", position: "top" })
    .composite([{ input: circleMask, blend: "dest-in" }])
    .png()
    .toBuffer();

  const ogBg = readFileSync(path.join(pub, "og.svg"));
  await sharp(ogBg)
    .resize(1200, 630)
    .composite([{ input: circlePhoto, top: Math.round((630 - size) / 2), left: 800 }])
    .png({ quality: 92 })
    .toFile(path.join(pub, "og.png"));

  console.log("✓ Generated profile.{png,webp,avif} + og.png from", path.basename(src));
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
