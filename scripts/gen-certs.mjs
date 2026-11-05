/**
 * Generates branded certificate thumbnails into /public/certificates.
 *
 *   node scripts/gen-certs.mjs   (or: npm run gen:certs)
 *
 * These are clean, themed placeholders that mirror each real certificate's
 * details. ➜ To use an actual scan instead, drop e.g. web-development.webp
 * into /public/certificates (same filename) — it overrides the generated one.
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { mkdirSync } from "node:fs";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(here, "..", "public", "certificates");
mkdirSync(outDir, { recursive: true });

const THEME = {
  brand: ["#2b6bff", "#1747d6", "#eef3ff"],
  leaf: ["#10c98a", "#0aa3c9", "#ecfdf6"],
  gold: ["#c79a3c", "#8a6a23", "#fbf6e9"],
};

const certs = [
  { slug: "republic-day", theme: "gold", kind: "Certificate of Excellence", title: "Republic Day Competition 2026", issuer: "CodeYogi", award: "Most Creative Project", date: "Jan 2026" },
  { slug: "web-development", theme: "brand", kind: "Certificate of Completion", title: "Web Development", issuer: "CodeYogi", award: "Outstanding", date: "Oct 2025" },
  { slug: "mix-move-ai", theme: "leaf", kind: "Hour of AI", title: "Mix & Move with AI", issuer: "Code.org", award: "", date: "2025" },
  { slug: "ai-basics", theme: "brand", kind: "Hour of AI", title: "AI Basics Activity", issuer: "CodeYogi × Code.org", award: "", date: "2025" },
  { slug: "ai-for-oceans", theme: "leaf", kind: "Hour of Code", title: "AI for Oceans", issuer: "Code.org", award: "", date: "2025" },
  { slug: "music-lab", theme: "gold", kind: "Hour of Code", title: "Music Lab: Jam Session", issuer: "Code.org", award: "", date: "2025" },
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function svg(c) {
  const [c1, c2, tint] = THEME[c.theme];
  const W = 800, H = 560;
  // wrap long titles onto two lines
  const words = c.title.split(" ");
  let l1 = "", l2 = "";
  for (const w of words) {
    if ((l1 + " " + w).trim().length <= 22 || !l1) l1 = (l1 + " " + w).trim();
    else l2 = (l2 + " " + w).trim();
  }
  const titleLines = l2
    ? `<text x="64" y="300" font-size="44" font-weight="800" fill="#0b1020">${esc(l1)}</text>
       <text x="64" y="352" font-size="44" font-weight="800" fill="#0b1020">${esc(l2)}</text>`
    : `<text x="64" y="320" font-size="46" font-weight="800" fill="#0b1020">${esc(l1)}</text>`;

  const awardChip = c.award
    ? `<g transform="translate(64,${l2 ? 392 : 372})">
         <rect x="0" y="0" width="${120 + c.award.length * 11}" height="42" rx="21" fill="${c1}" opacity="0.12"/>
         <circle cx="26" cy="21" r="7" fill="${c1}"/>
         <text x="46" y="28" font-size="19" font-weight="700" fill="${c2}">${esc(c.award)}</text>
       </g>`
    : "";

  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="'Segoe UI',Arial,sans-serif">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
    <rect width="${W}" height="${H}" fill="${tint}"/>
    <rect x="20" y="20" width="${W - 40}" height="${H - 40}" rx="18" fill="#ffffff" stroke="#e4e9f4" stroke-width="2"/>
    <rect x="20" y="20" width="${W - 40}" height="12" rx="6" fill="url(#g)"/>
    <!-- seal -->
    <g transform="translate(${W - 120},${H - 130})">
      <circle r="56" fill="url(#g)" opacity="0.12"/>
      <circle r="40" fill="none" stroke="url(#g)" stroke-width="4"/>
      <path d="M-14 2 l10 10 l20 -22" fill="none" stroke="${c1}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <!-- issuer -->
    <text x="64" y="86" font-size="22" font-weight="800" letter-spacing="1" fill="${c2}">${esc(c.issuer)}</text>
    <text x="64" y="150" font-size="20" letter-spacing="3" fill="#8a93ad">${esc(c.kind.toUpperCase())}</text>
    <text x="64" y="210" font-size="18" fill="#8a93ad">Awarded to</text>
    <text x="64" y="248" font-size="34" font-weight="800" fill="${c1}">Tejash Saharan</text>
    ${titleLines}
    ${awardChip}
    <line x1="64" y1="${H - 70}" x2="300" y2="${H - 70}" stroke="#e4e9f4" stroke-width="2"/>
    <text x="64" y="${H - 44}" font-size="18" fill="#6b7490">${esc(c.date)}</text>
  </svg>`);
}

async function run() {
  for (const c of certs) {
    await sharp(svg(c)).resize(800, 560).webp({ quality: 88 }).toFile(path.join(outDir, `${c.slug}.webp`));
  }
  console.log(`✓ Generated ${certs.length} certificate thumbnails in /public/certificates`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
