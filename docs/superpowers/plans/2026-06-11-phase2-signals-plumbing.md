# Phase 2 — Signals & Plumbing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix every actively-wrong external signal (entity links, shadowed post, www duplicate), repair blog→money-page link plumbing with a permanent regression guard, ship llms.txt + freshness signals, and trim GA/Sentry from the render-critical path.

**Architecture:** Config/data-level edits plus two throwaway scripts (link sweep, date backfill) and one permanent script (build-time link checker). One new page (/tools index). No component rework.

**Tech Stack:** Next.js 15 App Router, gray-matter MDX pipeline, @sentry/nextjs, Vercel REST API.

**Spec:** docs/superpowers/specs/2026-06-11-phase2-signals-plumbing-design.md

**Repo facts:**
- No test suite. Verification = `npm run build`, the new link checker, grep gates, JSON-LD parse checks.
- NEVER `npm run build` while a dev server runs (`pgrep -f "next dev"` first).
- Push ≠ deploy. Do not deploy; that's Rob's explicit call at the end.
- Service slugs (12): vsl-copywriter, sales-page-copywriter, sales-letter-copywriter, email-copywriter, ad-copywriter, landing-page-copywriter, sales-funnel-copywriter, upsell-downsell-copywriter, ai-copywriting-consultant, ai-marketing-consultant, facebook-ads-copywriter, conversion-rate-optimization. Vertical slugs (6): health-supplement-copywriter, financial-copywriter, ecommerce-dtc-copywriter, clickbank-copywriter, saas-copywriter, info-product-copywriter.

---

### Task 1: Person/Organization schema — fix sameAs, enrich, drop phone

**Files:**
- Modify: `src/app/layout.tsx` (personJsonLd ~lines 59–95; organizationJsonLd ~lines 96–112)

- [ ] **Step 1: Replace the personJsonLd block**

In `src/app/layout.tsx`, the current block reads (verbatim):

```ts
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rob Palmer',
  jobTitle: 'Direct-Response Copywriter',
  description:
    'Veteran direct-response copywriter specializing in VSLs, TSLs, email sequences, and sales funnels. Pioneer of blogging (1993) and AI-assisted copywriting.',
  url: SITE_URL,
  knowsAbout: [
```

Replace from `const personJsonLd = {` down to (and including) the closing `}` after `sameAs: [...]` with:

```ts
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rob Palmer',
  jobTitle: 'Direct-Response Copywriter',
  description:
    'Direct-response copywriter with 40+ years of experience and $523M+ in tracked client results, including campaigns for Apple, IBM, Microsoft, and Belron/Safelite. Specializes in VSLs, TSLs, email sequences, and sales funnels. Pioneer of blogging (1993) and AI-assisted copywriting.',
  url: SITE_URL,
  knowsAbout: [
    'Direct response copywriting',
    'Video sales letters (VSLs)',
    'Text sales letters (TSLs)',
    'Sales funnels',
    'Email marketing sequences',
    'AI-assisted copywriting',
    'ClickBank marketing',
    'Conversion rate optimization',
    'Landing page copywriting',
    'Ad copywriting',
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Direct-Response Copywriter',
    occupationLocation: {
      '@type': 'Country',
      name: 'United States',
    },
  },
  award: [
    '$523M+ tracked revenue across direct-response campaigns',
    '9-year continuously-tested direct-mail control for Belron/Safelite',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Rob Palmer Copywriting',
    url: SITE_URL,
  },
  email: 'rob@robpalmer.com',
  image: `${SITE_URL}/images/headshots/rob-palmer-clean.png`,
  sameAs: [
    'https://www.linkedin.com/in/robpalmer3/',
    'https://github.com/robpalmer99',
    'https://x.com/RobPalmer99',
  ],
}
```

(Changes: description carries the core credential; `telephone` REMOVED; `award` + `worksFor` added; sameAs = the three Rob-confirmed profiles — the old `linkedin.com/in/robpalmer/` is a different person's slug and the Wikipedia link pointed at Justin Hall's article.)

- [ ] **Step 2: Remove telephone from organizationJsonLd**

In the `organizationJsonLd` block, change:

```ts
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+14158549589',
    email: 'rob@robpalmer.com',
    contactType: 'sales',
  },
```

to:

```ts
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'rob@robpalmer.com',
    contactType: 'sales',
  },
```

- [ ] **Step 3: Verify no wrong signals remain**

