# Full-Site Review — Design Spec

**Date:** 2026-06-11
**Status:** Approved (brainstormed + approved in session)
**Type:** Audit / review (report first, fixes in later phases)

## Objective

A full-spectrum audit of robpalmer-site producing a single prioritized findings
report. Every finding is ranked by **likely impact on booked strategy calls**
first, then severity × effort within that. The site is mature (offer brief
Section 18 fully shipped 2026-05-07), so this is a "find what's holding it
back" review, not a rebuild.

## Scope decisions (locked with Rob)

| Decision | Choice |
|---|---|
| Dimensions | Everything: code, performance, SEO/GEO, content, conversion copy, UX |
| Deliverable | Report first → fixes ship in planned phases after Rob prioritizes |
| Ranking lens | Booked calls / conversions above all else |
| Execution | ~7 parallel specialist subagent tracks, verified + synthesized centrally |

## Evidence sources

- **Code tracks** audit local `main`.
- **SEO / performance / UX tracks** audit the live production site
  (https://robpalmer.com).
- Verified at audit time: production runs commit `1a7f442`, which is `main`
  minus one commit that only touches `.claude/settings.json` — live site and
  local code are content-identical for this review.

## The seven audit tracks (parallel)

1. **Conversion copy** — money path: home → service/vertical → case study →
   /call + /contact. CTA logic, booking friction, capacity-trio consistency,
   voice rules, alignment with `RobPalmer/` foundational docs (avatar, offer
   brief, necessary beliefs). copychief / direct-response discipline.
2. **Code health** — dead code, duplication, pattern drift vs CLAUDE.md
   conventions (design tokens, fonts, Image usage, contrast tokens, external
   link attrs), data-file consistency (services / verticals / testimonials /
   content-links), dependency hygiene, build + lint output.
3. **Performance** — Core Web Vitals, image weight, bundle size,
   render-blocking issues on key live pages.
4. **Technical SEO** — crawlability, robots, sitemap, canonicals, schema
   validity, meta hygiene, security headers, mobile.
5. **GEO / AI search** — llms.txt, AI-crawler accessibility, citability of
   money pages, AI Overviews / ChatGPT / Perplexity readiness.
6. **Content quality** — the 105 blog posts: thin/stale content,
   frontmatter consistency, internal-link graph coverage vs
   `src/lib/content-links.ts`, cannibalization, posts that don't funnel
   anywhere.
7. **UX / visual / a11y** — desktop + mobile rendering of key live pages,
   above-the-fold, contrast, console/hydration errors.

### Known accepted trade-offs (auditors must not re-report)

- Trailing-slash 2-hop redirect chains on Vercel edge — accepted quirk.
- `sections[].content` rendered via `dangerouslySetInnerHTML` — intentional;
  content is static authored data, only flag if a genuine injection path from
  untrusted input exists.
- FadeIn-never-wraps-`<li>` and ComparisonTable no-apostrophes-in-rows are
  known constraints — flag *violations*, not the constraints themselves.
- Pushing `main` doesn't deploy — deliberate (`git.deploymentEnabled.main:
  false`).

## Verification & synthesis

- Tracks return structured findings: claim, severity (critical/high/med/low),
  evidence (file:line or URL), conversion-impact hypothesis, effort (S/M/L),
  suggested fix.
- Every critical/high finding is independently verified against actual code or
  live page before entering the report; unverifiable claims are dropped or
  downgraded with a note.
- Findings deduplicated across tracks, then synthesized into
  `docs/reviews/2026-06-11-site-review.md` with three tiers:
  **quick wins**, **strategic fixes**, **deferred / won't-fix**.

## Constraints during the audit

- Read-only: no code or copy changes, no commits of fixes, no deploys.
- No `npm run build` while a dev server is running (check for `next dev`
  process first).

## After the report

Rob reviews the report and picks priorities; each fix phase then goes through
the normal spec → plan → implement workflow. The report doubles as the backlog.
