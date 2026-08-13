import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-5 pb-20 pt-32 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/40">
            Software Engineer
          </p>

          <h1 className="mt-6 max-w-3xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            Vitória Sousa
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
            Desenvolvedora de software interessada em construir experiências
            digitais cuidadosas, funcionais e tecnicamente sólidas.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <Link
              href="/work"
              className="inline-flex min-h-11 items-center border border-white/20 px-5 text-sm text-white transition-colors duration-200 hover:border-white/50 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Ver trabalho
            </Link >

            <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-white/30">
              01 / 05
            </span>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="border-t border-white/10"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/35">
                Selected work
              </p>

              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                Projetos em destaque
              </h2>
            </div>

            <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-white/30">
              Work / 01
            </span>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
            <article className="min-h-72 bg-[#0a0a0a] p-7 sm:p-9">
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-white/30">
                Project 01
              </span>

              <h3 className="mt-16 text-2xl font-medium tracking-[-0.02em]">
                Projeto em desenvolvimento
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/45">
                Área reservada para apresentar um projeto relevante,
                destacando contexto, decisões técnicas e resultado.
              </p>
            </article>

            <article className="min-h-72 bg-[#0a0a0a] p-7 sm:p-9">
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-white/30">
                Project 02
              </span>

              <h3 className="mt-16 text-2xl font-medium tracking-[-0.02em]">
                Projeto em desenvolvimento
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/45">
                Área reservada para apresentar outro trabalho e demonstrar
                experiência prática em engenharia de software.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/35">
            Profile
          </p>

          <div className="mt-8 max-w-3xl">
            <p className="text-2xl leading-10 tracking-[-0.02em] text-white/75 sm:text-3xl sm:leading-[1.35]">
              Uma primeira composição da experiência profissional. O conteúdo
              definitivo desta página será desenvolvido posteriormente.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}