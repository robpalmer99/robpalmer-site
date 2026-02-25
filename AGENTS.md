# AGENTS.md — robpalmer.com

## Project Overview

Portfolio and marketing website for **Rob Palmer**, a veteran direct-response copywriter with 30+ years of experience and $523M+ in tracked results. The site replaces a WordPress site at robpalmer.com.

**Live URL:** https://robpalmer.com
**Repo:** https://github.com/robpalmer99/robpalmer-site

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 15.5 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Typography plugin | @tailwindcss/typography | 0.5 |
| Blog content | MDX via next-mdx-remote | 6.x |
| Image optimization | sharp | 0.34 |
| Analytics | @vercel/analytics + @vercel/speed-insights | — |
| Scheduling | react-calendly | 4.x |
| Utilities | clsx, tailwind-merge, gray-matter, reading-time | — |
| Deployment target | Vercel | — |

---

## Design System

### Color Tokens (defined in `src/app/globals.css`)

- **Ink** (`ink-700` → `ink-950`): Near-black tones for authority and headings
- **Gold** (`gold-50` → `gold-600`): Burnished accent color signaling ROI/premium — used for CTAs, badges, hover states, links
- **Paper** (`paper-50` → `paper-800`): Warm neutrals for backgrounds, body text, borders

### Typography

- **Headings:** Inter (`--font-heading` / `font-heading` class)
- **Body:** Lora (`--font-body` / `font-body` class)
- Base font size: 1.0625rem for long-form readability

### Component Patterns

- **Cards:** Rounded-xl, paper-200 border, white bg, shadow-sm, hover:shadow-md + hover:border-gold-200 + hover:-translate-y-0.5
- **Image cards:** h-40 image container, object-cover, group-hover:scale-105 transition
- **Badges:** Three variants — `default` (paper), `gold`, `dark`
- **Sections:** Three variants — `default` (paper-50 bg), `alt` (paper-100 bg), `dark` (ink-950 bg)
- **CTAs:** Gold-400 bg with ink-950 text, or outline variant
- **External links:** Open external-link SVG icon, target="_blank" with rel="noopener noreferrer"
- **Card link text:** Uses `text-gold-600` (not gold-500) for WCAG AA contrast compliance
- **Meta text:** Uses `text-paper-600` (not paper-400) for WCAG AA contrast compliance

---

## Accessibility

The site follows WCAG 2.1 AA guidelines with the following key implementations:

