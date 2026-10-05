const newsItems = [
  {
    date: "2026-10",
    month: "Oct",
    title: "Founding Team Search",
    location: "Champaign, Illinois",
    href: "/careers",
    description: (
      <>
        <p className="max-w-3xl leading-7 text-slate-300">
          Cascade Dynamics is searching for two key technology additions as
          members of the founding team.
        </p>
        <ul className="mt-3 space-y-2 text-slate-300">
          <li>
            <a href="/careers" className="text-cyan-300 transition hover:text-white">
              Computational Plasma Physicist - Ph.D
            </a>
          </li>
          <li>
            <a href="/careers" className="text-cyan-300 transition hover:text-white">
              Laser-Matter Interaction &amp; Optical Engineer - Ph.D
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    date: "2026-09",
    month: "Sep",
    title: "RADECS 2026",
    location: "Prague, Czech Republic",
    href: "https://radecs2026.org/",
    description:
      "Erik attended the Radiation and its Effects on Components and Systems (RADECS) conference in Prague, joining the international radiation-effects community. Met lots of ECR operators and European radiation effects futurists.",
  },
  {
    date: "2026-07",
    month: "Jul",
    title: "NSREC 2026",
    location: "San Juan,Puerto Rico",
    href: "https://www.nsrec.com/nsrec-2026-schedule/",
    description:
      "Erik attended the IEEE Nuclear & Space Radiation Effects Conference (NSREC) in Puerto Rico, connecting with researchers and industry leaders in radiation effects. Learned about proton cyclotrons in action and the Vanderbilt Institute for space defense electronics.",
  },
  {
    date: "2026-06",
    month: "Jun",
    title: "ICOPS 2026",
    location: "Lake Tahoe, Nevada",
    href: "https://icops2026.org/",
    description:
      "Craig and Erik attended the IEEE International Conference on Plasma Science (ICOPS) in Lake Tahoe to speak with plasma physics experts, network with researchers in dusty plasmas and talk about low pressure plasma dynamics.",
  },
  {
    date: "2024-11",
    month: "Nov",
    title: "Patent Application Filed",
    location: "Champaign, Illinois",
    href: "/",
    description:
      "Patent application filed for High Density Ion Production Using a Dusty Plasma.",
  },
];

export default function NewsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="absolute inset-0">
        <img
          src="/img/IMG_2989.JPG"
          alt="News background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/75" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-20 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
          Updates
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white">
          News
        </h1>

        <ol className="mt-12 border-t border-white/15">
          {newsItems.map((item) => (
            <li
              key={item.title}
              className="grid gap-x-8 border-b border-white/10 py-7 sm:grid-cols-[7rem_1fr]"
            >
              <time
                dateTime={item.date}
                className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-300"
              >
                {item.month} {item.date.slice(0, 4)}
              </time>
              <article className="mt-3 sm:mt-0">
                <h2 className="text-xl font-medium text-white">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-cyan-300"
                  >
                    {item.title}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <span className="ml-3 text-sm font-normal text-slate-400">
                    {item.location}
                  </span>
                </h2>
                <div className="mt-3 max-w-3xl">
                  {typeof item.description === "string" ? (
                    <p className="leading-7 text-slate-300">{item.description}</p>
                  ) : (
                    item.description
                  )}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}