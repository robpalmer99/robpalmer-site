# robpalmer.com — Full SEO Audit (2026-10-09)

Eight-category audit of the live site: technical, content, schema, sitemap, performance (Lighthouse lab), GEO/AI-search, GSC data (90d vs prior 90d), and backlinks (Common Crawl tier — no Moz/Bing keys). Per-category detail with evidence lives in the sibling files: `technical.md`, `content.md`, `schema.md`, `sitemap.md`, `performance.md`, `geo.md`, `gsc.md`, `backlinks.md`.

## SEO Health Score: 81/100

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 91 | 20.0 |
| Content Quality | 23% | 78 | 17.9 |
| On-Page SEO | 20% | 74 | 14.8 |
| Schema / Structured Data | 10% | 72 | 7.2 |
| Performance (lab CWV) | 10% | 92 | 9.2 |
| AI Search Readiness | 10% | 72 | 7.2 |
| Images | 5% | 88 | 4.4 |
| **Total** | | | **80.7 → 81** |

Notes on scoring: On-Page has no dedicated agent; the score is assembled from the content and technical audits (title/meta hygiene, heading structure, internal linking). Images is derived from the performance agent's checks (all AVIF, srcset correct, minor oversizing on /services cards) — alt-text was not re-audited this pass. Performance is lab-only (no CrUX key); one run per page, ±5 noise. Off-page authority is not a weighted category but is called out below because it is the binding constraint.

## Executive summary

**The on-site engine is working.** Clicks are up 182% period-over-period (3,751 vs 1,330), CTR nearly doubled (1.05% vs 0.62%), and September held ~1,300 clicks on 29% fewer impressions because average position improved to 8.2. The July money-keyword consolidation demonstrably worked: "direct response copywriter" moved from ~28 to ~13–14 and the old cannibalizing posts have vanished from the data.

**Three things are holding back the next step:**

1. **Google hasn't seen the recent work.** The money page `/services/direct-response-copywriter` was last crawled **14 Aug** (before much of the consolidation matured) and `/blog/hire-a-creative-strategist` on **25 Jul** (before the 22 Sep de-cannibalization). Both are stale in the index. Compounding this: the sitemap emits no `<lastmod>` for any static/service/vertical page, blog `dateModified` always equals `datePublished` (template fallback), and the money page has no freshness signal at all — Google has no reason to come back.
2. **The priority cluster isn't wired to the money page.** The creative-strategist posts (the stated SEO focus) send zero automatic link authority to `/services/direct-response-copywriter`: their tags aren't mapped in `content-links.ts`, the related-services block omits it, and the salary post has no body link to it.
3. **Off-page is still empty.** Common Crawl shows effectively zero referring domains; the only verified inbound links are Rob's own GitHub repos; the off-page entity plan (docs/seo/off-page-entity-plan.md) has **zero landed placements** since July. On-site work has hit diminishing returns — the next ranking increment for both the money keyword and the KD-9 creative-strategist cluster is referring domains, and that work is Rob's personally.

**The creative-strategist bet is showing early signal.** The salary post already averages position 3.6 (143 impressions, 4 clicks); the explainer sits at 8.6 with 680 impressions. Query volume is tiny so far (14 queries, 23 impressions) — expected at this stage; link-building is what moves it.

## Category findings

