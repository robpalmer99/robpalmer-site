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
