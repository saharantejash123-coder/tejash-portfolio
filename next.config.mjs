import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Hide the Next.js dev indicator/logo badge in the corner.
  devIndicators: false,
  // Allow building into an alternate dir (so a running dev server isn't disturbed).
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // Three.js ships untranspiled ESM examples; let Next transpile them.
  transpilePackages: ["three"],
  // Pin the workspace root (a stray lockfile in the home dir was being picked up).
  outputFileTracingRoot: __dirname,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Tree-shake icon/animation libs so only used symbols ship.
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
