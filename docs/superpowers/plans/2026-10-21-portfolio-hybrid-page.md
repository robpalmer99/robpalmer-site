# Portfolio Hybrid Sales Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild `/portfolio` as a proof-led sales page that shows six real script excerpts on-site, carries the booking argument around them, and demotes the Google Drive folder to a text link.

**Architecture:** One new data export (`featuredSamples`) and one new server component (`SampleExhibit`) in the existing Next.js app-router site. The page file is rewritten to the section order in the spec, reusing `Hero`, `CTABanner`, `FAQAccordion`, `TestimonialCard`, `PortfolioGrid`, `CountUp`, `Section`, `Container`, `FadeIn` and `JsonLd`. Excerpts are literal strings in the data file; nothing fetches Drive. Verification is the existing fetch-based smoke script extended with a portfolio slice, plus `tsc`, `next build` and a dev-server browser pass.

**Tech Stack:** Next.js 15 app router, React server components, TypeScript, Tailwind with the site's design tokens (`ink-*`, `gold-*`, `paper-*`), existing `scripts/smoke-repositioning.mjs` (Node 20+, `fetch`).

**Spec:** `docs/superpowers/specs/2026-10-21-portfolio-hybrid-page-design.md`

---

## Rules that bind every task

- First person in body copy ("I", "my", "you"). Third person only in `metadata` and JSON-LD.
- No em dashes in new copy unless a period, comma or colon reads worse. No "It's not X. It's Y." antithesis. No three-fragment staccato runs. Contractions in running copy. Never drop a subject pronoun.
- No price figures anywhere. No stated scarcity ("last copywriter taking clients"). No CA Labs lead.
- A number appears only if it is in the spec's confirmed list (§5, "Confirmed by Rob") or in a testimonial on the site.
- Excerpts are verbatim. The only edits allowed: remove bracketed or asterisked stage directions, remove markdown markup, and remove one stray "N" in the Gluco6 opening (a typo in the source doc). Nothing else changes.
- Use design tokens, never raw hex. Headings `font-heading`, body `font-body`. External links `target="_blank" rel="noopener noreferrer"`. Card link text `text-gold-600`. Meta text `text-paper-600`.
- Never wrap `<li>` in `FadeIn` inside a `<ul>`.
- Do not run `npm run build` while `next dev` is running. Check with `pgrep -f "next dev"` first.
- Commit after every task with the message given. Push after each commit (`git push`).

---

## File map

| File | Action | Responsibility |
|---|---|---|
| `scripts/smoke-repositioning.mjs` | Modify | Add a slice-6 check for `/portfolio` (the failing test for the page) |
| `src/app/portfolio/_data/portfolio.ts` | Modify | Add `FeaturedSample` type and `featuredSamples` export; correct two card descriptions |
| `src/components/blocks/SampleExhibit.tsx` | Create | Render one featured sample (brief + excerpt frame + result + doc link) |
| `src/app/portfolio/page.tsx` | Rewrite | New section order, metadata, JSON-LD, copy |
| `docs/seo/2026-10-repositioning/README.md` | Modify | Note the portfolio baseline and the +4-week check |

---

### Task 1: Failing smoke check for the new page

**Files:**
- Modify: `scripts/smoke-repositioning.mjs`

- [ ] **Step 1: Add a slice-6 check and a body-content assertion**

Replace the `CHECKS` array and the loop body so a check can also assert on page body text. Edit `scripts/smoke-repositioning.mjs` to read exactly:

