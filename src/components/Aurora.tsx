/** Decorative animated gradient blobs. Purely visual — aria-hidden. */
export default function Aurora({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <div className="absolute -left-32 -top-24 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-brand)_55%,transparent),transparent_70%)] opacity-30 blur-3xl animate-aurora" />
      <div className="absolute -right-40 top-20 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-accent)_50%,transparent),transparent_70%)] opacity-25 blur-3xl animate-aurora [animation-delay:-7s]" />
      <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-leaf)_45%,transparent),transparent_70%)] opacity-20 blur-3xl animate-aurora [animation-delay:-14s]" />
    </div>
  );
}
