# Creative-Strategy Repositioning — Design

**Date:** 2026-10-19
**Status:** Approved in brainstorming session; awaiting implementation plan
**Owner:** Rob Palmer

## 1. Why

robpalmer.com was built to sell direct-response copywriting. In 2026 the market for
that service moved: DTC brands scaling on Meta now hire *creative strategists* (angle,
hook, brief, test, iterate) rather than copywriters who deliver one asset. Rob's
lead-generation effort (`~/dev/outbound-lead-generation/dtc/`, the `/create` lander)
already sells the creative-strategist retainer. The site does not.

The site must lead on creative strategy so that anyone searching for a creative
strategist (freelancer or agency) feels they are in the right place on the home page,
without alienating a direct-response-copywriting buyer and without discarding the
copywriting content and rankings built since 2026-05.

### What the data says about the risk

GSC, 90 days to 2026-10-19, home page only: nearly all impressions and clicks were
name searches ("rob palmer" 357 imp / 34 clicks; "rob palmer copywriter" 83 / 35 at
position 1.2). "direct response copywriter" sent the home page 4 impressions. The DR
rankings sit on `/services/direct-response-copywriter`,
`/blog/best-direct-response-copywriter-to-hire`, `famous-copywriters`, and the 43 posts
that link to the money page. The home page can be repositioned hard without touching
those rankings, provided those pages and the links into them are preserved.

## 2. Decisions taken (with Rob, 2026-10-19)

| # | Decision | Choice |
|---|----------|--------|
| 1 | What a creative-strategy client buys | A mix: creative strategy is the core; Rob's breadth (copy, funnel, video, AI workflow) is the proof he can carry strategy through to shipped creative |
| 2 | Primary buyer for the home page | DTC / e-commerce operators running Meta. Offer owners / affiliates and agencies / in-house teams are served below the fold |
| 3 | Triple Brain Marketing | Demoted from the hero to **the mechanism** ("why the creative wins"); Venn, blog post and FAQ retained, brains renamed |
| 4 | Freelancer vs agency framing | **One senior strategist with studio-level output.** "I" voice. The person who makes the decisions does the work; the AI production stack supplies agency-scale volume without junior layers |
| 5 | Scope | **Full repositioning sweep** (home, new service page, services index, all six verticals, About, global metadata/schema, nav, blog cross-links). Rob accepts some ranking risk; long-term positioning wins |
| 6 | Structure | **Umbrella repositioning.** Creative strategy is the role; all copywriting services become what Rob produces in service of it. No URL changes anywhere |
| 7 | Hero tone | Positive: "Creative Strategy for Brands Ready to Scale" — not pain-led |
| 8 | Stefan Georgi / CA Labs | Do not **lead** on it or credit the Triple Brain system with the hire (Stefan hired Rob personally; CA Labs is a competitor). Stefan as a testimonial, peer endorsement, or one credential among several is fine |
| 9 | Engagement shape and price | Retainers sought, projects expected first. Page says "retainer or project, whichever fits; fixed-price quote after the call". **No figures anywhere on commercial pages** — the "$10K" floor is removed |
| 10 | Site-wide title suffix | `Rob Palmer \| Creative Strategist & Direct-Response Copywriter` |

## 3. Non-goals

- No slug changes, no redirects, no page consolidation (the "clean break" option was rejected).
- The ten copywriting service pages keep their metaTitles, section bodies and FAQs.
- The `/create` outreach lander stays noindex and unchanged.
- The `/connect` page stays unlisted (standing rule).
- Blog posts are not rewritten; only links and author-box price lines change.
- No new components. Everything uses `Hero`, `DetailPageLayout`, `ServiceCard`, `Section`, `Container`, `FadeIn`, `Badge`, `Button`, `CTABanner`, `FAQAccordion`, `TripleBrainVenn`.

## 4. Home page (`src/app/page.tsx`)

**Job.** A DTC operator reads the role word within a second, sees the market shift
named, and sees proof Rob carries strategy through to shipped creative. A DR operator
arriving on a referral or a name search finds the copywriting proof, the service grid
and the DR money page within one scroll. Everything a name-searcher recognises stays:
headshot, $523M, peer strip, Triple Brain.

