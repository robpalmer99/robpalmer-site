# Phase 5 — Hygiene Batch — Design Spec

**Date:** 2026-06-12
**Status:** Pending Rob's review
**Parent:** docs/reviews/2026-06-11-site-review.md Tier 2/3 code items (F35,
F36–F38, F40, CODE-2/5/6/7/8/9, UX-5) + the carry-list accumulated by the
Phase 1–4 reviews.
**Precedent:** Phases 1–4 deployed. This phase is maintainability + finish
work; near-zero conversion impact by design.

## Objective

Pay down every debt item the four fix phases logged, so the codebase stops
accumulating "known but unfixed" entries: the 613-line template duplication,
the thrice-bitten mdx.ts meta duplication, link-checker blind spots, dead
dependencies, schema entity linking, token/a11y stragglers, the deliberate
AI-crawler policy, and the final 86-post truncation sweep.

## Locked decisions (with Rob)

| Decision | Choice |
|---|---|
| AI-crawler policy (F40) | **Allow everything, explicitly** — named Allow rules for GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, CCBot in robots.ts, so participation reads deliberate. No blocks. |
| 86-post truncation band | **Include** — full metaTitle sweep to ≤60 chars using Phase 4 rules/register. |

## Changes

### 1. Template dedup (F36 / CODE-4) — the big one

`src/app/services/[slug]/page.tsx` and `src/app/verticals/[slug]/page.tsx`
are 613 lines each, ~72% identical. Extract the shared 13-point layout into
`src/components/blocks/DetailPageLayout.tsx` taking a common interface both
Service and Vertical satisfy; the two route files keep only data loading,
generateMetadata, JSON-LD specifics, and type-specific sections passed as
props/slots.

**Verification is pixel-diffing, not faith:** Playwright screenshots of all
12 service + 6 vertical pages (desktop + mobile) BEFORE the refactor, same
AFTER — byte-identical rendered output expected (or pixel-identical within
antialiasing tolerance). Built HTML diff on 2 sample pages as a second check.

### 2. mdx.ts meta builder (carry-item, bitten 3×)

Extract a private `buildMeta(slug, data, content)` used by BOTH
`getBlogPostMeta` and `getBlogPostContent` — the duplicated literals caused
plan gaps in Phases 2 and 4. Pure refactor; built output unchanged.

### 3. Link checker hardening (carry-items)

- Line-based fence scanner tracking opening-fence backtick count (fixes the
  4-backtick skill-post edge).
- Validate frontmatter `heroImage` paths exist in public/ (closes the
  regression gap that bit pre-audit).
- Merge the two near-duplicate scan loops (markdown + href) into one loop
  over [regex, label] pairs.
- Self-test step proves: plants in fenced/unfenced/href/heroImage positions
  each fail correctly, then pass after revert.

### 4. Dead MDX pipeline removal (F37 / CODE-3)

Remove `createMDX`/`withMDX` + `md/mdx` pageExtensions from next.config.ts,
delete the no-op mdx-components.tsx, uninstall `@next/mdx` (pinned ^16
against next 15!), `@mdx-js/loader`, `@mdx-js/react`, `@types/mdx`. The blog
renders via next-mdx-remote and is unaffected — build proves it.

### 5. Schema polish (F35 + @id linking)

- Give `organizationJsonLd` an `'@id': ${SITE_URL}/#organization`; point
  Person `worksFor` and Organization `founder`-side references at that @id so
  crawlers merge the entities.
- Case-study Article schema aligned with the blog shape: Organization
  publisher (with logo ImageObject), `dateModified` added, clean editorial
  `headline` without the "| …" SERP suffix. Both case-study pages.

### 6. Token/a11y cleanups (CODE-5/6/7/8 + nits)

- **Semantic status tokens:** define `success-*`/`error-*` (and the orange
  used by tools) in the Tailwind theme tuned to the paper/ink palette; swap
  the default green/red/orange classes in ContactForm, both tool components,
  and lib/headline-analyzer.ts. Visual check in browser (form states).
- Logo.tsx hexes → CSS variables referencing the token palette.
- Delete unused `Card.tsx` and the `SITE_NAME` constant (re-verify zero
  importers first).
- `hover:text-gold-500` on gold-600 links (~20 instances) → `hover:text-gold-700`
  (darken on hover keeps AA).
- Drop the redundant `focus-visible:outline` class from Button (outline-2
  sets style+width in Tailwind 4); normalize the `let safetyId = undefined`
  initializer style in CalendlyEmbed.
- UX-5: `min-w-0` on the CareerTimeline text column (kills the 8px /about
  mobile overflow).

### 7. Build/workspace hygiene (CODE-9 + CSS leak)

- `outputFileTracingRoot: __dirname` in next.config.ts (silences the stray
  parent-lockfile workspace-root warning without touching ~/dev).
- Stop Tailwind 4 scanning docs/: `@source not "../../docs"` (exact syntax
  verified at plan time) in globals.css so planning prose can't ship classes
  into the CSS bundle (one dead rule ships today).

### 8. robots.ts — explicit AI-crawler Allow rules (F40)

Named rules for the seven bots (policy above), keeping the existing
wildcard + /api/ + /_next/ disallows. llms.txt unchanged.

### 9. Editorial finish (the sweep + logged copy nits)

- metaTitle sweep over every post whose EFFECTIVE title (metaTitle ?? title)
  exceeds 65 chars (~86 posts) — Phase 4 rules: ≤60 chars, keyword leads, no
  suffix. metaDescriptions likewise for the >165 band.
- `ai-copywriting-prompts` description: "30-year direct-response pro" → 40+
  framing (figure consistency).
- `copywriting-rates`: keyword-leading metaTitle ("Copywriting Rates 2026 — …")
  while the H1 title stays as-is.
- CLAUDE.md Data Architecture counts corrected (12 services; blog count as
  measured at implementation — 148 after the Phase 4 deletion; verify).

## Explicitly out of scope / won't-fix

UX-8 (service-page desktop hero balance — design taste, zero impact; revisit
only if Rob asks); checker static-route hardcoding (accepted limitation);
F39 off-page entity work (not a repo task); any new features.

## Verification

1. **Pixel-diff gate for §1:** before/after screenshot suite over all 18
   detail pages × 2 viewports; differences must be zero/antialiasing-only.
2. Build + link checker (with its new self-tests) green; `npx tsc --noEmit`.
3. Schema: parse built JSON-LD — @id linkage present; case-study Article has
   Organization publisher + dateModified.
4. Length audit at the STRICT thresholds (65/165) → 0 posts over (the Phase 4
   plan-defect gate finally satisfied).
5. Token swap: browser check of ContactForm error/success states + both tools.
6. robots.txt output check (named bots present).
7. Dev-server browser review with Rob: one service page + one vertical page
   (template dedup eyeball), the contact form states, /about mobile.

## Risks

- The template dedup is the only risky item — mitigated by the pixel-diff
  gate and by changing zero data shapes (the component consumes the existing
  Service/Vertical interfaces).
- Status-token swap changes visible colors slightly (tuned versions of the
  same hues) — Rob judges in review.
- The 86-post sweep is volume; the length audit catches mechanical errors,
  and register drift is sampled at review.
