import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const description =
  "Cascade Dynamics develops high-charge-state heavy-ion source technology for accelerator upgrades, 3D semiconductor SEE testing, and compact high-energy beamlines.";

export const metadata: Metadata = {
  title: "High-Charge-State Ion Source Engineering for SEE Testing",
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "High-Charge-State Ion Source Engineering for SEE Testing",
    description,
    images: ["/img/IMG_2980.JPG"],
  },
  twitter: {
    card: "summary_large_image",
    title: "High-Charge-State Ion Source Engineering for SEE Testing",
    description,
    images: ["/img/IMG_2980.JPG"],
  },
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cascade Dynamics",
    url: "https://www.cascade-dynamics.com",
    sameAs: ["https://www.linkedin.com/company/cascadedynamics"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a high-charge-state ion?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "A high-charge-state ion is an atom that has been stripped of multiple electrons, giving it a strong net positive charge. Multiply charged ions respond more strongly to accelerator electric and magnetic fields.",
        },
      },
      {
        "@type": "Question",
        name: "Why do high-charge-state ions improve accelerator performance?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Higher charge states increase energy gain at a fixed voltage and improve charge-to-mass ratio. In cyclotrons, maximum output energy scales with the square of charge state divided by mass number.",
        },
      },
      {
        "@type": "Question",
        name: "What is charge-to-mass ratio in accelerator physics?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Charge-to-mass ratio is the ion charge state divided by its atomic mass number, written as q/A. It determines how strongly an ion responds to electric and magnetic fields relative to its inertia.",
        },
      },
      {
        "@type": "Question",
        name: "Why are high-energy heavy ions needed for 3D-chip radiation testing?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Modern 3D chips contain stacked dies and buried active junctions beneath thick packaging. Higher-energy heavy ions can penetrate these layers and measure Single Event Effects throughout the complete device.",
        },
      },
    ],
  };

  const technologyCards = [
    {
      href: "/high-charge-state-ions",
      number: "01",
      title: "What Are High-Charge-State Ions?",
      description:
        "Charge states, q/A scaling, and the relationship between ion charge, voltage, cyclotron energy, and magnetic rigidity.",
      action: "Understand ion-scaling fundamentals",
    },
    {
      href: "/high-charge-state-ions/applications",
      number: "02",
      title: "Applications",
      description:
        "Explore 3D-chip SEE testing, heavy-ion cancer therapy, semiconductor implantation, nuclear physics, and fusion research.",
      action: "Explore heavy-ion applications",
    },
    {
      href: "/high-charge-state-ions/production-challenges",
      number: "03",
      title: "Production Challenges",
      description:
        "Learn about rising ionization potentials, broad charge-state distributions, space charge, and solid-metal feed limits.",
      action: "Read the engineering challenges",
    },
    {
      href: "/high-charge-state-ions/ion-source-technologies",
      number: "04",
      title: "Ion-Source Technologies",
      description:
        "Compare ECRIS, EBIS/EBIT, tandem foil strippers, vacuum-arc sources, and bulk laser ion sources.",
      action: "Compare conventional sources",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="absolute inset-0">
        <Image
          src="/img/IMG_2980.JPG"
          alt="Cascade Dynamics background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <section className="relative z-10 mx-auto flex min-h-[82vh] max-w-6xl flex-col justify-center px-6 py-20 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
          Cascade Dynamics
        </p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl">
          High-Charge-State Ion Source Engineering for SEE Testing
        </h1>
        <div className="mt-6 max-w-3xl text-lg leading-8 text-slate-200/90">
          <p>
            Cascade Dynamics develops compact, high-charge-state ion source technology for
            particle accelerators. Higher charge states improve accelerator energy, reduce
            magnetic rigidity and voltage requirements, and eliminate or reduce lossy stripping
            stages—expanding heavy-ion beam availability for space electronics and 3D
            microelectronics radiation testing.
          </p>
        </div>
        <nav aria-label="Learn more" className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/high-charge-state-ions"
            className="rounded-full border border-cyan-300/50 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/10"
          >
            Explore the technology
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Get in touch
          </Link>
        </nav>
        <blockquote className="mt-12 max-w-2xl border-l border-cyan-400/60 pl-4 text-sm italic text-slate-300">
          “Do not go where the path may lead, go instead where there is no path and leave a trail.”
          <footer className="mt-2 text-xs font-medium not-italic uppercase tracking-[0.18em] text-cyan-300">
            — Ralph Waldo Emerson
          </footer>
        </blockquote>
      </section>

      <div className="relative z-10 border-t border-white/10 bg-slate-950/95">
        <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Technology
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            One source technology. Multiple paths to more usable beam.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {technologyCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.07]"
              >
                <p className="font-mono text-xs font-semibold text-cyan-300">{card.number}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{card.description}</p>
                <p className="mt-5 text-sm font-semibold text-cyan-300 transition group-hover:text-cyan-200">
                  {card.action} <span aria-hidden="true">→</span>
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-slate-900/40">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[1fr_24rem]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Why charge state matters
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                How do higher-charge-state ions improve accelerator performance?
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                A high-charge-state ion is an atom stripped of multiple electrons, leaving a
                strong net positive charge. Because accelerators use electric and magnetic fields,
                charge state determines how much energy and steering force an ion receives.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.06] p-5">
                <p className="font-mono text-sm text-cyan-300">E = q · V</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  More charge creates more energy gain at the same extraction voltage.
                </p>
              </div>
              <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.06] p-5">
                <p className="font-mono text-sm text-cyan-300">E<sub>max</sub> = K · q²/A</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Cyclotron energy scales quadratically with charge state relative to mass.
                </p>
              </div>
              <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.06] p-5">
                <p className="font-mono text-sm text-cyan-300">Bρ = p/q</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Higher charge lowers magnetic rigidity and permits smaller beamline magnets.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                3D semiconductor testing
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Bring higher-energy heavy-ion testing to modern electronics
              </h2>
              <p className="mt-6 leading-8 text-slate-300">
                Modern 3D chips stack multiple dies and active junctions beneath thick packaging.
                Low-energy ions may stop before reaching the buried silicon where a radiation strike
                matters. Higher-energy heavy-ion beams can penetrate the complete device stack and
                reveal Single Event Effects for qualification and reliability work.
              </p>
              <p className="mt-4 leading-8 text-slate-300">
                Because cyclotron output scales with q²/A, improving the front-end charge state can
                nearly triple output energy on existing infrastructure—potentially reducing the
                need for larger magnets or a complete facility rebuild.
              </p>
              <Link
                href="/high-charge-state-ions/applications"
                className="mt-7 inline-flex rounded-full border border-cyan-300/50 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/10"
              >
                Explore SEE-testing applications
              </Link>
            </div>
            <div className="rounded-3xl border border-dashed border-cyan-400/30 bg-slate-900/50 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                3D package penetration
              </p>
              <div className="mt-7 space-y-3" aria-hidden="true">
                {[0, 1, 2, 3].map((layer) => (
                  <div
                    key={layer}
                    className="h-10 rounded-lg border border-cyan-300/25 bg-cyan-300/[0.06]"
                  />
                ))}
                <div className="mx-auto h-24 w-1 rounded-full bg-gradient-to-b from-cyan-200 via-cyan-400 to-cyan-700" />
              </div>
              <p className="mt-6 text-sm leading-7 text-slate-400">
                A high-charge-state, high-energy beam can reach buried active junctions through
                stacked packaging.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Common questions
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              High-charge-state ion fundamentals
            </h2>
            <div className="mt-8 space-y-4">
              {[
                [
                  "What is a high-charge-state ion?",
                  "A high-charge-state ion is an atom stripped of multiple electrons, giving it a strong net positive charge. Multiply charged ions respond more strongly to accelerator electric and magnetic fields.",
                ],
                [
                  "Why do high-charge-state ions improve accelerator performance?",
                  "Higher charge states increase energy gain at a fixed voltage and improve charge-to-mass ratio. In cyclotrons, maximum output energy scales with q²/A.",
                ],
                [
                  "What is charge-to-mass ratio in accelerator physics?",
                  "Charge-to-mass ratio is the ion charge state divided by its atomic mass number, written as q/A. It determines how strongly an ion responds to electric and magnetic fields relative to its inertia.",
                ],
                [
                  "Why are high-energy heavy ions needed for 3D-chip radiation testing?",
                  "Modern 3D chips contain stacked dies and buried active junctions beneath thick packaging. Higher-energy heavy ions can penetrate these layers and measure Single Event Effects throughout the complete device.",
                ],
              ].map(([question, answer]) => (
                <details
                  key={question}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] open:bg-white/[0.055]"
                >
                  <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-white marker:hidden">
                    <span className="mr-3 text-cyan-300 transition group-open:rotate-45">+</span>
                    {question}
                  </summary>
                  <p className="px-6 pb-6 leading-7 text-slate-300">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 sm:px-10 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Work with Cascade Dynamics
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-white">
                Discuss a heavy-ion beamline or accelerator upgrade
              </h2>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
