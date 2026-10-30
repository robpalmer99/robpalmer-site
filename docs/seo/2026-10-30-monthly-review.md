# SEO monthly review, October 2026 (pulled 2026-10-30)

Windows: GSC Oct 1–27 vs Sep 1–27 (GSC lags 3 days, so the windows are the same length). GA4 Oct 1–29 vs Sep 1–29. Bing calendar months. Baselines: `2026-10-09-audit/gsc.md` (90d audit) and `2026-10-repositioning/README.md` (the 2026-10-19 repositioning). This review also serves as the +2-week repositioning checkpoint that was due 2026-11-02.

Raw pulls and the scripts that made them lived in the session scratchpad (`seo/gsc_review.py`, `gsc_drill.py`, `ga4_review.py`, `ga4_review2.py`, `bing_review.py`); the numbers below are copied from their output.

## 1. Headline: Google organic is sliding, slowly, for reasons outside the site

| Window | Clicks | Impressions | CTR | Avg pos |
|---|---|---|---|---|
| Oct 1–27 | 988 | 71,600 | 1.38% | 9.3 |
| Sep 1–27 | 1,169 | 93,308 | 1.25% | 8.3 |
| Change | −15% | −23% | +0.13pt | −1.0 |

Monthly since April: 191 → 318 → 591 → 1,109 → 1,401 (Aug peak) → 1,300 (Sep) → 988 (Oct, 27 days; ~1,100 pro rata).

Weekly clicks (Mon start): 368, 288, 309, 268, 260, 253, 234, 261 (Aug 31 → Oct 19). A steady slide of roughly 30% over eight weeks, no cliff, no date that matches a deploy.

Device: desktop clicks −21% (914 → 718), mobile +9% (246 → 267). Country: USA −17%, India −31%, UK +13%.

### Where the lost clicks are

| Page | Oct clk/impr/pos | Sep clk/impr/pos | Δ clicks |
|---|---|---|---|
| /blog/claude-code-copywriting-skills | 98 / 1,941 / 5.6 | 158 / 2,726 / 5.7 | −60 |
| /blog/claude-code-ad-copy-skill | 82 / 1,480 / 6.2 | 108 / 1,946 / 6.2 | −26 |
| /blog/claude-code-copychief-skill | 25 / 752 / 7.1 | 51 / 1,112 / 6.7 | −26 |
| /blog/is-copywriting-dead | 44 / 3,090 / 5.3 | 69 / 3,608 / 5.2 | −25 |
| /blog/what-is-a-vsl | 18 / 7,467 / 5.6 | 42 / 14,972 / 6.4 | −24 |
| / (home) | 26 / 337 / 5.7 | 49 / 665 / 7.0 | −23 |
| /blog/state-of-vsl-marketing-2026 | 9 / 1,245 / 6.6 | 21 / 2,587 / 6.8 | −12 |

Three distinct causes, none of them a ranking loss:

1. **The Claude-skill posts are losing demand, not rank.** Positions are unchanged (5.6, 6.2, 7.1) and the query mix is the same 80 queries; impressions on "claude copywriting skill" style queries fell ~30%. The novelty wave is receding. These three posts plus famous-copywriters were ~1,900 of the audit's 3,751 clicks, so the slide will continue unless they are refreshed for whatever Claude Code ships next.
2. **AI Overviews are taking the definitional clicks.** "vsl" went from 1,757 impressions / 6 clicks to 878 / 0 at a *better* position (7.8 → 6.2); "what is a vsl" 718 / 3 → 462 / 0 at pos 5.0. Checked the live US SERP on 2026-10-30: there is an AI Overview and **robpalmer.com/blog/what-is-a-vsl is its first citation**. Same pattern on "is copywriting dead" (13 → 3 clicks at pos 2.8). The citation is worth keeping (Bryan Ward's 29 Oct booking came from a Gemini answer that cited the state-of-VSL post), but these posts will not be click sources again.
3. **Home page brand clicks fell** ("rob palmer" 18 → 6 clicks at pos 7.7 → 6.9). September's home impressions were padded by other-Rob-Palmer queries ("art sentry", "milestone bank", 258 impressions) that vanished, so the impression halving is noise; the click drop is real but small. Post-repositioning daily rate on the home page went *up* (0.8 → 1.2 clicks/day), so the 10-19 title change is not the cause.

Notable among the rest: /blog/copywriting-templates dropped 9.1 → 13.6 (2,374 → 1,256 impressions); /blog/copywriting-hooks lost 75% of its impressions (6,297 → 1,576) but held its clicks (53 → 51) at a better position (7.9 → 5.3), which is the junk long tail falling away.

## 2. Repositioning checkpoint (shipped 2026-10-19): no damage, early signal

Decision rule was "a sustained drop of more than ~5 positions on 'direct response copywriter' triggers a review". **Not triggered.**

| | Oct 1–18 (pre) | Oct 19–27 (post) |
|---|---|---|
| q contains "direct response copywriter" pos | 7.3 | 7.0 |
| / clicks/day | 0.8 | 1.2 |
| /blog/best-direct-response-copywriter-to-hire clicks/day, pos | 0.5, 10.3 | 0.7, 10.2 |

Google has recrawled every repositioned page: `/` 10-29, `/about` 10-19, `/services` 10-22, `/services/creative-strategist` 10-24, `/services/ai-marketing-consultant` 10-23, `/services/direct-response-copywriter` 10-22, `/portfolio` 10-26. All "Submitted and indexed", self-canonical. Sitemap: 187 URLs, 0 errors, last read 10-28.

Repositioned pages, Oct vs Sep (clicks/impr/pos): `/` 26/337/5.7 vs 49/665/7.0; `/about` 1/146/5.6 vs 3/185/5.6; `/services` 0/41/4.5 vs 1/51/5.9; **`/services/creative-strategist` 0/26/8.2 vs nothing** (first impressions, all after 10-19); `/services/direct-response-copywriter` 1/24/12.0 vs 0/24/20.3 (eight positions better); verticals unchanged and tiny except `/verticals/financial-copywriter` at 715 impressions, pos 22.7.

## 3. The two keyword clusters

### Money cluster "direct response copywriter"

| Query | Oct clk/impr/pos | Sep clk/impr/pos |
|---|---|---|
| direct response copywriter | 1 / 120 / 8.4 | 1 / 62 / 7.3 |
| direct response copywriters | 0 / 35 / 5.2 | 1 / 46 / 3.3 |
| best direct response copywriters | 1 / 30 / 3.1 | 3 / 35 / 2.8 |
| direct response copywriter for hire | 0 / 15 / 7.5 | 0 / 8 / 6.8 |
| cluster total | 2 / 226 / 7.2 | 5 / 167 / 4.9 |
| direct response copywriting | 0 / 196 / 16.9 | 0 / 32 / 14.3 |

Head-term impressions doubled, positions slipped about a point, clicks still ~0. The ranking URL is still `/blog/best-direct-response-copywriter-to-hire` for every head term (the service page shows once, pos 9, 3 impressions). Live SERP 2026-10-30: AI Overview present (cites Stefan Georgi's YouTube and Indeed, not us); robpalmer.com is the 12th distinct host on the page, via the blog post. "direct response copywriting" grew from 32 to 196 impressions at pos 16.9, also on the blog post.

### Creative-strategist cluster

| Page | Oct clk/impr/pos | Sep clk/impr/pos | Last crawl |
|---|---|---|---|
| /blog/creative-strategist | 2 / 243 / 7.8 | 1 / 256 / 8.2 | **2026-07-16** |
| /blog/hire-a-creative-strategist | 1 / 81 / 9.0 | 0 / 5 / 4.6 | 2026-10-09 |
| /blog/creative-strategist-salary | 1 / 85 / 5.7 | 1 / 41 / 3.6 | 2026-09-25 |
| /services/creative-strategist | 0 / 26 / 8.2 | — | 2026-10-24 |

The recrawl Rob requested on 10-09 worked: the hire post went from 5 to 81 impressions, almost all on "what should I look for when hiring an offshore creative strategist?" (22 impr, pos 5.5). Query volume on literal "creative strategist" terms is still tiny (28 impressions, 0 clicks). **The explainer, which carries most of the cluster's impressions and was edited on 10-19 to link the new service page, has not been crawled since 16 July.** Google has not seen the de-cannibalisation or the money-page link.

## 4. Other channels (GA4)

| Channel | Oct sessions / engaged / key events | Sep | Note |
|---|---|---|---|
| Organic Search | 1,779 / 789 / 35 | 2,070 / 1,015 / 29 | −14%, matches GSC |
| Direct | 2,454 / 304 / 57 | 1,875 / 202 / 24 | +31%, but 642 sessions landed on `/create` from Thailand: the first ChatGPT ads run arriving untagged. Ignore. |
| AI Assistant | 151 / 75 / 17 | 273 / 113 / 8 | **−45%** |
| Paid (chatgpt / cpc) | 43 / 11 / 4 | 0 | the relaunched ads |
| Referral | 87 / 50 / 0 | 52 / 22 / 3 | github.com 64 (31 in the week of 10-19) |

**ChatGPT referrals halved**: 234 → 145 sessions; weekly 41–66 through September, 20–28 in the last two October weeks. Perplexity 21 → 5. Portfolio landings from ChatGPT 35 → 17. Key events from ChatGPT went 8 → 17, but September was double-counted (fixed 10-23), so the real comparison is about 4 → 12, and ChatGPT is now sending `/services/creative-strategist` (5 sessions) and `/services/vsl-copywriter` (4) traffic it never sent before.

Booking intent (`calendly_click`, deduped era 10-23 to 10-29, 7 days): `/call` 8, `/` 6, `/lp/copy` 6, famous-copywriters 2, `/services/creative-strategist` 1.

**Bing** (calendar months): clicks 62 (Aug) → 35 (Sep) → 29 (Oct, 27 days); impressions 4,542 → 4,220 → 2,041. Inbound links still 13 across 5 targets (8 to the home page), identical to the 10-10 baseline. 203 pages in Bing's index, 0 crawl errors.

## 5. What the month produced

Four inbound Calendly bookings in October (Karim Hajee 10-15, Scott Simcik 10-20, Susan 10-21, Bryan Ward 10-29). Two proposals out (Scott, Susan), one due 2026-11-02 (Bryan). Only Bryan's source is known: a Gemini thread citing `/blog/state-of-vsl-marketing-2026`. The Calendly "how did you hear about me" question only went live on 10-23, so November is the first month with sources on every booking. Zero bookings from the ChatGPT ads (see `docs/ads/chatgpt-ads-tracking.md`).

## 6. Open items from the 10-09 action plan

Still open: 6 (content refreshes on the striking-distance posts; metas done), 7 (salary-post link outreach, Rob), 12 (/call vs /contact decision, Rob), 13 remainder (meta hygiene batch). Backlinks remain the binding constraint: 13 inbound links, zero landed placements since the July entity plan.

## 7. Actions

1. **[Rob, 2 min] Request indexing for `/blog/creative-strategist` in the GSC UI.** Last crawl 16 July; the 10-19 edits and the money-page link are invisible to Google. This is the single cheapest thing on the list.
2. **Refresh the three Claude-skill posts** (`claude-code-copywriting-skills`, `-ad-copy-skill`, `-copychief-skill`) for the current Claude Code skills surface, bump `updated`, and add whatever is new in the skills repo. They are the site's largest click source and are decaying on demand, not rank.
3. **Stop expecting clicks from definitional posts.** `what-is-a-vsl`, `is-copywriting-dead` and `state-of-vsl-marketing-2026` are now AI Overview citations. Keep them accurate and citable (they produced Bryan's booking via Gemini); do not spend CTR effort on them. The 10-09 "CTR work on what-is-a-vsl" item is withdrawn.
4. **Striking-distance refreshes, in this order:** `sales-letter-examples` (2,782 impr, pos 13.1), `sales-page-examples` (2,043, 13.5), `copywriting-templates` (slipped 9.1 → 13.6), `copywriting-skills` (1,462, 13.7). Still action-plan item 6.
5. **Watch ChatGPT referrals in November.** A 45% drop in one month on the #3 source. If it persists through 11-30, check the Bing AI Performance report and the `llms.txt` freshness items from `geo.md` before assuming it is ChatGPT-side.
6. **Link outreach stays the lever** for both clusters (action-plan item 7). Nothing on-site will move "direct response copywriter" off the blog post onto the service page without referring domains.

Next checkpoint: **2026-11-30** (+6 weeks on the repositioning, and the first full month with booking sources). Run the three commands in `2026-10-repositioning/README.md` plus the monthly scripts above.
