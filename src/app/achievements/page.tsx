import type { Metadata } from "next";
import { Trophy, CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CertificateCard from "@/components/CertificateCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { achievements, milestones } from "@/data/site";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Certificates, learning milestones, and accomplishments of Tejash Saharan on his coding journey with CodeYogi and Code Churu.",
};

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Achievements"
        title="Milestones worth remembering."
        intro="Certificates and small wins that mark how far this journey has come — and motivate the chapters still to come."
      />

      {/* Certificates */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold">
              <Trophy className="text-[var(--color-accent)]" size={22} /> Certificates
            </h2>
          </Reveal>

          {/* ─────────────────────────────────────────────────────────────
              CERTIFICATES GRID — driven by `achievements` in src/data/site.ts.
              Thumbnails live in /public/certificates (run `npm run gen:certs`).
              ➜ To add/replace: edit the data array and drop a matching image.
             ───────────────────────────────────────────────────────────── */}
          <RevealGroup className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {achievements.map((cert) => (
              <RevealItem key={cert.slug} className="h-full">
                <CertificateCard cert={cert} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Milestones */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold">
              <CheckCircle2 className="text-[var(--color-leaf)]" size={22} /> Learning milestones
            </h2>
          </Reveal>
          <RevealGroup className="grid gap-3 sm:grid-cols-2">
            {milestones.map((m) => (
              <RevealItem key={m}>
                <div className="flex items-center gap-3 rounded-2xl card-soft p-5 transition-transform duration-300 hover:-translate-y-0.5">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-leaf)_16%,transparent)] text-[var(--color-leaf)]">
                    <CheckCircle2 size={18} />
                  </span>
                  <p className="text-sm font-medium">{m}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