- **Skip navigation:** "Skip to main content" link in root layout, targets `#main-content` on `<main>`
- **Focus indicators:** Global `focus-visible` outlines (2px gold-400) on all interactive elements via `globals.css`
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` disables all animations/transitions; smooth scroll is conditional on `prefers-reduced-motion: no-preference`
- **ARIA live regions:** ContactForm success/error messages use `aria-live`; portfolio filter results announced via `aria-live="polite"`
- **FAQ accordion:** Full ARIA pattern with `aria-expanded`, `aria-controls`, panel IDs, `aria-labelledby`, and `hidden` attribute
- **MobileNav:** Hidden from accessibility tree when closed (`aria-hidden`, `tabIndex={-1}`, `pointer-events-none`)
- **Form fields:** Visual `*` required indicators with `aria-required="true"`
- **Color contrast:** All text meets 4.5:1 ratio (AA) — gold-600 for link text, paper-600 for meta text
- **Navigation landmarks:** `aria-label` on main nav, mobile nav, portfolio filter group
- **Decorative elements:** SVG icons use `aria-hidden="true"`

---

## Security

### Security Headers (in `next.config.ts`)

All routes return the following headers:
- **X-DNS-Prefetch-Control:** on
- **Strict-Transport-Security:** max-age=63072000; includeSubDomains; preload
- **X-Frame-Options:** SAMEORIGIN
- **X-Content-Type-Options:** nosniff
- **Referrer-Policy:** strict-origin-when-cross-origin
- **Permissions-Policy:** camera=(), microphone=(), geolocation=(), interest-cohort=()
- **Content-Security-Policy:** Allowlists for self, Calendly, Vercel Analytics, Vercel Speed Insights

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (fonts, skip nav, header, footer, analytics)
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Tailwind config, color tokens, a11y styles, prose overrides
│   ├── not-found.tsx           # Custom 404 page (noindex)
│   ├── robots.ts               # Robots.txt generation
│   ├── sitemap.ts              # Sitemap XML generation (includes blog posts)
│   │
│   ├── services/
│   │   ├── page.tsx            # Services listing (9 services with images)
│   │   ├── [slug]/page.tsx     # Individual service detail pages
│   │   └── _data/services.ts   # Service data (interface + 9 items)
│   │
│   ├── industries/
│   │   ├── page.tsx            # Industries listing (6 industries with images)
│   │   ├── [slug]/page.tsx     # Individual industry detail pages (with FAQPage JSON-LD)
│   │   └── _data/industries.ts # Industry data (interface + 6 items)
│   │
│   ├── portfolio/
│   │   ├── page.tsx            # Portfolio listing with client-side category filters
│   │   └── _data/portfolio.ts  # Portfolio data (interface + 12 items)
│   │
│   ├── blog/
│   │   ├── page.tsx            # Blog listing with featured images
│   │   └── [slug]/page.tsx     # MDX blog post renderer
│   │
│   ├── case-studies/
│   │   ├── page.tsx            # Case studies listing
│   │   ├── belron-safelite-523m-campaign/page.tsx
│   │   └── apple-direct-mail-campaign/page.tsx
│   │
│   ├── testimonials/page.tsx   # All 36 testimonials
│   ├── about/page.tsx          # About with career timeline and stats
│   ├── contact/page.tsx        # Contact form + Calendly embed
│   └── api/contact/route.ts    # Contact form API endpoint
│
├── components/
│   ├── blocks/                 # Page-level building blocks
│   │   ├── Hero.tsx            # Hero with variants: home, page, minimal
│   │   ├── CTABanner.tsx       # CTA with variants: default, gold
│   │   ├── FAQAccordion.tsx    # Expandable FAQ with full ARIA pattern
│   │   ├── ServiceCard.tsx     # Reusable card for services + industries
│   │   ├── PortfolioCard.tsx   # Portfolio card with image, badges, result
│   │   ├── PortfolioGrid.tsx   # Client-side filterable grid with aria-live
│   │   ├── TestimonialCard.tsx # Testimonial with avatar, quote, attribution
│   │   ├── BlogPostCard.tsx    # Blog card with featured image
│   │   ├── CaseStudyCard.tsx   # Case study card
│   │   ├── StatsBar.tsx        # Horizontal stats strip
│   │   ├── ClientLogoBar.tsx   # Partner/client logo strip
│   │   ├── SpecialtyGrid.tsx   # Specialty cards grid
│   │   ├── CareerTimeline.tsx  # About page timeline
│   │   ├── AboutTestimonials.tsx
│   │   └── ContactForm.tsx     # Client-side form with aria-live + aria-required
│   │
│   ├── layout/                 # Persistent layout elements
│   │   ├── Header.tsx          # Nav with mobile hamburger, aria-label
│   │   ├── Footer.tsx
│   │   ├── MobileNav.tsx       # Slide-out mobile menu (aria-hidden when closed)
│   │   └── Breadcrumbs.tsx     # Breadcrumb navigation
│   │
│   ├── ui/                     # Atomic UI primitives
│   │   ├── Badge.tsx           # Variants: default, gold, dark
│   │   ├── Button.tsx          # Variants: primary, secondary, outline, ghost
│   │   ├── Card.tsx
│   │   ├── Container.tsx       # max-w-7xl centered container
│   │   ├── Logo.tsx
│   │   └── Section.tsx         # Variants: default, alt, dark
│   │
│   ├── mdx/                    # Custom MDX components for blog
│   │   ├── ComparisonTable.tsx
│   │   ├── DefinitionBox.tsx
│   │   ├── ExpertQuote.tsx
│   │   ├── FAQ.tsx
│   │   └── KeyTakeaways.tsx
│   │
│   ├── seo/
│   │   └── JsonLd.tsx          # JSON-LD structured data renderer
│   │
│   └── integrations/
│       └── CalendlyEmbed.tsx   # Calendly scheduling widget
│
├── content/
│   ├── testimonials.ts         # 36 testimonials with IDs '1'–'36'
│   └── blog/                   # MDX blog posts with frontmatter
│       ├── what-is-direct-response-copywriting.mdx   # Tier 0 (original)
│       ├── copywriting-vs-content-writing.mdx         # Tier 0 (original)
│       ├── what-is-a-swipe-file.mdx                   # Tier 0 (original)
│       ├── what-is-a-vsl.mdx                          # Tier 1 — SEO pillar
│       ├── how-to-write-a-sales-page.mdx              # Tier 1 — SEO pillar
│       ├── what-is-a-sales-funnel.mdx                 # Tier 1 — SEO pillar
│       ├── email-copywriting.mdx                      # Tier 1 — SEO pillar
│       ├── landing-page-copywriting.mdx               # Tier 1 — SEO pillar
│       ├── health-supplement-copywriting.mdx           # Tier 2 — Industry niche
│       ├── clickbank-copywriting.mdx                  # Tier 2 — Industry niche
│       ├── financial-copywriting.mdx                  # Tier 2 — Industry niche
│       ├── ai-copywriting.mdx                         # Tier 3 — Thought leadership
│       ├── how-to-hire-a-copywriter.mdx               # Tier 3 — Thought leadership
│       └── 523m-copywriting-campaign.mdx              # Tier 3 — Narrative case study
│
└── lib/
    ├── constants.ts            # Site URL, name, nav links, stats, contact info
    ├── mdx.ts                  # MDX file reader + frontmatter parser
    └── utils.ts                # cn() utility (clsx + tailwind-merge)

public/images/
├── blog/                       # Blog featured images
├── case-studies/               # Case study images
├── headshots/                  # Rob Palmer headshots
├── industries/                 # Industry listing page thumbnails
├── logos/                      # Client/partner logos
├── portfolio/                  # Portfolio card thumbnails (12 images)
├── services/                   # Service listing page thumbnails
└── testimonials/               # Client avatar photos
```

