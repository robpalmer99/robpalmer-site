# Phase 3 — Performance (FadeIn + Calendly) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Content paints before JavaScript — mobile LCP from ~5s (12s on /call) into the ~1.5–2.5s range — while keeping the entrance-animation design language.

**Architecture:** FadeIn flips to fail-open (SSR-visible; below-fold elements re-hidden invisibly post-mount for scroll reveals; new `immediate` prop = pure-CSS keyframe entrance for above-fold). CalendlyEmbed defers its 2.6MB widget to idle/interaction. Two image riders.

**Tech Stack:** Next.js 15, React 19, CSS keyframes, IntersectionObserver, sharp.

**Spec:** docs/superpowers/specs/2026-06-12-phase3-performance-design.md

**Repo facts:**
- No test suite — verification is Lighthouse + Playwright behavioral checks (Task 6).
- NEVER `npm run build` while a dev server runs (`pgrep -f "next dev"` first).
- Push ≠ deploy. Phase 3 batches with Phase 2 into one deploy — Rob's explicit call.
- FadeIn API surface ACTUALLY used by the 24 call-site files (audited 2026-06-12): `delay`, `duration`, `direction` ("up" default, 3× "left", 3× "none"), `distance` (12×), `className`. Zero uses of `once={false}`, `threshold`, or `as` — but keep the props (API compatibility, trivial cost).
- This change is design-sensitive: Rob reviews animations in the dev server before sign-off (house rule).

---

### Task 1: CSS keyframes + reduced-motion delay guard

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Add entrance keyframes and classes**

At the end of `src/app/globals.css`, add:

```css
/* ───────────────────────────────────────────────────────────────
   Entrance animations for above-the-fold FadeIn (`immediate` prop).
   These run from first paint — before hydration, before any JS —
   so LCP is never gated on the bundle. Duration/delay arrive as
   CSS custom properties set inline by the FadeIn component.
   ─────────────────────────────────────────────────────────────── */
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: none; }
}
@keyframes fade-in-down {
  from { opacity: 0; transform: translateY(-24px); }
  to   { opacity: 1; transform: none; }
}
@keyframes fade-in-left {
  from { opacity: 0; transform: translateX(24px); }
  to   { opacity: 1; transform: none; }
}
@keyframes fade-in-right {
  from { opacity: 0; transform: translateX(-24px); }
  to   { opacity: 1; transform: none; }
}
@keyframes fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.fade-in-up,
.fade-in-down,
.fade-in-left,
.fade-in-right,
.fade-in {
  animation-duration: var(--fi-duration, 800ms);
  animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-delay: var(--fi-delay, 0ms);
  animation-fill-mode: both;
}
.fade-in-up    { animation-name: fade-in-up; }
.fade-in-down  { animation-name: fade-in-down; }
.fade-in-left  { animation-name: fade-in-left; }
.fade-in-right { animation-name: fade-in-right; }
.fade-in       { animation-name: fade-in; }
```

- [ ] **Step 2: Guard the reduced-motion block against fill-mode + delay**

Read the existing `@media (prefers-reduced-motion: reduce)` block (~lines 60–66). It currently forces `animation-duration: 0.01ms !important` and `animation-iteration-count: 1 !important`. With `animation-fill-mode: both`, a 400ms `animation-delay` would hold the element at opacity 0 for 400ms even under reduced motion. Ensure the block ALSO contains:

```css
    animation-delay: 0.01ms !important;
```

(If it already zeroes delay, no change. Add the line inside the existing universal-selector rule, not a new rule.)

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "feat(perf): CSS entrance keyframes for pre-hydration FadeIn animation"
```

---

### Task 2: FadeIn fail-open rewrite

**Files:**
- Modify: `src/components/ui/FadeIn.tsx` (full rewrite, same public API + new `immediate` prop)

- [ ] **Step 1: Replace the component**

Replace the ENTIRE contents of `src/components/ui/FadeIn.tsx` with:

```tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  once?: boolean
  threshold?: number
  as?: React.ElementType
  /** Pure-CSS entrance that runs from first paint, before hydration.
   *  Use for above-the-fold content (heroes). No JS involvement at all. */
  immediate?: boolean
}

