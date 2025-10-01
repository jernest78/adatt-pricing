import React from "react";
import { faqs } from "./PricingPage";

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E2430] to-[#102F3C] text-slate-100">
      <header className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-[#4F46E5]/10 ring-1 ring-[#4F46E5]/30 grid place-content-center">🔐</div>
            <div className="text-xl font-semibold tracking-tight">ADATT</div>
          </div>
          <nav className="flex items-center gap-2">
            <a href="/" className="rounded-xl px-4 py-2 ring-1 ring-slate-600/60 hover:ring-slate-400/80">Home</a>
            <a href="/#pricing" className="rounded-xl px-4 py-2 ring-1 ring-slate-600/60 hover:ring-slate-400/80">Pricing</a>
            <a
              href="https://discord.com/channels/1422930170968543244/1422930171836502018"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-4 py-2 ring-1 ring-slate-600/60 hover:ring-slate-400/80"
            >
              Discord
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-3xl font-semibold">Frequently Asked Questions</h1>
        <div className="mt-4 grid gap-4">
          {faqs.map(({ q, a }) => (
            <details key={q} className="rounded-xl bg-slate-900/40 p-5 ring-1 ring-white/10">
              <summary className="cursor-pointer font-medium">{q}</summary>
              <p className="mt-2 text-sm text-slate-300">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 pb-16 text-sm text-slate-400">
        © {new Date().getFullYear()} ADATT. All rights reserved.
      </footer>
    </div>
  );
}
