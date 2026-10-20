import { siteData } from "../data/siteData";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>
          &copy; {new Date().getFullYear()} {siteData.profile.name}
        </p>
        <a href="#home">
          Back to top <Icon name="arrow-up-right" />
        </a>
      </div>
    </footer>
  );
}
