# Phase 5 — Hygiene Batch Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Pay down the accumulated debt ledger: template dedup (pixel-diff gated), mdx meta builder, checker hardening, dead deps, schema linking, token/a11y batch, explicit AI-crawler policy, and the final 86-post truncation sweep.

**Architecture:** One real refactor (DetailPageLayout extraction, verified by before/after screenshots of all 18 pages), one shared-helper extraction (mdx.ts), the rest mechanical batches with exact code below.

**Tech Stack:** Next.js 15, React 19, Tailwind 4 (@theme tokens in globals.css), Playwright (via /Users/robpalmer/dev/astrochartus), sharp/pixel tooling via npx.

**Spec:** docs/superpowers/specs/2026-06-12-phase5-hygiene-design.md

**Repo facts (verified 2026-06-12):**
- No test suite; never build while `pgrep -f "next dev"` lives; push ≠ deploy.
- Tokens live in the `@theme inline` block at the top of src/app/globals.css (`--color-ink-950: #0A0A0F`, `--color-gold-600: #B8840F`, etc.).
- `hover:text-gold-500` instances: **41** (audit said ~20 — it grew).
- Card.tsx and SITE_NAME: zero importers (re-confirmed).
- Blog: 148 posts; **86** over the strict 65/165 thresholds.
- Normalized template diff = 18 hunks (see Task 2 cluster list).
- The two case-study pages' Article schema uses `publisher: { '@type': 'Person' … }` and no dateModified; the blog template's Organization+logo publisher (src/app/blog/[slug]/page.tsx ~line 101) is the shape to copy.

---

### Task 1: Pixel baseline — BEFORE screenshots (must precede any template edit)

**Files:** none (artifacts in /tmp/dedup-before/)

- [ ] **Step 1: Build + serve current state**

```bash
pgrep -f "next dev" || npm run build
(npm run start > /tmp/next-start.log 2>&1 &)
sleep 5 && curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/
```

- [ ] **Step 2: Capture all 18 detail pages × 2 viewports**

Write /Users/robpalmer/dev/astrochartus/.dedup-shots.mjs (delete after Task 2):

```js
import { chromium } from '@playwright/test'
import { readFileSync } from 'node:fs'
const dir = process.argv[2] // /tmp/dedup-before or /tmp/dedup-after
const services = [...readFileSync('/Users/robpalmer/dev/robpalmer-site/src/app/services/_data/services.ts','utf8').matchAll(/slug: '([^']+)'/g)].map(m=>m[1])
const verticals = [...readFileSync('/Users/robpalmer/dev/robpalmer-site/src/app/verticals/_data/verticals.ts','utf8').matchAll(/slug: '([^']+)'/g)].map(m=>m[1])
const urls = [...services.map(s=>`/services/${s}`), ...verticals.map(v=>`/verticals/${v}`)]
const browser = await chromium.launch()
for (const [w,h,label] of [[1440,900,'d'],[390,844,'m']]) {
  const ctx = await browser.newContext({ viewport:{width:w,height:h}, reducedMotion:'reduce' })
  const p = await ctx.newPage()
  for (const u of urls) {
    await p.goto('http://localhost:3000'+u, { waitUntil:'networkidle' }).catch(()=>{})
    await p.waitForTimeout(800)
    await p.screenshot({ path:`${dir}/${u.replaceAll('/','_')}-${label}.png`, fullPage:true })
  }
  await ctx.close()
}
await browser.close()
console.log('captured', urls.length*2, 'shots to', dir)
```

Run: `mkdir -p /tmp/dedup-before && cd /Users/robpalmer/dev/astrochartus && node .dedup-shots.mjs /tmp/dedup-before`
Expected: `captured 36 shots`. (reducedMotion kills animation nondeterminism.)
Kill the server: `lsof -ti :3000 | xargs kill`. Nothing to commit.

---

### Task 2: DetailPageLayout extraction (pixel-diff gated)

**Files:**
- Create: `src/components/blocks/DetailPageLayout.tsx`
- Modify: `src/app/services/[slug]/page.tsx` (613 → ~150 lines)
- Modify: `src/app/verticals/[slug]/page.tsx` (613 → ~150 lines)

