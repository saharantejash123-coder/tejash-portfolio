import { Reveal, RevealWords } from "./Reveal";

/** Consistent eyebrow + title + intro used across pages. */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-4 ${alignCls} max-w-2xl`}>
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)] animate-pulse-soft" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
        <RevealWords text={title} />
      </h2>
      {intro && (
        <Reveal delay={0.1}>
          <p className="text-base leading-relaxed text-[var(--color-ink-soft)] sm:text-lg">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
