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
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/30 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-white">Our Vision of the Future</h2>
            <p className="mt-4 text-slate-300 leading-8">
              Any element, born with a high charge state.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/30 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-white">Our Business Mission</h2>
            <p className="mt-4 text-slate-300 leading-8">
              To solve the US space electronics testing beamtime capacity problem by 2030.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/30 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold text-white">Today's State</h2>
          <div className="mt-6 space-y-8">
            <p className="max-w-3xl text-lg leading-8 text-slate-300">
             The SEE Testing market is at a crossroads. With an exponential increase in satellites over the next ten years, a change to 3D electronics chips and governments wanting to privatize this market, the community is ripe for a step-function change in how we approach performing these tests or satellites will fail at an unacceptable rate.
            </p>
            <p className="max-w-3xl text-lg leading-8 text-slate-300">
            Since everything downstream from the ion beam’s birth can never increase in quality, we specialize in birthing higher charge state ions with higher baseline energies to increase the effectiveness of current cyclotron fed SEE testing facilities.
            </p>
            <p className="max-w-3xl text-lg leading-8 text-slate-300">
            Because we begin with the highest charge state ions for any element, new opportunities to use ion beams are created. Contact us to collaborate on your most challenging ion source problems.
            </p>
          </div>
        </div>

        
      </div>
    </main>
  );
}
