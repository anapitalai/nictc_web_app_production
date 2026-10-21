import Link from "next/link";

const learningPaths = [
  {
    title: "Digital foundations",
    description: "Build confidence with everyday digital tools, safe web practices, and essential productivity workflows.",
    level: "Beginner",
  },
  {
    title: "ICT skills for work",
    description: "Develop practical skills for office productivity, communication, systems use, and digital collaboration.",
    level: "Intermediate",
  },
  {
    title: "GIS and spatial thinking",
    description: "Learn foundational approaches for working with spatial data, maps, and location-driven information.",
    level: "Intermediate",
  },
] as const;

export default function TrainingPage() {
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
            Training catalogue
          </p>
          <h1 className="mb-6 max-w-[15ch] text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Learn practical digital skills at your pace.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-muted">
            Explore flexible learning opportunities designed to build confidence in technology, information systems, and real-world digital work.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {learningPaths.map((course) => (
              <article key={course.title} className="rounded-md border border-border bg-surface p-6 shadow-card">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="inline-flex rounded-full bg-surface-soft px-2.5 py-1 text-xs font-bold text-teal uppercase tracking-[0.12em]">
                    {course.level}
                  </span>
                  <span className="size-10 rounded-sm bg-surface-soft text-teal" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-10 p-2">
                      <path d="M12 3v18" />
                      <path d="m5 7 7-4 7 4-7 4-7-4Z" />
                      <path d="m5 12 7 4 7-4" />
                    </svg>
                  </span>
                </div>
                <h2 className="mb-3 text-xl font-bold text-navy">{course.title}</h2>
                <p className="text-sm leading-relaxed text-muted">{course.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-strong py-16 text-surface">
        <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.14em] text-accent uppercase before:h-px before:w-8 before:bg-accent before:content-['']">
                Why train with us
              </p>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-surface">
                Learning that keeps pace with real work.
              </h2>
            </div>
            <ul className="space-y-4 text-surface-soft">
              <li className="rounded-md border border-white/10 bg-white/5 p-4">Clear content and straightforward learning outcomes.</li>
              <li className="rounded-md border border-white/10 bg-white/5 p-4">Flexible, self-paced learning designed for busy people and teams.</li>
              <li className="rounded-md border border-white/10 bg-white/5 p-4">Practical skills that connect with work, planning, and digital confidence.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
