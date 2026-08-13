import Link from "next/link";

export default function ContactPage() {
  return(
    <main className="min-h-screen bg-[#0a0a0a] text-white">
        <section className="mx-auto flex min-h-[75vh] max-w-7xl items-center px-5 py-32 sm:px-8 lg:px-10">
            <div className="max-w-4x1">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/35">
                05 / Contact
            </p>
            <h1 className="mt-6 text-5xl font-medium tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                Vamos Conversar.
            </h1>
            <p className="mt-8 max-w-2x1 text-lg leading-8 text-white/55">
                Se você tem um projeto, oportunidade ou ideia para compartilhar,
                este será o ponto de contato.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
                <a
                 href="https://github.com/vitoria-coder"
                 target="_blank"
                 rel="noreferrer"
                 className="inline-flex min-h-11 items-center border border-white/20 px-5 text-sm transition-colors duration-200 hover:border-white/50 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                    GitHub
                </a>
                <Link 
                 href="/"
                 className="inline-flex min-h-11 items-center px-5 text-sm text-white/55 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                 >
                    Voltar para home.
                 </Link>
            </div>

            </div>
        </section>
    </main>
    );
}