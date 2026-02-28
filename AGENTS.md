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
│   ├── verticals/
│   │   ├── page.tsx            # Verticals listing (6 verticals with images)
│   │   ├── [slug]/page.tsx     # Individual vertical detail pages (with FAQPage JSON-LD)
│   │   └── _data/verticals.ts  # Vertical data (interface + 6 items)
│   │
│   ├── portfolio/
│   │   ├── page.tsx            # Portfolio listing with client-side category filters
│   │   └── _data/portfolio.ts  # Portfolio data (interface + 12 items)
│   │
│   ├── blog/
│   │   ├── page.tsx            # Blog listing page 1 (paginated, search/filter)
│   │   ├── [slug]/page.tsx     # MDX blog post renderer (with related posts)
│   │   ├── _components/
│   │   │   └── BlogListingLayout.tsx  # Shared layout for blog listing pages
│   │   └── page/
│   │       └── [page]/page.tsx # Paginated blog pages 2+ (SSG)
│   │
│   ├── case-studies/
│   │   ├── page.tsx            # Case studies listing (with results summary banner)
│   │   ├── _data/case-studies.ts  # Case study data layer
│   │   ├── belron-safelite-523m-campaign/page.tsx  # Enriched with hero image, metrics, testimonial
│   │   └── apple-direct-mail-campaign/page.tsx     # Enriched with hero image, metrics, callout
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
│   │   ├── ServiceCard.tsx     # Reusable card for services + verticals
│   │   ├── PortfolioCard.tsx   # Portfolio card with image, badges, result
│   │   ├── PortfolioGrid.tsx   # Client-side filterable grid with aria-live
│   │   ├── TestimonialCard.tsx # Testimonial with avatar, quote, attribution
│   │   ├── BlogPostCard.tsx    # Blog card with featured image
│   │   ├── BlogGrid.tsx        # Client-side blog grid with search, category filter, pagination
│   │   ├── CaseStudyCard.tsx   # Case study card (with hero image + gradient overlay)
│   │   ├── StatsBar.tsx        # Horizontal stats strip
│   │   ├── ClientLogoBar.tsx   # Partner/client logo strip
│   │   ├── SpecialtyGrid.tsx   # Specialty cards grid
│   │   ├── CareerTimeline.tsx  # About page timeline
│   │   ├── AboutTestimonials.tsx
│   │   └── ContactForm.tsx     # Client-side form with aria-live + aria-required
│   │
│   ├── layout/                 # Persistent layout elements
│   │   ├── Header.tsx          # Nav with scroll-aware styling via useScrolled hook
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx      # Self-contained mobile menu (button + body lock + MobileNav)
│   │   ├── MobileNav.tsx       # Slide-out mobile nav panel (aria-hidden when closed)
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
│       ├── 523m-copywriting-campaign.mdx              # Tier 3 — Narrative case study
│       ├── cold-email-copywriting.mdx                 # Phase 2 — Keyword-driven (1,600 vol)
│       ├── website-copywriting.mdx                    # Phase 2 — Keyword-driven (1,600 vol)
│       ├── conversion-copywriting.mdx                 # Phase 2 — Keyword-driven (390 vol)
│       ├── facebook-ad-copywriting.mdx                # Phase 2 — Keyword-driven (210 vol)
│       ├── headline-formulas.mdx                      # Phase 2 — Keyword-driven (110 vol)
│       ├── famous-copywriters.mdx                     # Phase 2 — Keyword-driven (170 vol)
│       ├── ux-copywriting.mdx                         # Phase 2 — Keyword-driven (480 vol)
│       ├── copywriting-bullet-points.mdx              # Phase 2 — Keyword-driven (170 vol)
│       ├── direct-mail-copywriting.mdx                # Phase 2 — Keyword-driven (110 vol)
│       ├── small-business-copywriting.mdx             # Phase 3 T2 — Keyword-driven (600+ vol)
│       ├── saas-copywriting.mdx                       # Phase 3 T2 — Keyword-driven (510+ vol)
│       ├── how-to-write-ad-copy.mdx                   # Phase 3 T2 — Keyword-driven (390+ vol)
│       ├── best-copywriting-books.mdx                 # Phase 3 T2 — Keyword-driven (390+ vol)
│       ├── sales-copywriter.mdx                       # Phase 3 T2 — Keyword-driven (350+ vol)
│       ├── direct-response-vs-brand-marketing.mdx     # Phase 3 T2 — Keyword-driven (300+ vol)
│       ├── vsl-copywriting.mdx                        # Phase 3 T2 — Keyword-driven (170+ vol)
│       ├── sales-letter-examples.mdx                  # Phase 3 T3 — Long-tail
│       ├── copywriting-rates.mdx                      # Phase 3 T3 — Long-tail
│       ├── copywriting-portfolio-examples.mdx         # Phase 3 T3 — Long-tail
│       ├── copywriting-niches.mdx                     # Phase 3 T3 — Long-tail
│       ├── long-form-sales-copy.mdx                   # Phase 3 T3 — Long-tail
│       ├── ecommerce-copywriting.mdx                  # Phase 3 T3 — Long-tail
│       ├── b2b-copywriting.mdx                        # Phase 3 T3 — Long-tail
│       ├── storytelling-in-copywriting.mdx            # Phase 3 T3 — Long-tail
│       ├── sales-page-examples.mdx                    # Phase 3 T3 — Long-tail
│       ├── aida-copywriting.mdx                       # Phase 3 T3 — Long-tail
│       ├── how-to-write-email-subject-lines.mdx       # Phase 3 T3 — Long-tail
│       ├── state-of-direct-response-copywriting-2026.mdx  # Phase 4 T1 — Trend piece
│       ├── state-of-ai-copywriting-2026.mdx               # Phase 4 T1 — Trend piece
│       ├── freelance-copywriter-vs-marketing-agency.mdx   # Phase 4 T1 — Comparison
│       ├── in-house-copywriter-vs-freelance.mdx           # Phase 4 T1 — Comparison
│       ├── vsl-cold-traffic-conversion-case-study.mdx     # Phase 4 T1 — Case study
│       ├── fortune-500-copywriting-lessons.mdx            # Phase 4 T1 — Career insights
│       ├── is-copywriting-dead.mdx                        # Phase 4 T1 — FAQ cluster
│       ├── how-much-does-a-direct-response-copywriter-cost.mdx  # Phase 4 T1 — Pricing guide
│       ├── lessons-from-gary-halbert.mdx                  # Phase 4 T1 — Legends
│       ├── eugene-schwartz-breakthrough-advertising-lessons.mdx  # Phase 4 T1 — Legends
│       ├── state-of-vsl-marketing-2026.mdx                    # Phase 4 T2 — Trend piece
│       ├── copywriter-vs-content-writer-for-sales.mdx         # Phase 4 T2 — Comparison
│       ├── vsl-vs-sales-page.mdx                              # Phase 4 T2 — Comparison
│       ├── long-form-copy-vs-short-form-copy.mdx              # Phase 4 T2 — Comparison
│       ├── product-launch-email-sequence-case-study.mdx       # Phase 4 T2 — Case study
│       ├── upsell-sequence-doubled-aov-case-study.mdx         # Phase 4 T2 — Case study
│       ├── generative-engine-optimization-for-copywriters.mdx # Phase 4 T2 — AI/GEO
│       ├── geo-copywriting-guide.mdx                          # Phase 4 T2 — AI/GEO
│       ├── david-ogilvy-ai-copywriting.mdx                    # Phase 4 T2 — Legends
│       ├── 30-years-of-copywriting-lessons.mdx                # Phase 4 T2 — Career
│       ├── state-of-email-marketing-2026.mdx                  # Phase 4 T3 — Trend piece
│       ├── sales-funnel-vs-single-sales-page.mdx              # Phase 4 T3 — Comparison
│       ├── direct-mail-vs-digital-marketing.mdx               # Phase 4 T3 — Comparison
│       ├── clickbank-funnel-roas-case-study.mdx               # Phase 4 T3 — Case study
│       ├── what-does-a-copywriter-do.mdx                      # Phase 4 T3 — FAQ cluster
│       ├── how-long-should-a-sales-page-be.mdx                # Phase 4 T3 — FAQ cluster
│       ├── how-to-start-a-copywriting-career.mdx              # Phase 4 T3 — Career
│       ├── forgotten-copywriters-better-than-famous.mdx       # Phase 4 T3 — Legends
│       ├── what-is-conversion-rate-optimization.mdx          # CRO Cluster — Pillar
│       ├── conversion-rate-optimization-checklist.mdx        # CRO Cluster T1 — Checklist
│       ├── b2b-conversion-rate-optimization.mdx              # CRO Cluster T1 — B2B
│       ├── ecommerce-conversion-rate-optimization.mdx        # CRO Cluster T1 — Ecommerce
│       ├── conversion-rate-optimization-audit.mdx            # CRO Cluster T2 — Audit
│       ├── conversion-rate-optimization-strategies.mdx       # CRO Cluster T2 — Strategies
│       ├── conversion-rate-optimization-case-studies.mdx     # CRO Cluster T2 — Case Studies
│       ├── personalization-conversion-rate-optimization.mdx  # CRO Cluster T2 — Personalization
│       ├── landing-page-conversion-rate-optimization.mdx     # CRO Cluster T3 — Landing Pages
│       └── benefits-of-conversion-rate-optimization.mdx      # CRO Cluster T3 — Benefits
│
├── hooks/
│   ├── useDebounce.ts          # Generic debounce hook (used by blog search)
│   └── useScrolled.ts          # Scroll detection hook (used by Header)
│
└── lib/
    ├── constants.ts            # Site URL, name, nav links, stats, contact info
    ├── mdx.ts                  # MDX file reader, frontmatter parser, pagination, related posts
    └── utils.ts                # cn() utility (clsx + tailwind-merge)

