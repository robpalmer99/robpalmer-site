# CLAUDE.md — Project Instructions

## Build & Deploy
- Always run `npm run build` after making changes to verify no errors
- Clear `.next` cache if you get stale CSS or 500 errors: `rm -rf .next`

## Git Workflow
- **Work directly on `main`.** Commit and push freely — no need to ask. Pushing backs up to GitHub but does **not** deploy: `vercel.json` sets `git.deploymentEnabled.main: false`.
- **Deploying is separate, deliberate, and costs money** (a Vercel build). `main` = latest code; production = whatever was *last deliberately deployed*, which may lag `main`. Only deploy when the user explicitly asks or clearly wants the latest live — never as a side effect of pushing.
- **To deploy:** Vercel dashboard → robpalmer-site → "Create Deployment" from `main`, or the project's Deploy Hook URL. Claude may trigger it via the Vercel integration **only on explicit request**.
- No `dev` branch; no worktrees by default (use one only for parallel agents or risky throwaway work).

## Code Conventions
- Use design token colors (`ink-*`, `gold-*`, `paper-*`) — never raw hex or Tailwind defaults
- Headings: `font-heading` (Fraunces). Body: `font-body` (Lora)
- External links: `target="_blank" rel="noopener noreferrer"`
- All images: Next.js `<Image>` with `fill` + `object-cover` + explicit `sizes`
- Card link text: `text-gold-600` (not gold-500) for WCAG AA contrast
- Meta/secondary text: `text-paper-600` (not paper-400) for WCAG AA contrast

## Component Patterns
- **blocks/** — Composed page sections (Hero, CTABanner, FAQAccordion)
- **ui/** — Atomic primitives (Badge, Button, Section, Container, FadeIn)
- **layout/** — Persistent chrome (Header, Footer, Breadcrumbs)
- **mdx/** — Blog-specific components (DefinitionBox, KeyTakeaways, ComparisonTable)
- Cards: `rounded-xl border-paper-200 bg-white shadow-sm hover:shadow-md hover:border-gold-200 hover:-translate-y-0.5`
- FadeIn stagger: `delay={index * 80}` (or 100, 150) for cascading reveals

## Data Architecture
- Services: `src/app/services/_data/services.ts` (12 items, Service interface)
- Verticals: `src/app/verticals/_data/verticals.ts` (6 items, Vertical interface)
- Portfolio: `src/app/portfolio/_data/portfolio.ts` (12 items)
- Case Studies: `src/app/case-studies/_data/case-studies.ts` (2 items)
- Testimonials: `src/content/testimonials.ts` (38 items, IDs '1'-'38')
- Blog: 148 MDX posts in `src/content/blog/`
- Constants: `src/lib/constants.ts` (SITE_URL, NAV_LINKS, STATS, etc.)

## Content Rendering
- Service/vertical `sections[].content` renders via `dangerouslySetInnerHTML` (supports inline HTML links)
- `DefinitionBox` also renders definition text as HTML
- Blog posts use MDX with custom components from `src/components/mdx/`
- Blog-to-page mapping: `src/lib/content-links.ts` maps categories/tags to services/verticals

## SEO
- Every page needs canonical URL, metaTitle, metaDescription
- Service/vertical pages have Service + FAQPage JSON-LD
- Blog posts have Article JSON-LD with 10 FAQs each
- Sitemap and robots.txt generate at build time
