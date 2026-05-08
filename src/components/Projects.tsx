import { useMemo, useState } from "react";
import { siteData } from "../data/siteData";
import { ProjectCard } from "./ProjectCard";

const allFilter = "All";

export function Projects() {
  const [activeTag, setActiveTag] = useState(allFilter);

  const tags = useMemo(() => {
    const uniqueTags = new Set(
      siteData.projects.flatMap((project) => project.technologies),
    );

    return [allFilter, ...Array.from(uniqueTags).sort()];
  }, []);

  const visibleProjects = useMemo(() => {
    if (activeTag === allFilter) {
      return siteData.projects;
    }

    return siteData.projects.filter((project) =>
      project.technologies.includes(activeTag),
    );
  }, [activeTag]);

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-slate-200 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-slate-500">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">
            Selected GitHub projects
          </h2>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                activeTag === tag
                  ? "bg-slate-950 text-white"
                  : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