public/images/
├── blog/                       # Blog featured images
├── case-studies/               # Case study images
├── headshots/                  # Rob Palmer headshots
├── industries/                 # Vertical listing page thumbnails (directory kept as "industries")
├── logos/                      # Client/partner logos
├── portfolio/                  # Portfolio card thumbnails (12 images)
├── services/                   # Service listing page thumbnails
└── testimonials/               # Client avatar photos
```

---

## Data Architecture

### Data-Driven Pages

Services, verticals, and portfolio use a consistent pattern:

1. **Data file** in `_data/` directory defines an interface + exported array
2. **Listing page** imports the array and renders cards
3. **Detail page** (services/verticals) uses `generateStaticParams()` + `getXBySlug()` for static generation

### Key Interfaces

- **Service** (`services.ts`): title, slug, shortDescription, metaTitle, metaDescription, headline, subheadline, heroImage, heroImageAlt, sections[], deliverables[], testimonialIds[], portfolioItems[], faqs[]
- **Vertical** (`verticals.ts`): Same shape as Service
- **PortfolioItem** (`portfolio.ts`): title, slug, category, niche, description, image, imageAlt, result?, client?
- **CaseStudy** (`case-studies.ts`): slug, title, client, result, description, heroImage, heroAlt, metrics[], testimonial?
- **BlogPostMeta** (`mdx.ts`): title, description, date, category, tags[], slug, readingTime, published, heroImage?, heroAlt?, faqs?
- **PaginatedBlogPosts** (`mdx.ts`): posts[], totalPosts, totalPages, currentPage
- **Testimonial** (`testimonials.ts`): id, quote, author, title, company, image, featured?

### Testimonial Curation

Service and vertical detail pages display curated testimonials by mapping `testimonialIds` (string arrays) to the master testimonials list. IDs are strings '1' through '36'.

### Portfolio

All 12 portfolio items link to the same shared Google Drive folder. There are no individual portfolio detail pages. The listing page has client-side category filter tabs (All | VSL | Sales Page | Email | Hybrid).

### Case Studies

Case studies use a data layer at `src/app/case-studies/_data/case-studies.ts`:
- Exported `caseStudies` array with `CaseStudy` interface
- Each entry has slug, title, client, result, description, heroImage, heroAlt, metrics[], and optional testimonial
- Listing page renders a results summary banner (4 stats) + data-driven `CaseStudyCard` grid
- Detail pages have hero images, key metrics bars, enriched narrative content, testimonial blockquotes, and related links
- Homepage case study cards also pull from this data layer

### Blog Search & Filter

The blog listing uses `BlogGrid`, a client component (`'use client'`) with:
- **Search input** with debounced filtering (200ms via `useDebounce` hook)
- **Category filter tabs** dynamically derived from posts with counts (follows `PortfolioGrid` pattern)
- **Auto-focus** when arriving via `/blog?search=true` (uses `useSearchParams()` + `useRef`)
- Wrapped in `<Suspense>` boundary (required by Next.js 15 for `useSearchParams`)
- A **search icon** (magnifying glass SVG) in the Header desktop nav and MobileNav links to `/blog?search=true`

### Blog Pagination

Route-based SSG pagination with 12 posts per page:
- `/blog` = page 1 (canonical URL)
- `/blog/page/2`, `/blog/page/3`, etc. = subsequent pages
- Shared layout component `BlogListingLayout` used by both routes to avoid duplication
- `getPaginatedBlogPosts(page)` in `mdx.ts` slices `getAllBlogPosts()` by page
- `/blog/page/1` redirects to `/blog`; out-of-range pages return 404
- Pagination controls (← Previous / Next →) hidden when search/filter is active

### Related Posts

Blog posts display 3 related articles after the author bio section:
- `getRelatedPosts(slug, limit=3)` in `mdx.ts` scores posts by shared category (weight 3) + shared tags
- Sorted by relevance score descending, then by date descending
- Rendered as `BlogPostCard` components in a responsive 3-column grid
- Only shown when related posts exist

---

## SEO & Structured Data

- **Canonical URLs** on all pages via `alternates.canonical` in metadata
- **Blog posts in sitemap** with lastModified dates from frontmatter
- Every service detail page has **Service schema** + **FAQPage schema** (JSON-LD)
- Every vertical detail page has **Service schema** + **FAQPage schema** (JSON-LD)
- Root layout has **Person schema** (with `sameAs` links) + **WebSite schema**
- Blog posts have **Article schema** with `datePublished` and `dateModified`
- All pages have **metaTitle** and **metaDescription** for `<head>`
- OpenGraph images are set from hero images on service/vertical/blog pages
- `robots.ts` and `sitemap.ts` generate at build time
- 404 page has `robots: { index: false, follow: false }`
- Content is SEO/GEO optimized — service title keywords are woven throughout all content sections and FAQs

---

## Build & Development

### Commands

```bash
npm run dev          # Start dev server (port 3000)
npm run build        # Production build (currently ~123 static pages)
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

