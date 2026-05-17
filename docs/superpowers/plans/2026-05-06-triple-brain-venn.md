# Triple Brain Venn Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a 3-circle Venn diagram (Craft / AI / Vault → Triple Brain Marketing) to the home page between the 3 brain cards and the canonical anchor-proof paragraph.

**Architecture:** New self-contained React component (`TripleBrainVenn`) that renders an inline SVG Venn wrapped in the existing `FadeIn` entrance animation. No props, no data, no async. Wired into `src/app/page.tsx` with a one-line import and a one-line component insertion; the existing wrap-up `<FadeIn delay={400}>` is bumped to `delay={500}` so the anchor-proof paragraph + CTA button animate after the Venn lands. SVG colors come from CSS-variable design tokens (`--color-gold-400`, `--color-gold-500`, `--color-ink-950`) defined in `src/app/globals.css` to avoid Tailwind v4 `fill-*`/`stroke-*` utility-generation edge cases.

**Tech Stack:** Next.js 15 App Router, React, Tailwind v4, inline SVG (no library), `FadeIn` IntersectionObserver-driven entrance animation (already in repo).

**Source spec:** `docs/superpowers/specs/2026-05-06-triple-brain-venn-design.md` (commit `60a2416`).

**Critical constraints (from project memory):**
- Dev server (`npm run dev`) is already running — **DO NOT** run `npm run build` (corrupts `.next/`, causes 500 errors). The dev-server compiler is the type check.
- Verify via curl + Playwright in the running dev server.
- Run direct-response-copy / copychief skills only for **major DR copy edits** — this is a visual component, no copy review needed.
- Don't push to main without explicit OK from the user.

---

## File Structure

| File | Operation | Responsibility |
|---|---|---|
| `src/components/blocks/TripleBrainVenn.tsx` | Create | Self-contained Venn diagram component. No props. Renders SVG + figcaption inside `<FadeIn delay={400}>`. |
| `src/app/page.tsx` | Modify | Add `TripleBrainVenn` import. Insert `<TripleBrainVenn />` between line 158 (`</ul>`) and line 159 (the anchor-proof `<FadeIn delay={400}>`). Bump that wrapper to `delay={500}`. |

No test files. The spec explicitly says: *"No dedicated unit test. Visual verification in dev browser at desktop + mobile viewports is the test."*

---

## Task 1: Create the `TripleBrainVenn` component

**Files:**
- Create: `src/components/blocks/TripleBrainVenn.tsx`

- [ ] **Step 1.1: Write the component file**

Create `src/components/blocks/TripleBrainVenn.tsx` with this exact content:

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

- [ ] **Step 1.2: Verify the dev-server compiler accepts the new file**

Run:

```bash
curl -s http://localhost:3000/ -o /dev/null -w "%{http_code}\n"
```

Expected: `200`. (If the dev server hasn't recompiled yet, wait ~1s and retry. If `500`, check the dev server's terminal output for TypeScript errors.)

- [ ] **Step 1.3: Confirm the component file imports resolve**

The component imports `FadeIn` from `@/components/ui/FadeIn`. Confirm the import path resolves:

```bash
test -f /Users/robpalmer/dev/robpalmer-site/src/components/ui/FadeIn.tsx && echo "FadeIn exists" || echo "MISSING"
```

