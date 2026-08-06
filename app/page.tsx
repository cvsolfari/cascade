import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
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
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl">
          Cascade Dynamics
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200/90">
          engineering a new class of physics hardware at the intersection of light, matter, plasma, and charged particle beams
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
