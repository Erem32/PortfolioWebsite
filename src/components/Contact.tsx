import { siteData } from "../data/siteData";
import { Icon } from "./Icon";

export function Contact() {
  return (
    <section
      id="contact"
      className="section section-anchor contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">05 / Get in touch</p>
          <h2 id="contact-title">
            Let&apos;s build
            <br />
            something that lasts<span className="accent">.</span>
          </h2>
          <p className="contact-intro">
            Have a Python or backend engineering opportunity in mind? I&apos;d
            be happy to talk about the role and how I could contribute.
          </p>
          <a
            href={"mailto:" + siteData.profile.email}
            className="contact-email"
          >
            {siteData.profile.email}
            <Icon name="arrow-up-right" />
          </a>
        </div>
        <div className="contact-links">
          <a href={"mailto:" + siteData.profile.email}>
            <Icon name="mail" />
            <span>Email me</span>
            <Icon name="arrow-up-right" />
          </a>
          <a href={siteData.links.linkedin} target="_blank" rel="noreferrer">
            <Icon name="linkedin" />
            <span>Connect on LinkedIn</span>
            <Icon name="arrow-up-right" />
          </a>
          <a href={siteData.links.github} target="_blank" rel="noreferrer">
            <Icon name="github" />
            <span>Explore my GitHub</span>
            <Icon name="arrow-up-right" />
          </a>
          <p>{siteData.profile.location}</p>
        </div>
      </div>
    </section>
  );
}
