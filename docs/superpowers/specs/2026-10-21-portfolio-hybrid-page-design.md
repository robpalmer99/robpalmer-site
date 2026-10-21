# Portfolio Hybrid Sales Page — Design

**Date:** 2026-10-21
**Status:** Approved in brainstorming session; awaiting implementation plan
**Owner:** Rob Palmer

## 1. Why

`/portfolio` is the page AI assistants send buyers to. GA4 (property 266179141,
90 days to 2026-10-21): ChatGPT referred 71 sessions whose landing page was
`/portfolio`. They produced 10 key events, averaged 3m 40s, and 1.76 pages per
session; roughly two-thirds never viewed a second page. Google sent 52 sessions
to the same page and produced 0 key events. For the ChatGPT visitor, this page is
the whole pitch.

The page currently leaks that visitor. Its dominant action is the gold
"Browse My Portfolio" button to a Google Drive folder: 259 outbound clicks in 90
days. The folder has no positioning, no proof stack and no booking path. The
Calendly booking click (`calendly_click`) only fires on `/call`, so a visitor who
decides to book from Drive has to come back and find it.

The rewrite has two jobs: carry the sales argument on the page itself, and keep
the best samples on-site so the argument surrounds them.

Grok referrals do not appear in GA4 (Grok's fetcher does not identify itself and
its visitors land as "direct"), but they arrive with the same intent. The Calendly
form now asks "How did you hear about me?", so attribution improves from here.

## 2. Decisions taken (with Rob, 2026-10-21)

1. **Approach A: one proof-led page with embedded exhibits.** Not per-sample pages,
   not a pitch wrapper around the existing grid.
2. **Samples come on-site.** The six strongest pieces are shown as verbatim excerpts
   with the full Google Doc linked view-only. The Drive folder becomes a plain text
   "see everything" link under the grid. The gold Drive button is removed.
3. **Proof first, strategy second.** The page opens on results and the scripts (what
   the visitor was sent for), then explains that the copy only worked because of the
   research and angle selection behind it, and that this is what Rob sells now as
   creative strategy.
4. **No unsourced numbers.** A figure appears only if it is in a testimonial on the
   site or Rob has confirmed it in writing. Unconfirmed card figures are cut, not
   softened.

## 3. Facts the design rests on

- Samples exist as Google Docs in the public portfolio folder
  (`1ivFq-UhqthNnaGhlp6nJOc1G9s7H4iDI`): VSLs in "1. Video Sales Letters (VSLs)",
  TSLs in "2. Text Sales Pages (TSLs)", email sequences in "4. Email Campaigns".
  Excerpts can be copied verbatim.
- Two current cards do not match the files. "Abundant" is described as a
  manifestation info product; the Drive doc is "Abundant TSL (Female Hair Loss
  Supplement)". "Dynamic Brain" is labelled a VSL; the Drive doc is a TSL. Both
  descriptions are corrected as part of this work.
- Result figures on the current cards with no source on the site: $2.1M first 90
  days (Dynamic Brain), $800K in 60 days (Supernus), $1.4M in 6 months (Coffee
  Slimmer Pro), 3.2% cold CVR (Red Oak), 4.8% front-end (Biz-Op hybrid), 5.7%
  opt-in to sale (Monetari), 6.4% CVR (BodyHacker), 22% trial-to-paid (Chatterkick),
  340% ROAS (Abundant). Figures with a source on the site: "300% Return on Ad
  Spend" (testimonial 4, Ben Palmer, not tied to a named piece), "8% on cold
  traffic" (testimonial 5, Conor Reynolds, not tied to a named piece), $523M
  (Belron case study).
