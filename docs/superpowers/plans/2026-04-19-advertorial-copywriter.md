# Implementation Plan — "Advertorial Copywriter" Service-Pitch Blog Post

**Date:** 2026-04-19
**Spec:** `docs/superpowers/specs/2026-04-19-advertorial-copywriter-design.md`

---

## Architecture

- Single MDX blog post at `src/content/blog/advertorial-copywriter.mdx`
- Uses existing blog infrastructure (frontmatter-driven FAQPage schema, existing MDX components in `src/app/blog/[slug]/page.tsx` lines 28–35)
- One supporting change to `src/lib/content-links.ts` for tag → service mappings
- Hero image sourced from Unsplash or Pexels at `public/images/blog/advertorial-copywriter.jpg` (1200×630)
- No new components

---

## Task Breakdown

### Task 1 — Create MDX file with frontmatter + FAQs
Create `src/content/blog/advertorial-copywriter.mdx` with full YAML frontmatter (title, description, date, category, tags, published, heroImage, heroAlt, 10 faqs).

### Task 2 — Opening hook + KeyTakeaways + DefinitionBox
~250 words hook framing advertorial gap in 2026, followed by `<KeyTakeaways>` (5 bullets) and `<DefinitionBox term="Advertorial Copywriter">`.

### Task 3 — "Why advertorials still work in 2026" section
~250 words. Analytical, quotable. Cover native-platform math, lower resistance, handoff mechanics.

### Task 4 — Triple Brain pitch section ("What you get when you hire Rob")
~350 words. Three sub-sections: four decades of DR expertise, custom Claude Code advertorial skills, Copywriting Vault. Link `/blog/triple-brain-marketing` and one Claude skill post.

### Task 5 — Advertorial formats section with ComparisonTable
~400 words. `<ComparisonTable>` with 3 columns × 6 rows. **No apostrophes in `rows` JSON.**

### Task 6 — Industries / verticals section
~200 words. Link to `/verticals/health-supplement-copywriter`, `/verticals/financial-copywriter`, `/verticals/info-product-copywriter`, `/verticals/saas-copywriter`.

### Task 7 — Process section + Proof section
~250 + ~200 words. Numbered 5-step process. `<ExpertQuote>` with Belron CEO "secret weapon" line.

### Task 8 — "What to look for" criteria + closing CTA
~250 words. 6 numbered criteria. Closing CTA to `/contact`.

### Task 9 — FAQ section
10 `<FAQItem>` blocks inside `<FAQSection>`, echoing the frontmatter FAQs. **No apostrophes inside `question` attribute.**

### Task 10 — Update content-links.ts
Add three entries in `tagToService` (after line 109):
```ts
advertorial: 'ad-copywriter',
'advertorial copywriter': 'ad-copywriter',
'native advertising': 'ad-copywriter',
```

### Task 11 — Hero image
Source 1200×630 image from Unsplash or Pexels; save to `public/images/blog/advertorial-copywriter.jpg`.

### Task 12 — Build verification
Run `npm run build`. Fix any errors (most likely ComparisonTable JSON or FAQ apostrophes).

### Task 13 — Commit
Single commit using `rob@gofreelance.com`. Message summarizes scope: new blog post + content-links mapping.

---

## Verification Checklist

- `npm run build` exits 0
- `/blog/advertorial-copywriter` renders in dev server
- KeyTakeaways, DefinitionBox, ComparisonTable, ExpertQuote, FAQSection all render without errors
- Article + FAQPage JSON-LD present in page source
- Sitemap includes `/blog/advertorial-copywriter`
- Related services section surfaces `ad-copywriter` via the new tag mappings
- All internal links resolve (no 404s)
- Hero image loads

---

## Known Risks

- **ComparisonTable apostrophes:** Will break MDX parsing. Write rows copy without apostrophes. Verified memory entry: `feedback_comparison_table.md`.
- **FAQItem question apostrophes:** Same MDX JSX-attribute issue observed in the DR post. Strip apostrophes in FAQItem `question` prop (the rendered FAQ body is normal markdown and can keep apostrophes).
- **Hero image licensing:** Unsplash and Pexels both license-free for commercial use. Confirm before download.
