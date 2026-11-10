# Content plan, November 2026 onward: write for the question that booked the call

Status: approved by Rob 2026-11-09. Companion to `docs/strategy/2026-11-09-booked-calls-review.md`.

Progress log:

- 2026-11-10: Tier A posts 1 to 4 shipped (`best-vsl-copywriters`, `vsl-vs-tsl`, `is-a-copywriting-agency-worth-it`, `how-much-does-a-vsl-cost`), each with 10 FAQs, hero image, tag mappings in `content-links.ts`, copychief pass. Agency demand test page shipped as the 14th service, `/services/creative-team` (strategy tier, Service + FAQPage schema, linked from post 3 and the services index). Rob approved open-sourcing more skills (Tier B): angle-finder, static-ad, funnel-teardown, in that order. Same day, second batch: Tier A posts 5 to 8 shipped (`best-supplement-copywriters`, `best-sales-letter-copywriters`, `best-ecommerce-copywriters`, `best-email-copywriters`), each sourced per writer with an availability line. Tier D CTA repair done on state-of-vsl-marketing-2026 (new "Who Should Write Your VSL in 2026" block with /call and the VSL service), what-is-a-vsl (hiring section near the top, definition untouched), supplement-vsl-copywriting (/call plus link to the supplement list post) and famous-copywriters (capacity line plus /portfolio). is-copywriting-dead already had a /call "Before you book" block; left as is. Still open in Tier D: /services/vsl-copywriter question-form H2s and offers schema. Third batch, same day: Claude roundup `best-claude-code-skills-for-copywriting` (eight public repos ranked, star counts checked on GitHub 2026-11-10: coreyhaines31/marketingskills 59,423, anthropics/skills 190,998, ours 49) and Tier A posts 9 to 12 (`hire-a-vsl-copywriter`, `best-financial-copywriters` with Evaldo Albuquerque, Mike Palmer (now Stansberry CEO), Kyle Milligan, Henry Bingaman, Marcella Allison, Jake Hoffberg all sourced, `creative-strategist-vs-copywriter` incl. the media-buyer comparison, `claude-code-for-ecommerce-brands` as the AI-creative-team piece pointing at /services/ai-marketing-consultant and /services/creative-team). Commit `8d6c5c7`, deployed, Bing submitted. Tier A is complete. Next: `claude-code-vs-chatgpt-for-copywriting`, /services/vsl-copywriter question-form H2s + offers schema, then the 2027 editions in December and the first open-sourced skill (angle-finder).

## The thesis

Every booking with a known source came from a page that answers a decision-stage question, carries a date and an opinion, and gets cited by an AI assistant or ranks top-five on Google. None came from the high-traffic explainer posts. So the programme is:

1. **Decision-stage posts** for buyers who already know they need a VSL, a TSL, a sales letter, a copywriter or a creative team, and are choosing who to hire and what to pay.
2. **"Best X to hire" list posts** per deliverable and vertical. The best-direct-response-copywriters post and the famous-copywriters post are the two pages Gemini has already used to recommend Rob. Repeat the pattern where buyers search by specialism.
3. **Dated "state of" editions** refreshed to 2027 before January, because the state-of-VSL post booked Bryan Ward and all five state-of posts carry 2026 in the slug and title.
4. **The Claude-skill cluster**, which has booked two calls and is decaying on demand, not rank.
5. **CTA repair** on every page that AI assistants cite, so a citation visit has a path to `/call`.

Explainer posts that rank for definitional queries ("what is a vsl", "vsl meaning", "conversion rate optimization") stay accurate and citable but get no new effort. They are AI Overview citations and will not be click sources again.

Volume: 8 new posts and 4 refreshes a month. Each new post gets the full treatment: metaTitle leading with the keyword, 10 FAQs, Article JSON-LD, a hero image, `content-links.ts` mapping to the relevant service, a dated "updated" line, and a copychief pass before commit. First-person voice. No raw scarcity claims (imply via capacity signals).

## Evidence from Search Console (90 days to 2026-11-06)

Commercial-intent queries the site is shown for without a page built for them:

| Query | Impr | Pos | Clicks | Today's ranking page |
|---|---|---|---|---|
| is copywriting agency worth it? | 252 | 29.3 | 0 | freelance-copywriter-vs-marketing-agency |
| best vsl copywriters | 195 | 3.4 | 3 | famous-copywriters / state-of-vsl |
| how much does it cost to hire a copywriter(?) | 173 | 5.1 to 11.2 | 0 | copywriting-rates / how-to-hire |
| tsl vs vsl, vsl vs tsl | 40 | 5.8 to 6.7 | 0 | long-form-sales-letter-vs-vsl |
| direct response copywriter for hire | 39 | 9.6 | 0 | best-direct-response-copywriter-to-hire |
| supplement copywriter | 38 | 5.7 | 1 | supplement-copywriter |
| verbal identity agency vs freelance copywriter | 40 | 5.5 | 0 | freelance-copywriter-vs-marketing-agency |
| hire a sales copywriter | 18 | 27.8 | 0 | sales-copywriter |
| benefits of hiring a specialized copywriting firm vs freelance | 33 | 2.8 to 5.0 | 0 | freelance-copywriter-vs-marketing-agency |
| hire creative strategist expert | 4 | 13.8 | 0 | hire-a-creative-strategist |

