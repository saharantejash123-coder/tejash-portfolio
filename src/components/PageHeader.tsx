import { Reveal, RevealWords } from "./Reveal";
import Aurora from "./Aurora";

/** Shared cinematic header for every inner page. */
export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <header className="relative overflow-hidden px-6 pb-10 pt-36 sm:pt-44">
      <Aurora />
      <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)] animate-pulse-soft" />
            {eyebrow}
          </span>
        </Reveal>
        <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
          <RevealWords text={title} />
        </h1>
        <Reveal delay={0.12}>
          <p className="max-w-2xl text-base leading-relaxed text-[var(--color-ink-soft)] sm:text-lg">
            {intro}
          </p>
        </Reveal>
      </div>
    </header>
  );
}