### Technical SEO — 91 (strongest category)
No critical or high issues. robots.txt correct (only `/api/` disallowed; `/_next/` confirmed unblocked; AI bots allowed). All 186 sitemap URLs return 200 with self-canonicals; 308 redirect chains behave (1 hop except the accepted http://www 2-hop quirk); real 404s; full security-header set; `/connect` and `/create` correctly excluded/noindexed. Mediums: `/call` is indexable at sitemap priority 0.9 while the June-review `/call` vs `/contact` decision is still pending; homepage carries 8 JSON-LD blocks (12 on detail pages) worth de-duplicating.

### Content Quality — 78
No thin content anywhere (shortest post 1,592 words, median 3,561). No duplicate titles/descriptions. E-E-A-T experience signals strong (first-person, specific numbers). Gaps: the cluster→money-page linking hole (above); the 3-link cap drops the money-page link from 31 of 150 qualifying posts; 88 posts have no vertical link (only 5 categories mapped); only 7 posts carry markdown external links (authoritativeness); freshness weak — only 21 posts have `updated`, 47 posts pre-date Jun 2025. Hygiene: 123 titles >60 chars, 44 descriptions >160, 40 posts missing `metaTitle`. Three title pairs risk keyword overlap (professional-copywriter-services/sales-copywriter, conversion-copywriting/website-copywriting, saas-copywriting/website-copywriting). Template uniformity (150/150 KeyTakeaways, 147/150 exactly 10 FAQs) is a mild pattern-footprint risk.

### On-Page SEO — 74
Titles/metas unique and keyword-led per policy, single h1s, clean heading structure. Marked down for: the internal-linking gaps above, the title-length overruns, missing `metaTitle` on 40 posts, and money-page H2s being statements rather than questions with direct answers buried in the FAQ (hurts both featured snippets and AI citation).

### Schema — 72
All JSON-LD parses; nothing deprecated; FAQ/claims match visible copy (26 of 27 checked). Structural weaknesses: entity graph unlinked — only Organization has `@id`; Person/WebSite have none and author/provider/founder repeat as bare name stubs; Person vs Organization compete as primary entity (Person should win for a personal brand). Service schema thin (no `offers` despite "from $10K" in copy, same `serviceType` on every page). `dateModified` always equals `datePublished` (fallback in `src/app/blog/[slug]/page.tsx` ~line 104). One FAQ drift: `/blog/advertorial-copywriter` schema vs visible question wording. Missing: ProfilePage on /about, BlogPosting (vs Article), Review markup for the 38 testimonials (entity value only — no star eligibility), OfferCatalog.

### Sitemap — 86
Valid, complete, 186 URLs, zero errors in GSC, no missing indexable pages. The one real gap: no `<lastmod>` on the 36 static/service/vertical entries — `src/app/sitemap.ts` only sets `lastModified` in the blog block. Blog lastmod dates are real (63 distinct values). `priority`/`changefreq` present but ignored by Google (harmless).

### Performance — 92 (lab)
Desktop 100 everywhere. Mobile: homepage 96, /services 97, money page 90 (LCP 3.6s), blog 86 (LCP 4.0s). CLS 0 on every page; TTFB ~125ms; all images AVIF with correct srcset; fonts self-hosted, swap, no FOIT. The LCP drag is not the image (10–12KB, preloaded) but ~360ms render delay: a render-blocking 15KB stylesheet plus ~270ms of boot JS. Sentry Replay (48.5KB) downloads for every human visitor though only 10% of sessions are sampled — `lazyLoadIntegration` runs unconditionally in `src/instrumentation-client.ts`. GA gtag is the largest third-party cost (172KB) but already `lazyOnload`. One shared JS chunk (104KB, ~134KB unused JS flagged) merits a bundle-analyzer look.

### AI Search Readiness (GEO) — 72
Platform estimates: Google AI Overviews 74, Perplexity 70, Bing Copilot 68, ChatGPT 62. Working: all major AI crawlers explicitly allowed; llms.txt live and valid; SSR schema; quotable definition on the creative-strategist explainer; attributed stats on the salary post. Gaps: money page has no freshness signal (the open "GEO freshness" item); unsourced headline stats ($523M, 11K LinkedIn roles, the 40/30/20/10 day-split, concepts-per-week figures); **$523M inconsistency — the money-page FAQ attributes it to "the Belron campaign" while Person schema says across all campaigns**; thin sameAs (LinkedIn/GitHub/X only); llms.txt omits the creative-strategist cluster, /about, case studies, verticals.

### Backlinks — no score (data too thin to score honestly)
Common Crawl: PageRank ~9.25M rank, zero referring domains surfaced in sample. Verified links: the two GitHub repos only (assume nofollow). The skills repo (39 stars) is the strongest link asset; the rates calculator, headline analyzer, salary post, and the Belron/Apple case studies are the others. Free fix found: **Rob's GitHub profile has an empty website field and no bio**. Full tactic list (8 items, no spam) in `backlinks.md`.

## GSC headline data (details and full tables in gsc.md)

| | Clicks | Impressions | CTR | Avg pos |
|---|---|---|---|---|
| Jul 9 – Oct 6 | 3,751 | 357,647 | 1.05% | 11.0 |
| Apr 10 – Jul 8 | 1,330 | 215,581 | 0.62% | 9.2 |

- Money cluster: pos ~28 → ~13–14 (touched 5.6–6.1 in 14-day windows late Aug/Sep, slipped to 9.1 in the latest window on only 64 impressions). 10 clicks vs 1. Fragmentation resolved, but `/blog/best-direct-response-copywriter-to-hire` still carries the head terms; the service page has 115 impressions at pos 28.6 and hasn't been crawled since 14 Aug.
- Creative-strategist cluster: salary post pos 3.6, explainer 8.6 (680 imp), hire post 12.8 (stale crawl 25 Jul).
- Top pages: famous-copywriters 634 clicks (up from 149); the three Claude-skills posts total ~1,050 clicks — the skills giveaway is now the site's biggest traffic engine.
- Striking distance (pos 11–20): sales-letter-examples (14.3k imp, 14.7), copywriting-psychology (12.5k, 12.0), sales-page-examples (4.2k, 12.3), in-house-copywriter-vs-freelance (2.2k, 11.4), /services/vsl-copywriter (929, 13.7), query "direct response copywriting" (329, 18.5).
- High-impression / low-CTR rewrite candidates: what-is-a-vsl (47k imp, 0.2%), copywriter-salary (21k, 0.3%), copywriting-rates (18k, 0.2%), copywriting-hooks (19k, 0.9%).

## Movement since the June 2026 review

- Technical debt from June is essentially cleared (crawlability, headers, canonical hygiene all pass).
- July consolidation: achieved its ranking goal (+14 positions) but not yet its URL goal (service page not the ranking URL — recrawl-starved).
- September cluster launch: indexed and showing early positions; link-building (the plan's stated next step) not started.
- Off-page entity plan (July): zero placements landed. Unchanged. This is now the single biggest gap on the account.
- Still pending from June: the /call vs /contact booking-page decision.
