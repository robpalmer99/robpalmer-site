# Corporate Copywriter and Executive Speechwriter Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish `/verticals/corporate-copywriter` and `/services/executive-speechwriter`, wire them into the site, and deploy them.

**Architecture:** Both pages are data entries rendered by existing templates: a seventh `Vertical` and a sixteenth `Service`. No new layout or component. Wiring is small edits to one component, the footer, two existing service entries, three blog posts, two case-study pages and two lib files. A smoke script is the test: written first, failing, then passing locally and against production.

**Tech Stack:** Next.js (App Router), TypeScript data files, MDX blog posts, Node smoke script, Vercel CLI.

**Spec:** `docs/superpowers/specs/2026-11-28-corporate-copywriter-page-design.md`. Read it before starting. Section 8 (copy rules) is binding.

**How this plan treats copy:** the page copy is written during Tasks 2 and 3 with the `direct-response-copy` skill, checked in Task 5, and reviewed by Rob in Task 6. The plan fixes every fact, name, slug, ID, heading intent and constraint. It does not pre-write the body paragraphs, because Rob approves copy in the browser, not in a plan.

**Two deviations from the spec, both found while reading the code:**

1. The home page already has a client-name strip (`ClientLogoBar`, fed by `FORTUNE_500_CLIENTS`). The plan adds a link from it to the corporate page and leaves the five names and the "5 Fortune 500 Clients" stat alone, since several of the new names are not Fortune 500 companies.
2. The home page service grid lists every `production` service. The speechwriter page is kept off that grid (as `ai-copywriting-consultant` already is) so the home page stays on its creative-strategy message. It still appears on `/services`.

---

## Fixed facts used by several tasks

**Corporate client list (exact spelling and order):**
Apple, IBM, Microsoft, AT&T, BT, Vodafone, Barclays, Citibank, Morgan Stanley, Belron, Reckitt & Colman, Securicor, Nurdin & Peacock

**BT departments:** BT International, BT Corporate Services, BT Research Labs, and many regional BT marketing departments. "At least ten teams, each paid from its own budget."

**Speechwriting:** conference keynotes lead, then internal addresses, shareholder and results speeches, event remarks. Gary Lubner (CEO, Belron International) is the only executive named. Others are described by role: chief executives, chairmen, marketing directors and VPs of marketing. No named speeches or events.

**Never on either page:** a price, the Belron share of the $523M, any year or decade attached to the corporate work, "CA Labs", "Coleman", stated scarcity, a claim that the work is recent.

**Testimonial IDs** (IDs are the 1-based position in `src/content/testimonials.ts`; confirm each `id` before using it):

| ID | Author | Role |
|---|---|---|
| 1 | Gary Lubner | CEO, Belron International |
| 12 | Andrew Stotz | CEO, Stotz Financial Research |
| 14 | Amber Saunders | Attorney, The Saunders Firm |
| 23 | Kristy Plucker | CEO, Chatterkick |
| 27 | Francis Fanzilli | Partner, Red Oak Capital |

---

## File map

| File | Change |
|---|---|
| `scripts/smoke-corporate.mjs` | Create. Smoke checks for both pages and the wiring. |
| `src/app/verticals/_data/verticals.ts` | Add the `corporate-copywriter` entry. |
| `src/app/services/_data/services.ts` | Add the `executive-speechwriter` entry; add an in-house section to two AI entries. |
| `public/images/industries/corporate.jpg` | Create. Hero image. |
| `public/images/services/executive-speechwriter.jpg` | Create. Hero image. |
| `src/app/page.tsx` | Exclude `executive-speechwriter` from the home service grid. |
| `src/components/blocks/ClientLogoBar.tsx` | Add a link to the corporate page. |
| `src/components/layout/Footer.tsx` | Add two links. |
| `src/lib/content-links.ts` | Map categories and tags to the new pages. |
| `src/lib/page-dates.ts` | Add both slugs. |
| `src/content/blog/in-house-copywriter-vs-freelance.mdx`, `direct-mail-copywriting.mdx`, `b2b-copywriting.mdx` | One contextual link each. |
| `src/app/case-studies/apple-direct-mail-campaign/page.tsx`, `belron-safelite-523m-campaign/page.tsx` | One link each. |
| `CLAUDE.md` | Update the service and vertical counts. |

