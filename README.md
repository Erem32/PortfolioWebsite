# Mateusz Majos — Developer Portfolio

A responsive portfolio built with React, TypeScript, Vite, and Tailwind CSS. It presents backend and full-stack projects, professional experience, education, technical skills, and contact links for prospective employers.

The page is organized as an introduction, selected projects, experience and education, about, skills, and contact. Distributed Cloud Scheduler and Crypto Portfolio lead the project selection, supported by the ENKA company website, TCP chat, and a team Bingo application.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build and check

```bash
npm run lint
npm run build
npm run preview
```

The production build is written to `dist/`. The preview command serves that build locally.

## Update site content

Portfolio content lives in `src/data/siteData.ts`, with its schema in `src/types/index.ts`. The current copy draws on the Markdown and YAML CV sources in the separate `cv` repository. Keep career claims, dates, project descriptions, and links consistent with those sources and the corresponding project repositories.

- `profile`: name, professional title, introduction, `aboutHeading`, about paragraphs, focus areas, email, and location.
- `links`: GitHub and LinkedIn URLs.
- `navItems`: navigation labels and section anchors.
- `experience` and `education`: timeline entries with organization, title, period, description, optional location, and optional highlights.
- `skills`: named groups of technical skills.
- `projects`: project summaries, technical highlights, technologies, and source or demo links.

Project fields:

```ts
{
  title: "Project name",
  category: "Backend & distributed systems",
  kind: "Personal project",
  description: "A concise summary of the problem and solution.",
  highlights: ["A specific implementation detail or supported outcome."],
  technologies: ["Python", "FastAPI", "PostgreSQL"],
  githubUrl: "https://github.com/username/project",
  liveDemoUrl: null,
  featured: true
}
```

`category` and `kind` are strings; `highlights` is an array of strings. Use `liveDemoUrl: null` or omit it when a project has no public demo. `featured` identifies projects to emphasize.

Timeline entries support `highlights?: string[]` for concrete responsibilities or achievements. The profile's `aboutHeading` is a string used as the about section heading. Retain the exact official job title, “Working Student Python Developer,” when updating the Nokia experience.

Update the page title and description in `index.html` when the portfolio's positioning changes. Social metadata is defined there as well.

## Source structure

```text
src/
  components/   Page sections and project cards
  data/         Portfolio content
  types/        Shared content types
  App.tsx       Page composition
  main.tsx      Application entry point
  index.css     Theme and page styles
public/         Static assets
index.html      Metadata and HTML entry point
```
