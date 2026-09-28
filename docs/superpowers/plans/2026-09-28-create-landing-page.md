# /create Outreach Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship the confirm-and-convert one-pager at robpalmer.com/create for DTC teardown-outreach recipients, with copy produced under the full DR workflow.

**Architecture:** Copy-first. The page copy is drafted and copychief'd as a standalone doc with Rob review gates BEFORE any component is built. The page itself is a single server component using the /connect fixed-overlay pattern (covers the global Header/Footer without touching the root layout), styled entirely with the existing design-token system. No sitemap change needed — `src/app/sitemap.ts` is an explicit allowlist.

**Tech Stack:** Next.js App Router (server component), Tailwind design tokens (ink/gold/paper), Fraunces/Lora via existing CSS vars, existing ui primitives (Container, Button, Logo, FadeIn).

**Spec:** `docs/superpowers/specs/2026-09-28-create-landing-page-design.md` — read it first.

**⚠️ Human gates:** Tasks 1, 2 and 5 end with a STOP for Rob's review. Do not proceed past them without his explicit approval. The copy is the product here — readers judge this page as a sample of Rob's craft.

---

### Task 1: Draft the page copy (DR workflow)

**Files:**
- Create: `docs/copy/2026-09-28-create-page-copy.md`

- [ ] **Step 1: Load the copywriting skills (hook did not fire)**

The SessionStart lessons hook does not fire inside code projects. Load manually, in order, and say in your update that the hook did not fire:

1. Invoke the `copywriting-lessons` skill — read the FULL lessons file (rules + Why + How-to-apply), not just the injected one-liners.
2. Invoke the `direct-response-copy` skill.

- [ ] **Step 2: Read the source material**

Read all of these before writing a word:

- `/Users/robpalmer/dev/outbound-lead-generation/dtc/outreach/liquidplus/teardown-liquid-plus.md` and `cover-email-alan.md` — the voice, generosity and specificity the page must continue. Also read the Primal Storm pair in the sibling folder.
- `/Users/robpalmer/dev/outbound-lead-generation/dtc/README.md` — who the leads are (founder-run US DTC, supplements/health/skincare, 100–1,000 live Meta ads, scaling).
- `/Users/robpalmer/dev/robpalmer-site/src/content/blog/hire-a-creative-strategist.mdx` — proof points and the three-brains substance (do NOT reuse its SEO-guide framing).
- `/Users/robpalmer/dev/robpalmer-site/src/content/testimonials.ts` — pick 3–4 testimonials that land hardest with a skeptical DTC founder (favor named DR operators and results language over generic praise).
- `/Users/robpalmer/dev/robpalmer-site/src/app/about/page.tsx` — skim for how proof is currently phrased, to stay factually consistent.

- [ ] **Step 3: Write the copy doc**

Write `docs/copy/2026-09-28-create-page-copy.md` containing complete, final-candidate copy for all sections, in this structure (from the spec):

1. **Hero** — speaks to the exact moment: they just read a teardown of their own funnel and clicked to vet the author. 2–3 headline options for Rob to choose from, each with sub-line and CTA button label.
2. **Why you got that teardown** — owns the method; disarms "mass blast?" suspicion (hand-picked, personally written, no automation).
3. **The offer** — the testing loop, not just the writing: read the account, form hypotheses, write the briefs and pre-sell pages, direct AI-assisted production, read the results, repeat. DTC/supplement language (mechanisms, pre-sell pages, beat-the-control).
4. **Proof stack** — 40 years; $523M+ tracked; Apple/IBM/Microsoft/Citibank/Morgan Stanley; Stefan Georgi Copy Chief hire; Justin Goff quote; Ben Palmer (ClickBank Platinum) 300% ROAS; the 3–4 chosen testimonials with attribution exactly as in `testimonials.ts`.
5. **Who it's for / not for** — founder-run DTC at real ad spend; not cheapest-hands shopping. Capacity implied ("a small number of brands at a time") — NEVER stated scarcity.
6. **CTA close** — book the call (links to `/call`) + "or just reply to my email" secondary line.

Constraints (binding):
- First person throughout ("I/my/you") — Rob speaking directly.
- ~900–1,200 words total. Every sentence must survive an old hand's skim.
- Zero AI tells. Match the teardown's register: specific, confident, generous.
- All proof claims must match existing site phrasing (no new numbers).
- Include a `## Meta` section: page `<title>` (visible in the tab — lead with what the visitor cares about, e.g. "Creative Strategy for DTC Brands | Rob Palmer") and meta description.

- [ ] **Step 4: Commit the draft**

```bash
git add docs/copy/2026-09-28-create-page-copy.md
git commit -m "copy(create): first draft of /create page copy"
git push
```

- [ ] **Step 5: STOP — Rob reviews the draft**

Present the draft (including the headline options) and wait. Apply his edits to the doc, commit each revision round, and only move to Task 2 when he says the draft is ready for copychief.

---

### Task 2: Copychief pass

**Files:**
- Modify: `docs/copy/2026-09-28-create-page-copy.md`

- [ ] **Step 1: Run the copychief skill**

