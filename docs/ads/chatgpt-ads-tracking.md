# ChatGPT (OpenAI) ads: attribution setup

Added 2026-10-23 after the first campaign (early–mid October 2026) ran with
untagged landing URLs and no pixel, which made it impossible to tell whether
the bookings that followed came from the ads or from ChatGPT citing the site
organically (ChatGPT has been the #3 traffic source since August).

## What is wired in the site

- **OpenAI pixel** loads on every page from the root layout when
  `NEXT_PUBLIC_OPENAI_PIXEL_ID` is set. Unset = nothing is rendered, so
  preview/dev builds stay clean. It captures the `oppref` click id that
  ChatGPT appends to ad clicks (30-day `__oppref` cookie) on whatever page
  the ad lands on.
- **Conversions** fire from `src/lib/analytics.ts`, mirrored to GA4 and
  OpenAI together:
  - Calendly `event_scheduled` → OpenAI `appointment_scheduled`
  - Contact form sent → OpenAI `lead_created`
- The pixel ID is public by design (it is in the page source on every site
  that uses one); `NEXT_PUBLIC_` is correct.

## Before the next campaign

1. Get the pixel ID from Ads Manager → Conversions → pixel.
2. Set it in Vercel for production and redeploy:

   ```
   vercel env add NEXT_PUBLIC_OPENAI_PIXEL_ID production
   npm run build && vercel deploy --prod --yes
   ```

   For local checks, put the same line in `.env.local`.
3. Tag every ad landing URL so GA4 separates paid from organic ChatGPT:

   ```
   https://robpalmer.com/call?utm_source=chatgpt&utm_medium=cpc&utm_campaign=<campaign-name>
   ```

   Next.js and Vercel redirects preserve the query string, so a trailing
   slash or www variant will not drop the tags. ChatGPT adds `oppref`
   itself; do not strip or rewrite it.
4. In Ads Manager, pick `appointment_scheduled` as the optimisation/report
   conversion. `lead_created` covers the contact form.

## Verifying it fires

Open the live site with `?oppref=test` in the Network tab and look for:

- `bzrcdn.openai.com/sdk/oaiq.min.js` (SDK load)
- a `pixel-config` request (pixel ID accepted)
- `v1/sdk/events` with `page_viewed` on load, and `appointment_scheduled`
  after a Calendly booking completes (the calendar's own confirmation, not
  just picking a time).

Then check Ads Manager → Conversions → event stream. Attributed conversions
lag 24–48 h in reports; clicks and impressions refresh in minutes.

## Reading results

- **GA4**: `sessionSource = chatgpt / sessionMedium = cpc` is the ads;
  `chatgpt.com / ai-assistant` remains the organic citations.
- **Calendly** now asks "how did you hear about me" on the booking form;
  record the answer in the leads ledger (`~/dev/leads`) for every booking.
- **Ads Manager** reports impressions, clicks, spend, CTR, CPC, CPM and
  conversions; there is no view-through attribution, so a booking from
  someone who saw the ad but typed the URL later still shows as direct.

## GA4 baseline note

Calendly's embed posts each lifecycle message twice, so every `calendly_click`
count in GA4 before 2026-10-23 is doubled (all daily counts were even). The
embed now reports each event once per widget load. Halve pre-fix figures
when comparing against anything after this date.

## First campaign post-mortem (reviewed 2026-10-23)

Campaign "Creative Strategy Leads", one ad group, one ad, 29 Sep → paused
~17 Oct. Objective Clicks, autobid, THB 500/day, locations US + AU + UK +
TH + CA, creative enhancement ON, no tracking parameters, no conversion
event, landing URL `/create` (the DTC-teardown outreach lander).

| 30-day totals (Ads Manager) | |
|---|---|
| Spend | THB 9,253 |
| Impressions | 52,896 |
| Clicks | 967 |
| Avg CPC | THB 9.57 |

GA4 saw 713 of those clicks land on `/create?oppref=...` and filed them as
**direct** (no referrer), which is why ChatGPT referral traffic looked flat.
**705 of 713 were from Thailand**, 78% mobile, 13% engaged, median visit a
few seconds, 7 visits to /call, 2 Calendly interactions, 0 bookings. The
four October bookings (US, Canada, Eastern Europe) were not from the ads.

Root causes: Thailand in the location list + autobid "maximize results"
bought the cheapest clicks available; creative enhancement auto-translated
the ad for Thai users; the ad promised "scale your brand to the moon with
the 40-year-old AI trick" and landed on a long pitch written for people who
had already received a personal teardown email.

## Retest setup (done 2026-10-23)

- Data source `robpalmer.com`, pixel ID `QVds6vXEq7o879frFvQm3x`, set as
  `NEXT_PUBLIC_OPENAI_PIXEL_ID` in Vercel production and deployed. Automatic
  advanced matching is on (the data source has no toggle for it).
- CSP in `next.config.ts` allows `bzrcdn.openai.com` (script + pixel-config)
  and `bzr.openai.com` (events). Without it the SDK was blocked in
  production. Verified live: SDK 200, `__oppref` cookie set, "Pixel
  Initialization" events in the Ads Manager event stream.
- Conversion events: "Strategy call booked" (appointment_scheduled) and
  "Contact form lead" (lead_created), 30-day click / 1-day view windows.
- Campaign: United States only, Thailand excluded, creative enhancement off,
  tracking parameters
  `utm_source=chatgpt&utm_medium=cpc&utm_campaign={campaign_id}&utm_content={ad_id}`,
  "Strategy call booked" linked. Still paused.
- The objective (Clicks) is locked on an existing campaign. Optimising for
  bookings needs a new campaign with a conversions objective.
- Ad group context hints replaced with founder-conversation phrases.
- Still open: new ad copy and the landing URL (currently /create). Both
  wait on Rob's approval.

## Relaunch build (2026-10-23)

- **Real ad limits are tighter than OpenAI's docs:** the Ads Manager form
  caps the title at 32 characters and the description at 54 (docs say
  50/100). Write to 32/54.
- **Two ad groups** in "Creative Strategy Leads":
  - "Creative Strategy 1" (DTC, Meta-creative hints) → https://robpalmer.com/lp/ads
  - "Copywriting 1" (regular businesses, copy hints) → https://robpalmer.com/lp/copy
- **Ten ads**, five per group, named A1–A5 and B1–B5 in the Ads Manager.
  All reuse the old growth-chart image. The original "To The Moon" ad is
  paused.
- **Landers** live at /lp/ads and /lp/copy: noindex, not in the sitemap,
  shared shell `src/components/landers/AdLander.tsx`, copy in each page
  file. The Calendly embed carries `utm_campaign=lp-ads` / `lp-copy`, so
  Calendly records which lander a booking came from.
- Advertiser name shown on ads is the account name, "GoFreelance".
- Campaign still paused; relaunch is Rob's call.

## Brand and images (2026-10-23)

- Ads show brand name **Rob Palmer** (Settings → General: "Use this as your
  brand and legal business name" unticked, so the legal/billing name stays
  GoFreelance). Logo is the gold "RP" monogram. Account-level creative
  enhancement switched off as well as the campaign-level setting.
- Images: one per ad, square, gpt-image-1 high quality, in
  `docs/ads/images/v2/` (prompts in `prompts2.json`). Rob rejected the
  first dark set (`v1/`) as too dark; v2 is bright, high-key, with gold as
  the brand accent. No text in images; each is a visual question the
  title answers. B3 uses Rob's real headshot as the reference.
- To swap an ad image in the Ads Manager: Edit Ad → "Clear selected image"
  → file input appears → "Edit image" crop dialog → Save changes → Save.

## Relaunched 2026-10-23

Campaign switched on by Rob's go at about 11:50 Bangkok. Campaign, both
ad groups and all ten ads show "Serving"; the old "To The Moon" ad stays
paused. Pre-relaunch lifetime totals on the campaign (for subtracting
later): 19,977 impressions, 308 clicks, THB 3,861.20 spend in the
10 Oct–23 Oct window shown.

First checks:
- Day 1–2: impressions and clicks are coming from the US only (GA4
  country for `chatgpt / cpc` sessions), and the Ads Manager event stream
  shows page_viewed from real ad clicks.
- Day 7 (2026-10-30): cut the weakest ads in each group by CTR; compare
  lander engagement and Calendly clicks for lp-ads vs lp-copy.
- Day 21 (2026-11-13): judge on bookings, then decide whether to create a
  conversions-objective campaign.

## Day-7 check routine

Cloud routine `trig_018rAYE2BvGLdXaySGn98Wq5` ("ChatGPT ads day-7 check
(2026-10-30)") fires once at 2026-10-30 08:00 Bangkok (01:00 UTC). It is
read-only: it searches Gmail for Calendly bookings since the relaunch,
cross-checks them with the leads repo, classifies each by the "How did you
hear about me?" answer, and emails rob@gofreelance.com. GA4 and the Ads
Manager are not reachable from the cloud, so the email ends with a prompt
to paste into Claude Code locally, which runs `scripts/chatgpt_ads_report.py`
and reads per-ad CTR in the Ads Manager.
https://claude.ai/code/routines/trig_018rAYE2BvGLdXaySGn98Wq5

## Day-5 check (2026-10-28)

Ads Manager, 23–28 Oct (Bangkok time; the 23rd shows no delivery, today is
preliminary): **THB 2,639 spend, 5,884 impressions, 52 clicks, CTR 0.88%,
avg CPC THB 65.98, 0 conversions.** Daily spend: 24th 974, 25th 635,
26th 540, 27th 490, so the THB 500/day budget is spent in full, with
overdelivery on day one. CPC is about 7x the first campaign's THB 9.57;
that is the price of US-only traffic.

| Ad | Impr | Clicks | CTR | Spend |
|---|---|---|---|---|
| B3 523M | 1,521 | 19 | 1.25% | 721.75 |
| B5 Raise ROI | 1,837 | 16 | 0.87% | 722.49 |
| B4 Good offer | 1,440 | 8 | 0.56% | 582.07 |
| A4 ChatGPT ads | 359 | 6 | 1.67% | 489.49 |
| B1 Pays for itself | 331 | 2 | 0.60% | 97.48 |
| A3 Ads stop working | 46 | 1 | 2.17% | 25.87 |
| B2, A1, A2, A5 | 43–165 each | 0 | – | 0 |

Ad groups: Copywriting 1 took THB 2,124 (80%), Creative Strategy 1 THB 515.
GA4 saw only 24 `chatgpt / cpc` sessions against 52 billed clicks, so about
half the clicks never register as a session (bounce before GA4 loads, or
consent). GA4 engagement on /lp/copy was 2 of 19 sessions. No Calendly
bookings since the relaunch.

## /lp/copy first-screen rewrite (deployed 2026-10-28)

The ads that spend (B3 "$523M", B5, B4) all say "your traffic is fine, the
words are the problem", but the lander opened on a generic "Get More Leads,
More Customers, and More Sales" headline with no face and no proof above the
fold on mobile. New first screen: headline "Getting Clicks but Not Enough
Sales? It's Usually the Words.", headshot + "40 years writing sales copy.
$523M from one mail campaign.", the 8% result in the subhead, and a note
under the CTA. The "launching" audience moved out of the hero.

GA4 now loads `afterInteractive` on the landers only (AdLander); the rest of
the site keeps `lazyOnload`. **Engagement and session counts for paid traffic
are not comparable across 2026-10-28**: more fast bounces are now counted.

## Day-7 check (2026-10-30)

Ads Manager window 17–30 Oct (Bangkok; 30 Oct preliminary). The new ads
only exist from 23 Oct, so their lifetime figures are the relaunch figures.
The old "To The Moon" ad (Not serving) still shows 1,882 impressions /
24 clicks / THB 281.66 in this window from before the relaunch; it is
subtracted from the Creative Strategy 1 numbers below.

| Relaunch totals (new ads) | |
|---|---|
| Spend | THB 3,789 (≈ THB 540/day on a THB 500/day budget) |
| Impressions | 8,262 |
| Clicks | 72 |
| CTR | 0.87% |
| Avg CPC | THB 52.63 |
| Conversions | 0 |

| Ad group | Lander | Spend | Impr | Clicks | CTR | CPC |
|---|---|---|---|---|---|---|
| Copywriting 1 | /lp/copy | 2,924.71 | 7,128 | 60 | 0.84% | 52.23 |
| Creative Strategy 1 (new ads) | /lp/ads | 864.57 | 1,134 | 12 | 1.06% | 72.05 |

| Ad | Impr | Clicks | CTR | Spend | CPC | GA4 sessions* |
|---|---|---|---|---|---|---|
| B3 523M | 2,673 | 30 | 1.12% | 1,141.80 | 43.92 | 30 |
| B5 Raise ROI | 2,314 | 20 | 0.86% | 1,103.36 | 55.17 | ≤7 |
| B4 Good offer | 1,666 | 8 | 0.48% | 582.07 | 72.76 | ≤7 |
| B1 Pays for itself | 365 | 2 | 0.55% | 97.48 | 48.74 | ≤2 |
| B2 Traffic no sales | 110 | 0 | 0% | 0 | – | 0 |
| A4 ChatGPT ads | 719 | 10 | 1.39% | 771.41 | 77.14 | 5 |
| A5 Old ad broken | 228 | 1 | 0.44% | 67.29 | 67.29 | ≤1 |
| A3 Ads stop working | 70 | 1 | 1.43% | 25.87 | 25.87 | ≤1 |
| A2 Same budget | 62 | 0 | 0% | 0 | – | 0 |
| A1 Clicks no sales | 55 | 0 | 0% | 0 | – | 0 |

*GA4 `chatgpt / cpc` sessions by `utm_content` ad id. The Ads Manager
table does not expose ad ids, so the mapping is inferred from volumes:
`ad_224576…` (30 sessions, /lp/copy) can only be B3, and the remaining
/lp/copy ids carry 7, 2 and 1 sessions against B5/B4/B1's 20/8/2 clicks.
Under every assignment B5 turns at most 7 of 20 billed clicks into a
session (cost per landed session ≥ THB 158) while B3 lands all 30
(THB 38). Confirm the ids on the 11-13 check (open each ad's edit view).

**Pause decisions (recommended, not yet applied):**
- Copywriting 1: pause **B4** (lowest CTR at volume, most expensive
  clicks, 0 clicks from its last ~226 impressions, 20% of group spend) and
  **B2** (0 clicks from 110). Keep B3 and B5; B1 is too small to judge.
  B5 is the next cut if its click→session rate stays this low once the
  ad-id mapping is confirmed.
- Creative Strategy 1: pause **A5** (0.44%). Keep A4 (best CTR in the
  group, but CPC 77 / CPM 1,118 and no lander engagement). A1–A3 have
  55–70 impressions each and cost nothing; leave them. The group's real
  problem is that it wins few auctions (1,134 impressions in 7 days vs
  7,128) and its lander shows no engagement.

**Lander comparison (GA4, 23–30 Oct):**

| | /lp/copy | /lp/ads |
|---|---|---|
| Billed clicks | 60 | 12 |
| Sessions | 40 (37 + 3 with lander unset, all B3) | 6 |
| Engaged sessions | 10 (27%) | 1 (17%) |
| Avg duration | 25 s | 2 s |
| calendly_click | 3 (+1 unset) | 0 |
| Bookings | 0 | 0 |

/lp/copy before vs after the 28 Oct first-screen rewrite: 23–27 Oct
18 sessions, 2 engaged (11%), 5 s, 1 calendly_click; 28–30 Oct 19
sessions, 8 engaged (42%), 43 s, 2 calendly_clicks. The GA loading change
on the 28th counts more fast bounces, which works against the new hero,
so the direction is real even though the counts are small. B3's sessions
alone went from 2/14 engaged to 6/16.

**Bookings:** one since the relaunch (Bryan Ward, Warrior League, booked
29 Oct, "How did you hear": a Gemini thread → the state-of-VSLs article;
call held 30 Oct, proposal due Mon 2 Nov). None from the ads. Running
total: THB 3,789 for 0 ad-attributed bookings. Next check 2026-11-13:
judge on bookings; Creative Strategy 1 is the first thing to cut if
still zero.
