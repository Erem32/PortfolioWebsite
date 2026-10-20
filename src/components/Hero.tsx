import { siteData } from "../data/siteData";
import { Icon } from "./Icon";

export function Hero() {
  return (
    <section
      id="home"
      className="hero section-anchor"
      aria-labelledby="hero-title"
    >
      <div className="container">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">
              <span className="accent-line" /> {siteData.profile.location}
            </p>
            <h1 id="hero-title">
              {siteData.profile.name.split(" ")[0]}
              <br />
              {siteData.profile.name.split(" ").slice(1).join(" ")}
              <span className="accent">.</span>
            </h1>
            <p className="hero-title">{siteData.profile.title}</p>
            <p className="hero-intro">{siteData.profile.intro}</p>
            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                Explore my work <Icon name="arrow-right" />
              </a>
              <a
                href={siteData.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                GitHub <Icon name="arrow-up-right" />
              </a>
            </div>
          </div>
          <aside className="hero-aside" aria-label="Professional focus">
            <p className="eyebrow">In practice</p>
            <div className="focus-item">
              <span className="focus-number">01 / ENGINEERING</span>
              <h2>Python at Nokia.</h2>
              <p>
                Automated validation, developer tools, and CI/CD in an
                engineering team.
              </p>
              <a href="#experience" className="text-link">
                My experience <Icon name="arrow-up-right" />
              </a>
            </div>
            <div className="focus-item">
              <span className="focus-number">02 / BUILDING</span>
              <h2>Beyond the happy path.</h2>
              <p>
                Backend projects built around concurrency, durable data, and
                failure recovery.
              </p>
              <a href="#projects" className="text-link">
                See the implementation <Icon name="arrow-up-right" />
              </a>
            </div>
          </aside>
        </div>
        <div className="hero-bottom">
          <p>Backend first. End-to-end understanding.</p>
          <div className="focus-tags" aria-label="Core technologies">
            {siteData.profile.focus.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