**The 18 divergence hunks, clustered (from the normalized diff):**
A. Imports/type names (Service vs Vertical, data getters).
B. JSON-LD: services builds Service schema + unconditional FAQPage; verticals builds Service schema with different var name + CONDITIONAL FAQPage (`faqs.length > 0 ? … : null`) and conditional `<JsonLd>` render. → JSON-LD stays entirely in the route files.
C. Hero cta: services hardcodes `{ label: 'Book a Strategy Call', href: '/call' }`; verticals uses `vertical.heroCta ?? same`.
D. midCta default headline strings differ (`Ready to hire a X?` vs `Ready to scale your X campaigns?`).
E. Comment labels (cosmetic; unify in the component).
F. One unique ~45-line block EACH at different positions (services' Triple Brain section; verticals' equivalent unique section) → slot props.
G. Related-links/testimonial heading wording.

- [ ] **Step 1: Create the layout component**

`DetailPageLayout` is a **verbatim move** of the shared JSX (services template from the `return (` through the closing CTABanner, minus the JSON-LD `<JsonLd>` lines and minus the Triple Brain block) into a typed component. Props interface — define exactly:

```tsx
import type { ReactNode } from 'react'

export interface DetailPageLayoutProps {
  // Hero
  headline: string
  subheadline: string
  heroCta: { label: string; href: string }
  heroStats: { stat: string; label: string }[]
  // Chrome
  breadcrumbParent: { label: string; href: string }
  breadcrumbLabel: string
  // Body (same shapes both data files already share)
  credentialBar?: string[]
  sections: {
    heading: string
    content: string
    bullets?: string[]
    definition?: { term: string; text: string }
  }[]
  // CTAs
  midCtaHeadline: string
  midCtaSubtext: string
  // Social proof
  testimonialIds: string[]
  testimonialsHeading: string
  portfolioItems: { title: string; description: string }[]
  caseStudyNote?: string
  // FAQs
  faqs: { question: string; answer: string }[]
  // Type-specific blocks injected by the route files
  afterSectionsSlot?: ReactNode   // services: Triple Brain block
  extraSlot?: ReactNode           // verticals: their unique section
  // Closing
  closingHeadline: string
  closingSubtext: string
}
```