---

## Data Architecture

### Data-Driven Pages

Services, industries, and portfolio use a consistent pattern:

1. **Data file** in `_data/` directory defines an interface + exported array
2. **Listing page** imports the array and renders cards
3. **Detail page** (services/industries) uses `generateStaticParams()` + `getXBySlug()` for static generation

### Key Interfaces

- **Service** (`services.ts`): title, slug, shortDescription, metaTitle, metaDescription, headline, subheadline, heroImage, heroImageAlt, sections[], deliverables[], testimonialIds[], portfolioItems[], faqs[]
- **Industry** (`industries.ts`): Same shape as Service
- **PortfolioItem** (`portfolio.ts`): title, slug, category, niche, description, image, imageAlt, result?, client?
- **Testimonial** (`testimonials.ts`): id, quote, author, title, company, image, featured?

### Testimonial Curation

Service and industry detail pages display curated testimonials by mapping `testimonialIds` (string arrays) to the master testimonials list. IDs are strings '1' through '36'.

### Portfolio

All 12 portfolio items link to the same shared Google Drive folder. There are no individual portfolio detail pages. The listing page has client-side category filter tabs (All | VSL | Sales Page | Email | Hybrid).

---

## SEO & Structured Data

- **Canonical URLs** on all pages via `alternates.canonical` in metadata
- **Blog posts in sitemap** with lastModified dates from frontmatter
- Every service detail page has **Service schema** + **FAQPage schema** (JSON-LD)
- Every industry detail page has **Service schema** + **FAQPage schema** (JSON-LD)
- Root layout has **Person schema** (with `sameAs` links) + **WebSite schema**
- Blog posts have **Article schema** with `datePublished` and `dateModified`
- All pages have **metaTitle** and **metaDescription** for `<head>`
- OpenGraph images are set from hero images on service/industry/blog pages
- `robots.ts` and `sitemap.ts` generate at build time
- 404 page has `robots: { index: false, follow: false }`
- Content is SEO/GEO optimized — service title keywords are woven throughout all content sections and FAQs

