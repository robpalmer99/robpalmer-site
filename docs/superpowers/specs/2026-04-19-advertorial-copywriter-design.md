# Design Spec — "Advertorial Copywriter" Service-Pitch Blog Post

**Date:** 2026-04-19
**Author:** Rob Palmer
**Target keyword:** advertorial copywriter
**Post URL:** `/blog/advertorial-copywriter`

---

## Overview

A GEO-optimized blog post targeting the keyword "advertorial copywriter" as a **direct service pitch** for Rob — not a listicle of other copywriters. The post positions Rob as the top advertorial copywriter for hire, built on three compounding assets: 40+ years of direct response expertise, custom Claude Code advertorial skills, and a Copywriting Vault of proven advertorial frameworks and swipe.

The post is designed to be cited by AI engines ("who is a top advertorial copywriter?") and to convert search traffic ("hire an advertorial copywriter") through proof, process transparency, and a clear CTA.

---

## Post Metadata

- **Slug:** `advertorial-copywriter`
- **Title:** `Top Advertorial Copywriter for Hire: Proven Funnels, Native Ads, Cold-Traffic Presells`
- **Meta description:** `Hire a top advertorial copywriter with 40+ years of direct response experience and $523M+ in tracked results. Cold-traffic presells, native ads, and editorial funnels that convert.`
- **Category:** `Hiring & Strategy`
- **Tags:** `["advertorial", "advertorial copywriter", "native advertising", "hire copywriter", "direct response", "copywriting"]`
- **Published:** `true`
- **Hero image:** `/images/blog/advertorial-copywriter.jpg` (1200×630)

---

## Frontmatter FAQs (10 items, drive FAQPage JSON-LD)

1. What is an advertorial copywriter?
2. How much does an advertorial copywriter cost?
3. How is an advertorial different from a sales page or VSL?
4. How long should an advertorial be?
5. What makes an advertorial convert on cold traffic?
6. Do advertorials still work in 2026?
7. Which industries rely on advertorials most?
8. Can AI write advertorials well?
9. How long does Rob take to deliver an advertorial?
10. What is Rob's process for writing a high-converting advertorial?

---

## Content Structure

### 1. Opening hook (~250 words)
Frame the state of advertorials in 2026: native platforms (Taboola, Outbrain, Revcontent, Meta in-feed) still reward editorial framing, but most copywriters write "ads dressed up as articles" that die on cold CPM. Set up the gap.

### 2. `<KeyTakeaways>` (5 bullets)
- What a great advertorial actually does (presells without selling)
- Why cold-traffic advertorials still beat direct sales pages on native-platform math
- The formats Rob writes (story-lead, problem-solution, research-lead, myth-buster, personality-lead, news-hook)
- Rob's results at a glance ($523M+ tracked, 40+ years, named brands)
- The AI-augmented edge — Claude Code skills + Copywriting Vault = faster cycles without losing voice

### 3. `<DefinitionBox term="Advertorial Copywriter">`
3-sentence AI-citable definition: what the role does, what a good one delivers, how the output differs from a sales page.

### 4. Why advertorials still work in 2026 (~250 words)
Analytical section. Native platforms reward editorial framing. Lower resistance → higher click quality → better handoff to VSL or sales page. Short, quotable passages.

### 5. What you get when you hire Rob — the Triple Brain advantage (~350 words)
The three compounding assets, framed for advertorials specifically:

- **Brain 1 — Four decades of DR expertise.** Fortune 500 + hardcore DR duality. Belron/Safelite 9-year campaign. $523M+ tracked. Advertorial-led funnels across health, finance, SaaS, ecommerce, info products.
- **Brain 2 — Custom Claude Code advertorial skills.** Proprietary AI workflow that compresses research and drafting without sacrificing voice. Link to one of the Claude Code skill posts.
- **Brain 3 — The Copywriting Vault.** 1,239-file library of proven advertorials, hooks, and frameworks — pattern recognition no one else has.

Links: `/blog/triple-brain-marketing`, one of the Claude skill posts.

