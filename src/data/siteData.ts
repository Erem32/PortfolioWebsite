import type { SiteData } from "../types";

export const siteData: SiteData = {
  profile: {
    name: "Mateusz Majos",
    title: "Python Developer · Backend Engineering & Automation",
    intro:
      "I develop Python tooling and automated validation at Nokia, and build backend services with FastAPI and PostgreSQL. My focus is dependable systems and tools that make engineering work easier.",
    aboutHeading: "Engineering beyond the happy path.",
    about: [
      "I care about what happens when requests are repeated, workers run concurrently and tasks fail. In my Distributed Cloud Scheduler, I addressed those problems with idempotent submissions, durable job state, bounded retries and retained attempt history.",
      "At Nokia, I worked on Python validation, CI/CD and tools for testers. Alongside my work, I’m completing an English-taught master’s in Applied Computer Science and building full-stack applications with React.",
    ],
    focus: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Test automation",
      "MCP tooling",
    ],
    email: "mateusz.majos133@gmail.com",
    location: "Wrocław, Poland",
  },
  links: {
    github: "https://github.com/Erem32",
    linkedin: "https://www.linkedin.com/in/mateusz-majos-229299371/",
  },
  navItems: [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
  ],
  experience: [
    {
      organization: "Nokia",
      logoText: "N",
      logoSrc: "/logos/nokia.svg",
      title: "Working Student Python Developer",
      period: "February 2026 – Present",
      location: "Wrocław, Poland",
      description:
        "Python automation, CI/CD and test tooling for telecom engineering.",
      highlights: [
        "Created an MCP tool that read database records and helped testers populate manifest files.",
        "Developed automated Python tests for simulated hardware and wrote tests covering radio-unit scenarios.",
        "Worked on CI/CD workflows using Jenkins. Added automated validation to CI/CD jobs and regression tests to builds.",
        "Was responsible for Trouble Log, which combined component errors and logs into a radio node’s final logs.",
      ],
    },
  ],
  education: [
    {
      organization: "Wrocław University of Technology",
      logoText: "PWr",
      logoSrc: "/logos/pwr.png",
      title: "Master’s degree, Applied Computer Science",
      period: "February 2026 – Expected June 2027",
      location: "Wrocław, Poland",
      description:
        "English-taught program, alongside my Python development role at Nokia.",
      highlights: ["English: C2 (British Council certified). Polish: native."],
    },
    {
      organization: "Wrocław University of Technology",
      logoText: "PWr",
      logoSrc: "/logos/pwr.png",
      title: "Bachelor’s degree, Computer Engineering",
      period: "October 2022 – February 2026",
      location: "Wrocław, Poland",
      description:
        "Programming, databases, web applications and software engineering foundations.",
      highlights: [
        "Student Council member, Faculty of Information and Communication Technology.",
      ],
    },
  ],
  skills: [
    {
      category: "Python & Backend",
      skills: [
        "Python",
        "FastAPI",
        "REST APIs",
        "Pydantic",
        "SQLAlchemy",
        "asyncio",
      ],
    },
    {
      category: "Data & Authentication",
      skills: [
        "SQL",
        "PostgreSQL",
        "SQLite",
        "Oracle SQL",
        "JWT authentication",
      ],
    },
    {
      category: "Testing & Delivery",
      skills: [
        "Automated testing",
        "pytest",
        "CI/CD",
        "Jenkins",
        "Docker",
        "Git",
        "Gerrit",
        "Linux / WSL",
      ],
    },
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind"],
    },
    {
      category: "Developer Tools",
      skills: [
        "MCP tool development",
        "Cursor",
        "AI-assisted development",
        "GitHub",
        "VS Code",
      ],
    },
  ],
  projects: [
    {
      title: "Distributed Cloud Scheduler",
      category: "Distributed systems",
      kind: "Personal project",
      description:
        "A durable backend for immediate and scheduled jobs, with explicit failure recovery and a local Docker Compose demo.",
      highlights: [
        "Persisted jobs and dispatch intent atomically with a transactional outbox and idempotency keys.",
        "Implemented concurrent workers with retry backoff, lease fencing and retained attempt history.",
        "Added PostgreSQL integration tests for concurrency, shutdown and recovery.",
        "Completed 7,200 jobs across 24 documented local benchmark runs.",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
        "asyncio",
        "Docker",
      ],
      githubUrl: "https://github.com/Erem32/Distributed-Cloud-Scheduler",
      liveDemoUrl: null,
      featured: true,
    },
    {
      title: "Crypto-portfolio Simulator",
      category: "Full-stack",
      kind: "Personal project",
      description:
        "A simulated trading and portfolio application that connects market data, holdings and transaction history with React performance charts.",
      highlights: [
        "Built authenticated REST APIs with JWT, Pydantic validation and SQLAlchemy models.",
        "Implemented simulated buy/sell orders, holdings tracking and transaction history.",
        "Integrated CoinGecko market data with caching and visualized portfolio performance in React.",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "React",
        "JWT",
        "Recharts",
      ],
      githubUrl: "https://github.com/Erem32/crypto-portfolio",
      liveDemoUrl: null,
      featured: true,
    },
    {
      title: "Bingo Service",
      category: "Full-stack",
      kind: "Team project",
      description:
        "A room-based multiplayer bingo application with a React frontend, a FastAPI backend and persistent chat with image/video sharing.",
      highlights: [
        "Integrated React registration and login with FastAPI, and built game-board and room-entry interactions.",
        "Added support for sending videos in chat flows.",
      ],
      technologies: ["React", "Python", "FastAPI", "PostgreSQL"],
      githubUrl: "https://github.com/Erem32/ProjektZespolowy",
      liveDemoUrl: null,
      featured: false,
    },
    {
      title: "Python Chat Server",
      category: "Networking",
      kind: "Personal project",
      description:
        "A multithreaded TCP chat server with shared client state and message history.",
      highlights: [
        "Handled client connections with a dedicated thread per connection.",
        "Used locks to synchronize connected clients and shared message history.",
      ],
      technologies: ["Python", "TCP sockets", "Threading"],
      githubUrl: "https://github.com/Erem32/ChatService",
      liveDemoUrl: null,
      featured: false,
    },
    {
      title: "ENKA Business Website",
      category: "Web",
      kind: "Website rebuild",
      description:
        "A responsive Polish business website with a product catalog, detailed specifications and preserved PDF documentation.",
      highlights: [
        "Implemented responsive product navigation and progressively enhanced fuel filters.",
        "Preserved 27 PDF downloads and added page metadata and structured data.",
        "Added Playwright and axe checks for mobile layouts, keyboard access and navigation without JavaScript.",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Playwright", "axe"],
      githubUrl: "https://github.com/Erem32/enka-website",
      liveDemoUrl: null,
      featured: false,
    },
  ],
};
