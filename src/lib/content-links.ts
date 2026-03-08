/**
 * Maps blog categories and tags to related service and vertical pages.
 * Used to add contextual internal links on blog posts without modifying frontmatter.
 */

const categoryToServices: Record<string, string[]> = {
  'Direct Response Formats': [
    'vsl-copywriter',
    'sales-page-copywriter',
    'sales-letter-copywriter',
  ],
  'Copywriting Craft': [
    'sales-page-copywriter',
    'vsl-copywriter',
  ],
  'Copywriting Strategy': [
    'sales-funnel-copywriter',
    'sales-page-copywriter',
  ],
  'AI & Technology': [
    'ai-copywriting-consultant',
  ],
  'Industry Guides': [
    'vsl-copywriter',
    'sales-funnel-copywriter',
  ],
  'Hiring & Strategy': [
    'sales-page-copywriter',
    'email-copywriter',
  ],
  'Industry Trends': [
    'ai-copywriting-consultant',
    'sales-funnel-copywriter',
  ],
  'Case Studies': [
    'vsl-copywriter',
    'sales-funnel-copywriter',
  ],
  'Career Insights': [
    'sales-page-copywriter',
  ],
  'Copywriting Tools': [
    'ai-copywriting-consultant',
  ],
  'Copywriting Fundamentals': [
    'sales-page-copywriter',
    'vsl-copywriter',
  ],
  'Copywriting History': [
    'sales-letter-copywriter',
  ],
  'Copywriting Legends': [
    'sales-letter-copywriter',
    'sales-page-copywriter',
  ],
}

const categoryToVerticals: Record<string, string[]> = {
  'Direct Response Formats': [
    'health-supplement-copywriter',
    'clickbank-copywriter',
  ],
  'Industry Guides': [
    'health-supplement-copywriter',
    'financial-copywriter',
    'ecommerce-dtc-copywriter',
    'clickbank-copywriter',
    'saas-copywriter',
  ],
  'AI & Technology': [
    'saas-copywriter',
  ],
  'Case Studies': [
    'clickbank-copywriter',
    'health-supplement-copywriter',
  ],
  'Industry Trends': [
    'ecommerce-dtc-copywriter',
    'saas-copywriter',
  ],
}

const tagToService: Record<string, string> = {
  vsl: 'vsl-copywriter',
  'sales page': 'sales-page-copywriter',
  'sales letter': 'sales-letter-copywriter',
  email: 'email-copywriter',
  'email marketing': 'email-copywriter',
  'email copywriting': 'email-copywriter',
  'ad copy': 'ad-copywriter',
  ads: 'ad-copywriter',
  'facebook ads': 'ad-copywriter',
  'landing page': 'landing-page-copywriter',
  'landing page optimization': 'landing-page-copywriter',
  'sales funnel': 'sales-funnel-copywriter',
  funnel: 'sales-funnel-copywriter',
  upsell: 'upsell-downsell-copywriter',
  downsell: 'upsell-downsell-copywriter',
  'upsell sequence': 'upsell-downsell-copywriter',
  'average order value': 'upsell-downsell-copywriter',
  'lead generation': 'landing-page-copywriter',
  ai: 'ai-copywriting-consultant',
  'ai copywriting': 'ai-copywriting-consultant',
  'ai copywriting tools': 'ai-copywriting-consultant',
  chatgpt: 'ai-copywriting-consultant',
  'direct mail': 'sales-letter-copywriter',
}

const tagToVertical: Record<string, string> = {
  health: 'health-supplement-copywriter',
  supplement: 'health-supplement-copywriter',
  supplements: 'health-supplement-copywriter',
  nutraceutical: 'health-supplement-copywriter',
  'supplement copywriting': 'health-supplement-copywriter',
  finance: 'financial-copywriter',
  financial: 'financial-copywriter',
  'financial copywriting': 'financial-copywriter',
  ecommerce: 'ecommerce-dtc-copywriter',
  'e-commerce': 'ecommerce-dtc-copywriter',
  dtc: 'ecommerce-dtc-copywriter',
  'ecommerce copywriting': 'ecommerce-dtc-copywriter',
  'dtc copywriting': 'ecommerce-dtc-copywriter',
  'product descriptions': 'ecommerce-dtc-copywriter',
  clickbank: 'clickbank-copywriter',
  saas: 'saas-copywriter',
  'saas copywriting': 'saas-copywriter',
  'free trial conversion': 'saas-copywriter',
  'info product': 'info-product-copywriter',
  course: 'info-product-copywriter',
}

const serviceTitles: Record<string, string> = {
  'vsl-copywriter': 'VSL Copywriter',
  'sales-page-copywriter': 'Sales Page Copywriter',
  'sales-letter-copywriter': 'Sales Letter Copywriter',
  'email-copywriter': 'Email Copywriter',
  'ad-copywriter': 'Ad Copywriter',
  'landing-page-copywriter': 'Landing Page Copywriter',
  'sales-funnel-copywriter': 'Sales Funnel Copywriter',
  'upsell-downsell-copywriter': 'Upsell & Downsell Copywriter',
  'ai-copywriting-consultant': 'AI Copywriting Consultant',
}

const verticalTitles: Record<string, string> = {
  'health-supplement-copywriter': 'Health & Supplements',
  'financial-copywriter': 'Financial Services',
  'ecommerce-dtc-copywriter': 'E-Commerce & DTC',
  'clickbank-copywriter': 'ClickBank',
  'saas-copywriter': 'SaaS',
  'info-product-copywriter': 'Info Products',
}

export function getRelatedPages(
  category: string,
  tags: string[]
): {
  services: { title: string; slug: string }[]
  verticals: { title: string; slug: string }[]
} {
  const serviceSlugs = new Set<string>()
  const verticalSlugs = new Set<string>()

  // Add from category mapping
  const catServices = categoryToServices[category]
  if (catServices) {
    catServices.forEach((s) => serviceSlugs.add(s))
  }
  const catVerticals = categoryToVerticals[category]
  if (catVerticals) {
    catVerticals.forEach((v) => verticalSlugs.add(v))
  }

  // Add from tag mappings
  for (const tag of tags) {
    const normalizedTag = tag.toLowerCase()
    if (tagToService[normalizedTag]) {
      serviceSlugs.add(tagToService[normalizedTag])
    }
    if (tagToVertical[normalizedTag]) {
      verticalSlugs.add(tagToVertical[normalizedTag])
    }
  }

  // Limit to 3 of each
  const services = [...serviceSlugs].slice(0, 3).map((slug) => ({
    title: serviceTitles[slug] || slug,
    slug,
  }))

  const verticals = [...verticalSlugs].slice(0, 3).map((slug) => ({
    title: verticalTitles[slug] || slug,
    slug,
  }))

  return { services, verticals }
}
