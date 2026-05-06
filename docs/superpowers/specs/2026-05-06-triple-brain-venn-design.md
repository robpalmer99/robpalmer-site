# Triple Brain Venn — design spec

**Date:** 2026-05-06
**Status:** approved, ready for implementation
**Source brief:** `RobPalmer/offer_brief.md` Section 18.F — *"A simple 3-circle Venn (Craft / AI / Vault) with the intersection labeled = the offer. This is more memorable than any sentence."*

## Goal

Add a small Venn-diagram visual to the home-page Triple Brain Marketing section. The diagram is a memorability device: it gives a fast, scannable picture of the integration claim that the surrounding 3 brain cards explain in detail. Per offer brief 18.F, this addresses the "AI-fluency proof needs to be substantive, not asserted" frame by making the integrated-three-brains claim a thing the visitor can *see*, not just read.

## Decisions (locked)

| # | Decision | Choice |
|---|---|---|
| 1 | Placement on home page | Below the 3 brain cards, above the anchor-proof paragraph |
| 2 | Circle labels | **Craft / AI / Vault** (per offer brief 18.F — punchy, fits cleanly in circles) |
| 3 | Intersection caption | **Triple Brain Marketing** rendered as a `<figcaption>` below the SVG (not inside the intersection) |
| 4 | Animation | `FadeIn` entrance only (matches the rest of the home page); no hover state, no interactive states |
| 5 | Mobile fallback | Single SVG that scales fluidly via `viewBox` + `w-full h-auto`. No mobile-only variant. |
| 6 | Visual treatment | Hybrid — gold-400 fill at 20% opacity + gold-500 stroke at 1.5px. Intersection naturally renders darker than single-circle areas. |
| 7 | Implementation approach | New `TripleBrainVenn` component at `src/components/blocks/TripleBrainVenn.tsx`. Follows existing block-component convention. |

## Component spec

**File:** `src/components/blocks/TripleBrainVenn.tsx`

```tsx
import { FadeIn } from '@/components/ui/FadeIn'

const CIRCLE_FILL = 'var(--color-gold-400)'
const CIRCLE_STROKE = 'var(--color-gold-500)'
const LABEL_FILL = 'var(--color-ink-950)'

export function TripleBrainVenn() {
  return (
    <FadeIn delay={400}>
      <figure className="mt-14 max-w-md mx-auto" aria-labelledby="triple-brain-venn-caption">
        <svg
          viewBox="0 0 360 320"
          role="img"
          aria-label="Venn diagram showing Craft, AI, and Vault overlapping into Triple Brain Marketing"
          className="w-full h-auto"
        >
          <circle cx="130" cy="120" r="85" fill={CIRCLE_FILL} fillOpacity="0.2" stroke={CIRCLE_STROKE} strokeWidth="1.5" />
          <circle cx="230" cy="120" r="85" fill={CIRCLE_FILL} fillOpacity="0.2" stroke={CIRCLE_STROKE} strokeWidth="1.5" />
          <circle cx="180" cy="200" r="85" fill={CIRCLE_FILL} fillOpacity="0.2" stroke={CIRCLE_STROKE} strokeWidth="1.5" />
          <text x="93"  y="95"  fill={LABEL_FILL} style={{ fontFamily: 'var(--font-heading)' }} fontSize="16" fontWeight="700">Craft</text>
          <text x="240" y="95"  fill={LABEL_FILL} style={{ fontFamily: 'var(--font-heading)' }} fontSize="16" fontWeight="700">AI</text>
          <text x="158" y="240" fill={LABEL_FILL} style={{ fontFamily: 'var(--font-heading)' }} fontSize="16" fontWeight="700">Vault</text>
        </svg>
        <figcaption
          id="triple-brain-venn-caption"
          className="mt-4 text-center font-heading text-sm font-bold uppercase tracking-wider text-gold-600"
        >
          Triple Brain Marketing
        </figcaption>
      </figure>
    </FadeIn>
  )
}
```

**Why CSS-variable inline attrs instead of Tailwind utilities for SVG:** Tailwind v4 auto-generates `fill-*`/`stroke-*` utilities for color tokens, but no existing component in this codebase uses `fill-gold-*` or `stroke-gold-*` — meaning we'd be the first caller, and any config-edge-case (e.g., custom-colors not surfacing under `fill-*` namespace) would fail silently. CSS variables defined in `globals.css` (`--color-gold-400` etc.) are guaranteed to resolve. The `<figcaption>` and other regular HTML elements still use Tailwind utilities normally — the CSS-var pattern is only needed inside `<svg>` to avoid the utility-generation question.

