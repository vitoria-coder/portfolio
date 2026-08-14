import Link from "next/link";
export interface Project {
  number: string;
  title: string;
  description: string;
  category: string;
}
interface ProjectRowProps {
  project: Project;
}
export default function ProjectRow({
  project,
}: ProjectRowProps) {
  return (
    <li className="group border-t border-white/10 first:border-t-0">
      <Link
        href="/work"
        className="relative grid min-h-40 gap-6 py-8 outline-none transition-colors duration-300 hover:bg-white/2.5 focus-visible:bg-white/[0.035] sm:grid-cols-[5rem_minmax(0,1fr)_auto] sm:items-center sm:gap-8 sm:py-10"
      >
        <span className="font-mono text-[0.6rem] tracking-[0.18em] text-white/25">
          {project.number}
        </span>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <h3 className="text-2xl font-medium tracking-[-0.03em] text-white transition-transform duration-300 ease-out group-hover:translate-x-1 sm:text-3xl">
              {project.title}
            </h3>
            <span className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-white/30">
              {project.category}
            </span>
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/40 transition-colors duration-300 group-hover:text-white/55">
            {project.description}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="flex size-10 items-center justify-center border border-white/10 text-white/35 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:border-white/30 group-hover:text-white sm:size-12"
        >
          →
        </span>
      </Link>
    </li>
  );
}