The build generates **~120 static pages**:
- 1 homepage, about, contact, testimonials, portfolio, not-found
- 9 service detail pages + 1 services listing
- 6 vertical detail pages + 1 verticals listing
- 84 blog posts + 7 blog listing pages (paginated at 12/page)
- 2 case study pages + 1 case studies listing
- robots.txt, sitemap.xml
- 1 API route (contact form)

---

## Conventions

### Adding a New Service

1. Add entry to `src/app/services/_data/services.ts` with all fields
2. Add a thumbnail image to `public/images/services/`
3. Build will automatically generate the detail page via `generateStaticParams()`

### Adding a New Vertical

Same pattern as services but in `src/app/verticals/_data/verticals.ts` and `public/images/industries/`.

### Adding a New Blog Post

1. Create `.mdx` file in `src/content/blog/` with frontmatter (title, description, date, category, tags, published, heroImage, heroAlt, faqs)
2. Add featured image to `public/images/blog/`
3. Use custom MDX components from `src/components/mdx/` as needed
4. Related posts are automatically generated based on shared category and tags
5. Pagination updates automatically — new pages created at build time when posts exceed 12 per page

### Adding a New Case Study

1. Add entry to `src/app/case-studies/_data/case-studies.ts` with all fields
2. Add hero image to `public/images/case-studies/`
3. Create a detail page at `src/app/case-studies/[slug]/page.tsx`
4. Homepage automatically picks up the new entry from the data layer

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
- `STATS`: $523M+ In Tracked Revenue, 30+ Years of Experience, 36+ Client Testimonials, 100s Of Successful Projects
- `NAV_LINKS`: Services, Case Studies, Testimonials, Blog, About

