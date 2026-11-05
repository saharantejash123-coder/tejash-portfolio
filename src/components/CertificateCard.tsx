import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";
import GlowCard from "./GlowCard";

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  blurb: string;
  image: string;
  kind?: string;
  award?: string;
  tone?: "brand" | "accent" | "leaf";
};

/**
 * Reusable certificate card. Pass any certificate object to render it.
 * Add more by extending the `achievements` array in src/data/site.ts.
 */
export default function CertificateCard({ cert }: { cert: Certificate }) {
  return (
    <GlowCard tone={cert.tone ?? "brand"} className="flex h-full flex-col !p-0 overflow-hidden">
      {/* Certificate preview */}
      <a
        href={cert.image}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[10/7] overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-mist)]"
      >
        <Image
          src={cert.image}
          alt={`${cert.title} certificate awarded to Tejash Saharan by ${cert.issuer}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
          className="object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
        {cert.kind && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-[var(--color-ink-soft)] backdrop-blur">
            <Award size={13} className="text-[var(--color-accent)]" /> {cert.kind}
          </span>
        )}
      </a>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-bold leading-tight">{cert.title}</h3>
          <span className="shrink-0 rounded-full bg-[var(--color-mist)] px-3 py-1 text-xs font-medium text-[var(--color-ink-soft)]">
            {cert.date}
          </span>
        </div>
        <p className="mt-1 text-sm font-semibold text-[var(--color-brand)]">{cert.issuer}</p>

        {cert.award && (
          <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-[color-mix(in_srgb,var(--color-accent)_14%,transparent)] px-3 py-1 text-xs font-bold text-[var(--color-accent)]">
            ★ {cert.award}
          </span>
        )}

        <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-ink-soft)]">{cert.blurb}</p>

        <a
          href={cert.image}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-brand)]"
        >
          View certificate <ExternalLink size={14} />
        </a>
      </div>
    </GlowCard>
  );
}