```js
#!/usr/bin/env node
// Smoke-checks the pages touched by the 2026-10 creative-strategy repositioning
// and the 2026-10-21 portfolio hybrid page.
// Usage: node scripts/smoke-repositioning.mjs [--base https://robpalmer.com] [--slice N]
// --slice N runs only the checks that must hold once slice N has shipped (default: all).
const args = process.argv.slice(2)
const arg = (k, d) => { const i = args.indexOf(k); return i === -1 ? d : args[i + 1] }
const BASE = arg('--base', 'https://robpalmer.com').replace(/\/$/, '')
const SLICE = Number(arg('--slice', 'Infinity'))
if (Number.isNaN(SLICE) || SLICE < 0) { console.error(`✗ --slice must be a non-negative integer, got ${arg('--slice')}`); process.exit(2) }

const FORBIDDEN = [/\$10K/i, /\$10,000/, /CA Labs/]

// minSlice: the slice after which this check must pass.
// mustContain / mustNotContain: regexes tested against the full HTML body.
const CHECKS = [
  { path: '/services/creative-strategist', minSlice: 1, h1: /creative strateg/i, title: /^Creative Strategist for DTC Brands \| Rob Palmer$/, faq: true },
  { path: '/', minSlice: 2, h1: /creative strateg/i, title: /^Creative Strategist & Direct-Response Copywriter \| Rob Palmer$/, faq: true },
  { path: '/services', minSlice: 3, h1: /creative strateg/i, title: /^Creative Strategy & Copywriting Services \| Rob Palmer$/, faq: false },
  { path: '/verticals/ecommerce-dtc-copywriter', minSlice: 4, h1: /^Creative Strategy and Copy for DTC Brands Ready to Scale$/, title: /^E-Commerce & DTC Copywriter \| Creative Strategy for Meta \| Rob Palmer$/, faq: true },
  { path: '/about', minSlice: 5, h1: /creative/i, title: /^About \|/, faq: false },
  {
    path: '/portfolio', minSlice: 6,
    h1: /^Copy That Sold\. Read It Before You Decide\.$/,
    title: /^Copywriting Portfolio: VSL, Sales Page & Email Samples \| Rob Palmer$/,
    faq: true,
    mustContain: [
      /Puradrop/, /Coffee Slimmer Pro/, /Dynamic Brain/, /Gluco6/, /Supernus/, /Anna Frummerin/,
      /Read the full script/, /"@type":"ItemList"/,
    ],
    mustNotContain: [/Browse My Portfolio/],
  },
]

const pick = (html, re) => (html.match(re) || [])[1]?.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim()

let failures = 0
for (const c of CHECKS.filter((c) => c.minSlice <= SLICE)) {
  const url = BASE + c.path
  let res
  try { res = await fetch(url, { redirect: 'manual' }) } catch (e) { console.error(`✗ ${c.path}\n    fetch failed: ${e.cause?.code ?? e.message}`); failures++; continue }
  if (res.status !== 200) { console.error(`✗ ${c.path}\n    status ${res.status}`); failures++; continue }
  const html = await res.text()
  const h1 = pick(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i) ?? ''
  const title = pick(html, /<title[^>]*>([\s\S]*?)<\/title>/i) ?? ''
  const desc = pick(html, /<meta name="description" content="([^"]*)"/i) ?? ''
  const hasFaq = /"@type":"FAQPage"/.test(html)
  const problems = []
  if (!c.h1.test(h1)) problems.push(`h1 "${h1}" !~ ${c.h1}`)
  if (!c.title.test(title)) problems.push(`title "${title}" !~ ${c.title}`)
  if (c.faq && !hasFaq) problems.push('FAQPage JSON-LD missing')
  for (const re of c.mustContain ?? []) if (!re.test(html)) problems.push(`body missing ${re}`)
  for (const re of c.mustNotContain ?? []) if (re.test(html)) problems.push(`body still contains ${re}`)
  for (const re of FORBIDDEN) for (const [name, v] of [['h1', h1], ['title', title], ['description', desc]])
    if (re.test(v)) problems.push(`${name} contains ${re}`)
  if (problems.length) { failures++; console.error(`✗ ${c.path}\n    ${problems.join('\n    ')}`) }
  else console.log(`✓ ${c.path}`)
}
process.exit(failures ? 1 : 0)
```

- [ ] **Step 2: Run the check against the live site to see it fail**

Run: `node scripts/smoke-repositioning.mjs --slice 6`
Expected: the five existing checks print `✓`; `/portfolio` prints `✗` with `h1 "Portfolio & Work Samples" !~ ...`, `title ... !~ ...`, `FAQPage JSON-LD missing`, several `body missing` lines, and `body still contains /Browse My Portfolio/`. Exit code 1.

- [ ] **Step 3: Confirm slices 1 to 5 still pass on their own**

Run: `node scripts/smoke-repositioning.mjs --slice 5`
Expected: five `✓` lines, exit code 0.

- [ ] **Step 4: Commit**

```bash
git add scripts/smoke-repositioning.mjs
git commit -m "test(smoke): slice 6 check for the portfolio hybrid page"
git push
```

---

### Task 2: Featured sample data and card corrections

**Files:**
- Modify: `src/app/portfolio/_data/portfolio.ts`

- [ ] **Step 1: Correct the two mismatched cards**

In `src/app/portfolio/_data/portfolio.ts`, change the `dynamic-brain` item's `category` from `'VSL'` to `'Sales Page'` and its `description` to:

```ts
    description:
      'Long-form text sales page for a 40-compound nootropic from Stonehenge Health, written for readers over 50 who have noticed the first lapses. Names the condition, services the whole brain with one formulation, and closes on a 90-day guarantee.',
```

Change the `abundant` item's `niche` from `'Info Product'` to `'Health'` and its `description` to:

```ts
    description:
      'Long-form text sales page for a female hair-loss supplement. Story-driven lead, mechanism explained in the reader\'s own words, embedded social proof and a multi-tier offer.',
```

Leave every other card untouched.

- [ ] **Step 2: Add the `FeaturedSample` type and the six entries**

Append to the end of `src/app/portfolio/_data/portfolio.ts`:

```ts
export interface FeaturedSample {
  slug: string
  title: string
  format: 'VSL' | 'TSL' | 'Email'
  market: string
  awareness: string
  angle: string
  excerpt: string
  docUrl: string
  result?: { text: string; source: string }
  testimonialId?: string
}

// Excerpts are verbatim from the Google Docs in the public portfolio folder.
// Only stage directions and markdown markup were removed. Do not edit the words.
export const featuredSamples: FeaturedSample[] = [
  {
    slug: 'puradrop',
    title: 'Puradrop',
    format: 'VSL',
    market: 'Weight-loss gummy, sold on ClickBank to cold Facebook traffic',
    awareness: 'Problem-aware women over 40 who have failed on diets and distrust supplements',
    angle: 'Open on the worst public humiliation the reader can picture, then make the husband the narrator so the promise arrives from someone who loves her, not someone selling to her.',
    excerpt: `Flight attendant: “For the last time, madam, you must leave the plane immediately.”

