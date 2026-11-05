import type { ReactNode } from "react";

/**
 * Runs on every navigation → page-enter transition.
 *
 * Pure CSS (no framer-motion, no "use client"), so it stays out of the
 * critical path on every route change. The animation re-fires because Next
 * re-mounts this template on each navigation.
 */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