---

### Task 0: Preflight

- [ ] **Step 1: Check no dev server is running**

Run: `pgrep -fl "next dev" || echo "none"`
Expected: `none`. If a dev server is running, do not run `npm run build` until it is stopped (a build during dev corrupts `.next/`).

- [ ] **Step 2: Confirm a clean baseline build**

Run: `cd /Users/robpalmer/dev/robpalmer-site && git status -sb && npm run build 2>&1 | tail -15`
Expected: clean tree on `main`, build completes, internal-link check passes.

---

### Task 1: Smoke script (failing first)

**Files:**
- Create: `scripts/smoke-corporate.mjs`

- [ ] **Step 1: Write the script**

```js
#!/usr/bin/env node
// Smoke-checks the corporate copywriter and executive speechwriter pages and their wiring.
// Usage: node scripts/smoke-corporate.mjs [--base http://localhost:3000]
const args = process.argv.slice(2)
const arg = (k, d) => { const i = args.indexOf(k); return i === -1 ? d : args[i + 1] }
const BASE = arg('--base', 'https://robpalmer.com').replace(/\/$/, '')

const CLIENTS = ['Apple', 'IBM', 'Microsoft', 'AT&amp;T', 'BT', 'Vodafone', 'Barclays', 'Citibank',
  'Morgan Stanley', 'Belron', 'Reckitt &amp; Colman', 'Securicor', 'Nurdin &amp; Peacock']

// Applied to the visible text of both new pages.
const FORBIDDEN = [
  [/CA Labs/, 'CA Labs'],
  [/Coleman/, 'misspelt Colman'],
  [/\b(19[5-9]\d|20[0-2]\d)s?\b/, 'a year or decade'],
  [/\$\s?\d[\d,.]*(?!\d)(?!M)/, 'a price'],
  [/\b(nineties|eighties)\b/i, 'a decade in words'],
]

const NEW_PAGES = [
  {
    path: '/verticals/corporate-copywriter',
    title: /^Corporate Copywriter\b.*\| Rob Palmer$/,
    h1: /corporate/i,
    mustContain: [...CLIENTS.map((c) => new RegExp(c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))),
      /BT International/, /BT Corporate Services/, /BT Research Labs/, /Gary Lubner/,
      /href="\/services\/executive-speechwriter"/, /href="\/services\/ai-copywriting-consultant"/,
      /"@type":"FAQPage"/, /"@type":"Service"/],
  },
  {
    path: '/services/executive-speechwriter',
    title: /^Executive Speechwriter\b.*\| Rob Palmer$/,
    h1: /speech/i,
    mustContain: [/keynote/i, /Gary Lubner/, /chairm[ae]n/i,
      /href="\/verticals\/corporate-copywriter"/, /"@type":"FAQPage"/, /"@type":"Service"/],
  },
]

const LINK_SOURCES = [
  ['/', /href="\/verticals\/corporate-copywriter"/],
  ['/services', /href="\/services\/executive-speechwriter"/],
  ['/verticals', /href="\/verticals\/corporate-copywriter"/],
  ['/services/ai-copywriting-consultant', /href="\/verticals\/corporate-copywriter"/],
  ['/services/ai-marketing-consultant', /href="\/verticals\/corporate-copywriter"/],
  ['/blog/in-house-copywriter-vs-freelance', /href="\/verticals\/corporate-copywriter"/],
  ['/blog/direct-mail-copywriting', /href="\/verticals\/corporate-copywriter"/],
  ['/blog/b2b-copywriting', /href="\/verticals\/corporate-copywriter"/],
  ['/case-studies/apple-direct-mail-campaign', /href="\/verticals\/corporate-copywriter"/],
  ['/case-studies/belron-safelite-523m-campaign', /href="\/verticals\/corporate-copywriter"/],
  ['/sitemap.xml', /\/verticals\/corporate-copywriter</],
  ['/sitemap.xml', /\/services\/executive-speechwriter</],
]

const strip = (h) => h.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ')
const pick = (html, re) => (html.match(re) || [])[1]?.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim()
const get = async (p) => { const r = await fetch(BASE + p, { redirect: 'manual' }); return { status: r.status, html: await r.text() } }

let failures = 0
const fail = (m) => { failures++; console.log('  ✗ ' + m) }

for (const c of NEW_PAGES) {
  console.log(c.path)
  const { status, html } = await get(c.path)
  if (status !== 200) { fail(`status ${status}`); continue }
  const title = pick(html, /<title[^>]*>([\s\S]*?)<\/title>/)
  const h1 = pick(html, /<h1[^>]*>([\s\S]*?)<\/h1>/)
  if (!c.title.test(title || '')) fail(`title: ${title}`)
  if (!c.h1.test(h1 || '')) fail(`h1: ${h1}`)
  if (!new RegExp(`<link rel="canonical" href="https://robpalmer.com${c.path}"`).test(html)) fail('canonical')
  for (const re of c.mustContain) if (!re.test(html)) fail(`missing ${re}`)
  const text = strip(html)
  for (const [re, label] of FORBIDDEN) { const m = text.match(re); if (m) fail(`forbidden (${label}): "${m[0]}"`) }
  if (!/\$523M/.test(text)) fail('missing $523M')
}

console.log('wiring')
const cache = {}
for (const [p, re] of LINK_SOURCES) {
  cache[p] ||= await get(p)
  if (cache[p].status !== 200) fail(`${p} status ${cache[p].status}`)
  else if (!re.test(cache[p].html)) fail(`${p} missing ${re}`)
}

console.log(failures ? `\n${failures} failure(s)` : '\nall checks passed')
process.exit(failures ? 1 : 0)
```

