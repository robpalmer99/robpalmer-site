# Phase 1 — Booking "Last Mile" — Design Spec

**Date:** 2026-06-11
**Status:** Approved decisions; spec pending Rob's review
**Parent:** docs/reviews/2026-06-11-site-review.md (findings F1–F5, F9, F16, F17,
F20–F23, plus /call sitemap entry pulled forward from F12)

## Objective

Make `/call` the canonical booking endpoint and remove every verified friction
point between "visitor decides to book" and "call on the calendar." All
S-effort; no performance or content-program work (Phases 2–5).

## Locked decisions

| Decision | Choice |
|---|---|
| Canonical booking page | `/call` — all booking CTAs point here; `/contact` demoted to general inquiries |
| Calendly embed target | `https://calendly.com/rob-palmer-call/30min` (verified live, HTTP 200) |
| Calendly event display name | **Rob's side, prerequisite:** rename "30 Minute Meeting" → "Free Strategy Call (30 min)" in the Calendly dashboard |
| Public email (sitewide) | `rob@robpalmer.com` (already in constants/legal/schema; fix the one `rob@gofreelance.com` instance on /contact) |
| Phone | Drop entirely — remove from the Business Verification block and delete the unused `CONTACT_PHONE` constant |

## Changes

### 1. CTA repointing (F1)

Every booking-intent CTA targets `/call`:

- `Header.tsx` desktop CTA, `MobileNav.tsx` panel CTA, `Footer.tsx` (both links)
- Home hero `cta` (page.tsx:82) and any other home-page booking buttons
- `CTABanner.tsx` default `buttonHref` `/contact` → `/call` (automatically
  covers the closing banner on all 12 service pages, 6 vertical pages, and all
  149 blog posts)
- Service template hero CTA (`services/[slug]/page.tsx:103`)
- Vertical `heroCta` hrefs in `verticals/_data/verticals.ts` if they point to
  /contact ("Audit my X" labels stay)
- Any `midCta`/data-file hrefs in `services.ts`/`verticals.ts` pointing to
  /contact for booking intent
- Home FAQ "How do I get started?" — reword "through my contact page" and
  hyperlink `/call`; mirror the wording change in the FAQ JSON-LD if the
  schema is generated from the same string
- Blog in-body links: scripted sweep — links to `/contact` whose anchor text
  is booking-intent ("book a/your … call", "strategy call", "book a free
  strategy call") → `/call`. Generic "contact me/get in touch" links stay on
  `/contact` (it remains the general-inquiries page).

### 2. /contact demotion

`/contact` stays live (external links and ads keep working) but becomes the
general-inquiries page:

- Remove the Calendly embed from /contact. Add a prominent card/link at the
  top: "Ready to talk? Book your free strategy call →  /call" so anyone landing
  here with booking intent is one click away.
- Soften/remove the "Not ready for a call? No problem…" defer line (the form
  is now the page's primary action, so the framing flips: this page is FOR the
  form).
- Replace the "Who This Call Is For" section with inquiry-appropriate copy
  (the call-qualification content moves to /call — see §3).
- Business Verification block (F5): email → `rob@robpalmer.com`; phone line
  removed; block stays on /contact but moves below the form (trust noise off
  the primary action). Delete `CONTACT_PHONE` from constants.ts.

### 3. /call upgrades (F2, F3, F4)

- `CALENDLY_URL` (constants.ts:8) → `https://calendly.com/rob-palmer-call/30min`
  so the date picker renders immediately — no meeting-type menu.
- `CalendlyEmbed.tsx`: add `pageSettings={{ hideGdprBanner: true }}` to
  InlineWidget. **Verify visually** — the account-level Calendly cookie
  setting can override this; if the banner persists, change the setting in the
  Calendly dashboard (Rob's side).
- Add the capacity trio beside/above the embed, matching home-page wording
  exactly (Capacity: "small number of new engagements each quarter" /
  Timeline: kickoff within two weeks / Fit: engagements start at $10K, below
  that I'll refer you — no finder's fee). First person. Scarcity implied,
  never stated.
- Title fix (F17): drop the manual "| Rob Palmer" from /call and
  /call/confirmed metadata (the layout template appends it); retitle /contact
  to avoid "Contact Rob Palmer | Rob Palmer" adjacency while keeping the
  keyword first.
- Add /call to `sitemap.ts` staticPages (priority 0.9, monthly).

### 4. Label + copy consistency (F9, F16, F22, F23)

- Standardize booking CTA label on **"Book a Strategy Call"** everywhere; the
  mobile header compact button (new, see §5) may use "Book a Call" for space.
- Service-template closing `<CTABanner />` gets explicit props instead of the
  generic default — heading/subtext in the control-beater register (final
  wording at implementation, copychief-reviewed), button "Book a Strategy
  Call" → /call.
- Case-studies hub stat `'30+'` → `'40+'` (case-studies/page.tsx:40).
- Footer tagline: replace "AI-powered. Battle-tested." with the named
  mechanism — one sentence built from the home AI-Advantage section's
  canonical phrasing (Triple Brain: 40+ years of DR craft + Claude Code
  skills + the copywriting vault, behind $523M+ tracked results). Reuse the
  site's existing vault-size figure verbatim — do not introduce a new number.
- Justin Goff caption "Direct Marketer" → stronger credential in both
  page.tsx:142 and testimonials.ts id '3'. Proposed: "Co-founder, Copy
  Accelerator". **Rob to confirm accuracy at spec review** — if not exact,
  supply the credential he'd stand behind.

### 5. Accessibility + mobile affordance (F20, F21)

- `Button.tsx`: add `focus-visible:outline focus-visible:outline-2
  focus-visible:outline-offset-2 focus-visible:outline-gold-400` to base
  classes (ink-toned ring on the gold primary variant if gold-on-gold lacks
  contrast — judge in browser).
- Mobile header: compact gold "Book a Call" button beside the hamburger
  (logo left, button + hamburger right), → /call. Verify no wrap at 360px.

## Explicitly out of scope (later phases)

Wikipedia sameAs (F6), shadowed-post redirect (F7), www redirect (F8),
content-links/broken-link sweeps (F10–F11), tools+llms.txt+schema enrichment
(F12–F15), FadeIn/Calendly performance work (F25–F26), cannibalization (F27).
No deploy — changes land on `main`; deploying is a separate explicit decision.

## Verification

1. `npm run build` passes (no dev server running).
2. Dev-server browser review **before committing** (house rule for UI changes):
   /call (date picker immediate, no cookie banner, trio present), /contact
   (form-first, booking card, verification block clean), header/mobile-nav/
   footer CTAs, focus ring on tab.
3. Grep gate: zero booking-intent CTAs targeting /contact remain
   (components, data files, blog); /contact references that remain are
   deliberate general-inquiry links.
4. Playwright spot-check against the dev server at 390px: mobile header
   button, /call embed interactive.

## Risks

- Calendly account settings may override `hideGdprBanner` — verify, fall back
  to dashboard setting.
- Removing the /contact embed changes behavior for anyone with /contact
  bookmarked for booking — mitigated by the top-of-page booking card.
- 149-post scripted link sweep must not touch non-booking /contact links —
  the script matches on anchor text, and the diff gets eyeballed before commit.
