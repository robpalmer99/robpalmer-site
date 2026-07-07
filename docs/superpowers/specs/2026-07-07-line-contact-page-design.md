# /connect — LINE Contact Card Page — Design

**Date:** 2026-07-07
**Status:** Approved (Rob, 2026-07-07)

## Purpose

A personal, unlisted, mobile-first page at `robpalmer.com/connect` that Rob pastes
into Thai Friendly chats to share his LINE contact info. All viewers will be on
phones.

## Requirements

- **URL:** `/connect` — originally `/line`, renamed because Thai Friendly restricts
  messages containing "line". Page title is likewise the neutral "Rob · Connect" so
  a link preview never shows the word LINE.
- **Unlisted:** not in navigation, not in sitemap (sitemap is an explicit list — no
  change needed), `robots: noindex, nofollow` page metadata. Deliberately NOT added
  to robots.txt (a disallow rule would publicly advertise the URL).
- **Visual language:** reproduces the mockup card (`Desktop/mockup-sheet.png`):
  - LINE green `#06C755` background (full screen)
  - Warm white `#F8F5EF` card, ink `#332C25` text
  - Prompt Google font (Thai + Latin subsets), loaded only for this page
  - Site Header/Footer hidden via a full-screen fixed wrapper (root layout is
    untouched — no route-group restructure)
- **Content, top to bottom (phone-first hierarchy):**
  1. Circular photo with green ring (existing headshot `rob-palmer-clean.png`),
     names **Rob / ร็อบ**
  2. Thai message: มาคุยกันทาง LINE นะครับ 😊 สแกน QR โค้ดตอนนี้เลย
     แล้วเราจะได้นัดเจอกันเร็ว ๆ นี้
     ("Let's chat on LINE. Scan the QR code now so we can arrange to meet soon.")
  3. **Primary CTA:** big tap button "เพิ่มเพื่อนใน LINE" →
     `https://line.me/ti/p/~hitext2` (one tap opens the LINE app — viewers can't
     scan a QR on the screen they're viewing)
  4. **QR code**, large, on a white rounded tile — freshly generated from the same
     line.me URL via a one-off script, committed as a static asset in `/public`.
     For in-person use (Rob shows the page from his phone, she scans it).

## Non-goals

- No links from any other page; no nav or footer changes.
- No JSON-LD, no OG optimization (page is noindex).
- No analytics changes (inherits site GA — acceptable).

## Notes

- LINE brand colors are used as Tailwind arbitrary values (no design tokens added —
  this page is deliberately outside the site's design system).
- Metadata title set as absolute to avoid the "| Rob Palmer" business template.
