# SEO Action Plan — from the 2026-10-09 audit

Priorities: Critical = blocks indexing (none found). High = fix this week. Medium = this month. Low = backlog. Items marked **[Rob]** need Rob personally; everything else is agent-doable in the repo.

## Critical

None. Nothing blocks indexing or risks a penalty.

## High — this week

**STATUS 2026-10-10: items 1–5 all DONE** (shipped in commits faec48e/410a38a + 5459751, deployed; Rob did the GSC recrawl requests and the GitHub profile).

1. **Wire the creative-strategist cluster to the money page.** Map the cluster tags ("creative strategist", "hire a creative strategist", "freelance creative strategist") in `src/lib/content-links.ts`; add `/services/direct-response-copywriter` to the three cluster posts' related-services; add one in-body link from `creative-strategist-salary` (zero links today). The priority cluster currently passes no authority to the money page.
2. **Give Google a reason to recrawl the stale money pages.**
   - Add `lastModified` for static/service/vertical entries in `src/app/sitemap.ts` (real dates — add an `updated` field to the data files or derive from git; never build time). The money page currently emits no freshness signal anywhere.
   - Fix the blog `dateModified` fallback (`src/app/blog/[slug]/page.tsx` ~104) so it's only emitted when `updated` exists, and bump `updated` on genuinely-edited posts (e.g. the 43 posts that got anchor links in July).
   - **[Rob]** Request indexing in the GSC UI for `/services/direct-response-copywriter` (last crawl 14 Aug) and `/blog/hire-a-creative-strategist` (25 Jul). The API can't do this; it's two minutes in Search Console.
3. **Fix the $523M inconsistency.** Money-page FAQ says "the Belron campaign"; Person schema says across all campaigns. Pick the true version, use it everywhere, and add a one-line method/source note near the figure (also covers the GEO "unsourced stats" flag). Same pass: source the 11K-LinkedIn-roles figure and the day-split/concepts-per-week numbers in the cluster posts.
4. **Link the schema entity graph.** Add `@id` to Person and WebSite; reference them (`"author": {"@id": …}`) from Article/Service/Organization instead of bare name stubs; make Person the primary entity; expand `sameAs` beyond LinkedIn/GitHub/X as profiles land. One change in the shared schema component; also de-duplicates the 8–12 JSON-LD blocks per page.
5. **[Rob] Two-minute fix: GitHub profile.** The robpalmer99 profile has an empty website field and no bio. Set robpalmer.com + the entity string from docs/seo/off-page-entity-plan.md. This is Tier 1 of the entity plan, which has zero items done since July.

## Medium — this month

**STATUS 2026-10-10:** 6 (meta/title side) DONE — content refreshes still open; 8 DONE except bundle-analyzer look; 9 DONE; 10 offers schema + WebPage dateModified DONE — visible date + question-H2 rework deferred (needs dev-server review + copy pass); 11 DONE; 7, 12, 13-remainder still open.

6. **Striking-distance CTR/refresh pass** (biggest pure-traffic lever in the data): rewrite titles/metas and refresh content on `sales-letter-examples` (14.3k imp, pos 14.7), `copywriting-psychology` (12.5k, 12.0), `sales-page-examples` (4.2k, 12.3), `in-house-copywriter-vs-freelance` (2.2k, 11.4), `/services/vsl-copywriter` (929, 13.7). Separately rewrite metas on the high-impression/low-CTR four: `what-is-a-vsl` (47k imp, 0.2% CTR), `copywriter-salary`, `copywriting-rates`, `copywriting-hooks`.
7. **[Rob] Start the salary-post link outreach** — the stated next step for the KD-9 cluster (~10 referring domains for top-10). Tactic list in `backlinks.md`: skills-repo PRs to awesome-lists, 3–5 AI-marketing newsletter pitches, expert-quote pipelines (Qwoted/Featured/SOS), podcast pitches per the entity plan. Consider adding first-party data (own client-rate survey) to the salary post to make it citable beyond recompiled ZipRecruiter figures.
8. **Performance: cut the wasted bytes.** Lazy-load Sentry Replay only for sampled sessions or on first error (`src/instrumentation-client.ts` — saves 48.5KB/visitor); try `experimental.inlineCss` + `fetchPriority="high"` on heroes (fixes the 3.6–4.0s mobile LCP on money page/blog); run `@next/bundle-analyzer` on the 104KB shared chunk.
9. **Expand llms.txt**: add the creative-strategist cluster, /about, case studies, verticals (currently 8 URLs).
10. **Money-page structure for AI/snippets:** convert key H2s to question form with direct 2–3 sentence answers up top; add `offers` ("from $10,000") to Service schema; add visible "Updated" date.
11. **Fix the FAQ drift** on `/blog/advertorial-copywriter` (schema vs visible wording) and consider generating FAQ schema from the rendered FAQ rather than separate frontmatter.
12. **[Rob] Decide /call vs /contact** (pending since June review). Then either noindex /call or keep it and drop its sitemap priority.
13. **Meta hygiene batch:** add `metaTitle` to the 40 posts missing it; trim the worst of the 123 over-length titles (lead keyword stays per policy); check the three overlapping title pairs for cannibalization in GSC before renaming anything.

## Low — backlog

- Switch Article → BlogPosting; add ProfilePage to /about; Review markup for testimonials (entity value only); OfferCatalog.
- Map more categories to verticals in content-links.ts (88 posts have no vertical link); give facebook-ads and upsell services blog support.
- Remove `priority`/`changefreq` from the sitemap (ignored); fix the 404 page's duplicate robots meta + generic description.
- GA via Partytown or interaction-gated loader; drop/subset the third woff2; `quality={60}` + tighter `sizes` on /services cards.
- Vary the blog template footprint over time (not 10-FAQs-everywhere); add external citations to more posts (only 7 have markdown external links).
- Get a free Bing Webmaster key + pull the GSC Links report for real referring-domain counts; re-run backlink audit at Tier 1.

## Measurement

- Re-pull GSC in ~4 weeks (post-recrawl): has the ranking URL for the head terms moved to the service page? Cluster impressions growing past ~1k/90d?
- The monthly "SEO: AI visibility check" cloud routine already runs on the 3rd — fold in the GEO freshness checklist from `geo.md` (dateModified bumps, llms.txt regen, robots/llms/sitemap curl checks, citation log for 5 target queries).
- Log landed placements in docs/seo/off-page-entity-plan.md so the routine detects them.
