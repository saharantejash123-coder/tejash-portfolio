"use client";

import { useEffect, useState } from "react";

export type DeviceTier = "high" | "medium" | "low";

type NavExt = Navigator & {
  deviceMemory?: number;
  connection?: { effectiveType?: string; saveData?: boolean };
};

/**
 * Detects device capability once on mount → "high" | "medium" | "low".
 * Used to scale particle counts, DPR, blur and effect intensity.
 *
 * SSR-safe: starts at "high" and refines after hydration, so there is no
 * layout shift and reduced-motion users always collapse to "low".
 */
export function useDeviceTier(): DeviceTier {
  const [tier, setTier] = useState<DeviceTier>("high");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setTier("low");
      return;
    }

    const nav = navigator as NavExt;
    const cores = nav.hardwareConcurrency ?? 8;
    const mem = nav.deviceMemory ?? 8;
    const conn = nav.connection?.effectiveType ?? "4g";
    const saveData = nav.connection?.saveData ?? false;
    const slowNet = saveData || conn === "slow-2g" || conn === "2g" || conn === "3g";

    let score = 0;
    if (cores >= 8) score += 2;
    else if (cores >= 4) score += 1;
    if (mem >= 8) score += 2;
    else if (mem >= 4) score += 1;
    if (!slowNet) score += 1;

    setTier(score >= 4 ? "high" : score >= 2 ? "medium" : "low");
  }, []);

  return tier;
}