---

## GitHub Issues Backlog

18 issues tracked at https://github.com/robpalmer99/robpalmer-site/issues:

| # | Title | Label | Status |
|---|-------|-------|--------|
| 1 | Lock body scroll when mobile nav is open | — | ✅ Done (Header.tsx) |
| 2 | Add favicon and app icons | — | ✅ Done (favicon.ico + apple-icon.png) |
| 3 | Add spam protection to contact form | — | ✅ Done (honeypot field) |
| 4 | Extract Header scroll/mobile state into smaller client components | — | ✅ Done (useScrolled hook + MobileMenu component) |
| 5 | Create default OpenGraph image | — | ✅ Done (og-default.jpg) |
| 6 | Add JSON-LD to case study pages | — | ✅ Done (both case studies) |
| 7 | Improve service/industry content structure for GEO | — | ✅ Done (bullet lists in sections, scannable content) |
| 8 | Add definition boxes to service pages | — | ✅ Done (DefinitionBox on 9 services + 6 verticals) |
| 9 | Add FAQ section to homepage | — | ✅ Done (FAQAccordion + FAQPage JSON-LD) |
| 10 | Move sharp from devDependencies to dependencies | — | ✅ Done (in dependencies) |
| 11 | Add explicit Cache-Control headers for static assets | — | ✅ Done (next.config.ts) |
| 12 | Add rate limiting to contact form API | — | ✅ Done (in-memory per-IP, 5/min) |
| 13 | Improve server-side input validation on contact API | — | ✅ Done (type checks + length limits) |
| 14 | Add semantic list markup to card grids | accessibility | ✅ Done (12 grids, ul/li + role="list") |
| 15 | Add aria-label to StatsBar and ClientLogoBar sections | accessibility | ✅ Done |
| 16 | Add role='img' to Logo SVG component | accessibility | ✅ Done |
| 17 | Add aria-hidden to remaining decorative SVGs | accessibility | ✅ Done (FAQ.tsx, KeyTakeaways.tsx) |
| 18 | Refine smooth scroll to anchor-only navigation | accessibility | ✅ Done (html:has(:target) scoping) |

