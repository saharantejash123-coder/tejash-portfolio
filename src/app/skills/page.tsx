import type { Metadata } from "next";
import { Code2, Brain, Palette, Users } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SkillBars from "@/components/SkillBars";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "The skills of Tejash Saharan across Frontend (HTML, CSS, JavaScript, React), AI tools, Design, and Soft skills.",
};

const summary = [
  { icon: Code2, title: "Frontend", text: "HTML, CSS, JavaScript & React" },
  { icon: Brain, title: "AI Tools", text: "OpenAI, Claude & AI agents" },
  { icon: Palette, title: "Design", text: "UI, UX & graphic design" },
  { icon: Users, title: "Soft Skills", text: "Leadership & teamwork" },
];

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="The toolbox I'm building."
        intro="I'm still early in my journey, so these levels are honest — they show where I am today and how fast I'm growing."
      />

      {/* Summary chips */}
      <section className="px-6 pb-6">
        <RevealGroup className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {summary.map(({ icon: Icon, title, text }) => (
            <RevealItem key={title}>
              <div className="flex h-full flex-col gap-2 rounded-2xl glass p-5">
                <Icon className="text-[var(--color-brand)]" size={22} />
                <p className="font-display font-bold">{title}</p>
                <p className="text-xs text-[var(--color-ink-faint)]">{text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="py-10">
        <SkillBars />
      </section>

      <section className="px-6 py-12">
        <Reveal>
          <p className="mx-auto max-w-2xl text-center text-[var(--color-ink-soft)]">
            Beyond the bars, the real skill I&apos;m proudest of is{" "}
            <span className="font-semibold text-[var(--color-brand)]">learning how to learn</span>{" "}
            — and I get a little better at it every single day.
          </p>
        </Reveal>
      </section>
    </>
  );
}
