# Full-Site Review — Findings Report

**Date:** 2026-06-11
**Spec:** docs/superpowers/specs/2026-06-11-full-site-review-design.md
**Method:** 7 parallel specialist audits (conversion copy, code health, performance,
technical SEO, GEO/AI search, content quality, UX/visual) against local `main`
and live production (commit `1a7f442`, content-identical to `main`). Every
critical/high finding independently re-verified against source or live site
before inclusion. Ranking lens: **impact on booked $10K+ strategy calls.**

---

## Executive summary

The copy, content, and code are in strong shape — the editorial layer is doing
its job. The leaks are concentrated in two places:

1. **The last mile of the funnel.** Every CTA on the site routes to `/contact`
   while the purpose-built `/call` page is orphaned (zero inbound links). The
   Calendly embed then shows a generic "pick a meeting type" page behind a
   cookie-consent banner, with no qualification language ($10K floor, capacity
   trio) anywhere near the calendar. The pages that win the argument hand off
   to a booking experience that undoes it.
2. **Invisible-until-hydration rendering.** Every page's hero is server-rendered
   at `opacity:0` (FadeIn), so mobile LCP is ~5s sitewide and **12.0s on
   /call** (where 2.9 MB of Calendly/Stripe assets compete with hydration).
   Visitors on mobile stare at a blank dark hero for 3–5 seconds before the
   $523M headline exists.

Plus one actively harmful signal: the sitewide Person schema's Wikipedia
`sameAs` points at **Justin Hall's** article — wrong-entity poisoning for every
AI system trying to resolve who Rob Palmer is.

**Counts:** 4 critical, 11 high, ~17 medium, ~10 low after cross-track dedup.
A large majority are S-effort. One decision gates several fixes (see below).

---

## ⚠️ Decision required before fixing: canonical booking page

`/call` (agenda copy, zero distractions, built to convert) vs `/contact`
(form + Calendly + verification block — where all traffic actually goes).
**Recommendation:** make `/call` canonical for all "Book a Call" CTAs; demote
`/contact` to general inquiries. Gates: F1, F4, F11, CTA-label cleanup.

---

## Tier 1 — Quick wins (S effort, do first)

### The booking endpoint (highest conversion leverage on the site)

- **F1 · HIGH · /call is orphaned — every CTA routes to /contact** [COPY-1]
  Zero `href="/call"` in any component (verified). Header, mobile nav, footer,
  hero, CTABanner default, service template → all `/contact`; 139 blog posts
  link `/contact`, 1 links `/call`. `/contact` buries the calendar under a
  form ("Not ready for a call? No problem…" — an invitation to defer) and a
  verification block. **Fix:** repoint all booking CTAs at the canonical page
  (per decision above).
- **F2 · HIGH · Calendly shows generic "pick a meeting type" page** [UX-1]
  `CALENDLY_URL = calendly.com/rob-palmer-call` (constants.ts:8) renders
  Calendly's profile page: "30 Minute Meeting" vs "60-Minute Meeting", default
  purple branding — not the promised "Free Strategy Call". **Fix:** point at
  the specific event type, rename it "Free Strategy Call (30 min)" in Calendly.
- **F3 · HIGH · Cookie-consent banner covers the booking widget** [UX-2]
  GDPR dialog overlays half the widget on desktop, nearly all of it on mobile
  (screenshots in /tmp/site-review-shots/). **Fix:** one line —
  `pageSettings={{ hideGdprBanner: true }}` on InlineWidget in
  CalendlyEmbed.tsx (verify Calendly account cookie setting permits it).
- **F4 · HIGH · No qualification at the point of booking** [COPY-2]
  The Capacity/Timeline/Fit trio + $10K floor exists on home and in service
  FAQs but on neither booking page (verified: zero hits in call/contact
  page.tsx). Visitors arriving direct from blog/referral never see it; the
  calendar has no gate. **Fix:** add the three-line trio beside the embed.
- **F5 · MEDIUM · Business Verification block: malformed phone + conflicting email** [COPY-3]
  contact/page.tsx:122 `+612958415182` (invalid format — one digit over for
  AU), :126 `rob@gofreelance.com` vs `CONTACT_EMAIL = rob@robpalmer.com`
  (rendered on /privacy + /terms) vs unused US-format `CONTACT_PHONE`. Person
  schema says rob@robpalmer.com. A broken phone number inside a block titled
  "Business Verification," on the booking page. **Fix:** correct number, pick
  ONE public email, move block off the booking path if it's only for ad-platform
  compliance.