**Section order** (► = changed):

1. ► **Hero.** H1 in the family of "Creative Strategy for Brands Ready to Scale".
   Subheadline: one senior strategist who does the research, angles, scripts, statics
   and landers himself, with 40 years of direct response and an AI production stack
   behind him. Proof line: "$523M in tracked results." No CA Labs line. CTAs unchanged
   (Book a Strategy Call → `/call`; See Case Studies → `/case-studies`). Image alt
   "Rob Palmer, creative strategist". The capacity line under the CTAs stays
   ("Selective engagements. Fixed-price, custom-quoted. No hourly billing.").
2. **ClientLogoBar, StatsBar.** Unchanged (`STATS` in constants untouched).
3. **Peer endorsement strip.** Unchanged people and quotes (Stefan, Justin, Ben).
   Ben's "300% Return on Ad Spend" now also speaks DTC vocabulary.
4. ► **New section: "Strategy through to shipped creative."** Four stages as cards or a
   row: research & angles → briefs, scripts, statics, video → landers & advertorials →
   testing & iteration. One line: clients enter at any stage. Below: the agency
   comparison in 2–3 sentences (no account manager, no junior team; the person who
   makes the decisions makes the work). Built from `Section`/`Container`/`FadeIn`
   with the standard card classes; `FadeIn` wraps the card inside `<li>`, never the
   `<li>` itself.
5. ► **Triple Brain, reframed as mechanism.** Same layout, Venn and blog link. Brains
   renamed: *Strategy brain* (40 years of DR pattern recognition), *Production brain*
   (Claude Code with my skills; script → video → page), *Knowledge brain* (the
   1,239-file vault). Intro line changes from "You don't need a copywriter…" to the
   why-the-creative-wins frame. Compounding-results paragraph and GitHub/blog links
   retained.
6. ► **Problem/solution, rewritten around the shift.** Replaces "Most Copywriters Write
   Content. I Architect Conversions." Argument: creative is now the lever (volume,
   speed, angle breadth); most creative strategists brief and hand off; most
   copywriters write one asset at a time; the edge is a strategist with DR craft who
   also produces. Pain lives here, not in the H1. Ends with "Read my full story →".
7. ► **Before you book.** Capacity and Timeline bullets unchanged. **Fit** bullet
   rewritten without a figure: retainer or project, whichever fits; fixed-price quote
   after the call. The "I'd rather refer…" line becomes "…than ship creative that
   won't beat your control."
8. ► **Services grid.** Heading in the strategy-first frame. Cards come from data:
   the `strategy` tier first, then `production` services, capped at six, which
   yields: Creative Strategist, AI Marketing Consultant, Conversion Rate
   Optimization, Direct Response Copywriter, VSL Copywriter, Sales Page Copywriter.
   (Order inside each tier = array order.) The DR money page keeps its exact-anchor
   card link from the home page.
9. ► **Verticals grid.** Heading "Markets I know". Order: DTC, Health Supplement,
   ClickBank, Financial, SaaS, Info Product. `VERTICAL_TAGLINES` rewritten in
   strategy language. Slugs untouched. Title display keeps `.replace(' Copywriter', '')`.
10. **Case studies.** Unchanged.
11. ► **CTABanner.** Strategy call about your creative, not "your funnel".
12. **Testimonials.** Same three IDs ('2', '3', '4').
13. ► **AI section.** Structure and the output-proof box kept. Narrative softened from
    "companies fired copywriters" to "AI-only creative flooded Meta and stopped
    working". The three bullets kept.
14. ► **FAQ** (10 items, schema regenerates from the array):
    1. What does a creative strategist do, and how is that different from a copywriter?
    2. Do you also write the copy and produce the creative?
    3. Freelancer or agency — which are you?
    4. What is Triple Brain Marketing? (existing answer, CA Labs sentence removed)
    5. Are you taking new clients? (existing; keep scarcity implied)
    6. How much does it cost? (no figure; retainer or project; fixed-price quote)
    7. What industries do you work with? (existing, DTC first)
    8. How do you use AI? (existing)
    9. What results can I expect? (existing)
    10. How do I get started? (existing)