- [ ] **Step 2: Run it against production to confirm it fails**

Run: `node scripts/smoke-corporate.mjs`
Expected: exit 1, with `status 404` for both new pages and every wiring check failing.

- [ ] **Step 3: Commit**

```bash
git add scripts/smoke-corporate.mjs
git commit -m "test: smoke checks for corporate and speechwriter pages"
git push
```

---

### Task 2: Corporate copywriter vertical

**Files:**
- Modify: `src/app/verticals/_data/verticals.ts` (insert a new object after the `info-product-copywriter` entry, before the closing `]` of `verticals`, near line 1160)
- Create: `public/images/industries/corporate.jpg`

- [ ] **Step 1: Read the model entry**

Read the whole `saas-copywriter` entry in `src/app/verticals/_data/verticals.ts` (lines 797 to 978). Match its field order, its use of `—`-free plain punctuation in new copy, its HTML-in-`content` convention (inline `<a href>` and `<strong>` are rendered), and paragraph breaks as `\n\n`.

- [ ] **Step 2: Load the copy skill and the brief**

Invoke the `direct-response-copy` skill. Read `RobPalmer/customer_avatar.md` and `RobPalmer/offer_brief.md` for voice and proof, and the feedback memories `feedback_first_person_voice`, `feedback_proof_and_price_rulings`, `feedback_imply_dont_state_scarcity`, `feedback_no_ca_labs_callout`.

- [ ] **Step 3: Add the entry**

Add this object. Every string marked `COPY:` is written in this step to the brief beside it; everything else is used exactly as shown.