### Geometry

- `viewBox="0 0 360 320"` — gives clean overlap room and headroom for caption.
- Three circles, radius 85, centers at `(130, 120)`, `(230, 120)`, `(180, 200)`. Distances between centers: 100 (top pair), ~94 (top-to-bottom). Equilateral-ish, gives clean 3-way overlap zone.
- Label positions sit in the non-overlap zones of each circle: Craft top-left, AI top-right, Vault bottom-center.

### Styling tokens

All colors come from the design-token system defined in `src/app/globals.css` (CLAUDE.md mandate: never raw hex):
- SVG circles: `fill="var(--color-gold-400)"` at `fillOpacity="0.2"`, `stroke="var(--color-gold-500)"` (CSS variables, not Tailwind utilities — see note above the component code).
- SVG text labels: `fill="var(--color-ink-950)"`, `style={{ fontFamily: 'var(--font-heading)' }}` (Fraunces).
- Figcaption (regular HTML, Tailwind works normally): `text-gold-600` for caption color (matches existing card-link convention for WCAG AA contrast), `font-heading` for Fraunces, `text-sm font-bold uppercase tracking-wider` for the small-caps treatment used elsewhere on the home page (e.g., the "Brain 1/2/3" labels above each card).

### Responsive

The single SVG handles all breakpoints via:
- `viewBox` does the math (intrinsic 360×320 ratio preserved)
- `w-full h-auto` makes it fluid inside the parent
- `max-w-md` (28rem / 448px) caps the upper width on desktop

At 320px viewport (smallest mobile), the SVG renders at ~280px wide — circles still readable, caption uses `text-sm` so stays legible.

### Accessibility

- `role="img"` + `aria-label` on the `<svg>`
- `<figcaption>` linked by `aria-labelledby` on the `<figure>`
- Labels are real `<text>` elements (screen-readable), not bitmap.
- Color contrast: `text-gold-600` on `bg-paper-50` is WCAG AA.

## Integration

**File:** `src/app/page.tsx`

**Changes:**

1. Add import alongside existing component imports:
```tsx
import { TripleBrainVenn } from '@/components/blocks/TripleBrainVenn'
```

2. Insert `<TripleBrainVenn />` between the closing `</ul>` of the 3 brain cards and the anchor-proof `<FadeIn>` block (currently around line 158–159).

3. Bump the anchor-proof paragraph's `<FadeIn delay={400}>` to `<FadeIn delay={500}>` so it animates AFTER the Venn lands.

### Final FadeIn sequence in the Triple Brain section

| Element | Delay (ms) |
|---|---|
| Card 1 (Brain 1) | 0 |
| Card 2 (Brain 2) | 100 |
| Card 3 (Brain 3) | 200 |
| Venn | 400 |
| Anchor-proof paragraph | 500 |
| "How Triple Brain Marketing works" CTA button | (already at 400, unchanged — sits inside the same wrap-up FadeIn) |

Re-check after build: if the CTA button's existing FadeIn is the same block as the anchor-proof paragraph (i.e., both wrapped in one `FadeIn delay={400}`), bumping that wrapper to 500 covers both. Implementation step verifies.

## Out of scope

- No hover/click interactivity. Static visual.
- No theme variants (dark mode, alt color schemes). Single appearance.
- No reuse on /about or other pages in this PR. Component is reusable in principle (no props), but only mounted on home in this implementation.
- No dedicated unit test. Visual verification in dev browser at desktop + mobile viewports is the test.

## Verification (post-implementation checklist)

1. `npm run dev` is already running — DO NOT run `npm run build` (memory: feedback_no_build_during_dev.md).
2. Navigate to `http://localhost:3000/` at desktop viewport (1440×900) — confirm Venn renders below cards, before anchor-proof paragraph.
3. Resize to mobile viewport (390×844) — confirm Venn scales, labels remain inside non-overlap zones, caption legible.
4. Confirm FadeIn sequence (cards → Venn → anchor-proof) — animations enter in order on viewport intersection.
5. Confirm no console errors.
6. Confirm `<title>` unchanged: `Rob Palmer | Direct-Response Copywriter | Triple Brain Marketing`.
7. Curl-grep the rendered HTML for the Venn presence: `curl -s http://localhost:3000/ | grep -c "triple-brain-venn-caption"` should return `1`.
