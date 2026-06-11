# Phase 2 — Signals & Plumbing — Design Spec

**Date:** 2026-06-11
**Status:** Pending Rob's review
**Parent:** docs/reviews/2026-06-11-site-review.md — findings F6, F7, F8, F10,
F11, F12 (tools remainder), F13, F14, F15, F18, F19, F34
**Precedent:** Phase 1 shipped + deployed 2026-06-11 (/call canonical).

## Objective

Fix every actively-wrong external signal (entity links, shadowed post,
duplicate www host), repair the internal-link plumbing between the blog and
money pages, ship the GEO files AI assistants look for, and trim analytics/
monitoring weight from the render-critical path. No copy rewrites, no
performance rework (Phase 3), no content program (Phase 4).

## Locked decisions

| Decision | Choice |
|---|---|
| Person `sameAs` | `https://www.linkedin.com/in/robpalmer3/` + `https://github.com/robpalmer99` + `https://x.com/RobPalmer99`. Remove the Justin Hall Wikipedia link AND the wrong `linkedin.com/in/robpalmer/` (different person's slug — confirmed by Rob 2026-06-11). |
| Schema phone | Remove `telephone` from Person schema and Organization `contactPoint` (consistent with Rob's "no public phone" decision in Phase 1). **Flagged for Rob at spec review.** |
| www→apex | Attempt programmatically via Vercel REST API using the CLI's auth token; if that fails, Rob flips it in the dashboard (Domains → www.robpalmer.com → Redirect to robpalmer.com, 308). |
| Date honesty | `updated` frontmatter backfill uses real git-history dates only — never today's date for content that wasn't substantively edited today. |

## Changes

### 1. Entity & schema (F6, F14) — src/app/layout.tsx

- Person `sameAs` → the three confirmed profiles above (the wrong LinkedIn
  URL exists ONLY at layout.tsx:91 — verified; no other occurrence sitewide).
- Person `description` upgraded to carry the core credential: direct-response
  copywriter, 40+ years, $523M+ tracked results, named clients (Apple, IBM,
  Microsoft, Belron/Safelite), AI-assisted workflow. Keep the existing
  "Pioneer of blogging (1993)" claim.
- Add `award` array (e.g. "$523M+ tracked revenue — Belron/Safelite campaign,
  9 years as control") and `worksFor` referencing the Organization.
- Remove `telephone` from Person and from Organization `contactPoint` (keep
  email `rob@robpalmer.com` — matches Phase 1's unification).

### 2. Unshadow the blocked post (F7) — next.config.ts

Delete the redirect block `/blog/ai-sales-page-generator → /blog` (~line 141).
The published 3,000-word post then resolves naturally; sitemap entry becomes
valid.

### 3. www → apex consolidation (F8) — Vercel domain config

PATCH the project domain `www.robpalmer.com` to `redirect: "robpalmer.com"`,
`redirectStatusCode: 308` via the Vercel API (token from the authenticated
CLI). Verify with `curl -sI https://www.robpalmer.com/` → 308 + location
apex. Dashboard fallback if API auth fails. (No code change; effective
immediately, not gated on the next deploy.)

### 4. Internal-link plumbing (F10, F11) — content-links.ts + blog MDX + next.config.ts

- **content-links.ts:** add the 3 missing services to `serviceTitles`
  (`ai-marketing-consultant`, `facebook-ads-copywriter`,
  `conversion-rate-optimization`); add category mappings for `'AI Copywriting'`
  (→ ai-copywriting-consultant + sales-funnel-copywriter) and `'Tools & AI'`;
  repoint `'facebook ads'`-family tags from `ad-copywriter` to
  `facebook-ads-copywriter`; add CRO- and AI-marketing-intent tag mappings.
- **Broken-link sweep (53 instances, 24 posts, 17 distinct bad targets):**
  script builds the valid-route set (service/vertical/blog slugs + static
  pages) from source, finds every internal link that doesn't resolve, applies
  a reviewed mapping table (e.g. `/services/email-copywriting` →
  `/services/email-copywriter`, old vertical slugs → current ones,
  `/blog/chatgpt-copywriting` → `/blog/chatgpt-for-copywriting`), and reports
  anything unmappable (e.g. `/blog/copywriting-influencers` — post never
  existed; remove or relink that one manually). Exact table is derived and
  verified against live routes at plan time.
- **Safety redirects:** add 308s in next.config.ts for the two wrong slugs
  external sites may have copied: `/services/email-copywriting` and
  `/services/email-sequence-copywriter` → `/services/email-copywriter`.
- **Bridge paragraphs:** one short first-person paragraph in each of the 6
  Claude Code skill posts bridging to `/services/ai-copywriting-consultant`
  and `/call` ("want this wired into your funnel by the person who built the
  skills" register — final copy at implementation, copychief-checked).
- **Regression guard:** `scripts/check-internal-links.mjs` validating all MDX
  internal links against the route set; wired into the build (`prebuild`) so
  a broken slug fails fast. Must run <2s.

### 5. GEO files (F13) — public/llms.txt

Ship `/llms.txt`: one-paragraph entity definition (Rob Palmer, 40+ years,
$523M+, actively taking clients, engagements start at $10K), then the key
pages — /about, /call (canonical booking), /services/sales-page-copywriter,
the best/hire/cost high-intent posts — and contact email. Plain text per the
llms.txt convention.

### 6. Freshness signals (F15) — blog frontmatter + Article schema + sitemap

- Add optional `updated` frontmatter field to the blog pipeline: Article
  schema `dateModified` = `updated ?? date`; blog sitemap `lastModified`
  likewise (sitemap currently uses `post.date` — verified sitemap.ts:54).
- Backfill `updated` on the 13 high-intent posts sharpened in the 18.I work
  using their real last-substantive-edit dates from `git log` (the Phase 1
  link sweep does NOT count as substantive).

### 7. Critical-path trims (F18, F19)

- **GA (layout.tsx:134):** replace `@next/third-parties` `<GoogleAnalytics>`
  (which preloads 158 KB ahead of first paint) with a `next/script`
  `strategy="lazyOnload"` gtag bootstrap. Must define `window.gtag` so the
  existing event helpers in src/lib/analytics.ts (CTA clicks, Calendly
  events) keep firing — verified in dev by watching `/g/collect` beacons.
- **Sentry (src/instrumentation-client.ts):** `tracesSampleRate` 1.0 → 0.1;
  move Session Replay out of the static bundle via
  `Sentry.lazyLoadIntegration("replayIntegration")` + `addIntegration` after
  init; keep the existing replay sample rates, `ignoreErrors`, and the
  hydration-noise `beforeSend` filter untouched.

### 8. Tools surfacing (F12 remainder) — sitemap + new /tools index + footer

- Add both tool URLs to sitemap.ts.
- Create a minimal `/tools` index page (two cards: Headline Analyzer,
  Copywriting Rates Calculator — existing Card patterns, keyword-leading
  metaTitle) so the parent path stops 404ing.
- Add a "Free Tools" link to the Footer navigation column.

### 9. OG metadata (F34) — page metadata exports

`metadataBase` already exists (layout.tsx:25), so this is additive only:
- Page-specific `openGraph` (title/description/url) for the three pages
  currently inheriting homepage defaults: /case-studies, /call, /contact.
- Add `url` to the openGraph objects on the templated pages (services,
  verticals, blog) so og:url is emitted everywhere.

## Out of scope (do not drift)

FadeIn/Calendly performance rework (Phase 3 — F25/F26); content refresh and
cannibalization (Phase 4 — F27–F30, F33); case-study Article schema shape
(F35); template dedup + dead MDX pipeline + code hygiene batch (Phase 5);
off-page entity building (F39); AI-training crawler policy (F40 — robots.txt
stays permissive until Rob decides).

## Verification

1. `npm run build` (no dev server) + the new link checker passing with zero
   broken internal links.
2. Schema: extract and JSON-parse all JSON-LD from built output; confirm
   sameAs trio, no Wikipedia, no telephone, no `linkedin.com/in/robpalmer/`
   anywhere in src.
3. GA events: dev-server check that `/g/collect` beacons fire on page view +
   CTA click with the lazyOnload swap.
4. Post-deploy curls: www → 308 apex; /llms.txt → 200; /blog/ai-sales-page-
   generator → 200; /tools → 200; og:url present on /call.
5. Browser checkpoint with Rob: /tools index page (the only new UI).

## Risks

- GA lazyOnload delays first pageview beacon until after load — acceptable
  trade for conversion-page speed; bounce-before-load visits go uncounted
  (they largely already do).
- Lazy Replay misses the first seconds of a session — acceptable; error-
  triggered replays still capture via buffer once loaded.
- The www 308 takes effect immediately at the edge once set (independent of
  deploys) — verify nothing links to www internally (audit found none).
- Removing schema telephone: if the (415) number is a real, answerable line
  Rob WANTS public for ad-platform trust, keep it — his call at spec review.
