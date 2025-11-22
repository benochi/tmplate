# tmplate: Astro static starter with Tailwind 4

Fast, SEO-friendly static sites for small businesses. Minimal dependencies. Tailwind 4.

## Tech stack
- Astro (static output)
- Tailwind CSS v4 (single global import)
- Optional TypeScript in component props where helpful

## Project structure
/
├─ public/
├─ src/
│ ├─ components/
│ │ ├─ blocks/
│ │ └─ layout/
│ ├─ data/
│ ├─ layouts/
│ ├─ pages/
│ └─ styles/

Astro routes are created from files in src/pages. Static assets go in public.

## Quick start
git clone https://github.com/benochi/tmplate
mv tmplate exampleApp
cd exampleApp

git init -b main
git remote add origin git@github.com:yourusername/exampleApp.git   # create the private repo first
git add -A
git commit -m "Init from tmplate"
git push -u origin main

npm install
npm run dev → http://localhost:4321
npm run build
npm run preview


## Tailwind 4 setup
Global stylesheet (loaded once in the layout): src/styles/global.css


## SEO
Use <SeoHead /> inside <fragment slot="head"> on each page for title, description, canonical, and optional JSON-LD.

## Update per-site
Brand name (header/footer and page titles)
Contact email/phone copy
Formspree endpoint (formAction) and redirect URL
Social links (footer)
Content in src/data/ (services, pricing, stats, testimonials, work, faq)

## Accessibility
One <h1> per page
Meaningful alt text
Visible focus styles enabled by default

## Notes
TypeScript is optional. Use types in components where it helps, or disable per-file with // @ts-nocheck.
If deploying on vercel, analytics can be added Create env var VERCEL_ANALYTICS_ENABLE=1 in the Vercel project. Then add to src/layouts/Layout.astro (bottom of <body>):
<script defer src="/_vercel/insights/script.js"></script>
