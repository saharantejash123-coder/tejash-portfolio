import type { Metadata } from "next";
import { MapPin, Rocket, BookOpen, Star, Telescope } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import GlowCard from "@/components/GlowCard";
import MagneticButton from "@/components/MagneticButton";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { goals } from "@/data/site";

export const metadata: Metadata = {
  title: "Goals & Vision",
  description:
    "Where Tejash Saharan is today, where he wants to be, what he wants to learn, and his long-term ambitions as a young developer.",
};

export default function GoalsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Goals & Vision"
        title="Where I'm headed."
        intro="A clear direction matters. Here's an honest look at where I am, where I'm going, and the future I'm working toward."
      />

      {/* Today vs Future */}
      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          <Reveal>
            <GlowCard tone="brand" className="h-full">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[color-mix(in_srgb,var(--color-brand)_14%,transparent)] text-[var(--color-brand)]">
                <MapPin size={22} />
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold">Where I am today</h2>
              <p className="mt-2 leading-relaxed text-[var(--color-ink-soft)]">{goals.today}</p>
            </GlowCard>
          </Reveal>
          <Reveal delay={0.1}>
            <GlowCard tone="accent" className="h-full">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[color-mix(in_srgb,var(--color-accent)_14%,transparent)] text-[var(--color-accent)]">
                <Rocket size={22} />
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold">Where I want to be</h2>
              <p className="mt-2 leading-relaxed text-[var(--color-ink-soft)]">{goals.future}</p>
            </GlowCard>
          </Reveal>
        </div>
      </section>

      {/* What I want to learn */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold">
              <BookOpen className="text-[var(--color-leaf)]" size={22} /> What I want to learn
            </h2>
          </Reveal>
          <RevealGroup className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {goals.toLearn.map((item, i) => (
              <RevealItem key={item}>
                <div className="group flex h-full flex-col gap-3 rounded-2xl card-soft p-6 transition-transform duration-300 hover:-translate-y-1">
                  <span className="font-display text-3xl font-black text-gradient">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-semibold">{item}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Long-term ambitions */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold">
              <Star className="text-[var(--color-brand)]" size={22} /> Long-term ambitions
            </h2>
          </Reveal>
          <RevealGroup className="grid gap-3">
            {goals.ambitions.map((a) => (
              <RevealItem key={a}>
                <div className="flex items-start gap-4 rounded-2xl glass p-5 transition-transform duration-300 hover:translate-x-1">
                  <Star size={18} className="mt-1 shrink-0 text-[var(--color-accent)]" />
                  <p className="font-medium">{a}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Vision statement */}
      <section className="px-6 py-16">
        <Reveal>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[36px] bg-[var(--color-ink)] px-8 py-16 text-center sm:px-16">
            <div
              aria-hidden
              className="absolute inset-0 opacity-50 [background:radial-gradient(700px_circle_at_50%_0%,rgba(43,107,255,0.4),transparent),radial-gradient(500px_circle_at_50%_100%,rgba(16,201,138,0.3),transparent)]"
            />
            <div className="relative flex flex-col items-center gap-5">
              <Telescope className="text-[var(--color-accent)]" size={32} />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                Vision Statement
              </span>
              <blockquote className="max-w-3xl font-display text-2xl font-semibold leading-snug text-white sm:text-4xl">
                &ldquo;{goals.vision}&rdquo;
              </blockquote>
              <MagneticButton href="/contact" variant="ghost" className="mt-2 !text-white !bg-white/10">
                Be part of the journey
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