Run: `grep -rn "Justin_Hall\|linkedin.com/in/robpalmer/\|14158549589" src/`
Expected: no output. (Note the trailing slash in the LinkedIn pattern — `robpalmer3/` must NOT match.)

- [ ] **Step 4: Commit**

```bash
git add src/app/layout.tsx
git commit -m "fix(schema): correct Person sameAs (LinkedIn robpalmer3, GitHub, X), enrich credentials, drop phone"
```

---

### Task 2: next.config.ts — unshadow post + safety redirects

**Files:**
- Modify: `next.config.ts` (redirects array, ~line 141)

- [ ] **Step 1: Delete the shadowing redirect**

Remove this block (including its comment line `// Old blog post URLs that were under /blog/ path`):

```ts
      {
        source: '/blog/ai-sales-page-generator',
        destination: '/blog',
        permanent: true,
      },
```

- [ ] **Step 2: Add safety redirects for slugs external sites may have copied**

In the same redirects array, add:

```ts
      // Wrong service slugs that circulated in old blog copy — keep external links alive
      {
        source: '/services/email-copywriting',
        destination: '/services/email-copywriter',
        permanent: true,
      },
      {
        source: '/services/email-sequence-copywriter',
        destination: '/services/email-copywriter',
        permanent: true,
      },
      {
        source: '/services/direct-response-copywriter',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/direct-response-copywriting',
        destination: '/services',
        permanent: true,
      },
```

- [ ] **Step 3: Sanity-check no OTHER redirect source shadows a real route**

Run: `grep -n "source:" next.config.ts | grep -o "'[^']*'"` then compare each source against real routes (the only blog-slug-shaped one was ai-sales-page-generator). Expected: no source matches an existing page/post path.

- [ ] **Step 4: Commit**

```bash
git add next.config.ts
git commit -m "fix(redirects): unshadow ai-sales-page-generator post; add wrong-slug safety redirects"
```

---

### Task 3: www → apex 308 via Vercel API

**Files:** none in repo (Vercel project config)

- [ ] **Step 1: PATCH the domain**

The Vercel CLI is authenticated (`rob-9194`). Extract its token and call the API:

```bash
TOKEN=$(python3 -c "import json,glob;print(json.load(open(glob.glob('$HOME/Library/Application Support/com.vercel.cli/auth.json')[0]))['token'])")
curl -s -X PATCH \
  "https://api.vercel.com/v9/projects/prj_achcfltAtLs2oRHUbBwGUDk3HORz/domains/www.robpalmer.com?teamId=team_R8V4YITIxTUgexHrf58fFMd1" \
  -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d '{"redirect": "robpalmer.com", "redirectStatusCode": 308}'
```

Expected: JSON response echoing `"redirect":"robpalmer.com"`.

- [ ] **Step 2: Verify live (takes effect immediately, no deploy needed)**

Run: `curl -sI https://www.robpalmer.com/ | head -3` and `curl -sI https://www.robpalmer.com/services/sales-page-copywriter | grep -i 'HTTP\|location'`
Expected: `HTTP/2 308` with `location: https://robpalmer.com/...` on both.

- [ ] **Step 3 (fallback only):** If the API call 403s, report it — Rob flips it in the dashboard: Vercel → robpalmer-site → Settings → Domains → www.robpalmer.com → "Redirect to robpalmer.com" (308). Re-run Step 2 after.

(Nothing to commit.)

---

### Task 4: content-links.ts — route the 3 unlinked services

**Files:**
- Modify: `src/lib/content-links.ts`

- [ ] **Step 1: Check which candidate tags actually exist in posts**

Run: `grep -rhoE "^\s*- .*" src/content/blog/*.mdx | sort -u > /tmp/all-tags.txt` is too broad — instead:

```bash
node -e "
const fs=require('fs'),m=require('/Users/robpalmer/dev/robpalmer-site/node_modules/gray-matter');
const tags=new Set();
for(const f of fs.readdirSync('src/content/blog')){if(!f.endsWith('.mdx'))continue;
  (m(fs.readFileSync('src/content/blog/'+f,'utf8')).data.tags||[]).forEach(t=>tags.add(t.toLowerCase()))}
for(const t of ['facebook ads','facebook advertising','cro','conversion rate optimization','ai marketing','meta ads'])
  console.log(t, tags.has(t))
" 
```

Only add tag mappings for tags that print `true`.

- [ ] **Step 2: Add the 3 services to serviceTitles**

In the `serviceTitles` object (ends at `'ai-copywriting-consultant': 'AI Copywriting Consultant',`), add:

```ts
  'ai-marketing-consultant': 'AI Marketing Consultant',
  'facebook-ads-copywriter': 'Facebook Ads Copywriter',
  'conversion-rate-optimization': 'Conversion Rate Optimization',
```

- [ ] **Step 3: Category mappings**

In `categoryToServices`:
- Add to the existing `'AI & Technology'` array: `'ai-marketing-consultant',` (after `'ai-copywriting-consultant',`)
- Add new entries:

```ts
  'AI Copywriting': [
    'ai-copywriting-consultant',
    'sales-funnel-copywriter',
  ],
  'Tools & AI': [
    'ai-copywriting-consultant',
    'ai-marketing-consultant',
  ],
```

- [ ] **Step 4: Tag mappings**

In `tagToService`: change `'facebook ads': 'ad-copywriter',` to `'facebook ads': 'facebook-ads-copywriter',`. Then add (ONLY those confirmed to exist in Step 1):

```ts
  'conversion rate optimization': 'conversion-rate-optimization',
  cro: 'conversion-rate-optimization',
  'ai marketing': 'ai-marketing-consultant',
```

- [ ] **Step 5: Verify and commit**

Run: `grep -c "ai-marketing-consultant\|facebook-ads-copywriter\|conversion-rate-optimization" src/lib/content-links.ts` — expected ≥ 5.

```bash
git add src/lib/content-links.ts
git commit -m "feat(content-links): route blog traffic to the 3 previously-unlinked service pages"
```

---

### Task 5: Broken-link sweep (55 instances, 21 targets)

**Files:**
- Modify: ~24 files under `src/content/blog/*.mdx` (scripted)
- Create (scratch): `/tmp/fix-broken-links.mjs`

- [ ] **Step 1: Write the sweep script with the verified mapping table**

Create `/tmp/fix-broken-links.mjs`:

```js
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const dir = '/Users/robpalmer/dev/robpalmer-site/src/content/blog'
// Verified against real slugs 2026-06-11 (see plan). Path-only replacements.
const MAP = {
  '/services/email-copywriting': '/services/email-copywriter',
  '/services/email-sequence-copywriter': '/services/email-copywriter',
  '/services/conversion-copywriting': '/services/conversion-rate-optimization',
  '/services/conversion-copywriter': '/services/conversion-rate-optimization',
  '/services/sales-page-copywriting': '/services/sales-page-copywriter',
  '/services/landing-page-copywriting': '/services/landing-page-copywriter',
  '/services/direct-response-copywriter': '/services',
  '/services/direct-response-copywriting': '/services',
  '/services/saas-copywriter': '/verticals/saas-copywriter',
  '/services/supplement-copywriter': '/verticals/health-supplement-copywriter',
  '/services/financial-copywriter': '/verticals/financial-copywriter',
  '/services/facebook-ad-copywriter': '/services/facebook-ads-copywriter',
  '/verticals/saas-companies': '/verticals/saas-copywriter',
  '/verticals/ecommerce-brands': '/verticals/ecommerce-dtc-copywriter',
  '/verticals/health-supplement-brands': '/verticals/health-supplement-copywriter',
  '/verticals/info-product-creators': '/verticals/info-product-copywriter',
  '/blog/chatgpt-copywriting': '/blog/chatgpt-for-copywriting',
}

let total = 0
for (const f of readdirSync(dir).filter((f) => f.endsWith('.mdx'))) {
  const p = join(dir, f)
  let src = readFileSync(p, 'utf8')
  let changed = 0
  for (const [bad, good] of Object.entries(MAP)) {
    // match ](bad) and ](bad#anchor) — replace path only
    const re = new RegExp(`\\]\\(${bad.replace(/[/]/g, '\\/')}(?=[)#])`, 'g')
    src = src.replace(re, () => { changed++; return `](${good}` })
  }
  if (changed) { writeFileSync(p, src); total += changed; console.log(`${f}: ${changed}`) }
}
console.log(`TOTAL: ${total}`)
```

- [ ] **Step 2: Run and reconcile**

Run: `node /tmp/fix-broken-links.mjs`
Expected: TOTAL = 53 (the inventory's 55 minus the 2 `/blog/copywriting-influencers` + handled-next instances — reconcile: inventory counts 54 mappable + 1 influencers; expect TOTAL ≈ 54. Small drift acceptable; investigate any large gap).

- [ ] **Step 3: Unlink the nonexistent influencers post**

In `src/content/blog/creative-strategist.mdx`, find the link `[Alex Hormozi](/blog/copywriting-influencers)` (or similar anchor around that phrase) and replace with plain text `Alex Hormozi` (remove brackets and target, keep the name).

- [ ] **Step 4: Eyeball the diff**

Run: `git diff --stat src/content/blog | tail -2` and `git diff src/content/blog | grep '^+.*](' | grep -oE '\]\(/[a-z-/]*' | sort | uniq -c`
Expected: every added target is a real route; no `/blog/copywriting-influencers` remains anywhere (`grep -rn "copywriting-influencers" src/content/blog` → no output).

- [ ] **Step 5: Commit**

```bash
git add src/content/blog
git commit -m "fix(blog): repair 54 broken internal links across 24 posts (verified slug map)"
```

---

### Task 6: Bridge paragraphs in the 6 Claude Code skill posts

**Files:**
- Modify: `src/content/blog/claude-code-copywriting-skills.mdx`, `claude-code-ad-copy-skill.mdx`, `claude-code-compliance-checker-skill.mdx`, `claude-code-copychief-skill.mdx`, `claude-code-direct-response-copy-skill.mdx`, `claude-code-landing-page-copy-skill.mdx`

- [ ] **Step 1: Append the bridge block to each of the 6 posts**

At the very end of each post's body (after the final existing line), append exactly:

```markdown

