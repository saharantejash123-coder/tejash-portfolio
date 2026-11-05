"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/**
 * Premium 3D "digital identity" presentation of the profile photo.
 * Interactive perspective tilt + parallax depth layers, glass frame,
 * electric glow, rotating ring, floating particles.
 * Sizes: mobile 260px · tablet 340px · desktop 420px.
 *
 * Replace /public/profile.webp with the real photo — everything else adapts.
 */
export default function IdentityPortrait() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // pointer position (0..1) → spring-smoothed tilt
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotX = useSpring(useTransform(py, [0, 1], [14, -14]), { stiffness: 150, damping: 15 });
  const rotY = useSpring(useTransform(px, [0, 1], [-14, 14]), { stiffness: 150, damping: 15 });
  // parallax offsets for background layers (move opposite + less than the photo)
  const bgX = useSpring(useTransform(px, [0, 1], [18, -18]), { stiffness: 120, damping: 18 });
  const bgY = useSpring(useTransform(py, [0, 1], [18, -18]), { stiffness: 120, damping: 18 });

  const onMove = (e: React.PointerEvent) => {
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
      animate={reduce ? undefined : { y: [0, -12, 0] }}
      transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
      className="relative h-[240px] w-[240px] sm:h-[340px] sm:w-[340px] lg:h-[420px] lg:w-[420px]"
    >
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={reset}
        className="grid h-full w-full place-items-center [perspective:1100px]"
      >
        {/* 3D tilt stage */}
        <motion.div
          style={reduce ? undefined : { rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
          className="relative grid h-full w-full place-items-center"
        >
          {/* energy waves (deep back layer) */}
          {!reduce && (
            <motion.div
              style={{ x: bgX, y: bgY, z: -60 }}
              className="absolute inset-0"
            >
              <span className="absolute inset-2 rounded-full border border-[color-mix(in_srgb,var(--color-brand)_40%,transparent)] animate-pulse-soft" />
              <span className="absolute -inset-4 rounded-full border border-[color-mix(in_srgb,var(--color-accent)_28%,transparent)] animate-pulse-soft [animation-delay:-2s]" />
              <span className="absolute -inset-10 rounded-full border border-[color-mix(in_srgb,var(--color-leaf)_22%,transparent)] animate-pulse-soft [animation-delay:-4s]" />
            </motion.div>
          )}

          {/* electric blue glow (back) */}
          <span
            aria-hidden
            className="absolute inset-6 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-brand)_55%,transparent),transparent_70%)] blur-2xl"
            style={{ transform: "translateZ(-30px)" }}
          />

          {/* rotating futuristic conic ring (mid) */}
          <motion.span
            aria-hidden
            className="absolute -inset-2 rounded-full"
            style={{
              z: 20,
              background:
                "conic-gradient(from 0deg, transparent, var(--color-brand), transparent 25%, var(--color-accent), transparent 55%, var(--color-leaf), transparent 80%)",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 5px), #000 calc(100% - 5px))",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 5px), #000 calc(100% - 5px))",
            }}
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 16, ease: "linear", repeat: Infinity }}
          />

          {/* dashed counter-rotating ring (mid) */}
          {!reduce && (
            <motion.svg
              aria-hidden
              viewBox="0 0 100 100"
              className="absolute -inset-6 h-[calc(100%+3rem)] w-[calc(100%+3rem)]"
              style={{ z: 10 }}
              animate={{ rotate: -360 }}
              transition={{ duration: 38, ease: "linear", repeat: Infinity }}
            >
              <circle cx="50" cy="50" r="48" fill="none" stroke="var(--color-brand)" strokeOpacity="0.25" strokeWidth="0.5" strokeDasharray="1 4" />
            </motion.svg>
          )}

          {/* the photo — front layer, pops toward viewer */}
          <div
            className="group relative h-[78%] w-[78%] [transform-style:preserve-3d]"
            style={{ transform: "translateZ(70px)" }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-full glass p-2 shadow-[0_50px_100px_-30px_rgba(23,71,214,0.65)]">
              <div className="relative h-full w-full overflow-hidden rounded-full ring-1 ring-white/60">
                <Image
                  src="/profile.webp"
                  alt="Tejash Saharan"
                  fill
                  priority
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 340px, 420px"
                  className="object-cover [object-position:50%_22%] transition-transform duration-700 group-hover:scale-110"
                />
                <span className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(130deg,transparent_40%,rgba(255,255,255,0.35)_50%,transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </div>

            {/* status chip — highest layer */}
            <span
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[var(--color-ink)] px-4 py-1.5 text-xs font-semibold text-white shadow-lg"
              style={{ transform: "translateZ(40px)" }}
            >
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-leaf)] align-middle" />
              Student Developer
            </span>
          </div>

          {/* floating particles (front, parallax) */}
          {!reduce &&
            [
              { c: "--color-brand", t: "6%", l: "12%", d: 0 },
              { c: "--color-accent", t: "18%", l: "86%", d: 1.2 },
              { c: "--color-leaf", t: "82%", l: "8%", d: 0.6 },
              { c: "--color-brand", t: "88%", l: "82%", d: 1.8 },
            ].map((p, i) => (
              <motion.span
                key={i}
                aria-hidden
                className="absolute h-2.5 w-2.5 rounded-full"
                style={{ top: p.t, left: p.l, background: `var(${p.c})`, z: 90 }}
                animate={{ y: [0, -16, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 4 + i, ease: "easeInOut", repeat: Infinity, delay: p.d }}
              />
            ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
