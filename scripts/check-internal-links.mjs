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

if (!services.length || !verticals.length || !caseStudies.length) {
  console.error('✗ slug extraction failed — data file moved or reformatted?')
  process.exit(1)
}

const valid = new Set([
  '/', '/about', '/services', '/verticals', '/case-studies', '/testimonials',
  '/portfolio', '/blog', '/contact', '/call', '/privacy', '/terms', '/tools',
  '/tools/headline-analyzer', '/tools/copywriting-rates-calculator',
  ...services.map((s) => `/services/${s}`),
  ...verticals.map((s) => `/verticals/${s}`),
  ...caseStudies.map((s) => `/case-studies/${s}`),
  ...posts.map((s) => `/blog/${s}`),
])

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

if (errors.length) {
  console.error(`✗ ${errors.length} broken internal link(s):\n` + errors.join('\n'))
  process.exit(1)
}
console.log(`✓ internal links OK (${valid.size} routes)`)