Jane: “But I don’t understand…I’m going on vacation. You can’t throw me off. What’s going on?

Flight attendant: “Like I said, it’s your size. You’re too large for one seat, and there’s no spare one for you to purchase.”

Passenger #1: “She’s saying you’re too fat to fly, Tubby! And she’s right!”

Jane: “Hey, no—that’s not fair. I’ve paid for my ticket, so I’m staying here.”

Flight attendant: “If you won’t leave, madam, the police will deal with you.”

Passenger #2: “Quite right. Get rid of the jelly-belly. She’ll make us crash.”

Passenger #3: “Eww…she’s gross. If I was married to her, I’d file for divorce.”

Passenger #1: “Fancy letting yourself go like that. I’ve seen smaller whales.”

Police officer: “Now madam, will you come quietly or will I have to arrest you?”

Passenger #2: “Yeah, lock her up for being too fat and ugly!”

Passenger #3: “And throw away the key! My God, she’s disgusting.”

Jane: “Leave me alone, please. I just want to go on vacation.”

Police officer: “Mam’ as you are resisting, you give me no choice. I’ll have to handcuff you and escort you off the plane…”

John - Narrator:

For my wife Jane and I, that was the most embarrassing day of our lives by far. It was awful! I cringe when I think of Jane being dragged off the plane, with passengers hurling abuse as we went. She was a pitiful sight, tears streaming down her cheeks, hands cuffed behind her back, humiliation written all over her face.

All because she was just too fat.`,
    docUrl: 'https://docs.google.com/document/d/1gktpwcfYt4iYMLoxkEooLsQJfoqTvEAYrcWC5iI2V9g/view',
    result: { text: '300% return on ad spend', source: 'Client testimonial, below' },
    testimonialId: '4',
  },
  {
    slug: 'coffee-slimmer-pro',
    title: 'Coffee Slimmer Pro',
    format: 'VSL',
    market: 'Weight-loss supplement, sold on ClickBank to cold traffic',
    awareness: 'Problem-aware, has tried diets and exercise, sceptical of the next miracle',
    angle: 'A child says out loud what the reader fears everyone thinks. The ex-Marine narrator earns trust by being ordinary, and the 30-second-a-day promise is in the headline before the story starts.',
    excerpt: `Hidden Jungle Potion Melts 56 LBS of Fat

(Takes Just 30 seconds a day)

A young voice yelled, “Mommy, NO!!!”

I turned and saw our son Tommy standing, glaring at my wife, Sandra...horrified. He had witnessed everything. Tears welled up in his eyes, humiliation written all over his face.

“Oh, Mommy!” he cried. “Why do you have to be so...FAT!”

With everyone at the party staring, that was the last straw—the final blow. Sandra’s eyes glazed over as she realized she’d ruined the 4th of July—for me, for Tommy...and everyone. It was too much to take, and she collapsed heavily to the floor, unconscious.

I yelled, “Quick! Somebody Call 911…NOW!”

“Hurry, or it will be too late…”

Hi...my name is Ross Robinson, and I’m an ex-Marine from Cedar Falls, Iowa. I’m just a regular guy, but I have an extraordinary story to tell. Honestly, you’ll be amazed when you hear what I have to share. As you’ll soon see, Sandra survived, thank God. And thanks to a strange twist of fate, that disastrous day changed everything.

Because of what happened next, Sandra was never going to be humiliated again—ever! In fact, a wonderful new chapter in her life was just beginning.`,
    docUrl: 'https://docs.google.com/document/d/15Q-4Dw_6UHEnvoNJ2AjcxgMx0GcrNJ33FFqUsv65_50/view',
    result: { text: '$1.4M in sales in the first six months', source: 'Client-reported' },
  },
  {
    slug: 'dynamic-brain',
    title: 'Dynamic Brain',
    format: 'TSL',
    market: 'Nootropic supplement for Stonehenge Health, sold direct',
    awareness: 'Readers over 50 noticing the first lapses, solution-aware, wary of single-ingredient pills',
    angle: 'Name the condition doctors use, then make the one-ingredient competitors the problem. The car-service analogy lets a 40-compound formula feel like common sense instead of a kitchen sink.',
    excerpt: `Think Smarter: Discover the Proven All-in-One Solution for Sharper Memory, Enhanced Focus & Improved Mental Energy

Banish Brain Fog, Confusion, ‘Senior Moments’ & Memory Loss!

Restore Your Brain to Optimal Health the Easy Way

As we age, the gradual mental decline becomes a real concern. Maybe you’re finding it harder to concentrate. Perhaps you forget appointments, where you left your keys—or even the names of your loved ones.

Even minor memory lapses can be scary, especially as they suggest bigger problems further down the road. With each new day, you are at greater risk of suffering from brain fog, confusion, and loss of focus.

It’s a problem that doctors call Mild Cognitive Decline. But when you suffer from this condition, it doesn’t seem mild at all. In fact, it’s a serious problem that threatens your health and your future happiness.

