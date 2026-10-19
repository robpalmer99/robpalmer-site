# Creative-Strategy Repositioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition robpalmer.com to lead on creative strategy (new `/services/creative-strategist` money page, strategy-first home page, two-tier services index, reframed verticals/About/metadata) while keeping every existing URL, metaTitle and ranking copywriting page intact.

**Architecture:** Content-driven Next.js 15 App Router site. Services and verticals are typed arrays in `_data/*.ts` rendered by `[slug]/page.tsx` through `DetailPageLayout`; the home page is a hand-composed `page.tsx`. This plan adds a `tier` field to `Service` so the home grid and services index derive their order from data, adds one new service entry, and edits copy in place. Five deployable slices; each ends with build → deploy → smoke check.

**Tech Stack:** Next.js 15, React, TypeScript, Tailwind (design tokens `ink-*`, `gold-*`, `paper-*`), MDX blog, Vercel CLI (`vercel deploy --prod --yes`), Python GSC script (`scripts/gsc_query.py`), OpenAI `gpt_image.py` CLI + ImageMagick for the hero image.

**Spec:** `docs/superpowers/specs/2026-10-19-creative-strategy-repositioning-design.md`

---

## Standing rules for every task

1. **Never run `npm run build` while `next dev` is running** (`pgrep -f "next dev"` first; it corrupts `.next/`). Build only in a quiet tree.
2. **Design tokens only.** No raw hex, no Tailwind default colours. `font-heading` for headings, `font-body` for body.
3. **`FadeIn` never wraps a `<li>`** inside a `<ul>`. Pattern: `<li><FadeIn ...>…</FadeIn></li>`.
4. **No figures for Rob's own price** anywhere on commercial pages ("$10K", "$5K", "$25K", "$15K", `minPrice`). Market examples inside blog prose ("$10K/day in spend") stay.
5. **Stefan Georgi / CA Labs:** allowed as a testimonial, a peer quote, or one item in a credential list. Not allowed in any H1, `metaTitle`, `metaDescription`, `headline`, `heroStats`, section `heading`, or as the thing the Triple Brain system is credited with.
6. **Every `metaTitle` leads with its primary keyword.** Existing DR/vertical metaTitles are not changed except to remove "+ CA Labs".
7. **First-person body copy.** Third person only in meta, schema, alt text, the About entity paragraph, testimonials.
8. **Scarcity implied** ("I take a small number of engagements each quarter"), never stated as "last/only".
9. **Commit after every task** with a conventional message; **push** `origin main` (push does not deploy). Deploy only at the end of each slice.
10. Commit messages end with `Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>`.

## Copy drafting protocol (referenced by tasks marked ✍)

Long-form strings (hero subheadlines, section `content`, FAQ answers, About paragraphs) are **drafted at implementation time** against the brief in the task, not pre-written here, because they must pass through the copywriting skills:

1. Invoke `Skill: copywriting-lessons`; read the **full** lessons file it points to (not the one-liners).
2. Re-read the spec section the task cites and the brief in the task.
3. Draft all strings for the task into the data file / page.
4. Invoke `Skill: direct-response-copy` in review mode on the drafted strings, then `Skill: copychief`. Apply the lifts.
5. Run the mechanical checks in the task (grep for forbidden strings, `npx tsc --noEmit`).
6. Only then commit.

Short strings (metaTitles, nav labels, FAQ *questions*, taglines, button text, definition text) are given verbatim in the tasks and used as written.

---

## Phase 0 — Baseline and smoke harness

### Task 0.1: Capture the GSC baseline

**Files:**
- Create: `docs/seo/2026-10-repositioning/baseline.json`
- Create: `docs/seo/2026-10-repositioning/README.md`

- [ ] **Step 1: Export 90-day query×page data**

```bash
cd /Users/robpalmer/dev/robpalmer-site
mkdir -p docs/seo/2026-10-repositioning
.claude/skills/seo/.venv/bin/python scripts/gsc_query.py --days 90 --dimension query,page --json \
  > docs/seo/2026-10-repositioning/baseline.json
python3 -c "import json;d=json.load(open('docs/seo/2026-10-repositioning/baseline.json'));print(len(d if isinstance(d,list) else d.get('rows',d)),'rows')"
```
Expected: `1000 rows` (the API cap) or similar non-zero count.

- [ ] **Step 2: Record the DR and creative-strategist cluster positions**

```bash
.claude/skills/seo/.venv/bin/python scripts/gsc_query.py --days 90 --dimension query --contains "direct response copywriter" | head -20
.claude/skills/seo/.venv/bin/python scripts/gsc_query.py --days 90 --dimension query --contains "creative strategist" | head -20
```
Paste both outputs into `docs/seo/2026-10-repositioning/README.md` under headings `## Baseline 2026-10-19 — DR cluster` and `## Baseline 2026-10-19 — creative-strategist cluster`, plus a line: `Checkpoints: +2 weeks (2026-11-02), +6 weeks (2026-11-30). Decision rule: sustained drop > ~5 positions on "direct response copywriter" → review the slice that shipped before it; do not roll back the repositioning.`

- [ ] **Step 3: Commit**

```bash
git add docs/seo/2026-10-repositioning
git commit -m "docs(seo): GSC baseline before creative-strategy repositioning

Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
git push origin main
```

### Task 0.2: Fetch-based smoke check for the repositioned pages

The spec asked for a Playwright smoke. All checked pages are statically rendered, so a plain `fetch` + HTML string check gives the same assertions with no browser dependency. (Deliberate simplification.)

**Files:**
- Create: `scripts/smoke-repositioning.mjs`
- Modify: `package.json` (scripts)

- [ ] **Step 1: Write the script**

```js
#!/usr/bin/env node
// Smoke-checks the pages touched by the 2026-10 creative-strategy repositioning.
// Usage: node scripts/smoke-repositioning.mjs [--base https://robpalmer.com] [--slice N]
// --slice N runs only the checks that must hold once slice N has shipped (default: all).
const args = process.argv.slice(2)
const arg = (k, d) => { const i = args.indexOf(k); return i === -1 ? d : args[i + 1] }
const BASE = arg('--base', 'https://robpalmer.com').replace(/\/$/, '')
const SLICE = Number(arg('--slice', '99'))

const FORBIDDEN = [/\$10K/, /\$10,000/, /CA Labs/]

// minSlice: the slice after which this check must pass.
const CHECKS = [
  { path: '/services/creative-strategist', minSlice: 1, h1: /creative strateg/i, title: /^Creative Strategist for DTC Brands \| Rob Palmer$/, faq: true },
  { path: '/', minSlice: 2, h1: /creative strateg/i, title: /^Creative Strategist & Direct-Response Copywriter \| Rob Palmer$/, faq: true },
  { path: '/services', minSlice: 3, h1: /creative strateg/i, title: /^Creative Strategy & Direct-Response Copywriting Services \| Rob Palmer$/, faq: false },
  { path: '/verticals/ecommerce-dtc-copywriter', minSlice: 4, h1: /creative strateg|DTC/i, title: /^E-Commerce & DTC Copywriter/, faq: true },
  { path: '/about', minSlice: 5, h1: /creative/i, title: /^About \|/, faq: false },
]

const pick = (html, re) => (html.match(re) || [])[1]?.replace(/<[^>]+>/g, '').trim()

let failures = 0
for (const c of CHECKS.filter((c) => c.minSlice <= SLICE)) {
  const url = BASE + c.path
  const res = await fetch(url, { redirect: 'manual' })
  const html = res.status === 200 ? await res.text() : ''
  const h1 = pick(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i) ?? ''
  const title = pick(html, /<title[^>]*>([\s\S]*?)<\/title>/i) ?? ''
  const desc = pick(html, /<meta name="description" content="([^"]*)"/i) ?? ''
  const hasFaq = /"@type":"FAQPage"/.test(html)
  const problems = []
  if (res.status !== 200) problems.push(`status ${res.status}`)
  if (!c.h1.test(h1)) problems.push(`h1 "${h1}" !~ ${c.h1}`)
  if (!c.title.test(title)) problems.push(`title "${title}" !~ ${c.title}`)
  if (c.faq && !hasFaq) problems.push('FAQPage JSON-LD missing')
  for (const re of FORBIDDEN) for (const [name, v] of [['h1', h1], ['title', title], ['description', desc]])
    if (re.test(v)) problems.push(`${name} contains ${re}`)
  if (problems.length) { failures++; console.log(`✗ ${c.path}\n    ${problems.join('\n    ')}`) }
  else console.log(`✓ ${c.path}`)
}
process.exit(failures ? 1 : 0)
```

- [ ] **Step 2: Add the npm script**

In `package.json` `"scripts"`, add:
```json
    "smoke": "node scripts/smoke-repositioning.mjs"
```

- [ ] **Step 3: Run it against production at slice 0 to confirm it executes (and that every check is skipped)**

Run: `npm run smoke -- --slice 0`
Expected: no output lines, exit code 0 (`echo $?` → `0`).

