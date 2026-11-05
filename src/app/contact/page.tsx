import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { profile } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Tejash Saharan — student developer from Rajasthan, India. Find him on GitHub, LinkedIn, or by email.",
};

const socials = [
  {
    icon: Github,
    label: "GitHub",
    value: "saharantejash123-coder",
    href: profile.socials.github,
    tone: "brand",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "tejash-saharan",
    href: profile.socials.linkedin,
    tone: "accent",
  },
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: profile.socials.email,
    tone: "leaf",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's connect."
        intro="Have advice, an opportunity, or just want to say hi? My inbox is always open — I'd genuinely love to hear from you."
      />

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Social cards */}
          <div className="flex flex-col gap-5">
            <RevealGroup className="grid gap-4">
              {socials.map((s) => (
                <RevealItem key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-30px_rgba(20,40,120,0.45)]"
                  >
                    <span
                      className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white shadow-lg"
                      style={{ background: `var(--color-${s.tone})` }}
                    >
                      <s.icon size={22} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">
                        {s.label}
                      </p>
                      <p className="truncate font-semibold">{s.value}</p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="ml-auto text-[var(--color-ink-faint)] transition-all group-hover:translate-x-0.5 group-hover:text-[var(--color-brand)]"
                    />
                  </a>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.1}>
              <div className="flex items-center gap-3 rounded-2xl card-soft p-5">
                <MapPin size={20} className="text-[var(--color-brand)]" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">
                    Based in
                  </p>
                  <p className="font-semibold">
                    {profile.location}, {profile.country}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.05}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