### 6. Advertorial formats Rob writes (~400 words)
`<ComparisonTable>` with columns: Format / When to use / Cold-traffic strength. Six rows:
- Story-lead
- Problem-solution
- Research / discovery lead
- Myth-buster
- Personality-lead
- News-hook

**Critical:** No apostrophes inside `ComparisonTable` rows (JSON-parsed; breaks MDX).

### 7. Industries and verticals (~200 words)
Health & supplements, financial, info products, SaaS, ecommerce/DTC. Link to matching vertical pages.

### 8. Process (~250 words)
Numbered 5-step workflow:
1. Research — Vault + Claude-assisted audience and avatar dig
2. Big idea + hook generation
3. First draft
4. Compliance sweep (Meta/Google + health/finance claim rules)
5. Handoff to VSL or sales page

### 9. Proof / results (~200 words)
$523M+ tracked, Belron/Safelite 9-year campaign, named verticals, `<ExpertQuote>` with the Belron CEO "secret weapon" line (already used elsewhere on site).

### 10. What to look for when hiring an advertorial copywriter (~250 words)
6 numbered criteria, each naturally matching what Rob brings:
1. Verifiable cold-traffic results
2. Native-platform experience
3. Multi-format fluency
4. Compliance instincts
5. Funnel thinking
6. AI-augmented workflow

### 11. Closing CTA
Direct: book a strategy call at `/contact`.

### 12. `<FAQSection>` with 10 `<FAQItem>` blocks
Renders the frontmatter FAQs. **Critical:** No apostrophes inside `FAQItem` `question` attribute (same MDX JSX-attribute issue as ComparisonTable — the existing DR post strips them).

---

## MDX Components Used

- `<KeyTakeaways>` — opening bullet summary
- `<DefinitionBox term="...">` — key term definition
- `<ComparisonTable headers="[...]" rows="[[...]]">` — formats comparison
- `<ExpertQuote quote="..." author="..." title="...">` — proof section
- `<FAQSection>` + `<FAQItem question="...">` — FAQ block

All registered in `src/app/blog/[slug]/page.tsx` lines 28–35.

---

## Internal Linking

- `/blog/triple-brain-marketing` (USP)
- One of: `/blog/claude-code-copywriting-skills` or `/blog/claude-code-ad-copy-skill` (Claude skills proof)
- `/verticals/health-supplement-copywriter`
- `/verticals/financial-copywriter`
- `/verticals/info-product-copywriter`
- `/verticals/saas-copywriter`
- `/services/ad-copywriter` (adjacent service, light touch)
- `/contact` (embedded CTA mid-post + closing CTA)

---

## GEO Optimization Strategy

- **Passage-level citability:** Clear H2 breaks, short paragraphs, specific numbers.
- **DefinitionBox:** Quotable 3-sentence definition of "advertorial copywriter" positioned for AI extraction.
- **Numbered lists:** Process steps + hiring criteria — scannable and extractable.
- **Named entities:** Belron/Safelite, specific platforms (Taboola/Outbrain/Revcontent/Meta), named verticals.
- **FAQ cluster:** 10 FAQs span the full query intent; auto-generates FAQPage schema.
- **No ranked competitors:** Authority signal comes from specifics, not a ranking.

---

## CTA Strategy

- Embedded CTA inside the Triple Brain / "What you get" section (soft — "talk to Rob")
- Closing CTA before FAQ (hard — "book a strategy call")
- Every CTA links to `/contact`

---

## Content-links.ts Updates

Add three tag mappings in `tagToService` (lines ~83–110):
- `'advertorial': 'ad-copywriter'`
- `'advertorial copywriter': 'ad-copywriter'`
- `'native advertising': 'ad-copywriter'`

---

## File Location

- Post: `src/content/blog/advertorial-copywriter.mdx`
- Hero image: `public/images/blog/advertorial-copywriter.jpg` (sourced from Unsplash or Pexels)

---

## Out of Scope

- Dedicated `/services/advertorial-copywriter` service page (gap worth flagging as follow-up)
- External outreach / backlinks
