/**
 * Non-blocking route-transition indicator — a slim gradient bar at the very
 * top, instead of a full-screen spinner that hides the page on every nav.
 * Fast routes barely flash it; slow ones still get clear feedback.
 */
export default function Loading() {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[3px] overflow-hidden"
      role="status"
      aria-label="Loading"
    >
      <div className="animate-loadbar h-full w-2/5 rounded-full bg-gradient-to-r from-[var(--color-brand)] via-[var(--color-accent)] to-[var(--color-leaf)]" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
