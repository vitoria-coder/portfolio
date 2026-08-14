import ProjectRow, { type Project } from "./ProjectRow";
const projects: Project[] = [
{
    number: "01",
    title: "Digital Experience",
    description:
      "Experiência digital desenvolvida com foco em arquitetura frontend, clareza de interface e qualidade de interação.",
    category: "Frontend",
},
{
    number: "02",
    title: "Software Platform",
    description:
      "Projeto orientado à construção de uma base de software organizada, escalável e preparada para evolução.",
    category: "Engineering",
},
{
    number: "03",
    title: "Experimental Interface",
    description:
      "Exploração de possibilidades de interação entre design, tecnologia e experiências digitais.",
    category: "Lab",
},
];
export default function FeaturedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <header className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white/30">
              Selected work
            </p>
            <h2
              id="work-title"
              className="mt-5 max-w-2xl text-4xl font-medium tracking-[-0.04em] text-white sm:text-5xl"
            >
              Trabalho selecionado.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-white/35 sm:text-right">
            Uma seleção inicial de projetos e experimentos. O conteúdo será
            expandido conforme o portfólio evolui.
          </p>
        </header>
        <div className="mt-16 border-b border-white/10">
          <ul>
            {projects.map((project) => (
              <ProjectRow
                key={project.number}
                project={project}
              />
            ))}
          </ul>
        </div>
        <div className="mt-8 flex justify-end">
          <a
            href="/work"
            className="group inline-flex items-center gap-3 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-white/40 outline-none transition-colors duration-200 hover:text-white focus-visible:text-white"
          >
            <span>View all work</span>
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}