# tmplate: Astro static starter with Tailwind 4

Fast, SEO-friendly static sites for small businesses. Minimal dependencies. Tailwind 4.

## Tech stack
- Astro (static output)
- Tailwind CSS v4 (single global import)
- Optional TypeScript in component props where helpful

## Project structure
/
├── public/
├── src/
│   ├── components/
│   │   └── blocks/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── …
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── README.md

Astro routes are created from files in src/pages. Static assets go in public.

## Quick start
Install dependencies
    npm install

Start dev server
    npm run dev

Visit http://localhost:4321

## Build
Production build
    npm run build

Preview the build
    npm run preview

## Tailwind 4 setup
Global stylesheet (loaded once in the layout): src/styles/global.css


The layout imports the stylesheet:
- In src/layouts/Layout.astro, include: import "../styles/global.css";

## SEO
- Each page sets its own <title>, <meta name="description">, and canonical link inside the <fragment slot="head"> of the layout.
- The layout stays generic and does not set page-specific SEO.
- Use semantic headings and one H1 per page.

## Accessibility
- “Skip to content” link in the layout.
- Visible focus styles.
- Semantic HTML.

## Notes
- TypeScript is optional. Use types in components where it helps, or disable per-file with // @ts-nocheck.
