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