const keyframeClassMap = {
  up: 'fade-in-up',
  down: 'fade-in-down',
  left: 'fade-in-left',
  right: 'fade-in-right',
  none: 'fade-in',
} as const

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 600,
  direction = 'up',
  distance = 24,
  once = true,
  threshold = 0.15,
  as: Component = 'div',
  immediate = false,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  // Fail-open: SSR and first client render are ALWAYS visible. 'hidden' is
  // only ever applied post-mount to elements below the viewport (an
  // invisible mutation), so JS failure means "no animation", never
  // "no content".
  const [state, setState] = useState<'visible' | 'hidden' | 'revealed'>(
    'visible'
  )

  useEffect(() => {
    if (immediate) return
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Never re-hide painted content: anything in or above the viewport at
    // mount (above-fold content, anchor-jump targets) stays visible. Only
    // genuinely below-fold elements get the scroll-reveal treatment.
    if (el.getBoundingClientRect().top < window.innerHeight) return

    setState('hidden')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('revealed')
          if (once) observer.unobserve(el)
        } else if (!once) {
          setState('hidden')
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [immediate, once, threshold])

  if (immediate) {
    return (
      <Component
        className={cn(keyframeClassMap[direction], className)}
        style={
          {
            '--fi-duration': `${duration}ms`,
            '--fi-delay': `${delay}ms`,
          } as React.CSSProperties
        }
      >
        {children}
      </Component>
    )
  }

  const translateMap = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
    none: 'none',
  }

  const hidden = state === 'hidden'
  return (
    <Component
      ref={ref}
      className={cn(className)}
      style={{
        opacity: hidden ? 0 : 1,
        transform: hidden ? translateMap[direction] : 'none',
        // Transition only on reveal: hiding (offscreen) is an instant snap,
        // revealing animates. The 'visible' resting state carries no
        // transition so there is nothing to animate at hydration time.
        transition:
          state === 'revealed'
            ? `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`
            : undefined,
        willChange: hidden ? 'opacity, transform' : undefined,
      }}
    >
      {children}
    </Component>
  )
}
```

- [ ] **Step 2: Type check**

Run: `npx tsc --noEmit`
Expected: exit 0.

- [ ] **Step 3: Verify the SSR markup is now visible**

Run (no dev server: `pgrep -f "next dev"` must be empty): `npm run build` then:

```bash
node -e "
const html = require('fs').readFileSync('.next/server/app/index.html', 'utf8');
const hiddenCount = (html.match(/opacity:0/g) || []).length;
console.log('opacity:0 occurrences in built home HTML:', hiddenCount);
"
```

Expected: `0` (was 48 hidden blocks before this change). Note: Task 3 hasn't run yet, so hero animations are temporarily OFF (everything statically visible) — that's the correct intermediate state.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/FadeIn.tsx
git commit -m "feat(perf): FadeIn fail-open — SSR-visible, scroll reveals only below fold"
```

---

### Task 3: Hero switches to immediate CSS entrances

**Files:**
- Modify: `src/components/blocks/Hero.tsx` (8 FadeIn instances at ~lines 38, 44, 52, 72, 98, 119, 125, 133)

- [ ] **Step 1: Add `immediate` to every FadeIn in Hero.tsx**

Every `<FadeIn ...>` inside Hero.tsx gains the `immediate` prop, keeping its existing `delay`/`duration`/`direction` props. Examples of the edit (apply the same to all 8):

```tsx
<FadeIn immediate duration={800}>
```

```tsx
<FadeIn immediate delay={150} duration={800}>
```

```tsx
<FadeIn immediate delay={400} duration={1000} direction="none">
```

Verify: `grep -c "<FadeIn immediate" src/components/blocks/Hero.tsx` equals the total FadeIn count in the file (`grep -c "<FadeIn" src/components/blocks/Hero.tsx`).

- [ ] **Step 2: Confirm the LCP element keeps delay 0**

The h1 lives in the FIRST FadeIn of each hero variant (lines ~38 home, ~98/119 page variants) — confirm those have no `delay` prop (delay 0 → the LCP element starts animating at first paint). If any h1-wrapping FadeIn has a delay, remove the delay from it.

