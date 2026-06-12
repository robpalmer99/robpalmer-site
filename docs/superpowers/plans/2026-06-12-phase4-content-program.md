# Phase 4 — Content Program Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Consolidate the cannibalized best-DR query onto one post, fix SERP truncation on 31 posts, refresh 2025-stale content, route internal links to 26 orphaned posts, and add the /about entity block.

**Architecture:** One small pipeline addition (metaTitle/metaDescription frontmatter), then editorial work driven by pre-verified data tables embedded below. Every link passes the prebuild checker; every major copy edit passes a copychief gate before its commit is approved.

**Tech Stack:** MDX/gray-matter, Next.js metadata API, next.config.ts redirects.

**Spec:** docs/superpowers/specs/2026-06-12-phase4-content-program-design.md

**Repo facts & house rules:**
- No test suite. Verification = build + link checker + the audit scripts in Task 9.
- NEVER `npm run build` while a dev server runs (`pgrep -f "next dev"` first).
- Push ≠ deploy (Rob's explicit call).
- Voice: first person in body copy; listicle profiles may be third person; scarcity implied never stated; no hype words (comprehensive/cutting-edge/world-class/seamless); metaTitles lead with the keyword.
- Date honesty: `updated` frontmatter only on substantive edits.
- **Copychief gate:** Tasks 2, 5, and 7 produce major DR copy. The implementer self-reviews against the checklist in each task; the CONTROLLER then runs the copychief skill on the diff before the commit is treated as accepted (the subagent commits; the controller may require amendments).
- `updated` field exists since Phase 2 (drives dateModified + sitemap).
- gray-matter quirk: keep frontmatter values single-quoted like neighbors.

---

### Task 1: metaTitle/metaDescription pipeline

**Files:**
- Modify: `src/lib/mdx.ts` (BlogPostMeta interface; BOTH meta constructors — getBlogPostMeta AND getBlogPostContent build separate meta literals, a known duplication)
- Modify: `src/app/blog/[slug]/page.tsx` (generateMetadata)

- [ ] **Step 1: Interface + readers**

In `BlogPostMeta`, after `description: string`, add:

```ts
  metaTitle?: string
  metaDescription?: string
```

In BOTH `getBlogPostMeta`'s and `getBlogPostContent`'s returned meta objects, after the `description:` line, add:

```ts
    metaTitle: data.metaTitle || undefined,
    metaDescription: data.metaDescription || undefined,
```

- [ ] **Step 2: generateMetadata wiring**

In `src/app/blog/[slug]/page.tsx` `generateMetadata`, change:

```ts
    title: post.meta.title,
    description: post.meta.description,
```

to:

```ts
    title: post.meta.metaTitle || post.meta.title,
    description: post.meta.metaDescription || post.meta.description,
```

And inside the `openGraph` object, the same two substitutions on its `title`/`description`. Leave the `twitter` object and the Article schema `headline` (full title) untouched.

- [ ] **Step 3: Verify + commit**

`npx tsc --noEmit` → exit 0.

```bash
git add src/lib/mdx.ts 'src/app/blog/[slug]/page.tsx'
git commit -m "feat(blog): optional metaTitle/metaDescription frontmatter decouples SERP snippets from H1"
```

---

### Task 2: Cannibal consolidation (301 + merge) — COPYCHIEF GATE

**Files:**
- Modify: `src/content/blog/best-direct-response-copywriter-to-hire.mdx` (survivor, 2,869 words)
- Delete: `src/content/blog/best-direct-response-copywriters-2026.mdx` (doomed, 4,072 words)
- Modify: `next.config.ts` (one redirect)

Verified 2026-06-12: ZERO internal links anywhere reference the doomed slug — no repointing needed.

- [ ] **Step 1: Merge the unique value into the survivor**

The survivor's structure: 8 ranked copywriter profiles (Rob #1) → "What to Look For When Hiring" → "Before you book". The doomed post's unique assets to port (its H2/H3 outline, verified):

- **The 4-criterion evaluation framework** ("Tracked results and revenue impact" / "Relevant specialization" / "A research-first process" / "Pricing transparency and alignment") → merge INTO the survivor's "What to Look For When Hiring a Direct Response Copywriter" section, replacing or augmenting weaker passages there.
- **The "Red Flags: When to Walk Away" section** (6 H3s: can't show numbers / want to start writing immediately / pricing too good / no specialization / reluctant to be measured / talk about themselves) → new H2 after "What to Look For".
- **Rob's credential block** (The numbers / The clients / The peer endorsements / The specialization / The process / What's different in 2026) → fold the strongest specifics into the survivor's Rob Palmer profile (#1 entry) WITHOUT bloating it past ~2× the other profiles' length.

DON'T port: the doomed post's archetype profiles (the survivor's 8 named real people are stronger), its duplicate "Before you book" block (survivor already has one), or its intro (survivor's is fine).

Target merged length ~4,500–5,000 words. Listicle voice rules apply (third person allowed in profiles; first person in Rob-voiced passages like the closing). Keep all existing frontmatter; set `updated: '<today's date>'`.

- [ ] **Step 2: Implementer self-review against the copychief checklist**

Before committing, verify the merged post: keyword still leads the title; no hype words introduced; every claim numerically specific or attributed; the Rob profile sells with proof not adjectives; scarcity implied only; exactly ONE "Before you book" block; CTA links point at /call; no duplicated passages from the merge; reading flow has no seams ("as we discussed above" referencing removed sections).

- [ ] **Step 3: Add the redirect and delete the doomed post**

In `next.config.ts` redirects (near the other /blog rules):

```ts
      {
        source: '/blog/best-direct-response-copywriters-2026',
        destination: '/blog/best-direct-response-copywriter-to-hire',
        permanent: true,
      },
```

Then `git rm src/content/blog/best-direct-response-copywriters-2026.mdx`. NOTE: also delete its hero image ONLY if unshared — check `grep -rn "best-direct-response-copywriters-2026" public/ src/` for other users of the image file first; if the image is used only by the deleted post, `git rm` it too.

- [ ] **Step 4: Verify + commit**

`npm run check:links` → ✓ (proves nothing references the deleted slug).

```bash
git add -A src/content/blog next.config.ts public/images 2>/dev/null
git commit -m "feat(blog): consolidate best-DR listicles — merge unique value, 301 the older post"
```

**CONTROLLER: run copychief on this diff before accepting.**

---

### Task 3: Cluster cross-links (hub/spoke)

**Files:** 13 posts under `src/content/blog/` (listed per cluster)

All links are contextual body-copy insertions — one to two sentences that read native to the surrounding argument, never bare "Related:" dumps. Verified: all slugs exist.

- [ ] **Step 1: Funnel-vs-page pair**

`sales-funnel-vs-single-sales-page` (hub) ↔ `single-sales-page-vs-full-funnel`: each gets one explicit companion-piece link framed by their distinction (hub = decision framework; companion = migration path). Rewrite each post's OPENING sentence enough that the two posts stop reading as the same article.

- [ ] **Step 2: Pricing pair**

`copywriting-rates` ↔ `how-much-does-a-direct-response-copywriter-cost`: reciprocal links that NAME the distinction (general market rates vs DR-specialist costs), e.g. in copywriting-rates: "If you specifically need direct-response work — VSLs, funnels, sales pages — the cost structure differs; I break that down in [how much a direct response copywriter costs](/blog/how-much-does-a-direct-response-copywriter-cost)."

- [ ] **Step 3: Hiring spread**

Hub: `how-to-hire-a-copywriter`. Spokes: `direct-response-copywriter-for-hire`, `direct-response-copywriting-specialist`, `professional-copywriter-services`, `copywriting-services`. Each spoke gets ONE contextual link to the hub; the hub gets links to the two strongest spokes (`direct-response-copywriter-for-hire`, `professional-copywriter-services`).

- [ ] **Step 4: AI-capability cluster**

Hub: `direct-response-copywriting-ai`. Spokes: `can-ai-write-sales-copy`, `ai-vs-human-copywriting`, `ai-copywriting`. Each spoke → one link to the hub; hub → links to `can-ai-write-sales-copy` and `ai-vs-human-copywriting`.

- [ ] **Step 5: Verify + commit**

`npm run check:links` → ✓.

```bash
git add src/content/blog
git commit -m "feat(blog): hub/spoke cross-links for the four keyword clusters"
```

---

### Task 4: SERP truncation sweep (31 posts)

**Files:** the 31 posts below (frontmatter only — add `metaTitle:` and/or `metaDescription:` lines after `description:`; body untouched)

The verified list (slug | title-len | desc-len; fix title if >80, description if >200 — some need both; full titles/descriptions in /tmp/p4-truncation-list.txt, regenerate with the Task 9 script if gone):

```
website-copywriting 84|320 · triple-brain-marketing 64|298 · copywriting-bullet-points 57|286 ·
copywriting-vs-content-writing 91|268 · famous-copywriters 63|255 · what-is-a-swipe-file 77|251 ·
ecommerce-email-flows 64|250 · dtc-brand-voice-copywriting 56|233 · product-description-copywriting 67|230 ·
ai-copywriting-prompts 101|130 · dtc-product-page-copywriting 58|221 · ai-ad-copy-examples 95|146 ·
conversion-rate-optimization-checklist 94|134 · ai-sales-page-generator 92|138 · copywriting-equipment 92|164 ·
lessons-from-gary-halbert 89|124 · ai-vs-human-copywriting 88|129 · history-of-direct-mail-marketing 88|141 ·
ai-email-sequence-generator 87|139 · worlds-first-blogger-digital-nomad-pioneer 62|207 ·
advertorial-copywriter 86|180 · supplement-copywriter 86|163 · direct-mail-copywriting 85|137 ·
direct-response-decision-framework 85|172 · history-of-direct-response-advertising 84|165 ·
direct-response-copywriter-for-hire 83|157 · how-to-write-a-headline 62|203 · saas-copywriting 82|120 ·
health-supplement-copywriting 81|137 · history-of-sales-letters 81|144 · state-of-email-marketing-2026 81|124
```

(`best-direct-response-copywriters-2026` was on the original list — gone via Task 2.)

- [ ] **Step 1: Write metaTitles/metaDescriptions per the rules**

Rules: metaTitle ≤60 chars, leads with the post's primary keyword (usually the slug's phrase), no clickbait, no "| Rob Palmer" (the layout template appends it). metaDescription 140–160 chars, front-loads the answer/promise, ends on a complete clause not a cut-off.

