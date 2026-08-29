import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section
        aria-labelledby="about-title"
        className="border-b border-white/10 pt-32 sm:pt-36 lg:pt-40"
      >
        <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32 lg:px-10 lg:pb-40">
          <header className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-24">
            <div>
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white/30">
                02 / About
              </p>
              <h1
                id="about-title"
                className="mt-6 max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl"
              >
                Sobre mim
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
                Sou Vitória Sousa, estudante de Ciência da Computação e
                desenvolvedora de software interessada em construir produtos
                digitais com atenção à experiência, ao design e à engenharia.
              </p>
            </div>
            <aside
              aria-label="Informações da página"
              className="self-end border-l border-white/10 pl-5 sm:pl-6"
            >
              <dl className="space-y-5">
                <div>
                  <dt className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-white/30">
                    Focus
                  </dt>
                  <dd className="mt-1 text-sm text-white/65">
                    Software Engineering
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-white/30">
                    Field
                  </dt>
                  <dd className="mt-1 text-sm text-white/65">
                    Computer Science
                  </dd>
                </div>
              </dl>
            </aside>
          </header>
        </div>
      </section>
      <section
        aria-labelledby="profile-title"
        className="border-b border-white/10"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
          <div className="grid gap-12 md:grid-cols-[12rem_1fr] lg:grid-cols-[16rem_1fr] lg:gap-24">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/30">
              Profile
            </p>
            <div className="max-w-3xl">
              <h2
                id="profile-title"
                className="text-2xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-3xl sm:leading-[1.3]"
              >
                Engenharia de software como uma combinação entre estrutura,
                clareza e experiência.
              </h2>
              <div className="mt-8 space-y-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
                <p>
                  Esta área será posteriormente expandida com minha trajetória,
                  formação, interesses técnicos e princípios de trabalho.
                </p>
                <p>
                  A intenção é apresentar não apenas as tecnologias que utilizo,
                  mas também a forma como penso sobre problemas, interfaces,
                  arquitetura e construção de produtos digitais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        aria-labelledby="interests-title"
        className="border-b border-white/10"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
          <div className="grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-24">
            <div>
              <p
                id="interests-title"
                className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/30"
              >
                Interests
              </p>
            </div>

            <ul className="grid border-t border-white/10 sm:grid-cols-2">
              {[
                "Frontend Engineering",
                "Software Architecture",
                "Digital Products",
                "Interface Design",
              ].map((interest) => (
                <li
                  key={interest}
                  className="border-b border-white/10 py-5 text-sm text-white/60 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section aria-labelledby="about-cta-title">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/30">
                Next
              </p>
              <h2
                id="about-cta-title"
                className="mt-5 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl"
              >
                Conheça o trabalho.
              </h2>
            </div>
            <Link
              href="/work"
              className="group inline-flex min-h-11 w-fit items-center gap-4 border-b border-white/25 pb-2 text-sm font-medium text-white outline-none transition-colors duration-200 hover:border-white focus-visible:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              <span>Explorar projetos</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-200 ease-out group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}