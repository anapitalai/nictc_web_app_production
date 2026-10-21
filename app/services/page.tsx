import Link from "next/link";

const servicePillars = [
  {
    title: "ICT training",
    description:
      "Practical learning paths that help learners and teams build confidence with digital tools, systems, and workflows.",
  },
  {
    title: "ICT consultancy",
    description:
      "Clear technology guidance for organisations planning improvements, strengthening operations, and making better decisions.",
  },
  {
    title: "GIS and spatial insight",
    description:
      "Mapping and spatial analysis that turn location data into useful understanding for planning, service delivery, and operations.",
  },
] as const;

const deliverySteps = [
  "Assess the current challenge and priorities.",
  "Design a practical, fit-for-purpose approach.",
  "Deliver support that is easy to understand and sustain.",
] as const;

export default function ServicesPage() {
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
            What we do
          </p>
          <h1 className="mb-6 max-w-[13ch] text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Practical support for people, teams, and organisations.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-muted">
            Napitalai ICTC helps organisations build capability and confidence with digital tools, training, and technology strategy that fit real-world needs.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {servicePillars.map((pillar) => (
              <article key={pillar.title} className="rounded-md border border-border bg-surface p-6 shadow-card">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-sm bg-surface-soft text-teal">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-5">
                    <path d="M12 3v18" />
                    <path d="M4 7.5h16" />
                    <path d="M4 16.5h16" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-navy">{pillar.title}</h2>
                <p className="text-sm leading-relaxed text-muted">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-strong py-16 text-surface">
        <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.14em] text-accent uppercase before:h-px before:w-8 before:bg-accent before:content-['']">
                Working with you
              </p>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-surface">
                A simple, practical approach to digital progress.
              </h2>
              <p className="max-w-xl text-surface-soft">
                Every engagement is designed to make technology easier to understand, easier to use, and more useful for the people who rely on it.
              </p>
            </div>

            <ol className="space-y-4">
              {deliverySteps.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-md border border-white/10 bg-white/5 p-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent text-sm font-extrabold text-navy">
                    {index + 1}
                  </span>
                  <p className="text-surface-soft">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 rounded-lg border border-border bg-surface p-8 shadow-card md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-xs font-extrabold tracking-[0.14em] text-teal uppercase">Next step</p>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy">Explore our training options.</h2>
            </div>
            <Link className="inline-flex min-h-12 items-center justify-center rounded-full bg-teal px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-deep" href="/training">
              View training <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
