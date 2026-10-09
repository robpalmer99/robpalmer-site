# robpalmer.com performance (lab, Lighthouse 13.5.0, 2026-10-09, live production)

Method: Lighthouse via npx, local Chrome, simulated mobile (Moto G Power, slow 4G, 4x CPU) and desktop preset. One run per page and form factor, so scores are noisy by roughly +/-5 on mobile. No field (CrUX) data. INP cannot be measured in a lab run, so TBT is the proxy.

## Performance score: 92/100 (mobile average 92, desktop 100)

| Page | Mobile score | LCP | CLS | TBT | Weight | Desktop score / LCP |
|---|---|---|---|---|---|---|
| Homepage | 96 | 2.5s (borderline) | 0 | 130ms | 622KB | 100 / 0.5s |
| /services/direct-response-copywriter | 90 | 3.6s (needs improvement) | 0 | 90ms | 605KB | 100 / 0.6s |
| Blog: creative-strategist-salary | 86 | 4.0s (at poor threshold) | 0 | 130ms | 702KB | 100 / 0.6s |
| /services | 97 | 2.4s | 0 | 110ms | 695KB | 100 / 0.5s |

Core Web Vitals proxy: CLS passes everywhere (0). TBT is 90-130ms, which points to INP likely being fine. Mobile LCP fails or is borderline on 2 of 4 pages (blog, money page) under lab throttling. Desktop passes everywhere. TTFB is about 125ms on all pages.

## Ranked issues

1. Mobile LCP on the money page (3.6s) and blog posts (4.0s). Both are hero-image LCPs. The image is already AVIF (10-12KB at w=750) and already preloaded. The weak points are elsewhere:
   - Blog: resource load duration is about 360ms and TTFB about 136ms.
   - Money page: element render delay is about 358ms, meaning the image has arrived but paint is waiting. The likely cause is render-blocking CSS and main-thread work: the 15KB CSS is flagged render-blocking, and about 270ms of 1st-party JS runs on boot.
   - Fixes to try: inline critical CSS or use experimental `inlineCss`. Add `fetchPriority="high"` to the hero image. Cut the boot-time JS (item 2). Serve a 640w or smaller hero on mobile; the 750w variant is picked because sizes is 100vw at DPR 1.75.
2. JS weight and boot time. About 220KB of 1st-party JS per page across 16-18 requests. One shared chunk (584-*.js) is 104KB and is the main script-evaluation cost (145-276ms). Lighthouse flags about 134KB of unused JS. Hunt for what is in chunk 584 with `@next/bundle-analyzer`. Likely suspects are Sentry client, framer-motion or FadeIn, and Calendly.
3. Sentry is still costing every visitor. The fix to cut Sentry waste is working for bots, but real users still download `browser.sentry-cdn.com/10.76.2/replay.min.js` (48.5KB, 22KB unused) on every page. `lazyLoadIntegration("replayIntegration")` runs unconditionally in `src/instrumentation-client.ts`, although only 10% of sessions are sampled for replay and 100% of error sessions are captured. Sentry also adds about 1-2 fetches per page through the `/monitoring` tunnel. Options: load replay only when the session is sampled, or on the first error, or on idle after the load event; or drop replay (`replaysSessionSampleRate` 0.1 means 90% of the downloads are wasted). That would save about 48KB and one third-party request on every page.
4. Google Analytics gtag, 172KB transfer and about 135-145ms of boot time, is loaded with `lazyOnload`, which is correct. It is the single largest third-party cost and the biggest contributor to TBT. Consider Partytown, or a GA4 loader that only runs after the first interaction.
5. Render-blocking stylesheet. One CSS file (15KB, `cdb1dd14...css`) is flagged render-blocking, estimated savings 110ms on /services mobile. Low effort to improve with `experimental.inlineCss`.
6. /services index images. 7 images load (90KB, all AVIF, w=750). Lighthouse estimates 24-33KB savings from tighter dimensions or lower quality, since the cards render smaller than 750w. Set a smaller `sizes` (cards are about 1/3 or 1/2 width on desktop) and `quality={60}`.
7. Fonts, minor. Fraunces and Lora are self-hosted through `next/font/google` with `display: 'swap'` and woff2 preload of the 2 main files (about 37KB each). There is no render-blocking font request, no FOIT, and CLS is 0. A third, non-preloaded woff2 (about 17-18KB) loads on the homepage and blog, probably Lora italic or another weight. It could be dropped or subset if not needed above the fold. The /connect page's `Prompt` font is only loaded there.

## What is working

- All raster images are served as AVIF through `/_next/image` with srcset and sizes. Verified: hero 10-12KB at w=750. Home logos and testimonials are w=256 AVIF at 3-4KB each. (One logo, clickbank.png, was served as PNG at 1KB; trivial.)
- Hero images are `<link rel=preload as=image>` with imageSrcSet. Below-fold avatars are `loading="lazy"`.
- CLS is 0 on all four pages. Image dimensions are set. Fonts use swap with size-adjusted fallbacks from next/font.
- TTFB is about 125ms from the edge. Document size is 14-27KB.
- Total transfer is 600-700KB per page, which is reasonable. Blog page weight includes about 100KB of RSC payload fetches (Fetch requests, 104KB), worth watching as posts get longer.
- Bot gating of Sentry init works as designed (no bot traffic to measure here, but the code is correct).

## Raw data
Lighthouse JSON for each page and form factor: lh-{home,drc,blog,svc}-{mobile,desktop}.json in the scratchpad directory.