---

## Blog Content Strategy

### Current Content (105 posts)

Posts are organized in tiers that build topical authority clusters linking to service/vertical pages:

| Tier | Purpose | Posts |
|------|---------|-------|
| Tier 0 | Original launch posts | what-is-direct-response-copywriting, copywriting-vs-content-writing, what-is-a-swipe-file |
| Tier 1 | SEO pillar pages | what-is-a-vsl, how-to-write-a-sales-page, what-is-a-sales-funnel, email-copywriting, landing-page-copywriting |
| Tier 2 | Industry niche authority | health-supplement-copywriting, clickbank-copywriting, financial-copywriting |
| Tier 3 | Thought leadership | ai-copywriting, how-to-hire-a-copywriter, 523m-copywriting-campaign |
| Phase 2 | Keyword-driven (SEO gaps) | cold-email-copywriting, website-copywriting, conversion-copywriting, facebook-ad-copywriting, headline-formulas, famous-copywriters, ux-copywriting, copywriting-bullet-points, direct-mail-copywriting |
| Phase 3 Tier 1 | High-impact keyword gaps | copywriting-services, how-to-write-a-sales-letter, how-to-write-a-headline, copywriting-psychology, copywriting-formulas |
| Phase 3 Tier 2 | Strategic keyword gaps | small-business-copywriting, saas-copywriting, how-to-write-ad-copy, best-copywriting-books, sales-copywriter, direct-response-vs-brand-marketing, vsl-copywriting |
| Phase 3 Tier 3 | Long-tail keywords | sales-letter-examples, copywriting-rates, copywriting-portfolio-examples, copywriting-niches, long-form-sales-copy, ecommerce-copywriting, b2b-copywriting, storytelling-in-copywriting, sales-page-examples, aida-copywriting, how-to-write-email-subject-lines |
| Phase 4 Tier 1 | Trend/comparison/legend posts | state-of-direct-response-copywriting-2026, state-of-ai-copywriting-2026, freelance-copywriter-vs-marketing-agency, in-house-copywriter-vs-freelance, vsl-cold-traffic-conversion-case-study, fortune-500-copywriting-lessons, is-copywriting-dead, how-much-does-a-direct-response-copywriter-cost, lessons-from-gary-halbert, eugene-schwartz-breakthrough-advertising-lessons |
| Phase 4 Tier 2 | Mid-priority content expansion | state-of-vsl-marketing-2026, copywriter-vs-content-writer-for-sales, vsl-vs-sales-page, long-form-copy-vs-short-form-copy, product-launch-email-sequence-case-study, upsell-sequence-doubled-aov-case-study, generative-engine-optimization-for-copywriters, geo-copywriting-guide, david-ogilvy-ai-copywriting, 30-years-of-copywriting-lessons |
| Phase 4 Tier 3 | Completing Phase 4 plan | state-of-email-marketing-2026, sales-funnel-vs-single-sales-page, direct-mail-vs-digital-marketing, clickbank-funnel-roas-case-study, what-does-a-copywriter-do, how-long-should-a-sales-page-be, how-to-start-a-copywriting-career, forgotten-copywriters-better-than-famous |
| Phase 5 | Category fill (min 5 per category) | history-of-direct-response-advertising, history-of-sales-letters, golden-age-of-advertising, history-of-direct-mail-marketing, copywriting-tools, ai-copywriting-tools, copywriting-templates, headline-analyzer-tools, copywriter-salary, copywriting-skills, freelance-copywriting-guide, chatgpt-for-copywriting, ai-vs-human-copywriting, copywriting-examples, claude-hopkins-scientific-advertising-lessons, state-of-landing-pages-2026 |
| Phase 6 | AI hiring funnel cluster | ai-copywriting-prompts, can-ai-write-sales-copy, ai-sales-page-generator, ai-email-sequence-generator, ai-ad-copy-examples |

### Blog Post Format

All MDX posts use consistent frontmatter and custom components:
- **Frontmatter:** title, description, date, author, image, imageAlt, tags, readingTime
- **10 FAQs** per post (FAQPage JSON-LD generated automatically)
- **Custom MDX components:** KeyTakeaways, DefinitionBox, ComparisonTable, ExpertQuote, FAQSection
- **Internal cross-linking:** Each post links to 5-10 related posts + relevant service/vertical pages + /contact

### SEO Research Data