- [ ] **Step 3: Commit**

```bash
git add src/components/blocks/Hero.tsx
git commit -m "feat(perf): hero entrances run as pure CSS from first paint"
```

---

### Task 4: CalendlyEmbed defers off the critical path

**Files:**
- Modify: `src/components/integrations/CalendlyEmbed.tsx`

- [ ] **Step 1: Gate the widget mount on idle/interaction**

Replace the ENTIRE contents of `src/components/integrations/CalendlyEmbed.tsx` with:

```tsx
'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { CALENDLY_URL } from '@/lib/constants'
import { trackCalendlyClick } from '@/lib/analytics'

const InlineWidget = dynamic(
  () => import('react-calendly').then((mod) => mod.InlineWidget),
  {
    ssr: false,
    loading: () => <CalendarPlaceholder />,
  }
)

function CalendarPlaceholder() {
  return (
    <div className="min-h-[660px] bg-paper-100 rounded-xl animate-pulse flex items-center justify-center">
      <p className="text-paper-600 font-heading text-sm">Loading calendar...</p>
    </div>
  )
}

interface CalendlyEmbedProps {
  url?: string
}

export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  // Calendly pulls ~2.6MB of assets. Mounting it eagerly starves hydration
  // on mobile (12s LCP on /call before this change). Defer to the idle gap
  // after window load, or the first user interaction — whichever first.
  const [shouldMount, setShouldMount] = useState(false)

  useEffect(() => {
    let armed = false
    const interactionEvents: (keyof WindowEventMap)[] = [
      'pointerdown',
      'keydown',
      'scroll',
    ]

    const mount = () => {
      if (armed) return
      armed = true
      cleanup()
      setShouldMount(true)
    }

    const onLoad = () => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(mount, { timeout: 2000 })
      } else {
        window.setTimeout(mount, 1500)
      }
    }

    function cleanup() {
      interactionEvents.forEach((e) => window.removeEventListener(e, mount))
      window.removeEventListener('load', onLoad)
    }

    if (document.readyState === 'complete') {
      onLoad()
    } else {
      window.addEventListener('load', onLoad)
    }
    interactionEvents.forEach((e) =>
      window.addEventListener(e, mount, { once: true, passive: true })
    )
    return cleanup
  }, [])

  useEffect(() => {
    function handleCalendlyEvent(e: MessageEvent) {
      if (e.data?.event === 'calendly.event_scheduled') {
        trackCalendlyClick('event_scheduled')
      } else if (e.data?.event === 'calendly.date_and_time_selected') {
        trackCalendlyClick('date_and_time_selected')
      } else if (e.data?.event === 'calendly.event_type_viewed') {
        trackCalendlyClick('event_type_viewed')
      }
    }
    window.addEventListener('message', handleCalendlyEvent)
    return () => window.removeEventListener('message', handleCalendlyEvent)
  }, [])

  return (
    <div className="min-h-[660px]">
      {shouldMount ? (
        <InlineWidget
          url={url || CALENDLY_URL}
          styles={{ height: '660px' }}
          pageSettings={{ hideGdprBanner: true }}
        />
      ) : (
        <CalendarPlaceholder />
      )}
    </div>
  )
}
```

(Changes from current: mount gate added; placeholder extracted so the
pre-mount state and dynamic-import loading state render identically; the
placeholder's text color fixed `text-paper-400` → `text-paper-600` per the
WCAG house rule — closes a Phase 1 review note. `pageSettings` and the
analytics listener are preserved from Phases 1–2.)

- [ ] **Step 2: Type check**

Run: `npx tsc --noEmit` — exit 0.

- [ ] **Step 3: Commit**

```bash
git add src/components/integrations/CalendlyEmbed.tsx
git commit -m "perf(call): defer Calendly mount to idle/first-interaction (2.6MB off critical path)"
```

---

### Task 5: Image riders — priority + belron-hero recompress

**Files:**
- Modify: `src/app/blog/[slug]/page.tsx:157` (hero Image)
- Modify: `src/app/case-studies/belron-safelite-523m-campaign/page.tsx:67`
- Modify: `src/app/case-studies/apple-direct-mail-campaign/page.tsx` (its hero Image — same pattern)
- Modify (binary): `public/images/case-studies/belron-hero.jpg` (234,033 bytes today)

