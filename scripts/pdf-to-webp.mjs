/**
 * Rasterizes the first page of every PDF in /public/certificates into a
 * matching .webp (so next/image can display them).
 *
 *   node scripts/pdf-to-webp.mjs   (or: npm run certs:pdf)
 */
import { pdf } from "pdf-to-img";
import sharp from "sharp";
import { readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(here, "..", "public", "certificates");

async function run() {
  const pdfs = readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".pdf"));
  if (!pdfs.length) {
    console.log("No PDFs in /public/certificates.");
    return;
  }
  for (const file of pdfs) {
    const base = file.replace(/\.pdf$/i, "");
    const doc = await pdf(path.join(dir, file), { scale: 2.5 });
    const firstPage = await doc.getPage(1); // PNG buffer
    await sharp(firstPage)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 86 })
      .toFile(path.join(dir, `${base}.webp`));
    console.log(`✓ ${file} → ${base}.webp`);
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
