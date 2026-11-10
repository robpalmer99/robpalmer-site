# Agency website: scope and decisions, 2026-11-09

Status: approved direction (one agency site, not two). Rob is sourcing the domain. This document is the brief to build from once the domain and the open decisions in section 9 are settled.

> **Widened on 2026-11-10.** The agency is now Rob's own paid-media management offer (Google Ads and Meta Ads run with the creative, pages and offer economics inside one loop), not a creative-only joint venture with Ben. Positioning, services, pricing shape and the tooling build are in `2026-11-10-paid-media-management-plan.md`; that plan supersedes sections 1 to 3 and 9.1, 9.2 and 9.5 here. The site structure, entity rules and content guidance in sections 4 to 7 still apply, with media management added to the services and the name criteria shifted from "studio" to "growth" or "performance".

## 1. Purpose

Reach the buyer robpalmer.com cannot: a brand or offer owner who wants a done-for-you team (strategy, ad creative at volume, landing pages, copy) on a retainer, and who searches or asks an AI assistant for an agency, not a freelancer. Leverage Ben's team (video editing under Niko, dev under Madhav and Ashish, product managers Faisa, Hains and Tom, plus the AI creative pipeline built for Smile Spirits and Paletrove) to deliver it. Rob is the named founder and creative director, which is the entity bridge that lets the new domain borrow robpalmer.com's authority.

Not a second personal site. Not a copywriting-only agency and a separate creative-strategy agency: one brand, both services, because the buyer is the same person.

## 2. Positioning

One sentence to test against every page: *the creative and copy team for direct response brands that need winning ads, pages and funnels every week, led by a 40-year direct response copywriter and built on an AI production engine that ships finished creative in days, not weeks.*

Distinct from robpalmer.com by buyer and promise, not by topic:

| | robpalmer.com | Agency site |
|---|---|---|
| Buyer | Founder who wants Rob's hands on the control | Brand or offer owner who wants a team on retainer |
| Promise | One senior brain on your VSL, sales letter, funnel | Creative volume plus strategy, delivered weekly |
| Pricing shape | Project fees, phases, occasional royalty | Flat proof-flight fee, then retainer plus a percentage of spend (the Smile model) |
| Keywords | copywriter, hire, freelance, VSL copywriter, best X copywriters | agency, creative team, done-for-you, creative strategy agency, DTC creative agency, retainer |
| Voice | First person, Rob | First person plural, "we", with Rob's byline on thought pieces |

## 3. Offer (from the Smile Spirits package and the 2024 email-agency memo)

- **Proof flight (entry):** four weeks, a fixed number of finished creatives (Smile proposed around 27 plus a lander), a landing page, a measurement one-pager. Flat creative-plus-management fee. Sells the retainer.
- **Creative retainer:** monthly concepts, ad sets in five formats (static, carousel, UGC-style, mini VSL, long-form story), landing pages and advertorials per concept, weekly creative review. Retainer plus a percentage of ad spend at scale.
- **Funnel build:** VSL or TSL, advertorial, order form, upsells, email flows. Project-priced, Rob writes or edits the control.
- **Compliance built in:** Meta, Google, TikTok and FTC review on every asset (the compliance-checker skill is a selling point).

Pricing floors are Ben's call (see section 9). The 2024 memo pegged retainers at $3,000 to $7,000 a month for small agencies, with a lower-retainer-plus-5-to-10-percent-of-revenue option. Smile's deck left price for Ben to set.

## 4. Naming and domain criteria (Rob is sourcing)

- Reads as a studio or agency, not a person. Works with "the X team" in a sentence.
- Says creative or growth, not only copy. Copy-only names shut out the creative-strategy buyer.
- .com available, or a clean .co/.agency with the .com not held by an active competitor.
- No trademark collision in US advertising or marketing services (search USPTO TESS and a Google exact-match before buying).
- Pronounceable on a podcast; spellable from hearing it once.
- Avoid "AI" in the name. The engine is AI; the promise is winning creative. AI-named agencies date fast and attract tyre-kickers.
- Aged domain with relevant history is a bonus, not a requirement. Check backlink history (Bing Webmaster GetLinkCounts, Moz) before buying any aged name; a spammed history is worse than a fresh one.

## 5. Site structure

Reuse the robpalmer-site stack (Next.js 15, React 19, Tailwind 4, MDX blog, Sentry, GA4, generated sitemap and robots, Service and FAQPage JSON-LD). New repo, new Vercel project, `git.deploymentEnabled.main: false` like every other repo, explicit deploys only. New design tokens, not the ink/gold/paper palette: the sites must not look like the same company wearing two hats.

Pages at launch:

- **Home:** the one-sentence positioning, the proof flight as the CTA, three proof points (tracked results, creative engine, compliance), logos or named results once permitted, booking CTA.
- **Services (five):** creative strategy, ad creative production, landing pages and advertorials, funnel and copy (VSL, TSL, email), compliance review. Each with Service and FAQPage schema, question-form H2s, a visible updated date, offers schema with a "from" price when Ben sets one.
- **Work:** the Smile Spirits package as a spec case (clearly labelled as a pitch, with the live GitHub Pages demos), Paletrove Lymphatic Support and the magnesium launch as internal case studies if Ben agrees, Rob's portfolio excerpts for the copy side (never reworded). Add client cases as they land.
- **Process:** the proof flight week by week, then what a retainer month looks like, with the measurement one-pager.
- **Team:** Rob (founder, creative director) with Person schema `sameAs` pointing at robpalmer.com; the production team by function with first names where people consent; the AI engine described honestly (what is generated, what is human-checked).
- **About:** the Triple Brain story in agency form; why a 40-year direct response copywriter built a creative team.
- **Pricing:** at least the proof flight price and the retainer shape. Agency buyers bounce from "contact us for pricing" pages.
- **Book a call:** Calendly, same account, a separate event type so bookings attribute to the agency site, with the "how did you hear about us" question from day one.
- **Blog:** MDX, 15 seed posts at launch (section 7), 8 a month after.
- **llms.txt, robots.txt, sitemap.xml** generated at build.

## 6. Entity and cross-linking rules

- Organization schema with `founder` referencing robpalmer.com's Person `@id`. `sameAs` to the agency's LinkedIn page, GitHub org if any, and robpalmer.com.
- robpalmer.com gets one hand-off page (the "full creative team" page in the content plan) linking to the agency site, and a line on /about. No duplicated service pages, no shared blog posts, no cross-posting.
- The agency site links back to robpalmer.com from the team page and from Rob's author bio only. Not from every footer.
- Distinct keyword sets per section 2. If a query could go either way (for example "hire a VSL copywriter"), robpalmer.com owns it. Agency content frames every topic through team, volume, retainer and done-for-you.
- Same Google Analytics account, separate property. Separate Search Console property. Add to Bing Webmaster and submit via IndexNow on day one.

## 7. Seed content (15 posts for launch, agency intent)

1. Is a copywriting agency worth it in 2027? (the robpalmer.com post 3 covers the freelancer angle; this one answers from the agency side with pricing)
2. Creative strategy agency vs in-house creative strategist: cost, speed, output
3. How many ad creatives a month does a DTC brand need in 2027 (Andromeda and creative-fatigue data)
4. DTC creative agency pricing: what retainers really cost and what you get
5. What a creative strategist does at an agency (and what to expect in week one)
6. AI ad creative production: what is real, what is slop, how we check every frame
7. The four-week proof flight: how to test an agency without a twelve-month contract
8. Best creative strategy agencies for DTC brands (honest list, we included with capacity signals)
9. Best direct response agencies for supplement and health offers
10. Meta ad compliance for supplements: what gets accounts banned and how an agency protects you
11. Advertorial vs landing page vs VSL: which funnel for which offer
12. State of Meta ad creative 2027 (shared research with the robpalmer.com edition, different framing; or publish only here)
13. How to brief a creative agency (template included)
14. Agency vs freelancer vs in-house: the real cost table for a $50k-a-month ad account
15. How we measure creative that cannot be tracked to the sale (the Smile measurement one-pager as a post)

Each post: 10 FAQs, Article schema with Rob as author linked to robpalmer.com, a dated "updated" line, one CTA to the proof flight.

## 8. Timeline

| When | Milestone |
|---|---|
| Nov 2026 | Rob picks the domain. Rob and Ben settle section 9. robpalmer.com agency-test page ships. |
| Dec 2026 | Repo, design tokens, pages, schema, analytics, 15 seed posts drafted and copychiefed. Smile spec case and any Paletrove case written. |
| Jan 2027 | Launch. Submit to GSC, Bing, IndexNow. Announce on LinkedIn, X, GitHub profile. Hand-off page on robpalmer.com switched to link across. |
| Feb to Apr 2027 | 8 posts a month. First AI-citation checks on agency prompts. |
| By 2027-06-30 | First booked call attributable to the agency site. If none by then, review positioning before adding content. |

## 9. Open decisions (Rob and Ben)

1. **Ownership and brand.** Rob's agency with Ben's team as production partner, or a joint venture? This decides the Organization schema, the About page, the invoicing entity and who signs retainers.
2. **Team capacity.** How much of Niko's, Roxy's, Rose's and the dev team's time can be committed to agency clients each month, and at what internal cost? The proof flight promise ("live within 10 days of a yes") depends on this.
3. **Pricing floors.** Proof flight fee, retainer floor, percentage of spend. Publish at least the proof flight price.
4. **Case-study permission.** Can Paletrove, the magnesium launch and the Smile pitch be shown, and with what detail?
5. **Who fronts the site.** Rob alone, or Rob and Ben as co-founders? Two named founders with public track records is stronger for entity building; it also doubles the personal exposure.
6. **Domain.** Rob is sourcing. Run the trademark and backlink checks in section 4 before purchase.

## 10. Risks

- **Dilution of effort.** Mitigation: the robpalmer.com programme is the priority through December; the agency build runs in parallel only where it does not take from it.
- **Promise without proof.** Mitigation: launch with the Smile spec case and one real internal case; do not claim client results the site cannot show.
- **Cannibalisation.** Mitigation: section 6 rules; check GSC monthly for queries where both domains appear and assign the query to one.
- **Delivery capacity.** Mitigation: decision 2 before any pricing goes public.
- **Three-site creep.** Mitigation: the review doc's rule. No third site until the agency site books a call.