- [ ] **Step 1: Add `priority` to the three LCP images**

In each of the three files, add the `priority` prop to the hero `<Image>` (the one rendering `heroImage`):

```tsx
                <Image
                  src={post.meta.heroImage}
                  alt={post.meta.heroAlt || post.meta.title}
                  width={1200}
                  height={630}
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                  className="w-full h-auto rounded-xl object-cover"
```

(Blog template shown; case-study heroes get the same one-word addition with their own existing props. Touch ONLY the hero/LCP image per page — not body images.)

- [ ] **Step 2: Recompress belron-hero.jpg with sharp (already a dependency)**

```bash
cd /Users/robpalmer/dev/robpalmer-site
node -e "
const sharp = require('sharp');
sharp('public/images/case-studies/belron-hero.jpg')
  .jpeg({ quality: 78, mozjpeg: true })
  .toFile('/tmp/belron-hero-new.jpg')
  .then(async (info) => {
    console.log('new size:', info.size, 'bytes (was 234033)');
  });
"
```

Inspect: open /tmp/belron-hero-new.jpg with the Read tool and compare against the original visually (no visible banding/artifacts at content size). If acceptable AND meaningfully smaller (expect roughly 100–140KB), overwrite:

```bash
cp /tmp/belron-hero-new.jpg public/images/case-studies/belron-hero.jpg
```

If quality is visibly degraded, retry at quality 84 before giving up.

- [ ] **Step 3: Commit**

```bash
git add 'src/app/blog/[slug]/page.tsx' src/app/case-studies/belron-safelite-523m-campaign/page.tsx src/app/case-studies/apple-direct-mail-campaign/page.tsx public/images/case-studies/belron-hero.jpg
git commit -m "perf(images): priority on LCP hero images; recompress belron-hero"
```

---

### Task 6: Verification suite + push

**Files:** none (verification; scratch scripts in /tmp)

- [ ] **Step 1: Build + serve production locally**

```bash
pgrep -f "next dev" && echo "STOP — dev server running" || true
npm run build
npm run start &   # serves the production build on :3000
sleep 4 && curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/
```

Expected: build passes (prebuild link gate ✓), 200.

- [ ] **Step 2: Lighthouse after-numbers (mobile + desktop where noted)**

```bash
for page in "/:home" "/call:call" "/services/sales-page-copywriter:service" "/blog/best-direct-response-copywriter-to-hire:blog" "/case-studies/belron-safelite-523m-campaign:case"; do
  url="http://localhost:3000${page%%:*}"; name="${page##*:}"
  npx -y lighthouse "$url" --output=json --output-path="/tmp/lh3-$name-mobile.json" --chrome-flags="--headless" --only-categories=performance --quiet
done
npx -y lighthouse "http://localhost:3000/" --preset=desktop --output=json --output-path=/tmp/lh3-home-desktop.json --chrome-flags="--headless" --only-categories=performance --quiet
npx -y lighthouse "http://localhost:3000/call" --preset=desktop --output=json --output-path=/tmp/lh3-call-desktop.json --chrome-flags="--headless" --only-categories=performance --quiet
node -e "
for (const f of require('fs').readdirSync('/tmp').filter(f=>f.startsWith('lh3-'))) {
  const d = JSON.parse(require('fs').readFileSync('/tmp/'+f));
  console.log(f.padEnd(28), 'score', Math.round(d.categories.performance.score*100), '| LCP', d.audits['largest-contentful-paint'].displayValue, '| CLS', d.audits['cumulative-layout-shift'].displayValue);
}"
```

