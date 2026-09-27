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
      <div className="mt-10 space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/30 backdrop-blur-xl">
          <div>
            <h2 className="text-2xl font-semibold text-white">Our Vision</h2>
            <p className="mt-4 text-slate-300 leading-8">
              Any element, born with a high charge state.
            </p>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
         The SEE Testing market is at a crossroads today. With an exponential increase in satellites over the next ten years, a change to 3D electronics chips and governments wanting to privatize this market, the community is ripe for a step-function change in how we approach performing these tests or else American space dominance will fall behind.
<p></p><p></p>
Since everything downstream from the ion beam’s birth state can never increase in quality, we focus on birthing higher charge state and higher energy ions to increase the effectiveness of current cyclotron SEE testing facilities as well as allow lower energy cyclotrons to become fit for purpose.
        </p>

        
      </div>
    </main>
  );
}
