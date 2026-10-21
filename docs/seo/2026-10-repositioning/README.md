# 2026-10 creative-strategy repositioning — SEO tracking

baseline.json = output of `.claude/skills/seo/.venv/bin/python scripts/gsc_query.py --days 90 --dimension query,page --json` on 2026-10-19 (1000 rows = the API cap). Rerun the identical command at each checkpoint.

## Baseline 2026-10-19 — DR cluster

```
sc-domain:robpalmer.com  2026-07-18 → 2026-10-16  (12 rows)

QUERY  CLICKS  IMPR  CTR  POS
best direct response copywriters  4  109  3.7%  3.2
direct response copywriter  2  285  0.7%  12.5
top direct response copywriters  2  13  15.4%  3.2
direct response copywriter salary  1  37  2.7%  5.7
direct response copywriters  1  217  0.5%  10.6
#direct response copywriter  0  9  0.0%  13.0
best direct response copywriters of all time  0  14  0.0%  1.7
direct response copywriter for hire  0  34  0.0%  11.6
direct response copywriter meaning  0  2  0.0%  11.0
direct response copywriter melbourne  0  4  0.0%  25.2
gary halbert direct response copywriter biography  0  1  0.0%  11.0
what is a direct response copywriter  0  22  0.0%  17.4

QUICK WINS (pos 4-15, ≥20 impressions): 4
  pos 12.5  285 impr  direct response copywriter
  pos 10.6  217 impr  direct response copywriters
  pos 5.7  37 impr  direct response copywriter salary
```

## Baseline 2026-10-19 — creative-strategist cluster

```
sc-domain:robpalmer.com  2026-07-18 → 2026-10-16  (15 rows)

QUERY  CLICKS  IMPR  CTR  POS
creative strategist  0  3  0.0%  3.0
creative strategist job description  0  2  0.0%  3.0
creative strategist jobs  0  1  0.0%  3.0
creative strategist salary  0  2  0.0%  3.0
creative strategist vs copywriter  0  1  0.0%  3.0
creative strategist what do they do  0  1  0.0%  3.0
hire creative strategist  0  1  0.0%  11.0
hiring creative strategist  0  1  0.0%  5.0
how much do creative strategists make  0  2  0.0%  1.0
how much does a creative strategist make  0  2  0.0%  1.0
how to become a creative strategist  0  2  0.0%  2.5
what does a creative strategist do  0  2  0.0%  3.0
what is a creative strategist  0  2  0.0%  7.0
what is creative strategist  0  1  0.0%  3.0
what should i look for when hiring an offshore creative strategist?  0  4  0.0%  3.2
```

Checkpoints: +2 weeks (2026-11-02), +6 weeks (2026-11-30). Decision rule: sustained drop > ~5 positions on "direct response copywriter" → review the slice that shipped before it; do not roll back the repositioning.

## Shipped 2026-10-19

All five slices of `docs/superpowers/plans/2026-10-19-creative-strategy-repositioning.md`
deployed to production the same day, each gated by `npm run smoke -- --slice N`.

| Slice | What | Key commits |
|---|---|---|
| 1 | `/services/creative-strategist` money page + links in (content-links remap, related-services, llms.txt, 3 cluster posts) | 775f351 f5f7b0a 17f6693 069f0ab 4dc4d9b 1323150 4de940a |
| 2 | Home page strategy-first; SITE_TITLE/description; Person schema; nav; `/call`; logo/footer/OG | cbcb15e 04cb9ad 77d23fd 8fa7f22 |
| 3 | Two-tier `/services` index; AI Marketing Consultant reframed off the CA Labs lead | 99b30f2 20b21e6 a07f655 cc25507 |
| 4 | Six verticals lead on creative strategy (slugs unchanged) | af0d6d5 eaf0e06 88271e8 310abe3 8320f74 4136fcc 90f357e fb26c48 63eb34d 0f1d26f |
| 5 | About page; price floor removed from every service page, blog author box and the Service JSON-LD; vertical schema serviceType; remaining cross-links | see git log after 0f1d26f |

Rules the sweep baked in: no price figures anywhere on commercial pages; never lead on
Stefan Georgi / CA Labs (testimonial quotes and a "Copy Chief at Copy Accelerator"
credential are fine); child-page `metaTitle`s omit `| Rob Palmer` because the root
layout's `title.template` appends it.

## Checkpoints

Run at +2 weeks (2026-11-02) and +6 weeks (2026-11-30):

```bash
.claude/skills/seo/.venv/bin/python scripts/gsc_query.py --days 28 --dimension query --contains "direct response copywriter"
.claude/skills/seo/.venv/bin/python scripts/gsc_query.py --days 28 --dimension query --contains "creative strategist"
.claude/skills/seo/.venv/bin/python scripts/gsc_query.py --days 28 --dimension page --contains "creative-strategist"
```

Compare against the baseline blocks above. Decision rule: a sustained drop of more than
~5 positions on "direct response copywriter" triggers a review of the slice that shipped
before it (most likely slice 5's DR-page metaDescription/definition edit, or slice 1's
re-pointed DR-page link), not a rollback of the repositioning.

GSC indexing requests (manual, UI only): `/`, `/about`, `/services`,
`/services/creative-strategist`, `/services/ai-marketing-consultant`, all six `/verticals/*`.

## Portfolio hybrid page — shipped 2026-10-21

Spec: `docs/superpowers/specs/2026-10-21-portfolio-hybrid-page-design.md`.
GA4 baseline (property 266179141, 90 days to 2026-10-21): ChatGPT → `/portfolio`
landing sessions 71, key events 10; outbound clicks to the Drive folder 259.
Check at +4 weeks (2026-11-18): key events from ChatGPT-landing-on-`/portfolio`
sessions, and `click` events on `/portfolio` by `linkUrl` (docs.google.com per
exhibit vs the Drive folder). Smoke: `npm run smoke -- --slice 6`.
