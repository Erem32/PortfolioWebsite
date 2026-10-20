import { siteData } from "../data/siteData";

export function Skills() {
  return (
    <section
      id="skills"
      className="section section-anchor"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / Toolkit</p>
            <h2 id="skills-title">The tools behind the work.</h2>
          </div>
          <p className="section-intro">
            Technologies used across my professional work and personal projects.
          </p>
        </div>
        <div className="skills-grid">
          {siteData.skills.map((group) => (
            <article className="skill-group" key={group.category}>
              <h3>{group.category}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
