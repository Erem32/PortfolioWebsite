import { useState } from "react";
import { siteData } from "../data/siteData";
import { ProjectCard } from "./ProjectCard";

const allFilter = "All work";
const categories = [
  allFilter,
  ...new Set(siteData.projects.map((project) => project.category)),
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState(allFilter);
  const visibleProjects = siteData.projects.filter(
    (project) =>
      activeCategory === allFilter || project.category === activeCategory,
  );

  return (
    <section
      id="projects"
      className="section section-anchor projects-section"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Selected work</p>
            <h2 id="projects-title">
              Built to solve.
              <br />
              <span className="muted-heading">Designed to hold up.</span>
            </h2>
          </div>
          <p className="section-intro">
            A selection of backend systems, full-stack applications, and
            collaborative work. Explore the code and the engineering decisions
            behind it.
          </p>
        </div>
        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects by discipline"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              aria-controls="project-grid"
              className={activeCategory === category ? "filter-active" : ""}
            >
              {category}
            </button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite" role="status">
          Showing {visibleProjects.length}{" "}
          {visibleProjects.length === 1 ? "project" : "projects"}.
        </p>
        <div id="project-grid" className="project-grid">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={siteData.projects.indexOf(project)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
