# Product

## Register

brand

## Users

Founders, marketing leads, and growth operators at ClickBank, DTC, SaaS, and info-product companies who need a senior direct-response copywriter to engineer measurable conversion lift on VSLs, TSLs, email sequences, and full funnels. Secondary audience: agency owners and creative directors looking for veteran DR craft they can sub-contract or partner with, plus a long-form blog readership of working copywriters and operators researching DR tactics, rates, and AI-assisted workflows.

Visitors arrive from three lanes: (1) referral and word-of-mouth from past clients, looking for receipts and to book a call; (2) organic search on long-tail copywriting topics, landing on a blog post and discovering Rob; (3) curious skeptics evaluating whether the "AI-powered direct-response copywriter" pitch is real or hype. The site has to satisfy all three on the same surface.

## Product Purpose

The site is the senior portfolio, proof archive, and lead funnel for Rob Palmer's direct-response copywriting practice. It exists to convert qualified inbound interest into a booked strategy call — and, equally, to give away enough strategic value (105 long-form posts, free Claude Code copywriting skills, frameworks) that the visitor leaves convinced Rob has done the reps even if they never book.

Success looks like: a steady stream of qualified strategy-call bookings; sustained organic traffic to the blog from copywriters and operators; and zero visitor confusion about who Rob is, what he does, and why $523M+ in tracked revenue is the floor of the case.

## Brand Personality

**Three words: Veteran. Editorial. Earned.**

Voice is calm, direct, and load-bearing — the voice of someone who has written for Apple, IBM, Microsoft, and Citibank, was the world's first blogger in 1993, and now wields AI as a force multiplier rather than a gimmick. No screamer headlines, no scarcity timers, no urgency bait. The copy itself models the discipline being sold: every word earns its place, claims arrive with receipts, and the writing is the proof of the writing.

The interface should feel like a serious editorial publication that happens to convert — Harper's or The Atlantic, not a ClickFunnels template. Warm paper, deep ink, burnished gold for trust signals. Confidence without volume.

## Anti-references

The site must explicitly NOT feel like:

- **The ClickFunnels / guru-coach landing page** — giant headshot stack, red-and-yellow screamer headlines, scarcity countdowns, green-checkmark bullet pyramids, "secret" callouts, fake urgency. (Rob writes pages like that for clients when the market demands it; his own brand surface must not look like one.)
- **The generic SaaS landing page** — purple-to-pink gradient hero, animated blob backgrounds, hero-metric template (big number / small label / supporting stat in three identical cards), glassmorphic feature cards, "Built with [stack] icons" trust bar.
- **The AI-agency aesthetic** — dark-mode-by-default with neon purple/cyan accents, holographic gradients, generative-art mesh backgrounds, "AI-powered" as the visual identity rather than the proof point.
- **The agency-template look** — identical 3-column card grids, full-bleed stock photography of laptops, "We are a team of passionate creators" sections, generic icon sets in pastel circles.
- **AI slop typography** — gradient text effects, side-stripe colored borders on cards, decorative-only blurred glass, modal-first interactions.

## Design Principles

1. **Practice what you preach.** Rob is a direct-response copywriter — his own site must out-perform the average client site on clarity, hierarchy, and conversion. If the design or copy feels lazy, the offer falls apart.

2. **Receipts before claims.** Every assertion ("$523M+ tracked", "Fortune 500", "30+ years", "38+ testimonials") is anchored to a number, a logo, a name, or a case study. Numbers carry weight; adjectives don't.

3. **Editorial confidence over marketing volume.** Serif display type, generous body measure, warm paper, restrained accents. The aesthetic of a serious publication communicates "I read deeply and write deliberately" — which is what the offer actually is.

4. **Long-form is the product.** 105 blog posts, multiple service pages, deep case studies. Body typography, line-length, and mobile readability are first-class concerns, not afterthoughts.

5. **Triple Brain Marketing as the USP backbone.** The differentiator is the stack: 40+ years of DR expertise + Claude Code copywriting skills (open-sourced, free) + a proprietary Copywriting Vault. Every primary surface should make at least one of those three legs legible.

6. **Gold is rare; ink is abundant.** Gold-400/500 is the trust accent — used for ROI numbers, primary CTAs, and link emphasis. Used everywhere it loses its meaning. Ink and paper carry the load; gold is the underline.

## Accessibility & Inclusion

- **WCAG 2.2 AA** is the floor. Body and meta text must hit 4.5:1 contrast (this is why CLAUDE.md mandates `text-paper-600` for meta and `text-gold-600` for card link text — the lighter variants fail).
- **Body text ≥18px on mobile.** Long-form content is the product; small body text is a tax on readers with average vision and a hard fail for older readers (a meaningful slice of the DR audience).
- **`prefers-reduced-motion` is honored** — animations clamp to 0.01ms, scroll-behavior reverts to auto.
- **Focus-visible indicators on every interactive element**, with a visible 2px gold outline and 2px offset (already implemented in `globals.css`).
- **Skip-to-main-content link** at the top of every page (already implemented).
- **Headings remain semantic** — never reduce h2 to h3 just for size; use class-based scale instead.