---

*Want this working inside your funnel — with the 40 years of judgment that built it? That's my [AI copywriting consulting](/services/ai-copywriting-consultant) work: I wire skills like this one into your team's workflow, or write the copy myself with the full Triple Brain stack. [Book a free strategy call](/call) and I'll tell you straight which one you need.*
```

(First person, no hype words, links to a real service slug and the canonical booking page. Identical block in all 6 — these posts share a series template, consistency is intentional.)

- [ ] **Step 2: Verify**

Run: `grep -l "ai-copywriting-consultant" src/content/blog/claude-code-*.mdx | wc -l`
Expected: 6.

- [ ] **Step 3: Commit**

```bash
git add src/content/blog/claude-code-*.mdx
git commit -m "feat(blog): bridge skill posts to AI consulting service + /call"
```

---

### Task 7: Build-time internal-link checker

**Files:**
- Create: `scripts/check-internal-links.mjs`
- Modify: `package.json` (scripts)

- [ ] **Step 1: Write the checker**

Create `scripts/check-internal-links.mjs`:

```js
#!/usr/bin/env node
// Validates every internal markdown link in blog MDX against real routes.
// Runs as prebuild — a broken slug fails the build with a precise report.
import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const blogDir = join(root, 'src/content/blog')

const slugRe = (src) => [...src.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1])
const services = slugRe(readFileSync(join(root, 'src/app/services/_data/services.ts'), 'utf8'))
const verticals = slugRe(readFileSync(join(root, 'src/app/verticals/_data/verticals.ts'), 'utf8'))
const caseStudies = slugRe(readFileSync(join(root, 'src/app/case-studies/_data/case-studies.ts'), 'utf8'))
const posts = readdirSync(blogDir).filter((f) => f.endsWith('.mdx')).map((f) => f.replace('.mdx', ''))

const valid = new Set([
  '/', '/about', '/services', '/verticals', '/case-studies', '/testimonials',
  '/portfolio', '/blog', '/contact', '/call', '/privacy', '/terms', '/tools',
  '/tools/headline-analyzer', '/tools/copywriting-rates-calculator',
  ...services.map((s) => `/services/${s}`),
  ...verticals.map((s) => `/verticals/${s}`),
  ...caseStudies.map((s) => `/case-studies/${s}`),
  ...posts.map((s) => `/blog/${s}`),
])

