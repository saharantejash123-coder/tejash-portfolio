# Tejash Saharan — Personal Website

A world-class, interactive personal website and digital identity for **Tejash Saharan**, a 14-year-old student developer from Sahwa, Churu, Rajasthan, India.

> *"Welcome to my digital world."*

Not a template portfolio — a living, animated experience built to tell a story.

## ✨ Highlights

- **9 pages**: Home, About, My Story, Projects, Skills, Achievements, Interests, Goals & Vision, Contact
- **3D hero** — an interactive energy sphere + floating objects (Three.js / React Three Fiber)
- **Elite motion** — Framer Motion reveals, magnetic buttons, tilt cards, scroll-linked timeline, page transitions, animated gradients
- **Lenis** smooth scrolling + a cursor glow
- **Bright, futuristic design** — white base, electric-blue / orange / green accents, glassmorphism
- **Fully responsive**, accessible (WCAG-minded, reduced-motion aware, keyboard-friendly)
- **SEO-ready** — metadata, Open Graph, Twitter cards, JSON-LD structured data, `sitemap.xml`, `robots.txt`

## 🧱 Tech Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · Three.js · React Three Fiber · drei · Lenis · Lucide React

## 🚀 Getting started

```bash
npm install         # install dependencies
npm run dev         # start the dev server (Turbopack) → http://localhost:3000
npm run build       # production build (Turbopack)
npm run build:webpack  # production build (webpack fallback)
npm run start       # serve the production build
npm run gen:images  # regenerate profile.{png,webp,avif} + og.png from /scripts
```

## 🖼️ Replace the profile photo

The site currently ships a **placeholder portrait**. To use the real photo:

1. Save the photo (≈1000×1000, square) as **`public/profile.webp`** (overwrite the placeholder).
2. Optionally add `public/profile.png` / `public/profile.avif` too — or just run
   `npm run gen:images` after dropping a square source in `scripts/`.
3. That's it — the hero portrait, About page, identity card, and structured data all
   read from `/profile.webp` automatically.

## ✏️ Editing content

**All text lives in one place:** [`src/data/site.ts`](src/data/site.ts).
Update the profile, story, projects, skills, achievements, interests, and goals there — the whole site updates automatically.

### Adding a certificate
1. Drop the image into `public/placeholders/` (or `public/`).
2. Add a new object to the `achievements` array in `src/data/site.ts`.
   The Achievements page and the reusable `<CertificateCard />` handle the rest.

## 📁 Structure

```
src/
  app/            # routes (one folder per page) + layout, sitemap, robots
  components/     # reusable UI + animation + 3D components
    three/        # the WebGL hero scene (loaded client-side only)
  data/site.ts    # 🔑 single source of truth for all content
public/           # favicon, OG image, placeholder certificate
```

---

Built with curiosity in Rajasthan, India. 🇮🇳
