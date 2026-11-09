# Booked-calls review and growth decision, 2026-11-09

Decision record. Rob reviewed how robpalmer.com produces booked calls, paused the DTC outbound campaign, and chose to double down on SEO/GEO with (a) a decision-stage content programme on robpalmer.com and (b) one new agency website leveraging Ben's team. Rob is sourcing the agency domain himself (gofreelance.com ruled out: wrong name, reserved for another project).

Companion documents: `docs/content/2026-11-content-plan.md` (what to publish) and `docs/strategy/2026-11-09-agency-site-scope.md` (the second site).

## 1. Where booked calls come from

Inbound Calendly bookings, from the leads ledger (`~/dev/leads`):

| Month | Bookings | Outcome so far |
|---|---|---|
| Jul 2026 | 3 | 0 won (one declined by Rob, one chose other writers, one no detail) |
| Aug 2026 | 3 | 0 won (two silent after call, one declined the invite) |
| Sep 2026 | 0 | |
| Oct 2026 | 6 | 1 won (Austin Homolka, Phase 1 $3,000), 3 proposals waiting, 2 declined |
| Nov 2026 (to 9th) | 2 | Jason Katz call 10 Nov; Scott Nobriga rebooking |

Run rate: 5 to 7 bookings a month since October, roughly one in six closing. Target is 10 to 20 a month.

Sources on every booking where it is known:

| Lead | Source | Page that did the work |
|---|---|---|
| Bryan Ward (29 Oct) | Gemini thread on what works for VSLs in 2026 | `/blog/state-of-vsl-marketing-2026` |
| Rob Sader (31 Oct) | Google Gemini, a "top 10 copywriters" article | `/blog/famous-copywriters` (or the best-DR-copywriters post) |
| Jason Katz (6 Nov) | "a blog post about a Claude skill" | one of the `/blog/claude-code-*-skill` posts |
| Scott Nobriga (6 Nov) | Google search | unknown (TSL under 1%, supplement) |

The Calendly "how did you hear about me" question went live 2026-10-23, so November is the first month with a source on every booking.

Outbound (DTC teardowns, 2026-09-28 to 2026-10-30): about 70 personalised sends, two replies (Andrew Shack forwarded to a partner; Drew Gorski held a call and went quiet), zero bookings via the campaign CTA. Paused 2026-11-09.

## 2. What the traffic data says

From `docs/seo/2026-10-30-monthly-review.md` and a fresh 90-day GSC pull (2026-08-08 to 2026-11-06):

- Google clicks peaked in August (1,401) and have slid about 30% since. ChatGPT referrals halved in October. October was still the best booking month. Bookings do not track traffic volume.
- The high-traffic pages (famous-copywriters, copywriting-hooks, what-is-a-vsl, copywriter-salary) are informational. They are AI Overview citations now and will not be click sources again. They are not where bookings come from, except as list-citations ("top copywriters").
- The pages that booked calls share three traits: they answer a decision-stage question, they are dated and opinionated (state-of, best-X-to-hire), and AI assistants cite them.
- Commercial-intent queries the site already appears for but does not win (90d): "is copywriting agency worth it?" 252 impressions at position 29; "best vsl copywriters" 195 at 3.4 (3 clicks); "how much does it cost to hire a copywriter" 173 at 5 to 11; "tsl vs vsl" 40 at 6; "direct response copywriter for hire" 39 at 9.6; "hire a sales copywriter" 18 at 27.8. All with zero or near-zero clicks, which means no page is built for them.
- Backlinks: 13 referring links, unchanged since July. This is the binding constraint for the head terms and the reason a new domain starts from nothing.

## 3. The decision

1. **Pause the DTC outbound campaign.** Routine `dtc-evening-send` disabled 2026-11-09. 45 no-reply contacts parked in the ledger. Two staged slates (11-02, 11-03) left unarmed in `outbound-lead-generation/dtc/outreach/staged/`. Drew Gorski (waiting to 2026-12-01) and Andrew Shack stay open. No link-building outreach either; natural link growth only.
2. **robpalmer.com: decision-stage content programme.** Write for the question that booked the call. Details in the content plan.
3. **One new agency site, not two.** A combined creative and copy agency powered by Ben's team, Rob named as founder and creative director. A copywriting agency and a creative strategy agency are the same buyer and would compete with each other for the same terms. Third site reconsidered only after the agency site books its first call.
4. **Test agency demand on robpalmer.com now** with one page aimed at agency-intent queries, so the demand signal arrives in 60 days while the new domain earns its way.

## 4. Why not three sites now

- A fresh domain has zero authority, zero links, no entity in the AI models, no testimonials, no portfolio. robpalmer.com needed seven months and about 150 posts to reach its current level. Realistic time to a first booking from a new domain is six to twelve months.
- The AI-citation engine runs on the person entity "Rob Palmer, 40 years, $523M+". A faceless agency brand borrows that only by naming Rob as founder. Two agency sites split the borrowed authority.
- Agency-ticket prospects convert on proof. The Smile Spirits pitch has not yet become a delivered engagement. The first delivered engagement through Ben's team is worth more to the agency site than its first 30 posts.
- Every site is another Search Console, sitemap, schema set, monthly review and AI-visibility check.

## 5. Targets and checkpoints

- **Bookings:** 10 a month by 2027-03-31, 15 by 2027-06-30. Track by source from the Calendly question; the monthly SEO review (`docs/seo/`) reports it.
- **Content:** 8 new decision-stage posts and 4 refreshes a month on robpalmer.com (see plan).
- **Agency site:** domain chosen Nov 2026; build plus 15 seed posts Dec; launch Jan 2027; first booking target by 2027-06-30.
- **Agency demand test:** 60 days after the robpalmer.com agency page ships, check impressions on "copywriting agency", "creative strategy agency", "agency vs freelance" queries. Any impressions at all validates demand for the new site's keyword set.
- **Next review:** 2026-11-30 monthly SEO review, then 2027-01-31 for the first read on the new content.
