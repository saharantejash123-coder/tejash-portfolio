"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { story } from "@/data/site";

export default function StoryTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 25%", "end 75%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const height = useTransform(fill, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative mx-auto max-w-4xl px-6">
      {/* track */}
      <div className="absolute bottom-0 left-[28px] top-0 w-[2px] bg-[var(--color-line)] md:left-1/2 md:-translate-x-1/2" />
      {/* animated fill */}
      <motion.div
        style={{ height }}
        className="absolute left-[28px] top-0 w-[2px] bg-gradient-to-b from-[var(--color-brand)] via-[var(--color-accent)] to-[var(--color-leaf)] md:left-1/2 md:-translate-x-1/2"
      />

      <ul className="flex flex-col gap-10 py-4">
        {story.map((item, i) => {
          const left = i % 2 === 0;
          return (
            <li
              key={item.year}
              className={`relative pl-20 md:w-1/2 md:pl-0 ${
                left ? "md:self-start md:pr-12 md:text-right" : "md:self-end md:pl-12"
              }`}
            >
              {/* node */}
              <span
                className={`absolute top-1.5 left-[29px] grid h-[18px] w-[18px] -translate-x-1/2 place-items-center md:left-auto ${
                  left ? "md:-right-[9px] md:left-auto" : "md:-left-[9px]"
                }`}
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="h-[18px] w-[18px] rounded-full border-[3px] border-white bg-[var(--color-brand)] shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-brand)_22%,transparent)]"
                />
              </span>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-3xl card-soft p-6 transition-shadow duration-300 hover:shadow-[0_30px_60px_-35px_rgba(20,40,120,0.45)]"
              >
                <span className="inline-block rounded-full bg-[color-mix(in_srgb,var(--color-brand)_12%,transparent)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-brand)]">
                  {item.year}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                  {item.body}
                </p>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
