# Corporate copywriter and executive speechwriter pages: design

Date: 2026-11-28
Status: design approved by Rob in session; revised the same day to add client names, BT detail and a speechwriter page; approved by Rob 2026-11-28

## 1. Why

A booked call from a low-budget DTC founder (Asher Blum, Heavy Barrel) prompted the question of how to attract buyers for whom budget is not the constraint. Rob has written for Apple, IBM, Barclays, Vodafone, BT, Belron and other large companies. Corporate departments approve copywriting projects easily, and one account spreads: at BT, one project led to work for at least ten teams, each paid from its own budget. One good corporate lead can therefore be worth many DTC leads.

The site has no page for this buyer. All 15 service pages and 6 verticals address offer owners (VSLs, funnels, supplements, ClickBank). The portfolio is entirely direct-response clients. Corporate proof exists but is scattered: Gary Lubner's quote, the Belron/Safelite case study, the Apple UK case study, and client names on the home and about pages.

## 2. Goal and non-goals

**Goal:** give a corporate buyer one page that speaks to them, carries the strongest corporate proof, and makes a small first project easy to say yes to. Add one service page for executive speechwriting, a corporate service Rob has delivered for many of these clients and one people search for by name.

**Non-goals:**

- No change to the home page hero or the creative-strategist positioning (decision of 2026-10-19 and 2026-11-09 stands).
- No hub of sub-pages beyond the speechwriter page, and no new case studies. Reconsider only after the pages produce a corporate booking.
- No new blog posts. The site has 53 crawled-not-indexed URLs; near-topic pages wait until the 2026-12-07 indexing re-check.
- No outbound campaign.

## 3. What a corporate buyer is offered

A mix agreed with Rob:

1. **Direct response for corporate teams:** measured campaigns in direct mail, email and landing pages.
2. **AI copywriting for in-house teams:** systems and training, building on the two AI consultant pages.
3. **Executive speechwriting:** speeches for senior executives. Rob wrote these for many of the corporate clients. It gets its own service page (section 6) because buyers search for a speechwriter directly.
4. **The senior writer other teams get referred to:** not sold as a separate offer. It is presented as what happens after a first project goes well, using the BT story.

## 4. Search evidence (GSC, 90 days to 2026-11-25)

| Query | Impressions | Position | Ranking page |
|---|---|---|---|
| direct mail copywriter | 245 | 3.8 | /blog/direct-mail-copywriting |
| copywriting services vs in-house | 157 | 9.1 | /blog/in-house-copywriter-vs-freelance |
| in house copywriter | 61 | 7.0 | /blog/in-house-copywriter-vs-freelance |
| direct response copywriter for hire | 45 | 7.6 | (money page cluster) |
| corporate copywriting | 8 | 21.1 | (none built for it) |

Speechwriting: zero rows for any query containing "speech", "keynote" or "executive", and no page on the site covers it (one passing mention in a SaaS case-study post). A mention on the corporate page alone would not rank for speechwriter searches, which is why it gets a page of its own.

Corporate search demand reaching the site is close to zero today. The page will draw its first visitors through internal links from the two posts above, from AI answers, and as the destination Rob gives any corporate contact. It is not expected to book calls from Google alone in the first 60 days.

## 5. The corporate page

- **URL:** `/verticals/corporate-copywriter`
- **Type:** a seventh entry in `src/app/verticals/_data/verticals.ts`, using the existing `Vertical` interface and `[slug]` template. No new layout or component.
- **metaTitle:** leads with "Corporate Copywriter".
- **Schema, canonical, sitemap:** inherited from the vertical template (Service + FAQPage JSON-LD; sitemap picks up the slug through `getAllVerticalSlugs`).
- **Reader:** a marketing director or department head at a large company who can approve a project from a departmental budget.

### Content, in page order

| Block | Vertical field | Content |
|---|---|---|
| Hero | `headline`, `subheadline`, `heroStats` | A senior direct response writer for corporate marketing teams. Primary stat: the $523M career total. |
| Client names | `credentialBar` | Apple, IBM, Microsoft, AT&T, BT, Vodafone, Barclays, Citibank, Morgan Stanley, Belron, Reckitt & Colman, Securicor, Nurdin & Peacock. Text names, no logos. |
| Definition | `definition` | What a corporate copywriter does, in two or three sentences an AI assistant can lift. |
| The problem | `sections[0]` | Campaigns that look good and cannot be shown to have sold anything; teams told to use AI with nobody to show them how. |
| Three ways in | `sections[1]`, `deliverables` | A measured campaign, AI copywriting systems and training for the in-house team, or a speech for a senior executive (links to the speechwriter page). |
| Start small | `sections[2]` | One defined project on one budget. |
| The BT story | `sections[3]` | One project became work for at least ten teams, each on its own budget: BT International, BT Corporate Services, BT Research Labs and many regional BT marketing departments. |
| Proof | `caseStudies`, `testimonialIds` | Belron/Safelite and Apple UK case studies; Gary Lubner (id 1) plus three or four others chosen from the 38. |
| Mid CTA | `midCta` | Strategy call. |
| FAQ | `faqs` | Purchase orders and invoicing, NDAs, working alongside the company's agency, time zones, what a first project looks like, how the AI work is delivered. |
| Related | `relatedServices`, `relatedVerticals` | executive-speechwriter, ai-copywriting-consultant, ai-marketing-consultant, direct-response-copywriter, email-copywriter; financial-copywriter, saas-copywriter. |

