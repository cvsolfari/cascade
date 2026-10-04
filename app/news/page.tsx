const newsItems = [
  {
    date: "2026-09",
    month: "Sep",
    title: "RADECS 2026",
    location: "Prague, Czech Republic",
    href: "https://radecs2026.org/",
    description:
      "Erik Ziehm attended the Radiation and its Effects on Components and Systems (RADECS) conference in Prague, joining the international radiation-effects community.",
  },
  {
    date: "2026-07",
    month: "Jul",
    title: "NSREC 2026",
    location: "Puerto Rico",
    href: "https://www.nsrec.com/nsrec-2026-schedule/",
    description:
      "Erik Ziehm attended the IEEE Nuclear & Space Radiation Effects Conference (NSREC) in Puerto Rico, connecting with researchers and industry leaders in radiation effects.",
  },
];

export default function NewsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.12),transparent_45%)]" />

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
                <p className="mt-3 max-w-3xl leading-7 text-slate-300">
                  {item.description}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}