### Actively wrong signals

- **F6 · CRITICAL · Person schema sameAs → Justin Hall's Wikipedia article** [GEO-3]
  layout.tsx:92: `en.wikipedia.org/wiki/Justin_Hall#cite_note-2` in the
  sitewide Person schema (verified live). AI systems resolving the entity
  graph associate Rob with the wrong person — or discount the entity entirely.
  The other sameAs (LinkedIn) returns HTTP 999 to bots. **Fix:** remove the
  Wikipedia link; add `github.com/robpalmer99` + `x.com/RobPalmer99`.
- **F7 · CRITICAL · Redirect shadows a live post** [CONTENT-1 = SEO-2]
  next.config.ts:141 301s `/blog/ai-sales-page-generator` → `/blog`, but the
  3,000-word post exists, is in the sitemap, and is linked from the blog index
  (verified live: 308 → /blog). High-intent AI-era keyword, permanently
  unreachable; GSC logs sitemap-is-redirect errors. **Fix:** delete the
  redirect block.
- **F8 · HIGH · www serves a full duplicate site** [SEO-1]
  `https://www.robpalmer.com/` returns 200 with the whole site (verified);
  only canonical hints point back to apex. Splits link equity. **Fix:** Vercel
  dashboard → Domains → set www to redirect to apex. No code change.
- **F9 · MEDIUM · "30+ Years" on the case-studies hub vs "40+" sitewide** [COPY-6]
  case-studies/page.tsx:40 (verified). Internal inconsistency on the proof
  page. **Fix:** `'30+'` → `'40+'`.

### Internal-link plumbing

- **F10 · HIGH · content-links.ts never routes to the 3 newest service pages** [CODE-1 + CONTENT-3]
  Zero references to `ai-marketing-consultant`, `facebook-ads-copywriter`,
  `conversion-rate-optimization` (verified); tag `'facebook ads'` still maps to
  `ad-copywriter`. The `'AI Copywriting'` *category* (all 6 Claude Code skill
  posts) has no service mapping — and those 6 posts have zero valid in-body
  money links, so the lead-gen giveaway cluster funnels to GitHub instead of
  /services/ai-copywriting-consultant. **Fix:** add the 3 slugs to
  serviceTitles + mappings; add `'AI Copywriting'` category mapping; add one
  bridge paragraph per skill post.
- **F11 · HIGH · 53 broken internal links across 24 posts** [CONTENT-2]
  17 distinct nonexistent targets, mostly wrong slugs: `/services/email-copywriting`
  (14 files, verified; correct: `email-copywriter`), old vertical slugs, etc.
  The triple-brain-marketing pillar post has 2 broken money links. Full list:
  content track's /tmp/content-audit-details.md (regenerate if gone — script
  is trivial). **Fix:** scripted slug replacement; add a build-time
  internal-link checker to prevent regression.
