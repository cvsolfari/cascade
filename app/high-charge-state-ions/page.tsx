import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "High-Charge-State Ion Injection: q/A Scaling, Rigidity & Accelerator Performance",
  description:
    "Technical analysis of high-charge-state ion injection for particle accelerators, covering q/A scaling, magnetic rigidity, space-charge limits, and stripper foil losses.",
  keywords: [
    "high charge state ion injection",
    "charge-to-mass ratio accelerator design",
    "cyclotron K-value q^2/A scaling",
    "magnetic rigidity heavy ions",
    "electrical vs particle microamps",
  ],
};

const comparisonRows = [
  {
    parameter: "Extraction energy at 100 kV (E = qV)",
    one: "0.10 MeV",
    six: "0.60 MeV",
    ten: "1.00 MeV",
    impact: "+67% higher injection energy",
  },
  {
    parameter: "Effective linac voltage for 10 MeV",
    one: "10.0 MV",
    six: "1.67 MV",
    ten: "1.00 MV",
    impact: "40% reduction in voltage/cavity count",
  },
  {
    parameter: "Cyclotron energy scaling factor (q2)",
    one: "1x",
    six: "36x",
    ten: "100x",
    impact: "2.78x higher MeV/u on the same magnet",
  },
  {
    parameter: "Magnetic rigidity at fixed momentum",
    one: "100%",
    six: "16.7%",
    ten: "10.0%",
    impact: "40% lower B rho",
  },
  {
    parameter: "Stripper foil / gas cell requirement",
    one: "Mandatory",
    six: "Often required",
    ten: "Eliminated",
    impact: "Avoids 85–95% charge-state loss",
  },
];

