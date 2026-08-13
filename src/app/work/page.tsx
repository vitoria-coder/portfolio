import Link from "next/link";
const projects = [
 {
     slug: "portfólio",
    number: "02",
    title: "Personal Portfólio",
    description:
     "Um portfólio profissional desenvolvido com foco em engenharia, experiência e identidade visual.",
    category: "Web Development",
 },
] as const;

export default function WorkPage() {
  return(
    <main className="min-h-screen bg-[#0a0a0a] text-white">
        <section className="mx-auto max-w-7xl px-5 pb-24 pt-36 sm:px-8 lg:px-10">
            <div className="max-w-4x1">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/35">
                        03 / Work
                </p>
                <h1 className="mt-6 text-5xl font-medium tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                        Projetos
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">
                        Uma seleção de projetos, experimentos e trabalhos que representam
                        minha evolução como desenvolvedora de softare.
                </p>
            </div>
            <div className="mt-24 border-t border-white/10">
                {projects.map((project) => (
                    <Link
                      key={project.slug}
                      href={`/work/${project.slug}`}
                      className="group grid gap-6 border-b border-white/10 py-10 outline-none transition-colors duration-300 hover:bg-white/2.5 focus-visible:bg-white/4 md:grid-cols-[80px_1fr_auto] md:items-center"
                    >
                    <span className="font-mono text-[0.65rem] text-white/30">
                        {project.number}
                    </span>
                    <div>
                        <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-white/30">
                           {project.category}
                        </p>
                        <h2 className="mt-3 text-2x1 font-medium tracking-[-0.02em]">
                            {project.title}
                        </h2>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-white/45">
                            {project.description}
                        </p>
                    </div>
                    <span 
                        aria-hidden="true"
                        className="text-xl text-white/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white"
                            >
                                →
                            </span>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                    </Link>
                    ))}
            </div>
        </section>
    </main>
    );
}