- [ ] **Step 4: Run it unfiltered to see the current failures (sanity check that the assertions bite)**

Run: `npm run smoke`
Expected: `✗ /services/creative-strategist` with `status 404`; `✗ /` with title mismatch and `description contains /CA Labs/`; exit code 1.

- [ ] **Step 5: Commit**

```bash
git add scripts/smoke-repositioning.mjs package.json
git commit -m "test: fetch-based smoke check for repositioned pages

Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
git push origin main
```

---

## Slice 1 — New service page and links in

### Task 1.1: Add `tier` and `schemaServiceType` to the Service interface

**Files:**
- Modify: `src/app/services/_data/services.ts:3-54` (interface) and every entry's `slug:` line
- Modify: `src/app/services/[slug]/page.tsx:58-80`

- [ ] **Step 1: Extend the interface**

In `src/app/services/_data/services.ts`, after `slug: string` (line 5) add:

```ts
  /** Home grid + /services index group. strategy = where an engagement starts; production = the creative I build. */
  tier: 'strategy' | 'production'
  /** Overrides the Service JSON-LD serviceType (default 'Direct-Response Copywriting'). */
  schemaServiceType?: string
```

- [ ] **Step 2: Run tsc to see every entry fail**

Run: `npx tsc --noEmit 2>&1 | grep -c "Property 'tier' is missing"`
Expected: `13`

- [ ] **Step 3: Add `tier` to all 13 entries**

Insert a `tier:` line directly after each `slug:` line. Values:

| slug | tier |
|------|------|
| direct-response-copywriter, vsl-copywriter, sales-page-copywriter, sales-letter-copywriter, email-copywriter, ad-copywriter, landing-page-copywriter, sales-funnel-copywriter, upsell-downsell-copywriter, facebook-ads-copywriter | `'production'` |
| ai-copywriting-consultant, ai-marketing-consultant, conversion-rate-optimization | `'strategy'` |

```bash
cd /Users/robpalmer/dev/robpalmer-site
for s in direct-response-copywriter vsl-copywriter sales-page-copywriter sales-letter-copywriter email-copywriter ad-copywriter landing-page-copywriter sales-funnel-copywriter upsell-downsell-copywriter facebook-ads-copywriter; do
  perl -0pi -e "s/(    slug: '$s',\n)/\$1    tier: 'production',\n/" src/app/services/_data/services.ts; done
for s in ai-copywriting-consultant ai-marketing-consultant conversion-rate-optimization; do
  perl -0pi -e "s/(    slug: '$s',\n)/\$1    tier: 'strategy',\n/" src/app/services/_data/services.ts; done
grep -c "    tier: '" src/app/services/_data/services.ts
```
Expected: `13`

- [ ] **Step 4: Remove the hard-coded price from the Service schema and use `schemaServiceType`**

In `src/app/services/[slug]/page.tsx` replace lines 69–79 (`serviceType: …` through the `offers` object) with:

```ts
    serviceType: service.schemaServiceType ?? 'Direct-Response Copywriting',
    offers: {
      '@type': 'Offer',
      description: 'Fixed-price engagements — retainer or project. Quote within 48 hours of a strategy call.',
      url: `${SITE_URL}/call`,
    },
```

- [ ] **Step 5: Type-check**

Run: `npx tsc --noEmit`
Expected: no output (exit 0).

- [ ] **Step 6: Commit**

```bash
git add src/app/services/_data/services.ts "src/app/services/[slug]/page.tsx"
git commit -m "feat(services): add tier + schemaServiceType; drop hard-coded minPrice from Service schema

Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
git push origin main
```

### Task 1.2: Generate the hero image

**Files:**
- Create: `public/images/services/creative-strategist.jpg`

- [ ] **Step 1: Generate**

```bash
mkdir -p /private/tmp/claude-501/-Users-robpalmer-dev-robpalmer-site/hero-gen
python3 ~/.claude/skills/tools/openai/gpt_image.py \
  --prompt "Editorial photograph, overhead view of a creative strategist's desk: a large paper storyboard grid of Meta ad concepts with hand-drawn thumbnails and short handwritten angle labels, a laptop showing an ad-performance dashboard with rising bars (no legible text), a fountain pen, a cup of black coffee. Warm charcoal and soft cream palette with amber-gold accents, soft directional window light, shallow depth of field, no people, no readable words, no logos." \
  --output-dir /private/tmp/claude-501/-Users-robpalmer-dev-robpalmer-site/hero-gen --aspect-ratio 16:9 --quality high
ls /private/tmp/claude-501/-Users-robpalmer-dev-robpalmer-site/hero-gen
```
Expected: one `.png` (1536×1024).

- [ ] **Step 2: Resize to the site spec and inspect**

```bash
magick /private/tmp/claude-501/-Users-robpalmer-dev-robpalmer-site/hero-gen/*.png -resize 1200x800^ -gravity center -extent 1200x800 -quality 85 -strip -interlace JPEG public/images/services/creative-strategist.jpg
ls -la public/images/services/creative-strategist.jpg
```
Expected: file < 200 KB. Open it with the Read tool and confirm no garbled text or artifacts; regenerate if so.

- [ ] **Step 3: Commit**

```bash
git add public/images/services/creative-strategist.jpg
git commit -m "feat(services): hero image for creative-strategist page

Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
git push origin main
```

### Task 1.3 ✍: Add the `creative-strategist` service entry

**Files:**
- Modify: `src/app/services/_data/services.ts:56` (insert new entry as the first element of `services`)
- Modify: `src/lib/page-dates.ts:33-37`

- [ ] **Step 1: Follow the copy drafting protocol** (load `copywriting-lessons`, read the full lessons file, re-read spec §5).

- [ ] **Step 2: Insert the entry**

Insert immediately after `export const services: Service[] = [` (line 56). Fields marked **DRAFT** are written per the brief that follows; everything else verbatim.

```ts
  {
    title: 'Creative Strategist',
    slug: 'creative-strategist',
    tier: 'strategy',
    schemaServiceType: 'Creative Strategy',
    shortDescription:
      'Creative strategy for DTC brands scaling on Meta — angles, hooks, scripts, statics and landers from one senior strategist with 40 years of direct response and $523M in tracked results.',
    metaTitle: 'Creative Strategist for DTC Brands',
    metaDescription:
      'Senior creative strategist for DTC brands scaling paid social. Angles, hooks, scripts, statics and landers from one strategist — 40 years of direct response, $523M in tracked results.',
    headline: /* DRAFT — positive frame, same family as the home hero, ≤ 12 words, contains "Creative Strategist" */,
    subheadline: /* DRAFT — 2–3 sentences: one senior strategist who does the research, angles, scripts, statics and landers himself; 40 years DR + AI production stack; $523M proof. No CA Labs. */,
    heroImage: '/images/services/creative-strategist.jpg',
    heroImageAlt: 'Creative strategist\'s desk with a storyboard of ad concepts and a performance dashboard',
    definition: {
      term: 'Creative Strategist',
      text: 'A creative strategist decides what a brand\'s ads should say and test — the angles, hooks, formats and landing experiences — and runs the loop that turns ad-account data into the next round of creative. Rob Palmer is a creative strategist and direct-response copywriter with 40+ years of experience and $523M in tracked results who produces the creative he plans: scripts, statics, video and landers.',
    },
    heroStats: {
      primary: { value: '$523M', label: 'In Tracked Client Results' },
      secondary: [
        { value: '40+', label: 'Years of Direct Response' },
        { value: '300%', label: 'ROAS on a Campaign I Wrote (Ben Palmer)' },
        { value: '190+', label: 'Proven Frameworks in the Testing Loop' },
      ],
    },
    credentialBar: {
      heading: 'Creative strategy for',
      items: [
        'DTC and E-Commerce Brands on Meta',
        'YouTube and Native Advertisers',
        'Health and Supplement Offers',
        'ClickBank Platinum Vendors',
        'SaaS and Info-Product Launches',
        'In-House Growth Teams',
      ],
    },
    sections: [
      { heading: 'Why Creative Is Now the Lever', content: /* DRAFT */ },
      { heading: 'What I Do, Stage by Stage', content: /* DRAFT */, bullets: [ /* DRAFT: 4 stages */ ] },
      { heading: 'The Direct-Response Difference in Creative Strategy', content: /* DRAFT */ },
      { heading: 'How an Engagement Runs', content: /* DRAFT */ },
      { heading: 'Creative That Has Already Paid for Itself', content: /* DRAFT */ },
    ],
    caseStudies: [
      { name: 'Ben Palmer / ClickBank Platinum', category: 'Email-Driven Health Funnel', metric: '300% ROAS', detail: 'Angle, hooks and the full email funnel written as one argument.' },
      { name: 'Abundant', category: 'Info-Product Campaign', metric: '340% ROAS', detail: 'Facebook cold traffic into a long-form story-driven TSL.' },
      { name: 'Conor Reynolds', category: 'VSL Funnel', metric: '8% Cold-Traffic CVR', detail: 'Cold-traffic VSL and sales page built from the same angle map.' },
      { name: 'Belron / Safelite', category: 'Nine-Year Direct-Response Control', metric: '$523M', detail: 'Continuously tested creative — the discipline the whole loop runs on.' },
    ],
    deliverablesHeading: 'What a Creative-Strategy Engagement Delivers',
    deliverablesSubtext: 'Enter at any stage. Everything below is produced, not just briefed.',
    deliverables: [
      { title: 'Angle Map & Research Brief', description: 'Customer language mined from reviews, forums, support logs and competitor ads; angles ranked by awareness level and sophistication.' },
      { title: 'Creative Brief Set', description: 'One brief per concept: hook, mechanism, proof, format, placement — ready for your editors or for me to produce.' },
      { title: 'Scripts & Statics', description: 'UGC and talking-head scripts, narrative ads, static concepts with copy — written to the brief, not around it.' },
      { title: 'Video Production', description: 'AI-produced video ads through my studio stack: voice, cut, captions — for concepts that need to move before a human shoot is justified.' },
      { title: 'Landers & Advertorials', description: 'The page the ad lands on, written to match the angle so the click doesn\'t break on arrival.' },
      { title: 'Testing Plan & Iteration Cadence', description: 'What ships, in what order, what we read in the account, and what the next round tests.' },
    ],
    testimonialIds: ['4', '38', '15'],
    portfolioItems: [
      { title: 'DTC Supplement — Meta Ad Concept Set', category: 'Ad Creative' },
      { title: 'Health Offer — Advertorial Pre-Sell', category: 'Advertorial' },
      { title: 'Info Product — Cold-Traffic Lander', category: 'Landing Page' },
    ],
    midCta: {
      headline: 'Ready for creative that scales instead of fatigues?',
      subtext: 'Book a strategy call. Bring your ad account and your current winners — I\'ll tell you where the next angle is before we talk about scope. Retainer or project, whichever fits.',
    },
    faqs: [
      { question: 'What does a creative strategist do?', answer: /* DRAFT */ },
      { question: 'How is a creative strategist different from a copywriter?', answer: /* DRAFT */ },
      { question: 'How is working with you different from hiring an agency?', answer: /* DRAFT */ },
      { question: 'Do you produce the creative as well as plan it?', answer: /* DRAFT */ },
      { question: 'Which platforms do you work on?', answer: /* DRAFT */ },
      { question: 'How many new creatives do you deliver per month?', answer: /* DRAFT */ },
      { question: 'How do you measure whether the strategy is working?', answer: /* DRAFT */ },
      { question: 'How are creative-strategy engagements priced?', answer: /* DRAFT — retainer or project; fixed-price quote after the call; NO figure */ },
      { question: 'How do we get started?', answer: /* DRAFT */ },
      { question: 'Do you work alongside in-house teams and editors?', answer: /* DRAFT */ },
    ],
    relatedServices: ['direct-response-copywriter', 'ad-copywriter', 'facebook-ads-copywriter', 'ai-marketing-consultant', 'conversion-rate-optimization'],
    relatedVerticals: ['ecommerce-dtc-copywriter', 'health-supplement-copywriter', 'clickbank-copywriter'],
  },
```