Competitive SEO analysis is stored at `/Users/robpalmer/Desktop/RobPalmer.com SEO Report/`:
- 24 competitor folders with Semrush data (Domain Overview PDFs, Organic Search Positions XLSX, Top Pages, Backlinks)
- `RobPalmer_SEO_Keyword_Strategy.xlsx` — Master keyword strategy spreadsheet (3,659 keywords, 7 sheets)
- Key finding: robpalmer.com has Authority 5/100 with near-zero organic visibility; competitive bar is low

### Phase 2 Content (COMPLETED — Keyword-Driven)

9 posts written to fill keyword gaps identified in SEO analysis:

| Post | Primary KW Volume | Priority | Status |
|------|-------------------|----------|--------|
| Cold Email Copywriting | 1,600 | HIGH | ✅ Done |
| Website Copywriting | 1,600 | HIGH | ✅ Done |
| UX Copywriting | 480 | MEDIUM | ✅ Done |
| Conversion Copywriting | 390 | HIGH | ✅ Done |
| Facebook Ad Copywriting | 210 | HIGH | ✅ Done |
| Copywriting Bullet Points | 170 | QUICK WIN | ✅ Done |
| Famous Copywriters | 170 | HIGH | ✅ Done |
| Headline Formulas | 110 | HIGH | ✅ Done |
| Direct Mail Copywriting | 110 | QUICK WIN | ✅ Done |

### Phase 3 Tier 1 Content (COMPLETED — High-Impact Keywords)

5 posts targeting the highest-value uncovered keyword clusters:

| Post | Combined KW Volume | KD | Status |
|------|-------------------|-----|--------|
| Copywriting Services | 3,600+ | 6-40 | ✅ Done |
| How to Write a Sales Letter | 1,200+ | 18-31 | ✅ Done |
| How to Write a Headline | 640+ | 17-27 | ✅ Done |
| Copywriting Psychology | 600+ | 7-24 | ✅ Done |
| Copywriting Formulas | 300+ | 19-28 | ✅ Done |

### Phase 3 Tier 2 Content (COMPLETED — Strategic Keywords)

7 posts targeting strategic keyword clusters:

| Post | Combined KW Volume | KD | Status |
|------|-------------------|-----|--------|
| Small Business Copywriting | 600+ | 5-14 | ✅ Done |
| SaaS Copywriting | 510+ | 7-14 | ✅ Done |
| How to Write Ad Copy | 390+ | 35 | ✅ Done |
| Best Copywriting Books | 390+ | 10 | ✅ Done |
| Sales Copywriter | 350+ | 1-12 | ✅ Done |
| Direct Response vs Brand Marketing | 300+ | 8-17 | ✅ Done |
| VSL Copywriting | 170+ | 10-12 | ✅ Done |

### Phase 3 Tier 3 Content (COMPLETED — Long-Tail Keywords)

11 posts targeting long-tail keyword opportunities:

| Post | Slug | Status |
|------|------|--------|
| Sales Letter Examples & Templates | sales-letter-examples | ✅ Done |
| Copywriting Rates & Pricing Guide | copywriting-rates | ✅ Done |
| Copywriting Portfolio Examples | copywriting-portfolio-examples | ✅ Done |
| Most Profitable Copywriting Niches | copywriting-niches | ✅ Done |
| Long-Form Sales Copy Guide | long-form-sales-copy | ✅ Done |
| E-Commerce Copywriting Guide | ecommerce-copywriting | ✅ Done |
| B2B Copywriting Guide | b2b-copywriting | ✅ Done |
| Storytelling in Copywriting | storytelling-in-copywriting | ✅ Done |
| Sales Page Examples | sales-page-examples | ✅ Done |
| AIDA Copywriting Formula | aida-copywriting | ✅ Done |
| Email Subject Line Writing Guide | how-to-write-email-subject-lines | ✅ Done |

### Phase 4 Content Plan (COMPLETED — all 28 posts published)

**Category 1: "State of..." Trend Pieces (4 posts)**

| # | Title | Slug | Priority |
|---|-------|------|----------|
| 1 | The 2026 State of Direct Response Copywriting | state-of-direct-response-copywriting-2026 | HIGH |
| 2 | The State of AI Copywriting in 2026 | state-of-ai-copywriting-2026 | HIGH |
| 3 | The State of VSL Marketing in 2026 | state-of-vsl-marketing-2026 | MEDIUM-HIGH |
| 4 | The State of Email Marketing in 2026 | state-of-email-marketing-2026 | MEDIUM |

**Category 2: Comparison / Versus Posts (7 posts)**