Invoke the `copychief` skill on `docs/copy/2026-09-28-create-page-copy.md`. Scope: full review at sales-page depth. Expect 6–8 high-impact lifts (this is the norm on first drafts per Rob's standing rule).

- [ ] **Step 2: Apply the lifts**

Apply accepted lifts directly to the copy doc. Note any lift you deliberately reject and why.

- [ ] **Step 3: Commit**

```bash
git add docs/copy/2026-09-28-create-page-copy.md
git commit -m "copy(create): copychief pass applied"
git push
```

- [ ] **Step 4: STOP — Rob approves final copy**

Show Rob the copychief findings, what was applied/rejected, and the final copy. Do not start Task 3 until he approves.

---

### Task 3: Build the page component

**Files:**
- Create: `src/app/create/page.tsx`

- [ ] **Step 1: Write the component**

Create `src/app/create/page.tsx`. Structure below is complete except the copy strings, which MUST be transplanted **verbatim** from the approved `docs/copy/2026-09-28-create-page-copy.md` (marked `{/* COPY DOC: section N */}`). Do not rewrite, tighten, or "improve" approved copy during the build.

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'

// Outreach landing page for the DTC teardown system — unlisted, noindex,
// standalone chrome. Same fixed-overlay pattern as /connect: covers the
// root layout's Header/Footer and owns its own scroll context.

export const metadata: Metadata = {
  title: { absolute: 'PLACEHOLDER — title from copy doc ## Meta' },
  description: 'PLACEHOLDER — description from copy doc ## Meta',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://robpalmer.com/create' },
}

export default function CreatePage() {
  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto bg-paper-50">
      {/* Root layout renders Header/Footer; the overlay covers them and
          body-scroll lock removes the phantom scroll behind it. */}
      <style>{`body { overflow: hidden; }`}</style>

      {/* Minimal chrome: logo only, quietly linking home for due-diligence readers */}
      <header className="py-6">
        <Container>
          <Link href="/" className="inline-block">
            <Logo className="h-9 w-auto" />
          </Link>
        </Container>
      </header>

      {/* 1. Hero — COPY DOC: section 1 (Rob's chosen headline) */}
      <section className="bg-ink-950 text-paper-100 noise-overlay py-20 md:py-28">
        <Container>
          <FadeIn immediate>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl">
              {/* headline */}
            </h1>
            <p className="font-body mt-6 text-xl text-paper-300 max-w-2xl">
              {/* sub-line */}
            </p>
            <div className="mt-10">
              <Button href="/call" size="lg">{/* CTA label */}</Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* 2. Why you got that teardown — COPY DOC: section 2 */}
      {/* 3. The offer / testing loop — COPY DOC: section 3 */}
      {/* 4. Proof stack — COPY DOC: section 4 */}
      {/* 5. For / not for — COPY DOC: section 5 */}
      {/* 6. CTA close — COPY DOC: section 6, Button href="/call" */}

      {/* Slim footer */}
      <footer className="bg-ink-900 text-paper-300 py-8">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <p>© {new Date().getFullYear()} Rob Palmer · rob@gofreelance.com</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-paper-100">Privacy</Link>
              <Link href="/terms" className="hover:text-paper-100">Terms</Link>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  )
}
```

Layout rules for sections 2–6 (follow existing site patterns — check `src/app/about/page.tsx` for reference):
- Alternate section backgrounds for rhythm: `bg-paper-50` / `bg-gradient-to-b from-paper-100 to-paper-50`; proof stack may use the dark `bg-ink-950 text-paper-100 noise-overlay` treatment for contrast.
- Headings `font-heading`, body `font-body`. Secondary text `text-paper-600` on light / `text-paper-300` on dark. Link text `text-gold-600` on light.
- Testimonial cards: `rounded-xl border border-paper-200 bg-white shadow-sm` on light backgrounds.
- `FadeIn` with `delay={index * 80}` for staggered card reveals. **Never wrap `<li>` elements inside a `<ul>` with FadeIn** — known hydration failure that locks the page at opacity 0. Wrap the whole list or use divs, copying the Services pages' pattern.
- Both CTAs (hero + close) point at `/call`. Secondary "reply to my email" is plain text with a `mailto:rob@gofreelance.com` link styled `text-gold-600`.
- No images unless one earns its place (the clean headshot `/images/headshots/rob-palmer-clean.png` in the proof or "why" section is the only candidate). If used: Next `<Image>` with `fill` + `object-cover` + explicit `sizes`.
- Replace BOTH metadata placeholders with the copy doc's `## Meta` values before committing — grep the file for `PLACEHOLDER` and expect zero hits.

- [ ] **Step 2: Verify no placeholders and lint**

```bash
grep -n "PLACEHOLDER\|COPY DOC" src/app/create/page.tsx
```
Expected: no `PLACEHOLDER` hits (section comments may remain only if the copy is actually in place under them; prefer removing them).

```bash
npx next lint --file src/app/create/page.tsx 2>/dev/null || npx eslint src/app/create/page.tsx
```
Expected: no errors.

- [ ] **Step 3: Production build (guard the dev server first)**

