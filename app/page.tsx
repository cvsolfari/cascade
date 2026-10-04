import Image from "next/image";

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
        <div className="mt-6 max-w-2xl text-lg leading-8 text-slate-200/90">
          <blockquote className="border-l border-cyan-400/60 pl-4 italic text-slate-100">
            “Do not go where the path may lead, go instead where there is no path and leave a trail.”
          </blockquote>
          <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">
            — Ralph Waldo Emerson
          </p>
          <p className="mt-6">
            Engineering a new class of physics hardware at the intersection of light, matter, plasma, and charged particle beams
          </p>
        </div>
      </section>
    </main>
  );
}
