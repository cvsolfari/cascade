import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="absolute inset-0">
        <img
          src="/img/IMG_2987.JPG"
          alt="Contact background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/75" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 py-20 sm:px-10">
        <Link href="/" className="text-sm text-cyan-300 transition hover:text-white">
          ← Home
        </Link>

        <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white">Contact Cascade Dynamics</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Contact us through our LinkedIn profiles.
        </p>

        <div className="mt-10 space-y-4">
          <a
            href="https://www.linkedin.com/in/erikziehm/"
            target="_blank"
            rel="noreferrer"
            className="group block rounded-3xl border border-cyan-500/15 bg-slate-900/80 p-6 transition hover:border-cyan-400/40 hover:bg-slate-900/95"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500 text-sm font-bold text-slate-950">
                in
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Erik Ziehm</p>
                <p className="mt-2 text-slate-300 transition group-hover:text-white">
                  linkedin.com/in/erikziehm
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/craigvodnik/"
            target="_blank"
            rel="noreferrer"
            className="group block rounded-3xl border border-cyan-500/15 bg-slate-900/80 p-6 transition hover:border-cyan-400/40 hover:bg-slate-900/95"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500 text-sm font-bold text-slate-950">
                in
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Craig Vodnik</p>
                <p className="mt-2 text-slate-300 transition group-hover:text-white">
                  linkedin.com/in/craigvodnik
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