**Metadata.** `title: 'Creative Strategist & Direct-Response Copywriter | Rob Palmer'`;
description rewritten in the same frame with the $523M proof, no CA Labs.

## 5. New service page: `/services/creative-strategist`

**Role.** The money page for the creative-strategist role, equal in weight to the DR
money page. Target of the home hero, services grid, nav, `llms.txt`, and the three
creative-strategist blog posts. The blog posts keep their informational jobs
(what-is, how-to-hire, salary); commercial intent moves here.

**Data.** A new entry **first** in the `services` array in
`src/app/services/_data/services.ts`, rendered by the existing `[slug]` route and
`DetailPageLayout` in the consultancy shape (`heroStats` + `credentialBar` +
`definition`).

| Field | Content |
|-------|---------|
| `title` / `slug` | Creative Strategist / `creative-strategist` |
| `tier` | `strategy` (new field, §6) |
| `metaTitle` | `Creative Strategist for DTC Brands \| Rob Palmer` |
| `metaDescription` | Role, stage-to-stage scope, Meta/DTC, $523M, 40 years. ≤155 chars |
| `headline` / `subheadline` | Positive frame, same family as the home hero; one strategist from angle to shipped creative |
| `definition` | GEO answer block: "A creative strategist…" in two sentences, consistent with `/blog/creative-strategist`'s definition |
| `heroStats` | primary $523M+ tracked; secondary 40+ years, 300% ROAS (Ben Palmer), 190+ frameworks |
| `credentialBar` | Markets/platforms: DTC & e-commerce, Meta & YouTube, supplements, ClickBank, SaaS, info products, in-house teams |
| `sections` (5) | (1) Why creative is now the lever (Andromeda, creative velocity, the brief-and-hand-off gap). (2) What I do, stage by stage; enter at any stage. (3) The direct-response difference: angles from awareness levels, hooks from proven lead types, landers that match the ad. (4) How an engagement runs: retainer or project; cadence; fixed-price quote after the call; no figures. (5) Proof: case studies + Ben's ROAS; Stefan may appear as a client/testimonial, not as the lead |
| `deliverables` | Angle map & research brief; creative brief set; scripts & statics; video (AI-produced through the studio stack); landers & advertorials; testing plan & iteration cadence |
| `testimonialIds` | Ben Palmer ('4') first; two further DTC/ROAS-flavoured IDs chosen at implementation from `src/content/testimonials.ts` |
| `portfolioItems` | 3 items in Meta-ad / advertorial / lander categories |
| `faqs` (10) | what a creative strategist does; difference from a copywriter; difference from an agency; do you produce as well as plan; which platforms; how many creatives per month; how success is measured; pricing shape (no figure); how we start; do you work with in-house teams |
| `relatedServices` | `direct-response-copywriter`, `ad-copywriter`, `facebook-ads-copywriter`, `ai-marketing-consultant`, `conversion-rate-optimization` |
| `relatedVerticals` | `ecommerce-dtc-copywriter` first, then `health-supplement-copywriter`, `clickbank-copywriter` |
| `heroImage` | New 1200×800 JPEG at `/images/services/creative-strategist.jpg`, generated via `~/.claude/skills/tools/openai/gpt_image.py` + `magick` resize (the banana MCP is unreliable) |
| `midCta` | Strategy-call CTA in the retainer-or-project frame |

**Links in.**
- `src/lib/content-links.ts`: the ten `creative strategist*` tag mappings (lines
  ~160–169, currently → `direct-response-copywriter`) remapped to
  `creative-strategist`.
- One in-body prose link from each of `/blog/creative-strategist`,
  `/blog/hire-a-creative-strategist`, `/blog/creative-strategist-salary` (one link
  per post, varied anchors, same rule as the 2026-07 DR sweep).
- `relatedServices` additions on: DTC vertical, `ai-marketing-consultant`,
  `conversion-rate-optimization`, `facebook-ads-copywriter`, `ad-copywriter`, and
  every other service page (see §8).
- `public/llms.txt` Key pages list.
- Sitemap: generated at build from the services array; nothing to do.

## 6. Services index and the `tier` field

**Interface.** Add `tier: 'strategy' | 'production'` to `Service` (required). Values:
`strategy` = creative-strategist, ai-marketing-consultant, conversion-rate-optimization;
`production` = the ten copywriting services.