Claude cluster (166 queries, 96 clicks, 2,232 impressions in 90 days): "claude copywriting skill" 272 impr at 6.8, "best copywriting skill for claude" 91 at 3.4 with 13 clicks, "claude copywriting skill github" 87 at 8.1, plus a long tail of "website copy skill claude", "static ads skill claude", "how to rewrite ad copy using claude". The public repo (robpalmer99/claude-code-copywriting-skills) has 48 stars and 10 forks.

## Tier A: new decision-stage posts (first six weeks)

Ordered by expected booking value. Slugs checked against the 150 existing posts; none collide.

| # | Slug | Target query set | Why | Service CTA |
|---|---|---|---|---|
| 1 | `best-vsl-copywriters` | best vsl copywriters, top vsl copywriters, vsl copywriter for hire | Already pos 3.4 with no dedicated page. The exact pattern that booked Sader. | /services/vsl-copywriter |
| 2 | `vsl-vs-tsl` | tsl vs vsl, vsl vs tsl, tsl copywriting, text sales letter | Position 6 with no page. Karim asked for both; Nobriga has a stuck TSL. Supplement-owner question. | /services/vsl-copywriter |
| 3 | `is-a-copywriting-agency-worth-it` | is copywriting agency worth it, copywriting agency vs freelance copywriter, what does a copywriting agency do | 252 impressions at 29. Doubles as the agency-demand test and the bridge to the new site. Honest answer: when you need volume and a team, an agency; when you need one senior brain on the control, a specialist. | /services/creative-strategist, later the agency site |
| 4 | `how-much-does-a-vsl-cost` | how much does a vsl cost, vsl copywriter cost, vsl script price | Cost questions are the hire-stage query the site already ranks 5 to 11 for generically. VSL-specific page with real ranges and what moves the price. | /services/vsl-copywriter |
| 5 | `best-supplement-copywriters` | best supplement copywriters, supplement copywriter for hire, health copywriter | Vertical list post. Supplement owners are three of the last six bookings. | /verticals/health-supplement-copywriter |
| 6 | `best-sales-letter-copywriters` | best sales letter copywriters, direct mail copywriter for hire, long form copywriter | Austin (won) is a direct-mail client; Sader was direct mail. Direct-mail copywriting service query already pos 4.7. | /services/sales-letter-copywriter |
| 7 | `best-ecommerce-copywriters` | best ecommerce copywriters, dtc copywriter for hire, shopify copywriter | "dtc copywriting" already pos 2.3. Feeds the agency site later. | /services/creative-strategist |
| 8 | `best-email-copywriters` | best email copywriters, email copywriter for hire | Same list pattern; email is the most-searched deliverable after VSL. | /services/email-copywriter |
| 9 | `hire-a-vsl-copywriter` | hire vsl copywriter, vsl copywriter near me, vsl script writer | Buyer's guide: what to ask, what to send, red flags, timeline. | /services/vsl-copywriter |
| 10 | `best-financial-copywriters` | best financial copywriters, financial copywriter for hire | /verticals/financial-copywriter has 715 impressions at 22.7 and no list post feeding it. | /verticals/financial-copywriter |
| 11 | `creative-strategist-vs-copywriter` | creative strategist vs copywriter (pos 3.7, 7 impr), creative strategist vs media buyer | Cheap win on a query we already rank for, explains the repositioning. | /services/creative-strategist |
| 12 | `claude-code-for-ecommerce-brands` | claude code ecommerce, claude skills for marketers, ai creative team | Extends the booking-producing cluster toward the agency buyer. | /services/ai-marketing-consultant |

List posts follow the best-direct-response-copywriter-to-hire template: ranked by tracked results and availability, honest about who no longer takes clients, Rob included with capacity signals, no "last one standing" phrasing. Each list names real people with sourced claims; adversarially fact-check before publishing (an agent fabricated a dossier once; never again).

## Tier B: the Claude-skill cluster

