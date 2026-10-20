import { siteData } from "../data/siteData";

export function About() {
  return (
    <section
      id="about"
      className="section section-anchor about-section"
      aria-labelledby="about-title"
    >
      <div className="container about-grid">
        <div>
          <p className="eyebrow">03 / How I work</p>
          <h2 id="about-title">{siteData.profile.aboutHeading}</h2>
        </div>
        <div className="about-copy">
          {siteData.profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