- Results-strip stats on the current page: "$523M+" (sourced), "1,200+ projects",
  "8%+ avg cold traffic CVR", "300%+ ROAS across campaigns" (the last three need
  Rob's confirmation or they go).

## 4. Page flow

Top to bottom. Section numbers are used in the plan.

1. **Hero** (`Hero` block, `variant="page"` or a bespoke hero if the page variant
   cannot carry two CTAs). Proof-first headline, one-paragraph first-person subhead:
   these are real scripts that sold, read them before you decide. Primary button to
   `/call`. Secondary link anchors to `#exhibits`. No price, no stated scarcity.
2. **Results strip.** The dark `CountUp` strip kept from the current page, reduced
   to the stats that survive section 3's rule.
3. **Exhibits** (`id="exhibits"`). Six `SampleExhibit` blocks. Each shows: title and
   format badge; a three-line brief (market, reader's awareness level, the angle
   chosen); the opening 150 to 250 words of the real script in a document-style
   frame; a result line with its source in small text; a "Read the full script"
   link to the Google Doc (`target="_blank" rel="noopener noreferrer"`). Layout
   alternates text-left/frame-right and the reverse on desktop; stacks on mobile.
4. **Mid-page CTA** after exhibit three. `CTABanner` variant gold: "Want this for
   your offer?" with the `/call` button.
5. **Why they worked.** Three short first-person paragraphs: the copy came after
   research and angle selection; that process is what I now sell as creative
   strategy; the Triple Brain stack is how it is produced today. Inline links to
   `/services/creative-strategist` and `/blog/triple-brain-marketing`.
6. **Testimonials.** Six quotes chosen for results and speed, referenced by ID from
   `src/content/testimonials.ts`, rendered with the existing testimonial card.
7. **Hiring FAQ** (`FAQAccordion`). Four questions: what you get, how long it takes,
   how we start, who it is not for. The disqualifier answer carries the capacity
   signal (implied, never "last copywriter taking clients").
8. **More samples.** The existing `PortfolioGrid` with the current twelve cards
   (descriptions corrected, unsourced result lines removed), headed "More samples",
   and under it a plain text link: "Everything, including ads and funnels, is in my
   portfolio folder" to the Drive URL.
9. **Closing CTA.** Default `CTABanner`.

The "Explore More" three-card section and the "Browse by Industry" chips are
dropped; the FAQ and the why-section link to services and verticals instead.

## 5. Shortlist of exhibits

| # | Exhibit | Format | Market | Drive doc | Proof to use |
|---|---|---|---|---|---|
| 1 | Puradrop | VSL | Health (ClickBank) | "Puradrop VSL (Weight Loss)" | Testimonial 4 (Ben Palmer, ClickBank Platinum Vendor: "300% Return on Ad Spend") **only if Rob confirms the quote is about Puradrop**; otherwise no figure |
| 2 | Coffee Slimmer Pro | VSL | Health (ClickBank) | "Coffee Slimmer Pro VSL (Weight Loss Supplement)" | Figure only if Rob confirms; else format + market only |
| 3 | Dynamic Brain | TSL | Health (Stonehenge Health) | "Dynamic Brain TSL (Brain Supplement)" | Figure only if Rob confirms |
| 4 | Red Oak Capital | VSL | Finance | "Red Oak Capital VSL (Financial)" is a Drive **shortcut to a file, not a Google Doc** | Testimonials 26 and 36 (Francis Fanzilli, Partner, Red Oak Capital) attribute the script to the client; no figure unless Rob confirms |
| 5 | Supernus | TSL | Legal | "Supernus TSL (Legal)" | Figure only if Rob confirms |
| 6 | Email sequence | Email | Coaching | "Anna Frummerin Email Follow-Up Sequence (Coaching)" | No figure. (No Chatterkick email doc exists in Drive; testimonial 22 from Chatterkick's CEO is about speed, not results, and goes in the testimonials section instead) |

Red Oak stays in the six only if the shortcut target opens as a readable script
(PDF or doc) that can be excerpted; its link text becomes "View the script". If
it is a video or cannot be excerpted, swap in "Gluco6 VSL (Blood Sugar/Diabetes
Supplement)" and the market mix becomes four health, one legal, one email.

Alternative for exhibit 6 if Rob prefers a supplement pairing: "Abandoned Cart
Emails (Brain Supplement)", which sits beside the Dynamic Brain TSL.

Rob confirms the figure column before implementation starts. Unconfirmed figures
are omitted from both the exhibit and the grid card. A testimonial quote is
attached to an exhibit only when the quote itself, or Rob, names that piece.

## 6. Data and components

**Data.** A new `featuredSamples: FeaturedSample[]` export in
`src/app/portfolio/_data/portfolio.ts`:

```
interface FeaturedSample {
  slug: string
  title: string
  format: 'VSL' | 'TSL' | 'Email'
  market: string                 // "Weight-loss supplement, ClickBank"
  awareness: string              // "Problem-aware, has tried other products"
  angle: string                  // one sentence, the angle chosen and why
  excerpt: string                // verbatim opening, 150–250 words, paragraph breaks as \n\n
  docUrl: string                 // Google Doc view link
  result?: { text: string; source: string }   // source: "Client testimonial" | "Client-reported, 2024" etc.
  testimonialId?: string         // optional pull-quote under the result
}
```

The excerpt is pasted in by hand from the Drive doc. The page never fetches Drive
at build or run time.

**Component.** `src/components/blocks/SampleExhibit.tsx`, server component, renders
one `FeaturedSample`. Props: `sample`, `index` (for alternation and FadeIn delay).
Document frame: white card, `border-paper-200`, serif body (`font-body`), a small
"Script excerpt" label, excerpt paragraphs, a fade at the bottom edge to signal
"continues". No `<li>` inside `FadeIn` (hydration rule).

Everything else reuses existing blocks: `Hero`, `CTABanner`, `FAQAccordion`,
the testimonial card, `PortfolioGrid`, `CountUp`, `Section`, `Container`, `FadeIn`.

**Page.** `src/app/portfolio/page.tsx` rewritten to the section order in §4.
Metadata: `title` leads with the keyword ("Copywriting Portfolio: VSL, Sales Page
& Email Samples"); description rewritten; canonical unchanged. JSON-LD: an
`ItemList` of `CreativeWork` entries for the six exhibits, plus the existing
breadcrumb. No `| Rob Palmer` suffix in the title (root template appends it).

## 7. Copy rules in force

- First person throughout the body. Third person only in metadata and schema.
- metaTitle leads with the primary keyword.
- No figure without a source (§2.4). Where a result is unconfirmed, the exhibit
  says what the piece was and who it was for, nothing more.
- Scarcity implied via the FAQ disqualifier and capacity language; never stated.
- No CA Labs lead; the Copy Chief credential may appear in a testimonial only.
- The `copywriting-lessons` skill is loaded before drafting; the draft runs through
  `direct-response-copy` and `copychief` before commit.
- No price figures anywhere on the page.

## 8. Measurement

- Outbound clicks to the docs are captured by GA4's enhanced measurement as `click`
  events with `link_url`, so per-exhibit readership is visible without new code.
- Booking intent stays on `/call` (`calendly_click`). No inline Calendly embed.
- Baseline to beat: ChatGPT-landing-on-`/portfolio` sessions produced 10 key
  events in the 90 days to 2026-10-21. Check at +4 weeks (2026-11-18).
- Vercel Web Analytics (enabled 2026-10-21) gives a second view of referrers for
  visitors who block GA.

## 9. Verification before commit

- `npm run build` clean (not while `next dev` is running).
- `scripts/smoke-repositioning.mjs` gets a `--slice 6` portfolio check: the page
  returns 200, contains the six exhibit titles, contains "Read the full script",
  and does not contain the old "Browse My Portfolio" button text.
- Dev-server review in the browser at 390px and 1280px for the exhibit layout.
- Deploy with `vercel deploy --prod --yes` only after the above, then verify the
  live URL.

## 10. Out of scope

Per-sample pages, gating of samples, redesign of the card grid or card component,
new imagery, changes to `/call`, changes to the Drive folder itself.
