# Phase 1 — Booking Last Mile Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make `/call` the canonical booking endpoint and remove every verified friction point between "visitor decides to book" and "call on the calendar."

**Architecture:** Pure copy/config/markup changes across existing Next.js 15 App Router pages and components — no new routes, no new dependencies. One shared-default change (CTABanner) repoints ~167 pages at once; the rest is targeted edits plus one scripted MDX sweep.

**Tech Stack:** Next.js 15, React 19, Tailwind 4, react-calendly, MDX blog content.

**Spec:** docs/superpowers/specs/2026-06-11-phase1-booking-last-mile-design.md

**Repo facts the engineer must know:**
- There is **no test suite** in this repo (no test script in package.json). Verification is: `npm run build`, grep gates, and dev-server browser review. Do not add a test framework (YAGNI).
- **NEVER run `npm run build` while a dev server is running** — it corrupts `.next/`. Check first: `pgrep -f "next dev"`. If found, either stop it or skip the build until it's stopped.
- Committing and pushing `main` does NOT deploy (vercel.json disables it). Deploys are separate and explicit — do not deploy.
- House voice rules: body copy is first person ("I/my/you"); scarcity is implied via capacity signals, never stated; metaTitles lead with the page keyword.
- The root layout (`src/app/layout.tsx:28`) has title template `'%s | Rob Palmer'` — page titles must NOT include their own "| Rob Palmer" suffix.
- `<CTABanner>` has **zero** explicit `buttonHref` usages anywhere in src — every instance inherits the defaults (verified 2026-06-11). Changing the default changes them all.

---

### Task 1: Calendly target + constants cleanup

**Files:**
- Modify: `src/lib/constants.ts:7-10`

- [ ] **Step 1: Update CALENDLY_URL and delete CONTACT_PHONE**

In `src/lib/constants.ts`, change lines 7–10 from:

```ts
export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/rob-palmer-call'
export const CONTACT_EMAIL = 'rob@robpalmer.com'
export const CONTACT_PHONE = '(415) 854-9589'
```

to:

```ts
export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  'https://calendly.com/rob-palmer-call/30min'
export const CONTACT_EMAIL = 'rob@robpalmer.com'
```

(`https://calendly.com/rob-palmer-call/30min` verified live HTTP 200 on 2026-06-11. `CONTACT_PHONE` has zero importers — verified — so deleting it breaks nothing.)

- [ ] **Step 2: Check NEXT_PUBLIC_CALENDLY_URL is not set in env files**

Run: `grep -rn "NEXT_PUBLIC_CALENDLY_URL" .env* 2>/dev/null; echo "exit: $?"`
Expected: no matches (exit: 1). If it IS set somewhere, update that value to the `/30min` URL too, since env overrides the fallback.

- [ ] **Step 3: Verify no remaining CONTACT_PHONE references**

Run: `grep -rn "CONTACT_PHONE" src/`
Expected: no output.

- [ ] **Step 4: Commit**

```bash
git add src/lib/constants.ts
git commit -m "feat(booking): point Calendly at the 30min event type, drop unused CONTACT_PHONE"
```

---

### Task 2: Hide the Calendly cookie banner

**Files:**
- Modify: `src/components/integrations/CalendlyEmbed.tsx`

- [ ] **Step 1: Add pageSettings to InlineWidget**

In `src/components/integrations/CalendlyEmbed.tsx`, change the return block from:

```tsx
  return (
    <div className="min-h-[660px]">
      <InlineWidget
        url={url || CALENDLY_URL}
        styles={{ height: '660px' }}
      />
    </div>
  )
```

to:

```tsx
  return (
    <div className="min-h-[660px]">
      <InlineWidget
        url={url || CALENDLY_URL}
        styles={{ height: '660px' }}
        pageSettings={{ hideGdprBanner: true }}
      />
    </div>
  )
```

- [ ] **Step 2: Commit**

```bash
git add src/components/integrations/CalendlyEmbed.tsx
git commit -m "feat(booking): hide Calendly GDPR banner in embed"
```

