import Link from "next/link";

export default async function ProjectPage ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const projectName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

return(
    <main className="min-h-screen bg-[#0a0a0a] text-white">
        <section className="mx-auto max-w-7x1 px-5 pb-24 pt-36 sm:px-8 lg:px-10">
            <div className="max-w-4x1">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/35">
                    Project / {slug}
                </p>
                <h1 className="mt-6 text-5xl font-medium tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                    {projectName}
                </h1>
                <p className="mt-8 max-w-2x1 text-lg leading-8 text-white/55">
                    Página indívidual do projeto. O conteúdo definitivo será
                    desenvolvido quando a estrutura de projetos for implementada...
                </p>
            </div>
            <div className="mt-24 border-t border-white/10 pt-8">
            <Link
             href="/work"
             className="inline-flex min-h-11 items-center gap-3 text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
             >
                <span aria-hidden="true">←</span>
                Voltar para projetos
             </Link>
            </div>
        </section>  
    </main>
);
}