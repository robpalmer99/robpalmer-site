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
  { path: '/about', minSlice: 5, h1: /creative/i, title: /^About/, faq: false },
]

const pick = (html, re) => (html.match(re) || [])[1]?.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim()

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