Left unchecked, the prognosis doesn’t look good. The decline in brain health is likely to continue, leading to further mental chaos—and then perhaps to more serious brain conditions.

That’s an alarming prospect. But fortunately, it doesn’t have to be that way. Thanks to today’s innovative supplement science, you can replenish your brain health and regain your confidence. Better still, the solution is simple and easy to implement.`,
    docUrl: 'https://docs.google.com/document/d/1QRAtR5FMZ4sqLkQt4LkzfF_1NcoLCqO8EP_efBWk1yo/view',
    result: { text: '$2.1M in sales in the first 90 days', source: 'Client-reported' },
  },
  {
    slug: 'gluco6',
    title: 'Gluco6',
    format: 'VSL',
    market: 'Blood-sugar supplement, sold to cold traffic',
    awareness: 'Newly diagnosed or pre-diabetic, problem-aware, frightened by what the doctor said',
    angle: 'Start inside the consultation the reader has already had or dreads. The grandson gives the stakes a face, and the betrayal by a trusted doctor turns fear into the reason to keep watching.',
    excerpt: `“The bad news is you’re a full-blown diabetic now. You’ll have to inject yourself four times a day for the rest of your life.”

For the doctor, it was just another patient diagnosis. But for me, it felt like a death sentence. My life had just changed forever, and not in a good way.

As the doctor continued, my hopes for a healthy retirement drained away.

“Of course, you’ll need extra medications, too. And you must take them every day, exactly as directed. Otherwise, you could go blind, have your legs amputated, or suffer an early death.”

Each word he spoke struck another blow to my dreams. I’d planned to spend my golden years having fun with Ethan, my young grandson. I wanted us to shoot hoops, go fishing, and watch Super Bowls together.

Instead, I was looking down the barrel of a gun, staring sickness and death in the face. Next time Ethan came to see me, it could be at my hospital bedside…

…maybe even my graveside…

Yet as strange as it may sound, I thank God every day that happened.

Because it led me to uncover a leading cause of erratic blood sugar levels, insatiable carb cravings, and stubborn body fat.

And find a simple Sudanese secret that reversed my diabetes symptoms…

…rocketed my energy levels…

…and burned fat faster than I thought possible.

Yet my own doctor, who I trusted, never mentioned ANY of this. And your doctor is likely keeping the truth from you, too.

So it's vital you hear this.`,
    docUrl: 'https://docs.google.com/document/d/1--Nn_5yi62Xl8MS0GhxnqNDfUuzBfCfqflr7wV9OlQ8/view',
  },
  {
    slug: 'supernus',
    title: 'Supernus Business & Law Center',
    format: 'TSL',
    market: 'Legal and business-structure masterclass for new entrepreneurs',
    awareness: 'Unaware of the risk. They are excited about starting a business, not worried about losing it',
    angle: 'A true crime story carries a dry subject. The headline promises a method, the first line tells the reader to stop, and the founder\'s own near-death sets up every objection the course answers.',
    excerpt: `How Narrowly Escaping a Cold-Blooded Killer (and Being Swindled Out of My $12 Million Fortune) Taught Me the ‘4 Crucial Cornerstones of Success'

...plus how to leverage these to make more, keep more and be more without risking everything

Dear Fellow Entrepreneur

If you’re about to start a business or form a company, I urge you to STOP!

...or at least pause for a moment while you hear my shocking and cautionary tale. Because when you understand the horrors I went through, you’ll see how important it is to launch your business the right way.

My story is stunning, yet absolutely true - and you don’t have to take my word for that. Google my name, Jedediah McClure, and you can check the details for yourself.

This tale is a rollercoaster ride that begins in the cash-rich bonanza of the North Dakota oil-boom. It ends a few years later with a ruthless killer jailed on multiple counts of murder.

And it’s only by the grace of God that my life was spared.

As my story unfolds, you’ll see how setting up my business the wrong way cost me everything. More importantly, you’ll discover how to avoid making the same mistakes—and how to put yourself on track for unstoppable success.

So hitch a ride with me to the Indian Reservation on the Dakota Prairie where my terrifying dance with death unfolded…`,
    docUrl: 'https://docs.google.com/document/d/153ICZuipLSMgfjH11K20BrFWsw6o9DVKGp3xsLpI28o/view',
    result: { text: '$800K in sales in 60 days', source: 'Client-reported' },
  },
  {
    slug: 'anna-frummerin-follow-up',
    title: 'Webinar Follow-Up Sequence',
    format: 'Email',
    market: 'Coaching offer. Seven emails to people who watched the webinar and did not book a call',
    awareness: 'Solution-aware and warm, but stalled. They liked the training and have not acted',
    angle: 'Short emails, one job each: get the booking. Subject lines read like a friend, every email ends on the link, and the seventh brings in a second voice so the chase stays human.',
    excerpt: `Email #1

Subject: book your strategy session

Hi Firstname

I’m so glad you were able to join us for my free training, and I hope you were inspired to make big changes.

I love seeing people smile when they realize they really can win big at the game of life. I want to make that happen for you, too. So be sure to book your free strategy session while you still can.

It only takes a moment, and you’ll get a whole hour of my time and expert advice. We’ll work out the best way forward for you and set you on track to become a champion.

See you on the call!

Best wishes

Anna Frummerin

P.S. My calendar is filling up fast, so be sure to book soon.

Email #2

Subject: quick question

Hi Firstname

Just a quick question about your strategy session. Did you book it yet?

I can’t see your name on my calendar, and I don’t want you to miss out. As you learned in our training session, you have a unique opportunity to discover the hidden champion inside you and win big at the game of life.

Remember to book your strategy session, so we can talk things through and start you on the road to success. This is your chance to finally break through and get what you want from life.

Other people are booking now, so secure your call with me while you still can.`,
    docUrl: 'https://docs.google.com/document/d/1KcbZ-6WJaG1XsrkGIO1olIEUxhjCnzIDvHO3G4XsAqo/view',
  },
]
```

Note on the Puradrop excerpt: it runs to about 280 words because the hook is a dialogue scene that cannot be cut mid-exchange without losing the beat. The spec's 150 to 250 is a guide, not a cap. Two stage directions ("Jane Cries", "Sounds of screaming...") are removed and a missing space after "Flight attendant:" is restored; the words are untouched. Note on Coffee Slimmer Pro: the ambulance sound direction and the "[Paramedic's voice:]" label are removed; the paramedic's line stays. Note on Gluco6: the source doc has a stray "N" after "not in a good way." and a bracketed map direction; both are removed, nothing else.

- [ ] **Step 3: Type-check**

Run: `npx tsc --noEmit`
Expected: no output, exit code 0.

- [ ] **Step 4: Commit**

```bash
git add src/app/portfolio/_data/portfolio.ts
git commit -m "feat(portfolio): featured sample data with verbatim excerpts; correct two cards"
git push
```

---

### Task 3: `SampleExhibit` component

**Files:**
- Create: `src/components/blocks/SampleExhibit.tsx`

- [ ] **Step 1: Write the component**

Create `src/components/blocks/SampleExhibit.tsx`:

```tsx
import { Badge } from '@/components/ui/Badge'
import { FadeIn } from '@/components/ui/FadeIn'
import { TestimonialCard } from '@/components/blocks/TestimonialCard'
import { testimonials } from '@/content/testimonials'
import { cn } from '@/lib/utils'
import type { FeaturedSample } from '@/app/portfolio/_data/portfolio'

