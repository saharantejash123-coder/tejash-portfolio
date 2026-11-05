"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import GlowCard from "./GlowCard";
import { profile } from "@/data/site";

const fields = [
  ["Role", "Student Developer"],
  ["Age", String(profile.age)],
  ["Learning via", profile.learningWith],
  ["Class", profile.grade],
] as const;

/**
 * Dedicated digital identity card — glassmorphism, hover tilt (via GlowCard),
 * and a gentle floating motion. Reusable anywhere a profile summary is needed.
 */
export default function IdentityCard() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      animate={reduce ? undefined : { y: [0, -10, 0] }}
      transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
    >
      <GlowCard tone="brand" className="gradient-border rounded-[28px]">
        <div className="flex items-center gap-4">
          <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-white/60">
            <Image
              src="/profile.webp"
              alt="Tejash Saharan"
              fill
              sizes="56px"
              className="object-cover"
            />
          </span>
          <div className="min-w-0">
            <p className="font-display text-lg font-bold leading-tight">{profile.name}</p>
            <p className="flex items-center gap-1 text-xs text-[var(--color-ink-faint)]">
              <MapPin size={12} /> {profile.location}, {profile.country}
            </p>
          </div>
          <span className="ml-auto rounded-full bg-[color-mix(in_srgb,var(--color-leaf)_16%,transparent)] px-3 py-1 text-xs font-semibold text-[var(--color-leaf)]">
            ● Learning
          </span>
        </div>

        <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-[var(--color-line)] text-sm">
          {fields.map(([k, v]) => (
            <div key={k} className="bg-white p-4">
              <dt className="text-xs uppercase tracking-wide text-[var(--color-ink-faint)]">{k}</dt>
              <dd className="mt-1 font-semibold">{v}</dd>
            </div>
          ))}
        </dl>

        <Link
          href="/about"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-brand)]"
        >
          Read my full story <ArrowUpRight size={15} />
        </Link>
      </GlowCard>
    </motion.div>
  );
}
