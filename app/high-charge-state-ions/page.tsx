import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Are High-Charge-State Ions? Accelerator Physics & Scaling",
  description:
    "Learn what high-charge-state ions are, how increasing ion charge from +1 or +6 to +10+ multiplies accelerator energy, and why high-charge-state beams shrink facility size and cost.",
  keywords: [
    "high charge state ions",
    "multiply charged ions",
    "charge-to-mass ratio accelerator",
    "cyclotron energy scaling q^2",
    "heavy ion beam energy",
  ],
};

const comparisonRows = [
  {
    metric: "Energy at 100 kV extraction (E = qV)",
    one: "0.10 MeV",
    six: "0.60 MeV",
    ten: "1.00 MeV",
    gain: "+67% higher energy",
  },
  {
    metric: "Voltage needed for 1 MeV beam",
    one: "1,000 kV",
    six: "167 kV",
    ten: "100 kV",
    gain: "40% lower voltage",
  },
  {
    metric: "Cyclotron energy scaling (q²)",
    one: "1×",
    six: "36×",
    ten: "100×",
    gain: "2.78× higher output",
  },
  {
    metric: "Required magnetic bending field",
    one: "100%",
    six: "16.7%",
    ten: "10.0%",
    gain: "40% less rigidity",
  },
  {
    metric: "Downstream stripping losses",
    one: "High",
    six: "Moderate",
    ten: "Minimal to none",
    gain: "Higher usable current",
  },
];

function Formula({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border border-cyan-400/15 bg-slate-950/70 px-5 py-5 font-mono text-lg text-cyan-100 shadow-lg shadow-cyan-950/10 sm:px-7">
      {children}
    </div>
  );
}

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