(ADJUST this interface to match what the shared JSX actually consumes — the rule is: every `service.X` / `vertical.X` reference in the moved JSX becomes a prop; if a field exists in both data interfaces with the same shape, it's a plain prop; the moved markup itself must remain byte-identical — classNames, FadeIn delays, Section variants, all of it.)

- [ ] **Step 2: Rewrite the services route file**

Keep: imports, generateStaticParams, generateMetadata, both schema objects, `<JsonLd>` renders. Then render `<DetailPageLayout {...mapped} afterSectionsSlot={<TripleBrainBlock …/>} />` where the Triple Brain JSX (moved into a local const or inline) is passed as the slot. midCtaHeadline = `service.midCta?.headline || \`Ready to hire a ${service.title.toLowerCase()}?\`` — the defaults move INTO the route mapping so the layout stays dumb.

- [ ] **Step 3: Rewrite the verticals route file**

Same pattern: its conditional FAQ schema, `vertical.heroCta ?? default`, its midCta default string, its unique block via `extraSlot`.

- [ ] **Step 4: Type-check + build + AFTER capture + pixel gate**

```bash
npx tsc --noEmit && npm run build
(npm run start > /tmp/next-start.log 2>&1 &) && sleep 5
mkdir -p /tmp/dedup-after && cd /Users/robpalmer/dev/astrochartus && node .dedup-shots.mjs /tmp/dedup-after
lsof -ti :3000 | xargs kill
# Compare: byte-equal first, pixelmatch fallback
cd /tmp && for f in dedup-before/*.png; do b="dedup-after/$(basename $f)";
  cmp -s "$f" "$b" && echo "OK $(basename $f)" || echo "DIFF $(basename $f)"; done | sort | uniq -c | head
```

For any DIFF file: `npx -y pixelmatch <before> <after> /tmp/diff-out.png 0.1` — expected ≤ a few hundred antialiasing pixels on a full-page shot; anything structural (layout shift, missing section) = fix before proceeding. ALSO diff built HTML semantically on 2 samples (hashed asset names normalized):

```bash
norm() { sed -E 's|/_next/static/[a-zA-Z0-9/_-]+\.(js\|css)|HASH|g' "$1"; }
diff <(norm /tmp/before-services.html) <(norm .next/server/app/services/sales-page-copywriter.html) | head -5
diff <(norm /tmp/before-verticals.html) <(norm .next/server/app/verticals/financial-copywriter.html) | head -5
```

Expected: no output from either diff. (Capture the before-copies during Task 1 — add to Task 1 Step 1, right after the build: `cp .next/server/app/services/sales-page-copywriter.html /tmp/before-services.html && cp .next/server/app/verticals/financial-copywriter.html /tmp/before-verticals.html`.)

- [ ] **Step 5: Verify both `<JsonLd>` outputs unchanged** — extract JSON-LD from the 2 sample built pages, diff against Task 1 copies. Expected: identical.

- [ ] **Step 6: Commit**

```bash
git add src/components/blocks/DetailPageLayout.tsx 'src/app/services/[slug]/page.tsx' 'src/app/verticals/[slug]/page.tsx'
git commit -m "refactor(templates): extract shared DetailPageLayout from service/vertical routes (pixel-diff verified)"
```

Then `rm /Users/robpalmer/dev/astrochartus/.dedup-shots.mjs`.

---

### Task 3: mdx.ts shared meta builder

**Files:**
- Modify: `src/lib/mdx.ts`

- [ ] **Step 1: Extract**

Add above `getBlogPostMeta` (gray-matter's `data` is `Record<string, any>`-ish — match the existing style):

```ts
function buildMeta(
  slug: string,
  data: Record<string, unknown>,
  content: string
): BlogPostMeta {
  const stats = readingTime(content)
  return {
    title: (data.title as string) || '',
    description: (data.description as string) || '',
    metaTitle: (data.metaTitle as string) || undefined,
    metaDescription: (data.metaDescription as string) || undefined,
    date: (data.date as string) || '',
    updated: (data.updated as string) || undefined,
    category: (data.category as string) || 'Copywriting',
    tags: (data.tags as string[]) || [],
    slug,
    readingTime: stats.text,
    published: data.published !== false,
    heroImage: (data.heroImage as string) || undefined,
    heroAlt: (data.heroAlt as string) || undefined,
    faqs: (data.faqs as BlogFAQ[]) || undefined,
  }
}
```

Replace BOTH object literals in `getBlogPostMeta` and `getBlogPostContent` with `buildMeta(slug, data, content)` (keep each function's surrounding existsSync/matter logic). Compare field-by-field against the current literals FIRST — if either has drifted beyond this field set, reconcile into buildMeta so NOTHING is dropped.

- [ ] **Step 2: Verify + commit**

`npx tsc --noEmit` → 0. Then prove output unchanged: `node -e` to import is awkward (TS) — instead `npm run build` and diff one built blog page's title/dateModified/description against current production values (curl).

```bash
git add src/lib/mdx.ts
git commit -m "refactor(mdx): single buildMeta shared by both readers (ends the thrice-bitten duplication)"
```

---

### Task 4: Link checker hardening

**Files:**
- Modify: `scripts/check-internal-links.mjs`

- [ ] **Step 1: Replace the scan section**

Keep the route-set construction + guards. Replace fence-stripping and the two scan loops with:

```js
// Strip fenced code blocks line-based, tracking the opening fence's backtick
// count (skill posts embed 4-backtick fences containing 3-backtick examples).
// Stripped lines become empty lines so line numbers stay true.
function stripFences(src) {
  const out = []
  let fence = null // backtick count of the open fence
  for (const line of src.split('\n')) {
    const m = line.match(/^\s*(`{3,})/)
    if (m) {
      if (fence === null) fence = m[1].length
      else if (m[1].length >= fence) fence = null
      out.push('')
      continue
    }
    out.push(fence === null ? line : '')
  }
  return out.join('\n')
}

