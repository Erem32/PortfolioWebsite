import { siteData } from "../data/siteData";
import type { TimelineItem } from "../types";

function TimelineEntry({ item }: { item: TimelineItem }) {
  return (
    <article className="timeline-entry">
      <div className="organization-logo" aria-hidden="true">
        {item.logoSrc ? (
          <img
            src={item.logoSrc}
            alt=""
            width="56"
            height="56"
            loading="lazy"
          />
        ) : (
          item.logoText
        )}
      </div>
      <div className="timeline-content">
        <p className="timeline-period">{item.period}</p>
        <h4>{item.title}</h4>
        <p className="organization-name">{item.organization}</p>
        {item.location && <p className="timeline-location">{item.location}</p>}
        <p className="timeline-description">{item.description}</p>
        {item.highlights && (
          <ul className="timeline-highlights">
            {item.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="section section-anchor"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / Experience &amp; education</p>
            <h2 id="experience-title">A practical foundation.</h2>
          </div>
          <p className="section-intro">
            Professional Python development, supported by an academic foundation
            in computer engineering.
          </p>
        </div>
        <div className="experience-grid">
          <div>
            <h3 className="column-heading">Professional experience</h3>
            {siteData.experience.map((item) => (
              <TimelineEntry
                key={item.organization + "-" + item.title}
                item={item}
              />
            ))}
          </div>
          <div>
            <h3 className="column-heading">Education</h3>
            {siteData.education.map((item) => (
              <TimelineEntry
                key={item.organization + "-" + item.title}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
