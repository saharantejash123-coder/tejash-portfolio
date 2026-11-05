import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { nav, profile } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 border-t border-[var(--color-line)] bg-[var(--color-mist)]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--color-ink)] font-display text-sm font-bold text-white">
              TS
            </span>
            <span className="font-display text-lg font-semibold">{profile.name}</span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-[var(--color-ink-soft)]">
            {profile.roles.join(" · ")} from {profile.location}, {profile.country}.
            Learning, building, and growing — one line of code at a time.
          </p>
          <div className="flex gap-3 pt-1">
            {[
              { icon: Github, href: profile.socials.github, label: "GitHub" },
              { icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn" },
              { icon: Mail, href: profile.socials.email, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-xl glass text-[var(--color-ink-soft)] transition-all hover:-translate-y-0.5 hover:text-[var(--color-brand)]"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <nav className="flex flex-col gap-3" aria-label="Footer">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-faint)]">
            Explore
          </h3>
          {nav.slice(0, 5).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-fit text-sm text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-brand)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* More */}
        <nav className="flex flex-col gap-3" aria-label="More">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-ink-faint)]">
            More
          </h3>
          {nav.slice(5).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-fit text-sm text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-brand)]"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={profile.socials.email}
            className="mt-1 inline-flex w-fit items-center gap-1 text-sm font-medium text-[var(--color-brand)]"
          >
            Say hello <ArrowUpRight size={14} />
          </a>
        </nav>
      </div>

      <div className="border-t border-[var(--color-line)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[var(--color-ink-faint)] sm:flex-row">
          <p>© {year} {profile.name}. Built with curiosity in Rajasthan, India.</p>
          <p>Designed &amp; coded by {profile.shortName} ✦ Next.js · Three.js · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