| # | Title | Slug | Priority |
|---|-------|------|----------|
| 5 | Freelance Copywriter vs. Marketing Agency | freelance-copywriter-vs-marketing-agency | HIGH |
| 6 | In-House Copywriter vs. Freelance Specialist | in-house-copywriter-vs-freelance | HIGH |
| 7 | Copywriter vs. Content Writer: Why Hiring the Wrong One Costs You Sales | copywriter-vs-content-writer-for-sales | HIGH |
| 8 | VSL vs. Sales Page: Which Converts Better? | vsl-vs-sales-page | MEDIUM-HIGH |
| 9 | Long-Form vs. Short-Form Copy: When Each One Wins | long-form-copy-vs-short-form-copy | MEDIUM-HIGH |
| 10 | Sales Funnel vs. Single Sales Page | sales-funnel-vs-single-sales-page | MEDIUM |
| 11 | Direct Mail vs. Digital Marketing | direct-mail-vs-digital-marketing | MEDIUM |

**Category 3: Client Result Narratives (5 posts)**

| # | Title | Slug | Priority |
|---|-------|------|----------|
| 12 | How I Wrote a VSL That Converted 8% on Cold Traffic | vsl-cold-traffic-conversion-case-study | HIGH |
| 13 | What Writing for Apple, IBM, and Microsoft Taught Me | fortune-500-copywriting-lessons | HIGH |
| 14 | Inside a $2M Product Launch: The Email Sequence | product-launch-email-sequence-case-study | MEDIUM-HIGH |
| 15 | How a Single Upsell Sequence Doubled AOV | upsell-sequence-doubled-aov-case-study | MEDIUM-HIGH |
| 16 | The ClickBank Funnel That Hit 300% ROAS | clickbank-funnel-roas-case-study | MEDIUM |

**Category 4: FAQ Cluster Posts (7 posts)**

| # | Title | Slug | Priority |
|---|-------|------|----------|
| 17 | Is Copywriting Dead in 2026? A $523M Answer | is-copywriting-dead | HIGH |
| 18 | How Much Does a Direct Response Copywriter Cost in 2026? | how-much-does-a-direct-response-copywriter-cost | HIGH |
| 19 | What Is GEO (Generative Engine Optimization)? | generative-engine-optimization-for-copywriters | MEDIUM-HIGH |
| 20 | How to Write Copy That AI Engines Will Cite | geo-copywriting-guide | MEDIUM-HIGH |
| 21 | What Does a Copywriter Actually Do? | what-does-a-copywriter-do | MEDIUM |
| 22 | How Long Should a Sales Page Be? | how-long-should-a-sales-page-be | MEDIUM |
| 23 | How to Start a Copywriting Career in 2026 | how-to-start-a-copywriting-career | MEDIUM |

**Category 5: Guest/Interview Deep Dives (5 posts)**

| # | Title | Slug | Priority |
|---|-------|------|----------|
| 24 | Lessons From Gary Halbert | lessons-from-gary-halbert | HIGH |
| 25 | What Eugene Schwartz's "Breakthrough Advertising" Teaches About Modern Funnels | eugene-schwartz-breakthrough-advertising-lessons | HIGH |
| 26 | What David Ogilvy Would Do With AI | david-ogilvy-ai-copywriting | MEDIUM-HIGH |
| 27 | 5 Forgotten Copywriters Who Were Better Than the Famous Ones | forgotten-copywriters-better-than-famous | MEDIUM |
| 28 | What 30 Years of Copywriting Taught Me That No Book Covers | 30-years-of-copywriting-lessons | MEDIUM |

**Implementation order:** Tier 1 first (posts 1,2,5,6,12,13,17,18,24,25), then Tier 2 (3,7,8,9,14,15,19,20,26,28), then Tier 3 (4,10,11,16,21,22,23,27).

**Tier 1 status: COMPLETED** — All 10 HIGH priority posts written, hero images generated, build verified.
**Tier 2 status: COMPLETED** — All 10 MEDIUM-HIGH priority posts written, hero images generated, build verified.
**Tier 3 status: COMPLETED** — All 8 MEDIUM priority posts written, hero images generated, build verified.

### CRO Content Cluster (COMPLETED — 10 posts)

A topical authority cluster around Conversion Rate Optimization, building on Rob Palmer's direct-response expertise. All 10 posts are interlinked and cross-linked from all 76 existing posts.

| Tier | Post | Slug | Status |
|------|------|------|--------|
| Pillar | What Is Conversion Rate Optimization? | what-is-conversion-rate-optimization | ✅ Done |
| Tier 1 | CRO Checklist | conversion-rate-optimization-checklist | ✅ Done |
| Tier 1 | B2B CRO | b2b-conversion-rate-optimization | ✅ Done |
| Tier 1 | Ecommerce CRO | ecommerce-conversion-rate-optimization | ✅ Done |
| Tier 2 | CRO Audit | conversion-rate-optimization-audit | ✅ Done |
| Tier 2 | CRO Strategies | conversion-rate-optimization-strategies | ✅ Done |
| Tier 2 | CRO Case Studies | conversion-rate-optimization-case-studies | ✅ Done |
| Tier 2 | Personalization & CRO | personalization-conversion-rate-optimization | ✅ Done |
| Tier 3 | Landing Page CRO | landing-page-conversion-rate-optimization | ✅ Done |
| Tier 3 | Benefits of CRO | benefits-of-conversion-rate-optimization | ✅ Done |

