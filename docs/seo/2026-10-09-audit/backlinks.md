# Backlink audit: robpalmer.com (2026-10-09)

## Method and tier
Tier 0 (no Moz/Bing). Note: `python` is not on PATH; scripts need `/usr/bin/python3` (has `requests`; Homebrew python3 does not).
robpalmer.com was NOT in the cache (4 other domains cached), so the CC graph was freshly queried (release cc-main-2026-jan-feb-mar).

## Common Crawl (domain level, confidence 0.50, quarterly data)
| Metric | Value |
|---|---|
| In crawl / in rankings | yes / yes |
| PageRank | 7.1e-09 (rank ~9.25M) |
| Harmonic centrality | 13.07M (rank ~11.0M) |
| Hosts | 1 |
| Top referring domains returned | 0 (sample size 0) |

Interpretation: the domain is known to the graph but has effectively no measurable inbound authority. The tool returned no referring-domain sample, which means "none surfaced", not a verified zero. Rank ~9-11M is bottom-tier.

## Verified links (fetched HTML, confidence 0.95)
| Source | Link found | Notes |
|---|---|---|
| github.com/robpalmer99/claude-code-copywriting-skills | robpalmer.com and /blog/claude-code-copywriting-skills (README + repo homepage field) | 39 stars, 6 forks. Rel attribute not inspected; GitHub typically nofollows user content, so assume nofollow. |
| github.com/robpalmer99/robpalmer-site | robpalmer.com (repo homepage) | 2 stars, public |
| GitHub profile robpalmer99 | NO link: `blog` field is empty and bio is null | Free fix |

Anchor text: not obtainable without Moz/Bing/DataForSEO. Only observed anchors are bare URLs on GitHub.
Site also declares sameAs to LinkedIn, GitHub, X (outbound entity signals; links from those profiles not verified).

## Health score
INSUFFICIENT DATA. Only 1 of 7 factors has any data, so no numeric score is given.

## Link assets on the site
- Free Claude Code skills cluster (6 cross-linked posts + public CC-BY-4.0 repo with 39 stars): the strongest asset. People link to repos/tools.
- Tools: /tools/copywriting-rates-calculator and /tools/headline-analyzer (interactive, linkable).
- Data posts: creative-strategist-salary (2026-09-22, salary/rate bands), copywriter-salary, 5 "state of ... 2026" posts (DR copywriting, AI, email, landing pages, VSL).
- Case studies: Belron/Safelite $523M campaign, Apple direct mail (unusual proof, linkable as history).
- Cluster pages: creative-strategist, hire-a-creative-strategist, swipe file, hooks, templates.
Caveat: the salary/state posts appear to aggregate third-party sources (ZipRecruiter, Glassdoor); they are not original data, which limits natural-link pull. Original data would be stronger.

## Gap analysis: creative-strategist cluster (7 realistic tactics)
1. **Fix owned profiles first (an hour):** set the GitHub profile blog field; confirm LinkedIn, X, Clutch-style/Contra/Wellfound profiles link to the money page. Cheap, immediate referring domains (mostly nofollow, but they establish entity consistency).
2. **Get the skills repo listed on curated "awesome" lists:** awesome-claude-code / awesome-claude-skills style GitHub lists, plus Anthropic-community skill directories. Submit via PR; one-time effort, real contextual links, relevant to the 39-star repo.
3. **Build a creative-strategist skill and publish it:** a "creative strategist" Claude Code skill (ad concept/angle matrix, testing roadmap) in the repo, with a post. It ties the repo's audience to the cluster and gives a reason for creator newsletters to cover it. Pitch to 3-5 AI-marketing newsletter writers individually.
4. **Original data in the salary post:** run a small survey (e.g. 30-50 DTC creative strategists/media buyers via LinkedIn and your network) or compile real rate data from your own client work, then add a "first-party data" section. Journalists and comparison posts cite original numbers; recompiled Glassdoor figures get ignored.
5. **Expert-quote responses (HARO successor channels: Qwoted, Featured, Source of Sources):** a few minutes daily on marketing/hiring/ad-creative queries. 40 years of experience and the $523M Safelite result are strong credentials. Expect 1-2 links a month.
6. **Guest appearances and podcast guesting in DTC/performance marketing:** pick 5 shows (DTC and ecommerce podcasts, creative-testing communities). Guest bios give a link and the "copywriter to creative strategist" angle is a differentiated story.
7. **Reclaim and extend existing relationships:** ask the Ben Palmer team, past clients and partners with sites (testimonial givers, vendors, agencies) for a case-study or "worked with" link to the portfolio; ask alumni of the Safelite/Belron work for press mentions. Also write a resource-page pitch for hiring/rates pages that already cite salary figures (reach out to the 5-10 pages ranking for "creative strategist salary" with your updated data, only after tactic 4).
8. **Tool-led link bait:** extend the rates calculator with a creative-strategist mode (retainer estimator) and submit to freelancer/marketing tool roundups.

Avoid: PBNs, bought links, directory blasts, mass cold outreach.

## Recommended measurement
Without Moz/Bing, use Google Search Console Links report (via existing scripts/gsc_query.py setup; the Links report is UI-only) to get real referring-domain counts. Add a Bing Webmaster key (free) for inbound links and competitor comparison. Re-run CC graph after the next quarterly release.

## Not checked
Anchor text, nofollow attributes, link velocity, geography, toxic ratio (no data source). Competitors not benchmarked.


## Addendum 2026-10-10 — real data landed

Bing Webmaster API wired up (key in ~/.config/claude-seo/backlinks-api.json): 13 inbound links known to Bing; 3 pointed at legacy 404s (/Rob-Palmer, /building-an-online-business), reclaimed via 301→/about same day.

GSC Links report (export in this folder, robpalmer.com-Top target pages-2026-10-09.xlsx): ~121 incoming links across 24 target pages, no 404 targets. Top: homepage 26 links/21 domains; **worlds-first-blogger-digital-nomad-pioneer 23/12 — the site's biggest content link magnet** (its DR-copywriter anchor now retargeted to the money page); state-of-vsl-marketing-2026 8/3; eugene-schwartz post 7/3; claude-code-copywriting-skills 4/4. creative-strategist-salary: zero links — outreach remains the gap, not the content. Pattern for future linkable assets: personal story, state-of-the-industry data, and history posts earn links organically; service pages earn none.
