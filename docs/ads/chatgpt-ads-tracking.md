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
