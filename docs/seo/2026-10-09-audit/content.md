# Content Quality Audit: robpalmer.com (2026-10-09)

**Content Quality Score: 78 / 100**
E-E-A-T: Experience 88, Expertise 80, Authoritativeness 66, Trustworthiness 74 (weighted ~76)
AI citation readiness: 81 / 100

Scope: 150 MDX posts (all published), 13 services, 6 verticals, about/case-study/testimonial pages checked lightly. Scripts and raw data are in the scratchpad (a.py, cl.mjs, p.json).

## Ranked issues

1. **Creative-strategist cluster does not push authority to the money page (HIGH, cheap fix).**
   - The auto "related services" block (getRelatedPages, 3-slot cap) resolves to:
     - creative-strategist: ai-marketing-consultant, sales-page-copywriter, email-copywriter
     - creative-strategist-salary: sales-page-copywriter only
     - hire-a-creative-strategist: sales-page-copywriter, email-copywriter
   - None of them gets /services/direct-response-copywriter from the auto block. The cluster tags ("creative strategist", "freelance creative strategist", "creative strategist rates" and so on) have no entry in tagToService, and the category "Hiring & Strategy" doesn't list the money page.
   - In-body links to the money page: creative-strategist 1, hire-a-creative-strategist 1, **creative-strategist-salary 0**. The salary post is the newest and the highest buyer-intent page in the cluster, and it sends no link to the money page.
   - Fix: add `'creative strategist'`, `'hire a creative strategist'`, `'creative strategist for hire'`, `'freelance creative strategist'`, `'creative strategist salary'` and similar to tagToService, pointing at direct-response-copywriter. Add an in-body CTA link to the salary post. Consider a dedicated creative-strategist service or landing page, since the intent is "hire a strategist" and the money page is positioned as "copywriter".

2. **Money-page coverage is incomplete sitewide (MED).**
   - 119 of 150 posts get /services/direct-response-copywriter in the auto block. 31 do not.
   - Cause: tag matches fill the 3 slots first and category defaults get truncated. The slice(0,3) cap is a blunt tool.
   - Fix: reserve slot 1 for the money page on every post, then fill the other two.
   - 88 of 150 posts show no vertical link (verticals map only 5 categories). Categories such as Copywriting Strategy (32 posts, the largest) have no vertical mapping.
   - Services distribution is skewed: sales-page 76, sales-funnel 70, vsl 46. Facebook-ads has 2, upsell 4, ad-copywriter 6, so those service pages get almost no blog support.

3. **Thin content: none (PASS).** Minimum 1,592 words (creative-strategist-salary), median 3,561, maximum 5,965. Zero posts under 600 words, and none under 1,500. The lowest-word-count post is the newest cluster page. It is still dense (tables, sourced figures), but at 1,592 words it is about half the length of the cluster pillar (3,457). It is probably light against competing "creative strategist salary" SERPs. Consider adding a "how to negotiate" section and a regional breakdown.

4. **Titles and meta descriptions: no exact duplicates (PASS), but length and near-duplicate problems (MED).**
   - 0 duplicate titles, 0 duplicate descriptions, and no description pairs above 0.8 similarity.
   - 123 of 150 frontmatter `title` values exceed 60 characters. Check that metaTitle covers these: only 110 posts have metaTitle and 99 have metaDescription, so 40 posts fall back to `title`, and 51 fall back to `description` for the meta description.
   - 44 descriptions exceed 160 characters, which risks truncation in SERPs. 7 are under 110.
   - Near-duplicate title pairs (cannibalisation candidates):
     - professional-copywriter-services vs sales-copywriter (0.81)
     - conversion-copywriting vs website-copywriting (0.78)
     - saas-copywriting vs website-copywriting (0.78)
   - Beyond titles, the 150-post corpus has heavy topic overlap in "hire / best / pricing / rates" posts, which all compete for the same intent. Check GSC for the known split of the money keyword across 4 posts (pos ~27, 0 clicks) and consolidate or canonicalise.

5. **Freshness signals are weak (MED).**
   - Only 21 of 150 posts carry `updated`. 57 posts are dated 2026-02, 29 are 2025-03, 29 are 2026-03. 47 posts are dated before June 2025 and have no visible update (more than 16 months old in a fast-moving AI/ad-platform niche).
   - The batch dates suggest bulk generation. Date clustering combined with identical structure is exactly the pattern the Sept 2025 QRG flags for scaled content.
   - Fix: refresh and stamp `updated` on the 30 highest-traffic or highest-intent posts first, especially AI/tool posts and "2026" pricing/rates posts.

