import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import Aurora from "@/components/Aurora";
import MagneticButton from "@/components/MagneticButton";

export default function NotFound() {
  return (
    <section className="relative grid min-h-screen place-items-center overflow-hidden px-6">
      <Aurora />
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden />
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="font-display text-[7rem] font-black leading-none text-gradient sm:text-[11rem]">
          404
        </h1>
        <p className="max-w-md text-lg text-[var(--color-ink-soft)]">
          This page wandered off the path. Let&apos;s get you back to the journey.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <MagneticButton href="/">
            <Home size={16} /> Back home
          </MagneticButton>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 rounded-full px-5 py-3.5 text-sm font-semibold text-[var(--color-brand)] hover:underline"
          >
            <ArrowLeft size={15} /> See projects
          </Link>
        </div>
      </div>
    </section>
  );
}
