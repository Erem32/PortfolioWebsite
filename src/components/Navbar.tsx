import { siteData } from "../data/siteData";
import { Icon } from "./Icon";

export function Navbar() {
  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Main navigation">
        <a href="#home" className="wordmark">
          <span className="monogram" aria-hidden="true">
            mm<span>.</span>
          </span>
          <span className="wordmark-name">{siteData.profile.name}</span>
          <span className="sr-only">home</span>
        </a>
        <div className="nav-links">
          {siteData.navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="nav-contact">
          Let&apos;s talk <Icon name="arrow-up-right" />
        </a>
      </nav>
    </header>
  );
}
