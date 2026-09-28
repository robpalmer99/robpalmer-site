# /create — Outreach Landing Page for the Creative-Strategist Offer

**Date:** 2026-09-28
**Status:** SHIPPED 2026-09-28 — live at https://robpalmer.com/create (noindex, out of sitemap). Final structure diverged from this spec by Rob's direction during the copy phase: PAS frame (Andromeda monster problem → agitate → solution → three brains → scarcity → CTA) instead of the confirm-and-convert framing, single CTA in the final section only, logo subtitle CREATIVE STRATEGIST. Copy source of truth: `docs/copy/2026-09-28-create-page-copy.md`.

## Purpose

Destination page for recipients of the DTC teardown outreach system
(`~/dev/outbound-lead-generation/dtc/` — GetHookd lead engine + personalized
"Three Findings" spec teardowns). When a founder clicks `robpalmer.com` from
the cover email signature or teardown byline, they currently land on the
general copywriting homepage, which doesn't match the pitch they just read.
`/create` closes that gap.

**URL:** `https://robpalmer.com/create`

## The visitor and their state

- Founder / head of growth at a US DTC brand (Tier 1: supplements, health,
  skincare, medical) actively scaling paid social — 100–1,000 live Meta ads,
  rising traffic.
- **Not cold.** They have just read a free, deeply personalized teardown of
  their own funnel with the fixes written out. The teardown already proved
  competence on their property.
- They clicked to answer one question: *"Who is this guy, and is he real?"*
- They are skeptical old hands who receive cold pitches constantly. The page
  itself is evidence — they will read it as a sample of Rob's craft.

**Job of the page:** confirm and convert — not persuade from scratch. Confirm
the sender is a real senior operator who works with brands exactly like
theirs; convert to a booked call.

## Decisions (locked with Rob, 2026-09-28)

1. **Framing:** openly acknowledge the teardown journey ("I sent you a
   teardown of your funnel — this page is the 'who is this guy' answer").
2. **CTA:** book a call via `/call` (existing Calendly flow), with "or just
   reply to my email" as the low-friction secondary path.
3. **Offer scope:** the testing loop + conversion copy — creative strategy
   retainer mirroring the teardown's closing promise ("the testing loop, not
   just the writing"), for a small number of brands at a time.
4. **Pricing:** none on the page. Capacity framing does the filtering;
   pricing happens on the call.
5. **Copy standard:** the copy is a real DR project. Readers will judge it as
   a work sample, so it must win over skeptics and old hands. Full
   copywriting workflow applies (see below).

## Page structure (Option A — ~900–1,200 words, 6–7 sections)

1. **Hero** — headline speaking to the exact moment: they just read a
   teardown of their own funnel and clicked to vet the author. Sub-line names
   the offer (creative strategy + conversion copy for DTC brands scaling paid
   social). Primary CTA button.
2. **"Why you got that teardown"** — owns the method: Rob finds brands whose
   ads are outrunning their funnels and shows rather than tells. Disarms the
   "mass blast?" suspicion — hand-picked, personally written, no automation.
3. **The offer** — the testing loop: read the account, form hypotheses, write
   the briefs and pre-sell pages, direct AI-assisted production, read the
   results, repeat. DTC/supplement language (mechanisms, pre-sell pages,
   beat-the-control). Reuses the three-brains substance without the SEO-post
   framing.
4. **Proof stack** — dense and scannable: 40 years, $523M+ tracked,
   Apple/IBM/Microsoft/Citibank/Morgan Stanley, Stefan Georgi Copy Chief
   hire, Justin Goff quote, Ben Palmer (ClickBank Platinum) 300% ROAS, 3–4
   hand-picked testimonials from the site's 38.
5. **Who it's for / not for** — founder-run DTC at real ad spend; not for
   cheapest-hands shopping. Capacity implied ("a small number of brands at a
   time" — never stated scarcity).
6. **CTA close** — book the call via `/call` + "or just reply to my email."

Exact copy is NOT specified here — it gets written in the implementation
phase under the DR workflow below. Structure above is the brief, not the
draft.

## Copy workflow (binding)

The SessionStart lessons hook does not fire inside code projects, so load
manually, in this order, before drafting:

1. **`copywriting-lessons` skill** — load the full lessons file (rules +
   Why + How-to-apply), not just one-liners.
2. **`direct-response-copy` skill** — for the drafting itself.
3. Draft the page copy as a standalone markdown doc first (so it can be
   reviewed as copy, separate from the build).
4. **`copychief` skill pass** before the copy is considered final (per
   Rob's standing rule: copychief before committing major DR copy edits).
5. Rob reviews and approves the copy before it goes into the component.

Voice: first person ("I/my/you") throughout — this is Rob speaking directly.
Implied scarcity only. The page must read like the teardown did: specific,
confident, generous, zero AI tells.

## Technical implementation

- **Route:** `src/app/create/page.tsx` — a standalone one-pager.
- **Layout:** own minimal chrome, NOT the site Header/Footer. Logo mark
  linking quietly to `/` (due-diligence readers may want the full site — let
  them find it, don't push them), no nav otherwise, slim footer with legal
  links (privacy/terms) + real contact address footprint.
- **Branding:** full design-token system — `ink-*` / `gold-*` / `paper-*`
  colors, `font-heading` (Fraunces) + `font-body` (Lora). Existing `ui/`
  primitives (Section, Container, Button, FadeIn) where they fit; page reads
  as the same brand as robpalmer.com, just uncluttered.
- **Search visibility:** `robots: { index: false, follow: false }` in the
  route metadata; excluded from `sitemap.ts` and from all nav — the
  `/connect` pattern. Rationale: controlled direct-traffic pitch; avoids
  cannibalizing the creative-strategist SEO cluster.
- **Metadata:** metaTitle/description still written properly (the tab title
  is visible to the visitor), canonical set to itself.
- **Images:** hero/portrait imagery only if it earns its place; any image via
  Next `<Image>` with explicit `sizes`. Blog hero-image pipeline
  (`gpt_image.py` + magick) available if needed.
- **Accessibility/contrast:** `text-gold-600` for link text, `text-paper-600`
  for secondary text (WCAG AA, per project conventions).
- **FadeIn caution:** never wrap `<li>` inside `<ul>` (known hydration
  failure); follow the Services pattern.
- **Verification:** check no `next dev` is running before `npm run build`;
  clean build required; dev-server browser review before commit (standing
  rule for UI changes); deploy at agent discretion once approved.

## Follow-up (separate repo, after page is live)

Update the outreach templates in `~/dev/outbound-lead-generation/dtc/` so the
cover-email signature and teardown byline link to `robpalmer.com/create`
(display text can stay `robpalmer.com` — decide at edit time with Rob).
Liquid+ and Primal Storm docs regenerate via `md2docx` if not yet sent.

## Out of scope

- Writing/revising the outreach emails themselves (already exist per-lead).
- Any changes to the creative-strategist blog cluster or SEO pages.
- Pricing content, forms, or any new backend.

## Success criteria

- Page live at `/create`, noindexed, absent from sitemap and nav.
- Copy has passed copywriting-lessons + copychief workflow and Rob's
  approval.
- Clean `npm run build`; page visually reviewed in dev server before commit.
- A teardown recipient landing on the page sees an immediate continuation of
  what they just read, with one obvious action: book the call.