const errors = []
for (const f of readdirSync(blogDir).filter((f) => f.endsWith('.mdx'))) {
  const src = readFileSync(join(blogDir, f), 'utf8')
  for (const m of src.matchAll(/\]\((\/[^)\s#?]*)/g)) {
    const path = m[1].replace(/\/$/, '') || '/'
    if (path.startsWith('/downloads/') || path.startsWith('/images/')) {
      if (!existsSync(join(root, 'public', path))) errors.push(`${f}: missing asset ${path}`)
      continue
    }
    if (!valid.has(path)) errors.push(`${f}: broken link ${path}`)
  }
}

if (errors.length) {
  console.error(`✗ ${errors.length} broken internal link(s):\n` + errors.join('\n'))
  process.exit(1)
}
console.log(`✓ internal links OK (${valid.size} routes)`)
```

- [ ] **Step 2: Wire into the build**

In `package.json` scripts, add:

```json
    "check:links": "node scripts/check-internal-links.mjs",
    "prebuild": "node scripts/check-internal-links.mjs",
```

- [ ] **Step 3: Run it**

Run: `npm run check:links`
Expected: `✓ internal links OK (...)` — if it reports errors, Tasks 5/6 missed something; fix those instances (don't weaken the checker).

- [ ] **Step 4: Commit**

```bash
git add scripts/check-internal-links.mjs package.json
git commit -m "feat(build): internal-link checker as prebuild gate"
```

---

### Task 8: llms.txt

**Files:**
- Create: `public/llms.txt`

- [ ] **Step 1: Create the file**

```
# Rob Palmer — Direct-Response Copywriter

Rob Palmer is a direct-response copywriter with 40+ years of experience and
$523M+ in tracked client results, including campaigns for Apple, IBM,
Microsoft, and Belron/Safelite. He writes VSLs, sales pages, email sequences,
and full funnels for health, finance, SaaS, e-commerce, info-product, and
ClickBank clients, using a Triple Brain workflow (senior craft + Claude Code
with custom copywriting skills + a 1,239-file copywriting vault). He is
actively taking clients as of 2026. Engagements typically start at $10K.

## Key pages

- https://robpalmer.com/about — Credentials, career history, methodology
- https://robpalmer.com/call — Book a free strategy call (canonical booking page)
- https://robpalmer.com/services/sales-page-copywriter — Sales page copywriting service
- https://robpalmer.com/blog/best-direct-response-copywriter-to-hire — Who to hire in 2026
- https://robpalmer.com/blog/how-to-hire-a-copywriter — Hiring guide
- https://robpalmer.com/blog/how-much-does-a-direct-response-copywriter-cost — Pricing guide
- https://robpalmer.com/blog/triple-brain-marketing — The Triple Brain method

## Contact

rob@robpalmer.com — https://robpalmer.com/call
```

- [ ] **Step 2: Verify it serves locally** (after Task 14's build, `curl http://localhost:3000/llms.txt` during the dev check returns the file — public/ assets serve at root automatically; no route needed.)

- [ ] **Step 3: Commit**

```bash
git add public/llms.txt
git commit -m "feat(geo): add llms.txt entity file for AI assistants"
```

---

### Task 9: `updated` frontmatter — pipeline + honest backfill

**Files:**
- Modify: `src/lib/mdx.ts` (BlogPostMeta interface ~line 32; getBlogPostMeta return ~line 70)
- Modify: `src/app/blog/[slug]/page.tsx` (~line 95 dateModified; generateMetadata openGraph)
- Modify: `src/app/sitemap.ts` (~line 54 blogPages lastModified)
- Modify: 13 high-intent post frontmatter blocks + the 6 skill posts (scripted)
- Create (scratch): `/tmp/backfill-updated.mjs`

- [ ] **Step 1: Add the field to the type and reader**

In `src/lib/mdx.ts` `BlogPostMeta`, after `date: string`, add:

```ts
  updated?: string
```

In `getBlogPostMeta`'s return object, after `date: data.date || '',`, add:

```ts
    updated: data.updated || undefined,
```

- [ ] **Step 2: Wire into Article schema**

In `src/app/blog/[slug]/page.tsx` change:

```ts
    datePublished: post.meta.date,
    dateModified: post.meta.date,
```

to:

```ts
    datePublished: post.meta.date,
    dateModified: post.meta.updated || post.meta.date,
```

And in `generateMetadata`'s `openGraph` object, after `publishedTime: post.meta.date,`, add:

```ts
      ...(post.meta.updated && { modifiedTime: post.meta.updated }),
```

- [ ] **Step 3: Wire into the sitemap**

In `src/app/sitemap.ts` blogPages, change:

```ts
    lastModified: post.date ? new Date(post.date) : now,
```

to:

```ts
    lastModified: post.updated
      ? new Date(post.updated)
      : post.date
        ? new Date(post.date)
        : now,
```

- [ ] **Step 4: Backfill with REAL git dates (date honesty rule)**

The 13 posts sharpened in the 18.I funnel work, with their sharpening commits: a8ed591 (best-direct-response-copywriters-2026), 4f90655 (best-direct-response-copywriter-to-hire), 91507e4 (how-to-hire-a-copywriter), cdb553b (copywriting-rates, how-much-does-a-direct-response-copywriter-cost), c2a4246 (in-house-copywriter-vs-freelance, freelance-copywriting-guide), 9954bfa (six Group C posts — list them with `git show 9954bfa --name-only | grep 'src/content/blog'`).

Create `/tmp/backfill-updated.mjs` that, for each of those files, runs `git log --format=%as -n 1 <sha> -- <file>` to get the commit's author date and inserts `updated: 'YYYY-MM-DD'` into the frontmatter directly after the `date:` line (skip if `updated:` already present):

```js
import { execSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'

const WORK = [
  ['a8ed591', ['best-direct-response-copywriters-2026']],
  ['4f90655', ['best-direct-response-copywriter-to-hire']],
  ['91507e4', ['how-to-hire-a-copywriter']],
  ['cdb553b', ['copywriting-rates', 'how-much-does-a-direct-response-copywriter-cost']],
  ['c2a4246', ['in-house-copywriter-vs-freelance', 'freelance-copywriting-guide']],
  // 9954bfa slugs: fill from `git show 9954bfa --name-only` output before running
  ['9954bfa', []],
]
for (const [sha, slugs] of WORK) {
  const date = execSync(`git log --format=%as -n 1 ${sha}`).toString().trim()
  for (const slug of slugs) {
    const p = `src/content/blog/${slug}.mdx`
    let src = readFileSync(p, 'utf8')
    if (/^updated:/m.test(src)) continue
    src = src.replace(/^(date:.*)$/m, `$1\nupdated: '${date}'`)
    writeFileSync(p, src)
    console.log(`${slug}: updated ${date}`)
  }
}
```

Fill the 9954bfa slug list from git BEFORE running, then run from the repo root. Expected: 13 lines of output.

Then set `updated: '<today>'` the same way on the 6 claude-code-*.mdx posts — Task 6's bridge paragraph IS a substantive edit made today, so today's date is honest for those.

- [ ] **Step 5: Verify and commit**

Run: `grep -l "^updated:" src/content/blog/*.mdx | wc -l` — expected 19.

```bash
git add src/lib/mdx.ts 'src/app/blog/[slug]/page.tsx' src/app/sitemap.ts src/content/blog
git commit -m "feat(seo): updated frontmatter drives dateModified + sitemap lastmod; honest backfill on 19 posts"
```

---

### Task 10: GA off the critical path

**Files:**
- Modify: `src/app/layout.tsx` (import ~line 3; `<GoogleAnalytics>` ~line 134)

- [ ] **Step 1: Swap the component**

Remove `import { GoogleAnalytics } from '@next/third-parties/google'` and add `import Script from 'next/script'`.

Replace `<GoogleAnalytics gaId="G-ND4QM9PG6P" />` with:

```tsx
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ND4QM9PG6P"
          strategy="lazyOnload"
        />
        <Script id="ga-init" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-ND4QM9PG6P');`}
        </Script>
```

(`strategy="lazyOnload"` loads after the window load event — no preload, no bandwidth contention with hydration. `window.gtag` is set so src/lib/analytics.ts helpers keep working; events fired before load are dropped by design — accepted in spec.)

- [ ] **Step 2: Verify events still fire**

Start `npm run dev`, open http://localhost:3000 in the Playwright browser (script from /Users/robpalmer/dev/astrochartus with `@playwright/test`), wait for load + 3s, evaluate `typeof window.gtag` → "function", click the header CTA, and check a `google-analytics.com/g/collect` or `googletagmanager.com` request fired. Then STOP the dev server.

- [ ] **Step 3: Check @next/third-parties is still used elsewhere or remove it**

Run: `grep -rn "@next/third-parties" src/ package.json`
If layout.tsx was the only consumer: `npm uninstall @next/third-parties` and include package.json/package-lock.json in the commit.

- [ ] **Step 4: Commit**

```bash
git add src/app/layout.tsx package.json package-lock.json
git commit -m "perf(analytics): load GA via lazyOnload instead of preload (158KB off critical path)"
```

---

### Task 11: Sentry — lazy Replay + sampled traces

**Files:**
- Modify: `src/instrumentation-client.ts`

- [ ] **Step 1: Edit the init options**

Change:

```ts
    // Add optional integrations for additional features
    integrations: [Sentry.replayIntegration()],

    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: 1,
```

to:

```ts
    // Session Replay is lazy-loaded after init (see below) so rrweb stays
    // out of the render-critical bundle.
    integrations: [],

    // Sample traces — full tracing on every pageview isn't worth the cost.
    tracesSampleRate: 0.1,
```

(Leave `enableLogs`, replay sample rates, `ignoreErrors`, `beforeSend`, `denyUrls` untouched.)

- [ ] **Step 2: Add the lazy Replay load after the init call**

Directly after the closing `})` of `Sentry.init({...})`, still inside the `if (process.env.NODE_ENV === "production" && !Sentry.getClient())` block, add:

```ts
  // Load Session Replay after startup — keeps ~55KB of rrweb out of the
  // critical path. Replay sample rates above still apply.
  Sentry.lazyLoadIntegration("replayIntegration")
    .then((replayIntegration) => {
      Sentry.addIntegration(replayIntegration())
    })
    .catch(() => {
      // Replay is best-effort; never let telemetry loading break the page.
    })
