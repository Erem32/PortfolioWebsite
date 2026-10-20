import type { Project } from "../types";
import { Icon } from "./Icon";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      className={"project-card" + (project.featured ? " project-featured" : "")}
    >
      <div className="project-topline">
        <span className="project-index">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="project-kind">{project.kind}</span>
        {project.featured && <span className="featured-label">Featured</span>}
      </div>
      <p className="project-category">{project.category}</p>
      <h3>
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          {project.title}
          <Icon name="arrow-up-right" />
        </a>
      </h3>
      <p className="project-description">{project.description}</p>
      <ul className="project-highlights">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <div
        className="technology-tags"
        aria-label={project.title + " technologies"}
      >
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
      <div className="project-links">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          View source <Icon name="arrow-up-right" />
        </a>
        {project.liveDemoUrl && (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Live demo <Icon name="arrow-up-right" />
          </a>
        )}
      </div>
    </article>
  );
}
