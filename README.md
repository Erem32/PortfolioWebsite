# Mateusz Majos Portfolio

A clean MVP portfolio/resume website built with React, Vite, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Build

```bash
npm run build
```

## Update site content

All editable portfolio content lives in `src/data/siteData.ts`.

- Update name, title, intro, about text, email, and location in `profile`.
- Update GitHub and LinkedIn URLs in `links`.
- Add, remove, or rename skill groups in `skills`.
- Add, edit, or remove projects in `projects`.
- Use `liveDemoUrl: null` when a project does not have a live demo.

Project fields:

```ts
{
  title: "Project name",
  description: "Short project summary",
  technologies: ["React", "Python", "API"],
  githubUrl: "https://github.com/...",
  liveDemoUrl: null,
  featured: true
}
```

## Structure

```text
src/
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Skills.tsx
    Projects.tsx
    ProjectCard.tsx
    Contact.tsx
    Footer.tsx
  data/
    siteData.ts
  types/
    index.ts
  App.tsx
  main.tsx
  index.css
```
