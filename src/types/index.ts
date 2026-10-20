export type SkillCategory = {
  category: string;
  skills: string[];
};

export type Project = {
  title: string;
  category: string;
  kind: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string | null;
  featured: boolean;
};

export type TimelineItem = {
  organization: string;
  logoText: string;
  logoSrc?: string;
  title: string;
  period: string;
  location?: string;
  description: string;
  highlights?: string[];
};

export type SiteData = {
  profile: {
    name: string;
    title: string;
    intro: string;
    aboutHeading: string;
    about: string[];
    focus: string[];
    email: string;
    location: string;
  };
  links: {
    github: string;
    linkedin: string;
  };
  navItems: Array<{
    label: string;
    href: string;
  }>;
  experience: TimelineItem[];
  education: TimelineItem[];
  skills: SkillCategory[];
  projects: Project[];
};
