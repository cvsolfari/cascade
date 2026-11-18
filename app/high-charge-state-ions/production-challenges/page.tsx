import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why High-Charge-State Ions Are So Hard to Make: Physics & Engineering Limits",
  description:
    "Learn about rising ionization energies, broad charge-state distributions, space-charge blow-up, and solid-metal feed challenges in high-charge-state ion production.",
  keywords: [
    "why are high charge state ions difficult to produce",
    "charge state distribution ion source",
    "sequential ionization energy heavy ions",
    "space charge blow up ion beam",
    "metal ion source challenges",
  ],
};

function SectionHeading({
  number,
  id,
  children,
}: {
  number: string;
  id: string;
  children: ReactNode;
}) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 border-b border-white/10 pb-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
    >
      <span className="mr-3 font-mono text-sm text-cyan-300">{number}</span>
      {children}
    </h2>
  );
}

export default function ProductionChallengesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_38%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Production Challenges
          </p>
          <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl">
            Why Is It So Difficult to Produce High-Charge-State Ions?
          </h1>
          <aside className="mt-8 max-w-4xl rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.07] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Quick Summary
            </p>
            <p className="mt-3 text-base leading-8 text-slate-200 sm:text-lg">
              Producing high-charge-state ions requires exponentially increasing ionization
              energies—ranging from a few electron-volts for outer electrons to tens of thousands
              of electron-volts for inner shells. Conventional plasma sources also generate broad
              charge-state distributions, discard much of the generated beam, and battle
              space-charge blow-up during extraction.
            </p>
          </aside>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[13rem_minmax(0,1fr)]">
        <nav aria-label="Production challenges sections" className="hidden lg:block">
          <div className="sticky top-28 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              On this page
            </p>
            <ol className="mt-4 space-y-3 text-sm">
              {[
                ["#ionization", "Ionization"],
                ["#csd", "Charge states"],
                ["#space-charge", "Space charge"],
                ["#metal-feed", "Metal feed"],
                ["#faq", "FAQ"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="block text-slate-300 transition hover:text-cyan-300">
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <article className="min-w-0 space-y-16">
          <section>
            <SectionHeading number="01" id="ionization">
              Exponentially Rising Ionization Potentials
            </SectionHeading>
            <div className="mt-7 space-y-6 text-lg leading-8 text-slate-300">
              <p>
                Removing the first outer valence electron is relatively easy, typically requiring
                5–15 electron-volts (eV). After each electron is removed, the remaining electrons
                are drawn closer to the nucleus and bound far more tightly.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  ["1+ to 4+", "Tens of eV", "Accessible in standard low-temperature discharges."],
                  ["10+ to 20+", "Hundreds to thousands of eV", "Requires sustained high-energy electron bombardment."],
                  ["30+ to fully stripped", "Tens of thousands of eV", "Fully stripping Uranium can exceed 100 keV."],
                ].map(([range, level, detail], index) => (
                  <div
                    key={range}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
                    style={{ marginTop: `${index * 12}px` }}
                  >
                    <p className="text-sm font-semibold text-cyan-300">{range}</p>
                    <p className="mt-3 font-mono text-lg text-white">{level}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{detail}</p>
                  </div>
                ))}
              </div>

              <h3 className="pt-3 text-xl font-semibold text-white">
                The Confinement Time vs. Recombination Trade-Off
              </h3>
              <p>
                A single collision rarely removes ten or twenty electrons at once. Conventional
                sources instead rely on stepwise electron-impact ionization, creating a difficult
                balance governed by the plasma confinement product n<sub>e</sub>τ<sub>i</sub>.
              </p>
              <ul className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                <li>Ions must remain trapped in a hot electron cloud for dozens of successive ionizing collisions.</li>
                <li>An ultra-high vacuum is required to prevent charge-exchange recombination with neutral gas atoms.</li>
                <li>A single collision with residual gas can strip away one or more electron-loss gains instantly.</li>
              </ul>
            </div>

            <figure className="mt-8 overflow-hidden rounded-3xl border border-dashed border-cyan-400/30 bg-slate-900/50 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                Figure 1 · Sequential ionization staircase
              </p>
              <svg
                viewBox="0 0 720 280"
                role="img"
                aria-label="Placeholder step chart showing rising sequential ionization energies"
                className="mt-6 w-full"
              >
                <path d="M55 235H690M55 235V30" fill="none" stroke="rgba(148,163,184,.3)" />
                <path
                  d="M55 220H115V205H175V182H235V150H295V112H355V70H415V48H475V38H535V34H690"
                  fill="none"
                  stroke="#67e8f9"
                  strokeWidth="5"
                />
                {[55, 115, 175, 235, 295, 355, 415, 475, 535].map((x) => (
                  <circle key={x} cx={x} cy={220 - (x - 55) * 0.31} r="4" fill="#a5f3fc" />
                ))}
              </svg>
              <figcaption className="mt-4 border-t border-white/10 pt-5 text-sm leading-6 text-slate-400">
                Figure 1: sequential ionization energy rises sharply as outer electrons are removed
                and inner electron shells are reached.
              </figcaption>
            </figure>
          </section>

          <section>
            <SectionHeading number="02" id="csd">
              Charge-State Distribution &amp; Filtering Bottleneck
            </SectionHeading>
            <div className="mt-7 space-y-6 text-lg leading-8 text-slate-300">
              <p>
                Even after reaching sufficient electron temperature, conventional thermal and
                statistical collisions cannot produce one pure charge state. Instead, the plasma
                emits a broad bell-curve spectrum known as a Charge State Distribution (CSD).
              </p>
              <p>
                If an operator needs Au<sup>13+</sup> or Xe<sup>20+</sup>, the source may produce
                neighboring states from 8+ through 18+. Different charge-to-mass ratios accelerate
                and bend differently, so mixed states cannot remain in the same tuned beamline.
              </p>
              <aside className="border-l-2 border-cyan-400/70 bg-cyan-400/[0.05] px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                  Massive beam waste
                </p>
                <p className="mt-3 leading-7 text-slate-300">
                  A dipole analyzing magnet separates the desired charge state from all neighbors.
                  In many heavy-ion operations, 85% to 99% of the generated ions and the electrical
                  energy spent creating them are discarded before the main accelerator.
                </p>
              </aside>
            </div>

            <figure className="mt-8 overflow-hidden rounded-3xl border border-dashed border-cyan-400/30 bg-slate-900/50 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                Figure 2 · CSD magnetic filtering
              </p>
              <div className="mt-7 grid items-center gap-5 md:grid-cols-[1fr_1.5fr_1fr]">
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-center">
                  <p className="text-sm text-slate-400">Mixed source output</p>
                  <p className="mt-3 font-mono text-cyan-100">q = 6+ … 18+</p>
                </div>
                <div className="relative h-32 rounded-full border-4 border-cyan-400/20">
                  <p className="absolute inset-x-0 top-12 text-center text-sm text-slate-300">
                    Dipole analyzing magnet
                  </p>
                </div>
                <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/[0.07] p-5 text-center">
                  <p className="text-sm text-slate-400">Selected state</p>
                  <p className="mt-3 font-mono text-xl text-cyan-100">q = 13+</p>
                </div>
              </div>
              <figcaption className="mt-5 border-t border-white/10 pt-5 text-sm leading-6 text-slate-400">
                Figure 2: only one narrow charge-state stream passes into the accelerator; unwanted
                states strike beam dumps or side walls.
              </figcaption>
            </figure>
          </section>

          <section>
            <SectionHeading number="03" id="space-charge">
              Space-Charge Blow-Up and Emittance Degradation
            </SectionHeading>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {[
                ["q² repulsion", "Dense 10+ or 20+ ions exert strong outward Coulomb forces that scale with the square of charge state."],
                ["Electron shielding", "Free electrons can shield positive charge inside the plasma, but that protection disappears at extraction."],
                ["Emittance growth", "Unshielded ions push apart radially, diverging before they fit into downstream accelerator apertures."],
                ["Precision optics", "Accel-decel electrodes and magnetic focusing must precisely control the extracted beam and compensate for space charge."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading number="04" id="metal-feed">
              Solid-Metal Feed &amp; Hardware Wear
            </SectionHeading>
            <div className="mt-7 space-y-6 text-lg leading-7 text-slate-300">
              <p>
                Valuable beams such as Gold, Iron, Titanium, Bismuth, and Uranium require
                non-volatile metallic elements. Unlike gases, these solids must first be vaporized
                before ionization.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                  <h3 className="font-semibold text-white">High-temperature micro-ovens</h3>
                  <p className="mt-3 text-sm text-slate-400">
                    Refractory metals may require 1,000–2,000°C evaporation, with uneven vapor
                    rates, low utilization, and frequent crucible reloads.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                  <h3 className="font-semibold text-white">Sputtering and vacuum arcs</h3>
                  <p className="mt-3 text-sm text-slate-400">
                    Metal condenses onto chamber walls, ceramic insulators, and microwave windows,
                    causing electrical arcing and maintenance shutdowns.
                  </p>
                </div>
              </div>
            </div>

            <figure className="mt-8 grid gap-4 rounded-3xl border border-dashed border-cyan-400/30 bg-slate-900/50 p-7 md:grid-cols-4">
              {[
                ["Atomic binding", "keV inner-shell barriers"],
                ["Statistical CSD", "85–99% beam waste"],
                ["Space charge", "q² beam divergence"],
                ["Solid metals", "contamination and downtime"],
              ].map(([title, detail], index) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                  <p className="font-mono text-xs text-cyan-300">0{index + 1}</p>
                  <p className="mt-3 font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm text-slate-400">{detail}</p>
                </div>
              ))}
              <figcaption className="col-span-full border-t border-white/10 pt-5 text-sm leading-6 text-slate-400">
                Figure 3: the four principal barriers to producing high-charge-state ions.
              </figcaption>
            </figure>
          </section>

          <section id="faq">
            <SectionHeading number="05" id="faq-heading">
              Frequently Asked Questions
            </SectionHeading>
            <div className="mt-7 space-y-4">
              {[
                [
                  "What is a Charge State Distribution?",
                  "A CSD is the spectrum of positive charge states produced simultaneously by an ion source. Random statistical collisions produce a mixture rather than one pure charge state, requiring magnetic filtering.",
                ],
                [
                  "Why are high-charge-state metal ions harder than gas ions?",
                  "Gases can be metered directly into vacuum. Metals must be vaporized with ovens or sputtering probes, after which vapor can coat chamber surfaces and cause electrical arcing.",
                ],
                [
                  "What causes space-charge blow-up?",
                  "Densely packed positive ions repel one another after leaving the plasma electron cloud. Because the force scales with q², high-charge-state beams diverge quickly unless extraction and focusing are precisely controlled.",
                ],
              ].map(([question, answer]) => (
                <details key={question} className="group rounded-2xl border border-white/10 bg-white/[0.035] open:bg-white/[0.055]">
                  <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-white marker:hidden">
                    <span className="mr-3 text-cyan-300 transition group-open:rotate-45">+</span>
                    {question}
                  </summary>
                  <p className="px-6 pb-6 leading-7 text-slate-300">{answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="border-t border-white/10 pt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Series Navigation
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Link
                href="/high-charge-state-ions/applications"
                className="flex items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] px-6 py-5 transition hover:border-cyan-300/40 hover:bg-cyan-400/[0.10]"
              >
                <div>
                  <p className="text-sm text-slate-400">← Previous</p>
                  <p className="mt-1 font-semibold text-white">Applications</p>
                </div>
              </Link>
              <Link
                href="/high-charge-state-ions"
                className="flex items-center justify-between rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] px-6 py-5 transition hover:border-cyan-300/40 hover:bg-cyan-400/[0.10]"
              >
                <div>
                  <p className="text-sm text-slate-400">Back to overview</p>
                  <p className="mt-1 font-semibold text-white">What Are High-Charge-State Ions?</p>
                </div>
              </Link>
            </div>
          </section>

          <section className="border-t border-white/10 pt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Authoritative External References
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
              {[
                ["https://physics.nist.gov/PhysRefData/ASD/ionEnergy.html", "NIST Atomic Spectra Database", "Sequential ionization-energy thresholds for every element."],
                ["https://cyclotron.lbl.gov/", "Lawrence Berkeley National Laboratory 88-Inch Cyclotron", "Metal ovens, sputtering techniques, and CSD optimization."],
                ["https://cds.cern.ch/", "CERN Accelerator School", "Beam extraction, emittance growth, and space-charge compensation."],
              ].map(([href, title, description]) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-300 underline decoration-cyan-400/30 underline-offset-4 hover:text-cyan-200"
                  >
                    {title}
                  </a>
                  {" "}— {description}
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
}
