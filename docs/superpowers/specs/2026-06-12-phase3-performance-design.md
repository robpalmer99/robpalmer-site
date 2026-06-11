# Phase 3 — Performance (FadeIn + Calendly) — Design Spec

**Date:** 2026-06-12
**Status:** Pending Rob's review
**Parent:** docs/reviews/2026-06-11-site-review.md — findings F25 (critical),
F26 (critical), + PERF-5 riders
**Precedent:** Phases 1–2 on `main` (Phase 2 not yet deployed — this phase
batches with it into one deploy).

## Objective

Take mobile LCP from ~5s (sitewide) and 12s (/call) into the ~1.5–2.5s range
by making content paint before JavaScript, while keeping the site's entrance-
animation design language. Two structural changes (FadeIn, CalendlyEmbed) +
two small image riders. No copy changes.

## Problem (measured)

- `FadeIn` server-renders everything at `opacity:0` and reveals only after
  full JS download → hydrate → IntersectionObserver → 600–1000ms transition.
  Every page's LCP element (hero h1/p) sits in that gate: mobile LCP 5.0–5.3s,
  scores 69–73. With JS disabled the entire site below the header is blank —
  a single point of failure (48 hidden blocks on home alone).
- `/call` additionally eagerly mounts the Calendly InlineWidget (2.6 MB
  Calendly + 230 KB Stripe), starving hydration: 12.0s mobile LCP on the
  page every funnel terminates on.

## Design

### 1. FadeIn becomes fail-open (same public API, new internals)

All 24 call-site files keep working unchanged (`delay`, `duration`,
`direction`, `distance`, `once`, `threshold`, `as` props preserved).

- **SSR + initial client render: VISIBLE** (opacity 1, no transform). The
  server markup and the client's first render match — no hydration mismatch,
  and JS failure now means "no animation," never "no content."
- **On mount (useEffect):**
  - `prefers-reduced-motion: reduce` → do nothing (stays visible, no motion).
  - Element **below the viewport** at mount (`getBoundingClientRect().top >=
    window.innerHeight`) → apply the hidden state (it's offscreen, so the
    mutation is invisible), attach the IntersectionObserver, fade in on
    intersect — current scroll-reveal behavior preserved exactly.
  - Element **in or above the viewport** at mount (above-fold, or anchor-jump
    targets) → leave it visible, no animation. Never re-hide painted content;
    on slow mobile the user has been reading it for seconds.

### 2. New `immediate` prop — CSS-only entrance for above-fold content

Above-fold content would otherwise lose its fade-up (it renders visible and
mount-skips animation). To keep the design language at zero JS cost:

- `<FadeIn immediate ...>` renders with **CSS keyframe classes** in the SSR
  markup (`animation: fade-in-up 800ms cubic-bezier(...) both`, inline
  `animationDelay` honoring the `delay` prop). The animation starts at first
  paint — before hydration, before any JS — so the browser records LCP at the
  first visible frame (~1 frame after paint for a delay-0 element).
- Keyframes (`fade-in-up`, `fade-in-down`, `fade-in-left`, `fade-in-right`,
  `fade-in`) live in globals.css with a `prefers-reduced-motion: reduce`
  override (`animation: none`).
- **Adoption:** `Hero.tsx` switches all its internal FadeIns to `immediate`
  (h1 at delay 0 — the LCP element animates from the first frame; subhead
  150ms, CTAs 300ms, portrait 400ms keep the stagger via
  `animation-fill-mode: backwards`). Other call sites stay default — the
  fail-open mount check handles them correctly wherever they sit.

### 3. CalendlyEmbed defers off the critical path

Keep the `min-h-[660px]` placeholder (CLS stays 0 — measured 0.003 today).
Mount the InlineWidget only when one of these fires (whichever first):

- `window` load event + `requestIdleCallback` (timeout 2000ms fallback), or
- first user interaction (`pointerdown` / `keydown` / `scroll`, once).

Result: hero text on /call paints at text-speed; Calendly's megabytes load in
the idle gap after. On desktop broadband the perceived difference is ~nothing;
on throttled mobile it's the difference between 12s and ~2s LCP. The Phase 1
analytics listener (`calendly.event_scheduled` etc.) is unaffected — it
listens on `window` regardless of when the iframe mounts.

### 4. PERF-5 riders (small, in-theme)

- `priority` on the LCP `<Image>` in the blog-post template and the two
  case-study heroes (sets fetchpriority=high on the preload).
- Re-encode `belron-hero.jpg` (~55 KB → ~39 KB savings available) with sharp
  (already a dependency) at quality ~78, same dimensions.

## Out of scope

Calendly's own asset weight (third-party, controlled by them); further JS-diet
work (Sentry/GA done in Phase 2); template dedup (Phase 5); any copy changes.

## Verification

1. **Lighthouse before/after** (local CLI, mobile + desktop) on: home, /call,
   /services/sales-page-copywriter, one blog post, belron case study.
   Baselines from the audit: home 73 / LCP 5.1s, /call 73 / LCP 12.0s,
   service 69 / 5.1s, blog 73 / 5.2s, case 72 / 5.3s (mobile).
   **Targets: text-LCP pages ≥ 85 mobile with LCP ≤ 2.5s; /call ≥ 80 with
   LCP ≤ 3s. CLS stays ≈ 0 everywhere.**
2. **No-JS test:** home + /call render all content with JavaScript disabled
   (the blank-page failure mode is dead).
3. **Reduced-motion test:** all content visible, no motion.
4. **Hydration:** zero hydration errors in console across home, /call, a
   service page, a blog post (the FadeIn change touches every page).
5. **Animation QA in browser:** entrance animations still play on hero;
   scroll-reveals still play below the fold; no double-animation, no flash of
   re-hidden content. **Rob reviews in the dev server before sign-off**
   (house rule — this is a design-sensitive change).
6. Anchor-jump check: loading `/#services` (or any mid-page anchor) shows the
   target section immediately, not hidden.

## Risks

- The mount-time viewport check runs before paint in some browsers
  (useEffect timing) — mutation of below-fold elements is still invisible;
  worst case is a one-frame fade-start visible at the viewport edge.
  Acceptable; `useLayoutEffect` is the fallback if QA sees flicker.
- `animation-fill-mode: backwards` holds delayed above-fold elements hidden
  during their delay — delays stay ≤ 450ms (current Hero stagger), and the
  LCP h1 keeps delay 0, so LCP is unaffected.
- Any FadeIn call site relying on `once={false}` re-hide behavior keeps it
  (observer path unchanged) — audit at plan time confirms whether any exist.
- Batched deploy: this ships together with Phase 2's 16 commits — the
  Lighthouse after-numbers get re-verified on production post-deploy.