```bash
pgrep -fl "next dev" || echo "no dev server — safe to build"
```
If a dev server is running, kill it first (`pkill -f "next dev"`) — building alongside `next dev` corrupts `.next/` and serves HTTP 500.

```bash
npm run build
```
Expected: build succeeds; route list includes `/create` as a static route (○).

- [ ] **Step 4: Verify sitemap and robots exclusion**

`src/app/sitemap.ts` is an explicit allowlist — `/create` must NOT be added. Verify:

```bash
grep -rn "create" src/app/sitemap.ts src/lib/constants.ts | grep -v "changeFrequency" || echo "clean — /create not in sitemap or nav"
```
Expected: no matches referencing the `/create` route.

- [ ] **Step 5: Commit**

```bash
git add src/app/create/page.tsx
git commit -m "feat(create): outreach landing page for the DTC creative-strategist pitch"
git push
```

---

### Task 4: Visual verification

**Files:** none created — screenshots to scratchpad only.

- [ ] **Step 1: Start the dev server**

```bash
npm run dev
```
(background; note the port, usually 3000)

- [ ] **Step 2: Playwright pass — desktop and mobile**

Using the Playwright MCP tools: navigate to `http://localhost:3000/create`, take full-page screenshots at 1440×900 and 390×844. Check:
- No site Header/nav visible; page scrolls smoothly inside the overlay.
- Nothing stuck at opacity 0 (the FadeIn/hydration failure mode).
- `<title>` matches the copy doc's Meta; view source shows `noindex` robots meta.
- Both CTA buttons navigate to `/call`.
- No horizontal scroll on mobile; contrast conventions respected.

- [ ] **Step 3: STOP — Rob's browser review**

Leave the dev server running and hand over: "Page is up at http://localhost:3000/create — please review in the browser." (Standing rule: UI changes get a dev-server review before the work is called done.) Apply any visual/copy tweaks he requests, re-verify, commit each round.

---

### Task 5: Deploy and verify live

- [ ] **Step 1: Clean build + deploy**

Kill the dev server first, then:

```bash
pkill -f "next dev"; npm run build && vercel deploy --prod --yes
```
Expected: build passes, deploy completes with a production URL. (Agent-discretion deploys are allowed on this project; the Vercel MCP `deploy_to_vercel` tool does NOT actually deploy — use the CLI.)

- [ ] **Step 2: Verify live**

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://robpalmer.com/create
curl -s https://robpalmer.com/create | grep -o '<meta name="robots"[^>]*>'
curl -s https://robpalmer.com/sitemap.xml | grep -c "/create" || echo "0 — correctly absent"
```
Expected: `200`; robots meta contains `noindex`; sitemap count `0`.

- [ ] **Step 3: Update the spec status and memory**

Mark the spec's Status line as shipped with the date. Update the auto-memory project file for the creative-strategist push (`project_creative_strategist_seo.md` or a new `project_create_page.md`) with: /create live, noindex, purpose, and the follow-up below.

```bash
git add docs/superpowers/specs/2026-09-28-create-landing-page-design.md
git commit -m "docs(spec): mark /create shipped"
git push
```

---

### Task 6: Repoint the outreach links (outbound-lead-generation repo)

**Files (in `/Users/robpalmer/dev/outbound-lead-generation/`):**
- Modify: `dtc/outreach/liquidplus/cover-email-alan.md`
- Modify: `dtc/outreach/liquidplus/teardown-liquid-plus.md`
- Modify: `dtc/outreach/primalstorm/cover-email-yente.md`
- Modify: `dtc/outreach/primalstorm/teardown-primal-storm.md`

- [ ] **Step 1: Confirm send status with Rob**

Ask Rob whether either outreach has already been sent. Already-sent material is NOT edited; the change applies to unsent docs and all future teardowns.

- [ ] **Step 2: Update the links**

In each unsent doc, change the signature/byline `robpalmer.com` references to link to `/create`. Keep the display text `robpalmer.com` (cleaner in a signature); make the hyperlink target `https://robpalmer.com/create`. In markdown: `[robpalmer.com](https://robpalmer.com/create)`.

- [ ] **Step 3: Regenerate the .docx deliverables**

```bash
~/dev/bin/md2docx "dtc/outreach/liquidplus/teardown-liquid-plus.md" "dtc/outreach/liquidplus/Liquid Plus - Three Findings - Rob Palmer.docx"
~/dev/bin/md2docx "dtc/outreach/primalstorm/teardown-primal-storm.md" "dtc/outreach/primalstorm/Primal Storm - Three Findings - Rob Palmer.docx"
```
Expected: both succeed with the wrapper's bookmark check passing.

- [ ] **Step 4: Note the rule for future teardowns**

Append one line to `dtc/README.md` step 4 (Enrich & act): teardown bylines and cover-email signatures link to `https://robpalmer.com/create` (display text `robpalmer.com`).

- [ ] **Step 5: Commit**

```bash
cd /Users/robpalmer/dev/outbound-lead-generation
git add dtc/
git commit -m "dtc/outreach: signature + byline links point at robpalmer.com/create"
git push
```
