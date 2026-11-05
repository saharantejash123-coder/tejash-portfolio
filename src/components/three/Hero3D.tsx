"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useDeviceTier } from "@/lib/useDeviceTier";

// Load the WebGL scene only on the client, after hydration.
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <OrbFallback />,
});

/** Lightweight CSS orb — skeleton while 3D loads + reduced-motion / low-end fallback. */
function OrbFallback() {
  return (
    <div className="grid h-full w-full place-items-center" aria-hidden="true">
      <div className="relative h-56 w-56">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,#6d4bff,#2b6bff_55%,#1747d6)] blur-[2px] animate-pulse-soft" />
        <div className="absolute -inset-6 rounded-full border border-[color-mix(in_srgb,var(--color-brand)_40%,transparent)] animate-pulse-soft" />
        <div className="absolute -inset-12 rounded-full border border-[color-mix(in_srgb,var(--color-accent)_30%,transparent)]" />
      </div>
    </div>
  );
}

export default function Hero3D() {
  const tier = useDeviceTier();
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [idle, setIdle] = useState(false);
  const [visible, setVisible] = useState(false);

  // Defer 3D until the browser is idle → text/UI become interactive first.
  useEffect(() => {
    setMounted(true);
    type RIC = (cb: () => void, opts?: { timeout: number }) => number;
    const ric: RIC =
      (window as unknown as { requestIdleCallback?: RIC }).requestIdleCallback ??
      ((cb) => window.setTimeout(cb, 800));
    const id = ric(() => setIdle(true), { timeout: 2000 });
    return () => clearTimeout(id as unknown as number);
  }, []);

  // Only mount the canvas while the hero is on screen.
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { rootMargin: "200px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  // Low-end devices and reduced-motion users get the cheap static orb.
  const allow3D = mounted && idle && visible && tier !== "low";

  return (
    <div ref={ref} className="h-full w-full">
      {allow3D ? <HeroScene tier={tier} /> : <OrbFallback />}
    </div>
  );
}
