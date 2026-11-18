import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comparing High-Charge-State Ion Sources: ECR, EBIS, Foil Strippers & Vacuum Arcs",
  description:
    "Compare ECRIS, EBIS/EBIT, tandem foil strippers, vacuum arcs, and laser ion sources by charge state, operating mode, purity, current, and infrastructure.",
  keywords: [
    "ECR vs EBIS ion source",
    "electron cyclotron resonance ion source",
    "tandem accelerator foil stripping",
    "vacuum arc metal ion source",
    "high charge state ion source comparison",
  ],
};

const sourceRows = [
  {
    source: "ECR Ion Source (ECRIS)",
    mechanism: "Microwave electron heating in a magnetic bottle",
    mode: "Continuous (CW) or long pulse",
    charge: "6+ to 30+",
    strengths: "High reliability, continuous beam, no filaments",
    tradeoffs: "Superconducting magnets, RF power, oven/sputter downtime",
  },
  {
    source: "EBIS / EBIT",
    mechanism: "High-density electron beam in a UHV solenoid trap",
    mode: "Pulsed",
    charge: "20+ to 92+",
    strengths: "Ultra-high charge states, narrow CSD, low emittance",
    tradeoffs: "Lower average current, cryogenic and UHV complexity",
  },
  {
    source: "Tandem + Foil Stripper",
    mechanism: "High-velocity collisional stripping",
    mode: "Continuous or pulsed",
    charge: "8+ to 15+ at the terminal",
    strengths: "Ground-potential source, double voltage acceleration",
    tradeoffs: "Large MV footprint, foil degradation, 85–90%+ loss",
  },
  {
    source: "Vacuum Arc (MEVVA)",
    mechanism: "Electrical discharge on a metal cathode",
    mode: "Pulsed",
    charge: "1+ to 3+, up to 6+ enhanced",
    strengths: "High peak metal current, simple solid-target feed",
    tradeoffs: "Low mean charge, noise, erosion and macroparticles",
  },
  {
    source: "Bulk Laser Ion Source",
    mechanism: "Laser ablation of a solid target",
    mode: "Pulsed",
    charge: "5+ to 20+",
    strengths: "Produces refractory metals without ovens",
    tradeoffs: "Broad CSD, target cratering, debris and high laser power",
  },
];

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

