import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const description =
  "Cascade Dynamics develops high-charge-state, high-energy ion source technology to advance single-event-effects testing for space electronics.";

export const metadata: Metadata = {
  title: "Ion Source Engineering for Space Electronics Testing",
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Ion Source Engineering for Space Electronics Testing",
    description,
    images: ["/img/IMG_2980.JPG"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ion Source Engineering for Space Electronics Testing",
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

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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

      <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
          Cascade Dynamics
        </p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl">
          Ion Source Engineering for Space Electronics Testing
        </h1>
        <div className="mt-6 max-w-3xl text-lg leading-8 text-slate-200/90">
          <p>
            We develop high-charge-state, high-energy ion source technology to advance
            single-event-effects (SEE) testing and expand the capabilities of existing
            cyclotron facilities.
          </p>
        </div>
        <nav aria-label="Learn more" className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/about"
            className="rounded-full border border-cyan-300/50 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/10"
          >
            About our mission
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
    </main>
  );
}
