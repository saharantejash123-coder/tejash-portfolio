import { ArrowRight, MapPin, GraduationCap, Sparkles, Github } from "lucide-react";
import Hero3D from "@/components/three/Hero3D";
import Aurora from "@/components/Aurora";
import MagneticButton from "@/components/MagneticButton";
import GlowCard from "@/components/GlowCard";
import IdentityPortrait from "@/components/IdentityPortrait";
import IdentityCard from "@/components/IdentityCard";
import { Reveal, RevealGroup, RevealItem, RevealWords } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile, stats, projects, interests } from "@/data/site";

export default function HomePage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-14 sm:pt-28 sm:pb-16">
        <Aurora />
        <div className="bg-grid absolute inset-0 -z-10" aria-hidden />

        <div className="mx-auto grid w-full max-w-6xl gap-y-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-x-10 lg:content-center">
          {/* A — badge + name (first on mobile) */}
          <div className="flex flex-col items-center gap-4 text-center lg:col-start-1 lg:row-start-1 lg:items-start lg:gap-5 lg:self-end lg:text-left">
            <Reveal>
              <span className="inline-flex w-fit items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                <Sparkles size={14} />
                {profile.tagline}
              </span>
            </Reveal>

            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.2rem]">
              <RevealWords text="Tejash" className="block" />
              <span className="block text-gradient">
                <RevealWords text="Saharan" />
              </span>
            </h1>
          </div>

          {/* B — portrait centerpiece with ambient 3D (second on mobile, right on desktop) */}
          <div className="relative grid h-[320px] place-items-center sm:h-[440px] lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:h-[560px] lg:self-center">
            {/* ambient 3D, loaded after idle, sits behind the portrait */}
            <div className="absolute inset-0 -z-0 opacity-90" aria-hidden>
              <Hero3D />
            </div>

            <div className="relative z-10">
              <IdentityPortrait />
            </div>

            <div className="pointer-events-none absolute left-2 top-6 z-20 hidden animate-float sm:block">
              <div className="glass rounded-2xl px-4 py-3 text-sm shadow-lg">
                <p className="font-semibold">🧩 Chess player</p>
                <p className="text-xs text-[var(--color-ink-faint)]">thinks ahead</p>
              </div>
            </div>
            <div className="pointer-events-none absolute bottom-10 right-0 z-20 hidden animate-float [animation-delay:-3s] sm:block">
              <div className="glass rounded-2xl px-4 py-3 text-sm shadow-lg">
                <p className="font-semibold text-[var(--color-brand)]">⚛ Learning React</p>
                <p className="text-xs text-[var(--color-ink-faint)]">via CodeYogi</p>
              </div>
            </div>
          </div>

          {/* C — roles, description, buttons, facts (after the photo on mobile) */}
          <div className="flex flex-col items-center gap-6 text-center lg:col-start-1 lg:row-start-2 lg:items-start lg:self-start lg:text-left">
            <Reveal delay={0.15}>
              <p className="flex flex-wrap justify-center gap-x-3 gap-y-1 font-display text-lg font-medium text-[var(--color-ink-soft)] sm:text-xl lg:justify-start">
                {profile.roles.map((r, i) => (
                  <span key={r} className="inline-flex items-center gap-3">
                    {i > 0 && <span className="text-[var(--color-brand)]">·</span>}
                    {r}
                  </span>
                ))}
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="max-w-lg text-base leading-relaxed text-[var(--color-ink-soft)] sm:text-lg">
                {profile.description}
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                <MagneticButton href="/story">
                  Explore My Story <ArrowRight size={16} />
                </MagneticButton>
                <MagneticButton href="/projects" variant="ghost">
                  View Projects
                </MagneticButton>
              </div>
            </Reveal>

            {/* Quick facts */}
            <Reveal delay={0.45}>
              <div className="flex flex-wrap justify-center gap-2.5 pt-2 lg:justify-start">
                {[
                  { icon: Sparkles, text: `Age ${profile.age}` },
                  { icon: MapPin, text: "Rajasthan, India" },
                  { icon: GraduationCap, text: "Student Developer" },
                ].map(({ icon: Icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/60 px-3.5 py-2 text-sm font-medium text-[var(--color-ink-soft)]"
                  >
                    <Icon size={15} className="text-[var(--color-brand)]" />
                    {text}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================ STATS ============================ */}
      <section className="px-6 py-10">
        <RevealGroup className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <RevealItem key={s.label}>
              <div className="card-soft h-full rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1">
                <p className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm font-semibold">{s.label}</p>
                <p className="text-xs text-[var(--color-ink-faint)]">{s.sub}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* ====================== DIGITAL IDENTITY ====================== */}
      <section className="relative px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow="Digital identity"
            title="A small-town student with a worldwide dream."
            intro="I'm 14, I study at a government school in Sahwa, Churu — and I'm building my future one project at a time. This site is my way of sharing that journey with you."
          />

          {/* Dedicated digital identity card */}
          <Reveal delay={0.1}>
            <IdentityCard />
          </Reveal>
        </div>
      </section>

      {/* ====================== FEATURED PROJECTS ====================== */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow="Selected work"
              title="Things I've built."
              intro="Real projects, each one a lesson. Small steps that keep getting bigger."
            />
            <MagneticButton href="/projects" variant="ghost" className="shrink-0">
              All projects <ArrowRight size={16} />
            </MagneticButton>
          </div>

          <RevealGroup className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map((p) => (
              <RevealItem key={p.slug}>
                <GlowCard tone={p.accent} className="h-full">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-faint)]">
                    {p.category}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                    {p.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[var(--color-mist)] px-3 py-1 text-xs font-medium text-[var(--color-ink-soft)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ====================== INTERESTS MARQUEE ====================== */}
      <section className="overflow-hidden py-10">
        <div className="flex w-max animate-marquee gap-4 pr-4">
          {[...interests, ...interests].map((it, i) => (
            <span
              key={i}
              className="flex items-center gap-3 whitespace-nowrap rounded-full border border-[var(--color-line)] bg-white px-6 py-3 font-display text-lg font-semibold"
            >
              <span className="h-2 w-2 rounded-full bg-[var(--color-brand)]" />
              {it.title}
            </span>
          ))}
        </div>
      </section>

      {/* ============================== CTA ============================== */}
      <section className="px-6 py-20">
        <Reveal>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[36px] bg-[var(--color-ink)] px-8 py-16 text-center sm:px-16">
            <div
              aria-hidden
              className="absolute inset-0 opacity-40 [background:radial-gradient(600px_circle_at_20%_0%,rgba(43,107,255,0.45),transparent),radial-gradient(500px_circle_at_90%_100%,rgba(255,122,24,0.35),transparent)]"
            />
            <div className="relative flex flex-col items-center gap-6">
              <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
                Let&apos;s build, learn, and dream together.
              </h2>
              <p className="max-w-xl text-white/70">
                Whether you have advice, an opportunity, or just want to say hi —
                I&apos;d love to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <MagneticButton href="/contact" variant="ghost" className="!text-white !bg-white/10">
                  Get in touch <ArrowRight size={16} />
                </MagneticButton>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition-transform hover:-translate-y-0.5"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
