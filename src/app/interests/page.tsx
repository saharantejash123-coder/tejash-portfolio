import type { Metadata } from "next";
import {
  Crown,
  Code2,
  Cpu,
  Palette,
  BookOpen,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import GlowCard from "@/components/GlowCard";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { interests } from "@/data/site";

export const metadata: Metadata = {
  title: "Interests",
  description:
    "What Tejash Saharan loves — chess, coding, technology, design, learning, and AI.",
};

const icons: Record<string, LucideIcon> = {
  Chess: Crown,
  Coding: Code2,
  Technology: Cpu,
  Design: Palette,
  Learning: BookOpen,
  AI: Sparkles,
};

// Bento sizing — first and fifth cards span wider for visual rhythm.
const span: Record<number, string> = {
  0: "md:col-span-2",
  3: "md:col-span-2",
  4: "md:col-span-2",
};

export default function InterestsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Interests"
        title="What makes me, me."
        intro="Outside the code editor, these are the things that keep my mind curious and my heart happy."
      />

      <section className="px-6 py-12">
        <RevealGroup className="mx-auto grid max-w-6xl auto-rows-[1fr] gap-5 md:grid-cols-3">
          {interests.map((it, i) => {
            const Icon = icons[it.title] ?? Sparkles;
            return (
              <RevealItem key={it.title} className={`h-full ${span[i] ?? ""}`}>
                <GlowCard tone={it.tone} className="flex h-full flex-col">
                  <span
                    className="grid h-14 w-14 place-items-center rounded-2xl text-white shadow-lg"
                    style={{ background: `var(--color-${it.tone})` }}
                  >
                    <Icon size={26} />
                  </span>
                  <h2 className="mt-5 font-display text-2xl font-bold">{it.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                    {it.body}
                  </p>
                </GlowCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </section>
    </>
  );
}