(Visual confirmation that the banner is actually gone happens in Task 10 — Calendly's account-level cookie setting can override this flag; if the banner persists in the browser check, Rob must flip the setting in the Calendly dashboard.)

---

### Task 3: /call page — title fix + capacity trio (and /call/confirmed title)

**Files:**
- Modify: `src/app/call/page.tsx`
- Modify: `src/app/call/confirmed/page.tsx:12`

- [ ] **Step 1: Fix the doubled titles**

In `src/app/call/page.tsx:12` change:

```ts
  title: 'Book a Free Strategy Call | Rob Palmer',
```

to:

```ts
  title: 'Book a Free Strategy Call',
```

In `src/app/call/confirmed/page.tsx:12` change:

```ts
  title: 'Call Confirmed | Rob Palmer',
```

to:

```ts
  title: 'Call Confirmed',
```

(The layout template appends "| Rob Palmer"; these pages currently render "… | Rob Palmer | Rob Palmer" in production — verified live.)

- [ ] **Step 2: Add the capacity trio to the left column**

In `src/app/call/page.tsx`, directly after the closing `</p>` of the "No pitch deck. No pressure…" paragraph (line 77) and before `</FadeIn>` (line 78), insert:

```tsx
              <div className="mt-8 pt-6 border-t border-paper-200">
                <h3 className="font-heading text-lg font-bold text-ink-950 mb-4">
                  Before You Book
                </h3>
                <ul className="space-y-3 text-ink-700 font-body">
                  <li>
                    <strong className="text-ink-950">Capacity.</strong>{' '}
                    I take a small number of new engagements each quarter.
                    It&apos;s how the work stays good.
                  </li>
                  <li>
                    <strong className="text-ink-950">Timeline.</strong>{' '}
                    Most kickoffs happen within two weeks of a strategy call.
                  </li>
                  <li>
                    <strong className="text-ink-950">Fit.</strong>{' '}
                    Engagements typically start at $10K. If yours is below,
                    I&apos;ll refer you to a writer in my network &mdash; no
                    finder&apos;s fee, just an honest match.
                  </li>
                </ul>
              </div>
```

(This wording matches the home-page trio at `src/app/page.tsx:292-327` exactly, per spec. Scarcity implied, never stated.)

- [ ] **Step 3: Commit**

```bash
git add src/app/call/page.tsx src/app/call/confirmed/page.tsx
git commit -m "feat(call): capacity trio at point of booking + fix doubled titles"
```

---

### Task 4: Add /call to the sitemap

**Files:**
- Modify: `src/app/sitemap.ts` (staticPages array, lines 11–35)

- [ ] **Step 1: Add the entry**

In `src/app/sitemap.ts`, in the `staticPages` array, directly after the `/contact` entry (`{ url: \`${BASE_URL}/contact\`, … }`), add:

```ts
    { url: `${BASE_URL}/call`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
```

- [ ] **Step 2: Commit**

```bash
git add src/app/sitemap.ts
git commit -m "feat(seo): add /call to sitemap"
```

---

### Task 5: CTABanner defaults → /call + standardized label

**Files:**
- Modify: `src/components/blocks/CTABanner.tsx:21-22`

- [ ] **Step 1: Change the defaults**

In `src/components/blocks/CTABanner.tsx`, change:

```tsx
  buttonText = 'Book a Call',
  buttonHref = '/contact',
```

to:

```tsx
  buttonText = 'Book a Strategy Call',
  buttonHref = '/call',
```

- [ ] **Step 2: Confirm no explicit buttonHref overrides exist**

Run: `grep -rn "buttonHref" src/app src/components --include="*.tsx" | grep -v "components/blocks/CTABanner"`
Expected: no output. (This means the default change repoints the mid + closing banners on all 12 service pages, 6 vertical pages, and all 149 blog posts in one edit. If anything DOES appear, repoint those instances to `/call` individually.)

- [ ] **Step 3: Commit**

```bash
git add src/components/blocks/CTABanner.tsx
git commit -m "feat(booking): CTABanner defaults to /call with standardized label"
```

---

### Task 6: Header + MobileNav CTAs (desktop repoint, new mobile compact CTA)

**Files:**
- Modify: `src/components/layout/Header.tsx:170-172, 176`
- Modify: `src/components/layout/MobileNav.tsx:116-118`

- [ ] **Step 1: Repoint the desktop header CTA**

In `src/components/layout/Header.tsx:170-172` change:

```tsx
            <Button href="/contact" size="sm">
              Book a Call
            </Button>
```

to:

```tsx
            <Button href="/call" size="sm">
              Book a Strategy Call
            </Button>
```

- [ ] **Step 2: Add the mobile compact CTA beside the hamburger**

In `src/components/layout/Header.tsx:176` the mobile menu currently renders as a direct child of the `justify-between` nav:

```tsx
          {/* Mobile menu (button + sliding nav panel) */}
          <MobileMenu />
```

Replace with:

```tsx
          {/* Mobile: compact booking CTA + menu */}
          <div className="flex items-center gap-3 lg:hidden">
            <Button href="/call" size="sm">
              Book a Call
            </Button>
            <MobileMenu />
          </div>
```

(The desktop nav div at line 136 is `hidden lg:flex`, so on mobile the nav has exactly two visible children: logo and this group — `justify-between` keeps them at the edges. The compact "Book a Call" label on mobile is the one permitted deviation from the standardized "Book a Strategy Call".)

- [ ] **Step 3: Repoint the MobileNav panel CTA**

In `src/components/layout/MobileNav.tsx:116-118` change:

```tsx
          <Button href="/contact" className="w-full" onClick={onClose}>
            Book a Call
          </Button>
```

to:

```tsx
          <Button href="/call" className="w-full" onClick={onClose}>
            Book a Strategy Call
          </Button>
```

- [ ] **Step 4: Check MobileMenu doesn't double-hide**

Run: `grep -n "lg:hidden" src/components/layout/MobileMenu.tsx`
Expected: if MobileMenu's trigger already carries `lg:hidden`, that's fine (redundant inside the new wrapper, harmless). No change needed either way — this step is awareness only.

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/Header.tsx src/components/layout/MobileNav.tsx
git commit -m "feat(booking): header/mobile-nav CTAs to /call + mobile compact booking button"
```

---

### Task 7: Footer — tagline + booking link

**Files:**
- Modify: `src/components/layout/Footer.tsx` (brand tagline ~line 20-23; "Book a Strategy Call" link ~line 57)

- [ ] **Step 1: Replace the tagline**

In `src/components/layout/Footer.tsx`, change:

```tsx
            <p className="mt-4 text-base lg:text-[1rem] leading-relaxed text-paper-300">
              Veteran direct-response copywriter specializing in VSLs, TSLs,
              email sequences, and sales funnels. AI-powered. Battle-tested.
            </p>
```

to:

```tsx
            <p className="mt-4 text-base lg:text-[1rem] leading-relaxed text-paper-300">
              Veteran direct-response copywriter. Triple Brain Marketing: 40+
              years of craft, Claude Code with custom copywriting skills, and a
              1,239-file copywriting vault &mdash; behind $523M+ in tracked
              results.
            </p>
```

(The 1,239-file figure is the site's existing precise number — used in the home FAQ and AI Advantage section. Do not write 1,200 here.)

- [ ] **Step 2: Repoint the footer booking link**

In the "Get in Touch" column, change the `Link` with text "Book a Strategy Call" from `href="/contact"` to `href="/call"`. Leave the "Contact" link in the Navigation column pointing at `/contact` — that one is deliberately general-inquiries.

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat(footer): named-mechanism tagline + booking link to /call"
```

---

### Task 8: Home page — hero CTA + FAQ answer

**Files:**
- Modify: `src/app/page.tsx` (hero `cta` ~line 82; FAQ "How do I get started?" answer ~line 61)

- [ ] **Step 1: Repoint the hero CTA**

Change:

```tsx
        cta={{ label: 'Book a Strategy Call', href: '/contact' }}
```

to:

```tsx
        cta={{ label: 'Book a Strategy Call', href: '/call' }}
```

- [ ] **Step 2: Reword the getting-started FAQ**

In the `homepageFaqs` array, change the "How do I get started?" answer from:

```ts
  { question: 'How do I get started?', answer: 'Book a free strategy call through my contact page. We\'ll discuss your project, goals, and timeline. If we\'re a good fit, I\'ll send you a fixed-price proposal within 48 hours. No pressure, no obligation.' },
```

to:

```ts
  { question: 'How do I get started?', answer: 'Book a free strategy call — the calendar is at robpalmer.com/call. We\'ll discuss your project, goals, and timeline. If we\'re a good fit, I\'ll send you a fixed-price proposal within 48 hours. No pressure, no obligation.' },
```

(FAQAccordion renders answers as plain text — no HTML links possible — and the FAQ JSON-LD is generated from this same array, so it updates automatically.)

- [ ] **Step 3: Check for any other /contact hrefs on the home page**

Run: `grep -n '"/contact"' src/app/page.tsx`
Expected: no output. If any booking-intent instance appears, repoint it to `/call`.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat(home): hero CTA and getting-started FAQ point at /call"
```

---

### Task 9: Verticals heroCta hrefs + template fallback

**Files:**
- Modify: `src/app/verticals/_data/verticals.ts:194, 377, 555, 740, 919, 1099`
- Modify: `src/app/verticals/[slug]/page.tsx:106`

- [ ] **Step 1: Repoint all six heroCta hrefs**

Run this exact replacement (all six entries are identical in shape, labels differ):

```bash
cd /Users/robpalmer/dev/robpalmer-site
perl -pi -e "s{(heroCta: \{ label: '[^']+', href: ')/contact(' \})}{\$1/call\$2}g" src/app/verticals/_data/verticals.ts
```

Then verify: `grep -n "heroCta" src/app/verticals/_data/verticals.ts`
Expected: 6 lines, all ending `href: '/call' }`, labels unchanged ("Audit my supplement funnel", etc.).

- [ ] **Step 2: Update the template fallback**

In `src/app/verticals/[slug]/page.tsx:106` change:

```tsx
        cta={vertical.heroCta ?? { label: 'Book a Call', href: '/contact' }}