Expected: `FadeIn exists`. (FadeIn already exists per the spec's "Tech Stack" — this is just a sanity check.)

---

## Task 2: Wire `TripleBrainVenn` into the home page

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 2.1: Add the import**

In `src/app/page.tsx`, find the existing import block (lines 1–21). Add this single line, alphabetically grouped with the other component imports (most natural spot: after `import { ServiceCard }`):

```tsx
import { TripleBrainVenn } from '@/components/blocks/TripleBrainVenn'
```

The exact Edit-tool call:

```
old_string:
import { ServiceCard } from '@/components/blocks/ServiceCard'

new_string:
import { ServiceCard } from '@/components/blocks/ServiceCard'
import { TripleBrainVenn } from '@/components/blocks/TripleBrainVenn'
```

- [ ] **Step 2.2: Insert `<TripleBrainVenn />` and bump the wrap-up FadeIn delay**

In `src/app/page.tsx`, find the closing `</ul>` of the 3 brain cards (line 158) and the wrap-up `<FadeIn delay={400}>` immediately below it (line 159). Insert the component between them, AND bump the FadeIn delay from `400` to `500`.

The exact Edit-tool call:

```
old_string:
          </ul>
          <FadeIn delay={400}>
            <p className="mt-14 text-center text-lg text-ink-700 font-body leading-relaxed max-w-3xl mx-auto">
              Each brain multiplies the others &mdash; and the math compounds:{' '}

new_string:
          </ul>
          <TripleBrainVenn />
          <FadeIn delay={500}>
            <p className="mt-14 text-center text-lg text-ink-700 font-body leading-relaxed max-w-3xl mx-auto">
              Each brain multiplies the others &mdash; and the math compounds:{' '}
```

- [ ] **Step 2.3: Verify the dev server still serves 200**

Run:

```bash
curl -s http://localhost:3000/ -o /dev/null -w "%{http_code}\n"
```

Expected: `200`.

- [ ] **Step 2.4: Confirm the rendered HTML contains the Venn caption**

Run:

```bash
curl -s http://localhost:3000/ | grep -c 'triple-brain-venn-caption'
```

Expected: `1` (the `<figcaption id="triple-brain-venn-caption">` element appears once in the rendered home-page HTML).

If `0`: the component isn't rendering — check the dev server terminal for compile errors and the import path in `page.tsx`.

---

## Task 3: Visual verification — desktop

**Files:** none modified — verification only.

- [ ] **Step 3.1: Navigate to home page in Playwright at desktop viewport**

Tools needed: `mcp__playwright__browser_resize`, `mcp__playwright__browser_navigate`, `mcp__playwright__browser_take_screenshot`, `mcp__playwright__browser_evaluate`.

```
mcp__playwright__browser_resize: width=1440, height=900
mcp__playwright__browser_navigate: http://localhost:3000/
```

- [ ] **Step 3.2: Scroll to the Triple Brain section and screenshot**

```
mcp__playwright__browser_evaluate:
() => { const h = Array.from(document.querySelectorAll('h2')).find(el => el.textContent.includes('Three brains.')); h?.scrollIntoView({ block: 'start' }); return { y: window.scrollY }; }

mcp__playwright__browser_take_screenshot: filename=venn-desktop.png
```

Expected in the screenshot:
- The 3 brain cards are visible at the top of the viewport.
- Below the cards, the Venn diagram renders with 3 overlapping gold-tinted circles labelled "Craft", "AI", "Vault".
- "TRIPLE BRAIN MARKETING" caption sits below the Venn (small caps, gold-600).
- Below the caption, the canonical anchor-proof paragraph ("$40M Gluco 6 ... 340% Abundant ...") is visible or in the next viewport.

- [ ] **Step 3.3: Confirm the FadeIn sequence**

Reload the home page at the same viewport and watch the entrance order. The cards (delay 0/100/200) should land first, then the Venn (delay 400), then the anchor-proof paragraph + CTA button (delay 500).

```
mcp__playwright__browser_navigate: http://localhost:3000/
```

Then immediately scroll to the section as in Step 3.2 and verify the entrance order via successive screenshots if needed. (Manual visual judgement — no programmatic check.)

---

## Task 4: Visual verification — mobile

**Files:** none modified — verification only.

- [ ] **Step 4.1: Resize Playwright to a small mobile viewport**

```
mcp__playwright__browser_resize: width=390, height=844
```

(390×844 = iPhone 14 Pro logical viewport.)

- [ ] **Step 4.2: Reload and screenshot the Venn area**

```
mcp__playwright__browser_navigate: http://localhost:3000/

mcp__playwright__browser_evaluate:
() => { const fc = document.getElementById('triple-brain-venn-caption'); fc?.scrollIntoView({ block: 'center' }); return { y: window.scrollY }; }

mcp__playwright__browser_take_screenshot: filename=venn-mobile.png
```

Expected in the screenshot:
- Venn diagram scales down to roughly ~280-340px wide (mobile container width minus gutters).
- All 3 circle labels remain inside their circles' non-overlap zones (Craft, AI, Vault still readable).
- "TRIPLE BRAIN MARKETING" caption remains centered below the diagram.
- No clipping at the left/right edges.

- [ ] **Step 4.3: Confirm no console errors at mobile viewport**

```
mcp__playwright__browser_console_messages: level=error
```

Expected: no errors related to the Venn component. (Pre-existing 500s on `_rsc=...` prefetches are unrelated; the relevant check is no `TripleBrainVenn`-related compile errors.)

---

## Task 5: Commit

**Files:** stage only the two files modified in tasks 1–2.

- [ ] **Step 5.1: Confirm working tree state**

Run:

```bash
git status --short src/
```

Expected output (additions/modifications you want to stage):

```
?? src/components/blocks/TripleBrainVenn.tsx
 M src/app/page.tsx
```

(Other unrelated `M`/`??` entries from prior sessions — `CLAUDE.md`, `src/content/testimonials.ts`, untracked `.md`/`.png` snapshots — are NOT staged.)

- [ ] **Step 5.2: Stage exactly the two task files**

```bash
git add src/components/blocks/TripleBrainVenn.tsx src/app/page.tsx
git status --short
```

Expected: only those two files appear with `A` / `M` markers in the staged column.

- [ ] **Step 5.3: Commit with Rob's git identity**

```bash
git -c user.email=rob@gofreelance.com commit -m "$(cat <<'EOF'
feat(home): add Triple Brain Marketing Venn diagram

Per offer brief 18.F: a 3-circle Venn (Craft / AI / Vault) with
"Triple Brain Marketing" caption below — placed on the home page
between the 3 brain cards and the canonical anchor-proof paragraph.
The diagram is a memorability device: visitors see the integration
claim that the cards explain in detail.

New component src/components/blocks/TripleBrainVenn.tsx is a
self-contained inline SVG wrapped in the existing FadeIn entrance.
No props, no data, no async. Colors come from CSS-variable design
tokens (--color-gold-400/500, --color-ink-950) defined in
globals.css to avoid Tailwind v4 fill-*/stroke-* utility-generation
edge cases.

Wiring in src/app/page.tsx is a one-line import + one-line insertion;
the wrap-up FadeIn delay bumps from 400 to 500 so the anchor-proof
paragraph + CTA button animate AFTER the Venn lands. Final entrance
sequence: cards (0/100/200) -> Venn (400) -> anchor-proof + CTA (500).

Visual-verified at desktop (1440x900) and mobile (390x844). Caption
renders, circles render, FadeIn sequence correct, no console errors.

Spec: docs/superpowers/specs/2026-05-06-triple-brain-venn-design.md
EOF
)"
```

- [ ] **Step 5.4: Verify the commit landed**

```bash
git log --oneline -1
```

Expected: a single new commit with the message starting `feat(home): add Triple Brain Marketing Venn diagram`.

- [ ] **Step 5.5: DO NOT push.**

Per the locked workflow: don't push to main without explicit OK from Rob. Stop here and tell Rob the commit is ready.

---

## Out of scope for this plan

- No dedicated unit test (per spec).
- No reuse on `/about` or other pages in this plan (component is reusable in principle).
- No theme variants (single appearance — gold-tinted circles on light backgrounds).
- No interaction states (no hover / click / focus).
- No `npm run build` (memory `feedback_no_build_during_dev.md`).
- No push to remote (must be explicitly authorized by Rob in a separate turn).

## Verification checklist (mirrors the spec)

After Task 4 completes successfully, the spec's verification checklist should be entirely satisfied:

| Spec item | Where verified |
|---|---|
| Renders below cards, before anchor-proof | Task 3.2 screenshot |
| Mobile viewport scaling | Task 4.2 screenshot |
| FadeIn sequence (cards → Venn → anchor-proof) | Task 3.3 |
| No console errors | Task 4.3 |
| `<title>` unchanged | Not changed — only `page.tsx`'s body JSX touched. Optional re-verify with `curl -s http://localhost:3000/ \| grep -oE "<title>[^<]+</title>"` if paranoid. |
| Caption present in rendered HTML | Task 2.4 |
