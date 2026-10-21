import Link from "next/link";

const focusAreas = [
  {
    title: "Digital transformation",
    description:
      "Help teams choose the right tools, simplify operations, and move from ideas to practical delivery.",
  },
  {
    title: "Systems and process improvement",
    description:
      "Review current workflows, identify bottlenecks, and turn them into clear, workable improvements.",
  },
  {
    title: "Decision support and planning",
    description:
      "Use data and practical analysis to support planning, service design, and organisational decisions.",
  },
] as const;

export default function ConsultancyPage() {
  return (
    <main className="bg-background text-foreground">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-[76rem] flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link className="inline-flex items-center gap-3" href="/" aria-label="Napitalai ICTC home">
            <span className="grid size-11 place-items-center rounded-md bg-surface-soft text-teal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-6">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
                <path d="m9 9 2 2 4-4" />
              </svg>
            </span>
            <span className="text-base font-extrabold tracking-tight text-navy sm:text-lg">Napitalai ICTC</span>
          </Link>

          <nav className="flex w-full flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-muted lg:w-auto" aria-label="Main navigation">
            <Link className="transition-colors hover:text-teal" href="/services">Services</Link>
            <Link className="transition-colors hover:text-teal" href="/consultancy">Consultancy</Link>
            <Link className="transition-colors hover:text-teal" href="/training">Training</Link>
            <Link className="rounded-full bg-teal px-5 py-3 text-white transition-colors hover:bg-teal-deep" href="/training">
              Explore training <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </div>
      </header>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.14em] text-teal uppercase before:h-px before:w-8 before:bg-accent before:content-['']">
            Consultancy
          </p>
          <h1 className="mb-6 max-w-[14ch] text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Strategy, support, and practical technology guidance.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-muted">
            We work with organisations to understand their needs, define practical next steps, and help technology support real goals rather than add complexity.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {focusAreas.map((area) => (
              <article key={area.title} className="rounded-md border border-border bg-surface p-6 shadow-card">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-sm bg-surface-soft text-teal">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-5">
                    <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
                    <path d="M6.5 4H20v12H6.5A2.5 2.5 0 0 1 4 13.5v-7A2.5 2.5 0 0 1 6.5 4Z" />
                    <path d="m9 9 2 2 4-4" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-navy">{area.title}</h2>
                <p className="text-sm leading-relaxed text-muted">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-strong py-16 text-surface">
        <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.14em] text-accent uppercase before:h-px before:w-8 before:bg-accent before:content-['']">
              Why it matters
            </p>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-surface">
              Better decisions today create stronger digital foundations tomorrow.
            </h2>
            <p className="text-surface-soft">
              Whether the goal is improving efficiency, strengthening digital capability, or making better use of information, Napitalai ICTC supports organisations with relevant guidance and clear recommendations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
