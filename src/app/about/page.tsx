import type { Metadata } from "next";
import Image from "next/image";
import { Quote, Heart, Sparkles, MapPin, GraduationCap } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import GlowCard from "@/components/GlowCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { about, profile } from "@/data/site";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Get to know Tejash Saharan — a 14-year-old student developer from Sahwa, Churu, Rajasthan. His background, personality, values, and love for technology.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Me"
        title="The person behind the projects."
        intro={about.intro}
      />

      {/* Premium portrait + story */}
      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Circular framed portrait with depth layers */}
          <Reveal className="relative mx-auto w-full max-w-xs">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-full bg-[radial-gradient(circle_at_30%_20%,color-mix(in_srgb,var(--color-brand)_45%,transparent),transparent_70%)] blur-2xl"
            />
            <div
              aria-hidden
              className="absolute -right-3 -top-3 -z-10 h-24 w-24 rounded-full bg-[var(--color-accent)] opacity-20 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-full glass p-3">
              <div className="relative aspect-square overflow-hidden rounded-full ring-1 ring-white/60">
                <Image
                  src="/profile.webp"
                  alt="Portrait of Tejash Saharan"
                  fill
                  sizes="(max-width: 1024px) 80vw, 340px"
                  className="object-cover"
                />
              </div>
            </div>
            {/* floating glass info card */}
            <div className="absolute -bottom-3 left-1/2 w-[80%] -translate-x-1/2 rounded-2xl glass px-4 py-3 shadow-xl">
              <div className="flex items-center justify-between text-sm">
                <span className="inline-flex items-center gap-1.5 font-semibold">
                  <GraduationCap size={15} className="text-[var(--color-brand)]" /> {profile.grade}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[var(--color-ink-soft)]">
                  <MapPin size={14} className="text-[var(--color-accent)]" /> Rajasthan
                </span>
              </div>
            </div>
          </Reveal>

          {/* Story */}
          <div className="flex flex-col gap-5">
            <Reveal>
              <span className="inline-flex w-fit items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                <Sparkles size={14} /> Hello, I&apos;m Tejash
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
                A curious mind from {profile.location}.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="leading-relaxed text-[var(--color-ink-soft)]">
                {about.intro} I study at {profile.school}, learn coding through{" "}
                {profile.learningWith}, and spend my free time playing chess and dreaming up
                things to build.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="leading-relaxed text-[var(--color-ink-soft)]">
                A laptop from DM Sir &amp; Code Churu turned that curiosity into real projects —
                and this website is where I share the journey.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <RevealGroup className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {about.cards.map((c) => (
            <RevealItem key={c.title} className="h-full">
              <GlowCard tone={c.tone} className="h-full">
                <span
                  className="inline-block h-1.5 w-10 rounded-full"
                  style={{ background: `var(--color-${c.tone})` }}
                />
                <h2 className="mt-4 font-display text-xl font-bold">{c.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                  {c.body}
                </p>
              </GlowCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Beliefs */}
      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="flex flex-col gap-4">
              <span className="inline-flex w-fit items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                <Heart size={14} /> What I believe
              </span>
              <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
                A few things I hold close.
              </h2>
              <p className="text-[var(--color-ink-soft)]">
                These ideas guide how I learn, build, and treat the people around me.
              </p>
            </div>
          </Reveal>

          <RevealGroup className="grid gap-3">
            {about.beliefs.map((b, i) => (
              <RevealItem key={b}>
                <div className="flex items-start gap-4 rounded-2xl card-soft p-5 transition-transform duration-300 hover:translate-x-1">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[var(--color-mist)] font-display text-sm font-bold text-[var(--color-brand)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1 font-medium">{b}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Pull quote */}
      <section className="px-6 py-16">
        <Reveal>
          <figure className="relative mx-auto max-w-4xl overflow-hidden rounded-[32px] glass px-8 py-14 text-center sm:px-16">
            <Quote
              className="mx-auto mb-5 text-[var(--color-brand)] opacity-80"
              size={36}
            />
            <blockquote className="font-display text-2xl font-semibold leading-snug sm:text-3xl">
              &ldquo;Where you start does not decide where you finish. I&apos;m living
              proof that a laptop and a little belief can change everything.&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-center gap-2 text-sm text-[var(--color-ink-faint)]">
              <Sparkles size={14} className="text-[var(--color-accent)]" />
              {profile.name}, {profile.age} · {profile.location}
            </figcaption>
          </figure>
        </Reveal>
      </section>
    </>
  );
}