---

## Build & Development

### Commands

```bash
npm run dev          # Start dev server (port 3000)
npm run build        # Production build (currently 47 static pages)
npm run start        # Serve production build
npm run lint         # ESLint
```

### Known Gotcha: Stale .next Cache

Tailwind CSS 4 with Next.js 15 can produce stale CSS or 500 errors after significant changes. The fix:

```bash
lsof -ti :3000 | xargs kill -9    # Kill dev server
rm -rf .next                        # Clear build cache
npx next dev -p 3000               # Restart fresh
```

Always clear `.next` after making changes to `globals.css`, adding new Tailwind classes, or modifying the layout.

### Build Output

The build generates **47 static pages**:
- 1 homepage, about, contact, testimonials, portfolio, not-found
- 9 service detail pages + 1 services listing
- 6 industry detail pages + 1 industries listing
- 14 blog posts + 1 blog listing
- 2 case study pages + 1 case studies listing
- robots.txt, sitemap.xml
- 1 API route (contact form)

---

## Conventions

### Adding a New Service

1. Add entry to `src/app/services/_data/services.ts` with all fields
2. Add a thumbnail image to `public/images/services/`
3. Build will automatically generate the detail page via `generateStaticParams()`

### Adding a New Industry

Same pattern as services but in `src/app/industries/_data/industries.ts` and `public/images/industries/`.

### Adding a New Blog Post

1. Create `.mdx` file in `src/content/blog/` with frontmatter (title, description, date, author, image, tags)
2. Add featured image to `public/images/blog/`
3. Use custom MDX components from `src/components/mdx/` as needed

### Adding a New Portfolio Item

1. Add entry to `src/app/portfolio/_data/portfolio.ts`
2. Add thumbnail to `public/images/portfolio/`
3. Assign a category from: 'VSL' | 'Sales Page' | 'Email' | 'Hybrid'

### Component Naming