**Cross-linking:** All 84 blog posts contain contextual internal links to relevant CRO cluster posts. CRO cluster posts link to each other, to relevant service/vertical pages, and to /contact.

### Phase 5: Category Fill (COMPLETED — 16 posts)

16 posts written to ensure every blog category has a minimum of 5 posts:

**Copywriting History (4 posts — category now at 5)**

| Post | Slug | Status |
|------|------|--------|
| History of Direct Response Advertising | history-of-direct-response-advertising | ✅ Done |
| The History of Sales Letters | history-of-sales-letters | ✅ Done |
| The Golden Age of Advertising | golden-age-of-advertising | ✅ Done |
| The History of Direct Mail Marketing | history-of-direct-mail-marketing | ✅ Done |

**Copywriting Tools (4 posts — category now at 5)**

| Post | Slug | Status |
|------|------|--------|
| The Best Copywriting Tools in 2026 | copywriting-tools | ✅ Done |
| AI Copywriting Tools: A Direct-Response Copywriter's Honest Assessment | ai-copywriting-tools | ✅ Done |
| Copywriting Templates: 10 Proven Frameworks | copywriting-templates | ✅ Done |
| Headline Analyzer Tools: Do They Actually Work? | headline-analyzer-tools | ✅ Done |

**Career Insights (3 posts — category now at 5)**

| Post | Slug | Status |
|------|------|--------|
| Copywriter Salary in 2026 | copywriter-salary | ✅ Done |
| The 10 Copywriting Skills That Separate Six-Figure Writers | copywriting-skills | ✅ Done |
| Freelance Copywriting: The Complete Guide | freelance-copywriting-guide | ✅ Done |

**AI & Technology (2 posts — category now at 5)**

| Post | Slug | Status |
|------|------|--------|
| How to Use ChatGPT for Copywriting | chatgpt-for-copywriting | ✅ Done |
| AI vs Human Copywriting | ai-vs-human-copywriting | ✅ Done |

**Copywriting Fundamentals (1 post — category now at 5)**

| Post | Slug | Status |
|------|------|--------|
| Copywriting Examples: 15 Techniques You Can Steal | copywriting-examples | ✅ Done |

**Copywriting Legends (1 post — category now at 5)**

| Post | Slug | Status |
|------|------|--------|
| Lessons From Claude Hopkins: Scientific Advertising | claude-hopkins-scientific-advertising-lessons | ✅ Done |

**Industry Trends (1 post — category now at 5)**

| Post | Slug | Status |
|------|------|--------|
| The State of Landing Pages in 2026 | state-of-landing-pages-2026 | ✅ Done |

### Phase 6: AI Hiring Funnel Cluster (COMPLETED — 5 posts)

5 posts targeting high-intent AI copywriting keywords that funnel searchers from DIY to hiring a professional. These keywords capture people exploring AI for copywriting who often conclude they need expert help — making this cluster a client acquisition channel.

**Funnel flow:** Discovery → Evaluation → Realization → Hire

| Funnel Stage | Post | Slug | Primary Keywords | Status |
|-------------|------|------|-----------------|--------|
| Discovery | AI Copywriting Prompts: 20 Frameworks | ai-copywriting-prompts | AI copywriting prompts, ChatGPT prompts for copywriting | ✅ Done |
| Evaluation | Can AI Write Sales Copy? An Honest Answer | can-ai-write-sales-copy | can AI write sales copy, does AI copywriting work | ✅ Done |
| Realization | AI Sales Page Generators: What They Get Right and Wrong | ai-sales-page-generator | AI sales page generator, AI sales copy generator | ✅ Done |
| Realization | AI Email Sequence Generators: Can AI Write Email That Converts? | ai-email-sequence-generator | AI email sequence generator, AI email marketing copy | ✅ Done |
| ROI Math | AI Ad Copy Examples: What AI Ads Look Like | ai-ad-copy-examples | AI ad copy examples, AI Facebook ad copy | ✅ Done |

**AI & Technology category now at 10 posts total** — a strong topical authority cluster.

**Cross-linking:** All 105 blog posts contain contextual internal links to related posts, service/vertical pages, and /contact.

---

## Pending / Future Work

- Cross-browser testing
- Google Search Console setup
