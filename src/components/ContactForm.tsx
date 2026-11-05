"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { profile } from "@/data/site";

type Status = "idle" | "sending" | "done";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    // No backend needed — open the visitor's mail client, pre-filled.
    const subject = encodeURIComponent(`Hello from ${form.name} — via your website`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);

    setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("done");
    }, 700);
  };

  const field =
    "w-full rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3.5 text-sm outline-none transition-all placeholder:text-[var(--color-ink-faint)] focus:border-[var(--color-brand)] focus:ring-4 focus:ring-[color-mix(in_srgb,var(--color-brand)_15%,transparent)]";

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl card-soft p-7 sm:p-8">
      <AnimatePresence mode="wait">
        {status === "done" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 py-10 text-center"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-leaf)_16%,transparent)] text-[var(--color-leaf)]">
              <CheckCircle2 size={32} />
            </span>
            <h3 className="font-display text-2xl font-bold">Your message is ready!</h3>
            <p className="max-w-sm text-sm text-[var(--color-ink-soft)]">
              Your email app should have opened with the message. If not, just write to{" "}
              <a href={profile.socials.email} className="font-semibold text-[var(--color-brand)]">
                {profile.email}
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setForm({ name: "", email: "", message: "" });
              }}
              className="mt-2 text-sm font-semibold text-[var(--color-brand)] hover:underline"
            >
              Send another →
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Your name</span>
                <input
                  className={field}
                  value={form.name}
                  onChange={update("name")}
                  placeholder="e.g. Rohit Joshi"
                  required
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Your email</span>
                <input
                  type="email"
                  className={field}
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold">Message</span>
              <textarea
                className={`${field} min-h-[140px] resize-y`}
                value={form.message}
                onChange={update("message")}
                placeholder="Say hello, share advice, or tell me about an opportunity…"
                required
              />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-ink)] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand)] disabled:opacity-70"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Preparing…
                </>
              ) : (
                <>
                  Send message{" "}
                  <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
