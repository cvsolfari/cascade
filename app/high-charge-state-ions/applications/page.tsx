import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Where High-Charge-State Heavy Ions Are Used: 3D Chips, Cancer Therapy & Space",
  description:
    "Explore applications of high-charge-state heavy ions in 3D semiconductor radiation testing, cancer therapy, semiconductor implantation, and nuclear research.",
  keywords: [
    "high charge state heavy ion applications",
    "heavy ion radiation testing 3D chips",
    "single event effects testing heavy ions",
    "carbon ion therapy Bragg peak",
    "heavy ion implantation",
  ],
};

const applicationRows = [
  {
    field: "Aerospace & 3D Chip SEE Testing",
    ions: "Ar, Kr, Xe, Au, Pb",
    charge: "10+ to 40+",
    requirement: "High terminal energy (>100 MeV/u), wide uniform beam spot",
    driver: "Penetrate >1 mm through 3D chip packaging",
  },
  {
    field: "Heavy-Ion Cancer Radiotherapy",
    ions: "C, He, O",
    charge: "Fully stripped: 2+ to 8+",
    requirement: "High stability, narrow energy spread",
    driver: "Precision Bragg Peak tumor targeting",
  },
  {
    field: "Semiconductor Ion Implantation",
    ions: "As, In, Sb, Ge",
    charge: "2+ to 6+",
    requirement: "High average current, pure charge selection",
    driver: "Wafer throughput and deep dopant profiles",
  },
  {
    field: "Nuclear & Fusion Physics",
    ions: "Bi, Pb, U",
    charge: "15+ to 60+",
    requirement: "High peak intensity, low transverse emittance",
    driver: "Exotic nuclei and inertial compression",
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

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_38%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Applications
          </p>
          <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl">
            Where High-Charge-State Heavy Ions Are Used Across Industry and Science
          </h1>
          <aside className="mt-8 max-w-4xl rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.07] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Quick Summary
            </p>
            <p className="mt-3 text-base leading-8 text-slate-200 sm:text-lg">
              High-charge-state heavy ions are used wherever high-energy, deeply penetrating, or
              high-mass atomic beams are required without multi-mile accelerator footprints.
              Their primary applications include Single Event Effects (SEE) radiation testing,
              heavy-ion cancer radiotherapy, semiconductor ion implantation and surface
              engineering, and fundamental nuclear physics and fusion research.
            </p>
          </aside>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[13rem_minmax(0,1fr)]">
        <nav aria-label="Applications page sections" className="hidden lg:block">
          <div className="sticky top-28 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              On this page
            </p>
            <ol className="mt-4 space-y-3 text-sm">
              {[
                ["#see-testing", "SEE testing"],
                ["#radiotherapy", "Radiotherapy"],
                ["#implantation", "Implantation"],
                ["#nuclear-fusion", "Nuclear & fusion"],
                ["#metrics", "Metrics"],
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
            <SectionHeading number="01" id="see-testing">
              Aerospace, Defense &amp; 3D Semiconductor Radiation Testing
            </SectionHeading>
            <div className="mt-7 space-y-6 text-lg leading-8 text-slate-300">
              <p>
                In deep space and high-altitude aviation, microelectronics are bombarded by Galactic
                Cosmic Rays (GCR)—high-energy heavy atomic nuclei traveling near the speed of light.
                A heavy ion striking a transistor deposits a dense track of charge that can trigger
                Single Event Effects, ranging from soft data upsets to destructive latch-ups.
              </p>
              <p>
                Before satellites, defense avionics, or autonomous aerospace systems launch, their
                chips must be ground-tested using accelerator-generated beams such as Argon,
                Krypton, Xenon, Gold, or Lead.
              </p>

              <h3 className="pt-3 text-xl font-semibold text-white">
                The 2D-to-3D Chip Transition
              </h3>
              <ul className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                <li>
                  <strong className="text-white">Stacked architectures:</strong> 3D integrated
                  circuits use vertical multi-die stacking, chiplets, and thick protective packaging.
                </li>
                <li>
                  <strong className="text-white">Deep penetration:</strong> Low-energy ions stop in
                  packaging or upper silicon. Reaching buried junctions requires Very High Energy
                  beams capable of penetrating more than 1 mm in silicon while maintaining high LET.
                </li>
                <li>
                  <strong className="text-white">Facility upgrades:</strong> Cyclotron energy scales
                  with q²/A. Moving an existing source from 6+ to 10+ nearly triples achievable
                  beam energy without rebuilding the core accelerator.
                </li>
              </ul>
            </div>

            <figure className="mt-8 overflow-hidden rounded-3xl border border-dashed border-cyan-400/30 bg-slate-900/50">
              <div className="grid md:grid-cols-2">
                <div className="border-b border-cyan-400/15 p-7 md:border-r md:border-b-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                    Traditional 2D chip
                  </p>
                  <div className="mt-6 space-y-2" aria-hidden="true">
                    <div className="h-7 rounded bg-slate-700/70" />
                    <div className="h-16 rounded border border-cyan-300/30 bg-cyan-300/[0.08]" />
                    <div className="mx-auto h-24 w-1 rounded-full bg-gradient-to-b from-cyan-300 to-cyan-500/10" />
                  </div>
                  <p className="mt-4 text-sm text-slate-400">Active layer reached by low-energy testing.</p>
                </div>
                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                    3D stacked chip
                  </p>
                  <div className="mt-6 space-y-2" aria-hidden="true">
                    {[0, 1, 2, 3].map((layer) => (
                      <div
                        key={layer}
                        className="h-6 rounded border border-cyan-300/30 bg-cyan-300/[0.08]"
                      />
                    ))}
                    <div className="mx-auto h-32 w-1 rounded-full bg-gradient-to-b from-cyan-200 via-cyan-400 to-cyan-700" />
                  </div>
                  <p className="mt-4 text-sm text-slate-400">
                    High-charge-state beam penetrates packaging and every buried die.
                  </p>
                </div>
              </div>
              <figcaption className="border-t border-white/10 px-7 py-5 text-sm leading-6 text-slate-400">
                Figure 1: low-energy ions stop in shallow layers, while high-energy ions reach buried
                active junctions in 3D packages.
              </figcaption>
            </figure>

            <aside className="mt-8 border-l-2 border-cyan-400/70 bg-cyan-400/[0.05] px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                Overcoming the national accelerator bottleneck
              </p>
              <p className="mt-3 leading-7 text-slate-300">
                High-energy heavy-ion testing is concentrated at a small number of oversubscribed
                laboratories. Compact, high-charge-state ion sources could enable regional and
                commercial accelerators to handle routine electronics screening.
              </p>
            </aside>
          </section>

          <section>
            <SectionHeading number="02" id="radiotherapy">
              Heavy-Ion Radiotherapy &amp; Medical Isotope Production
            </SectionHeading>
            <div className="mt-7 space-y-6 text-lg leading-8 text-slate-300">
              <p>
                In clinical oncology, fully stripped Carbon (C<sup>6+</sup>) and Oxygen
                (O<sup>8+</sup>) ions are used to treat deep-seated, radio-resistant tumors near
                critical organs.
              </p>
              <ul className="grid gap-4 md:grid-cols-2">
                {[
                  ["Bragg Peak", "Heavy ions deposit minimal energy on entry and release most destructive energy in a narrow spike at the end of their range."],
                  ["Why charge state matters", "Direct C6+ injection eliminates intermediate stripping and reduces the size, RF power, and capital cost of treatment centers."],
                  ["Medical isotopes", "Intense heavy-ion beams bombard target foils to produce high-purity isotopes for diagnostics and therapy."],
                  ["Precision", "Sharp dose localization helps spare healthy tissue around the brain stem, spine, optic nerve, and similar structures."],
                ].map(([title, description]) => (
                  <li key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <figure className="mt-8 overflow-hidden rounded-3xl border border-dashed border-cyan-400/30 bg-slate-900/50 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                Figure 2 · Relative radiation dose
              </p>
              <svg
                viewBox="0 0 720 260"
                role="img"
                aria-label="Placeholder depth-dose graph comparing X-rays, protons, and carbon ions"
                className="mt-6 w-full"
              >
                <path d="M50 220H690M50 220V30" fill="none" stroke="rgba(148,163,184,.3)" />
                <path d="M52 210C230 205 420 200 685 188" fill="none" stroke="#94a3b8" strokeWidth="4" />
                <path d="M52 204C230 192 430 178 600 150C660 136 675 112 683 42" fill="none" stroke="#22d3ee" strokeWidth="5" />
                <path d="M52 215C230 208 430 205 560 195C600 192 622 188 628 120C632 80 650 70 684 68" fill="none" stroke="#67e8f9" strokeDasharray="8 8" strokeWidth="3" />
                <rect x="578" y="45" width="72" height="175" rx="8" fill="rgba(34,211,238,.08)" stroke="rgba(34,211,238,.35)" />
              </svg>
              <figcaption className="mt-4 border-t border-white/10 pt-5 text-sm leading-6 text-slate-400">
                Depth-dose comparison: X-rays distribute dose broadly, while Carbon ions concentrate
                dose in a narrow Bragg Peak within the tumor zone.
              </figcaption>
            </figure>
          </section>

          <section>
            <SectionHeading number="03" id="implantation">
              Semiconductor Ion Implantation &amp; Surface Engineering
            </SectionHeading>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                <h3 className="text-xl font-semibold text-white">Deep-junction doping</h3>
                <p className="mt-4 leading-7 text-slate-300">
                  Heavy dopant ions such as Arsenic, Antimony, Indium, and Germanium modify electrical
                  conductivity in SiC, GaN, and specialized CMOS sensors. Multiply charged ions allow
                  commercial implanters to reach deeper junction depths without larger voltage supplies.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                <h3 className="text-xl font-semibold text-white">Metallurgical surface modification</h3>
                <p className="mt-4 leading-7 text-slate-300">
                  Titanium, Chromium, Zirconium, and Tantalum beams implant into aerospace alloys,
                  medical implants, and tooling to create hard, wear-resistant, corrosion-proof surfaces.
                </p>
              </div>
            </div>
          </section>

          <section>
            <SectionHeading number="04" id="nuclear-fusion">
              Fundamental Nuclear Physics &amp; Heavy-Ion Fusion
            </SectionHeading>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                <h3 className="text-xl font-semibold text-white">Rare isotope synthesis</h3>
                <p className="mt-4 leading-7 text-slate-300">
                  Lead, Bismuth, and Uranium beams collide with stationary targets to create exotic,
                  short-lived isotopes and probe the limits of the nuclear periodic table.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                <h3 className="text-xl font-semibold text-white">Heavy-ion inertial fusion</h3>
                <p className="mt-4 leading-7 text-slate-300">
                  Pulsed Bismuth or Gold beams may compress and ignite millimeter-scale deuterium-tritium
                  fuel targets in experimental fusion drivers.
                </p>
              </div>
            </div>
          </section>

          <section>
            <SectionHeading number="05" id="metrics">
              Core Engineering Metrics by Application
            </SectionHeading>
            <div className="-mx-6 mt-8 overflow-x-auto px-6 sm:mx-0 sm:px-0">
              <table className="w-full min-w-[820px] border-separate border-spacing-0 text-left text-sm">
                <thead>
                  <tr className="text-cyan-100">
                    {["Industry / field", "Representative ions", "Charge states", "Beam requirement", "Operational driver"].map((heading) => (
                      <th key={heading} className="border-b border-cyan-400/20 px-4 py-3 font-semibold">
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {applicationRows.map((row) => (
                    <tr key={row.field} className="text-slate-300">
                      <td className="border-b border-white/[0.08] px-4 py-4 font-medium text-white">{row.field}</td>
                      <td className="border-b border-white/[0.08] px-4 py-4">{row.ions}</td>
                      <td className="border-b border-white/[0.08] px-4 py-4 text-cyan-200">{row.charge}</td>
                      <td className="border-b border-white/[0.08] px-4 py-4">{row.requirement}</td>
                      <td className="border-b border-white/[0.08] px-4 py-4">{row.driver}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="faq">
            <SectionHeading number="06" id="faq-heading">
              Frequently Asked Questions
            </SectionHeading>
            <div className="mt-7 space-y-4">
              {[
                [
                  "Why do 3D microchips require higher-energy heavy ions?",
                  "Modern 3D integrated circuits stack multiple dies inside thick packaging. Higher-energy ions, enabled by higher charge states, penetrate outer packaging and upper silicon to measure effects throughout the complete device stack.",
                ],
                [
                  "What is Linear Energy Transfer (LET)?",
                  "LET measures the ionizing energy deposited per unit path length, typically in MeV·cm²/mg in silicon. Xenon, Gold, and Lead produce much higher LET than protons and can reproduce severe galactic cosmic-ray strikes.",
                ],
                [
                  "Why are heavy ions preferred over X-rays for some cancer therapy?",
                  "Heavy ions such as C6+ exhibit a sharp Bragg Peak, releasing most energy at a precise depth rather than across the full entry and exit path. Their dense, clustered DNA damage is effective against radio-resistant tumors.",
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
            <Link
              href="/high-charge-state-ions"
              className="mt-4 flex items-center justify-between rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] px-6 py-5 transition hover:border-cyan-300/40 hover:bg-cyan-400/[0.10]"
            >
              <div>
                <p className="text-sm text-slate-400">← Previous</p>
                <p className="mt-1 font-semibold text-white">
                  What Are High-Charge-State Ions?
                </p>
              </div>
            </Link>
          </section>

          <section className="border-t border-white/10 pt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Authoritative External References
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
              {[
                ["https://nepp.nasa.gov/", "NASA Electronic Parts and Packaging (NEPP)", "LET requirements, silicon penetration depths, and spaceflight qualification."],
                ["https://hearts.web.cern.ch/", "CERN HEARTS Project", "Very High Energy lead-ion testing for packaged aerospace microelectronics."],
                ["https://www.bnl.gov/nsrl/", "Brookhaven National Laboratory NSRL", "Galactic cosmic-ray simulation for electronics and radiobiology."],
                ["https://nimms.web.cern.ch/", "CERN NIMMS", "Compact accelerators for heavy-ion cancer therapy."],
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
