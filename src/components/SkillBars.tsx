"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/site";

const toneColor: Record<string, string> = {
  brand: "var(--color-brand)",
  accent: "var(--color-accent)",
  leaf: "var(--color-leaf)",
};

export default function SkillBars() {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
      {skillGroups.map((group, gi) => {
        const color = toneColor[group.tone];
        return (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: gi * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl card-soft p-7"
          >
            <div className="mb-6 flex items-center gap-3">
              <span
                className="h-9 w-1.5 rounded-full"
                style={{ background: color }}
              />
              <h2 className="font-display text-xl font-bold">{group.title}</h2>
            </div>

            <ul className="flex flex-col gap-5">
              {group.skills.map((s, si) => (
                <li key={s.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-semibold">{s.name}</span>
                    <span className="text-[var(--color-ink-faint)]">{s.level}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-[var(--color-haze)]">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${color}, color-mix(in srgb, ${color} 55%, #ffffff))`,
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.1,
                        delay: 0.2 + si * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
}
