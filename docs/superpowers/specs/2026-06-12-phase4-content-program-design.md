# Phase 4 — Content Program — Design Spec

**Date:** 2026-06-12
**Status:** Pending Rob's review
**Parent:** docs/reviews/2026-06-11-site-review.md — findings F27, F28, F29,
F30, F33
**Precedent:** Phases 1–3 deployed. This phase is editorial — it touches blog
copy and metadata, not components.

## Objective

Stop the blog competing with itself on its highest-intent query, fix the
SERP-truncation tax across ~35 posts, kill the 2025 staleness on
pre-call qualifier posts, route internal authority to the 27
editorially-orphaned posts, and give /about the AI-extractable entity block.

## Locked decisions (with Rob)

| Decision | Choice |
|---|---|
| Best-DR cannibalization | **301 consolidation**: merge unique value from `best-direct-response-copywriters-2026` into `best-direct-response-copywriter-to-hire`, then 301 the old URL and delete the old MDX |
| Pricing-post rates | Figures still accurate for 2026 — re-date and de-stale only; no rate changes |

## Changes

### 1. Cannibalization consolidation (F27)

**Primary pair:**
- Read both posts side-by-side; port any unique, still-valuable passages from
  `best-direct-response-copywriters-2026` (copywriter profiles, comparison
  angles) into `best-direct-response-copywriter-to-hire` where they fit its
  structure. The merged post gets `updated: <merge date>` (honest — this is a
  substantive edit).
- Add the 301 in next.config.ts (`/blog/best-direct-response-copywriters-2026`
  → `/blog/best-direct-response-copywriter-to-hire`) and DELETE the old MDX
  file (sitemap and blog index drop it automatically; redirect carries the
  URL's equity and any external links).
- Repoint every internal link to the old slug (the link checker fails the
  build if any is missed — find them first with grep).

**Lesser clusters — cross-link, don't consolidate:**
- Funnel-vs-page pair (`sales-funnel-vs-single-sales-page` /
  `single-sales-page-vs-full-funnel`): designate the stronger as hub, add a
  clear "companion piece" link in each, and differentiate their opening
  framings so the titles stop reading as duplicates.
- Pricing pair (`copywriting-rates` / `how-much-does-a-direct-response-
  copywriter-cost`): already distinct in audience (general vs DR-specific) —
  add explicit reciprocal links naming that distinction.
- Hiring-intent spread (how-to-hire-a-copywriter, direct-response-copywriter-
  for-hire, direct-response-copywriting-specialist, professional-copywriter-
  services, copywriting-services): how-to-hire-a-copywriter becomes the hub —
  each spoke gets one contextual link to it; the hub links the two strongest
  spokes.
- AI-capability cluster (can-ai-write-sales-copy, ai-vs-human-copywriting,
  direct-response-copywriting-ai, ai-copywriting): direct-response-
  copywriting-ai is the hub (it carries the Triple Brain framing); same
  hub/spoke treatment.

### 2. SERP truncation sweep (F28)

- Add optional `metaTitle` / `metaDescription` frontmatter fields to the blog
  pipeline (BlogPostMeta + reader + generateMetadata: `metaTitle ?? title`
  drives `<title>` and og:title; `metaDescription ?? description` drives
  meta/og description). H1 on the page keeps using `title` — SERP and page
  headline decouple.
- Fix the worst offenders: every post whose title exceeds 80 chars or whose
  description exceeds 200 chars (~35 posts per the audit; regenerate the list
  at plan time). New metaTitles ≤ 60 chars, keyword-leading (house rule); new
  metaDescriptions 140–160 chars ending with a hook, not a truncation.

### 3. Freshness refresh (F29)

- `copywriting-rates`: title "2025 Rates" → 2026; body "in 2025" instances
  refreshed; `updated` field set. Rates unchanged (Rob confirmed accurate).
- `copywriting-niches`: same 2025→2026 treatment (title + 3 body instances).
- Single-instance staleness fixes: `what-is-a-vsl`, `sales-letter-examples`,
  `ecommerce-conversion-rate-optimization` ("in 2025" phrasing),
  `is-copywriting-dead` ("in 2024" claim) — reword to current framing or
  explicit past-tense historical reference, whichever each sentence needs.
- `updated` set ONLY where the edit is substantive (date honesty rule);
  pure year-swap one-liners count as substantive freshness edits for the two
  pricing/niches posts, not for single-sentence touch-ups.

### 4. Internal-link enrichment (F30)

- Regenerate the zero-editorial-inbound list (~27 posts; script from the
  audit methodology — body-copy links only, widget links don't count).
- For each orphan: add 2–3 contextual body links FROM topically adjacent,
  higher-traffic posts. Links must read native to the donor post's argument —
  no "related reading" link dumps. Donor edits are link-only (no `updated`
  bumps — these are href insertions, not substantive content changes).
- Everything passes the prebuild link checker by construction.

### 5. /about entity block (F33)

A 40–60 word factual paragraph rendered FIRST in DOM order under the H1,
styled subdued (smaller, paper-600-tier color) so it reads as a byline-like
intro rather than competing with the DR headline:

> Rob Palmer is a direct-response copywriter with 40+ years of experience and
> $523M+ in tracked client results, including campaigns for Apple, IBM,
> Microsoft, and Belron/Safelite. He works with health, finance, SaaS,
> e-commerce, and ClickBank clients worldwide, and is taking new engagements
> in 2026.

**Voice-rule exception, flagged for Rob:** this block is deliberately
third-person — it exists for machine extraction ("who is Rob Palmer" passage
citability, like meta descriptions and schema), which needs name-claim
adjacency. Everything else on /about stays first-person. If Rob prefers, the
fallback is first-person with a name anchor ("I'm Rob Palmer — …"), which
costs some extraction quality.

## Process requirements (house rules)

- **copychief + direct-response-copy skill review BEFORE committing** the
  major copy edits (the merged listicle, the refreshed pricing posts, the
  entity block) — per the standing rule for major DR copy changes.
- metaTitle keyword leads; scarcity implied never stated; first-person voice
  in body copy (listicles may use third person; entity block excepted above).
- All link work must pass `npm run check:links`.

## Out of scope

New posts; the skill posts (done in Phase 2); code/component changes beyond
the small mdx.ts/generateMetadata additions in §2; Phase 5 hygiene; off-page
entity building (F39).

## Verification

1. Build + link checker green; zero references to the deleted slug anywhere.
2. Live 301 check post-deploy: old URL → 308/301 → new post (200).
3. Length audit script: all touched posts ≤60-char metaTitle / ≤160-char
   metaDescription; zero remaining ">80 title / >200 description" posts.
4. Staleness grep: no remaining "2025 rates"-style present-tense claims in
   the touched posts.
5. copychief review notes attached to the implementation (what was flagged,
   what was applied).
6. Rob reviews: the merged to-hire post, the two refreshed pricing/niches
   posts, and the /about entity block in the dev server before sign-off.

## Risks

- 301-ing a 2-month-old post sacrifices its standalone rankings during
  re-consolidation — accepted (that's the point; signals join the survivor).
- Donor-post link insertions are the highest-volume hand-edits (~60–80
  individual edits); the link checker catches target errors but not awkward
  prose — the copychief pass samples donors for prose quality.
- The entity block's third-person voice will read slightly "off" against the
  page's I-voice — mitigated by subdued styling; Rob judges in review.