```

- [ ] **Step 3: Commit**

```bash
git add src/instrumentation-client.ts
git commit -m "perf(sentry): lazy-load Session Replay, sample traces at 10%"
```

---

### Task 12: /tools index page + sitemap + footer link

**Files:**
- Create: `src/app/tools/page.tsx`
- Modify: `src/app/sitemap.ts` (staticPages)
- Modify: `src/components/layout/Footer.tsx` (Navigation column)

- [ ] **Step 1: Create the index page**

`src/app/tools/page.tsx`:

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Free Copywriting Tools',
  description:
    'Free copywriting tools from Rob Palmer: a headline analyzer scoring your headlines against proven direct-response formulas, and a copywriting rates calculator.',
  alternates: {
    canonical: `${SITE_URL}/tools`,
  },
  openGraph: {
    title: 'Free Copywriting Tools',
    description:
      'Free copywriting tools: headline analyzer and copywriting rates calculator.',
    url: `${SITE_URL}/tools`,
  },
}

const tools = [
  {
    href: '/tools/headline-analyzer',
    title: 'Headline Analyzer',
    description:
      'Score your headline against the direct-response formulas I actually use — word balance, emotional pull, specificity, and clarity.',
  },
  {
    href: '/tools/copywriting-rates-calculator',
    title: 'Copywriting Rates Calculator',
    description:
      'Get a realistic 2026 budget range for your project — sales pages, VSLs, email sequences, and full funnels.',
  },
]

export default function ToolsPage() {
  return (
    <>
      <Hero
        variant="page"
        headline="Free Copywriting Tools"
        subheadline="Use the same checks I run on client copy. No email gate, no signup — just the tools."
      />
      <Breadcrumbs items={[{ label: 'Tools' }]} />

      <Section>
        <Container>
          <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {tools.map((tool, index) => (
              <li key={tool.href}>
                <FadeIn delay={index * 100}>
                  <Link
                    href={tool.href}
                    className="block h-full rounded-xl border border-paper-200 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-gold-200 hover:-translate-y-0.5"
                  >
                    <h2 className="font-heading text-xl font-bold text-ink-950 mb-3">
                      {tool.title}
                    </h2>
                    <p className="text-ink-700 font-body mb-4">{tool.description}</p>
                    <span className="font-heading text-sm font-semibold text-gold-600">
                      Open the tool &rarr;
                    </span>
                  </Link>
                </FadeIn>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  )
}
```

