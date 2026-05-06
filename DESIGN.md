---
name: Rob Palmer — Direct-Response Copywriter
description: Editorial publication aesthetic for a senior direct-response copywriting practice. Warm paper, deep ink, burnished gold.
colors:
  ink-950: "#0A0A0F"
  ink-900: "#141420"
  ink-800: "#1E1E2E"
  ink-700: "#2D2D40"
  gold-50: "#FFF9EB"
  gold-100: "#FFF0CC"
  gold-200: "#FFE099"
  gold-400: "#F5B731"
  gold-500: "#D99E1B"
  gold-600: "#B8840F"
  paper-50: "#FAFAF8"
  paper-100: "#F5F4F0"
  paper-200: "#ECEAE3"
  paper-300: "#D4D1C7"
  paper-400: "#A8A49A"
  paper-600: "#6B6760"
  paper-800: "#3D3A35"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: "1.1"
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.875rem, 3.5vw, 2.5rem)"
    fontWeight: 700
    lineHeight: "1.15"
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: "1.3"
    letterSpacing: "normal"
  body:
    fontFamily: "Lora, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: "1.65"
    letterSpacing: "normal"
  label:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: "1"
    letterSpacing: "0.05em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "12px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "80px"
  xxl: "128px"
components:
  button-primary:
    backgroundColor: "{colors.gold-400}"
    textColor: "{colors.ink-950}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.gold-500}"
    textColor: "{colors.ink-950}"
  button-secondary:
    backgroundColor: "{colors.ink-950}"
    textColor: "{colors.paper-50}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.gold-400}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.gold-600}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  card:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.xl}"
    padding: "24px"
  badge-default:
    backgroundColor: "{colors.paper-200}"
    textColor: "{colors.paper-600}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  badge-gold:
    backgroundColor: "{colors.gold-50}"
    textColor: "{colors.gold-600}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  badge-dark:
    backgroundColor: "{colors.ink-800}"
    textColor: "{colors.paper-200}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
---

# Design System: Rob Palmer — Direct-Response Copywriter

## 1. Overview

**Creative North Star: "The Working Editorial"**

This system is a serious editorial publication that happens to convert. The reference is The Atlantic or Harper's, not a SaaS landing page. Fraunces serif headers carry editorial weight; Lora body type signals that long-form is the product (the site holds 105 blog posts and a deep portfolio); a warm paper background reads like printed stock under a reading lamp; deep ink-950 carries authority; and a single burnished gold accent is reserved for trust signals — ROI numbers, primary CTAs, link emphasis, the underline beneath a claim.

The system explicitly rejects the ClickFunnels guru aesthetic (red-and-yellow screamer pages, scarcity timers, green-checkmark pyramids), the generic SaaS template (purple-to-pink gradient hero, glassmorphic feature cards, hero-metric template), the AI-agency look (dark-mode-by-default with neon accents, holographic mesh backgrounds), and AI-slop typography tricks (gradient text effects, side-stripe colored borders, decorative blur). Rob writes pages in those styles for clients when the market demands it; the brand surface itself must look earned, not stamped.

