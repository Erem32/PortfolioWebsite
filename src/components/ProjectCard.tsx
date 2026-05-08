import type { Project } from "../types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold text-slate-950">{project.title}</h3>
        {project.featured && (
          <span className="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
            Featured
          </span>
        )}
      </div>

      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-950"
        >
          View repository
        </a>
        {project.liveDemoUrl && (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-4 text-sm font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-950"
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