(Conventions honored: FadeIn inside `<li>`, never wrapping it; card classes per CLAUDE.md; gold-600 link text; keyword-leading metaTitle.)

- [ ] **Step 2: Sitemap entries**

In `src/app/sitemap.ts` staticPages, after the `/call` entry, add:

```ts
    { url: `${BASE_URL}/tools`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/tools/headline-analyzer`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/tools/copywriting-rates-calculator`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
```

- [ ] **Step 3: Footer link**

In `src/components/layout/Footer.tsx`, in the Navigation column's `<ul>`, directly BEFORE the existing `<li>` containing the "Contact" link, add:

```tsx
              <li>
                <Link
                  href="/tools"
                  className="text-sm text-paper-400 hover:text-gold-400 transition-colors"
                >
                  Free Tools
                </Link>
              </li>
```

- [ ] **Step 4: Commit**

```bash
git add src/app/tools/page.tsx src/app/sitemap.ts src/components/layout/Footer.tsx
git commit -m "feat(tools): /tools index page + sitemap entries + footer link"
```

---

### Task 13: OG metadata completion

**Files:**
- Modify: `src/app/case-studies/page.tsx`, `src/app/call/page.tsx`, `src/app/contact/page.tsx` (metadata exports)
- Modify: `src/app/services/[slug]/page.tsx`, `src/app/verticals/[slug]/page.tsx`, `src/app/blog/[slug]/page.tsx` (generateMetadata openGraph)

