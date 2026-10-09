import Image from "next/image";

const services = [
  {
    title: "ICT training",
    description:
      "Develop useful digital and technical skills through focused, practical learning.",
    icon: "training",
  },
  {
    title: "ICT consultancy",
    description:
      "Get clear guidance to plan, improve, and make technology work for your organisation.",
    icon: "consultancy",
  },
  {
    title: "GIS & spatial data",
    description:
      "Turn location information into useful insight for planning, services, and decisions.",
    icon: "gis",
  },
] as const;

type ServiceIconName = (typeof services)[number]["icon"];

function ServiceIcon({ name }: { name: ServiceIconName }) {
  if (name === "training") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    );
  }

  if (name === "consultancy") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3v3M5.6 5.6l2.1 2.1M3 12h3m12 0h3m-4.7-4.3 2.1-2.1" />
        <path d="M8 16a5 5 0 1 1 8 0c-.8.7-1 1.3-1 2H9c0-.7-.2-1.3-1-2Z" />
        <path d="M9 21h6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function MappingIllustration() {
  return (
    <div
      className="relative mx-auto grid min-h-[24rem] w-full max-w-[34rem] place-items-center sm:min-h-[28rem] lg:min-h-[31rem]"
      role="img"
      aria-label="Illustration representing GIS, spatial data, and learning"
    >
      <div className="absolute inset-4 rounded-full bg-surface-soft sm:inset-10" aria-hidden="true" />
      <div className="absolute inset-2 aspect-square rounded-full border border-dashed border-border sm:inset-4" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-[27rem] overflow-hidden rounded-lg border border-border bg-surface shadow-soft">
        <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
          <p className="m-0 text-xs font-extrabold tracking-[0.14em] text-muted">GIS &amp; DATA</p>
          <span className="inline-flex items-center gap-2 text-xs font-bold text-success">
            <span className="size-2 rounded-full bg-success" aria-hidden="true" />
            Local insight
          </span>
        </div>
        <div className="relative min-h-[17rem] overflow-hidden bg-[linear-gradient(135deg,transparent_48%,var(--surface)_49%,var(--surface)_51%,transparent_52%),linear-gradient(35deg,transparent_48%,var(--surface)_49%,var(--surface)_51%,transparent_52%),var(--surface-soft)] bg-size-[4rem_4rem,5rem_5rem,auto]">
          <svg className="absolute inset-4 size-[calc(100%-2rem)]" viewBox="0 0 420 260" fill="none" aria-hidden="true">
            <path d="M68 83C113 102 135 56 177 76C219 96 197 145 251 148C300 151 297 100 351 112" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 9" />
            <path d="M79 187C124 164 143 205 191 184C230 167 226 126 274 119C305 114 323 139 348 164" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
            <circle cx="68" cy="83" r="7" fill="var(--accent)" />
            <circle cx="351" cy="112" r="7" fill="var(--teal)" />
            <circle cx="79" cy="187" r="5" fill="var(--teal)" />
            <circle cx="348" cy="164" r="5" fill="var(--accent)" />
          </svg>
          <span className="absolute bottom-4 right-4 rounded-sm border border-border bg-surface px-3 py-2 text-xs font-bold text-muted">
            From place to possibility
          </span>
        </div>
      </div>

      <div className="absolute right-0 top-2 z-20 flex max-w-[17rem] items-center gap-3 rounded-md border border-border bg-surface p-3 shadow-card sm:top-8">
        <span className="grid size-10 shrink-0 place-items-center rounded-sm bg-surface-soft text-teal" aria-hidden="true">
          <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
            <path d="m9 9 2 2 4-4" />
          </svg>
        </span>
        <span>
          <strong className="block text-sm leading-tight text-navy">Learn at your pace</strong>
          <span className="block text-xs text-muted">Practical skills, built step by step</span>
        </span>
      </div>

      <div className="absolute bottom-2 left-0 z-20 flex max-w-[17rem] items-center gap-3 rounded-md border border-border bg-surface p-3 shadow-card sm:bottom-8">
        <span className="grid size-10 shrink-0 place-items-center rounded-sm bg-surface-soft text-teal" aria-hidden="true">
          <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18" />
            <path d="m19 9-5 5-4-4-5 5" />
          </svg>
        </span>
        <span>
          <strong className="block text-sm leading-tight text-navy">Technology that works</strong>
          <span className="block text-xs text-muted">Training · GIS · digital solutions</span>
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex min-h-[var(--header-height)] max-w-[76rem] flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:flex-nowrap lg:px-8">
          <a className="inline-flex items-center gap-3" href="#home" aria-label="Napitalai ICTC home">
            <Image className="size-11 rounded-md" src="/icon.svg" alt="" width={44} height={44} priority />
            <span className="text-base font-extrabold tracking-tight text-navy sm:text-lg">Napitalai ICTC</span>
          </a>
          <nav className="flex w-full flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-muted lg:w-auto" aria-label="Main navigation">
            <a className="transition-colors hover:text-teal" href="#services">What we do</a>
            <a className="transition-colors hover:text-teal" href="#training">Training</a>
            <a className="rounded-full bg-teal px-5 py-3 text-white transition-colors hover:bg-teal-deep" href="#training">
              Explore training <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="overflow-hidden bg-background py-16 sm:py-20 lg:py-24" aria-labelledby="hero-title">
          <div className="mx-auto grid max-w-[76rem] items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:gap-12 lg:px-8">
            <div>
              <p className="mb-6 inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.14em] text-teal uppercase before:h-px before:w-8 before:bg-accent before:content-['']">
                Technology · training · consultancy
              </p>
              <h1 id="hero-title" className="mb-6 max-w-[11ch] text-[length:var(--font-size-mobile-display)] leading-[1.04] font-extrabold tracking-[-0.055em] text-navy md:text-[length:var(--font-size-3xl)]">
                Technology skills for a connected future.
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted">
                Practical ICT training and digital expertise to help people and organisations move forward with confidence.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-deep" href="#training">
                  Explore our training <span aria-hidden="true">→</span>
                </a>
                <a className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-bold text-navy transition-colors hover:border-teal hover:bg-surface-soft" href="#services">
                  See how we help
                </a>
              </div>
              <p className="mt-8 flex items-center gap-3 text-sm text-muted">
                <span className="size-2 rounded-full bg-accent shadow-[0_0_0_0.5rem_var(--surface-soft)]" aria-hidden="true" />
                Rooted in East New Britain. Ready for what’s next.
              </p>
            </div>
            <MappingIllustration />
          </div>
        </section>

        <section id="services" className="py-16 sm:py-20" aria-labelledby="services-title">
          <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-[40rem]">
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.14em] text-teal uppercase before:h-px before:w-8 before:bg-accent before:content-['']">
                How we help
              </p>
              <h2 id="services-title" className="mb-4 text-2xl leading-tight font-extrabold tracking-tight text-navy sm:text-3xl">
                Knowledge and tools to make progress.
              </h2>
              <p className="text-lg text-muted">Build capability, solve practical challenges, and make better use of technology.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="min-h-56 rounded-md border border-border bg-surface p-6 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-teal hover:shadow-card">
                  <span className="mb-6 grid size-12 place-items-center rounded-sm bg-surface-soft text-teal" aria-hidden="true">
                    <ServiceIcon name={service.icon} />
                  </span>
                  <h3 className="mb-2 text-lg leading-tight font-bold text-navy">{service.title}</h3>
                  <p className="text-sm text-muted">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="training" className="bg-surface-strong py-16 text-surface" aria-labelledby="training-title">
          <div className="mx-auto flex max-w-[76rem] flex-col justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.14em] text-accent uppercase before:h-px before:w-8 before:bg-accent before:content-['']">
                Keep learning
              </p>
              <h2 id="training-title" className="mb-3 max-w-[16ch] text-2xl leading-tight font-extrabold tracking-tight text-surface sm:text-3xl">
                Take the next step in your learning journey.
              </h2>
              <p className="max-w-[39rem] text-surface-soft">
                Explore flexible, self-paced training designed to help you build skills and put them into practice.
              </p>
            </div>
            <a className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-navy transition-colors hover:bg-surface" href="#services">
              See how we help <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-navy py-8 text-surface-soft">
        <div className="mx-auto flex max-w-[76rem] flex-col justify-between gap-6 px-4 text-sm sm:px-6 md:flex-row md:items-center lg:px-8">
          <p className="m-0">Napitalai ICTC · Information, communication technology &amp; training consultancy</p>
          <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
            <a className="transition-colors hover:text-accent" href="#home">Home</a>
            <a className="transition-colors hover:text-accent" href="#services">Services</a>
            <a className="transition-colors hover:text-accent" href="#training">Training</a>
          </nav>
        </div>
      </footer>
    </>
  );
}