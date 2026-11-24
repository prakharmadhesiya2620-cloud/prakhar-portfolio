# Prakhar Madhesiya — Portfolio

A responsive, dark-first personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React. Project and skill content is derived from the workspace research JSON files and included as local data so the website can be built independently.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

From this directory:

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Production build

```bash
npm run build
npm run preview
```

The static production site is written to `dist/`.

## Content

- Project descriptions, ordering, technologies, limitations, and source URLs are maintained in `src/data/portfolio-projects.json`.
- Skill names and group-source data are maintained in `src/data/portfolio-skills.json`; the UI groups only those listed skills.
- The workspace-level `portfolio-projects.json` and `portfolio-skills.json` were the source of truth when these bundled copies were prepared. If you update the workspace data later, copy the updated JSON files into `src/data/` before rebuilding.
- The six certification titles were supplied for this portfolio. Issue dates and verification links were not provided, so the site does not show dates or claim online verification.
- The hero portrait uses the supplied `public/images/profile.png` directly. The image is not generated or edited; its rounded frame uses `object-fit: cover` and preserves the full image height.
- No resume file was supplied. “Request resume” opens an email request instead of downloading a placeholder file.
- The contact form validates fields in the browser and prepares an email draft. The site has no backend and does not send or store submissions.
- GitHub profile and repository links are provided; no contribution graph or unverified statistics are displayed.

## Deploy to Vercel

1. Import the repository in Vercel.
2. Set **Root Directory** to `portfolio-website`.
3. Use the Vite preset, or configure:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
4. Deploy. No environment variables or backend services are required.

## Accessibility and motion

The interface includes semantic landmarks, keyboard-visible focus styles, labels for form controls, reduced-motion handling, and responsive navigation. Theme choice is stored locally in the browser; dark mode is the default.