Worked examples (use this register):

```yaml
# ai-copywriting-prompts (title 101ch)
metaTitle: 'AI Copywriting Prompts That Actually Convert'
# copywriting-vs-content-writing (title 91ch, desc 268ch)
metaTitle: 'Copywriting vs Content Writing: The Real Difference'
metaDescription: 'Copywriting sells; content writing builds attention. A 40-year direct-response copywriter explains which one your funnel needs, with examples.'
# website-copywriting (desc 320ch)
metaDescription: 'Website copywriting that converts: page-by-page frameworks for home, about, and service pages from a copywriter with $523M+ in tracked results.'
```

- [ ] **Step 2: Verify with the length audit**

```bash
node -e "
const fs=require('fs'),m=require('/Users/robpalmer/dev/robpalmer-site/node_modules/gray-matter');
let bad=0;
for(const f of fs.readdirSync('src/content/blog')){if(!f.endsWith('.mdx'))continue;
  const d=m(fs.readFileSync('src/content/blog/'+f,'utf8')).data;
  const t=(d.metaTitle||d.title||'').length, ds=(d.metaDescription||d.description||'').length;
  if(t>65||ds>165){bad++;console.log(f, 'title',t,'desc',ds)}}
console.log(bad+' posts still over');"
```

Expected: `0 posts still over`.