**Brief for the DRAFT strings** (spec §5):
- *headline*: aspirational, role word present. Family: "Creative Strategy for Brands Ready to Scale" (home) → here something like "The Creative Strategist Who Also Builds the Creative". Pick the strongest after lessons review.
- *Section 1 — Why Creative Is Now the Lever* (~180 words): Meta's Andromeda ranking rewards creative diversity and velocity; winning ads fatigue in days; the constraint moved from media buying to the supply of good angles. Most "creative strategists" write briefs and hand off; most copywriters write one asset at a time. Name the gap, don't dwell on pain.
- *Section 2 — What I Do, Stage by Stage* (~80 words intro + 4 bullets): bullets = Research & angles → Briefs, scripts, statics, video → Landers & advertorials → Testing & iteration. Intro says clients enter at any stage.
- *Section 3 — The Direct-Response Difference* (~180 words): angles from awareness levels (Schwartz), hooks from proven lead types, the ad and the lander as one argument, compliance posture from line one. Link `/blog/creative-strategist` (what-is) once and `/services/direct-response-copywriter` once.
- *Section 4 — How an Engagement Runs* (~150 words): strategy call → audit of the account and current winners → scope as **retainer (weekly creative drops, monthly testing review) or project**, fixed-price quote within 48 hours. No figures. Capacity line implied.
- *Section 5 — Proof* (~150 words): the four caseStudies in prose; Ben's 300% ROAS first. Stefan may appear as "hired me as Copy Chief" in one clause, not as the lead.
- *FAQ answers* 60–110 words each; the pricing answer contains no number.

- [ ] **Step 3: Add the page date**

In `src/lib/page-dates.ts` `SERVICE_UPDATED`, add `'creative-strategist': '<today YYYY-MM-DD>',`.

- [ ] **Step 4: Mechanical checks**

```bash
npx tsc --noEmit
grep -n "DRAFT" src/app/services/_data/services.ts | head   # must print nothing
awk '/slug: .creative-strategist./,/relatedVerticals/' src/app/services/_data/services.ts | grep -n '\$10K\|\$5K\|CA Labs' # must print nothing
```
Expected: all three silent.

- [ ] **Step 5: Copy review** — `direct-response-copy` then `copychief` on the new entry; apply lifts; re-run Step 4.

- [ ] **Step 6: Build and view**

```bash
pgrep -f "next dev" && echo "STOP: dev server running" || npm run build
```
Expected: build succeeds, `/services/creative-strategist` listed among static routes. Then `npm run dev`, open `http://localhost:3000/services/creative-strategist`, check hero, stats, definition box, sections, deliverables, FAQ; stop the dev server.

- [ ] **Step 7: Commit**

```bash
git add src/app/services/_data/services.ts src/lib/page-dates.ts
git commit -m "feat(services): add Creative Strategist money page

Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
git push origin main
```

### Task 1.4: Remap the creative-strategist tags in content-links

**Files:**
- Modify: `src/lib/content-links.ts:157-170`

- [ ] **Step 1: Edit**

Replace the comment and the eleven `'creative strategist…': 'direct-response-copywriter'` lines (158–169) with:

```ts
  // Creative-strategist cluster → the creative-strategist money page (2026-10
  // repositioning). Tags are processed before categories, so these always
  // survive the 3-slot cap.
  'creative strategist': 'creative-strategist',
  'what is a creative strategist': 'creative-strategist',
  'hire a creative strategist': 'creative-strategist',
  'creative strategist for hire': 'creative-strategist',
  'creative strategist services': 'creative-strategist',
  'how to hire a creative strategist': 'creative-strategist',
  'freelance creative strategist': 'creative-strategist',
  'creative strategist retainer': 'creative-strategist',
  'creative strategist salary': 'creative-strategist',
  'creative strategist rates': 'creative-strategist',
  'creative strategist cost': 'creative-strategist',
```
Leave `'performance creative': 'facebook-ads-copywriter'` as is.

- [ ] **Step 2: Verify**

Run: `grep -c "'creative-strategist'" src/lib/content-links.ts && npx tsc --noEmit`
Expected: `11`, then silence.

- [ ] **Step 3: Commit**

```bash
git add src/lib/content-links.ts
git commit -m "feat(blog): route creative-strategist tags to the new service page

Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
git push origin main
```

### Task 1.5: Related-service links into the new page (services, DTC vertical, DR page sentence, llms.txt)

**Files:**
- Modify: `src/app/services/_data/services.ts` — every `relatedServices:` line except the new entry's; DR page section 5 (the `creative strategist` link)
- Modify: `src/app/verticals/_data/verticals.ts:603`
- Modify: `public/llms.txt:1-30`

- [ ] **Step 1: Prepend `'creative-strategist'` to the 13 existing `relatedServices` arrays**

