# GEO / AI Search Readiness audit: robpalmer.com (2026-10-09)

**AI Search Readiness: 72/100**
Citability 19/25, Structure 15/20, Multi-modal 7/15, Authority/entity 13/20, Technical 18/20.

## What is already good
- robots.txt (src/app/robots.ts, live): explicitly Allow / for GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, CCBot; * allows all except /api/. Missing only: Applebot-Extended, Bingbot-specific (covered by *), anthropic-ai/cohere-ai (fine). UA spoof test of GPTBot/ClaudeBot returns 200.
- /llms.txt live (public/llms.txt, 200 text/plain). Good summary and key-page list.
- Server-rendered HTML (178KB, full text, JSON-LD in initial response). No CSR risk.
- Blog posts: Article JSON-LD with datePublished + dateModified (creative-strategist: 2026-05-20 / 2026-09-22; hire-a-creative-strategist: 2026-07-24 / 2026-09-22), FAQPage with 10 Q&As, BreadcrumbList, author Person.
- Definition-first passages: creative-strategist.mdx "What Is a Creative Strategist?" opens with a clean 60-word self-contained definition. FAQ answers are 50-110 words, direct, quotable.
- Salary post cites ZipRecruiter and Glassdoor with outbound links (the best-attributed stats on the site).

## Ranked issues
1. **Money page has no freshness signal (High, 30 min).** /services/direct-response-copywriter has zero visible "Updated" date and no dateModified anywhere (Service + FAQPage schema only; grep for updated/dateModified = 0). Perplexity and Google AIO weight recency; this is the open "GEO freshness" item. Fix: add a visible "Last updated <date>" line, dateModified on a WebPage node, and drive it from a data field so the routine below can bump it.
2. **Unattributed headline stats (High, 1-2 h).** "$523M tracked", "11,000+ LinkedIn creative-strategist openings", "40% / 30% / 20% / 10% day split", "10-30 concepts/week vs 2-5" are asserted without a source or method. AI engines prefer attributed figures. Add "(source: LinkedIn Jobs search, 2026-09-xx)" with a link, label the time split as "my estimate from X accounts", and put a one-line "how $523M is tracked" note on /about linked from every mention. Note the money page's FAQ already says "$523M Belron campaign" while the Person schema says $523M across all campaigns; these conflict. Unify wording (entity consistency).
3. **Thin entity graph / sameAs (High, 1-2 h + ongoing).** Person sameAs has only LinkedIn, GitHub, X. No Wikipedia/Wikidata, YouTube, Reddit, Crunchbase, Medium, or podcast links. Brand mention correlation research ranks YouTube (~0.74) and Reddit highest; the site has none. Actions: create a Wikidata item for Rob Palmer (no notability bar like Wikipedia), add to sameAs; add a YouTube channel (even short VSL-teardown clips) and genuine Reddit/Indie Hackers/LinkedIn-article presence; mirror the same name, title and bio line everywhere. Also the Organization node ("Rob Palmer Copywriting") has no sameAs and WebSite node has no @id; link Person and Organization via @id consistently (Person has no @id).
4. **Money page passage structure (Medium, 2-3 h).** About 2,500 words, H2s are statements ("Most Copywriters Can't Sell. Here's How You Tell."), not questions, so extraction for "best direct response copywriter" is weak. Add H2/H3 phrased as queries ("What does a direct response copywriter do?", "How much does one cost?") each opening with a 40-60 word direct answer, then 134-167 word self-contained block. The FAQ at the bottom has good answers but is below the fold and duplicated only in JSON-LD; surface the first 3 higher up. Add a comparison table (copywriter vs agency vs AI tool) as a quotable table.
5. **llms.txt is thin (Medium, 45 min).** Covers 8 URLs only. Missing: creative-strategist cluster (creative-strategist, hire-a-creative-strategist, creative-strategist-salary), /about, case studies, verticals, testimonials, pricing statement as its own line. Add `## Optional` section, one-line descriptions with "answers: ..." phrasing, last-updated date, and consider /llms-full.txt. No RSL 1.0 licensing present (low value, optional).
6. **Money page schema upgrades (Medium, 1 h).** Service node lacks offers/priceSpecification ("from $10K"), provider @id, aggregateRating/review (38 testimonials exist), and hasOfferCatalog. Add `Offer` with price floor; link provider to Person @id.
7. **Cluster posts: self-contained blocks (Medium, 2 h each).** The strategist posts are 3,600-4,600 words with a good definition, but the "Three Brains" and "Hiring" sections lean on first-person narrative before the answer. Add a "Key takeaways" box (KeyTakeaways component exists) at top with 4-5 quotable bullets, and compare-table for strategist vs copywriter vs CD vs media buyer. Add a visible "Updated Sept 22, 2026" next to the byline if not already rendered (not verified in rendered HTML; dateModified is in schema).
8. **Multi-modal (Medium, ongoing).** No video/YouTube embeds on the audited pages, no data visualisations; images are stock-like hero shots. Add 1 original chart (salary band) with alt text and a short explainer video per cluster pillar (also feeds the YouTube signal in #3).
9. **Citation-seeking pages (Low/Med).** No third-party mentions evidenced: pursue listicles ("best direct response copywriters 2026"), podcast guest spots, ClickBank/DR community mentions. Own post "best-direct-response-copywriter-to-hire" is self-promotional by nature; engines discount it, so third-party corroboration matters.

## AI crawler access
| Crawler | Status |
|---|---|
| GPTBot, OAI-SearchBot | Allowed |
| ClaudeBot, Claude-SearchBot | Allowed |
| PerplexityBot | Allowed |
| Google-Extended | Allowed |
| CCBot | Allowed (optional: block if training exposure is unwanted) |
| Applebot-Extended, Bytespider, Meta-ExternalAgent | Fall to * (allowed) |
llms.txt: present, valid markdown, thin. RSL: absent.

## Brand mention analysis (structural; no live engine scraping)
Wikipedia: none found. Wikidata: none. YouTube: none linked. Reddit: none linked. LinkedIn: linked in sameAs. GitHub/X linked. Entity name "Rob Palmer" consistent across schema, title tags and llms.txt (good); org name variant "Rob Palmer Copywriting" slightly diverges.

## Platform scores
Google AIO 74 (strong schema/FAQ, fresh posts; weak money-page freshness), ChatGPT 62 (crawlable but little third-party/YouTube/Reddit corroboration), Perplexity 70 (SSR, dates on posts; add dated money page and attributed stats), Bing Copilot 68 (sitemap ok; add IndexNow, verify Bing Webmaster).

## "GEO freshness + AI-citation routine" proposal
Monthly routine: (a) bump dateModified only when content actually changes (money page, strategist cluster, salary post: re-pull ZipRecruiter/Glassdoor figures and LinkedIn job count); (b) regenerate llms.txt from the content dirs with last-updated; (c) check robots/llms/sitemap status with curl; (d) run the 5 target queries ("best direct response copywriter", "what does a creative strategist do", "creative strategist salary 2026", "hire a creative strategist", "direct response copywriter cost") manually or via DataForSEO ai_opt_llm_ment_search if available and log cited domains; (e) add IndexNow ping on deploy.

## Not verified
Rendered visible "updated" text on blog posts (only schema confirmed); actual ChatGPT/Perplexity outputs (not scraped by design); DataForSEO tools not used.
