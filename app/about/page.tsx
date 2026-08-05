import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10">
        <Link href="/" className="text-sm text-cyan-300 transition hover:text-white">
          ← Home
        </Link>

        <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white">About Cascade Dynamics</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Cascade Dynamics provides precision engineering and manufacturing solutions for industrial,
          energy, and infrastructure customers. We combine modern systems, disciplined execution,
          and practical experience to deliver reliable performance.
        </p>

        <div className="mt-10 space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/30">
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