```bash
perl -pi -e "s/^(    relatedServices: \[)(?!'creative-strategist')/\$1'creative-strategist', /" src/app/services/_data/services.ts
grep -c "relatedServices: \['creative-strategist'" src/app/services/_data/services.ts
```
Expected: `13` (the new entry's own list starts with `'direct-response-copywriter'` and is untouched).

- [ ] **Step 2: Re-point the DR money page's existing creative-strategist sentence**

In the `direct-response-copywriter` entry, section "Why Offer Owners Hire Me Over an Agency or an AI Tool", change
`<a href="/blog/creative-strategist">creative strategist</a>` → `<a href="/services/creative-strategist">creative strategist</a>`.
(The spec called for one sentence in the first section; this sentence already exists in section 5 and re-pointing it is the lower-risk edit to a ranking page. No new sentence is added.)

- [ ] **Step 3: DTC vertical**

`src/app/verticals/_data/verticals.ts:603` →
```ts
    relatedServices: ['creative-strategist', 'email-copywriter', 'upsell-downsell-copywriter', 'landing-page-copywriter', 'ad-copywriter'],
```

- [ ] **Step 4: llms.txt**

Replace lines 3–11 (the summary paragraph) with:

```
Rob Palmer is a creative strategist and direct-response copywriter with 40+ years
of experience. He plans and produces the creative for DTC brands scaling on paid
social — angles, hooks, scripts, statics, video and landers — and writes VSLs,
sales pages, email sequences and full funnels for health, finance, SaaS,
e-commerce, info-product and ClickBank clients. His longest engagement, a 9-year
direct-response campaign for Belron/Safelite, tracked $523 million in sales;
earlier clients include Apple, IBM, Microsoft, Citibank and Morgan Stanley. He
works with a Triple Brain workflow (senior craft + Claude Code with custom
copywriting skills + a 1,239-file copywriting vault) and is actively taking
clients as of 2026, on retainer or by project.
```

Under `## Key pages`, insert as the first bullet after `/call`:
```
- https://robpalmer.com/services/creative-strategist — Creative strategy for DTC brands (canonical service page)
```

- [ ] **Step 5: Verify**

```bash
grep -c '\$10K' public/llms.txt   # 0
npx tsc --noEmit
```

- [ ] **Step 6: Commit**

```bash
git add src/app/services/_data/services.ts src/app/verticals/_data/verticals.ts public/llms.txt
git commit -m "feat(seo): link every service, the DTC vertical and llms.txt to the creative-strategist page

Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
git push origin main
```

### Task 1.6: In-body links from the three creative-strategist posts

One prose link per post, varied anchor, existing DR links untouched.

**Files:**
- Modify: `src/content/blog/creative-strategist.mdx` (~line 103 paragraph)
- Modify: `src/content/blog/hire-a-creative-strategist.mdx` (~line 73 paragraph)
- Modify: `src/content/blog/creative-strategist-salary.mdx` (line 115)

- [ ] **Step 1: creative-strategist.mdx**

Line 103 reads "If you have a working funnel and need one high-stakes asset … hire a [senior direct-response copywriter](/services/direct-response-copywriter). If yo…". In the clause that follows ("If you need …the loop…"), link the role: `…you need a [creative strategist who also produces the creative](/services/creative-strategist)…`. Keep the DR link. Update frontmatter `updated:` to today.

- [ ] **Step 2: hire-a-creative-strategist.mdx**

Line 73 is the parallel "single asset → DR copywriter" sentence. In the sentence after it (the "whole testing loop" case), add: `…that is the [creative-strategy engagement I run for DTC brands](/services/creative-strategist).` Update `updated:`.

- [ ] **Step 3: creative-strategist-salary.mdx**

Line 115 ends the post. Append one sentence: `If you would rather hire the output than the headcount, [my creative-strategy service page](/services/creative-strategist) sets out what a retainer or project covers.` Update `updated:`.

- [ ] **Step 4: Verify links resolve**

Run: `npm run check:links`
Expected: `✓` summary, no broken links.

- [ ] **Step 5: Commit**

```bash
git add src/content/blog/creative-strategist.mdx src/content/blog/hire-a-creative-strategist.mdx src/content/blog/creative-strategist-salary.mdx
git commit -m "feat(blog): link the creative-strategist cluster to the new service page

Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
git push origin main
```

### Task 1.7: Build, deploy, verify slice 1

- [ ] **Step 1: Clean build**

```bash
pgrep -f "next dev" && echo "STOP: dev server running" || (rm -rf .next && npm run lint && npx tsc --noEmit && npm run build)
```
Expected: lint clean, tsc silent, build succeeds.

- [ ] **Step 2: Deploy**

Run: `vercel deploy --prod --yes`
Expected: ends with the production URL aliased to robpalmer.com.

- [ ] **Step 3: Smoke**

Run: `npm run smoke -- --slice 1`
Expected: `✓ /services/creative-strategist`, exit 0.

- [ ] **Step 4: Manual GSC step** — tell Rob: "Request indexing in the GSC UI for https://robpalmer.com/services/creative-strategist (the API cannot)."

- [ ] **Step 5: Memory** — update `~/.claude/projects/-Users-robpalmer-dev-robpalmer-site/memory/project_creative_strategist_seo.md`: add a dated line that the service page is live, is the cluster's money page, and that content-links now routes the cluster tags to it (not to the DR page).

---

## Slice 2 — Home page and global metadata

### Task 2.1: Site title, description, nav, Person schema

**Files:**
- Modify: `src/lib/constants.ts:2-4, 15-28`
- Modify: `src/app/layout.tsx:59-70, 81-84, 122-130`

- [ ] **Step 1: constants.ts**

```ts
export const SITE_TITLE = 'Rob Palmer | Creative Strategist & Direct-Response Copywriter'
export const SITE_DESCRIPTION =
  'Creative strategist and direct-response copywriter with $523M+ in tracked results. Angles, hooks, scripts, statics and landers for DTC brands scaling on Meta — plus VSLs, sales pages and funnels.'
```

`NAV_LINKS` becomes:
```ts
export const NAV_LINKS: readonly NavItem[] = [
  { label: 'Creative Strategy', href: '/services/creative-strategist' },
  { label: 'Services', href: '/services' },
  {
    label: 'Experience',
    children: [
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Verticals', href: '/verticals' },
    ],
  },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]
```

- [ ] **Step 2: layout.tsx Person schema**

```ts
  jobTitle: 'Creative Strategist & Direct-Response Copywriter',
  description:
    'Creative strategist and direct-response copywriter with 40+ years of experience. Plans and produces ad creative for DTC brands scaling on paid social, and writes VSLs, sales pages, email sequences and funnels. His 9-year Belron/Safelite direct-response campaign tracked $523 million in sales; earlier clients include Apple, IBM, Microsoft, Citibank and Morgan Stanley. Pioneer of blogging (1993) and AI-assisted copywriting.',
```
`knowsAbout`: prepend `'Creative strategy'`, `'Meta ads creative'`, `'DTC growth marketing'`, `'Ad creative testing'` before `'Direct response copywriting'`.
`hasOccupation.name` → `'Creative Strategist'`.
`websiteJsonLd.name` → `'Rob Palmer - Creative Strategist & Direct-Response Copywriter'`.

- [ ] **Step 3: Nav fits** — `npm run dev`; check header at 1280px and 375px (mobile menu). If the desktop row wraps, shorten the new label to `Strategy`. Stop dev.

- [ ] **Step 4: tsc + commit**

```bash
npx tsc --noEmit
git add src/lib/constants.ts src/app/layout.tsx
git commit -m "feat(seo): site-wide title, description, nav link and Person schema for creative strategy

Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
git push origin main
```

### Task 2.2: `/call` Fit line

**Files:**
- Modify: `src/app/call/page.tsx:99-104`

- [ ] **Step 1: Replace the Fit `<li>` body**

```tsx
                  <li>
                    <strong className="text-ink-950">Fit.</strong>{' '}
                    Retainer or project, whichever fits the work. You&apos;ll have a
                    fixed-price quote within 48 hours of the call &mdash; and if
                    I&apos;m not the right person, I&apos;ll say so and point you
                    to someone who is.
                  </li>
```

- [ ] **Step 2: Verify + commit**

```bash
grep -c '\$10K' src/app/call/page.tsx   # 0
git add src/app/call/page.tsx
git commit -m "fix(call): fit line without a price floor

Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
git push origin main
```

### Task 2.3: Home page — data-driven grids and structure

Structural edits only; copy comes in Task 2.4.

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Services grid from `tier`**

Replace `{services.slice(0, 6).map((service, index) => (` (line ~344) with:

```tsx
            {homepageServices.map((service, index) => (
```
and add above `export default function HomePage()`:

```tsx
// Strategy tier first (where an engagement starts), then the creative I build.
// ai-copywriting-consultant is the narrower sibling of ai-marketing-consultant;
// one consultancy card is enough on the home grid.
const homepageServices = [
  ...services.filter((s) => s.tier === 'strategy' && s.slug !== 'ai-copywriting-consultant'),
  ...services.filter((s) => s.tier === 'production'),
].slice(0, 6)
```
Resulting cards: Creative Strategist, AI Marketing Consultant, Conversion Rate Optimization, Direct Response Copywriter, VSL Copywriter, Sales Page Copywriter — the spec's §4.8 list. (`ai-copywriting-consultant` is tier `strategy` for the `/services` index but excluded here so the DR money page stays within the six.)

- [ ] **Step 2: Verticals order and taglines**

Replace `VERTICAL_TAGLINES` with:

```tsx
const VERTICAL_TAGLINES: Record<string, string> = {
  'ecommerce-dtc-copywriter': 'Creative strategy for brands scaling on Meta.',
  'health-supplement-copywriter': 'Compliance-aware angles that still convert cold.',
  'clickbank-copywriter': 'Angles and funnels affiliates fight to promote.',
  'financial-copywriter': 'Disclosure-aware hooks with Wall Street credibility.',
  'saas-copywriter': 'Creative tested on MRR, churn and trial-to-paid.',
  'info-product-copywriter': 'Launch and evergreen creative that keeps scaling.',
}
const HOMEPAGE_VERTICAL_ORDER = Object.keys(VERTICAL_TAGLINES)
const homepageVerticals = HOMEPAGE_VERTICAL_ORDER
  .map((slug) => verticals.find((v) => v.slug === slug))
  .filter((v): v is NonNullable<typeof v> => Boolean(v))
```
and change `{verticals.map((vertical, index) => (` → `{homepageVerticals.map((vertical, index) => (`.

- [ ] **Step 3: New "Strategy through to shipped creative" section skeleton**

Insert after the peer-endorsement `</Section>` and before the Triple Brain section:

```tsx
      {/* Strategy → shipped creative: the engagement shape, and the agency comparison */}
      <Section variant="alt" divider>
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="gold">How it works</Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950 mt-6">
                {STAGES_HEADLINE}
              </h2>
              <p className="mt-5 text-lg text-ink-700 font-body leading-relaxed">{STAGES_INTRO}</p>
            </div>
          </FadeIn>
          <ol role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {STAGES.map((stage, index) => (
              <li key={stage.title}>
                <FadeIn delay={index * 100} distance={20} className="h-full">
                  <div className="h-full rounded-xl border border-paper-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-gold-200 hover:-translate-y-0.5">
                    <div className="font-heading text-xs font-bold uppercase tracking-wide text-gold-600">Stage {index + 1}</div>
                    <h3 className="mt-3 font-heading text-xl font-bold text-ink-950 leading-tight">{stage.title}</h3>
                    <p className="mt-3 text-base text-ink-700 leading-relaxed font-body">{stage.body}</p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ol>
          <FadeIn delay={450}>
            <div className="mt-12 max-w-3xl mx-auto text-lg text-ink-700 font-body leading-relaxed space-y-4">
              {AGENCY_COMPARISON.map((para) => <p key={para.slice(0, 24)}>{para}</p>)}
            </div>
          </FadeIn>
        </Container>
      </Section>
```
and above `HomePage` the data, with placeholders to be filled in Task 2.4:

```tsx
const STAGES_HEADLINE = 'Strategy through to shipped creative.'
const STAGES_INTRO = '' // Task 2.4
const STAGES: { title: string; body: string }[] = [
  { title: 'Research & angles', body: '' },
  { title: 'Briefs, scripts, statics, video', body: '' },
  { title: 'Landers & advertorials', body: '' },
  { title: 'Testing & iteration', body: '' },
]
const AGENCY_COMPARISON: string[] = [] // Task 2.4
```

- [ ] **Step 4: tsc, dev-server glance, commit**

```bash
npx tsc --noEmit
```
`npm run dev`, confirm the page renders (empty strings are fine for now), the new grid order and the six service cards; stop dev.

```bash
git add src/app/page.tsx
git commit -m "feat(home): tier-driven services grid, reordered verticals, stages section skeleton

Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
git push origin main
```

### Task 2.4 ✍: Home page copy

**Files:**
- Modify: `src/app/page.tsx` (metadata, hero, STAGES_*, AGENCY_COMPARISON, Triple Brain, problem/solution, before-you-book, services heading, verticals heading, CTABanner, AI section, FAQ)

- [ ] **Step 1: Follow the copy drafting protocol** (spec §4).

- [ ] **Step 2: Metadata (verbatim)**

```ts
export const metadata: Metadata = {
  title: 'Creative Strategist & Direct-Response Copywriter | Rob Palmer',
  description:
    'Creative strategist and direct-response copywriter behind $523M in tracked results. One senior strategist from angle to shipped creative — scripts, statics, video and landers for DTC brands scaling on Meta.',
  alternates: { canonical: SITE_URL },
}
```

- [ ] **Step 3: Hero**

`headline="Creative Strategy for Brands Ready to Scale"` (verbatim). `subheadline` DRAFT: 2 sentences — one senior strategist who does research, angles, scripts, statics and landers himself; 40 years of direct response and an AI production stack behind him; ends "$523M in tracked results." `image.alt="Rob Palmer, creative strategist"`. CTAs and the capacity line unchanged.

- [ ] **Step 4: Stages section strings** — `STAGES_INTRO` (one sentence: clients enter at whichever stage their team is missing); each `STAGES[i].body` ≤ 30 words; `AGENCY_COMPARISON` = 2 paragraphs ≤ 60 words each: no account manager, no junior layer, the person deciding is the person producing; the AI stack gives agency-scale volume.

- [ ] **Step 5: Triple Brain section** — Badge unchanged. Intro `<p>` DRAFT: "why the creative wins" frame replacing "You don't need a copywriter…". Brain headings verbatim: `Strategy brain`, `Production brain`, `Knowledge brain`. Brain bodies: keep existing facts (Apple/IBM/Microsoft/Belron; Claude Code + skills + GitHub/blog links; 1,239 files / 190 / 193 / 512), reworded to the new names; Production brain adds "script → video → page". Compounding paragraph unchanged.

- [ ] **Step 6: Problem/solution** — H2 DRAFT, two-part with gold span, e.g. `Most strategists brief. <span>I build.</span>`; three paragraphs DRAFT per spec §4.6 (creative is the lever; the brief-and-hand-off gap and the one-asset-at-a-time gap; the edge is DR craft plus production). Keep "Read my full story →".

- [ ] **Step 7: Before you book** — Fit bullet (verbatim):
`<span><strong className="text-ink-950">Fit.</strong> Retainer or project, whichever fits the work. Fixed-price quote within 48 hours of the call &mdash; and if I&apos;m not the right person, I&apos;ll say so and point you to someone who is.</span>`
Closing italic line → `I&apos;d rather refer a project than ship creative that won&apos;t beat your control.`

- [ ] **Step 8: Headings** — Services H2 verbatim `Strategy First. Then the Creative That Carries It.`; sub-line DRAFT one sentence. Verticals H2 verbatim `Markets I Know`; sub-line DRAFT one sentence. CTABanner `headline="Ready for creative that scales instead of fatigues?"`, `subtext` DRAFT one sentence about a strategy call on your creative.

- [ ] **Step 9: AI section** — H2 keeps the pattern; first paragraph DRAFT: AI-only creative flooded Meta and stopped working, replacing the fired-copywriters story; the three bullets and the output-proof box unchanged.

- [ ] **Step 10: FAQ** — rebuild `homepageFaqs` in this order with these exact questions; answers DRAFT (60–110 words), existing answers reused where noted:
1. `What does a creative strategist do, and how is that different from a copywriter?`
2. `Do you also write the copy and produce the creative?`
3. `Freelancer or agency — which are you?`
4. `What is Triple Brain Marketing?` — existing answer minus the CA Labs sentence, brains renamed.
5. `Are you taking new clients?` — existing answer.
6. `How much does it cost to hire you?` — DRAFT, no figure: retainer or project; fixed-price quote after the call; link to the copywriting-rates post stays as prose mention.
7. `What industries do you work with?` — existing, reorder to DTC first.
8. `How do you use AI in your process?` — existing answer.
9. `What results can I expect?` — existing answer.
10. `How do I get started?` — existing answer.

- [ ] **Step 11: Mechanical checks**

```bash
grep -n '\$10K\|CA Labs' src/app/page.tsx      # nothing
grep -n "^const STAGES_INTRO = ''\|body: ''\|AGENCY_COMPARISON: string\[\] = \[\]" src/app/page.tsx   # nothing
npx tsc --noEmit
```

- [ ] **Step 12: Copy review** — `direct-response-copy` then `copychief` on the whole page; apply lifts; re-run Step 11.

- [ ] **Step 13: Dev-server review** — `npm run dev`; review desktop and mobile; **pause for Rob's browser review before committing** (standing rule for UI/design changes). Stop dev afterwards.

- [ ] **Step 14: Page date + commit**

`src/lib/page-dates.ts` `STATIC_UPDATED['']` → today.
```bash
git add src/app/page.tsx src/lib/page-dates.ts
git commit -m "feat(home): lead on creative strategy; Triple Brain as mechanism; FAQ and metadata rewritten

Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
git push origin main
```

### Task 2.5: Build, deploy, verify slice 2

- [ ] **Step 1:** `pgrep -f "next dev" && echo STOP || (rm -rf .next && npm run lint && npx tsc --noEmit && npm run build)`
- [ ] **Step 2:** `vercel deploy --prod --yes`
- [ ] **Step 3:** `npm run smoke -- --slice 2` → `✓ /services/creative-strategist`, `✓ /`.
- [ ] **Step 4:** Tell Rob to request indexing for `https://robpalmer.com/` in GSC.

---

## Slice 3 — Services index and consultancy reframe

### Task 3.1: Two-tier `/services` index

**Files:**
- Modify: `src/app/services/page.tsx`

- [ ] **Step 1: Rewrite the page**

```tsx
import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { Badge } from '@/components/ui/Badge'
import { ServiceCard } from '@/components/blocks/ServiceCard'
import { CTABanner } from '@/components/blocks/CTABanner'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SITE_URL } from '@/lib/constants'
import { services } from './_data/services'

export const metadata: Metadata = {
  title: 'Creative Strategy & Direct-Response Copywriting Services',
  description:
    'Creative strategy for brands scaling on paid social, and the direct-response copy that carries it: ads, VSLs, sales pages, emails, landers, funnels and upsells. $523M+ in tracked results.',
  alternates: { canonical: `${SITE_URL}/services` },
}

const strategy = services.filter((s) => s.tier === 'strategy')
const production = services.filter((s) => s.tier === 'production')

function Tier({ badge, heading, intro, items, variant }: {
  badge: string
  heading: string
  intro: string
  items: typeof services
  variant?: 'default' | 'alt'
}) {
  return (
    <Section variant={variant} divider>
      <Container>
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="gold">{badge}</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950 mt-6">{heading}</h2>
            <p className="mt-4 text-lg text-ink-700 font-body">{intro}</p>
          </div>
        </FadeIn>
        <ul role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((service, index) => (
            <li key={service.slug}>
              <FadeIn delay={index * 80} className="h-full">
                <ServiceCard
                  title={service.title}
                  slug={service.slug}
                  description={service.shortDescription}
                  image={service.heroImage}
                  imageAlt={service.heroImageAlt}
                />
              </FadeIn>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

export default function ServicesPage() {
  return (
    <>
      <Hero
        variant="page"
        headline="Creative Strategy First. Then the Copy That Carries It."
        subheadline="Most engagements start with strategy — the angles, the testing loop, the system. Everything below it is the creative I build to run that strategy."
      />
      <Breadcrumbs items={[{ label: 'Services' }]} />
      <Tier
        badge="Strategy"
        heading="Where an engagement usually starts"
        intro="Creative strategy, AI workflow installation and conversion diagnostics — the work that decides what gets made and why."
        items={strategy}
      />
      <Tier
        badge="Production"
        heading="The creative I build"
        intro="Every format in the direct-response arsenal, written as one argument from ad to order."
        items={production}
        variant="alt"
      />
      <CTABanner
        headline="Not sure where to start?"
        subtext="Book a free strategy call. Retainer or project, whichever fits — we'll work out the right shape on the call."
      />
    </>
  )
}
```

- [ ] **Step 2: tsc + dev check** — `npx tsc --noEmit`; `npm run dev`, confirm 4 strategy cards then 10 production cards with DR first; stop dev. (Check `Section` accepts `variant` undefined — it does on the home page.)

- [ ] **Step 3: Page date + commit**

`STATIC_UPDATED['/services']` → today.
```bash
git add src/app/services/page.tsx src/lib/page-dates.ts
git commit -m "feat(services): two-tier index — strategy first, then production

Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
git push origin main
```

### Task 3.2 ✍: Reframe the AI Marketing Consultant entry

**Files:**
- Modify: `src/app/services/_data/services.ts` — the `ai-marketing-consultant` entry (starts ~line 2032 before this plan's insertions; find with `grep -n "slug: 'ai-marketing-consultant'"`)

- [ ] **Step 1: Verbatim field changes**

```ts
    shortDescription:
      'Triple Brain Marketing as a productized consultancy — 40 years of direct-response craft, Claude Code with my custom skills and a 1,239-file copywriting brain, installed in your marketing operation.',
    metaTitle: 'AI Marketing Consultant | Install the Triple Brain Methodology',
    metaDescription:
      'Senior AI marketing consultant. I install the Triple Brain Marketing methodology — 40+ years of DR craft, Claude Code custom skills and a 1,239-file copywriting brain — in your team\'s workflow so AI output turns into revenue.',
    headline: 'AI Marketing Consultant — Install the Methodology, Not Another Tool',
```
`heroStats.secondary[0]` → `{ value: '190+', label: 'Proven DR Frameworks Encoded as Skills' }`.
`credentialBar.items[0]` → `'Copy Accelerator (as Copy Chief)'`.
Section 2 `heading` → `'The Triple Brain Methodology I Install'`.
Section 1: `<a href="/blog/hire-a-creative-strategist">hire a creative strategist</a>` → `<a href="/services/creative-strategist">hire a creative strategist</a>`.
`caseStudies[0]` → `{ name: 'Copy Accelerator', category: 'Copy Chief Engagement', metric: 'Copy Chief', detail: '"We hired Rob as our Copy Chief!" — Stefan Georgi, the copywriter behind over $1B in tracked sales.' }`.

- [ ] **Step 2 DRAFT:** `subheadline` and section 2's first paragraph rewritten so Stefan's hire is one proof clause inside the body, not the opener. Pricing FAQ answer (`What does an AI marketing engagement cost?`): delete "Most engagements start at $10K (focused single-channel audit and playbook)." and open with "AI marketing engagements are fixed-price, scoped as a focused single-channel audit and playbook or a full multi-channel installation…".

- [ ] **Step 3: Checks**

```bash
awk "/slug: 'ai-marketing-consultant'/,/relatedServices/" src/app/services/_data/services.ts | grep -n "CA Labs\|\$10K"
```
Expected: at most occurrences inside section body prose / testimonial-style `detail` text; none in `headline`, `metaTitle`, `metaDescription`, `heading:`, `heroStats`, `credentialBar`. Then `npx tsc --noEmit`.

- [ ] **Step 4: Copy review** (`direct-response-copy`, `copychief`) on the changed strings.

- [ ] **Step 5: Page date + commit**

`SERVICE_UPDATED['ai-marketing-consultant']` → today.
```bash
git add src/app/services/_data/services.ts src/lib/page-dates.ts
git commit -m "feat(services): reframe AI Marketing Consultant around the methodology, not the CA Labs hire

Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
git push origin main
```

### Task 3.3: Build, deploy, verify slice 3

- [ ] `pgrep -f "next dev" && echo STOP || (rm -rf .next && npm run lint && npx tsc --noEmit && npm run build)`
- [ ] `vercel deploy --prod --yes`
- [ ] `npm run smoke -- --slice 3` → three ✓.

---

## Slice 4 — Verticals

Each vertical task has the same shape but its own content; do them in order. The Vertical interface already has `relatedServices`, `deliverables`, `headline`, `subheadline`, `metaTitle`, `metaDescription`, `sections` and (per entry) `heroCta`.

### Task 4.1 ✍: E-Commerce & DTC vertical (the ideal client's page)

**Files:**
- Modify: `src/app/verticals/_data/verticals.ts` — entry `ecommerce-dtc-copywriter` (~lines 429–606)

- [ ] **Step 1: Verbatim**
  - `metaTitle: 'E-Commerce & DTC Copywriter | Creative Strategy for Brands Scaling on Meta'`
  - `headline: 'Creative Strategy and Copy for DTC Brands Ready to Scale'`
  - `relatedServices` already starts with `'creative-strategist'` (Task 1.5).
  - `deliverables`: prepend `{ title: 'Angle Map & Creative Brief Set', description: 'Customer-language research, angles ranked by awareness level, and one brief per concept for Meta — the strategy layer the rest of the stack runs on.' }`.
  - `heroCta.label` → `'Audit my creative and my stack'`.
- [ ] **Step 2 DRAFT:** `metaDescription` (≤155 chars, keyword first); `subheadline` (lead with creative strategy for Meta, keep the $40M Gluco 6 and 300% ROAS proof); section 1 — add an opening paragraph on Meta creative velocity, ad-to-lander congruence and testing cadence, linking `/services/creative-strategist` once; section 2 heading keeps its numbers.
- [ ] **Step 3:** `awk "/slug: 'ecommerce-dtc-copywriter'/,/relatedServices/" src/app/verticals/_data/verticals.ts | grep -n '\$10K\|CA Labs'` → nothing; `npx tsc --noEmit`.
- [ ] **Step 4:** Copy review; `VERTICAL_UPDATED['ecommerce-dtc-copywriter']` → today; commit `feat(verticals): DTC vertical leads on creative strategy`.

### Task 4.2 ✍: Health Supplement vertical

**Files:** `verticals.ts` entry `health-supplement-copywriter` (~62–245); pricing FAQ at line ~219.

- [ ] **Step 1: Verbatim** — `metaTitle: 'Health Supplement Copywriter | Compliance-Aware Creative Strategy'`; `headline: 'Creative Strategy and Copy for Supplement Offers That Scale Cleanly'`; prepend deliverable `{ title: 'Compliance-Aware Angle Map', description: 'Angles and hooks mapped to awareness level and screened against FDA structure/function limits before a single ad is written.' }`.
- [ ] **Step 2 DRAFT:** `metaDescription`; `subheadline` (strategy first, Gluco 6 proof kept); one new opening paragraph in section 1 on compliance-aware angle testing for supplement creative. Pricing FAQ (line ~219): delete "A full supplement VSL or sales page starts at $10K. A full supplement funnel (…) typically starts at $25K." → replace with "Scope ranges from a single VSL or sales page to a full funnel (VSL + sales page + back-end stack + email sequence), on retainer or by project."
- [ ] **Step 3:** grep for `$10K|$25K|CA Labs` in the entry → only the credential-bar item `'Copy Accelerator / CA Labs (Stefan Georgi as Copy Chief)'` may remain; change it to `'Copy Accelerator (as Copy Chief)'`. `npx tsc --noEmit`.
- [ ] **Step 4:** Copy review; `VERTICAL_UPDATED['health-supplement-copywriter']` → today; commit `feat(verticals): supplement vertical leads on creative strategy`.

### Task 4.3 ✍: Financial vertical

**Files:** `verticals.ts` entry `financial-copywriter` (~246–428); pricing FAQ ~402.

- [ ] **Step 1: Verbatim** — `metaTitle: 'Financial Copywriter | Disclosure-Aware Creative Strategy'`; `headline: 'Creative Strategy and Copy for Financial Offers Built to Scale'`; prepend deliverable `{ title: 'Disclosure-Aware Angle Map', description: 'Hooks and angles for financial promotions, each mapped to the disclosure it will need so compliance review is a check, not a rewrite.' }`.
- [ ] **Step 2 DRAFT:** `metaDescription`; `subheadline` (strategy first; Monetari 5.7%, Morgan Stanley, Citibank proof kept); new opening paragraph in section 1 on disclosure-aware hook testing. Pricing FAQ: delete "A standalone financial VSL or sales page starts at $10K. A full long-form Agora-style promotion starts at $25K." → "Scope ranges from a standalone VSL or sales page to a full long-form promotion system, on retainer or by project."
- [ ] **Step 3:** grep `$10K|$25K|CA Labs` → fix the credential-bar item as in 4.2 if present; `npx tsc --noEmit`.
- [ ] **Step 4:** Copy review; `VERTICAL_UPDATED['financial-copywriter']` → today; commit `feat(verticals): financial vertical leads on creative strategy`.

### Task 4.4 ✍: ClickBank vertical

**Files:** `verticals.ts` entry `clickbank-copywriter` (~607–791); pricing FAQ ~765.

- [ ] **Step 1: Verbatim** — `metaTitle: 'ClickBank Copywriter | Creative Strategy Affiliates Promote'`; `headline: 'Creative Strategy and Funnels Affiliates Fight to Promote'`; prepend deliverable `{ title: 'EPC-Driven Angle Map', description: 'Angles ranked by the metric affiliates watch — EPC — with hooks for the front end and the swipe file they will mail.' }`.
- [ ] **Step 2 DRAFT:** `metaDescription`; `subheadline` (Mobile Profits $30M, 300% ROAS kept); new opening paragraph in section 1 on EPC-driven angle testing. Pricing FAQ: delete "A standalone ClickBank VSL or hybrid sales page starts at $10K. A full ClickBank funnel (…) typically starts at $25K." → "Scope ranges from a standalone VSL or hybrid sales page to a full funnel with back-end stack, affiliate-tools page and email sequences, on retainer or by project."
- [ ] **Step 3:** grep → fix credential-bar item if present; `npx tsc --noEmit`.
- [ ] **Step 4:** Copy review; `VERTICAL_UPDATED['clickbank-copywriter']` → today; commit `feat(verticals): clickbank vertical leads on creative strategy`.

### Task 4.5 ✍: SaaS vertical

**Files:** `verticals.ts` entry `saas-copywriter` (~792–970).

- [ ] **Step 1: Verbatim** — `metaTitle: 'SaaS Copywriter | 22% Chatterkick Trial-to-Paid + Creative Strategy'` (removes "+ CA Labs"); `headline: 'Creative Strategy and Lifecycle Copy Behind a 22% Trial-to-Paid Lift'`; prepend deliverable `{ title: 'Lifecycle Angle Map', description: 'Angles for acquisition, activation and upgrade mapped to the metric each one moves — trial starts, trial-to-paid, expansion, churn.' }`.
- [ ] **Step 2 DRAFT:** `metaDescription` (remove the Stefan/CA Labs clause); `subheadline` (Kristy Plucker quote kept; Stefan clause demoted to a later section or dropped); new opening paragraph in section 1 on creative tested against MRR, churn and trial-to-paid.
- [ ] **Step 3:** `awk "/slug: 'saas-copywriter'/,/relatedServices/" … | grep -n 'CA Labs\|\$10K'` → none in metaTitle/metaDescription/headline/heading/credentialBar; `npx tsc --noEmit`.
- [ ] **Step 4:** Copy review; `VERTICAL_UPDATED['saas-copywriter']` → today; commit `feat(verticals): saas vertical leads on creative strategy`.

### Task 4.6 ✍: Info Product vertical

**Files:** `verticals.ts` entry `info-product-copywriter` (~971–1150); pricing FAQ ~1124.

- [ ] **Step 1: Verbatim** — `metaTitle: 'Info Product Copywriter | 340% ROAS Abundant + Creative Strategy'` (removes "+ CA Labs"); `headline: 'Creative Strategy and Copy Behind the 340% ROAS Abundant Launch'`; prepend deliverable `{ title: 'Launch Angle Map', description: 'Angles for the launch window and the evergreen run, ranked by awareness level, with the hooks each phase of the sequence will carry.' }`.
- [ ] **Step 2 DRAFT:** `metaDescription` (no CA Labs); `subheadline`; new opening paragraph in section 1 on launch vs evergreen creative. Pricing FAQ: delete "A standalone sales page or VSL/TSL starts at $10K. A full launch system (…) typically starts at $25K. High-ticket coaching application funnels (…) start at $15K." → "Scope ranges from a standalone sales page or VSL/TSL to a full launch system or a high-ticket application funnel, on retainer or by project."
- [ ] **Step 3:** grep `$10K|$25K|$15K|CA Labs` → only body prose may mention Stefan; `npx tsc --noEmit`.
- [ ] **Step 4:** Copy review; `VERTICAL_UPDATED['info-product-copywriter']` → today; commit `feat(verticals): info-product vertical leads on creative strategy`.

### Task 4.7: Build, deploy, verify slice 4

- [ ] `grep -c '\$10K\|\$25K\|\$15K' src/app/verticals/_data/verticals.ts` → `0`.
- [ ] `pgrep -f "next dev" && echo STOP || (rm -rf .next && npm run lint && npx tsc --noEmit && npm run build)`
- [ ] `vercel deploy --prod --yes`
- [ ] `npm run smoke -- --slice 4` → four ✓.

---

## Slice 5 — About and copy hygiene

### Task 5.1 ✍: About page

**Files:**
- Modify: `src/app/about/page.tsx:17-22, 30-33, 59, 65-80, 191-240, 492-493`

- [ ] **Step 1: Verbatim**
  - metadata `title: 'About | Creative Strategist & Direct-Response Copywriter'`.
  - Hero `headline="Forty years of direct response. Now pointed at your creative."`
  - Hero `subheadline="Creative strategist and direct-response copywriter. Behind $523M+ in tracked campaign results."`
  - Headshot `alt="Rob Palmer, creative strategist and direct-response copywriter"`.
  - CTABanner `headline="Ready to put all three brains to work on your creative?"`.
- [ ] **Step 2 DRAFT:** metadata `description` (third person, ≤155); the entity paragraph (third person: "Rob Palmer is a creative strategist and direct-response copywriter with 40+ years…", client list, $523M, DTC/Meta focus, "taking new engagements in 2026"); the first-person opening paragraph in the same order; **one new `<FadeIn delay={500}><p>…</p></FadeIn>`** after "So I built it myself." explaining the move from writing the asset to owning the creative strategy, as progression. Everything else on the page unchanged.
- [ ] **Step 3:** `grep -n 'CA Labs\|\$10K' src/app/about/page.tsx` → nothing in hero/meta (CA Labs may remain inside the timeline body if present there); `npx tsc --noEmit`.
- [ ] **Step 4:** Copy review; `STATIC_UPDATED['/about']` → today; commit `feat(about): lead on creative strategy; drop the CA Labs lead`.

### Task 5.2: Remove the price floor from the copywriting service pages

**Files:**
- Modify: `src/app/services/_data/services.ts` — the DR entry's `metaDescription` and `definition.text`, and the pricing FAQ answer of each of these entries: direct-response-copywriter, vsl-copywriter, sales-page-copywriter, sales-letter-copywriter, email-copywriter, ad-copywriter, landing-page-copywriter, upsell-downsell-copywriter, ai-copywriting-consultant, facebook-ads-copywriter. (ai-marketing-consultant done in 3.2.) The `$10K/day in spend` example in the sales-funnel entry **stays**.

- [ ] **Step 1: DR entry**
  - `metaDescription`: `…VSLs, sales pages, emails, funnels. Fixed-price engagements from $10K.` → `…VSLs, sales pages, emails, funnels. Fixed-price, retainer or project.`
  - `definition.text`: `…and is actively taking client engagements, which typically start at $10K.` → `…and is actively taking client engagements, on retainer or by project.`
  - Pricing FAQ: `my engagements are fixed-price — most start at $10K, depending on scope and research depth.` → `my engagements are fixed-price, scoped to the asset and the research depth it needs.`

- [ ] **Step 2: The other nine pricing FAQ answers** — in each, delete the clause that names a figure and keep the rest. Exact edits:

| entry | delete | replace with |
|-------|--------|--------------|
| vsl | `— most VSL projects start at $10K.` | `.` (sentence ends after "research scope") |
| sales-page | `— most sales-page projects start at $10K.` | `.` |
| sales-letter | `Most sales-letter and TSL projects start at $10K — pricing depends on` | `Pricing depends on` |
| email | `Full sequences typically start at $10K; shorter tactical sequences (5-email abandon cart, 3-email re-engagement) are priced lower.` | `Full sequences and shorter tactical sequences (5-email abandon cart, 3-email re-engagement) are scoped separately.` |
| ad-copy | `Most full ad-copy projects start at $10K — a multi-platform suite` | `A full project is a multi-platform suite` |
| landing-page | `Most landing-page projects start at $5K — lower than long-form sales pages because` | `Landing pages are scoped lower than long-form sales pages because`; and `Bundled bridge sequences (multiple landing pages for one funnel) start at $10K.` → `Bundled bridge sequences (multiple landing pages for one funnel) are scoped as one project.` |
| upsell-downsell | `start at $10K — the math depends on` | `are scoped on` |
| ai-copywriting-consultant | `Most engagements start at $10K — a focused single-copy-type installation` | `A focused engagement is a single-copy-type installation` |
| facebook-ads | `Most full FB ad suites start at $10K — research,` | `A full FB ad suite covers research,` |

- [ ] **Step 3: Verify**

```bash
grep -n '\$10K\|\$5K\|\$25K' src/app/services/_data/services.ts
```
Expected: exactly one line, the sales-funnel `$10K/day in spend` example. `npx tsc --noEmit` silent.

- [ ] **Step 4: Commit**

```bash
git add src/app/services/_data/services.ts
git commit -m "fix(services): remove the price floor from every service page

Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
git push origin main
```

### Task 5.3: Remove Rob's price floor from blog author boxes

**Files:** 13 posts. The `$10K` mentions in `how-to-write-ad-copy`, `coaching-offer-copywriting`, `claude-code-direct-response-copy-skill`, `ai-ad-copy-examples` are market examples and **stay**.

- [ ] **Step 1: The eleven "Fit." bullets**

Posts: copywriting-rates, how-much-does-a-direct-response-copywriter-cost, copywriter-vs-content-writer-for-sales, is-copywriting-dead, in-house-copywriter-vs-freelance, how-to-hire-a-copywriter, copywriting-vs-content-writing, professional-copywriter-services, copywriting-services (first person) and best-direct-response-copywriter-to-hire (third person).

```bash
cd src/content/blog
perl -pi -e 's/^- \*\*Fit\.\*\* Engagements typically start at \$10K\. If your project is below that threshold, I will refer you to a writer in my network — no finder.s fee, just an honest match\./- **Fit.** Retainer or project, whichever fits the work. Fixed-price quote within 48 hours of the call — and if I am not the right person, I will say so and point you to someone who is./' \
  copywriting-rates.mdx how-much-does-a-direct-response-copywriter-cost.mdx copywriter-vs-content-writer-for-sales.mdx is-copywriting-dead.mdx in-house-copywriter-vs-freelance.mdx how-to-hire-a-copywriter.mdx copywriting-vs-content-writing.mdx professional-copywriter-services.mdx copywriting-services.mdx
perl -pi -e 's/^- \*\*Fit\.\*\* Engagements typically start at \$10K\. If your project is below that threshold, Rob will refer you to a writer in his network — no finder.s fee, just an honest match\./- **Fit.** Retainer or project, whichever fits the work. Rob quotes fixed-price within 48 hours of a call — and if he is not the right person, he will say so and point you to someone who is./' best-direct-response-copywriter-to-hire.mdx
cd ../../..
```

- [ ] **Step 2: The two italic CTA paragraphs** (`freelance-copywriting-guide.mdx:236`, `copywriter-salary.mdx:215`): replace `engagements typically start at $10K, with referrals to my network for projects below that threshold.` with `engagements run on retainer or by project, with referrals to my network when I am not the right fit.`

- [ ] **Step 3: Verify**

```bash
grep -rn '\$10K' src/content/blog | cut -c1-120
```
Expected: exactly the four market-example lines (how-to-write-ad-copy:194, coaching-offer-copywriting:123 and :144, claude-code-direct-response-copy-skill:147, ai-ad-copy-examples:40). Bump `updated:` frontmatter on each edited post to today.

- [ ] **Step 4: Commit**

```bash
git add src/content/blog
git commit -m "fix(blog): remove the price floor from author boxes and CTAs

Co-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>"
git push origin main
```

### Task 5.4: Remaining blog cross-links

**Files:** `src/content/blog/is-copywriting-dead.mdx`, `famous-copywriters.mdx`, `facebook-ad-copywriting.mdx`, `ai-ad-copy-examples.mdx`

- [ ] **Step 1:** In each, `grep -n "creative strateg" <file>`. Where a prose mention exists **and** the post has no link to `/services/creative-strategist` yet, wrap the first qualifying mention: `[creative strategist](/services/creative-strategist)` (or `[creative strategy](/services/creative-strategist)` matching the surrounding words). Skip posts with no mention — do not force one. Bump `updated:`.
- [ ] **Step 2:** `npm run check:links` → clean.
- [ ] **Step 3:** Commit `feat(blog): cross-link DTC-adjacent posts to the creative-strategist page`.

### Task 5.5: Build, deploy, verify slice 5; close out

- [ ] **Step 1:** `grep -rn '\$10K\|\$10,000' src public --include=*.ts --include=*.tsx --include=*.txt | grep -v "10K/day"` → nothing; `grep -rn 'CA Labs' src/app/page.tsx src/app/about/page.tsx src/lib/constants.ts src/app/layout.tsx` → nothing.
- [ ] **Step 2:** `pgrep -f "next dev" && echo STOP || (rm -rf .next && npm run lint && npx tsc --noEmit && npm run build)`
- [ ] **Step 3:** `vercel deploy --prod --yes`
- [ ] **Step 4:** `npm run smoke` → five ✓, exit 0. Paste the output in the final report.
- [ ] **Step 5:** Tell Rob which URLs to request indexing for in GSC: `/`, `/about`, `/services`, `/services/creative-strategist`, `/services/ai-marketing-consultant`, all six `/verticals/*`.
- [ ] **Step 6: Memory** — update `project_creative_strategist_seo.md` (repositioning shipped, date, checkpoints 2026-11-02 and 2026-11-30, baseline path) and `project_seo_link_consolidation.md` (creative-strategist tags no longer route to the DR page; DR page metaDescription/definition changed to drop the figure). Add a `MEMORY.md` line if a new file was created.
- [ ] **Step 7:** Append to `docs/seo/2026-10-repositioning/README.md`: a dated "Shipped" list of the five slices with commit hashes, and the checkpoint commands:

```bash
.claude/skills/seo/.venv/bin/python scripts/gsc_query.py --days 28 --dimension query --contains "direct response copywriter"
.claude/skills/seo/.venv/bin/python scripts/gsc_query.py --days 28 --dimension query --contains "creative strategist"
```
Commit `docs(seo): repositioning shipped; checkpoint commands`.

---

## Self-review against the spec

- §4 home: Tasks 2.3, 2.4 (all 14 section items, metadata). ✓
- §5 new page: Tasks 1.2, 1.3 (every field), 1.4–1.6 (links in). Testimonials resolved to `['4','38','15']`. ✓
- §6 tier + index + consultancy: Tasks 1.1, 3.1, 3.2. Home grid list matches §4.8 via the `ai-copywriting-consultant` exclusion (documented in 2.3). ✓
- §7 verticals: Tasks 4.1–4.6 (metaTitle, headline, subheadline, section-1 paragraph, deliverable, relatedServices, `$10K`, CA Labs in SaaS/Info titles). ✓
- §8 About, global, nav, `/call`, copywriting pages, blog: Tasks 5.1, 2.1, 2.2, 5.2, 1.5 (DR sentence re-pointed rather than added — deviation noted), 5.3, 5.4. ✓
- §9 copy process: protocol block + ✍ tasks. ✓
- §10 safeguards: Task 0.1 baseline, per-slice build/deploy/smoke, GSC manual steps, checkpoints in 5.5. ✓
- §11 slices: Tasks 1.7, 2.5, 3.3, 4.7, 5.5. ✓
- §12 testing: Task 0.2 (fetch-based instead of Playwright — deviation noted), lint/tsc/build per slice, nav width check in 2.1. ✓
- Type consistency: `tier`, `schemaServiceType`, `homepageServices`, `homepageVerticals`, `STAGES`, `STAGES_INTRO`, `STAGES_HEADLINE`, `AGENCY_COMPARISON`, `Tier` used consistently. ✓