```

to:

```tsx
        cta={vertical.heroCta ?? { label: 'Book a Strategy Call', href: '/call' }}
```

- [ ] **Step 3: Check the service template hero for the same pattern**

Run: `grep -n "/contact" 'src/app/services/[slug]/page.tsx'`
Expected: if the service Hero cta references `/contact` in any quote style (audit cited line ~103), apply the same change: label `'Book a Strategy Call'`, href `'/call'`. If no output, nothing to do.

- [ ] **Step 4: Commit**

```bash
git add src/app/verticals/_data/verticals.ts 'src/app/verticals/[slug]/page.tsx' 'src/app/services/[slug]/page.tsx'
git commit -m "feat(booking): vertical/service hero CTAs to /call"
```

---

### Task 10: Closing banners get explicit control-beater copy

**Files:**
- Modify: `src/app/services/[slug]/page.tsx:610`
- Modify: `src/app/verticals/[slug]/page.tsx:610`

- [ ] **Step 1: Replace both bare closing banners**

In BOTH files, line 610 currently reads:

```tsx
      <CTABanner />
```

Replace (identically in both files) with:

```tsx
      <CTABanner
        headline="Ready to beat your control?"
        subtext="Book a free strategy call — 30 minutes, straight answers, and a clear next step."
        buttonText="Book a Strategy Call"
        buttonHref="/call"
      />
