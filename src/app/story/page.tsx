import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import StoryTimeline from "@/components/StoryTimeline";
import MagneticButton from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "My Story",
  description:
    "The journey of Tejash Saharan — from a small town in Rajasthan, to discovering code, joining CodeYogi, receiving a laptop from Code Churu, and building his first websites.",
};

export default function StoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="My Story"
        title="Every line of code has a beginning."
        intro="This is the journey so far — the moments, the people, and the small wins that turned a curious kid from Sahwa into a young developer."
      />

      <section className="py-12">
        <StoryTimeline />
      </section>

      <section className="px-6 py-16">
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-[32px] glass px-8 py-12 text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              The story is still being written.
            </h2>
            <p className="max-w-xl text-[var(--color-ink-soft)]">
              The best chapters are ahead. Take a look at where I&apos;m headed next.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <MagneticButton href="/goals">
                Goals &amp; Vision <ArrowRight size={16} />
              </MagneticButton>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 rounded-full px-5 py-3.5 text-sm font-semibold text-[var(--color-brand)] hover:underline"
              >
                See the projects →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
