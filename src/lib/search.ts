import { services } from '@/app/services/_data/services'
import { verticals } from '@/app/verticals/_data/verticals'
import { caseStudies } from '@/app/case-studies/_data/case-studies'
import { portfolioItems } from '@/app/portfolio/_data/portfolio'

export interface SiteSearchResult {
  title: string
  description: string
  url: string
  type: 'Service' | 'Vertical' | 'Case Study' | 'Portfolio'
  /** Lowercased fields, kept separate so matches can be weighted by where they land */
  titleText: string
  summaryText: string
  bodyText: string
}

/* ------------------------------------------------------------------ *
 * Relevance ranking
 *
 * Shared by blog posts and site pages so one query produces one
 * comparable score across both — a title match always outranks a
 * mention buried in body copy, whatever the content type.
 * ------------------------------------------------------------------ */

export interface RankableFields {
  /** Post/page title — the strongest relevance signal */
  titleText: string
  /** Description, tags, category — secondary signal */
  summaryText: string
  /** Full body copy — weakest signal (pages only; empty for posts) */
  bodyText: string
}

const SCORE = {
  phraseInTitle: 1000,
  titleStartsWithPhrase: 300,
  allWordsInTitle: 250,
  wordInTitle: 100,
  phraseInSummary: 150,
  wordInSummary: 30,
  phraseInBody: 40,
  wordInBody: 5,
} as const

/**
 * Light singular/plural variants for a query word.
 *
 * Matching is prefix-based (so typing "copywri" still finds results), which
 * means a query word shorter than the indexed word already matches. The gap
 * is the reverse: searching "skills" missed every post titled "…Skill".
 * These variants close it.
 */
function wordVariants(word: string): string[] {
  const variants = [word]
  if (word.length > 4 && word.endsWith('ies')) {
    variants.push(`${word.slice(0, -3)}y`)
  }
  if (word.length > 4 && word.endsWith('es')) {
    variants.push(word.slice(0, -2))
  }
  if (word.length > 3 && word.endsWith('s')) {
    variants.push(word.slice(0, -1))
  }
  return variants
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * Anchor a match to the start of a word.
 *
 * Without this, stemming produces nonsense: "rates" → "rate" would match
 * "sepa*rate*", ranking "The 10 Copywriting Skills…" second for the query
 * "copywriting rates". Prefix-at-word-start keeps as-you-type matching
 * ("copywri" → "copywriting") while rejecting mid-word coincidences.
 */
function wordStartPattern(variants: string[]): RegExp {
  return new RegExp(`\\b(?:${variants.map(escapeRegex).join('|')})`)
}

export interface ParsedQuery {
  phraseText: string
  phrase: RegExp
  /** One pattern per query word, matching any of that word's variants */
  words: RegExp[]
}

export function parseQuery(query: string): ParsedQuery | null {
  const phraseText = query.toLowerCase().trim()
  if (!phraseText) return null

  const words = phraseText.split(/\s+/).filter(Boolean).map((w) => wordStartPattern(wordVariants(w)))
  if (words.length === 0) return null

  return { phraseText, phrase: wordStartPattern([phraseText]), words }
}

/**
 * Score a result against a parsed query.
 *
 * Returns 0 when any query word is missing entirely (AND logic — a search
 * for "claude skills" should not surface everything mentioning "claude").
 */
export function scoreMatch(fields: RankableFields, query: ParsedQuery): number {
  const { titleText, summaryText, bodyText } = fields
  const combined = `${titleText} ${summaryText} ${bodyText}`

  if (!query.words.every((re) => re.test(combined))) return 0

  let score = 0

  if (query.phrase.test(titleText)) {
    score += SCORE.phraseInTitle
    if (titleText.startsWith(query.phraseText)) score += SCORE.titleStartsWithPhrase
  }

  const wordsInTitle = query.words.filter((re) => re.test(titleText)).length
  score += wordsInTitle * SCORE.wordInTitle
  if (wordsInTitle === query.words.length) score += SCORE.allWordsInTitle

  if (query.phrase.test(summaryText)) score += SCORE.phraseInSummary
  score += query.words.filter((re) => re.test(summaryText)).length * SCORE.wordInSummary

  if (query.phrase.test(bodyText)) score += SCORE.phraseInBody
  score += query.words.filter((re) => re.test(bodyText)).length * SCORE.wordInBody

  return score
}

/* ------------------------------------------------------------------ *
 * Site page index
 * ------------------------------------------------------------------ */

export function getSiteSearchIndex(): SiteSearchResult[] {
  const results: SiteSearchResult[] = []

  const lower = (parts: (string | undefined)[]) =>
    parts.filter(Boolean).join(' ').toLowerCase()

  // Services
  for (const s of services) {
    results.push({
      title: s.title,
      description: s.shortDescription,
      url: `/services/${s.slug}`,
      type: 'Service',
      titleText: lower([s.title]),
      summaryText: lower([s.shortDescription, s.headline, s.subheadline]),
      bodyText: lower([
        ...s.sections.map((sec) => `${sec.heading} ${sec.content}`),
        ...s.deliverables.map((d) => `${d.title} ${d.description}`),
        ...s.faqs.map((f) => `${f.question} ${f.answer}`),
      ]),
    })
  }

  // Verticals
  for (const v of verticals) {
    results.push({
      title: v.title,
      description: v.shortDescription,
      url: `/verticals/${v.slug}`,
      type: 'Vertical',
      titleText: lower([v.title]),
      summaryText: lower([v.shortDescription, v.headline, v.subheadline]),
      bodyText: lower([
        ...v.sections.map((sec) => `${sec.heading} ${sec.content}`),
        ...v.deliverables.map((d) => `${d.title} ${d.description}`),
        ...v.faqs.map((f) => `${f.question} ${f.answer}`),
      ]),
    })
  }

  // Case Studies
  for (const cs of caseStudies) {
    results.push({
      title: cs.title,
      description: cs.description,
      url: `/case-studies/${cs.slug}`,
      type: 'Case Study',
      titleText: lower([cs.title]),
      summaryText: lower([cs.client, cs.description, cs.result]),
      bodyText: lower([
        ...cs.metrics.map((m) => `${m.value} ${m.label}`),
        cs.testimonial?.quote,
      ]),
    })
  }

  // Portfolio
  for (const p of portfolioItems) {
    results.push({
      title: p.title,
      description: p.description,
      url: '/portfolio',
      type: 'Portfolio',
      titleText: lower([p.title]),
      summaryText: lower([p.category, p.niche, p.description]),
      bodyText: lower([p.result, p.client]),
    })
  }

  return results
}
