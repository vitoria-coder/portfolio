import Link from "next/link";

export default function LabPage(){
  return(
    <main className="min-h-screen bg-[#0a0a0a] text-white">
        <section className="mx-auto max-w-7x1 px-5 pb-24 pt-36 sm:px-8 lg:px-10">
            <div className="max-w-4x1">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/35">
                    04 / Lab
                </p>

                <h1 className="mt-6 text-5xl font-medium tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                    Lab
                </h1>
                <p className="mt-8 max-w-2x1 text-lg leading-8 text-white/55">
                      Um espaço para experimentos, estudos e explorações técnicas que
                     não necessariamente fazem parte dos projetos principais.
                </p>
            </div>
            <div className="mt-24 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
                <article className="min-h-64 bg-[#0a0a0a] p-8">
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-white/30">
                        Experiment 01
                  </span>
                  <h2 className="mt-12 text-2x1 font-medium">
                    Experimentos em construção
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-6 text-white/45">
                    Área reservada para estudos e protótipos relacionados à
                    engenharia de software.
                  </p>
                </article>
            </div>
            <div className="mt-16">
                <Link
                    href="/contact"
                    className="text-sm text-white/55 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
                        Entrar em Contato
                </Link>
                </div>
            </section>
        </main>
    );
}