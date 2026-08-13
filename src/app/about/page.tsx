import Link from "next/link";
export default function AboutPage() {
    return (
    <main>
      <section>
        <header>
          02 / About
          <h1 className="mt-6 text-5xl font-medium tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            Sobre mim
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">
            Sou Vitória Sousa, estudante de Ciência da Computação e
            desenvolvedora de software interessada em construir produtos
            digitais com atenção à experiência, ao design e à engenharia.
          </p>
        </header>
      </section>
      <section className="mt-24 grid gap-12 border-t border-white/10 pt-10 md:grid-cols-[1fr_2fr]">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/30">
          Profile
        </p>
        <div className="max-w-2xl space-y-6 text-base leading-7 text-white/55">
          <p>
            Esta área será posteriormente expandida com a trajetória
            profissional, formação, interesses técnicos e princípios de
            trabalho.
          </p>
          <p>
            Por enquanto, ela representa a estrutura inicial da página e
            estabelece a linguagem que será desenvolvida nas próximas
            etapas.
          </p>
          <Link
            href="/work"
            className="inline-flex min-h-11 items-center border border-white/20 px-5 text-sm text-white transition-colors duration-200 hover:border-white/50 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Explorar trabalho
          </Link>
        </div>
      </section>
    </main>
  );
}