```ts
  {
    title: 'Corporate Copywriter',
    slug: 'corporate-copywriter',
    shortDescription:
      // COPY: one sentence, max 200 chars. Direct response and AI copywriting for corporate marketing teams; names Apple, IBM and BT.
      '',
    metaTitle: 'Corporate Copywriter for Marketing Teams',
    metaDescription:
      // COPY: 140-155 chars, third person. Corporate copywriter for Apple, IBM, BT, Barclays and Vodafone. Measured campaigns, AI copywriting for in-house teams, executive speeches.
      '',
    headline:
      // COPY: H1 containing the word "Corporate". A senior direct response writer for corporate marketing teams.
      '',
    subheadline:
      // COPY: two or three sentences, first person. What I do for a department head, and that most engagements start with one defined project.
      '',
    heroImage: '/images/industries/corporate.jpg',
    heroImageAlt: 'Corporate marketing team reviewing campaign results in a bright meeting room',
    heroStats: {
      primary: { value: '$523M', label: 'In Tracked Client Results' },
      secondary: [
        { value: '13', label: 'Corporate Clients Named Below' },
        { value: '10+', label: 'BT Teams, Each on Its Own Budget' },
        { value: '40+', label: 'Years Direct Response' },
      ],
    },
    credentialBar: {
      heading: 'Corporate copy written for',
      items: [
        'Apple', 'IBM', 'Microsoft', 'AT&T', 'BT', 'Vodafone', 'Barclays', 'Citibank',
        'Morgan Stanley', 'Belron', 'Reckitt & Colman', 'Securicor', 'Nurdin & Peacock',
      ],
    },
    definition: {
      term: 'Corporate copywriter',
      // COPY: two or three plain sentences an AI assistant can quote. What a corporate copywriter is, who hires one, what they produce.
      text: '',
    },
    sections: [
      {
        // COPY heading: the problem. Campaigns that look good and cannot be shown to have sold anything.
        heading: '',
        // COPY: 2-3 paragraphs. The department head's position: agency work that wins approval and cannot be tied to a number; a mandate to use AI and nobody to show the team how.
        content: '',
      },
      {
        // COPY heading: three ways to start.
        heading: '',
        // COPY: one short lead-in paragraph, then the bullets.
        content: '',
        bullets: [
          // COPY: a measured campaign (direct mail, email, landing pages). Link "direct response" to /services/direct-response-copywriter.
          '',
          // COPY: AI copywriting systems and training for the in-house team. Link to /services/ai-copywriting-consultant.
          '',
          // COPY: a speech for a senior executive. Link to /services/executive-speechwriter.
          '',
        ],
      },
      {
        // COPY heading: start with one project.
        heading: '',
        // COPY: one defined project on one departmental budget, fixed scope, easy to approve. No price.
        content: '',
      },
      {
        // COPY heading: the BT story.
        heading: '',
        // COPY: one BT project became work for at least ten teams, each paid from its own budget: BT International, BT Corporate Services, BT Research Labs and many regional BT marketing departments. Told as why teams kept referring me on. No dates.
        content: '',
      },
      {
        // COPY heading: proof.
        heading: '',
        // COPY: Gary Lubner's quote verbatim ("You are our secret weapon. Keep your diary clear, please!"), the Belron/Safelite campaign with a link to /case-studies/belron-safelite-523m-campaign, the Apple UK A/B win with a link to /case-studies/apple-direct-mail-campaign.
        content: '',
      },
    ],
    deliverablesHeading: 'What corporate teams hire me to write',
    deliverablesSubtext:
      // COPY: one sentence.
      '',
    deliverables: [
      // COPY: six items, each { title, description }: direct mail campaigns; email campaigns and sequences; landing pages; AI copywriting systems for the in-house team; AI training workshops; executive speeches and keynotes.
    ],
    caseStudies: [
      { name: 'Belron / Safelite', category: 'Direct Response Campaign', metric: '$523M', detail: 'Tracked sales over nine years' },
      { name: 'Apple Computer UK', category: 'Direct Mail', metric: 'A/B Winner', detail: 'Beat the control in a split test' },
    ],
    testimonialIds: ['1', '12', '27', '23'],
    portfolioItems: [
      { title: 'The Belron / Safelite Campaign', category: 'Direct Response' },
      { title: 'The Apple UK Direct Mail Campaign', category: 'Direct Mail' },
    ],
    midCta: {
      // COPY: headline and subtext for the strategy call. Subtext says what to bring: the campaign or the team's current AI workflow.
      headline: '',
      subtext: '',
    },
    faqs: [
      // COPY: eight FAQs, each { question, answer }, answers 40-90 words, first person:
      // 1. What does a corporate copywriter do?
      // 2. How do purchase orders and invoicing work?
      // 3. Will you sign our NDA?
      // 4. Can you work alongside our agency?
      // 5. What does a first project look like?
      // 6. How is the AI copywriting work delivered to our team?
      // 7. Do you write speeches for executives? (links to /services/executive-speechwriter)
      // 8. How do we work across time zones?
    ],
    relatedServices: ['executive-speechwriter', 'ai-copywriting-consultant', 'ai-marketing-consultant', 'direct-response-copywriter'],
    relatedVerticals: ['financial-copywriter', 'saas-copywriter'],
  },
```