- **Roundup:** `best-claude-code-skills-for-copywriting` ("best copywriting skill for claude" is 91 impressions at 3.4 and climbing). Rank the public skills across GitHub including ours, link the repo, explain SKILL.md installation. AI assistants cite roundups.
- **Comparison:** `claude-code-vs-chatgpt-for-copywriting`. The chatgpt-for-copywriting post exists; this is the head-to-head buyers ask.
- **New skill posts need new public skills.** The vault has skills the repo does not (angle-finder, static-ad, meta-ad-images, funnel-teardown, review-vsl, copy-judge, creating-advertorials). Rob approved open-sourcing more on 2026-11-10. Suggested order by search demand and giveaway safety: `angle-finder`, `static-ad` ("static ads skill claude" already gets impressions), `funnel-teardown`. Each one is a post, a repo folder and a README update. The vault-specific skills (rob-voice, results-ledger, copywriting-lessons) stay private.
- **Refresh cadence:** the six existing skill posts were refreshed 2026-10-30. Re-check every time Claude Code ships a skills-surface change; the cluster decays on novelty.

## Tier C: 2027 editions of the dated posts (December)

Refresh and re-slug before the year rolls over, with 301s from the 2026 slugs:

- `state-of-vsl-marketing-2026` → 2027 (the Bryan Ward booking page; highest priority)
- `state-of-direct-response-copywriting-2026` → 2027
- `state-of-ai-copywriting-2026` → 2027
- `state-of-email-marketing-2026` → 2027
- `state-of-landing-pages-2026` → 2027
- `best-direct-response-copywriter-to-hire` title "in 2026" → "in 2027" (slug has no year)
- `how-much-does-a-direct-response-copywriter-cost` title year bump

Plus two new state-of pieces for the agency buyer: `state-of-meta-ad-creative-2027` (Andromeda, creative volume, AI production) and `state-of-supplement-funnels-2027`.

Rule for every dated page: visible "Updated" date, `dateModified` in schema, one paragraph of what changed since the last edition. That is what makes an AI assistant pick the current edition.

## Tier D: CTA repair on cited pages

Pages AI assistants cite today with weak or missing booking paths:

| Page | Today | Fix |
|---|---|---|
| state-of-vsl-marketing-2026 | links /contact, two service links, no /call | Add a "who should write your VSL" block with /call and the vsl-copywriter service |
| what-is-a-vsl | AI Overview first citation, 0.2% CTR | Add a short "hiring a VSL copywriter" section near the top linking the service; keep the definition intact |
| supplement-vsl-copywriting | one service link | Add /call CTA and a link to the new best-supplement-copywriters post |
| is-copywriting-dead | cited, informational | One closing block: "if you are hiring in 2027" with /call |
| famous-copywriters | the Sader citation source | Confirm Rob's entry links /call and /portfolio; add "still taking clients" capacity signal |
| /services/vsl-copywriter | pos 13.7, 929 impressions | Question-form H2s with direct answers, offers schema, visible updated date (action-plan item 10 pattern) |

## Tier E: striking distance (unchanged from the October review, lower priority now)

sales-letter-examples (2,782 impr, pos 13.1), sales-page-examples (2,043, 13.5), copywriting-templates (slipped to 13.6), copywriting-skills (1,462, 13.7). One refresh a month from this list after Tiers A to D are moving. These earn traffic, not bookings.

## Agency demand test on robpalmer.com

One page, shipped in the first two weeks: a "full creative team" page describing the done-for-you option (strategy, ad creative at volume, landing pages, copy, on retainer, delivered with a team). Target queries: copywriting agency, creative strategy agency, dtc creative agency, agency vs freelance. Link it from post 3 and from /services. Measure impressions at 30 and 60 days. When the agency site launches, this page becomes the hand-off page that links across.

Route decided 2026-11-10: `/services/creative-team` as the 14th service (strategy tier), so it inherits the Service schema and the services index. Baseline for the 30- and 60-day impression checks: GSC property sc-domain:robpalmer.com, page filter `/services/creative-team`, queries containing agency, creative team, done-for-you.

## Cadence and measurement

- Weeks 1 to 2: posts 1 to 4, agency-test page, CTA repair on state-of-vsl and what-is-a-vsl.
- Weeks 3 to 4: posts 5 to 8, Claude roundup, remaining CTA repairs.
- Weeks 5 to 6: posts 9 to 12, the Claude comparison post, start 2027 editions.
- December: finish the 2027 editions, two new state-of pieces, first open-sourced skill post if Rob approves.
- Monthly: bookings by source (Calendly question), GSC on the query sets above, AI citation check on ten target prompts (who should I hire to write a VSL, best supplement copywriters, is a copywriting agency worth it, etc.) in ChatGPT, Gemini, Claude and Perplexity.
- Kill rule: any Tier A post with zero impressions on its target queries after 90 days gets merged into its nearest sibling rather than left to dilute.

## Process reminders

- Dev-server review before committing UI changes; never `npm run build` while `next dev` runs.
- Copychief and the lessons file before committing major copy.
- Verify every named person and figure in the list posts against a primary source.
- Pushing main does not deploy; deploy deliberately with `vercel deploy --prod --yes` after a clean build.
