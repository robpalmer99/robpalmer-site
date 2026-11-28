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
  [/\b(19[5-9]\d|200\d)s?\b/, 'a year or decade before 2010'],
  [/\$\s?\d[\d,.]*(?!\d)(?!M)/, 'a price'],
  [/\b(nineties|eighties)\b/i, 'a decade in words'],
]

const NEW_PAGES = [
  {
    path: '/verticals/corporate-copywriter',
    title: /^Corporate and B2B Copywriter\b.*\| Rob Palmer$/,
    h1: /corporate/i,
    mustContain: [...CLIENTS.map((c) => new RegExp(c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))),
      /BT International/, /BT Corporate Services/, /BT Research Labs/, /Gary Lubner/,
      /href="\/services\/executive-speechwriter"/, /href="\/services\/ai-copywriting-consultant"/,
      /"@type":"FAQPage"/, /"@type":"Service"/],
  },
  {
    path: '/services/executive-speechwriter',
    title: /^Executive Speech Writer\b.*\| Rob Palmer$/,
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