export default function IonSourceTechnologiesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_38%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Source Technology Comparison
          </p>
          <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl">
            How Conventional High-Charge-State Ion Sources Work
          </h1>
          <aside className="mt-8 max-w-4xl rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.07] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Quick Summary
            </p>
            <p className="mt-3 text-base leading-8 text-slate-200 sm:text-lg">
              Accelerator facilities rely on Electron Cyclotron Resonance Ion Sources (ECRIS),
              Electron Beam Ion Sources and Traps (EBIS/EBIT), Tandem foil or gas strippers, and
              Vacuum Arc or Laser Ion Sources. Each excels in a different regime, but all involve
              trade-offs in footprint, power, consumables, current, or charge-state purity.
            </p>
          </aside>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[13rem_minmax(0,1fr)]">
        <nav aria-label="Ion source technology sections" className="hidden lg:block">
          <div className="sticky top-28 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              On this page
            </p>
            <ol className="mt-4 space-y-3 text-sm">
              {[
                ["#ecris", "ECRIS"],
                ["#ebis", "EBIS / EBIT"],
                ["#tandem", "Tandem + stripper"],
                ["#vacuum-arc", "Vacuum arc / LIS"],
                ["#comparison", "Comparison"],
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
            <SectionHeading number="01" id="ecris">
              Electron Cyclotron Resonance Ion Sources
            </SectionHeading>
            <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_18rem]">
              <div className="space-y-5 text-lg leading-8 text-slate-300">
                <p>
                  ECRIS sources are the workhorse front-end injectors for many heavy-ion cyclotrons
                  and continuous-wave linear accelerators. A low-pressure chamber is surrounded by
                  a minimum-B magnetic trap and microwave radiation.
                </p>
                <p>
                  When microwave frequency matches electron gyration frequency, trapped electrons
                  reach keV energies and repeatedly collide with atoms, stripping electrons step by step.
                </p>
              </div>
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                  Infrastructure
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Higher frequencies from 18–28 GHz require 2–4 Tesla fields, superconducting
                  magnets, high-power microwave transmitters, and cooling.
                </p>
              </div>
            </div>

            <figure className="mt-8 overflow-hidden rounded-3xl border border-dashed border-cyan-400/30 bg-slate-900/50 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                Figure 1 · ECRIS architecture
              </p>
              <div className="mt-7 grid items-center gap-4 md:grid-cols-[1fr_1.6fr_1fr]">
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 text-center">
                  <p className="text-sm text-slate-400">Microwave waveguide</p>
                  <p className="mt-2 font-mono text-cyan-100">10–28 GHz</p>
                </div>
                <div className="relative h-44 rounded-[3rem] border-4 border-cyan-400/25 bg-cyan-400/[0.04]">
                  <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/60 bg-cyan-300/[0.08]" />
                  <p className="absolute inset-x-0 bottom-4 text-center text-sm text-slate-300">
                    Minimum-B magnetic bottle
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 text-center">
                  <p className="text-sm text-slate-400">Extraction</p>
                  <p className="mt-2 font-mono text-cyan-100">q+ beam</p>
                </div>
              </div>
              <figcaption className="mt-5 border-t border-white/10 pt-5 text-sm leading-6 text-slate-400">
                Microwave heating, solenoid confinement, radial hexapole fields, and multi-charge extraction.
              </figcaption>
            </figure>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                <h3 className="font-semibold text-white">Strengths</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Reliable CW or long-pulse operation, high average current, and no consumable
                  plasma filament.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                <h3 className="font-semibold text-white">Trade-offs</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Superconducting magnets, high RF power, and oven or sputter systems for metals.
                </p>
              </div>
            </div>
          </section>

          <section>
            <SectionHeading number="02" id="ebis">
              Electron Beam Ion Sources and Traps
            </SectionHeading>
            <div className="mt-7 space-y-6 text-lg leading-7 text-slate-300">
              <p>
                EBIS and EBIT systems produce some of the highest laboratory charge states, including
                bare Uranium (U<sup>92+</sup>). An external electron gun launches a high-density,
                tightly focused beam through a superconducting solenoid.
              </p>
              <p>
                Cylindrical drift-tube electrodes trap ions inside the electron path for seconds,
                allowing successive electron impacts before pulsing the beam out.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["Ultra-high charge", "Nearly every electron can be removed from trapped atoms."],
                ["Narrow CSD", "A relatively pure final state and low transverse emittance."],
                ["Pulsed operation", "Lower average current with extreme UHV and cryogenic demands."],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading number="03" id="tandem">
              Tandem Accelerators &amp; Multi-Stage Stripping
            </SectionHeading>
            <div className="mt-7 space-y-6 text-lg leading-8 text-slate-300">
              <p>
                Tandem accelerators generate low-charge negative ions first, accelerate them toward
                a multi-megavolt positive terminal, then strip electrons in a carbon foil or gas cell
                before accelerating the positive ions away from the terminal.
              </p>
              <p>
                The ground-potential source is easy to maintain and the same voltage terminal provides
                a double energy boost, but the facility footprint is massive and stripper foils are
                consumable hardware.
              </p>
            </div>

            <figure className="mt-8 overflow-hidden rounded-3xl border border-dashed border-cyan-400/30 bg-slate-900/50 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                Figure 2 · Tandem strip-and-accelerate path
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-300">
                {["Au¹⁻ source", "First accelerator", "+15 MV terminal", "Carbon stripper", "Au¹⁰⁺ output"].map((label, index) => (
                  <div key={label} className="contents">
                    {index > 0 && <span className="text-cyan-300">→</span>}
                    <div className="min-w-28 rounded-xl border border-cyan-400/20 bg-slate-950/50 px-3 py-4 text-center">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
              <figcaption className="mt-5 border-t border-white/10 pt-5 text-sm leading-6 text-slate-400">
                Broad charge-state distributions can discard 85–90% or more of the beam while foil
                bombardment causes rapid degradation.
              </figcaption>
            </figure>
          </section>

          <section>
            <SectionHeading number="04" id="vacuum-arc">
              Vacuum Arc &amp; Bulk Laser Ion Sources
            </SectionHeading>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                <h3 className="text-xl font-semibold text-white">MEVVA vacuum arc</h3>
                <p className="mt-4 leading-7 text-slate-300">
                  High-current arcs strike a solid metal cathode in vacuum, vaporizing microscopic
                  cathode spots into dense plasma. It delivers high peak currents but usually yields
                  only 1+ to 3+, with up to 6+ through enhanced operation.
                </p>
                <p className="mt-4 text-sm text-slate-400">
                  Cathode erosion, noise, and macroparticle debris limit purity and maintenance.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                <h3 className="text-xl font-semibold text-white">Bulk laser ion source</h3>
                <p className="mt-4 leading-7 text-slate-300">
                  Pulsed CO<sub>2</sub> or Nd:YAG laser energy ablates a metal target and creates a hot
                  surface plasma. It can produce refractory metal ions without ovens.
                </p>
                <p className="mt-4 text-sm text-slate-400">
                  Broad charge distributions, target cratering, debris, and high laser power limit continuous operation.
                </p>
              </div>
            </div>
          </section>

          <section>
            <SectionHeading number="05" id="comparison">
              Technical Comparison
            </SectionHeading>
            <div className="-mx-6 mt-8 overflow-x-auto px-6 sm:mx-0 sm:px-0">
              <table className="w-full min-w-[960px] border-separate border-spacing-0 text-left text-sm">
                <thead>
                  <tr className="text-cyan-100">
                    {["Architecture", "Mechanism", "Mode", "Typical heavy-ion charge", "Strength", "Trade-off"].map((heading) => (
                      <th key={heading} className="border-b border-cyan-400/20 px-4 py-3 font-semibold">
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sourceRows.map((row) => (
                    <tr key={row.source} className="text-slate-300">
                      <td className="border-b border-white/[0.08] px-4 py-4 font-medium text-white">{row.source}</td>
                      <td className="border-b border-white/[0.08] px-4 py-4">{row.mechanism}</td>
                      <td className="border-b border-white/[0.08] px-4 py-4">{row.mode}</td>
                      <td className="border-b border-white/[0.08] px-4 py-4 text-cyan-200">{row.charge}</td>
                      <td className="border-b border-white/[0.08] px-4 py-4">{row.strengths}</td>
                      <td className="border-b border-white/[0.08] px-4 py-4">{row.tradeoffs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <aside className="mt-8 border-l-2 border-cyan-400/70 bg-cyan-400/[0.05] px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                The next frontier
              </p>
              <p className="mt-3 leading-7 text-slate-300">
                Beamline operators increasingly require higher charge states with lower operational
                complexity—removing excessive cryogenic infrastructure, consumable metal feeds,
                and lossy multi-stage stripping where possible.
              </p>
            </aside>
          </section>

          <section id="faq">
            <SectionHeading number="06" id="faq-heading">
              Frequently Asked Questions
            </SectionHeading>
            <div className="mt-7 space-y-4">
              {[
                [
                  "What is the difference between ECRIS and EBIS?",
                  "ECRIS traps a magnetically confined plasma heated by microwaves and operates continuously. EBIS uses a tightly compressed high-energy electron beam in a UHV trap to reach higher charge states in pulsed operation.",
                ],
                [
                  "Why do carbon stripper foils degrade?",
                  "Localized heating, radiation damage, and mechanical stress make thin carbon foils thicken, warp, and rupture. Heavy-ion facilities must periodically rotate or replace foil assemblies.",
                ],
                [
                  "What is the most common heavy-ion cyclotron source?",
                  "ECR ion sources are the global standard for heavy-ion cyclotrons because they operate continuously, avoid fragile filaments, and provide reliable intermediate-to-high charge states.",
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
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/high-charge-state-ions"
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] px-6 py-5 transition hover:border-cyan-300/40 hover:bg-cyan-400/[0.10]"
              >
                <p className="text-sm text-slate-400">Overview</p>
                <p className="mt-1 font-semibold text-white">What Are High-Charge-State Ions?</p>
              </Link>
              <Link
                href="/high-charge-state-ions/applications"
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] px-6 py-5 transition hover:border-cyan-300/40 hover:bg-cyan-400/[0.10]"
              >
                <p className="text-sm text-slate-400">Applications</p>
                <p className="mt-1 font-semibold text-white">Where High-Charge-State Ions Are Used</p>
              </Link>
              <Link
                href="/high-charge-state-ions/production-challenges"
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] px-6 py-5 transition hover:border-cyan-300/40 hover:bg-cyan-400/[0.10]"
              >
                <p className="text-sm text-slate-400">← Previous</p>
                <p className="mt-1 font-semibold text-white">Production Challenges</p>
              </Link>
            </div>
          </section>

          <section className="border-t border-white/10 pt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Authoritative External References
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
              {[
                ["https://www.jacow.org/", "Joint Accelerator Conferences Website (JACoW)", "ECR scaling, superconducting magnets, and metal beam production."],
                ["https://www.bnl.gov/", "Brookhaven National Laboratory", "RHIC electron-beam ion-source technology."],
                ["https://pubs.aip.org/aip/rsi", "Review of Scientific Instruments", "Peer-reviewed comparison of ECRIS, EBIS, MEVVA, and laser ion sources."],
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