```

(This is the highest-intent scroll position on every service/vertical page — post-FAQ — and previously rendered the generic "Ready to scale your conversions?" default. The mid-page gold banners at lines ~391/394 already use per-page `midCta` copy and inherit the new `/call` default from Task 5 — leave them alone.)

- [ ] **Step 2: Commit**

```bash
git add 'src/app/services/[slug]/page.tsx' 'src/app/verticals/[slug]/page.tsx'
git commit -m "feat(services,verticals): control-beater closing banner to /call"
```

---

### Task 11: /contact demotion — general-inquiries page

**Files:**
- Modify: `src/app/contact/page.tsx` (full restructure)

- [ ] **Step 1: Rewrite the page**

Replace the ENTIRE contents of `src/app/contact/page.tsx` with:

```tsx
import type { Metadata } from 'next'
import Image from 'next/image'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { Button } from '@/components/ui/Button'
import { ContactForm } from '@/components/blocks/ContactForm'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SITE_URL, CONTACT_EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact — General Inquiries',
  description:
    'Contact Rob Palmer for general inquiries — or book a free strategy call to discuss your direct-response copywriting project.',
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
}

export default function ContactPage() {
  return (
    <>
      <Hero
        variant="page"
        headline="Get in Touch"
        subheadline="General inquiries, partnerships, press — anything that isn't a project brief. If you want to talk about your funnel, the fastest route is a strategy call."
      />
      <Breadcrumbs items={[{ label: 'Contact' }]} />

      {/* Booking route — one click to the calendar */}
      <Section>
        <Container>
          <FadeIn>
            <div className="max-w-2xl mx-auto rounded-xl border border-gold-200 bg-gold-50 p-8 sm:p-10 text-center">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 mb-3">
                Here to talk about your copy?
              </h2>
              <p className="text-ink-700 font-body mb-6">
                Book your free strategy call &mdash; 30 minutes, zero
                obligation. You&apos;ll walk away with a clear picture of
                what&apos;s working, what&apos;s not, and what to do next.
              </p>
              <Button href="/call" size="lg">
                Book a Strategy Call
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Contact Form — the page's primary action */}
      <Section className="bg-paper-100" divider>
        <Container>
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 mb-3 text-center">
                Send a Message
              </h2>
              <p className="text-ink-700 font-body text-center mb-10">
                Drop me a message and I&apos;ll get back to you within 24 hours.
              </p>
            </FadeIn>
            <FadeIn delay={150}>
              <ContactForm />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Business Verification */}
      <Section divider>
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <FadeIn>
              <Image
                src="/images/headshots/rob-palmer-clean.png"
                alt="Robert Palmer"
                width={120}
                height={120}
                sizes="120px"
                className="w-30 h-30 rounded-full object-cover ring-2 ring-gold-400/20 mx-auto mb-6"
              />
              <h2 className="font-heading text-2xl font-bold text-ink-950 mb-4">
                Business Verification
              </h2>
              <dl className="space-y-2 text-ink-700 font-body text-lg">
                <div>
                  <dt className="font-semibold text-ink-950 inline">Name: </dt>
                  <dd className="inline">Robert Palmer</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink-950 inline">Email: </dt>
                  <dd className="inline">{CONTACT_EMAIL}</dd>
                </div>
              </dl>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  )
}
```

What changed and why (for the reviewer):
- Calendly embed removed — `/call` is now the only calendar (spec §2). The gold booking card up top keeps anyone landing here with booking intent one click away.
- "Not ready for a call? No problem…" defer line removed; the form is the page's primary action now, so the framing flips.
- "Who This Call Is For" section removed — the call-qualification content lives on `/call` (Task 3 trio).
- Verification block: invalid phone `+612958415182` deleted; email now renders `CONTACT_EMAIL` (`rob@robpalmer.com`) instead of the contradictory hardcoded `rob@gofreelance.com`.
- Title no longer doubles the brand suffix and leads with the page keyword ("Contact").

- [ ] **Step 2: Verify nothing else imported the removed pieces from this page**

Run: `grep -rn "CalendlyEmbed" src/app/contact/`
Expected: no output.

- [ ] **Step 3: Commit**

```bash
git add src/app/contact/page.tsx
git commit -m "feat(contact): demote to general inquiries — booking card to /call, form primary, verification block fixed"
```

---

### Task 12: Small copy fixes — 40+ stat, Justin Goff credential

**Files:**
- Modify: `src/app/case-studies/page.tsx:40`
- Modify: `src/app/page.tsx:142`
- Modify: `src/content/testimonials.ts:26`

- [ ] **Step 1: Fix the years-of-experience stat**

In `src/app/case-studies/page.tsx:40` change:

```tsx
              { stat: '30+', label: 'Years of Experience' },