interface SampleExhibitProps {
  sample: FeaturedSample
  index: number
}

const FORMAT_LABEL: Record<FeaturedSample['format'], string> = {
  VSL: 'Video sales letter',
  TSL: 'Text sales page',
  Email: 'Email sequence',
}

export function SampleExhibit({ sample, index }: SampleExhibitProps) {
  const flip = index % 2 === 1
  const paragraphs = sample.excerpt.split(/\n\s*\n/)
  const testimonial = sample.testimonialId
    ? testimonials.find((t) => t.id === sample.testimonialId)
    : undefined

  return (
    <article
      id={`exhibit-${sample.slug}`}
      className="scroll-mt-28 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-start"
    >
      {/* Brief */}
      <FadeIn className={cn('lg:col-span-5', flip && 'lg:order-2')}>
        <div className="flex items-center gap-3">
          <span className="font-heading text-sm font-bold uppercase tracking-wider text-paper-600">
            Exhibit {index + 1}
          </span>
          <Badge variant="gold">{FORMAT_LABEL[sample.format]}</Badge>
        </div>
        <h3 className="mt-3 font-heading text-2xl sm:text-3xl font-bold text-ink-950">
          {sample.title}
        </h3>
        <dl className="mt-6 space-y-4 font-body text-ink-700">
          <div>
            <dt className="font-heading text-xs font-bold uppercase tracking-wider text-paper-600">The market</dt>
            <dd className="mt-1">{sample.market}</dd>
          </div>
          <div>
            <dt className="font-heading text-xs font-bold uppercase tracking-wider text-paper-600">Where the reader started</dt>
            <dd className="mt-1">{sample.awareness}</dd>
          </div>
          <div>
            <dt className="font-heading text-xs font-bold uppercase tracking-wider text-paper-600">The angle I chose</dt>
            <dd className="mt-1">{sample.angle}</dd>
          </div>
        </dl>
        {sample.result && (
          <p className="mt-6 border-l-2 border-gold-400 pl-4">
            <span className="font-heading text-lg font-bold text-ink-950">{sample.result.text}</span>
            <span className="block text-sm text-paper-600 font-body">{sample.result.source}</span>
          </p>
        )}
        {testimonial && (
          <div className="mt-6">
            <TestimonialCard testimonial={testimonial} />
          </div>
        )}
        <a
          href={sample.docUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1 font-heading text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
        >
          Read the full script
          <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </FadeIn>

      {/* Document frame */}
      <FadeIn delay={120} className={cn('lg:col-span-7', flip && 'lg:order-1')}>
        <div className="relative rounded-xl border border-paper-200 bg-white shadow-sm overflow-hidden">
          <div className="flex items-center justify-between border-b border-paper-200 bg-paper-50 px-5 py-3">
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-paper-600">
              Script excerpt
            </span>
            <span className="font-heading text-xs text-paper-600">Opening, as delivered</span>
          </div>
          <div className="relative max-h-[32rem] overflow-hidden px-6 py-6 sm:px-8 sm:py-8">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={cn(
                  'font-body text-ink-800 leading-relaxed whitespace-pre-line',
                  i > 0 && 'mt-4',
                  i === 0 && 'font-semibold text-ink-950'
                )}
              >
                {p}
              </p>
            ))}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent"
            />
          </div>
        </div>
      </FadeIn>
    </article>
  )
}
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: no output, exit code 0. If `Badge` rejects `variant="gold"`, open `src/components/ui/Badge.tsx`; the variants are `default | gold | dark`, so the prop is valid and the error is elsewhere.

