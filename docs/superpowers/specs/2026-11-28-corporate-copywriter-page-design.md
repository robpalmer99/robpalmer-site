# Corporate copywriter page: design

Date: 2026-11-28
Status: design approved by Rob in session; spec awaiting his review

## 1. Why

A booked call from a low-budget DTC founder (Asher Blum, Heavy Barrel) prompted the question of how to attract buyers for whom budget is not the constraint. Rob has written for Apple, IBM, Barclays, Vodafone, BT, Belron and other large companies. Corporate departments approve copywriting projects easily, and one account spreads: at BT, one project led to work for at least ten teams, each paid from its own budget. One good corporate lead can therefore be worth many DTC leads.

The site has no page for this buyer. All 15 service pages and 6 verticals address offer owners (VSLs, funnels, supplements, ClickBank). The portfolio is entirely direct-response clients. Corporate proof exists but is scattered: Gary Lubner's quote, the Belron/Safelite case study, the Apple UK case study, and client names on the home and about pages.

## 2. Goal and non-goals

**Goal:** give a corporate buyer one page that speaks to them, carries the strongest corporate proof, and makes a small first project easy to say yes to.

**Non-goals:**

- No change to the home page hero or the creative-strategist positioning (decision of 2026-10-19 and 2026-11-09 stands).
- No hub of sub-pages and no new case studies. Reconsider only after the page produces a corporate booking.
- No new blog posts. The site has 53 crawled-not-indexed URLs; near-topic pages wait until the 2026-12-07 indexing re-check.
- No outbound campaign.

## 3. What a corporate buyer is offered

A mix agreed with Rob:

1. **Direct response for corporate teams:** measured campaigns in direct mail, email and landing pages.
2. **AI copywriting for in-house teams:** systems and training, building on the two AI consultant pages.
3. **The senior writer other teams get referred to:** not sold as a separate offer. It is presented as what happens after a first project goes well, using the BT story.

## 4. Search evidence (GSC, 90 days to 2026-11-25)

| Query | Impressions | Position | Ranking page |
|---|---|---|---|
| direct mail copywriter | 245 | 3.8 | /blog/direct-mail-copywriting |
| copywriting services vs in-house | 157 | 9.1 | /blog/in-house-copywriter-vs-freelance |
| in house copywriter | 61 | 7.0 | /blog/in-house-copywriter-vs-freelance |
| direct response copywriter for hire | 45 | 7.6 | (money page cluster) |
| corporate copywriting | 8 | 21.1 | (none built for it) |

Corporate search demand reaching the site is close to zero today. The page will draw its first visitors through internal links from the two posts above, from AI answers, and as the destination Rob gives any corporate contact. It is not expected to book calls from Google alone in the first 60 days.

## 5. The page

- **URL:** `/verticals/corporate-copywriter`
- **Type:** a seventh entry in `src/app/verticals/_data/verticals.ts`, using the existing `Vertical` interface and `[slug]` template. No new layout or component.
- **metaTitle:** leads with "Corporate Copywriter".
- **Schema, canonical, sitemap:** inherited from the vertical template (Service + FAQPage JSON-LD; sitemap picks up the slug through `getAllVerticalSlugs`).
- **Reader:** a marketing director or department head at a large company who can approve a project from a departmental budget.

### Content, in page order

| Block | Vertical field | Content |
|---|---|---|
| Hero | `headline`, `subheadline`, `heroStats` | A senior direct response writer for corporate marketing teams. Primary stat: the $523M career total. |
| Client names | `credentialBar` | Apple, IBM, Microsoft, Barclays, Vodafone, BT, Citibank, Morgan Stanley, Belron. Text names, no logos. |
| Definition | `definition` | What a corporate copywriter does, in two or three sentences an AI assistant can lift. |
| The problem | `sections[0]` | Campaigns that look good and cannot be shown to have sold anything; teams told to use AI with nobody to show them how. |
| Two ways in | `sections[1]`, `deliverables` | A measured campaign, or AI copywriting systems and training for the in-house team. |
| Start small | `sections[2]` | One defined project on one budget. |
| The BT story | `sections[3]` | One project became work for at least ten teams, each on its own budget. |
| Proof | `caseStudies`, `testimonialIds` | Belron/Safelite and Apple UK case studies; Gary Lubner (id 1) plus three or four others chosen from the 38. |
| Mid CTA | `midCta` | Strategy call. |
| FAQ | `faqs` | Purchase orders and invoicing, NDAs, working alongside the company's agency, time zones, what a first project looks like, how the AI work is delivered. |
| Related | `relatedServices`, `relatedVerticals` | ai-copywriting-consultant, ai-marketing-consultant, direct-response-copywriter, email-copywriter; financial-copywriter, saas-copywriter. |

`portfolioItems` lists the Apple UK and Belron work only. A hero image is generated to the existing vertical hero spec (gpt_image.py, 1200x800 jpg, bright and high-key).

## 6. Wiring

1. **Home page:** a client-name strip (text, design tokens only) linking to the new page. Placement below the hero, not inside it.
2. **Navigation:** the page appears under Experience > Verticals automatically through the verticals index. Add a direct footer link. No new top-level nav item.
3. **AI consultant pages:** a short "for in-house marketing teams" section on `ai-copywriting-consultant` and `ai-marketing-consultant`, each linking to the new page.
4. **Internal links in:** contextual links from `/blog/in-house-copywriter-vs-freelance`, `/blog/direct-mail-copywriting` and `/blog/b2b-copywriting`. Update `src/lib/content-links.ts` so B2B-category posts surface the new vertical.
5. **Case studies:** link from the Apple UK and Belron case study pages to the new page.
6. **Page dates:** add the slug to `src/lib/page-dates.ts`.

## 7. Rules the copy must follow

- First person ("I", "my", "you") in body copy; third person only in meta, schema and alt text.
- No own-price figures.
- The $523M is a career total. The Belron share of it is never published.
- Nothing states or implies the corporate work is recent. Use "I have written for" and let the names carry it. No dates are attached to the corporate client list, and none are invented.
- Scarcity is implied, never stated.
- No Stefan Georgi / CA Labs lead on this page.
- Design tokens only (`ink-*`, `gold-*`, `paper-*`), `text-gold-600` for card links, `text-paper-600` for meta text.
- No apostrophes inside any `ComparisonTable` rows if one is used.
- `FadeIn` never wraps an `<li>` inside a `<ul>`.

## 8. Process

1. Draft the page copy with the direct-response-copy skill, then run copychief and copy-judge.
2. Rob reviews the page in `npm run dev` before any commit of the copy.
3. Clean `npm run build`, commit, push.
4. Deploy with `vercel deploy --prod --yes`, then verify the live URL, canonical, JSON-LD and sitemap entry.
5. Request indexing in Search Console and submit to IndexNow.

## 9. Measuring it

- **Bookings:** corporate bookings counted from the Calendly "how did you hear about me" answer and the booking's email domain, recorded in the leads ledger.
- **Search:** impressions and position for "corporate copywriter", "corporate copywriting" and the two feeder queries, via `seo gsc robpalmer-site`.
- **Checkpoint:** 2027-01-27 (60 days). If the page is indexed and has drawn no corporate booking, decide between a feeder post aimed at "copywriting services vs in-house" and a LinkedIn route. If it has drawn one, scope the sub-pages from approach B.

## 10. Open items for Rob

- Confirm the client list in section 5, and add any other names worth showing.
- Supply any detail for the BT story he is happy to publish (types of team or project). The page will not invent specifics.