- [ ] **Step 3: Commit**

```bash
git add src/content/blog
git commit -m "feat(seo): metaTitle/metaDescription on 31 truncating posts"
```

---

### Task 5: Freshness refresh — COPYCHIEF GATE

**Files:** `copywriting-rates.mdx`, `copywriting-niches.mdx`, `what-is-a-vsl.mdx`, `sales-letter-examples.mdx`, `ecommerce-conversion-rate-optimization.mdx`, `is-copywriting-dead.mdx`

- [ ] **Step 1: The two pricing/niches posts (substantive)**

- `copywriting-rates`: title "…2025 Rates…" → 2026; every present-tense "in 2025" body instance → 2026 framing; rates UNCHANGED (Rob confirmed accurate 2026-06-12); set `updated: '<today>'`. If the title also exceeds 80 chars after editing, give it a metaTitle per Task 4 rules.
- `copywriting-niches`: title year → 2026; the 3 body "in 2025" instances; `updated: '<today>'`.

- [ ] **Step 2: Single-instance staleness fixes (NOT substantive — no `updated` bump)**

In each of `what-is-a-vsl`, `sales-letter-examples`, `ecommerce-conversion-rate-optimization`: find the one "in 2025" present-tense phrasing (`grep -n "in 2025" <file>`) and reword to current framing or explicit past reference, whichever the sentence needs. In `is-copywriting-dead`: the "in 2024" claim (`grep -n "in 2024"`) — recast as historical ("back in 2024…") if it reads as current.

- [ ] **Step 3: Verify + commit**