const SCANS = [
  { re: /\]\((\/[^)\s#?]*)/g, label: 'broken link' },
  { re: /href="(\/[^"#?]*)"/g, label: 'broken link (html)' },
]

const errors = []
for (const f of readdirSync(blogDir).filter((f) => f.endsWith('.mdx'))) {
  const src = readFileSync(join(blogDir, f), 'utf8')
  const body = stripFences(src)
  for (const { re, label } of SCANS) {
    for (const m of body.matchAll(re)) {
      const path = m[1].replace(/\/$/, '') || '/'
      const line = body.slice(0, m.index).split('\n').length
      if (path.startsWith('/downloads/') || path.startsWith('/images/')) {
        if (!existsSync(join(root, 'public', path)))
          errors.push(`${f}:${line}: missing asset ${path}`)
        continue
      }
      if (!valid.has(path)) errors.push(`${f}:${line}: ${label} ${path}`)
    }
  }
  // Frontmatter heroImage must exist (feeds og:image + Article schema)
  const hero = src.match(/^heroImage:\s*["']?(\/[^"'\n]+)/m)
  if (hero && !existsSync(join(root, 'public', hero[1])))
    errors.push(`${f}: missing heroImage ${hero[1]}`)
}
```

- [ ] **Step 2: Self-test (all four planes)**

Plant + verify FAIL with correct file:line + revert + verify PASS, once per plane: (a) `[x](/services/nope)` in a fence-free post; (b) same line inside a claude-code post BELOW its 4-backtick fences; (c) `<a href="/blog/nope">x</a>`; (d) `heroImage: "/images/blog/nope.jpg"` (temporarily swap one). Also plant a link INSIDE a 4-backtick fence and verify it does NOT fail (fence-blindness fixed in the right direction).

- [ ] **Step 3: Commit**

```bash
git add scripts/check-internal-links.mjs
git commit -m "feat(links): fence-aware scanning, heroImage validation, unified scan loops"
```

---

### Task 5: Dead MDX pipeline removal

**Files:** `next.config.ts`, delete `mdx-components.tsx`, `package.json`/lock

- [ ] **Step 1:** In next.config.ts: remove the `createMDX` import + `const withMDX = createMDX({...})` + unwrap the export (`export default withSentryConfig(nextConfig, …)` keeps Sentry, drops withMDX — read the current composition first); remove `'md', 'mdx'` from pageExtensions (leaving ts/tsx). `git rm mdx-components.tsx`.
- [ ] **Step 2:** `npm uninstall @next/mdx @mdx-js/loader @mdx-js/react @types/mdx`
- [ ] **Step 3:** `npx tsc --noEmit && npm run build` → blog pages still render (spot `ls .next/server/app/blog/ | wc -l` ≈ 148+).
- [ ] **Step 4:** `git add -A && git commit -m "chore(deps): remove dead @next/mdx pipeline (blog uses next-mdx-remote)"`

---

### Task 6: Schema polish (@id linking + case-study Article alignment)

**Files:** `src/app/layout.tsx`, both case-study pages

- [ ] **Step 1: layout.tsx** — organizationJsonLd gains `'@id': \`${SITE_URL}/#organization\`,` (first property after '@type'); Person `worksFor` becomes:

```ts
  worksFor: { '@id': `${SITE_URL}/#organization` },
```

- [ ] **Step 2: Case studies** — in BOTH case-study pages' Article schema: replace `publisher: { '@type': 'Person', name: 'Rob Palmer', url: SITE_URL },` with the blog template's shape:

```ts
  publisher: {
    '@type': 'Organization',
    name: 'Rob Palmer Copywriting',
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/logo-rob-palmer.png`,
    },
  },
```

Add `dateModified` equal to each page's existing `datePublished` value (no fake freshness). Change `headline` from the piped SERP title to the clean editorial title (belron: `'The $523M Secret Weapon Campaign: Belron/Safelite Case Study'` — replace the pipe construction; apple equivalent — read its current headline and de-pipe the same way).

- [ ] **Step 3:** Build; extract JSON-LD from built home + one case study; parse; confirm @id linkage + Organization publisher. Commit: `git commit -m "fix(schema): entity @id linking; case-study Article aligned with blog shape"`.

---

### Task 7: Token/a11y batch

**Files:** `src/app/globals.css`, `src/components/blocks/ContactForm.tsx`, `src/components/tools/CopywritingRatesCalculator.tsx`, `src/components/tools/HeadlineAnalyzer.tsx`, `src/lib/headline-analyzer.ts`, `src/components/ui/Logo.tsx`, `src/components/ui/Button.tsx`, `src/components/integrations/CalendlyEmbed.tsx`, `src/components/blocks/CareerTimeline.tsx`, delete `src/components/ui/Card.tsx`, `src/lib/constants.ts`, plus the 41-instance hover sweep

- [ ] **Step 1: Status tokens** — in the `@theme inline` block of globals.css, after the paper tokens, add:

```css
  /* Semantic status colors, tuned to the paper/ink palette */
  --color-success-600: #3D7A47;
  --color-success-50: #F0F5F0;
  --color-error-600: #A8453C;
  --color-error-50: #F8F0EF;
  --color-warn-600: #B8730F;
```

- [ ] **Step 2: Swap the defaults** — in the four status-color files, mechanical replacement: `text-green-600`→`text-success-600`, `bg-green-50`→`bg-success-50`, `border-green-*`→`border-success-600`, `text-red-600/500`→`text-error-600`, `bg-red-50`→`bg-error-50`, `border-red-*`→`border-error-600`, `text-orange-500`→`text-warn-600` (enumerate actual classes via `grep -n "green-\|red-\|orange-" <file>` first; map each to the nearest semantic token; shades 100/200 map to the 50 token, 500-700 to 600). Gate: `grep -rn "text-green-\|bg-green-\|text-red-\|bg-red-\|orange-" src/` → zero hits afterward.
- [ ] **Step 3: Logo vars** — `const textColor = variant === 'light' ? 'var(--color-paper-50)' : 'var(--color-ink-950)'` and `const accentColor = 'var(--color-gold-400)'` (confirm `--color-paper-50: #FAFAF8` and `--color-gold-400: #F5B731` exist in @theme — if token names differ, use the matching ones).
- [ ] **Step 4: Hover sweep** — `grep -rln "hover:text-gold-500" src` then `perl -pi -e 's/hover:text-gold-500/hover:text-gold-700/g'` on those files. 41 instances expected. EXCEPTION check: skip any instance on a dark (ink-*) background where gold-700 would LOSE contrast — grep each file's context; the Footer's gold-400 links on ink-950 don't match the pattern (they're text-gold-400), so the sweep should be safe, but verify the list before running.
- [ ] **Step 5: Nits** — Button.tsx: drop `focus-visible:outline ` (keep outline-2/offset-2/color). CalendlyEmbed: `let safetyId: number | undefined = undefined` → match siblings (`let safetyId: number | undefined` works now ONLY if lint passes — it won't (prefer-const); instead change idleId/timeoutId to ALSO use `= undefined` for consistency). CareerTimeline.tsx line ~54: the flex row's TEXT column child gets `min-w-0` (find the div holding the h3; add the class).
- [ ] **Step 6: Deletions** — `git rm src/components/ui/Card.tsx`; remove the `SITE_NAME` export line from constants.ts. Re-verify: `grep -rn "ui/Card\|SITE_NAME" src/` → zero.
- [ ] **Step 7:** `npx tsc --noEmit && npm run lint && npm run build`. Commit: `git commit -m "chore(tokens,a11y): semantic status tokens, logo vars, hover contrast, dead code, focus nit, timeline overflow"`.

---

### Task 8: Workspace hygiene

**Files:** `next.config.ts`, `src/app/globals.css`

- [ ] **Step 1:** next.config.ts top-level: `outputFileTracingRoot: __dirname,` (import nothing; it's available in the config's module scope — if the config is ESM (`export default`), use `outputFileTracingRoot: import.meta.dirname ?? process.cwd(),` — check the file's module style first).
- [ ] **Step 2:** globals.css, directly after the `@import 'tailwindcss';` line: `@source not "../../docs";` (path relative to src/app/globals.css → ../../docs = repo docs/. Verify against Tailwind 4 docs syntax — if `@source not` is unsupported in the installed version, the fallback is `@source "../components"; @source "../app"; @source "../lib"; @source "../content";` explicit allow-list. Prove it worked: after build, `grep -c "outline-ink-950" .next/static/css/*.css` → 0 (that class exists only in docs/ prose).)
- [ ] **Step 3:** Build (warning gone from output; CSS gate passes). Commit: `git commit -m "chore(build): pin workspace root; stop Tailwind scanning docs/ prose"`.

---

### Task 9: robots.ts explicit AI-crawler rules

**Files:** `src/app/robots.ts`

- [ ] **Step 1:** Replace the rules array:

```ts
    rules: [
      // Deliberate policy (2026-06-12): maximum AI visibility. Search AND
      // training crawlers are all welcome — the business benefits from
      // models knowing who Rob Palmer is. Explicit > implicit.
      ...['GPTBot', 'OAI-SearchBot', 'ClaudeBot', 'Claude-SearchBot', 'PerplexityBot', 'Google-Extended', 'CCBot'].map((bot) => ({
        userAgent: bot,
        allow: '/',
      })),
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
```

- [ ] **Step 2:** Build; `cat .next/server/app/robots.txt.body 2>/dev/null || grep -rn "GPTBot" .next/server/app/robots*` shows the named bots. Commit: `git commit -m "feat(geo): explicit allow rules for AI crawlers (deliberate policy)"`.

---

### Task 10: Editorial finish — 86-post sweep + copy nits + CLAUDE.md

**Files:** ~86 posts (frontmatter), `src/content/blog/ai-copywriting-prompts.mdx`, `src/content/blog/copywriting-rates.mdx`, `CLAUDE.md`

- [ ] **Step 1: Generate the strict-band worklist**

```bash
node -e "
const fs=require('fs'),m=require('/Users/robpalmer/dev/robpalmer-site/node_modules/gray-matter');
for(const f of fs.readdirSync('src/content/blog')){if(!f.endsWith('.mdx'))continue;
const d=m(fs.readFileSync('src/content/blog/'+f,'utf8')).data;
const t=(d.metaTitle||d.title||''),ds=(d.metaDescription||d.description||'');
if(t.length>65||ds.length>165)console.log(f.replace('.mdx',''),'|',t.length,'|',ds.length)}" | tee /tmp/p5-band.txt
wc -l /tmp/p5-band.txt
```

Expected ~86 lines.

- [ ] **Step 2: Write metaTitle/metaDescription for each** — Phase 4 rules verbatim: metaTitle ≤60 keyword-leading no-suffix; metaDescription 140–160 ending on a complete clause; insert after `description:` (or update the existing metaTitle/metaDescription if one is present but over). Match the Phase 4 register (see the 31 already done for house style). Specific required entries: `copywriting-rates` gets `metaTitle: "Copywriting Rates 2026: What Every Project Type Costs"`; `ai-copywriting-prompts` ALSO fixes its description's "30-year direct-response pro" → "40-year direct-response pro" (figure consistency — and if that string lands in the new metaDescription, use 40-year there).
- [ ] **Step 3: Audit gate (STRICT)** — the Task 1 script with thresholds 65/165 → expected **0 posts over** (the Phase 4 plan-defect gate finally satisfied).
- [ ] **Step 4: CLAUDE.md counts** — Data Architecture section: services "9 items" → "12 items"; blog "105 MDX posts" → "148 MDX posts". Scan the section for other drifted counts against reality (verticals 6 ✓, portfolio 12 ✓, case studies 2 ✓, testimonials 38 ✓) and fix any.
- [ ] **Step 5:** `npm run check:links` ✓. Commit: `git commit -m "feat(seo): strict-band metaTitle sweep (86 posts); figure fix; CLAUDE.md counts"`.

---

### Task 11: Final gates + push + Rob review

- [ ] **Step 1:** `pgrep -f "next dev" || npm run build` (checker prebuild ✓); `npx tsc --noEmit`; strict length audit → 0; built JSON-LD parse (Task 6 assertions); robots.txt named bots; `grep -c "outline-ink-950" .next/static/css/*.css` → 0.
- [ ] **Step 2:** `git push` (no deploy).
- [ ] **Step 3 (blocking):** dev server up for Rob: one service page + one vertical page (dedup eyeball — should look IDENTICAL to before), ContactForm success/error states + both tools (new status tokens), /about at 390px (overflow gone), a couple of swept posts' SERP titles. Deploy is Rob's call.

---

## Out of scope (do not drift)

UX-8 hero balance (won't-fix); checker static-route list (accepted); new features; F39. Do not "improve" layout markup during the Task 2 move — byte-identical is the contract.
