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
            <Link href="/contact" className="block rounded-xl px-3 py-2 transition hover:bg-white/10 hover:text-white" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