- [ ] **Step 1: Three pages inheriting homepage OG defaults**

Add to each metadata export, mirroring the page's existing title/description:

`src/app/call/page.tsx`:

```ts
  openGraph: {
    title: 'Book a Free Strategy Call with Rob Palmer',
    description:
      'Book a free 30-minute strategy call. Walk away with a clear picture of what\'s working, what\'s not, and what to do next.',
    url: `${SITE_URL}/call`,
  },
```

`src/app/contact/page.tsx`:

```ts
  openGraph: {
    title: 'Contact Rob Palmer — General Inquiries',
    description:
      'Contact Rob Palmer for general inquiries — or book a free strategy call to discuss your direct-response copywriting project.',
    url: `${SITE_URL}/contact`,
  },
```

`src/app/case-studies/page.tsx` (these are the page's existing title/description strings, verified):

```ts
  openGraph: {
    title: 'Case Studies | Direct-Response Campaigns That Delivered',
    description:
      'Read detailed case studies showing how Rob Palmer has generated $523M+ in tracked results through direct-response copywriting for Fortune 500 brands and beyond.',
    url: `${SITE_URL}/case-studies`,
  },
```

- [ ] **Step 2: og:url on the three templates**

In each template's `generateMetadata`, add a `url` line inside the existing `openGraph` object:

- services: `url: \`${SITE_URL}/services/${slug}\`,` (the slug variable already exists in scope from `await params`)
- verticals: `url: \`${SITE_URL}/verticals/${slug}\`,`
- blog: `url: \`${SITE_URL}/blog/${slug}\`,`

- [ ] **Step 3: Verify in built output later (Task 14) — and commit**

```bash
git add src/app/case-studies/page.tsx src/app/call/page.tsx src/app/contact/page.tsx 'src/app/services/[slug]/page.tsx' 'src/app/verticals/[slug]/page.tsx' 'src/app/blog/[slug]/page.tsx'
git commit -m "feat(seo): page-specific OG on case-studies/call/contact; og:url on all templated pages"
```

---

### Task 14: Final gates + push

**Files:** none (verification)

- [ ] **Step 1: Link checker + build**

Run: `pgrep -f "next dev" || npm run build`
Expected: prebuild link checker prints `✓ internal links OK`, build completes (~205 static pages now — /tools adds one), zero type errors.

- [ ] **Step 2: Schema gate**

```bash
curl -s http://localhost:3000 >/dev/null 2>&1 || true  # (use built output instead:)
node -e "
const html = require('fs').readFileSync('.next/server/app/index.html', 'utf8');
const blocks = [...html.matchAll(/<script type=\"application\/ld\+json\"[^>]*>(.*?)<\/script>/gs)].map(m => JSON.parse(m[1]));
const person = blocks.find(b => b['@type'] === 'Person');
console.log('sameAs:', person.sameAs);
console.log('telephone:', person.telephone === undefined ? 'REMOVED ✓' : 'STILL PRESENT ✗');
"
```

Expected: sameAs lists exactly linkedin robpalmer3 / github robpalmer99 / x RobPalmer99; telephone REMOVED.

- [ ] **Step 3: GA + visual dev check**

`npm run dev`, then via Playwright (from /Users/robpalmer/dev/astrochartus): load home, after window load verify `typeof window.gtag === 'function'` and a googletagmanager request occurred; screenshot http://localhost:3000/tools at 1440 and 390 and READ the screenshots (cards render, no overflow); `curl -s http://localhost:3000/llms.txt | head -3` returns the entity paragraph; `curl -sI http://localhost:3000/blog/ai-sales-page-generator` returns 200. Kill the dev server.

- [ ] **Step 4: Push (no deploy)**

```bash
git push
```

Post-deploy verification (runs ONLY after Rob explicitly deploys): `curl -sI https://www.robpalmer.com/` → 308 apex (already live — domain config is deploy-independent); `curl -sI https://robpalmer.com/llms.txt` → 200; `curl -sI https://robpalmer.com/blog/ai-sales-page-generator` → 200; `curl -sI https://robpalmer.com/tools` → 200; `curl -s https://robpalmer.com/call | grep og:url`.

---

## Out of scope (do not drift)

FadeIn/Calendly performance (Phase 3), content refresh/cannibalization (Phase 4), case-study Article schema shape (F35), template dedup + dead MDX pipeline + code hygiene (Phase 5), robots.txt AI-crawler policy changes (F40 — leave robots.ts untouched).