**`/services` index** (`src/app/services/page.tsx`).
- metaTitle `Creative Strategy & Direct-Response Copywriting Services | Rob Palmer`;
  hero headline in the same frame.
- Two sections: **Strategy** (intro: where an engagement usually starts) and **The
  creative I build** (the ten production cards in existing array order, DR first).
- Bottom `CTABanner` text updated to the retainer-or-project line.

**AI Marketing Consultant** (`ai-marketing-consultant` entry): reframe, not rewrite.
- `headline`, `metaTitle`, `metaDescription`, `subheadline`: lead on installing the
  Triple Brain workflow in a team; drop "Stefan Georgi's CA Labs Hired" from all four.
- `heroStats.secondary`: the "CA Labs" stat replaced (e.g. 190+ frameworks).
- `credentialBar.items[0]`: "Copy Chief, Copy Accelerator" as one credential.
- Section 2 heading retitled around the methodology; Stefan's hire stays in the body
  as proof.
- The existing `/blog/hire-a-creative-strategist` link in section 1 re-pointed to
  `/services/creative-strategist`.
- `$10K` lines removed.

## 7. Verticals (`src/app/verticals/_data/verticals.ts`)

All six keep slug, structure and 13-point pattern. Changes per vertical:
- `metaTitle`: ranking keyword stays first; strategy angle added after the pipe where
  it fits in ~60 chars.
- `headline` / `subheadline`: lead with creative strategy for that market, copy as the
  execution.
- First section: one paragraph added or rewritten on how creative strategy applies in
  that market (compliance-aware angles in supplements; disclosure-aware hooks in
  financial; EPC-driven angle testing in ClickBank; trial-to-paid creative in SaaS;
  launch/evergreen creative in info).
- `deliverables`: one strategy deliverable prepended (angle map or creative brief set).
- `relatedServices`: `creative-strategist` prepended.
- `$10K` mentions (4) removed.

**DTC vertical** goes furthest: it is the DTC creative-strategy page in all but slug —
Meta creative, ad-to-lander congruence and testing cadence in the sections, direct link
to the new service page in the first section.

## 8. About, global metadata, navigation, copywriting pages, blog