Check the two `caseStudies` details against `src/app/case-studies/_data/case-studies.ts` and reword them to match what those pages state. Do not add a claim those pages do not make.

- [ ] **Step 4: Generate the hero image**

```bash
mkdir -p /tmp/hero-gen-corporate
python3 ~/.claude/skills/tools/openai/gpt_image.py --prompt "Editorial photograph, bright high-key daylight: a modern corporate meeting room with large windows, a long pale oak table, printed campaign layouts and a laptop on it, two out-of-focus colleagues in conversation in the background. Warm cream and soft charcoal tones with subtle amber-gold accents. No text, no logos, no screens with readable content." --output-dir /tmp/hero-gen-corporate --aspect-ratio 16:9 --quality high
magick /tmp/hero-gen-corporate/*.png -resize 1200x800^ -gravity center -extent 1200x800 -quality 85 -strip -interlace JPEG public/images/industries/corporate.jpg
```

Then Read `public/images/industries/corporate.jpg` and check for garbled text or artefacts. Regenerate if any.

- [ ] **Step 5: Type-check**

Run: `npx tsc --noEmit 2>&1 | tail -5`
Expected: no errors.

- [ ] **Step 6: Do not commit yet.** Copy is committed after Task 6 (Rob's review).

---

### Task 3: Executive speechwriter service

**Files:**
- Modify: `src/app/services/_data/services.ts` (insert a new object after the `conversion-rate-optimization` entry, before the closing `]` of `services`, near line 2932)
- Modify: `src/app/page.tsx:96-97`
- Create: `public/images/services/executive-speechwriter.jpg`

- [ ] **Step 1: Read the model entry**

Read the whole `email-copywriter` entry in `src/app/services/_data/services.ts` (starts line 1346) for field order and section pattern.

- [ ] **Step 2: Add the entry**

```ts
  {
    title: 'Executive Speechwriter',
    slug: 'executive-speechwriter',
    tier: 'production',
    schemaServiceType: 'Speechwriting',
    shortDescription:
      // COPY: one sentence, max 200 chars. Conference keynotes and corporate speeches for chief executives, chairmen and marketing leaders.
      '',
    metaTitle: 'Executive Speechwriter | Keynotes and Corporate Speeches',
    metaDescription:
      // COPY: 140-155 chars, third person. Executive speechwriter for CEOs, chairmen and marketing leaders. Conference keynotes, results speeches, internal addresses.
      '',
    headline:
      // COPY: H1 containing "Speech" or "Speechwriter". Speeches for senior executives, written by a direct response writer.
      '',
    subheadline:
      // COPY: two or three sentences, first person. A speech has to move a room to do something; I have written them for chief executives, chairmen and marketing directors.
      '',
    heroImage: '/images/services/executive-speechwriter.jpg',
    heroImageAlt: 'Executive delivering a keynote speech from a lectern at a conference',
    heroStats: {
      primary: { value: '40+', label: 'Years Writing to Persuade' },
      secondary: [
        { value: 'CEO', label: 'Chairman and Marketing Director Level' },
        { value: '$523M', label: 'In Tracked Client Results' },
        { value: 'Keynotes', label: 'Conference, Results and Internal Speeches' },
      ],
    },
    credentialBar: {
      heading: 'Corporate clients include',
      items: [
        'Apple', 'IBM', 'Microsoft', 'AT&T', 'BT', 'Vodafone', 'Barclays', 'Citibank',
        'Morgan Stanley', 'Belron', 'Reckitt & Colman', 'Securicor', 'Nurdin & Peacock',
      ],
    },
    definition: {
      term: 'Executive speechwriter',
      // COPY: two or three plain sentences. Who an executive speechwriter is, who hires one, what they deliver.
      text: '',
    },
    sections: [
      {
        // COPY heading: the problem.
        heading: '',
        // COPY: a speech that reads well on paper and dies in the room, or one that sounds like the communications team and not the speaker.
        content: '',
      },
      {
        // COPY heading: what I write.
        heading: '',
        content: '',
        bullets: [
          // COPY, in this order: conference keynotes; internal addresses; shareholder and results speeches; event remarks.
        ],
      },
      {
        // COPY heading: how it works.
        heading: '',
        content: '',
        bullets: [
          // COPY: briefing call with the speaker; outline; draft in the speaker's voice; rehearsal edits.
        ],
      },
      {
        // COPY heading: why a persuasion writer.
        heading: '',
        // COPY: the same discipline that makes a letter sell makes an audience act. Link to /verticals/corporate-copywriter.
        content: '',
      },
      {
        // COPY heading: who I have written for.
        heading: '',
        // COPY: speeches written for Gary Lubner, CEO of Belron International, with his quote verbatim. Other speakers by role only: chief executives, chairmen, marketing directors and VPs of marketing. State plainly that speeches are ghostwritten and confidential, which is why none are published here.
        content: '',
      },
    ],
    deliverablesHeading: 'What you get',
    deliverablesSubtext:
      // COPY: one sentence.
      '',
    deliverables: [
      // COPY: five items: the briefing session; the outline; the full script written for speaking; speaker notes and timings; rehearsal revisions.
    ],
    testimonialIds: ['1', '12', '14', '27'],
    portfolioItems: [],
    midCta: {
      // COPY: strategy call. Subtext says what to bring: the event, the audience, the date.
      headline: '',
      subtext: '',
    },
    faqs: [
      // COPY: eight FAQs, answers 40-90 words, first person:
      // 1. What does an executive speechwriter do?
      // 2. Is the work confidential?
      // 3. How do you capture the speaker's own voice?
      // 4. How far ahead of the event should we start?
      // 5. Do you write the slides as well?
      // 6. Can you brief the speaker remotely?
      // 7. What kinds of speech do you write?
      // 8. What happens after the strategy call?
    ],
    relatedServices: ['ai-copywriting-consultant', 'direct-response-copywriter', 'email-copywriter'],
    relatedVerticals: ['corporate-copywriter', 'financial-copywriter'],
  },
```

Do not set `offerPriceFrom`. If the template requires `portfolioItems` to be non-empty, check `src/components/blocks/DetailPageLayout.tsx`; if it renders an empty section, add a guard there that skips the block when the array is empty.

- [ ] **Step 3: Keep it off the home grid**

In `src/app/page.tsx`, change line 97 from:

```ts
  ...services.filter((s) => s.tier === 'production'),
```

to:

```ts
  ...services.filter((s) => s.tier === 'production' && s.slug !== 'executive-speechwriter'),
```

- [ ] **Step 4: Generate the hero image**

```bash
mkdir -p /tmp/hero-gen-speech
python3 ~/.claude/skills/tools/openai/gpt_image.py --prompt "Editorial photograph, bright high-key lighting: view from the side of a conference stage, a wooden lectern with printed speech pages and a glass of water in sharp focus, a softly blurred audience in a bright auditorium beyond. Warm cream and soft charcoal tones with subtle amber-gold accents. No text, no logos, no readable signage." --output-dir /tmp/hero-gen-speech --aspect-ratio 16:9 --quality high
magick /tmp/hero-gen-speech/*.png -resize 1200x800^ -gravity center -extent 1200x800 -quality 85 -strip -interlace JPEG public/images/services/executive-speechwriter.jpg
```

Read the jpg and check it, as in Task 2.

- [ ] **Step 5: Type-check**

Run: `npx tsc --noEmit 2>&1 | tail -5`
Expected: no errors.

---

### Task 4: Wiring

**Files:** as listed in the file map.

- [ ] **Step 1: Client bar link**

In `src/components/blocks/ClientLogoBar.tsx`, add `import Link from 'next/link'` at the top, and insert this block directly after the closing `</div>` of the "Fortune 500 text logos" flex container and before the `{/* Divider */}` comment:

```tsx
        <p className="mt-6 text-center">
          <Link
            href="/verticals/corporate-copywriter"
            className={cn(
              'text-sm font-heading font-semibold transition-colors',
              variant === 'dark' ? 'text-gold-400 hover:text-gold-500' : 'text-gold-600 hover:text-gold-500'
            )}
          >
            Copywriting for corporate teams &rarr;
          </Link>
        </p>
```

- [ ] **Step 2: Footer links**

In `src/components/layout/Footer.tsx`, insert these two list items directly before the `<li>` that contains the `/tools` link:

```tsx
              <li>
                <Link
                  href="/verticals/corporate-copywriter"
                  className="text-sm text-paper-400 hover:text-gold-400 transition-colors"
                >
                  Corporate Copywriting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/executive-speechwriter"
                  className="text-sm text-paper-400 hover:text-gold-400 transition-colors"
                >
                  Executive Speechwriting
                </Link>
              </li>
```

- [ ] **Step 3: In-house section on the two AI pages**

In `src/app/services/_data/services.ts`, in both the `ai-copywriting-consultant` and `ai-marketing-consultant` entries, add one object to the end of `sections` (after the existing last section):

```ts
      {
        heading: 'For In-House Marketing Teams at Larger Companies',
        // COPY: 2 paragraphs, first person, written for each page separately (not duplicated word for word). The same systems installed for a corporate marketing department; start with one team and one workflow. Ends with a link: <a href="/verticals/corporate-copywriter">corporate copywriter</a>.
        content: '',
      },
```

Also add `'corporate-copywriter'` to each entry's `relatedVerticals` array (create the array if absent).

- [ ] **Step 4: Blog links**

Add one sentence with a contextual link in each post, placed in the section named:

- `src/content/blog/in-house-copywriter-vs-freelance.mdx`: in the section that discusses when a freelance specialist is the better choice. Link text "corporate copywriter" to `/verticals/corporate-copywriter`.
- `src/content/blog/direct-mail-copywriting.mdx`: in the closing or hiring section. Link text "direct mail for corporate marketing teams" to `/verticals/corporate-copywriter`.
- `src/content/blog/b2b-copywriting.mdx`: in the section on hiring or on large-company buyers. Link text "corporate copywriting" to `/verticals/corporate-copywriter`.

Each sentence is first person, makes no dated claim, and is written to fit the paragraph it joins. Set each post's `updated:` frontmatter to the deploy date.

- [ ] **Step 5: Content links**

In `src/lib/content-links.ts`:

Add to `categoryToVerticals`:

```ts
  'Hiring & Strategy': [
    'corporate-copywriter',
  ],
```

Change the `'Industry Guides'` array so `'corporate-copywriter'` is its first item (only the first three are shown).

Read `tagToVertical` and the tag normalisation in `getRelatedLinks` (around line 300), then add entries in the same key format for the tags `b2b copywriting`, `b2b marketing`, `in-house copywriter` and `marketing team`, each mapping to `'corporate-copywriter'`.

- [ ] **Step 6: Case-study links**

In `src/app/case-studies/apple-direct-mail-campaign/page.tsx` (next to the existing link near line 259) and `src/app/case-studies/belron-safelite-523m-campaign/page.tsx` (next to the links near lines 229-236), add one link in the same markup and classes as the neighbouring link, with `href="/verticals/corporate-copywriter"` and the text "Corporate copywriting".

- [ ] **Step 7: Page dates**

In `src/lib/page-dates.ts`, add to `SERVICE_UPDATED`:

```ts
  'executive-speechwriter': '2026-11-28',
  'ai-copywriting-consultant': '2026-11-28',
```

change the existing `'ai-marketing-consultant'` value to `'2026-11-28'`, and add to `VERTICAL_UPDATED`:

```ts
  'corporate-copywriter': '2026-11-28',
```

Set `STATIC_UPDATED['']` and the two case-study entries to `'2026-11-28'`. If the deploy happens on a later day, use that day throughout.

- [ ] **Step 8: CLAUDE.md counts**

In `CLAUDE.md`, change `(15 items, Service interface)` to `(16 items, Service interface)` and `(6 items, Vertical interface)` to `(7 items, Vertical interface)`.

- [ ] **Step 9: Commit the wiring that carries no new copy**

```bash
git add src/components/blocks/ClientLogoBar.tsx src/components/layout/Footer.tsx src/lib/content-links.ts CLAUDE.md
git commit -m "feat: wire corporate and speechwriter pages into client bar, footer and content links"
git push
```

Leave `services.ts`, `verticals.ts`, `page.tsx`, `page-dates.ts`, the MDX posts, case-study pages and images uncommitted until Task 6.

---

### Task 5: Copy QA

- [ ] **Step 1: Mechanical checks**

Run:

```bash
cd /Users/robpalmer/dev/robpalmer-site
grep -n "COPY:" src/app/verticals/_data/verticals.ts src/app/services/_data/services.ts
grep -nE "Coleman|CA Labs" <(sed -n '/corporate-copywriter/,$p' src/app/verticals/_data/verticals.ts) <(sed -n "/slug: 'executive-speechwriter'/,\$p" src/app/services/_data/services.ts)
```

Expected: both commands print nothing. Every `COPY:` comment has been replaced by copy and removed, and no empty `''` strings or empty arrays remain in the two new entries (other than `portfolioItems: []` on the speechwriter).

- [ ] **Step 2: Copychief**

Invoke the `copychief` skill on each new entry's copy and on the two new AI-page sections. Apply the high-impact fixes.

- [ ] **Step 3: Copy judge**

Invoke the `copy-judge` skill on both pages. Fix AI tells and anything that breaks the spec's section 8 rules.

- [ ] **Step 4: Similarity check on the two AI-page sections**

Confirm the two "For In-House Marketing Teams" sections share no sentence. Rewrite one if they do.

---

### Task 6: Rob's review (gate)

- [ ] **Step 1: Start the dev server**

Run in the background: `npm run dev`

- [ ] **Step 2: Run the smoke script locally**

Run: `node scripts/smoke-corporate.mjs --base http://localhost:3000`
Expected: `all checks passed`, except the canonical checks, which compare against `https://robpalmer.com` and pass locally only if `NEXT_PUBLIC_SITE_URL` is unset. Fix every other failure before showing Rob.

- [ ] **Step 3: Ask Rob to review**

Give Rob these URLs and wait for his changes or approval:

- http://localhost:3000/verticals/corporate-copywriter
- http://localhost:3000/services/executive-speechwriter
- http://localhost:3000/ (client bar link)
- http://localhost:3000/services/ai-copywriting-consultant (last section)

Apply his changes, re-run Step 2.

- [ ] **Step 4: Stop the dev server, then commit**

```bash
pkill -f "next dev"; rm -rf .next
git add -A
git commit -m "feat: corporate copywriter vertical and executive speechwriter service"
git push
```

---

### Task 7: Build, deploy, verify

- [ ] **Step 1: Clean build**

Run: `npm run build 2>&1 | tail -20`
Expected: build succeeds, internal-link check passes, both new routes listed.

- [ ] **Step 2: Deploy**

Run: `vercel deploy --prod --yes`
Expected: a production URL aliased to robpalmer.com.

- [ ] **Step 3: Smoke against production**

Run: `node scripts/smoke-corporate.mjs`
Expected: `all checks passed`, exit 0. Quote the output in the report to Rob.

- [ ] **Step 4: Existing smoke still passes**

Run: `npm run smoke`
Expected: no failures.

- [ ] **Step 5: Request indexing**

For each of the two URLs: `node scripts/gsc-request-indexing.cjs <url>` (needs the signed-in Chromium on the Google profile; if a login appears, tell Rob in one line and continue once he has signed in). Then run `~/dev/seo-vault/bin/seo indexnow robpalmer-site`.

---

### Task 8: Records

- [ ] **Step 1: Content plan**

Add a dated line to `docs/content/2026-11-content-plan.md` recording both pages, the 2027-01-27 checkpoint and the decision rule from the spec's section 10.

- [ ] **Step 2: Memory**

Write a `project` memory `project_corporate_pages.md` (and its `MEMORY.md` line): both URLs live, the client list, the naming rules for speechwriting, no dates on corporate work, the checkpoint date, and that more corporate pages are allowed once these book a call.

- [ ] **Step 3: Commit and push**

```bash
git add -A
git commit -m "docs(content): corporate and speechwriter pages deployed; checkpoint 2027-01-27"
git push
```