`grep -rn "2025 Rates\|in 2025" src/content/blog/copywriting-rates.mdx src/content/blog/copywriting-niches.mdx` → no present-tense hits remain (historical comparisons like "up from 2025" are fine if any were deliberately written that way).

```bash
git add src/content/blog
git commit -m "feat(blog): 2026 freshness refresh on pricing/niches posts + staleness touch-ups"
```

**CONTROLLER: run copychief on the two pricing/niches diffs before accepting.**

---

### Task 6: Orphan internal-link enrichment (26 posts)

**Files:** donor posts under `src/content/blog/` (~50–70 single-link insertions)

The verified orphan → donor mapping (full version with scores at /tmp/p4-orphan-donors.txt; regenerate via the audit script if gone). For EACH orphan, add a contextual link from 2–3 of its donors. `best-direct-response-copywriters-2026` is excluded (deleted in Task 2); `direct-response-copywriting-ai` receives its links via Task 3's cluster work (verify it has ≥2 inbound after Task 3; top up from `direct-response-copywriting-glossary` + `what-is-direct-response-copywriting` if not).

| Orphan | Donors (insert link FROM these) |
|---|---|
| advertorial-copywriter | how-to-hire-a-copywriter, in-house-copywriter-vs-freelance |
| ai-ad-copy-examples | ai-vs-human-copywriting, how-to-write-ad-copy |
| ai-copywriting-prompts | state-of-ai-copywriting-2026, chatgpt-for-copywriting |
| ai-email-sequence-generator | product-launch-email-sequence-case-study, email-sequence-vs-sales-funnel |
| ai-sales-page-generator | sales-page-examples, how-long-should-a-sales-page-be |
| coaching-offer-copywriting | course-sales-page-copywriting, info-product-launch-vs-evergreen |
| copywriter-salary | 30-years-of-copywriting-lessons, how-to-start-a-copywriting-career |
| copywriting-equipment | copywriting-tools, ai-copywriting-tools |
| copywriting-examples | direct-response-copywriting-glossary, copywriting-bullet-points |
| copywriting-hooks | copywriting-formulas, copywriting-bullet-points |
| copywriting-templates | headline-formulas, copywriting-tools |
| direct-response-copywriter-for-hire | how-to-hire-a-copywriter, how-much-does-a-direct-response-copywriter-cost |
| direct-response-copywriting-specialist | direct-response-copywriting-glossary, what-is-direct-response-copywriting |
| financial-copywriters | financial-copywriting, clickbank-copywriting |
| free-vsl-copywriting-guide | vsl-copywriting, what-is-a-vsl |
| golden-age-of-advertising | famous-copywriters, lessons-from-gary-halbert |
| google-ads-copywriting | facebook-ad-copywriting, website-copywriting |
| headline-analyzer-tools | how-to-write-a-headline, copywriting-tools |
| history-of-direct-mail-marketing | direct-mail-copywriting, famous-copywriters |
| history-of-direct-response-advertising | what-is-direct-response-copywriting, direct-mail-copywriting |
| history-of-sales-letters | famous-copywriters, how-to-write-a-sales-letter |
| professional-copywriter-services | in-house-copywriter-vs-freelance, freelance-copywriter-vs-marketing-agency |
| supplement-copywriter | health-supplement-copywriting, supplement-vsl-copywriting |
| webinar-registration-page-copy | saas-landing-page-copy, course-sales-page-copywriting |
| worlds-first-blogger-digital-nomad-pioneer | 30-years-of-copywriting-lessons, how-to-start-a-copywriting-career |

(direct-response-copywriter-for-hire and professional-copywriter-services also receive hub links via Task 3 Step 3 — count those; one extra donor link each is enough here.)

- [ ] **Step 1: Insert the links**

Rules per insertion: find a sentence in the donor where the orphan's topic naturally arises (or add one sentence); anchor text = natural phrase containing the orphan's keyword, NOT the bare title; ≤1 link to the same orphan per donor; donor edits are href-level — NO `updated` bumps.

Example register (in copywriting-tools, linking the equipment orphan): "The hardware matters less than people think — though if you're setting up from scratch, I've listed [the equipment I actually use](/blog/copywriting-equipment) — what moves the needle is the reference library."

- [ ] **Step 2: Verify coverage + links**

`npm run check:links` → ✓. Then re-run the orphan audit (Task 9 script) — expected: 0 orphans remain (or list any stragglers and fix).

- [ ] **Step 3: Commit**

```bash
git add src/content/blog
git commit -m "feat(blog): editorial inbound links for all 26 orphaned posts"
```

