import type { SiteData } from "../types";

export const siteData: SiteData = {
  profile: {
    name: "Mateusz Majos",
    title: "Working Student Python Developer / Applied Computer Science Master's Student",
    intro:
      "I work as a Working Student Python Developer at Nokia and build backend-focused applications with Python, FastAPI, React, JavaScript, and SQL databases.",
    about: [
      "I am focused on Python, backend development, APIs, databases, and practical full-stack applications.",
      "My strongest projects combine API design, database work, authentication, real-time communication, and responsive frontend interfaces.",
    ],
    focus: ["Python", "Backend", "APIs", "Databases", "React"],
    email: "mateusz.majos133@gmail.com",
    location: "Poland",
  },
  links: {
    github: "https://github.com/Erem32",
    linkedin: "https://www.linkedin.com/in/mateusz-majos-229299371/",
  },
  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
  ],
  experience: [
    {
      organization: "Nokia",
      logoText: "N",
      logoSrc: "/logos/nokia.svg",
      title: "Working Student Python Developer",
      period: "Feb 1, 2026 - Present",
      location: "Wroclaw, Poland",
      description:
        "Developing professional Python skills in an engineering environment while growing toward backend and full-stack software development.",
    },
  ],
  education: [
    {
      organization: "Wroclaw University of Science and Technology",
      logoText: "PWr",
      logoSrc: "/logos/pwr.png",
      title: "Master's degree, Applied Computer Science in English",
      period: "Current",
      location: "Wroclaw, Poland",
      description:
        "Currently studying applied computer science with a focus on practical software engineering and computer science foundations.",
    },
    {
      organization: "Wroclaw University of Science and Technology",
      logoText: "PWr",
      logoSrc: "/logos/pwr.png",
      title: "Bachelor's degree, Informatics",
      period: "Completed",
      location: "Wroclaw, Poland",
      description:
        "Completed undergraduate studies in informatics, building a foundation in programming, databases, algorithms, and software development.",
    },
  ],
  skills: [
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind"],
    },
    {
      category: "Backend",
      skills: ["Python", "FastAPI", "REST APIs", "WebSockets", "Authentication"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "SQLite", "Oracle SQL"],
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Docker basics", "Linux"],
    },
  ],
  projects: [
    {
      title: "Bingo App",
      description:
        "Team full-stack project with a React frontend and FastAPI backend, focused on game flow, API communication, and practical collaboration.",
      technologies: ["React", "Python", "API"],
      githubUrl: "https://github.com/Erem32/ProjektZespolowy",
      liveDemoUrl: null,
      featured: true,
    },
    {
      title: "Chat Service",
      description:
        "Real-time chat service built around WebSockets, backend application logic, and reliable communication patterns.",
      technologies: ["Python", "API"],
      githubUrl: "https://github.com/Erem32/ChatService",
      liveDemoUrl: null,
      featured: true,
    },
    {
      title: "Crypto Portfolio",
      description:
        "Full-stack crypto portfolio simulator and tracker for practicing application structure, data handling, and user-focused features.",
      technologies: ["Python", "React", "API"],
      githubUrl: "https://github.com/Erem32/crypto-portfolio",
      liveDemoUrl: null,
      featured: true,
    },
    {
      title: "Forkify",
      description:
        "Recipe search application using JavaScript and asynchronous data fetching from an external API.",
      technologies: ["JavaScript", "API"],
      githubUrl: "https://github.com/Erem32/Forkify",
      liveDemoUrl: null,
      featured: false,
    },
  ],
};
