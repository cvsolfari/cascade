import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="absolute inset-0">
        <img
          src="/img/IMG_2989.JPG"
          alt="About background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/75" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-20 sm:px-10">
        <Link href="/" className="text-sm text-cyan-300 transition hover:text-white">
          ← Home
        </Link>

        <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white">About Cascade Dynamics</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          We are plasma physics and entrepreneurship experts combining to bring patent pending technology to the deep tech science market.
        </p>

        <div className="mt-10 space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/30 backdrop-blur-xl">
          <div>
            <h2 className="text-2xl font-semibold text-white">Our Mission</h2>
            <p className="mt-4 text-slate-300 leading-8">
              To create resilient systems that improve operational efficiency, reduce risk, and support long-term growth.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white">What We Do</h2>
            <p className="mt-4 text-slate-300 leading-8">
              From fabrication and assembly to automation and project execution, our team delivers industrial solutions with technical clarity.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