function Formula({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border border-cyan-400/15 bg-slate-950/70 px-5 py-5 font-mono text-base text-cyan-100 shadow-lg shadow-cyan-950/10 sm:px-7">
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
      <span className="mr-3 font-mono text-sm font-semibold text-cyan-300">
        {number}
      </span>
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
            Technical Pillar
          </p>
          <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl">
            High-Charge-State Ion Injection: <span className="text-cyan-200">q/A</span> Scaling,
            Rigidity, and Accelerator Performance
          </h1>
          <aside className="mt-8 max-w-4xl rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.07] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Executive Summary
            </p>
            <p className="mt-3 text-base leading-8 text-slate-200 sm:text-lg">
              For accelerator physicists and beamline engineers, elevating the front-end ion
              charge state (q) is the highest-leverage method for increasing terminal beam
              energy without scaling up magnet mass, RF power, or linac length. Increasing q/A
              reduces magnetic rigidity, compresses RFQ and DTL synchronous velocity profiles,
              scales cyclotron output energy quadratically, and eliminates lossy intermediate
              stripping stages—though it introduces tighter space-charge extraction and LEBT
              emittance constraints.
            </p>
          </aside>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[13rem_minmax(0,1fr)]">
        <nav
          aria-label="Technical page sections"
          className="hidden lg:block"
        >
          <div className="sticky top-28 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              On this page
            </p>
            <ol className="mt-4 space-y-3 text-sm">
              {[
                ["#q-a-scaling", "q/A scaling"],
                ["#quantifying-the-upgrade", "The upgrade"],
                ["#magnetic-rigidity", "Rigidity"],
                ["#stripper-losses", "Stripper losses"],
                ["#extraction-tradeoffs", "Extraction limits"],
                ["#faq", "FAQ"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="block text-slate-300 transition hover:text-cyan-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <article className="min-w-0 space-y-16">
          <section>
            <SectionHeading number="01" id="q-a-scaling">
              Charge-to-Mass Ratio (q/A) and Accelerator Scaling Laws
            </SectionHeading>
            <div className="mt-7 space-y-6 text-lg leading-8 text-slate-300">
              <p>
                In heavy-ion accelerator design, performance is dictated by the injected ion&apos;s{" "}
                <strong className="text-white">charge-to-mass ratio (q/A)</strong>. Heavy nuclei
                (A ≥ 40) carry substantial rest-mass inertia; injecting them at low charge states
                forces downstream structures to compensate with higher accelerating gradients,
                longer drift tubes, or massive dipole bending fields.
              </p>

              <h3 className="pt-3 text-xl font-semibold text-white">
                Electrostatic and RF Linear Accelerators (E = qV)
              </h3>
              <p>
                Across an electrostatic extraction gap or RF accelerating cavity, total kinetic
                energy scales linearly with charge state:
              </p>
              <Formula>E = q · V<sub>eff</sub></Formula>
              <p>
                More critically for Radio-Frequency Quadrupole (RFQ) and Drift-Tube Linac (DTL)
                front ends, higher q/A directly increases the ion velocity (β = v/c) at a fixed
                extraction potential:
              </p>
              <Formula>β ≈ 1.46 × 10<sup>-3</sup> √(q · U / A)</Formula>
              <p>
                Here, U is the extraction voltage in kV. Higher initial β lengthens the first RFQ
                cell periods (βλ/2), relaxing machining tolerances, lowering surface electric field
                stress, and reducing overall linac real estate for a target MeV/u output.
              </p>

              <h3 className="pt-3 text-xl font-semibold text-white">
                Isochronous &amp; Superconducting Cyclotrons (E<sub>max</sub> = K · q²/A)
              </h3>
              <p>
                In circular accelerators bounded by magnet pole radius (R) and maximum flux density
                (B<sub>max</sub>), non-relativistic output energy per nucleon scales with the square
                of the charge-to-mass ratio:
              </p>
              <Formula>E<sub>max</sub> / A = K · (q / A)<sup>2</sup></Formula>
              <Formula>K = (e · B<sub>max</sub> · R)<sup>2</sup> / (2 · m<sub>u</sub>)</Formula>
              <p>
                Because energy scales as q², incremental gains in front-end charge state yield
                non-linear returns on existing cyclotron infrastructure without modifying the main
                magnet or RF dee geometry.
              </p>
            </div>

            <figure className="mt-8 overflow-hidden rounded-3xl border border-dashed border-cyan-400/30 bg-slate-900/50">
              <div className="grid min-h-64 md:grid-cols-2">
                <div className="flex flex-col justify-between border-b border-cyan-400/15 p-7 md:border-r md:border-b-0">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                      Figure 1 · Linac scaling
                    </p>
                    <p className="mt-3 text-sm text-slate-400">
                      Extraction velocity and required effective voltage
                    </p>
                  </div>
                  <div className="mt-8 flex h-32 items-end gap-3" aria-hidden="true">
                    {[28, 38, 48, 59, 71, 84, 96].map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t bg-gradient-to-t from-cyan-700 to-cyan-300"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-between p-7">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                      Figure 1 · Cyclotron scaling
                    </p>
                    <p className="mt-3 text-sm text-slate-400">
                      Output energy versus charge state at fixed K-value
                    </p>
                  </div>
                  <svg
                    viewBox="0 0 500 180"
                    role="img"
                    aria-label="Placeholder engineering plot showing quadratic cyclotron energy scaling with ion charge state"
                    className="mt-8 w-full"
                  >
                    <path d="M20 160H480M20 160V20" fill="none" stroke="rgba(148,163,184,.25)" />
                    <path d="M22 158C120 154 220 142 305 112C390 82 430 48 478 22" fill="none" stroke="#67e8f9" strokeWidth="5" />
                    {[22, 100, 180, 260, 340, 420, 478].map((x) => (
                      <circle key={x} cx={x} cy={x === 478 ? 22 : 158 - (x - 22) * 0.34} r="4" fill="#a5f3fc" />
                    ))}
                  </svg>
                </div>
              </div>
              <figcaption className="border-t border-white/10 px-7 py-5 text-sm leading-6 text-slate-400">
                Figure 1 placeholder: two-panel engineering plot for a heavy species across charge
                states q = 1+ to 25+, showing extraction beta and cyclotron MeV/u output.
              </figcaption>
            </figure>
          </section>

          <section>
            <SectionHeading number="02" id="quantifying-the-upgrade">
              Quantifying the Upgrade: 1+ vs. 6+ vs. 10+ Front Ends
            </SectionHeading>
            <p className="mt-7 text-lg leading-8 text-slate-300">
              Replacing a 1+ source yields an order-of-magnitude reduction in electrostatic voltage.
              Many operational heavy-ion facilities already use conventional sources delivering
              intermediate states around 6+. Stepping up to 10+ or higher fundamentally alters
              downstream beamline and accelerator economics.
            </p>
            <div className="-mx-6 mt-8 overflow-x-auto px-6 sm:mx-0 sm:px-0">
              <table className="w-full min-w-[760px] border-separate border-spacing-0 text-left text-sm">
                <thead>
                  <tr className="text-cyan-100">
                    {["Accelerator / beamline parameter", "1+", "6+", "10+", "6+ → 10+ impact"].map((heading) => (
                      <th key={heading} className="border-b border-cyan-400/20 px-4 py-3 font-semibold">
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.parameter} className="text-slate-300">
                      <td className="border-b border-white/[0.08] px-4 py-4 font-medium text-white">{row.parameter}</td>
                      <td className="border-b border-white/[0.08] px-4 py-4">{row.one}</td>
                      <td className="border-b border-white/[0.08] px-4 py-4">{row.six}</td>
                      <td className="border-b border-white/[0.08] px-4 py-4 text-cyan-200">{row.ten}</td>
                      <td className="border-b border-white/[0.08] px-4 py-4">{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <aside className="mt-8 border-l-2 border-cyan-400/70 bg-cyan-400/[0.05] px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                Practical operational consequence
              </p>
              <p className="mt-3 text-base leading-7 text-slate-300">
                In Single Event Effects (SEE) radiation testing, thick 3D stacked microelectronics
                require heavy-ion beams with higher MeV/u to achieve deeper silicon penetration
                ranges. Upgrading an existing cyclotron&apos;s front-end source from 6+ to 10+ can
                nearly triple maximum beam energy on the existing magnet, converting a medium-energy
                beamline into a deep-penetration test facility without civil construction or magnet
                replacement.
              </p>
            </aside>
          </section>

          <section>
            <SectionHeading number="03" id="magnetic-rigidity">
              Magnetic Rigidity (Bρ) and Low-Energy Beam Transport
            </SectionHeading>
            <div className="mt-7 space-y-6 text-lg leading-8 text-slate-300">
              <p>
                An ion&apos;s resistance to magnetic deflection—its magnetic rigidity (Bρ)—is governed
                by momentum-to-charge ratio:
              </p>
              <Formula>Bρ = p / q = √(2mE) / q</Formula>
              <p>
                When comparing ions accelerated to the same kinetic energy, rigidity scales as 1/q.
                When comparing ions accelerated through the same electrostatic potential:
              </p>
              <Formula>Bρ = √(2mqV) / q = √(2mV / q) ∝ 1 / √q</Formula>
              <p>
                Higher charge states reduce the ampere-turns required in LEBT analyzing dipoles,
                switching magnets, and quadrupole doublets—reducing magnet weight, power supply
                draw, and cooling overhead while keeping beamline optics below iron saturation.
              </p>
            </div>
          </section>

          <section>
            <SectionHeading number="04" id="stripper-losses">
              Eliminating Intermediate Stripping Losses and Emittance Growth
            </SectionHeading>
            <p className="mt-7 text-lg leading-8 text-slate-300">
              Facilities injecting low-charge ions (1+ to 6+) into high-energy linacs or
              synchrotrons must accelerate the beam to an intermediate energy (approximately
              1–10 MeV/u) and pass it through a carbon stripper foil or gas stripper cell.
              Stripping imposes severe penalties:
            </p>
            <ol className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["01", "Charge-state distribution attrition", "Collisional stripping produces a broad equilibrium distribution. Selecting one charge state downstream typically discards 85–95% of total particle current."],
                ["02", "Emittance blow-up", "Coulomb scattering and energy-loss straggling irreversibly degrade transverse emittance and longitudinal energy spread."],
                ["03", "Foil degradation", "High-intensity heavy ions cause thermal and displacement damage in nanometer-scale foils, producing rupture and beam downtime."],
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
                    Pre-stripper path
                  </p>
                  <p className="mt-5 text-sm leading-7 text-slate-300">
                    Low-q source → pre-accelerator → foil stripper → broad charge-state fan-out
                    → analyzing slits → main accelerator
                  </p>
                  <div className="mt-7 h-20 border-l border-cyan-300/30">
                    {[44, 64, 84, 64, 44].map((width, index) => (
                      <div key={index} className="mt-1 h-2 rounded-r bg-cyan-300/50" style={{ width: `${width}%` }} />
                    ))}
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                    Direct high-q path
                  </p>
                  <p className="mt-5 text-sm leading-7 text-slate-300">
                    High-q source → compact LEBT → main accelerator
                  </p>
                  <div className="mt-7 h-20 rounded-full border border-cyan-300/40 bg-cyan-300/[0.08] px-8 py-7">
                    <div className="h-6 w-3/4 rounded-full bg-cyan-300/50" />
                  </div>
                </div>
              </div>
              <figcaption className="border-t border-white/10 px-7 py-5 text-sm leading-6 text-slate-400">
                Figure 2 placeholder: phase-space and particle-current comparison of stripper-loss
                transport versus direct high-charge-state injection.
              </figcaption>
            </figure>
          </section>

          <section>
            <SectionHeading number="05" id="extraction-tradeoffs">
              Extraction and Transport Trade-Offs
            </SectionHeading>
            <div className="mt-7 space-y-8 text-lg leading-8 text-slate-300">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Electrical Current vs. Particle Current
                </h3>
                <p className="mt-4">
                  In multi-charge-state operations, electrical current (I<sub>elec</sub>) and
                  particle flux (I<sub>part</sub>) diverge by a factor of q:
                </p>
                <Formula>I<sub>part</sub> [pμA] = I<sub>elec</sub> [eμA] / q</Formula>
                <p>
                  A 100 eμA beam of Au<sup>10+</sup> carries 10 pμA, or approximately
                  6.24 × 10<sup>13</sup> ions/s. Because downstream target interactions depend on
                  particle flux, high-charge-state sources must maintain both particle-current
                  density and charge purity.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">Child-Langmuir Extraction Scaling</h3>
                <p className="mt-4">
                  In a space-charge-limited extraction diode of gap width d and extraction voltage U,
                  maximum extractable electrical current density J<sub>CL</sub> scales as:
                </p>
                <Formula>
                  J<sub>CL</sub> = (4/9) ε<sub>0</sub> √(2eq/m<sub>i</sub>) · U<sup>3/2</sup>/d<sup>2</sup>
                </Formula>
                <p>
                  Electrical current density increases with √q, while particle current density
                  (J<sub>part</sub> = J<sub>CL</sub>/q) scales inversely as 1/√q at fixed gap and
                  voltage. Uncompensated space-charge repulsion immediately downstream of the plasma
                  meniscus scales with q²—requiring multi-electrode accel-decel extraction systems,
                  tight magnetic focusing close to the aperture, and careful vacuum management.
                </p>
              </div>
            </div>

            <figure className="mt-8 overflow-hidden rounded-3xl border border-dashed border-cyan-400/30 bg-slate-900/50 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                Figure 3 · Extraction meniscus
              </p>
              <div className="mt-7 grid min-h-48 items-center gap-4 sm:grid-cols-[1fr_1fr_1fr_1fr]">
                {["Plasma electrode", "Suppressor", "Puller", "Ground"].map((label, index) => (
                  <div key={label} className="relative flex h-36 items-end justify-center rounded-xl border border-white/10 bg-slate-950/50 p-3">
                    <div
                      className="absolute top-0 h-full rounded border border-cyan-300/30"
                      style={{ width: index === 0 ? "34%" : "18%" }}
                    />
                    <span className="relative text-center text-xs font-medium text-slate-300">{label}</span>
                  </div>
                ))}
              </div>
              <figcaption className="mt-5 border-t border-white/10 pt-5 text-sm leading-6 text-slate-400">
                Figure 3 placeholder: cross-section of an accel-decel extraction system showing the
                plasma meniscus, uncompensated space-charge region, and magnetic focusing into the LEBT.
              </figcaption>
            </figure>
          </section>

          <section id="faq">
            <SectionHeading number="06" id="faq-heading">
              Frequently Asked Questions
            </SectionHeading>
            <div className="mt-7 space-y-4">
              {[
                [
                  "How do you convert electrical microamps (eμA) to particle microamps (pμA)?",
                  "Divide the measured electrical beam current by the ion charge state q. For example, 150 eμA of Xe15+ equals 10 pμA of actual particle flux.",
                ],
                [
                  "Why does higher q/A reduce RFQ and DTL accelerator length?",
                  "Higher q/A increases ion velocity at a fixed extraction potential and raises energy gain per meter of accelerating gradient. Consequently, fewer RF cavities and lower total megavolts are required to reach a given MeV/u threshold.",
                ],
                [
                  "How does background vacuum pressure affect high-charge-state beam transport?",
                  "Highly charged ions have large cross-sections for charge-exchange collisions with residual neutral gas. To prevent beam attenuation and charge-state degradation during LEBT transport, vacuum pressures typically must be maintained below 10-7 to 10-8 Torr.",
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
                {" "}— extraction, emittance, space-charge compensation, and q/A scaling.
              </li>
              <li>
                <a
                  href="https://www.jacow.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-300 underline decoration-cyan-400/30 underline-offset-4 hover:text-cyan-200"
                >
                  Joint Accelerator Conferences Website (JACoW)
                </a>
                {" "}— proceedings on cyclotron scaling, LEBT optics, and heavy-ion stripper losses.
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
                {" "}— ionization-energy reference data across heavy elements.
              </li>
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
}
