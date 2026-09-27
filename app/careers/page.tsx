export default function CareersPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.12),transparent_45%)]" />

      <div className="relative mx-auto max-w-5xl px-6 py-20 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
          Careers
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white">
          Build what comes next.
        </h1>
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-slate-300">
          <p>
            Cascade Dynamics is developing physics hardware to advance
            single-event-effects testing for space electronics. We focus on
            producing higher-charge-state, higher-energy ions to improve the
            effectiveness of existing test facilities and expand what
            lower-energy cyclotrons can do.
          </p>
          <p>
            Our work brings together light, matter, plasma, and charged-particle
            beams. Explore our current openings below.
          </p>
        </div>

        <section className="mt-14 border-t border-white/15" aria-labelledby="open-positions">
          <h2 id="open-positions" className="py-5 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
            Open positions
          </h2>
          <ul className="border-t border-white/10">
            <li className="border-b border-white/10">
              <a
                href="/jobs/CD-LNO.pdf"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-6 py-6 transition hover:text-cyan-300"
              >
                <span className="text-xl font-medium text-white group-hover:text-cyan-300">
                  Laser-Matter Interaction &amp; Optical Engineer
                </span>
                <span className="shrink-0 text-sm text-slate-400 group-hover:text-cyan-300">
                  View position <span aria-hidden="true">↗</span>
                </span>
              </a>
            </li>
            <li className="border-b border-white/10">
              <a
                href="/jobs/CD-CPP.pdf"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-6 py-6 transition hover:text-cyan-300"
              >
                <span className="text-xl font-medium text-white group-hover:text-cyan-300">
                  Computational Plasma Physicist
                </span>
                <span className="shrink-0 text-sm text-slate-400 group-hover:text-cyan-300">
                  View position <span aria-hidden="true">↗</span>
                </span>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}