**About** (`src/app/about/page.tsx`).
- Hero headline → strategist-first line in the existing cadence (direction: "Forty
  years of direct response. Now pointed at your creative."); subheadline loses the CA
  Labs sentence.
- Third-person entity paragraph (the AI-extraction anchor) leads with "creative
  strategist and direct-response copywriter", keeps the client list and $523M, adds
  the DTC/Meta focus.
- First-person opening paragraph follows the same order.
- One short new paragraph near the Triple Brain origin: the move from writing the
  asset to owning the creative strategy, framed as progression.
- metaTitle/description updated; headshot alt updated. Timeline and testimonials
  unchanged.

**Global** (`src/lib/constants.ts`, `src/app/layout.tsx`).
- `SITE_TITLE = 'Rob Palmer | Creative Strategist & Direct-Response Copywriter'`;
  `SITE_DESCRIPTION` rewritten to match.
- Person schema: `jobTitle` → "Creative Strategist & Direct-Response Copywriter";
  `description` updated; `knowsAbout` gains creative strategy, Meta ads creative, DTC
  growth, ad creative testing.
- `public/llms.txt`: summary paragraph reordered to lead with creative strategy; new
  page added to Key pages; "$10K" sentence removed.

**Navigation** (`NAV_LINKS`): new first item `{ label: 'Creative Strategy', href:
'/services/creative-strategist' }` ahead of Services. Footer reads the same array.
Header width checked on mobile and desktop in the dev server.

**`/call`** (`src/app/call/page.tsx` ~line 101): Fit line rewritten without the figure.

**The ten copywriting service pages.** Slugs, metaTitles, section bodies and FAQs
untouched. Each gets: `creative-strategist` added to `relatedServices`; `$10K` lines
removed (14 mentions across the file). The DR money page additionally gets **one
sentence** in its first section placing copywriting inside the creative-strategy
engagement, linking to the new page. No other body edits on ranking DR pages.

**Blog.**
- `content-links.ts` remap (§5).
- Three creative-strategist posts: one in-body link each (§5).
- DTC-adjacent posts (`is-copywriting-dead`, `famous-copywriters`, ad-copy posts): a
  link only where a qualifying mention already exists.
- `$10K` in 17 posts: strip where it states Rob's own floor (author box / CTA); keep
  where it is market data in a rates/cost guide. Decided case by case in the plan.

## 9. Copy process and rules

- Load `copywriting-lessons` and read the full lessons file before drafting the new
  service page, the home page and the About page (DR copy for Rob's own offer).
- Run `direct-response-copy` then `copychief` on each of those three before committing.
- First-person body copy; third person only in meta, schema, alt, the About entity
  paragraph and testimonials.
- Scarcity implied via capacity signals, never stated.
- Every metaTitle leads with its primary keyword.
- No raw hex / Tailwind default colours; design tokens only. `font-heading` for
  headings, `font-body` for body.
- `FadeIn` never wraps an `<li>` inside a `<ul>`.
- No apostrophes inside `ComparisonTable` `rows` props (if used in blog edits).
- Dev-server browser review before committing the home page and the services index.

## 10. SEO safeguards and measurement

- No URL changes; no redirects added or removed.
- Baseline before the first deploy: `scripts/gsc_query.py --days 90 --dimension
  query,page --json` saved to `docs/seo/2026-10-repositioning/baseline.json`.
- Per deployed slice: clean `npm run build`; live URLs 200; metaTitle and FAQ schema
  verified on changed pages; GSC indexing requested by hand (API cannot) for the new
  page and the home page.
- Checkpoints at +2 and +6 weeks on the DR cluster ("direct response copywriter(s)",
  "best direct response copywriters") and the creative-strategist cluster. Decision
  rule: a sustained drop > ~5 positions on the DR money keyword triggers a review of
  the slice that shipped before it, not a rollback of the repositioning.
- Memory note `project_creative_strategist_seo.md` updated when slice 1 ships.

## 11. Delivery slices

Each slice is committed, built, deployed (`vercel deploy --prod --yes`, allowed at
agent discretion for this project) and verified before the next starts.

1. **New service page + links in.** `tier` field on all 13 entries; new entry; hero
   image; `content-links.ts` remap; `llms.txt`; `relatedServices` additions; three
   blog-post links; DTC-vertical link. Nothing else on the site changes. Lowest risk,
   ships first.
2. **Home page + global.** Home rewrite; `SITE_TITLE`/`SITE_DESCRIPTION`; Person
   schema; `NAV_LINKS`; `/call` Fit line.
3. **Services index + consultancy reframe.** Two-tier index; AI Marketing Consultant
   reframe; CRO `relatedServices`.
4. **Verticals.** All six; home-grid taglines and order (the taglines ship here
   because they depend on the new vertical framing).
5. **About + remaining copy hygiene.** About page; DR money-page sentence; `$10K`
   removal across service pages and blog author boxes; remaining blog cross-links.

## 12. Testing

- Per slice: `npm run lint`, `npx tsc --noEmit`, `npm run build` (the read-only CI
  workflow runs the same on push). Never run `build` while `next dev` is live.
- Playwright smoke (`npx playwright`) against the production URL after each deploy:
  opens `/`, `/services`, `/services/creative-strategist`, `/about`,
  `/verticals/ecommerce-dtc-copywriter`; asserts expected H1 text, `<title>`,
  presence of FAQPage JSON-LD where expected, and that no `<h1>`, `<title>` or
  `<meta name="description">` contains "$10K" or "CA Labs".
- Manual: header nav fits at 375px and 1280px; Lighthouse spot check on `/` for no
  CLS regression from the new section.

## 13. Open items (not blocking)

- Which two additional testimonials join Ben's on the new page — pick at
  implementation from the 38 in `src/content/testimonials.ts` by ROAS/Meta relevance.
- Whether `/create` should link its CTA to the new service page rather than `/call`
  — leave as is unless Rob asks.
- Link-building for the new page (the creative-strategist cluster still needs ~10
  referring domains per the 2026-09 Ahrefs read) — Rob's outreach, outside this spec.