- **F12 · MEDIUM · /call missing from sitemap; /tools/* unlisted, /tools 404s** [SEO-3/4]
  Verified: 0 sitemap hits for /call. **Fix:** add /call + both tool pages to
  sitemap.ts; create a /tools index or redirect; consider footer "Free Tools" link.

### GEO / AI-search quick wins

- **F13 · HIGH · No llms.txt** [GEO-1] — verified 404. **Fix:** ship the
  template from the GEO track (entity paragraph + 6 key pages + contact).
- **F14 · HIGH · Person schema thin where it matters** [GEO-4]
  Description omits $523M, named clients, Copy Chief role; no award/worksFor;
  GitHub absent from sameAs. **Fix:** one-sentence description upgrade + fields.
- **F15 · MEDIUM · dateModified === datePublished on all posts** [GEO-5]
  16-month-old how-to-hire post signals never-updated. **Fix:** maintain
  dateModified on substantive edits; refresh + bump the hiring/pricing posts.

### Misc S-effort

- **F16 · MEDIUM · Footer tagline "AI-powered. Battle-tested." is the exact
  cliché the avatar bounces on** [COPY-5] — on every page. **Fix:** replace
  with the named mechanism (Triple Brain + verifiable specifics).
- **F17 · MEDIUM · Doubled "| Rob Palmer | Rob Palmer" title on /call +
  /call/confirmed** [SEO-5] — verified live. **Fix:** drop the manual suffix.
- **F18 · MEDIUM · GA preloaded ahead of first paint (158 KB)** [PERF-3] —
  swap to lazyOnload. **F19 · MEDIUM · Sentry Session Replay statically
  bundled + tracesSampleRate 1.0** [PERF-4] — lazyLoadIntegration + sample
  ~0.1–0.2. Both shrink the critical path that gates the blank hero.
- **F20 · MEDIUM · No focus-visible state on Button CTAs** [UX-3] — WCAG 2.4.7
  fail on the booking button itself. **F21 · MEDIUM · No mobile-header CTA**
  [UX-6] — secondary pages have no above-fold booking affordance on mobile.
- **F22 · LOW · Justin Goff captioned "Direct Marketer"** [COPY-9] — weakest
  possible title for one leg of the peer triangle. **F23 · LOW · CTA label
  drift** [COPY-8] — "Book a Call" vs "Book a Strategy Call"; service pages'
  closing banner falls back to the generic default. **F24 · LOW · About
  metaTitle leads with "About"** [COPY-10].

---

## Tier 2 — Strategic fixes (M/L effort)

- **F25 · CRITICAL · FadeIn ships every hero at opacity:0 — LCP gated on
  hydration sitewide** [PERF-1 = UX-4] — verified in live SSR HTML. Mobile
  LCP ~5s on every page (scores 69–73); with JS disabled the entire site is
  blank below the header (48 hidden blocks on home). **Fix (M):** make
  above-fold FadeIn render visible in SSR + animate via CSS keyframes
  (fail-open); keep IntersectionObserver only below the fold. Single biggest
  performance lever — should take mobile LCP to ~1.5–2.5s (TTFB is 30ms,
  blocking CSS only 14 KB).
- **F26 · CRITICAL · /call mobile LCP 12.0s — Calendly+Stripe 2.9 MB starve
  the money page** [PERF-2] — verified from Lighthouse JSON. **Fix (M):**
  after F25, defer the embed mount (IntersectionObserver rootMargin ~400px or
  idle); the min-h placeholder already prevents CLS (measured 0.003).
- **F27 · HIGH · Keyword cannibalization on the highest-intent query** [CONTENT-4]
  Two "best DR copywriters 2026" posts, 15 days apart, zero cross-links
  (verified), both listicle-with-Rob-#1. Lesser clusters: funnel-vs-page pair,
  pricing pair, 6-post hiring spread. **Fix (M):** pick the canonical, 301 or
  differentiate intent; add hub→spoke links inside clusters.
- **F28 · MEDIUM · 102 truncating titles + 33 over-length descriptions**
  [CONTENT-5] — frontmatter used verbatim as meta. **Fix (M):** optional
  metaTitle/metaDescription frontmatter fields; fix worst ~35 first.
- **F29 · MEDIUM · Stale 2025 framing on pricing/niches posts** [CONTENT-6] —
  "2025 Rates" title on a primary pre-call qualifier in mid-2026. **Fix (S–M):**
  2026 refresh, resolve pricing-pair overlap while in there.
- **F30 · MEDIUM · 27 posts have zero editorial inbound links** [CONTENT-7] —
  including supplement-copywriter, direct-response-copywriter-for-hire.
  **Fix (M):** 2–3 contextual links each from adjacent posts.
- **F31 · MEDIUM · Homepage testimonials repeat the peer strip trio** [COPY-4]
  Same 3 people + quotes twice on one page; Belief-5 ("operators like me got
  results") never installed. **Fix (S):** swap section to ids 5/6/1.
- **F32 · MEDIUM · Triple Brain overclaims** [COPY-7] — "behind every winning
  DR campaign in 2026" + old wins attributed to "this exact AI workflow."
  One detectable overreach licenses discounting the verifiable claims.
  **Fix (S):** scope to Rob's own campaigns; attribute old wins to the method.
- **F33 · MEDIUM · Entity-definition block missing from /about top** [GEO-6]
  First DOM content is a DR headline; AI extraction grabs marketing copy for
  "who is Rob Palmer". **Fix (M):** 50-word factual block under the H1.
- **F34 · MEDIUM · OG tags fall back to homepage defaults on /case-studies,
  /call, /contact; og:url missing on templated pages** [SEO-6] — shares render
  generic cards. **F35 · LOW · Case-study Article schema inconsistencies**
  [SEO-7] — Person publisher, no dateModified, piped headline.
- **F36 · MEDIUM · services/[slug] vs verticals/[slug] ~72% duplicated (613
  lines each)** [CODE-4] — every layout improvement must be applied twice.
  **Fix (L):** extract shared DetailPageLayout. Do BEFORE the next big page-
  pattern iteration, not after.
- **F37 · MEDIUM · Dead MDX pipeline** [CODE-3] — @next/mdx (pinned ^16 vs
  next 15!), @mdx-js/loader, @mdx-js/react all unused; blog uses
  next-mdx-remote. **Fix (M):** strip config + deps, verify build.
- **F38 · LOW · Portfolio chips all exit to one raw Google Drive folder**
  [COPY-11] — mid-money-path off-site exit. **Fix (M):** route via /portfolio.

---

## Tier 3 — Deferred / strategic / won't-fix-now

- **F39 · HIGH (long-horizon) · Off-page entity graph is nearly empty** [GEO-7]
  SERP for "Rob Palmer direct response copywriter" = owned properties +
  contact scrapers. No Reddit, YouTube, podcasts, industry-publication
  mentions — the cross-domain corroboration AI assistants weight most.
  External work, not site work: 2–3 podcast guest spots with YouTube presence,
  substantive Reddit contributions, a Copy Chief/AWAI profile. Highest-leverage
  GEO growth over 6–12 months.
- **F40 · LOW · AI-training crawler policy undecided** [GEO-2/8] — everything
  currently allowed by wildcard. Decide deliberately (allow search bots,
  optionally block CCBot); document in llms.txt.
- **Code hygiene batch** [CODE-5..9]: semantic status colors in forms/tools
  (define success/error tokens), Logo.tsx hardcoded hexes, unused Card.tsx +
  SITE_NAME + CONTACT_PHONE, hover:text-gold-500 sub-AA dip (~20 instances),
  stray /Users/robpalmer/dev/package-lock.json confusing workspace root.
- **Stale CLAUDE.md counts** [CODE-2]: says 9 services + 105 posts; actual 12 +
  149. Update when fixing F10 (this drift plausibly *caused* F10).
- **Polish**: /about mobile 8px overflow (UX-5, min-w-0), service-page desktop
  hero imbalance (UX-8), blog/case LCP image priority + belron-hero compression
  (PERF-5), Calendly embed_domain param (UX-7).

---

## Verified clean (no action — don't re-litigate)

Build: lint zero warnings, 204 static pages, no type errors. Zero hydration
errors live on any page/viewport; FadeIn/li pattern correct in all 10 grids;
ComparisonTable apostrophes clean across 149 posts. Security headers excellent
(HSTS 2y preload, CSP, nosniff); immutable caching on static assets; real 404s;
single-hop legacy redirects; canonicals self-referencing everywhere; all schema
JSON valid with all referenced images 200. CLS = 0 sitewide (Calendly
placeholder works); TTFB ~30ms; fonts preloaded with display:swap. Alt text
100%; one h1 per page; skip link present; mobile nav ARIA correct. Content:
zero thin posts (144/149 are 2000+ words), zero strict orphans, frontmatter
complete, all hero images exist; deep-read sample shows strong E-E-A-T and
correct voice discipline throughout. The 13-point service/vertical pattern and
capacity-trio consistency held up everywhere they were checked.

## Suggested fix phases

1. **Phase 1 — "Last mile" (one session):** booking-page decision + F1–F5,
   F9, F16, F17, F20–F23. Mostly S; transforms the conversion endpoint.
2. **Phase 2 — Signals & plumbing:** F6–F8, F10–F15, F18–F19, F34.
3. **Phase 3 — Performance:** F25 + F26 (+ F18/F19 if not done).
4. **Phase 4 — Content program:** F27–F30, F33.
5. **Phase 5 — Code & polish:** F36–F38, Tier-3 hygiene batch.
6. **Ongoing/external:** F39 entity building.