---

### Task 7: /about entity block — COPYCHIEF GATE

**Files:**
- Modify: `src/app/about/page.tsx` (Opening Bio section, ~line 37–40)

- [ ] **Step 1: Insert the block**

Directly inside the Opening Bio `<Container>`'s `max-w-4xl` div, BEFORE the existing headshot/bio flex row (so it is the first content element after the Hero), insert:

```tsx
            {/* Entity block — third-person by design: this is the AI-extraction
                anchor for "who is Rob Palmer" queries (like meta descriptions
                and schema). Everything else on this page stays first-person. */}
            <FadeIn>
              <p className="text-base text-paper-600 font-body leading-relaxed mb-10 max-w-3xl">
                Rob Palmer is a direct-response copywriter with 40+ years of
                experience and $523M+ in tracked client results, including
                campaigns for Apple, IBM, Microsoft, and Belron/Safelite. He
                works with health, finance, SaaS, e-commerce, and ClickBank
                clients worldwide, and is taking new engagements in 2026.
              </p>
            </FadeIn>
```

(paper-600 on the white Section background = the WCAG-compliant secondary
tone; the block reads as a byline, not a competing headline. FadeIn default —
it's in the first viewport, so post-Phase-3 it renders statically: correct.)

- [ ] **Step 2: Verify + commit**

`npx tsc --noEmit` → exit 0. Visual check happens at Task 9/Rob review.

```bash
git add src/app/about/page.tsx
git commit -m "feat(about): entity block for AI passage extraction (deliberate third-person)"
```

**CONTROLLER: copychief eye on this — it must NOT read as boilerplate bio sludge against the page's voice.**

---

### Task 8: (reserved for copychief-driven amendments)

After the controller runs the copychief skill over the Task 2/5/7 diffs, any required amendments land here as one commit:

```bash
git add -A src/content/blog src/app/about
git commit -m "fix(copy): copychief pass amendments on merged listicle, pricing refresh, entity block"
```

If copychief returns clean, this task is a no-op — note that and move on.

---

### Task 9: Final gates + push

- [ ] **Step 1: Audits**

```bash
pgrep -f "next dev" || npm run build      # includes the link-checker prebuild gate
# Length audit (same script as Task 4 Step 2) → expected 0 posts over
# Orphan audit → expected 0; regenerate with:
node -e "
const fs=require('fs');const dir='src/content/blog';
const inbound={};const posts=fs.readdirSync(dir).filter(f=>f.endsWith('.mdx')).map(f=>f.replace('.mdx',''));
posts.forEach(p=>inbound[p]=0);
for(const f of posts){const src=fs.readFileSync(dir+'/'+f+'.mdx','utf8');
  for(const m of src.matchAll(/\]\(\/blog\/([a-z0-9-]+)/g)) if(m[1]!==f && inbound[m[1]]!==undefined) inbound[m[1]]++}
const orphans=posts.filter(p=>inbound[p]===0 && !p.startsWith('claude-code'));
console.log(orphans.length+' orphans:', orphans.join(', '))"
# Staleness grep:
grep -rn "2025 Rates" src/content/blog && echo FAIL || echo "staleness OK"
```

- [ ] **Step 2: Built-output spot checks**

The merged post's built HTML: `<title>` matches its metaTitle (or title) + single "| Rob Palmer"; Article schema dateModified = today. The deleted slug absent from `.next` sitemap output. /about built HTML: entity block text present before the bio.

- [ ] **Step 3: Push (no deploy)**

```bash
git push
```

- [ ] **Step 4: Rob's review checkpoint (blocking)**

Dev server up; Rob reviews: the merged to-hire post, both refreshed pricing/niches posts, the /about entity block (the third-person call), and 2–3 sampled donor-link insertions for prose quality. Deploy is his explicit call.

---

## Out of scope (do not drift)

New posts; skill posts; component changes beyond Task 1/7; Phase 5 hygiene
(mdx.ts constructor dedup is NOTED again here — Task 1 had to touch both
constructors — but stays in Phase 5); robots/AI policy; off-page entity work.

## Correction (2026-06-12, found in final review)

Task 4's verification script used thresholds (title >65 / desc >165) stricter
than the task's own fix criteria (>80 / >200). The implementation correctly
followed the fix criteria — 31 posts fixed, 0 remain over 80/200. The ~86
posts in the 66–80-char title band (which truncate mildly once the
" | Rob Palmer" suffix renders) are a deliberate deferral: logged as a
Phase 5 candidate sweep, not silently passed.