`portfolioItems` lists the Apple UK and Belron work only. A hero image is generated to the existing vertical hero spec (gpt_image.py, 1200x800 jpg, bright and high-key).

## 6. The speechwriter page

- **URL:** `/services/executive-speechwriter`
- **Type:** a sixteenth entry in `src/app/services/_data/services.ts`, using the existing `Service` interface and template. No new layout.
- **metaTitle:** leads with "Executive Speechwriter".
- **Reader:** a communications director, chief of staff or executive assistant who needs a speech written for a senior executive, or the executive.
- **Content, in page order:** hero (speeches for senior executives, written by a direct response writer); client names as on the corporate page; definition of an executive speechwriter; the problem (a speech that reads well on paper and dies in the room, or one that sounds like the communications team and not the speaker); what I write (conference keynotes first, then internal addresses, shareholder and results speeches, and event remarks; list confirmed by Rob); how it works (briefing call with the speaker, draft, rehearsal edits); why a persuasion writer (a speech has to move an audience to do something); proof (speeches written for Gary Lubner, CEO of Belron International, who may be named, with his testimonial; other speakers described by role only: chief executives, chairmen, and marketing directors or VPs of marketing; no speech samples exist to show); FAQ (confidentiality and ghostwriting, turnaround, working with the speaker's own voice, slides, remote briefing); strategy-call CTA.
- **Cross-links:** corporate page and speechwriter page link to each other.
- **Topic check:** speechwriting is a new topic for the site, not a near-duplicate of any of the 53 crawled-not-indexed URLs, so the hold on near-topic pages does not apply.

## 7. Wiring

1. **Home page:** a client-name strip (text, design tokens only) linking to the new page. Placement below the hero, not inside it.
2. **Navigation:** the corporate page appears under Experience > Verticals through the verticals index, and the speechwriter page appears in the services index. Add direct footer links to both. No new top-level nav item.
3. **AI consultant pages:** a short "for in-house marketing teams" section on `ai-copywriting-consultant` and `ai-marketing-consultant`, each linking to the new page.
4. **Internal links in:** contextual links from `/blog/in-house-copywriter-vs-freelance`, `/blog/direct-mail-copywriting` and `/blog/b2b-copywriting`. Update `src/lib/content-links.ts` so B2B-category posts surface the new vertical.
5. **Case studies:** link from the Apple UK and Belron case study pages to the new page.
6. **Page dates:** add both slugs to `src/lib/page-dates.ts`.
7. **Counts:** update anything that states the number of services (15) or verticals (6), including `CLAUDE.md`.

## 8. Rules the copy must follow

- First person ("I", "my", "you") in body copy; third person only in meta, schema and alt text.
- No own-price figures.
- The $523M is a career total. The Belron share of it is never published.
- Nothing states or implies the corporate work is recent. Use "I have written for" and let the names carry it. No dates are attached to the corporate client list, and none are invented. The same applies to speechwriting: Gary Lubner is the only executive named. Other speakers are described by role (CEO, chairman, marketing director or VP of marketing) and are not tied to a named company. No specific speeches or events are described.
- Scarcity is implied, never stated.
- No Stefan Georgi / CA Labs lead on this page.
- Design tokens only (`ink-*`, `gold-*`, `paper-*`), `text-gold-600` for card links, `text-paper-600` for meta text.
- No apostrophes inside any `ComparisonTable` rows if one is used.
- `FadeIn` never wraps an `<li>` inside a `<ul>`.

## 9. Process

1. Draft the copy for both pages with the direct-response-copy skill, then run copychief and copy-judge.
2. Rob reviews both pages in `npm run dev` before any commit of the copy.
3. Clean `npm run build`, commit, push.
4. Deploy with `vercel deploy --prod --yes`, then verify both live URLs, canonicals, JSON-LD and sitemap entries.
5. Request indexing in Search Console and submit to IndexNow.

## 10. Measuring it

- **Bookings:** corporate bookings counted from the Calendly "how did you hear about me" answer and the booking's email domain, recorded in the leads ledger.
- **Search:** impressions and position for "corporate copywriter", "corporate copywriting", the two feeder queries, and "executive speechwriter", "speechwriter" and "speech writer for hire", via `seo gsc robpalmer-site`. The speechwriter terms start from zero, so the first measure is whether the page is indexed and gains impressions.
- **Checkpoint:** 2027-01-27 (60 days). If the pages are indexed and have drawn no corporate booking, decide between a feeder post aimed at "copywriting services vs in-house" and a LinkedIn route. If it has drawn one, scope the sub-pages from approach B.

## 11. Decisions confirmed by Rob (2026-11-28)

- Two pages approved. More pages can follow where the evidence supports them; none are scoped here.
- "Reckitt & Colman" is the correct spelling.
- Speech types: all four listed in section 6, with conference keynotes leading.
- Gary Lubner may be named as a speechwriting client. Other executives are described by role only.