6. **Repetitive template across the corpus (MED, AI-content risk).**
   - Every one of the 150 posts uses KeyTakeaways. 141 use DefinitionBox, 112 a ComparisonTable, 99 an ExpertQuote. 147 have exactly 10 FAQs, and every post has exactly 10 H2 sections in the sample. Posts have uniform structure whatever the topic.
   - Mitigation is real: the voice is first person ("I have spent 40 years...") in all 150 posts, and posts carry specific numbers and named campaigns. The risk is pattern repetition, not generic prose.
   - Verify ExpertQuote content: confirm each quote is real, attributable and sourced. Any quote without a verifiable source is a trust liability (see the memory note on fabricated agent claims).
   - Fix: vary the template on cornerstone posts. Add original data, screenshots or campaign artefacts where the post is about experience.

7. **Outbound sourcing is thin (MED for Authoritativeness).** Only 7 of 150 posts have markdown-style external links. HTML anchors are used too (the salary post cites ZipRecruiter and Glassdoor with proper links), so the real count is probably higher, and the best posts source their figures well. Still, many stat-heavy posts probably lack citations. Run a check for `$`, `%` and "million" claims without a link or named source. Rob's own figures ($523M tracked) should link to the Belron/Safelite case study every time they appear.

8. **E-E-A-T surfacing (LOW-MED).**
   - Strengths:
     - Article JSON-LD names Rob as author (Person) and carries dateModified.
     - /about states 40+ years and $523M+.
     - A Belron/Safelite $523M case study page exists, plus an Apple direct mail case study.
     - 38 testimonials with a dedicated /testimonials page.
     - First-person voice throughout.
     - Named endorsement ("Stefan Georgi's team chose it for CA Labs").
   - Gaps:
     - No visible byline or bio box with credentials on each blog post (check the post template). Author appears in schema and meta only.
     - Person schema lacks sameAs (LinkedIn and similar), jobTitle and knowsAbout. No grep hits for those properties in src.
     - Only 2 case studies against 12 portfolio items and 38 testimonials. The $523M claim is the central trust hook and rests on a single page.
     - No third-party verification (press, books, awards, speaking) is surfaced.
   - Fix: add a compact author box (photo, one-line credential, link to /about and the case study) and Person schema with sameAs. Add a methodology note under "$523M tracked".

9. **Readability (PASS, slightly dense).** Sample of 5 (Flesch reading ease, words per sentence):
   - direct-response-decision-framework: FRE 45, 18.5 words per sentence
   - vsl-vs-sales-page: FRE 50, 16.8
   - conversion-rate-optimization-strategies: FRE 48, 15.1
   - how-to-start-a-copywriting-career: FRE 47, 17.8
   - creative-strategist-salary: FRE 48, 23.2 (longest sentences)
   These are grade 11-12 scores, which suits a B2B buyer audience. The salary post has the longest sentences, and its long parallel lists could be split. Scores are approximate (naive syllable counter, tables stripped).

10. **AI citation readiness (GOOD, 81).**
   - Strengths: DefinitionBox on 141 posts, KeyTakeaways on all 150, 10 FAQs with 40-80 word answers and FAQ schema, comparison tables with named sources and dated captions ("2026"), clear H2 hierarchy, answer-first paragraphs.
   - Gaps: stats are not consistently attributed with a source and date inline. The 9 posts without a DefinitionBox lack a quotable definition. The FAQ answers often repeat the first-person "$523M Belron" anecdote, which makes them quotable but similar. No llms.txt or equivalent was checked (outside this audit's scope).

## How well content funnels authority to the money page

- Coverage looks good on paper: 119 of 150 posts link the money page through the auto block, plus 45 posts with a body link. Anchor text is driven by serviceTitles ("Direct Response Copywriter"), which matches the target keyword.
- The weak points are (a) the creative-strategist cluster, which is the stated priority and gets none of the auto-block money-page links (#1), (b) the 31 posts squeezed out by the 3-slot cap (#2), and (c) the lack of a destination matched to the "creative strategist" intent.
- Cluster-internal linking is healthy: the three cluster posts link each other and the pillar /blog/what-is-direct-response-copywriting. Only 7 other posts mention "creative strategist" at all (famous-copywriters, copywriter-salary, is-copywriting-dead, what-does-a-copywriter-do, ai-vs-human-copywriting, claude-code-* x2), and just 1 mention each. Cluster support from outside the cluster is minimal.

## Recommended order of work

1. Add creative-strategist tag mappings and a body CTA in creative-strategist-salary (30 minutes).
2. Change getRelatedPages to guarantee the money page in slot 1 for all posts.
3. Add author box and Person schema sameAs.
4. Refresh and restamp `updated` on the oldest high-intent posts; trim over-160 descriptions; set metaTitle on the 40 posts without one.
5. Resolve the near-duplicate title pairs by consolidating or differentiating intent.
6. Add 3-5 inbound contextual links to the cluster from the older salary, hiring and AI posts.
7. Add source attribution to uncited statistics; link every $523M mention to the case study.

## Caveats
Word counts strip tags and punctuation naively. Verticals/services counts come from running the real getRelatedPages logic over frontmatter. I did not render pages or read every post, and I did not check the live site or the post template for a visible byline.