- [ ] **Step 3: Commit**

```bash
git add src/components/blocks/SampleExhibit.tsx
git commit -m "feat(portfolio): SampleExhibit block for on-site script excerpts"
git push
```

---

### Task 4: Rewrite the portfolio page

**Files:**
- Rewrite: `src/app/portfolio/page.tsx`

- [ ] **Step 1: Replace the page**

Overwrite `src/app/portfolio/page.tsx` with:

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { CountUp } from '@/components/ui/CountUp'
import { Button } from '@/components/ui/Button'
import { CTABanner } from '@/components/blocks/CTABanner'
import { FAQAccordion, type FAQItem } from '@/components/blocks/FAQAccordion'
import { TestimonialCard } from '@/components/blocks/TestimonialCard'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { PortfolioGrid } from '@/components/blocks/PortfolioGrid'
import { SampleExhibit } from '@/components/blocks/SampleExhibit'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE_URL, TESTIMONIAL_COUNT } from '@/lib/constants'
import { testimonials } from '@/content/testimonials'
import { portfolioItems, featuredSamples } from './_data/portfolio'

const DRIVE_URL = 'https://drive.google.com/drive/folders/1ivFq-UhqthNnaGhlp6nJOc1G9s7H4iDI'

export const metadata: Metadata = {
  title: 'Copywriting Portfolio: VSL, Sales Page & Email Samples',
  description:
    'Read the opening of six real scripts that sold: VSLs, sales pages and an email sequence by Rob Palmer, with the brief, the angle and the result for each.',
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
}

const STATS = [
  { stat: '$523M+', label: 'Tracked Revenue' },
  { stat: '1,200+', label: 'Projects Delivered' },
  { stat: '8%+', label: 'Avg. Cold Traffic CVR' },
  { stat: '300%+', label: 'ROAS Across Campaigns' },
]

const TESTIMONIAL_IDS = ['5', '38', '15', '16', '22', '26']
const pickedTestimonials = TESTIMONIAL_IDS
  .map((id) => testimonials.find((t) => t.id === id))
  .filter((t): t is NonNullable<typeof t> => Boolean(t))

const FAQS: FAQItem[] = [
  {
    question: 'What do I get if I hire you?',
    answer:
      'The piece you came for, written by me, plus the work that makes it convert: customer research, a short brief that names the angle and the awareness level we are writing to, and the script or page itself with a production note for your editor or designer. For paid-social clients that extends to the full creative programme: angles, hooks, statics, video scripts and landers on a monthly cadence.',
  },
  {
    question: 'How long does a VSL or sales page take?',
    answer:
      'A VSL script or long-form sales page normally takes two to three weeks from brief to final draft, including one round of your edits. Email sequences take about a week. The first few days are research, and I will not skip them to hit a date, because the research is where the angle comes from.',
  },
  {
    question: 'How do we start?',
    answer:
      'Book a free 30-minute strategy call. Tell me about the offer, the traffic and what the current control is doing. I will tell you on the call whether I think I can beat it and how I would go about it. If it is a fit, you get a written quote within 48 hours and a start date.',
  },
  {
    question: 'Who is this not for?',
    answer:
      'Anyone who needs volume over results, or copy by the end of the week. I take on a small number of projects at a time so each one gets the research it needs, and I turn down work that does not fit. If you are testing an unproven offer with no traffic yet, a strategy call is still worth having, but the first job is usually the offer, not the copy.',
  },
]

