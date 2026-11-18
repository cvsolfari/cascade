"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 px-6 py-4 backdrop-blur-xl transition-colors duration-300 sm:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <Link href="/" className="text-lg font-semibold tracking-wide text-white">
          Cascade Dynamics
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 p-2 text-slate-200 transition hover:border-white/20 hover:bg-white/10 sm:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {menuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M3 12h18" />
                <path d="M3 6h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <Link href="/about" className="transition hover:text-white">
            About
          </Link>
          <div className="group relative py-2">
            <Link
              href="/high-charge-state-ions"
              className="flex items-center gap-1 transition hover:text-white"
              aria-haspopup="true"
            >
              Technology
              <svg
                aria-hidden="true"
                className="h-3.5 w-3.5 transition group-hover:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z" />
              </svg>
            </Link>
            <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-2xl border border-white/10 bg-slate-950/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
                {[
                  ["/high-charge-state-ions", "High-Charge-State Ions", "Overview"],
                  ["/high-charge-state-ions/applications", "Applications", "3D chips, therapy & research"],
                  ["/high-charge-state-ions/production-challenges", "Production Challenges", "Physics & engineering limits"],
                  ["/high-charge-state-ions/ion-source-technologies", "Ion Source Technologies", "ECR, EBIS, strippers & arcs"],
                ].map(([href, title, description]) => (
                  <Link
                    key={href}
                    href={href}
                    className="block rounded-xl px-3 py-3 transition hover:bg-white/10"
                  >
                    <span className="block font-medium text-white">{title}</span>
                    <span className="mt-1 block text-xs text-slate-400">{description}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/news" className="transition hover:text-white">
            News
          </Link>
          <Link href="/careers" className="transition hover:text-white">
            Careers
          </Link>
          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>
        </nav>
      </div>

      {menuOpen ? (
        <div className="mt-4 rounded-3xl border border-white/10 bg-slate-950/80 p-4 text-sm text-slate-200 shadow-xl shadow-black/30 backdrop-blur-xl sm:hidden">
          <div className="flex flex-col gap-3">
            <Link href="/" className="block rounded-xl px-3 py-2 transition hover:bg-white/10 hover:text-white" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="block rounded-xl px-3 py-2 transition hover:bg-white/10 hover:text-white" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <div className="rounded-xl px-3 py-2">
              <Link
                href="/high-charge-state-ions"
                className="block font-medium text-white"
                onClick={() => setMenuOpen(false)}
              >
                Technology
              </Link>
              <div className="mt-2 space-y-1 border-l border-cyan-400/20 pl-3">
                {[
                  ["/high-charge-state-ions", "Overview"],
                  ["/high-charge-state-ions/applications", "Applications"],
                  ["/high-charge-state-ions/production-challenges", "Production Challenges"],
                  ["/high-charge-state-ions/ion-source-technologies", "Ion Source Technologies"],
                ].map(([href, title]) => (
                  <Link
                    key={href}
                    href={href}
                    className="block rounded-lg px-2 py-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/news" className="block rounded-xl px-3 py-2 transition hover:bg-white/10 hover:text-white" onClick={() => setMenuOpen(false)}>
              News
            </Link>
            <Link href="/careers" className="block rounded-xl px-3 py-2 transition hover:bg-white/10 hover:text-white" onClick={() => setMenuOpen(false)}>
              Careers
            </Link>
            <Link href="/contact" className="block rounded-xl px-3 py-2 transition hover:bg-white/10 hover:text-white" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
