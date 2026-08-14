import Link from "next/link";

export default function HomePage() {
  return(
    <section aria-labelledby="hero-title" className="relative flex min-h-[calc(100svh-5rem)] items-end border-b border-white/10 pt-28">
      <div className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
            <div>
                <div className="mb-8 flex items-center gap-4">
                    <span aria-hidden="true" className="h-px w-8 bg-white/30"/>
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-white/40">
                        Software Engineer
                    </p>
                </div>
                <h1 id="hero-title" className="max-w-5xl text-[clamp(4.5rem,13vw,10rem)] font-medium uppercase leading-[0.78] tracking-[-0.07em] text-white">
                    Vitória
                    <br />
                    <span className="ml-[8vw] text-white/45">
                    Sousa
                    </span>
                </h1>
                <div className="mt-12 grid gap-8 sm:grid-cols-[minmax(0,32rem)_auto] sm:items-end">
                 <p className="max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
                     Desenvolvedora de software interessada em construir produtos
                     digitais claros, funcionais e tecnicamente bem estruturados.
                 </p>
                 <Link
                  href="/work"
                  className="group inline-flex min-h-11 w-fit items-center gap-4 border-b border-white/25 pb-2 text-sm font-medium text-white outline-none transition-colors duration-200 hover:border-white hover:text-white focus-visible:border-white focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                  >
                    <span>Explore work</span>
                    <span aria-hidden="true" className="transition-transform duration-200 ease-out group-hover:translate-x-1">→</span>
                  </Link>
                </div>
            </div>
            <aside aria-label="Informações profissionais" className="border border-white/10 pl-5 sm:pl-6 lg:mb-1">
            <dl className="space-y-5">
                <div>
                    <dt className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-white/30">
                       Based in
                    </dt>
                    <dd className="mt-1 text-sm text-white/65">
                       Brazil
                    </dd>
                </div>
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
                      Status
                    </dt>
                    <dd className="mt-1 flex items-center gap-2 text-sm text-white/65">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-emerald-400/70">
                      Building
                    </span>
                    </dd>
                </div>
            </dl>
            </aside>
        </div>
        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[0.55rem] uppercase tracking-[0.18em] text-white/25">
          <span>Portfólio / 2026</span>

          <span aria-hidden="true" className="hidden sm:inline">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
);
}