export default function PortfolioPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Copywriting portfolio: featured samples by Rob Palmer',
    itemListElement: featuredSamples.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'CreativeWork',
        name: s.title,
        genre: s.format === 'Email' ? 'Email sequence' : s.format === 'TSL' ? 'Sales page' : 'Video sales letter',
        author: { '@type': 'Person', name: 'Rob Palmer', url: SITE_URL },
        url: `${SITE_URL}/portfolio#exhibit-${s.slug}`,
      },
    })),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <>
      <JsonLd data={itemListSchema} />
      <JsonLd data={faqSchema} />

      {/* ───────────── 1. Hero ───────────── */}
      <Hero
        variant="page"
        headline="Copy That Sold. Read It Before You Decide."
        subheadline="Below are the openings of six scripts I wrote for paying clients, with the brief I was given, the angle I chose and what happened when they ran. If you were sent here by a search engine or an AI assistant, this page is the whole case. Read the work, then decide whether to talk to me."
        cta={{ label: 'Book a Strategy Call', href: '/call' }}
      >
        <FadeIn immediate delay={300} duration={700}>
          <div className="mt-4">
            <a
              href="#exhibits"
              className="font-heading text-sm font-semibold text-gold-400 underline underline-offset-4 hover:text-gold-300"
            >
              Or skip to the scripts
            </a>
          </div>
        </FadeIn>
      </Hero>
      <Breadcrumbs items={[{ label: 'Portfolio' }]} />

      {/* ───────────── 2. Results strip ───────────── */}
      <Section variant="dark">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
            {STATS.map((item, index) => (
              <FadeIn key={item.label} delay={index * 100}>
                <div className="text-center">
                  <CountUp
                    value={item.stat}
                    className="font-heading text-4xl sm:text-5xl font-bold text-gold-400 tracking-tight"
                  />
                  <div className="mt-2 text-sm font-heading font-medium text-paper-400 uppercase tracking-wide">
                    {item.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* ───────────── 3. Exhibits ───────────── */}
      <Section id="exhibits">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
                Six scripts, with the thinking behind each one
              </h2>
              <p className="mt-3 text-lg text-ink-700 font-body">
                Every excerpt is the real opening, as it ran. The full document is one click away.
              </p>
            </div>
          </FadeIn>
          <div className="space-y-20">
            {featuredSamples.slice(0, 3).map((sample, index) => (
              <SampleExhibit key={sample.slug} sample={sample} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ───────────── 4. Mid-page CTA ───────────── */}
      <CTABanner
        headline="Want this for your offer?"
        subtext="Tell me what the control is doing on a free 30-minute call. I will tell you whether I think I can beat it."
        variant="gold"
      />

      <Section>
        <Container>
          <div className="space-y-20">
            {featuredSamples.slice(3).map((sample, index) => (
              <SampleExhibit key={sample.slug} sample={sample} index={index + 3} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ───────────── 5. Why they worked ───────────── */}
      <Section variant="alt" divider>
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 text-center">
                Why these worked
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="mt-8 space-y-6 text-lg text-ink-700 leading-relaxed font-body">
                <p>
                  None of these scripts started with writing. They started with the customer: what she had already tried, what she said about it in reviews and forums, and which promise she had stopped believing. The angle came out of that research. The words came last.
                </p>
                <p>
                  That research-first process is what I sell now as{' '}
                  <Link href="/services/creative-strategist" className="text-gold-600 underline underline-offset-2 hover:text-gold-700">
                    creative strategy
                  </Link>
                  . For a brand scaling on paid social it means I find the angles, write the hooks, scripts, statics and landers, and keep testing until the account has a stable set of winners. For a single VSL or sales page it means the same research, applied to one piece.
                </p>
                <p>
                  Today I produce the work with a{' '}
                  <Link href="/blog/triple-brain-marketing" className="text-gold-600 underline underline-offset-2 hover:text-gold-700">
                    Triple Brain
                  </Link>{' '}
                  workflow: my own judgement from 40 years of direct response, Claude Code running my custom copywriting skills, and a 1,239-file vault of frameworks and tested copy. The scripts above predate that stack. The ones I write now go through it.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ───────────── 6. Testimonials ───────────── */}
      <Section>
        <Container>
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
                What clients said after the copy ran
              </h2>
              <p className="mt-3 text-lg text-ink-700 font-body">
                Six of the {TESTIMONIAL_COUNT} on the{' '}
                <Link href="/testimonials" className="text-gold-600 underline underline-offset-2 hover:text-gold-700">
                  testimonials page
                </Link>
                .
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pickedTestimonials.map((t, index) => (
              <FadeIn key={t.id} delay={index * 80} className="h-full">
                <TestimonialCard testimonial={t} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* ───────────── 7. Hiring FAQ ───────────── */}
      <Section variant="alt" divider>
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 text-center mb-8">
                Before you book
              </h2>
            </FadeIn>
            <FAQAccordion items={FAQS} />
            <FadeIn delay={150}>
              <div className="mt-10 text-center">
                <Button href="/call" size="lg">Book a Strategy Call</Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ───────────── 8. More samples ───────────── */}
      <Section divider>
        <Container>
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
                More samples
              </h2>
              <p className="mt-3 text-lg text-ink-700 font-body">
                A cross-section of the work across health, finance, SaaS and direct-response verticals.
              </p>
            </div>
          </FadeIn>
          <PortfolioGrid items={portfolioItems} />
          <FadeIn delay={100}>
            <p className="mt-10 text-center text-sm text-paper-600 font-body">
              Everything, including ad campaigns and funnels, is in{' '}
              <a
                href={DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-600 underline underline-offset-2 hover:text-gold-700"
              >
                my portfolio folder
              </a>
              .
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* ───────────── 9. Closing CTA ───────────── */}
      <CTABanner />
    </>
  )
}
```

- [ ] **Step 2: Make the `Hero` page variant render `children`**

The `page` variant (the last `return` in `src/components/blocks/Hero.tsx`) accepts `children` in its props but never renders them. Inside the `max-w-3xl` div, directly after the closing `)}` of the `{cta && (...)}` block, add:

```tsx
          {children}
```

The `home` and `minimal` variants are not touched.

- [ ] **Step 3: Confirm `Section` accepts `id`**

`src/components/ui/Section.tsx` already destructures `id` (`{ children, className, variant = 'default', id, divider = false }`). Confirm the `<section>` element receives `id={id}`. If it does not, add `id={id}` to the element.

- [ ] **Step 4: Type-check and lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: no type errors, no lint errors. If lint flags the `FAQItem` type import, change it to `import { FAQAccordion } from '@/components/blocks/FAQAccordion'` plus `import type { FAQItem } from '@/components/blocks/FAQAccordion'`.

- [ ] **Step 5: Start the dev server and run the smoke check against it**

Run in one terminal: `npm run dev`
Run in another: `node scripts/smoke-repositioning.mjs --base http://localhost:3000 --slice 6`
Expected: all six checks print `✓`, exit code 0. If `/portfolio` still fails on `h1`, the `Hero` headline string does not match the regex in Task 1 character for character; fix the page, not the test.

- [ ] **Step 6: Commit**

```bash
git add src/app/portfolio/page.tsx src/components/blocks/Hero.tsx src/components/ui/Section.tsx
git commit -m "feat(portfolio): proof-led hybrid page with six on-site script exhibits"
git push
```

---

### Task 5: Copy review pass

**Files:**
- Modify: `src/app/portfolio/page.tsx` (copy only)
- Modify: `src/app/portfolio/_data/portfolio.ts` (brief fields only, never excerpts)

- [ ] **Step 1: Run the copychief review on the rendered page copy**

Collect the page's own copy (hero, exhibit briefs, the "Why these worked" paragraphs, FAQ answers, CTA subtext, the "More samples" intro) into one block and run the `copychief` skill on it with this instruction: "Hybrid portfolio and sales page for robpalmer.com. First-person. No prices, no stated scarcity, no CA Labs. The excerpts are verbatim client work and are out of scope. Review the surrounding copy for lifts."

- [ ] **Step 2: Apply the agreed lifts**

Apply the lifts that do not break a rule in "Rules that bind every task". Do not touch any `excerpt` string. Keep the H1 and `metadata.title` exactly as in Task 4, because the smoke check pins them; if copychief proposes a stronger H1, record it in the commit message as a follow-up rather than changing it here.

- [ ] **Step 3: Re-run the smoke check against the dev server**

Run: `node scripts/smoke-repositioning.mjs --base http://localhost:3000 --slice 6`
Expected: six `✓`, exit code 0.

- [ ] **Step 4: Commit**

```bash
git add src/app/portfolio/page.tsx src/app/portfolio/_data/portfolio.ts
git commit -m "fix(portfolio): copychief lifts on the hybrid page copy"
git push
```

---

### Task 6: Browser review, build, deploy

**Files:**
- Modify: `docs/seo/2026-10-repositioning/README.md`

- [ ] **Step 1: Review the layout in the browser at two widths**

With `npm run dev` running, open `http://localhost:3000/portfolio` with Playwright (`mcp__playwright__browser_navigate`), resize to 390×844 and take a full-page screenshot, then resize to 1280×900 and take another. Check: the exhibit brief and document frame stack on mobile with the brief first; on desktop exhibits 2, 4 and 6 are flipped; the excerpt frame fades at the bottom; the hero's secondary link sits under the button; no horizontal scroll at 390px. Fix any layout problem in `SampleExhibit.tsx` and re-screenshot.

- [ ] **Step 2: Stop the dev server, then build**

Run: `pgrep -f "next dev" && echo "STOP THE DEV SERVER FIRST" || npm run build`
Expected: the build completes with `✓ Compiled successfully` and the route list includes `/portfolio`. If `.next` serves stale CSS, run `rm -rf .next` and build again.

- [ ] **Step 3: Record the measurement baseline**

Append to `docs/seo/2026-10-repositioning/README.md`:

```markdown
## Portfolio hybrid page — shipped 2026-10-21

Spec: `docs/superpowers/specs/2026-10-21-portfolio-hybrid-page-design.md`.
GA4 baseline (property 266179141, 90 days to 2026-10-21): ChatGPT → `/portfolio`
landing sessions 71, key events 10; outbound clicks to the Drive folder 259.
Check at +4 weeks (2026-11-18): key events from ChatGPT-landing-on-`/portfolio`
sessions, and `click` events on `/portfolio` by `linkUrl` (docs.google.com per
exhibit vs the Drive folder). Smoke: `npm run smoke -- --slice 6`.
```

- [ ] **Step 4: Commit**

```bash
git add docs/seo/2026-10-repositioning/README.md src/components/blocks/SampleExhibit.tsx
git commit -m "docs(seo): portfolio hybrid page baseline and +4-week check"
git push
```

- [ ] **Step 5: Deploy and verify live**

Run: `vercel deploy --prod --yes`
Expected: output ends with `Aliased: https://robpalmer.com`.

Run: `node scripts/smoke-repositioning.mjs --slice 6`
Expected: six `✓` against the live site, exit code 0.

Run: `curl -s https://robpalmer.com/portfolio | grep -o "Read the full [a-z ]*" | sort | uniq -c`
Expected: `6 Read the full script`, `4 Read the full sales page`, `2 Read the full emails`, plus a larger count for the bare prefix `Read the full ` that comes from the capitalised aria-labels. Every count is doubled because the Next.js RSC flight payload repeats the rendered text in the page source; 6/4/2 means 3/2/1 links.