export default function HighChargeStateIonsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_38%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            High-Charge-State Ion Fundamentals
          </p>
          <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl">
            What Are High-Charge-State Ions and Why Do They Matter?
          </h1>
          <aside className="mt-8 max-w-4xl rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.07] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Quick Summary
            </p>
            <p className="mt-3 text-base leading-8 text-slate-200 sm:text-lg">
              <strong className="text-white">High-charge-state ions</strong>, also called multiply
              charged ions, are atoms stripped of multiple electrons (q &gt; 1+), leaving a strong
              net positive charge. Because particle accelerators push ions using electric and
              magnetic fields, higher charge states act as a direct energy multiplier—enabling
              existing accelerators to reach higher beam energies or allowing new systems to be
              smaller, more compact, and lower cost.
            </p>
          </aside>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[13rem_minmax(0,1fr)]">
        <nav aria-label="Technical page sections" className="hidden lg:block">
          <div className="sticky top-28 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              On this page
            </p>
            <ol className="mt-4 space-y-3 text-sm">
              {[
                ["#definition", "Definition"],
                ["#energy-scaling", "Energy scaling"],
                ["#upgrade", "1+ vs. 6+ vs. 10+"],
                ["#infrastructure", "Size and cost"],
                ["#faq", "FAQ"],
                ["#references", "References"],
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
            <SectionHeading number="01" id="definition">
              How Are High-Charge-State Ions Defined?
            </SectionHeading>
            <div className="mt-7 space-y-6 text-lg leading-8 text-slate-300">
              <p>
                In a neutral atom, negatively charged electrons balance positively charged protons
                in the nucleus. Removing one outer electron creates a{" "}
                <strong className="text-white">singly charged ion (1+)</strong>. Removing two,
                ten, or dozens of electrons creates a{" "}
                <strong className="text-white">high-charge-state ion (q+)</strong>.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-300">
                    Light ions
                  </p>
                  <p className="mt-3 leading-7">
                    Stripping all electrons from Carbon or Oxygen yields bare nuclei such as C
                    <sup>6+</sup> and O<sup>8+</sup>.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-300">
                    Heavy metallic ions
                  </p>
                  <p className="mt-3 leading-7">
                    Stripping Iron, Gold, Lead, Bismuth, or Uranium produces multiply charged ions
                    ranging from 6+ and 10+ up to 30+ or higher.
                  </p>
                </div>
              </div>
              <p>
                Beam performance is governed by the ion&apos;s{" "}
                <strong className="text-white">charge-to-mass ratio (q/A)</strong>, where q is the
                net positive charge and A is the atomic mass number. Heavy atoms carry high mass,
                making them sluggish to accelerate unless they also carry a high positive charge.
                Increasing q directly increases the electromagnetic “handle” an accelerator can
                use to push and steer the particle.
              </p>
            </div>

            <figure className="mt-8 overflow-hidden rounded-3xl border border-dashed border-cyan-400/30 bg-slate-900/50">
              <div className="grid md:grid-cols-3">
                {[
                  ["Neutral Au⁰", "Nucleus + 79 electrons", "1×"],
                  ["Au¹⁺", "One electron removed", "1×"],
                  ["Au¹⁰⁺", "Ten electrons removed", "10×"],
                ].map(([title, detail, grip], index) => (
                  <div
                    key={title}
                    className={`p-7 ${
                      index < 2 ? "border-b border-cyan-400/15 md:border-r md:border-b-0" : ""
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                      Charge state {index + 1}
                    </p>
                    <div className="mt-5 flex h-28 items-center justify-center">
                      <div
                        className="relative h-20 w-20 rounded-full border-2 border-cyan-300/60"
                        style={{ boxShadow: index === 2 ? "0 0 35px rgba(34,211,238,.22)" : undefined }}
                        aria-hidden="true"
                      >
                        <div className="absolute inset-5 rounded-full bg-cyan-300/20" />
                        {index > 0 && (
                          <div className="absolute -right-3 top-1 h-2 w-2 rounded-full bg-cyan-200" />
                        )}
                        {index === 2 && (
                          <>
                            <div className="absolute -left-3 top-7 h-2 w-2 rounded-full bg-cyan-200" />
                            <div className="absolute bottom-0 right-1 h-2 w-2 rounded-full bg-cyan-200" />
                          </>
                        )}
                      </div>
                    </div>
                    <p className="text-center font-semibold text-white">{title}</p>
                    <p className="mt-2 text-center text-sm text-slate-400">{detail}</p>
                    <p className="mt-4 text-center font-mono text-xl text-cyan-200">
                      Electromagnetic grip: {grip}
                    </p>
                  </div>
                ))}
              </div>
              <figcaption className="border-t border-white/10 px-7 py-5 text-sm leading-6 text-slate-400">
                Figure 1: neutral atom, singly charged ion, and high-charge-state ion. Stripping
                more electrons increases the electromagnetic acceleration force in the same field.
              </figcaption>
            </figure>
          </section>

          <section>
            <SectionHeading number="02" id="energy-scaling">
              How Does Charge State Multiply Particle Accelerator Energy?
            </SectionHeading>
            <div className="mt-7 space-y-8 text-lg leading-8 text-slate-300">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Linear and Electrostatic Acceleration (E = qV)
                </h3>
                <p className="mt-4">
                  In an electrostatic accelerating gap or linear accelerator, kinetic energy gained
                  by an ion is the product of its charge state and the accelerating voltage:
                </p>
                <Formula>E = q · V</Formula>
                <ul className="mt-5 space-y-3 rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                  <li><strong className="text-white">1+ ion:</strong> Through 100 kV, gains 0.1 MeV.</li>
                  <li><strong className="text-white">6+ ion:</strong> Through 100 kV, gains 0.6 MeV.</li>
                  <li><strong className="text-white">10+ ion:</strong> Through 100 kV, gains 1.0 MeV—a tenfold increase over 1+.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Cyclotron Energy Scaling (E = K · q²/A)
                </h3>
                <p className="mt-4">
                  In circular accelerators such as cyclotrons, higher-charge ions experience stronger
                  inward magnetic bending forces and can be confined at higher velocities within the
                  same magnet radius.
                </p>
                <Formula>E<sub>max</sub> = K · (q² / A)</Formula>
                <p>
                  K is the cyclotron bending-limit constant determined by its magnet size and field
                  strength, while A is the ion&apos;s mass number. Higher charge therefore produces
                  nonlinear returns from the same core infrastructure.
                </p>
              </div>
            </div>

            <figure className="mt-8 overflow-hidden rounded-3xl border border-dashed border-cyan-400/30 bg-slate-900/50">
              <div className="grid md:grid-cols-2">
                <div className="border-b border-cyan-400/15 p-7 md:border-r md:border-b-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                    Linear scaling
                  </p>
                  <p className="mt-3 text-sm text-slate-400">Beam energy at 100 kV extraction</p>
                  <div className="mt-7 flex h-36 items-end gap-5">
                    {[30, 58, 92].map((height, index) => (
                      <div key={index} className="flex flex-1 flex-col items-center justify-end">
                        <span className="mb-2 font-mono text-sm text-cyan-100">
                          {[0.1, 0.6, 1.0][index]} MeV
                        </span>
                        <div
                          className="w-full rounded-t bg-gradient-to-t from-cyan-700 to-cyan-300"
                          style={{ height: `${height}%` }}
                        />
                        <span className="mt-2 text-sm text-slate-400">
                          {[1, 6, 10][index]}+
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                    Cyclotron scaling
                  </p>
                  <p className="mt-3 text-sm text-slate-400">Relative output energy</p>
                  <div className="mt-7 grid grid-cols-3 items-end gap-5">
                    {[
                      ["1×", "1+"],
                      ["36×", "6+"],
                      ["100×", "10+"],
                    ].map(([value, charge], index) => (
                      <div key={charge} className="text-center">
                        <p className="font-mono text-xl text-cyan-100">{value}</p>
                        <div
                          className="mt-3 mx-auto w-full rounded-t bg-gradient-to-t from-cyan-800 to-cyan-300"
                          style={{ height: `${[24, 58, 112][index]}px` }}
                        />
                        <p className="mt-2 text-sm text-slate-400">{charge}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <figcaption className="border-t border-white/10 px-7 py-5 text-sm leading-6 text-slate-400">
                Figure 2: linear energy scaling in a fixed-voltage linac and quadratic cyclotron
                scaling across 1+, 6+, and 10+ ions.
              </figcaption>
            </figure>
          </section>

          <section>
            <SectionHeading number="03" id="upgrade">
              Upgrading Existing Infrastructure: 1+ vs. 6+ vs. 10+
            </SectionHeading>
            <p className="mt-7 text-lg leading-8 text-slate-300">
              Replacing a singly charged source gives an obvious tenfold jump in electrostatic
              energy. However, facilities already operating conventional multi-charge sources
              producing 6+ ions can still gain transformative performance by reaching 10+ or
              higher. Moving from 6+ to 10+ nearly triples maximum beam energy on the same magnet.
            </p>
            <div className="-mx-6 mt-8 overflow-x-auto px-6 sm:mx-0 sm:px-0">
              <table className="w-full min-w-[760px] border-separate border-spacing-0 text-left text-sm">
                <thead>
                  <tr className="text-cyan-100">
                    {["Performance metric", "1+ source", "6+ source", "10+ source", "6+ → 10+ gain"].map((heading) => (
                      <th key={heading} className="border-b border-cyan-400/20 px-4 py-3 font-semibold">
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.metric} className="text-slate-300">
                      <td className="border-b border-white/[0.08] px-4 py-4 font-medium text-white">{row.metric}</td>
                      <td className="border-b border-white/[0.08] px-4 py-4">{row.one}</td>
                      <td className="border-b border-white/[0.08] px-4 py-4">{row.six}</td>
                      <td className="border-b border-white/[0.08] px-4 py-4 text-cyan-200">{row.ten}</td>
                      <td className="border-b border-white/[0.08] px-4 py-4">{row.gain}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <aside className="mt-8 border-l-2 border-cyan-400/70 bg-cyan-400/[0.05] px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                Facility impact
              </p>
              <p className="mt-3 leading-7 text-slate-300">
                Increasing the front-end charge state from 6+ to 10+ turns an existing medium-energy
                beamline into a higher-penetration system—unlocking deeper material testing without
                constructing a larger accelerator.
              </p>
            </aside>
          </section>

          <section>
            <SectionHeading number="04" id="infrastructure">
              How Do High-Charge-State Ions Reduce Infrastructure Size and Cost?
            </SectionHeading>
            <p className="mt-7 text-lg leading-8 text-slate-300">
              Generating higher charge states directly at the ion source delivers compounding
              engineering advantages across the accelerator pipeline:
            </p>
            <ol className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                ["01", "Shorter accelerating columns", "Target MeV energies require lower total voltage, reducing linear accelerator length and electrostatic column size."],
                ["02", "Lower magnetic rigidity", "Higher-charge ions can be steered and focused with smaller, lower-power dipole and quadrupole magnets."],
                ["03", "No lossy stripping stages", "Starting high at the source avoids accelerating, stripping, selecting one charge state, and accelerating again."],
                ["04", "Lower high-voltage risk", "Operating at 100 kV instead of 1,000 kV reduces electrical arcing, shielding needs, and insulator maintenance."],
              ].map(([number, title, description]) => (
                <li key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                  <span className="font-mono text-xs text-cyan-300">{number}</span>
                  <h3 className="mt-3 font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
                </li>
              ))}
            </ol>

            <figure className="mt-8 overflow-hidden rounded-3xl border border-dashed border-cyan-400/30 bg-slate-900/50">
              <div className="grid md:grid-cols-2">
                <div className="border-b border-cyan-400/15 p-7 md:border-r md:border-b-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                    Legacy low-charge pipeline
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-300">
                    <span className="rounded-lg border border-white/10 px-3 py-2">1+ source</span>
                    <span>→</span>
                    <span className="rounded-lg border border-red-400/30 px-3 py-2">Long HV column</span>
                    <span>→</span>
                    <span className="rounded-lg border border-amber-400/30 px-3 py-2">Foil stripper</span>
                    <span>→</span>
                    <span className="rounded-lg border border-white/10 px-3 py-2">Main accelerator</span>
                  </div>
                  <p className="mt-5 text-sm text-slate-400">Approximately 85–95% beam current discarded at stripping.</p>
                </div>
                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                    Direct high-charge pipeline
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-300">
                    <span className="rounded-lg border border-cyan-400/30 px-3 py-2">10+ source</span>
                    <span>→</span>
                    <span className="rounded-lg border border-cyan-400/30 px-3 py-2">Short column</span>
                    <span>→</span>
                    <span className="rounded-lg border border-cyan-400/30 px-3 py-2">Compact magnets</span>
                    <span>→</span>
                    <span className="rounded-lg border border-cyan-400/30 px-3 py-2">Accelerator</span>
                  </div>
                  <p className="mt-5 text-sm text-slate-400">No intermediate foil stage and a substantially smaller footprint.</p>
                </div>
              </div>
              <figcaption className="border-t border-white/10 px-7 py-5 text-sm leading-6 text-slate-400">
                Figure 3: beamline footprint comparison for legacy low-charge stripping and direct
                high-charge-state injection.
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
                  "What is the difference between a heavy ion and a high-charge-state ion?",
                  "A heavy ion refers to atomic mass, regardless of charge. A high-charge-state ion refers to how many electrons have been removed (q > 1+). An ion can be heavy without being highly charged, or highly charged without being heavy. Combining both—a high-charge-state heavy ion like Au13+—delivers high mass and high acceleration efficiency.",
                ],
                [
                  "Why is charge-to-mass ratio critical in accelerator physics?",
                  "The charge-to-mass ratio (q/A) determines how strongly an ion responds to electric and magnetic fields relative to its inertia. Heavy elements resist acceleration because of their large mass numbers. Increasing positive charge raises q/A, allowing standard voltages and compact magnetic fields to accelerate heavy species.",
                ],
                [
                  "How do high-charge-state ions enable smaller particle accelerators?",
                  "Kinetic energy scales linearly with charge state in electrostatic accelerators (E = qV) and quadratically in cyclotrons (E = Kq²/A). Higher charge states achieve the same final energy using shorter structures, lower RF power inputs, and smaller bending magnets.",
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
              Continue
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Link
                href="/high-charge-state-ions/applications"
                className="flex items-center justify-between rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] px-6 py-5 transition hover:border-cyan-300/40 hover:bg-cyan-400/[0.10]"
              >
                <div>
                  <p className="text-sm text-slate-400">Applications</p>
                  <p className="mt-1 font-semibold text-white">
                    Where High-Charge-State Heavy Ions Are Used
                  </p>
                </div>
                <span aria-hidden="true" className="ml-4 text-xl text-cyan-300">→</span>
              </Link>
              <Link
                href="/high-charge-state-ions/production-challenges"
                className="flex items-center justify-between rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] px-6 py-5 transition hover:border-cyan-300/40 hover:bg-cyan-400/[0.10]"
              >
                <div>
                  <p className="text-sm text-slate-400">Production challenges</p>
                  <p className="mt-1 font-semibold text-white">
                    Why High-Charge-State Ions Are Difficult to Produce
                  </p>
                </div>
                <span aria-hidden="true" className="ml-4 text-xl text-cyan-300">→</span>
              </Link>
            </div>
          </section>

          <section id="references" className="border-t border-white/10 pt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Authoritative External References
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
              <li>
                <a
                  href="https://arxiv.org/pdf/1302.3745"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-300 underline decoration-cyan-400/30 underline-offset-4 hover:text-cyan-200"
                >
                  CERN Accelerator School: Ion Sources for High-Power Hadron Accelerators
                </a>
                {" "}— ion extraction, charge-to-mass ratios, and accelerator injection.
              </li>
              <li>
                <a
                  href="https://physics.nist.gov/PhysRefData/ASD/ionEnergy.html"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-300 underline decoration-cyan-400/30 underline-offset-4 hover:text-cyan-200"
                >
                  NIST Atomic Spectra Database
                </a>
                {" "}— sequential electron binding-energy reference data.
              </li>
              <li>
                <a
                  href="https://cyclotron.lbl.gov/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-300 underline decoration-cyan-400/30 underline-offset-4 hover:text-cyan-200"
                >
                  Lawrence Berkeley National Laboratory 88-Inch Cyclotron
                </a>
                {" "}— cyclotron K-values, q²/A scaling, and heavy-ion beamlines.
              </li>
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
}
