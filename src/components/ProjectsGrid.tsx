"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import GlowCard from "./GlowCard";
import { projects, projectFilters } from "@/data/site";

const toneGradient: Record<string, string> = {
  brand: "from-[#2b6bff] to-[#1747d6]",
  accent: "from-[#ff7a18] to-[#ff5252]",
  leaf: "from-[#10c98a] to-[#0aa3c9]",
};

export default function ProjectsGrid() {
  const [filter, setFilter] = useState<string>("All");
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Filter pills */}
      <div className="mb-10 flex flex-wrap justify-center gap-2.5">
        {projectFilters.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                active ? "text-white" : "text-ink-soft hover:text-ink glass"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-[var(--color-ink)]"
                  transition={{ type: "spring", stiffness: 360, damping: 30 }}
                />
              )}
              {f}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlowCard tone={p.accent} className="flex h-full flex-col !p-0 overflow-hidden">
                {/* preview */}
                <div
                  className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${toneGradient[p.accent]}`}
                >
                  <span className="font-display text-6xl font-black text-white/90 drop-shadow">
                    <img src={p.image} alt={p.title.charAt(0)} />
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-black/25 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {p.category}
                  </span>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_-10%,rgba(255,255,255,0.5),transparent_60%)]" />
                </div>

                {/* body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[var(--color-mist)] px-3 py-1 text-xs font-medium text-[var(--color-ink-soft)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-3 border-t border-[var(--color-line)] pt-4">
                    <a
                      href={p.demo}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-brand)] hover:underline"
                    >
                      Live demo <ArrowUpRight size={15} />
                    </a>
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
                    >
                      <Github size={15} /> Code
                    </a>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <p className="py-16 text-center text-[var(--color-ink-faint)]">
          <Sparkles className="mx-auto mb-3" /> More projects coming soon.
        </p>
      )}
    </div>
  );
}
