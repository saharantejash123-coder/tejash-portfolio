"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

const toneMap: Record<string, string> = {
  brand: "var(--color-brand)",
  accent: "var(--color-accent)",
  leaf: "var(--color-leaf)",
};

/**
 * A premium glass card with 3D tilt + a tracking glare that follows the
 * cursor. Falls back to a static card when reduced motion is requested.
 */
export default function GlowCard({
  children,
  className = "",
  tone = "brand",
}: {
  children: ReactNode;
  className?: string;
  tone?: "brand" | "accent" | "leaf";
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rx = useSpring(useTransform(py, [0, 1], [7, -7]), {
    stiffness: 180,
    damping: 16,
  });
  const ry = useSpring(useTransform(px, [0, 1], [-7, 7]), {
    stiffness: 180,
    damping: 16,
  });
  const glareX = useTransform(px, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(py, [0, 1], ["0%", "100%"]);
  const color = toneMap[tone];
  // Hook must run unconditionally (rules of hooks); the node is rendered conditionally below.
  const glareBg = useTransform(
    [glareX, glareY],
    ([gx, gy]: string[]) =>
      `radial-gradient(220px circle at ${gx} ${gy}, color-mix(in srgb, ${color} 22%, transparent), transparent 65%)`
  );

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={`group relative overflow-hidden rounded-3xl glass p-7 transition-shadow duration-500 hover:shadow-[0_40px_80px_-40px_rgba(20,40,120,0.45)] ${className}`}
    >
      {/* tracking glare */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glareBg }}
        />
      )}
      {/* corner accent */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-50"
        style={{ background: color }}
      />
      <div className="relative" style={{ transform: "translateZ(40px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
