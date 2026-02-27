import { services } from '@/app/services/_data/services'
import { verticals } from '@/app/verticals/_data/verticals'
import { caseStudies } from '@/app/case-studies/_data/case-studies'
import { portfolioItems } from '@/app/portfolio/_data/portfolio'

export interface SiteSearchResult {
  title: string
  description: string
  url: string
  type: 'Service' | 'Vertical' | 'Case Study' | 'Portfolio'
  searchableText: string
}

export function getSiteSearchIndex(): SiteSearchResult[] {
  const results: SiteSearchResult[] = []

  // Services
  for (const s of services) {
    const searchableText = [
      s.title,
      s.shortDescription,
      s.headline,
      s.subheadline,
      ...s.sections.map((sec) => `${sec.heading} ${sec.content}`),
      ...s.deliverables.map((d) => `${d.title} ${d.description}`),
      ...s.faqs.map((f) => `${f.question} ${f.answer}`),
    ]
      .join(' ')
      .toLowerCase()

    results.push({
      title: s.title,
      description: s.shortDescription,
      url: `/services/${s.slug}`,
      type: 'Service',
      searchableText,
    })
  }

  // Verticals
  for (const v of verticals) {
    const searchableText = [
      v.title,
      v.shortDescription,
      v.headline,
      v.subheadline,
      ...v.sections.map((sec) => `${sec.heading} ${sec.content}`),
      ...v.deliverables.map((d) => `${d.title} ${d.description}`),
      ...v.faqs.map((f) => `${f.question} ${f.answer}`),
    ]
      .join(' ')
      .toLowerCase()

    results.push({
      title: v.title,
      description: v.shortDescription,
      url: `/verticals/${v.slug}`,
      type: 'Vertical',
      searchableText,
    })
  }

  // Case Studies
  for (const cs of caseStudies) {
    const searchableText = [
      cs.title,
      cs.client,
      cs.description,
      cs.result,
      ...cs.metrics.map((m) => `${m.value} ${m.label}`),
      cs.testimonial?.quote || '',
    ]
      .join(' ')
      .toLowerCase()

    results.push({
      title: cs.title,
      description: cs.description,
      url: `/case-studies/${cs.slug}`,
      type: 'Case Study',
      searchableText,
    })
  }

  // Portfolio
  for (const p of portfolioItems) {
    const searchableText = [
      p.title,
      p.category,
      p.niche,
      p.description,
      p.result || '',
      p.client || '',
    ]
      .join(' ')
      .toLowerCase()

    results.push({
      title: p.title,
      description: p.description,
      url: '/portfolio',
      type: 'Portfolio',
      searchableText,
    })
  }

  return results
}
