import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:px-10">
        <Link href="/" className="text-sm text-cyan-300 transition hover:text-white">
          ← Home
        </Link>

        <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white">Contact Cascade Dynamics</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Contact us to discuss your next project, request a consultation, or learn how our engineering capabilities can support your business.
        </p>

        <div className="mt-10 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/30">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Email</p>
            <p className="mt-3 text-slate-300">info@cascadedynamics.com</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Phone</p>
            <p className="mt-3 text-slate-300">+1 (555) 123-4567</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Location</p>
            <p className="mt-3 text-slate-300">Seattle, WA</p>
          </div>
        </div>
      </div>
    </main>
  );
}