**Key Characteristics:**
- Editorial typography pairing (Fraunces display + Lora body) — book-weight, not deck-weight
- Warm paper-50 page background (#FAFAF8) — never pure white; tinted toward bone
- Restrained color strategy: tinted neutrals carry 90%+ of every screen, gold appears as the underline beneath proof
- Body type set at 18px (1.125rem) base with 1.65 line-height — long-form is first-class
- Generous vertical rhythm — sections breathe at `py-16 sm:py-20 lg:py-24`
- Deep ink-950 reserved for authority surfaces (hero, dark sections, CTA banners) with a fine fractal-noise overlay for printed-stock texture

## 2. Colors: The Burnished Editorial Palette

A three-family system: **Ink** carries authority, **Gold** carries trust and ROI, **Paper** carries the page itself. No fourth family exists; if a fourth color is needed, the answer is "use one of the three differently."

### Primary

- **Burnished Gold** (`gold-400` `#F5B731`): The trust accent. Used on primary CTAs, the home-hero radial glow, ROI numbers in StatsBar (`$523M+`), CountUp animations, the focus-visible outline ring, decorative section dividers. This is the burnished, slightly amber gold of a pressed-foil book stamp — not metallic, not neon.
- **Burnished Gold Deep** (`gold-600` `#B8840F`): Ghost-button text, link text on light backgrounds, in-card "Read more →" affordances. Carries WCAG AA on white where `gold-400` and `gold-500` would fail.
- **Burnished Gold Press** (`gold-500` `#D99E1B`): Hover state for primary CTAs and emphasized headline phrases (e.g., the gold-emphasized phrase inside an h2: *"I Write **Conversions**"*).

### Neutral — Ink

- **Deep Ink** (`ink-950` `#0A0A0F`): Heading text on light surfaces; the dark hero / CTA-banner / footer-adjacent background color. The "near-black for authority." Never pure black.
- **Night Ink** (`ink-900` `#141420`): Footer background, scrolled-header background (with backdrop-blur), the second stop in the hero gradient.
- **Shadow Ink** (`ink-800` `#1E1E2E`): Third stop in the hero gradient; the active/hover surface for dropdown menu items in the dark header; dark-variant Badge background.
- **Slate Ink** (`ink-700` `#2D2D40`): Body text color (set as `body { color }` in `globals.css`); border accents inside dark surfaces (header dropdown panel, footer divider).

### Neutral — Paper

- **Warm Paper** (`paper-50` `#FAFAF8`): Default page background. Tinted off-white. Never `#FFFFFF`.
- **Stone Paper** (`paper-100` `#F5F4F0`): Alt-section background (`bg-paper-100`); the lighter end of the gradient on `Section variant="alt"`.
- **Mist Paper** (`paper-200` `#ECEAE3`): All card and hairline borders. The default "edge" of the system.
- **Haze Paper** (`paper-300` `#D4D1C7`): Image-hover ring stops, dividers between higher-density elements.
- **Smoke Paper** (`paper-400` `#A8A49A`): Reserved for icons, chevrons, and placeholder text inside controls. **Forbidden for body, link, or meta text on any light surface** (paper-50, paper-100, white) — fails WCAG AA at ~2.3:1. On dark surfaces (`ink-700` or darker) it passes AA at ~7.3:1 and is acceptable for fine-print or low-priority meta; lift to `paper-300` when the meta text is primary scannable content.
- **Meta Paper** (`paper-600` `#6B6760`): The mandatory color for meta and secondary text (timestamps, reading-time, byline rows). The minimum that holds 4.5:1 contrast on `paper-50`.
- **Tarmac Paper** (`paper-800` `#3D3A35`): Reserved for body copy in muted contexts where `ink-700` would feel too sharp.

### Named Rules

**The Gold-As-Underline Rule.** Gold is the punctuation under a claim, never the claim itself. ROI numbers, primary CTAs, focus rings, link hover, the section-divider gradient — that is where gold lives. Decorative gold backgrounds, gold borders for visual interest, gold drop shadows on text — all forbidden.

**The No-Pure-Black, No-Pure-White Rule.** `#000` and `#FFF` are banned. Card backgrounds use `#FFFFFF` only because the warm paper page sits behind them and provides the warmth; everything else is tinted.

**The One-Accent Rule (Restrained Strategy).** This system is **Restrained** in Impeccable terms — tinted neutrals plus a single accent ≤10% of any given screen. If a screen has more than one color competing for attention, one must yield.

## 3. Typography

**Display Font:** **Fraunces** (Google Fonts; loaded via `next/font` with `--font-fraunces`; Georgia / serif as fallback).
**Body Font:** **Lora** (Google Fonts; loaded via `next/font` with `--font-lora`; Georgia / serif as fallback).

**Character:** Fraunces is a hyperactive, opinionated display serif with a stylistic-set range that signals "edited, not generated." Lora is a balanced workhorse text serif with calm verticals and a generous x-height — comfortable for paragraph reading on phone screens. Both are serif: this is a deliberate move away from the geometric-sans aesthetic dominant in tech marketing. The pairing reads as editorial rather than corporate, calm rather than urgent.

### Hierarchy

- **Display** (Fraunces, 700, fluid `clamp(2.25rem, 5vw, 3.75rem)`, line-height 1.1, letter-spacing -0.02em): Hero headlines only. One per page.
- **Headline** (Fraunces, 700, fluid `clamp(1.875rem, 3.5vw, 2.5rem)`, line-height 1.15): h2 section openers (e.g., *"Most Copywriters Write Content. I Write Conversions."*).
- **Title** (Fraunces, 700, 18px / `text-lg`, line-height 1.3): Card titles (BlogPostCard, ServiceCard), accordion question text. NOT used for body section headers.
- **Body** (Lora, 400, 18px / `1.125rem` base, line-height 1.65): All body paragraphs. Long-form line-length is capped via `max-w-prose` or explicit `max-w-2xl` / `max-w-3xl` containers — body text NEVER stretches beyond ~75ch.
- **Body Large** (Lora, 400, 20px / `text-lg sm:text-xl`, line-height 1.625): Hero subheadlines, lede paragraphs in homepage editorial sections.
- **Label** (Fraunces, 500, 12px / `text-xs`, letter-spacing 0.05em, **UPPERCASE**): Badges (category tags, "Featured" markers), section overlines, footer column headers.

### Named Rules

**The Long-Form-Is-The-Product Rule.** Body text is set at 18px (1.125rem) **base, not just on `prose`**. The base is set globally in `globals.css` (`--text-base: 1.125rem`). Components that override down to `text-sm` (14px) for body copy require explicit justification — meta rows, dense metadata, captions only. Any `text-sm` paragraph used as primary reading copy is a regression.

**The Serif-On-Serif Rule.** Display and body are both serifs. Sans-serif is forbidden anywhere on this site except inside system-generated UI (date pickers, native form controls). The pairing IS the brand.

**The Editorial-Measure Rule.** Body paragraphs sit inside containers with `max-w-2xl` (~672px) or `max-w-3xl` (~768px) for long-form. Never full-bleed body text across a `max-w-6xl` container.

## 4. Elevation

The system is **flat by default with deliberate exceptions.** Shadows are not the visual identity; warmth, type, and color carry the design. When elevation appears, it is functional (signaling interactivity) or atmospheric (gold radial glow on the dark hero, suggesting depth without using a hard shadow).

### Shadow Vocabulary

- **`shadow-sm`** (Tailwind default `0 1px 2px 0 rgb(0 0 0 / 0.05)`): The default resting elevation for cards. Barely visible — a hairline of separation.
- **`shadow-md`** (Tailwind default `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`): Card hover state; primary CTA resting state (with `shadow-gold-400/20` tint).
- **`shadow-lg`** (Tailwind default): Scrolled-header drop, mobile-menu panel, hover state on ServiceCard with `shadow-gold-400/5` tint.
- **`shadow-xl`**: Reserved for the desktop dropdown nav panel against `bg-ink-950`.

### Atmospheric Elevation (the Hero Glow)

Two **radial gradients** at the home hero (and CTABanner dark variants) substitute for shadow as a way to create depth: a primary gold radial at `circle_at_20%_80%, rgba(245,183,49,0.1), transparent_50%` and a secondary at `80%_20%, rgba(245,183,49,0.05), transparent_40%`. Combined with the SVG fractal-noise overlay (`opacity 0.03`, `mix-blend-mode: overlay`), this gives the dark surfaces a printed-stock texture rather than a flat digital fill.

### Named Rules

**The Flat-Until-Hover Rule.** Surfaces are flat at rest. Elevation responds to state — hover lifts a card 0.5–1px (`hover:-translate-y-0.5` / `hover:-translate-y-1`) and bumps the shadow one tier. Static decorative shadows are forbidden.

**The Gold-Glow-Only-On-Dark Rule.** Atmospheric gold radial glow appears only on `ink-950` / `ink-900` surfaces (hero, CTABanner). On light surfaces, gold is type and stroke, never atmosphere.

## 5. Components

### Buttons

- **Shape:** Gently rounded (8px / `rounded-lg`).
- **Primary:** `gold-400` background, `ink-950` text, Fraunces 600, `shadow-md shadow-gold-400/20`. Hover: `gold-500` background + `scale-[1.02]`. Active: `gold-600` + `scale-[0.98]`.
- **Secondary:** `ink-950` background, `paper-50` text, same scale-on-press interaction.
- **Outline:** Transparent with `border-2 border-gold-400`, `gold-400` text. Hover fills with `gold-400` and inverts text to `ink-950`.
- **Ghost:** No background, no border, `gold-600` text, hover underlines + lightens to `gold-500`. Used for tertiary "Read more →" / "View all →" CTAs.
- **Sizes:** `sm` (16px h-padding, 14px text), `md` (24px h-padding, 16px text — default), `lg` (32px h-padding, 18px text — heroes only).

### Badges

- **Shape:** Pill (`rounded-full`).
- **Style:** Fraunces 500, **UPPERCASE**, 12px, `tracking-wide`, 12px h-padding, 4px v-padding.
- **Variants:** `default` (paper-200 / paper-600), `gold` (gold-50 bg, gold-600 text, gold-200 border), `dark` (ink-800 / paper-200).
- **Use:** Blog category tags, "Featured" markers, section overlines.

### Cards (default)

- **Corner Style:** `rounded-xl` (12px).
- **Background:** `#FFFFFF` (white) sitting on `paper-50` page background.
- **Border:** `border border-paper-200` (1px hairline).
- **Shadow Strategy:** `shadow-sm` resting → `shadow-md` on hover. Border shifts to `gold-200` on hover. Card lifts 0.5px (`hover:-translate-y-0.5`).
- **Internal Padding:** 24px (`p-6`); ServiceCard uses 32px on mobile, 24px on desktop (`p-6 sm:p-8`, `sm:p-6` if image present).

### Service Card (signature variant)

A subtle differentiator: a 2px gold-tinted top border (`border-t-2 border-t-gold-400/40`) replaces the standard 1px hairline at the top edge — a visual cue that this card is a service offering, not a generic content tile. Hover lifts 1px instead of 0.5px and adds `shadow-gold-400/5` tint to `shadow-lg`. The "Learn more →" arrow translates 4px on hover.

### Blog Post Card

Image-on-top variant of the standard Card. Hero image sits at fixed 176px height (`h-44`) with `object-cover` and a `group-hover:scale-105` zoom (300ms). Inside the card body: gold Badge for category, paper-600 reading-time row, Fraunces 700 title (turns gold-600 on hover), 14px Lora excerpt clamped to 3 lines, paper-600 date / gold-600 "Read more →" footer row.

### Inputs / Fields

(Currently used in ContactForm and HeadlineAnalyzer.)
- **Style:** White background, `border border-paper-300`, `rounded-lg` (8px), 12-16px internal padding, Lora body type.
- **Focus:** 2px `gold-400` outline at 2px offset (the global focus-visible rule from `globals.css`); native border may also shift to `gold-400`.

### Navigation

- **Top header:** Fixed, transparent until scroll; on scroll becomes `bg-ink-950/95` with `backdrop-blur-md` and `shadow-lg`. Height 64px mobile / 80px desktop.
- **Nav link typography:** Fraunces 500, 14px, `text-paper-300` resting → `text-gold-400` on hover.
- **Dropdown:** `bg-ink-950` panel with `border-ink-700`, `rounded-lg`, `shadow-xl`. Items use the same nav-link typography. Full keyboard nav (Arrow Up/Down, Escape, Enter).
- **Primary nav CTA:** "Book a Call" button (small primary).
- **Mobile menu:** Sliding panel; trigger is a button in the same row as the logo. (See `MobileMenu.tsx`.)

### Section

Vertical rhythm container: `py-16 sm:py-20 lg:py-24`.
- **Variants:** `default` (`paper-50` bg), `dark` (`ink-950` bg + noise overlay + light text), `alt` (gradient `paper-100` → `paper-50`), `gold` (gradient `gold-50` via `gold-100/50` to `gold-50`).
- **Optional `divider`** flag adds the centered 60px gold gradient bar at the top of the section.

### Stats Bar (signature)

Dark-variant grid of 4 metrics. Numbers in Fraunces 700, `text-4xl sm:text-5xl`, `gold-400` color. Label below in Fraunces uppercase 14px, `tracking-wider`, `paper-400` (on dark) or `paper-600` (on light). Uses `<dl>` / `<dt>` / `<dd>` semantics.

### CTA Banner (signature)

Full-width section in `ink-950` (default) or gold gradient (`gold` variant). Asymmetric flex: headline + optional subtext on the left, primary button on the right (stacks vertical on mobile). Gold radial atmospheric glow on dark variants.

### Hero (signature)

Three variants:
- **`home`**: Tall (`pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-32`), dark gradient (`ink-950 → ink-900 → ink-800`), dual gold radial glows, optional headshot with `gold-400/10` blur ring at `-inset-3` and `ring-2 ring-gold-400/20` ring on the image itself. Display headline + body-large subhead + dual CTAs (primary + outline).
- **`page`**: Shorter (`pt-28 pb-16 sm:pt-32 sm:pb-20`), single CTA, max-w-3xl text column.
- **`minimal`**: Shortest (`pt-28 pb-12`), title + optional subhead only.

All Hero variants use the noise overlay on the `ink-950` surface.

### Section Divider (signature)

A 60px-wide, 2px-tall horizontal gradient bar (`linear-gradient(90deg, transparent, gold-400, transparent)`) centered at the top of any section with the `divider` flag. Visual exhale between dense sections; gold appears as a single thin line, never as a fill.

## 6. Do's and Don'ts

### Do:

- **Do** keep body text at 18px (`1.125rem`) base, with 1.65 line-height. Override DOWN only with cause — meta rows, captions, in-control text.
- **Do** use `text-paper-600` (not `paper-400`) for any meta or secondary text on `paper-50` — it's the WCAG AA floor.
- **Do** use `text-gold-600` (not `gold-500` or `gold-400`) for link text and "Read more →" affordances on light backgrounds — it's the WCAG AA floor.
- **Do** cap body line-length at `max-w-2xl` (~672px) or `max-w-3xl` (~768px). Body inside `max-w-6xl` is forbidden.
- **Do** treat gold as a punctuation mark — ROI numbers, primary CTAs, focus rings, the section divider, link emphasis. The Burnished-Editorial palette depends on it staying ≤10% of any given screen.
- **Do** anchor every claim to a number or a logo (`$523M+`, `Fortune 500`, `30+ years`). Adjective-only claims betray the brand.
- **Do** use `<Image>` from `next/image` for every image, with `fill` + `object-cover` + explicit `sizes` (per CLAUDE.md).
- **Do** stagger `FadeIn` reveals with `delay={index * 80}` (or 100, 150) when laying out cascading grids.
- **Do** honor `prefers-reduced-motion` — already wired in `globals.css`. New animations must respect it.
- **Do** use Fraunces (display/heading/label) and Lora (body) only. Both serifs. The pairing IS the brand.

### Don't:

- **Don't** use `#000` or `#FFF` anywhere in this codebase. Every neutral is tinted toward warm paper or deep ink.
- **Don't** use `bg-gold-300` or `bg-gold-700` — they don't exist in the palette and never will. The gold scale is intentional and has gaps; do not fill them.
- **Don't** use `text-paper-400` for body or meta copy on `paper-50`. It fails WCAG AA. (`paper-400` is reserved for non-text iconography only.)
- **Don't** use `text-gold-400` or `text-gold-500` for link or button-label text on light backgrounds. WCAG AA fails. Use `gold-600`.
- **Don't** use sans-serif fonts anywhere on this site. The serif-on-serif pairing is the brand identity.
- **Don't** use side-stripe colored borders (`border-l-4 border-gold-400` or any colored `border-{side}` greater than 1px). The ServiceCard's `border-t-2 border-t-gold-400/40` is the **single sanctioned exception**, justified as a service-card differentiator. Replicating the pattern elsewhere is forbidden.
- **Don't** use gradient text (`background-clip: text` over a gradient). Use solid `gold-500` or `gold-600` for emphasized phrases inside a heading; weight or color carries emphasis, not gradients.
- **Don't** use glassmorphism / `backdrop-blur` decoratively. The scrolled header's `backdrop-blur-md` is functional (legibility while scrolled over content). Glass cards, glass overlays, glass modals — forbidden.
- **Don't** build the hero-metric template (big number + small label + supporting stats card row). The StatsBar IS the sanctioned hero-metric in this system; do not replicate it elsewhere as a generic feature pattern.
- **Don't** stack identical 3-column card grids endlessly — the home page deliberately interleaves grids with asymmetric editorial sections (problem/solution, AI Advantage). Maintain that rhythm. Same-shape grids on every section is the agency-template anti-pattern.
- **Don't** introduce dark mode. The system is light-mode-by-default with **dark surfaces** (hero, footer, CTA banner, scrolled header) interleaved into the layout — that is the rhythm. A toggle would flatten it.
- **Don't** add a fourth color family. Ink, Gold, Paper. If a fourth color is needed, the brief is wrong.
- **Don't** ship a card with nested cards inside it. Nested cards are always wrong (per Impeccable shared design laws).
- **Don't** use modals as a first-thought interaction. Inline expansion (FAQAccordion is the canonical pattern), progressive disclosure, or a separate page first.