- **blocks/** — Composed, page-level sections (Hero, CTABanner, FAQAccordion)
- **ui/** — Atomic primitives (Badge, Button, Section, Container)
- **layout/** — Persistent chrome (Header, Footer, Breadcrumbs)
- **mdx/** — Blog-specific custom components
- **seo/** — Structured data and meta components
- **integrations/** — Third-party embeds (Calendly)

### Styling Rules

- Always use the design token colors (`ink-*`, `gold-*`, `paper-*`) — never raw hex or Tailwind defaults
- Headings use `font-heading` (Inter), body text uses `font-body` (Lora)
- External links get `target="_blank" rel="noopener noreferrer"` + external-link icon
- All images use Next.js `<Image>` with `fill` + `object-cover` + explicit `sizes` prop
- Card link text uses `text-gold-600` (not gold-500) for contrast compliance
- Meta/secondary text uses `text-paper-600` (not paper-400) for contrast compliance

---

## Contact & Constants

Site constants are centralized in `src/lib/constants.ts`:
- `SITE_URL`: https://robpalmer.com
- `CONTACT_EMAIL`: rob@robpalmer.com
- `CALENDLY_URL`: https://calendly.com/rob-palmer-call
- `NAV_LINKS`: Services, Case Studies, Testimonials, Blog, About

---

## GitHub Issues Backlog

18 issues tracked at https://github.com/robpalmer99/robpalmer-site/issues:

| # | Title | Label |
|---|-------|-------|
| 1 | Lock body scroll when mobile nav is open | — |
| 2 | Add favicon and app icons | — |
| 3 | Add spam protection to contact form | — |
| 4 | Extract Header scroll/mobile state into smaller client components | — |
| 5 | Create default OpenGraph image | — |
| 6 | Add JSON-LD to case study pages | — |
| 7 | Improve service/industry content structure for GEO | — |
| 8 | Add definition boxes to service pages | — |
| 9 | Add FAQ section to homepage | — |
| 10 | Move sharp from devDependencies to dependencies | — |
| 11 | Add explicit Cache-Control headers for static assets | — |
| 12 | Add rate limiting to contact form API | — |
| 13 | Improve server-side input validation on contact API | — |
| 14 | Add semantic list markup to card grids | accessibility |
| 15 | Add aria-label to StatsBar and ClientLogoBar sections | accessibility |
| 16 | Add role='img' to Logo SVG component | accessibility |
| 17 | Add aria-hidden to remaining decorative SVGs | accessibility |
| 18 | Refine smooth scroll to anchor-only navigation | accessibility |

---

## Blog Content Strategy

### Current Content (14 posts)

Posts are organized in tiers that build topical authority clusters linking to service/industry pages:

| Tier | Purpose | Posts |
|------|---------|-------|
| Tier 0 | Original launch posts | what-is-direct-response-copywriting, copywriting-vs-content-writing, what-is-a-swipe-file |
| Tier 1 | SEO pillar pages | what-is-a-vsl, how-to-write-a-sales-page, what-is-a-sales-funnel, email-copywriting, landing-page-copywriting |
| Tier 2 | Industry niche authority | health-supplement-copywriting, clickbank-copywriting, financial-copywriting |
| Tier 3 | Thought leadership | ai-copywriting, how-to-hire-a-copywriter, 523m-copywriting-campaign |

### Blog Post Format

All MDX posts use consistent frontmatter and custom components:
- **Frontmatter:** title, description, date, author, image, imageAlt, tags, readingTime
- **10 FAQs** per post (FAQPage JSON-LD generated automatically)
- **Custom MDX components:** KeyTakeaways, DefinitionBox, ComparisonTable, ExpertQuote, FAQSection
- **Internal cross-linking:** Each post links to 5-10 related posts + relevant service/industry pages + /contact

### SEO Research Data

Competitive SEO analysis is stored at `/Users/robpalmer/Desktop/RobPalmer.com SEO Report/`:
- 24 competitor folders with Semrush data (Domain Overview PDFs, Organic Search Positions XLSX, Top Pages, Backlinks)
- `RobPalmer_SEO_Keyword_Strategy.xlsx` — Master keyword strategy spreadsheet (3,659 keywords, 7 sheets)
- Key finding: robpalmer.com has Authority 5/100 with near-zero organic visibility; competitive bar is low

### Phase 2 Content (Planned — Keyword-Driven)

9 new posts to fill keyword gaps identified in SEO analysis:

| Post | Primary KW Volume | Priority |
|------|-------------------|----------|
| Cold Email Copywriting | 1,600 | HIGH |
| Website Copywriting | 1,600 | HIGH |
| UX Copywriting | 480 | MEDIUM |
| Conversion Copywriting | 390 | HIGH |
| Facebook Ad Copywriting | 210 | HIGH |
| Copywriting Bullet Points | 170 | QUICK WIN |
| Famous Copywriters | 170 | HIGH |
| Headline Formulas | 110 | HIGH |
| Direct Mail Copywriting | 110 | QUICK WIN |

---

## Pending / Future Work

- Wire contact form API route to actual email service (currently logs to console)
- OG image generation (issue #5)
- Favicon and app icons (issue #2)
- Cross-browser testing
- Google Search Console setup
- Vercel deployment with custom domain
- Write Phase 2 blog content (9 keyword-driven posts — see Blog Content Strategy)
- Build out additional topical clusters around highest-volume keyword opportunities