**Targets (spec):** text-LCP pages ≥85 mobile with LCP ≤2.5s; /call ≥80 mobile with LCP ≤3s; CLS ≈0 everywhere. (Local `next start` numbers aren't identical to Vercel-production numbers, but the audit baselines were measured against production with the same simulated throttling — the delta is what matters. If a target is missed, investigate the LCP breakdown in the JSON before declaring done.)

- [ ] **Step 3: Behavioral checks (Playwright from /Users/robpalmer/dev/astrochartus)**

Write /Users/robpalmer/dev/astrochartus/.p3-check.mjs (delete after):

```js
import { chromium } from '@playwright/test'
const browser = await chromium.launch()
const base = 'http://localhost:3000'

// 1. No-JS: content must be visible
const noJs = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1440, height: 900 } })
let p = await noJs.newPage()
await p.goto(base + '/')
await p.screenshot({ path: '/tmp/p3-nojs-home.png', fullPage: true })
console.log('no-JS h1 visible:', await p.locator('h1').isVisible())
const hiddenNoJs = await p.evaluate(() => [...document.querySelectorAll('[style*="opacity"]')].filter(el => getComputedStyle(el).opacity === '0').length).catch(() => 'n/a (no js eval)')
await noJs.close()

// 2. Reduced motion: all visible, immediately
const rm = await browser.newContext({ reducedMotion: 'reduce', viewport: { width: 1440, height: 900 } })
p = await rm.newPage()
await p.goto(base + '/')
await p.waitForTimeout(500)
console.log('reduced-motion hidden count:', await p.evaluate(() => [...document.querySelectorAll('*')].filter(el => getComputedStyle(el).opacity === '0').length))
await rm.close()

// 3. Hydration errors + scroll reveal + anchor jump
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
p = await ctx.newPage()
const errors = []
p.on('console', (m) => { if (m.type() === 'error' && /hydrat|418|419|422|423|425/i.test(m.text())) errors.push(m.text().slice(0, 120)) })
for (const path of ['/', '/call', '/services/sales-page-copywriter', '/blog/best-direct-response-copywriter-to-hire']) {
  await p.goto(base + path)
  await p.waitForTimeout(1500)
}
console.log('hydration errors:', errors.length ? errors : 'none')

// scroll reveal still works: bottom section starts hidden post-mount, reveals on scroll
await p.goto(base + '/')
await p.waitForTimeout(1000)
const belowFoldHidden = await p.evaluate(() => [...document.querySelectorAll('[style*="opacity: 0"], [style*="opacity:0"]')].length)
console.log('below-fold hidden (pre-scroll, expect >0):', belowFoldHidden)
await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
await p.waitForTimeout(1800)
const stuckAfterScroll = await p.evaluate(() => [...document.querySelectorAll('*')].filter(el => getComputedStyle(el).opacity === '0').length)
console.log('stuck at opacity 0 after full scroll (expect 0):', stuckAfterScroll)

// anchor jump: mid-page target visible immediately
await p.goto(base + '/#services')
await p.waitForTimeout(800)
const servicesVisible = await p.evaluate(() => {
  const el = document.querySelector('#services')
  return el ? getComputedStyle(el).opacity !== '0' && [...el.querySelectorAll('*')].every(c => getComputedStyle(c).opacity !== '0') : 'no #services el'
})
console.log('anchor-jump #services fully visible:', servicesVisible)

// 4. /call: hero paints, Calendly mounts after idle
await p.goto(base + '/call')
const heroVisibleAt = await p.locator('h1').isVisible()
console.log('/call h1 visible immediately:', heroVisibleAt)
await p.waitForTimeout(6000)
console.log('/call calendly iframe mounted after idle:', await p.locator('iframe[src*="calendly"]').count() > 0)
await p.screenshot({ path: '/tmp/p3-call.png', fullPage: true })
await browser.close()
```

Run it; ALL expectations must hold. Then `kill %1` (the next start process) and `pgrep -f "next start"` to confirm dead.

- [ ] **Step 4: Push (no deploy)**

```bash
git push
```

- [ ] **Step 5: Rob's animation QA checkpoint (blocking)**

Start `npm run dev` and hand off: Rob reviews hero entrance feel on home + a service page, scroll reveals mid-page, /call hero + calendar appearance timing. Phase sign-off and the batched Phase 2+3 deploy are his explicit calls.

---

## Out of scope (do not drift)

Calendly's third-party asset weight; template dedup, mdx.ts meta dedup, checker hardening extras (Phase 5); content work (Phase 4); robots.txt policy. Do not "improve" unrelated animation timings or copy.