```

to:

```tsx
              { stat: '40+', label: 'Years of Experience' },
```

- [ ] **Step 2: Upgrade Justin Goff's credential (both places)**

In `src/app/page.tsx:142` change:

```tsx
                  <p className="text-sm text-paper-600 font-body">Direct Marketer</p>
```

to:

```tsx
                  <p className="text-sm text-paper-600 font-body">Co-founder, Copy Accelerator</p>
```

In `src/content/testimonials.ts:26` change:

```ts
    title: 'Direct Marketer',
```

to:

```ts
    title: 'Co-founder, Copy Accelerator',
```

(Approved by Rob at spec review 2026-06-11.)

- [ ] **Step 3: Commit**

```bash
git add src/app/case-studies/page.tsx src/app/page.tsx src/content/testimonials.ts
git commit -m "fix(copy): 40+ years on case-studies hub; Justin Goff credential"
```

---

### Task 13: Button focus-visible ring

**Files:**
- Modify: `src/components/ui/Button.tsx` (baseClasses, ~line 44)

- [ ] **Step 1: Add focus-visible classes**

In `src/components/ui/Button.tsx`, the base classes currently start:

```ts
  const baseClasses = cn(
    'inline-flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer',
```

Change that first string to:

```ts
    'inline-flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600',
```

(gold-600 reads against white, paper, ink-950, and gold-100 banner backgrounds; `outline-offset-2` puts the ring on the background, not the fill. The browser check in Task 10/15 confirms visibility on the gold primary button specifically — if it's too subtle there, switch to `focus-visible:outline-ink-950` on the `primary` variant string only.)

- [ ] **Step 2: Commit**

```bash
git add src/components/ui/Button.tsx
git commit -m "feat(a11y): visible focus ring on Button (WCAG 2.4.7)"
```

---

### Task 14: Blog sweep — booking-intent links → /call

**Files:**
- Modify: ~80 files under `src/content/blog/*.mdx` (scripted)
- Create (scratch, not committed): `/tmp/booking-link-sweep.mjs`

- [ ] **Step 1: Write the sweep script**

Create `/tmp/booking-link-sweep.mjs`:

```js
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const dir = '/Users/robpalmer/dev/robpalmer-site/src/content/blog'
// Booking intent = anchor text contains "book…call" or "strategy call".
// Generic anchors (let's talk / get in touch / reach out) stay on /contact.
const linkRe = /\[([^\]]*)\]\(\/contact\)/g
const isBooking = (text) => /book[^\]]*call|strategy call/i.test(text)

let totalFiles = 0
let totalLinks = 0
for (const f of readdirSync(dir).filter((f) => f.endsWith('.mdx'))) {
  const p = join(dir, f)
  const src = readFileSync(p, 'utf8')
  let changed = 0
  const out = src.replace(linkRe, (m, text) => {
    if (!isBooking(text)) return m
    changed++
    return `[${text}](/call)`
  })
  if (changed > 0) {
    writeFileSync(p, out)
    totalFiles++
    totalLinks += changed
    console.log(`${f}: ${changed}`)
  }
}
console.log(`\nTOTAL: ${totalLinks} links across ${totalFiles} files`)
```

- [ ] **Step 2: Run it**

Run: `node /tmp/booking-link-sweep.mjs`
Expected: TOTAL ≈ 82 links (measured 2026-06-11: 48× "book a free strategy call", 23× "Book a free strategy call", 10× "Book a free strategy call.", 1× "book a strategy call with me"; exact count may drift slightly if posts changed).

- [ ] **Step 3: Eyeball the diff for false positives**

Run: `git diff --stat src/content/blog | tail -3` then `git diff src/content/blog | grep '^[-+].*](/c' | sort | uniq -c | sort -rn | head -20`
Expected: every `-` line's anchor text contains book/strategy-call phrasing; NO generic anchors ("let's talk", "Get in touch here", "Reach out here") were touched. Verify remaining `/contact` links are generic:
`grep -rho '\[[^]]*\](/contact)' src/content/blog/*.mdx | sort | uniq -c | sort -rn`
Expected: no entry containing both "book" and "call", none containing "strategy call".

- [ ] **Step 4: Commit**

```bash
git add src/content/blog
git commit -m "feat(blog): booking-intent links point at /call (scripted sweep, ~82 links)"
```

---

### Task 15: Final verification gates + browser review checkpoint

**Files:** none modified (verification only)

- [ ] **Step 1: Grep gate — no booking CTAs left on /contact**

Run:

```bash
cd /Users/robpalmer/dev/robpalmer-site
grep -rn '"/contact"' src/components src/app --include='*.tsx' | grep -v 'src/app/contact/'
grep -rho '\[[^]]*\](/contact)' src/content/blog/*.mdx | grep -ci 'book\|strategy call' || echo "0 booking anchors remain"
```

Expected for the first grep: only the Footer "Contact" nav link and the sitemap/canonical references to the contact page itself — all deliberate general-inquiry references. NO Button/CTA/hero/banner hrefs. Expected for the second: `0 booking anchors remain`.

- [ ] **Step 2: Build**

Run: `pgrep -f "next dev" || npm run build`
Expected: if a dev server is running, STOP — coordinate before building. Otherwise build succeeds, ~204 static pages, zero type errors. `/call` appears in the route list.

- [ ] **Step 3: Dev-server browser review (house rule — Rob reviews before phase sign-off)**

Start `npm run dev` and walk this checklist (then have Rob look too):

1. `/call` — calendar shows the date picker immediately (no "pick a meeting type" menu); NO cookie-consent banner; "Before You Book" trio renders in the left column; tab title reads "Book a Free Strategy Call | Rob Palmer" (single suffix).
2. `/contact` — gold booking card up top linking `/call`; form titled "Send a Message"; verification block shows Name + Email (rob@robpalmer.com) and NO phone line.
3. Header desktop (≥1024px) — "Book a Strategy Call" button, goes to `/call`, doesn't crowd the nav links.
4. Header mobile (390px AND 360px) — compact "Book a Call" beside the hamburger; no wrap, no logo overlap; hamburger panel CTA goes to `/call`.
5. Any service page (e.g. /services/sales-page-copywriter) — hero CTA, gold mid banner, and "Ready to beat your control?" closing banner all go to `/call`.
6. Any vertical page — "Audit my X" hero CTA goes to `/call`.
7. Any blog post — closing banner "Book a Strategy Call" → `/call`.
8. Keyboard: Tab to the header booking button — visible gold ring (if invisible on the gold fill, apply the ink-950 fallback from Task 13 and re-check).
9. Footer — new Triple Brain tagline; "Book a Strategy Call" link → `/call`; "Contact" nav link still → `/contact`.

If the Calendly cookie banner is still visible in item 1: the account-level Calendly setting overrides the embed flag — Rob flips it in the Calendly dashboard (Account Settings → Cookie Banner), then re-check.

- [ ] **Step 4: Push**

```bash
git push
```

(Push backs up to GitHub; it does NOT deploy. Deploying is Rob's explicit call after he's happy with the browser review — and after he renames the Calendly event to "Free Strategy Call (30 min)" in the dashboard.)

---

## Out of scope (later phases — do not drift into these)

Wikipedia sameAs fix, ai-sales-page-generator redirect, www→apex, content-links.ts mappings, broken-slug sweep, llms.txt, Person schema enrichment, OG tags, FadeIn/performance work, testimonial diversification, cannibalization. They're in docs/reviews/2026-06-11-site-review.md.
