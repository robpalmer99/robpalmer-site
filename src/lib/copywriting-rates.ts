/**
 * Copywriting rates calculator engine.
 *
 * Rate data based on industry surveys, freelancer communities,
 * and 30+ years of direct-response copywriting market experience.
 */

// ─── Types ───────────────────────────────────────────────────────────────────

export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert'
export type ProjectType =
  | 'sales-page'
  | 'vsl-script'
  | 'email-sequence'
  | 'landing-page'
  | 'ad-copy'
  | 'sales-letter'
  | 'sales-funnel'
  | 'upsell-downsell'
  | 'website-copy'
  | 'case-study'
export type Niche =
  | 'health-supplement'
  | 'financial'
  | 'ecommerce-dtc'
  | 'clickbank'
  | 'saas'
  | 'info-products'
  | 'general'
export type PricingModel = 'per-project' | 'hourly' | 'retainer'

export interface RateEstimate {
  low: number
  mid: number
  high: number
  unit: string
  projectType: ProjectTypeInfo
  experienceInfo: ExperienceInfo
  nicheInfo: NicheInfo
  pricingModelInfo: PricingModelInfo
  tips: string[]
  upsellOpportunities: string[]
}

interface ProjectTypeInfo {
  label: string
  slug: string
  description: string
  typicalDeliverables: string
  typicalTimeline: string
}

interface ExperienceInfo {
  label: string
  description: string
  multiplier: number
}

interface NicheInfo {
  label: string
  premiumFactor: number
  note: string
}

interface PricingModelInfo {
  label: string
  description: string
  pros: string[]
  cons: string[]
}

// ─── Data ────────────────────────────────────────────────────────────────────

const PROJECT_TYPES: Record<ProjectType, ProjectTypeInfo & { baseRange: [number, number, number] }> = {
  'sales-page': {
    label: 'Sales Page',
    slug: 'sales-page-copywriter',
    description: 'Long-form sales page (typically 2,000-10,000+ words)',
    typicalDeliverables: 'Headline variations, lead, body copy, offer stack, CTA, guarantee section, testimonial placement',
    typicalTimeline: '1-3 weeks',
    baseRange: [1500, 4000, 10000],
  },
  'vsl-script': {
    label: 'VSL Script',
    slug: 'vsl-copywriter',
    description: 'Video sales letter script (typically 15-45 minutes)',
    typicalDeliverables: 'Full script with stage directions, hook, story arc, offer, close, and slide/visual notes',
    typicalTimeline: '1-3 weeks',
    baseRange: [2000, 5000, 15000],
  },
  'email-sequence': {
    label: 'Email Sequence',
    slug: 'email-copywriter',
    description: 'Multi-email campaign (typically 5-12 emails)',
    typicalDeliverables: 'Subject lines (2-3 variations each), preview text, body copy, CTAs for each email',
    typicalTimeline: '1-2 weeks',
    baseRange: [1000, 3000, 8000],
  },
  'landing-page': {
    label: 'Landing Page',
    slug: 'landing-page-copywriter',
    description: 'Opt-in or lead generation page (typically 500-1,500 words)',
    typicalDeliverables: 'Headline, subhead, bullet points, form copy, CTA, and thank-you page copy',
    typicalTimeline: '3-7 days',
    baseRange: [500, 1500, 5000],
  },
  'ad-copy': {
    label: 'Ad Copy Package',
    slug: 'sales-page-copywriter',
    description: 'Paid ad creative (typically 5-10 ad variations per platform)',
    typicalDeliverables: 'Primary text, headlines, descriptions, and CTA variations for Meta/Google/YouTube',
    typicalTimeline: '3-7 days',
    baseRange: [500, 1500, 5000],
  },
  'sales-letter': {
    label: 'Sales Letter',
    slug: 'sales-letter-copywriter',
    description: 'Long-form direct mail or digital sales letter (typically 4-16 pages)',
    typicalDeliverables: 'Johnson Box/teaser, headline, lead, body, offer, guarantee, P.S., order form copy',
    typicalTimeline: '1-3 weeks',
    baseRange: [2000, 5000, 15000],
  },
  'sales-funnel': {
    label: 'Complete Sales Funnel',
    slug: 'sales-funnel-copywriter',
    description: 'Full funnel: landing page + sales page + emails + upsell/downsell pages',
    typicalDeliverables: 'Opt-in page, sales page/VSL, order form, upsell page(s), downsell page, email sequence (7-12 emails)',
    typicalTimeline: '3-6 weeks',
    baseRange: [5000, 12000, 35000],
  },
  'upsell-downsell': {
    label: 'Upsell/Downsell Pages',
    slug: 'sales-funnel-copywriter',
    description: 'Post-purchase offer pages (typically 1-2 pages)',
    typicalDeliverables: 'Upsell page copy, downsell variation, order bump copy if applicable',
    typicalTimeline: '3-7 days',
    baseRange: [500, 1500, 5000],
  },
  'website-copy': {
    label: 'Website Copy',
    slug: 'sales-page-copywriter',
    description: 'Full website copy (typically 5-10 pages)',
    typicalDeliverables: 'Home, About, Services, Contact, and key product/solution pages',
    typicalTimeline: '2-4 weeks',
    baseRange: [2000, 5000, 15000],
  },
  'case-study': {
    label: 'Case Study',
    slug: 'sales-page-copywriter',
    description: 'Customer success story (typically 1,000-2,500 words)',
    typicalDeliverables: 'Customer interview, problem/solution/results narrative, pull quotes, sidebar stats',
    typicalTimeline: '1-2 weeks',
    baseRange: [800, 2000, 5000],
  },
}

const EXPERIENCE_LEVELS: Record<ExperienceLevel, ExperienceInfo> = {
  beginner: {
    label: '0-2 Years',
    description: 'New to professional copywriting. Building portfolio and skills.',
    multiplier: 0.5,
  },
  intermediate: {
    label: '3-5 Years',
    description: 'Solid portfolio with proven results. Regular client work.',
    multiplier: 1.0,
  },
  advanced: {
    label: '6-10 Years',
    description: 'Deep specialization. Consistent track record of strong results.',
    multiplier: 1.6,
  },
  expert: {
    label: '10+ Years',
    description: 'Industry reputation. Significant tracked revenue. Premium positioning.',
    multiplier: 2.5,
  },
}

const NICHES: Record<Niche, NicheInfo> = {
  'health-supplement': {
    label: 'Health & Supplement',
    premiumFactor: 1.3,
    note: 'Higher rates due to compliance complexity (FTC/FDA regulations), specialized knowledge requirements, and high revenue potential per customer.',
  },
  financial: {
    label: 'Financial Services',
    premiumFactor: 1.4,
    note: 'Premium rates justified by regulatory compliance requirements (SEC/FINRA), high-value transactions, and the specialized knowledge needed to write credibly in this space.',
  },
  'ecommerce-dtc': {
    label: 'E-Commerce / DTC',
    premiumFactor: 1.1,
    note: 'Slightly above average rates. DTC brands value conversion-focused copy and are willing to pay for measurable ROI improvements.',
  },
  clickbank: {
    label: 'ClickBank / Affiliate',
    premiumFactor: 1.2,
    note: 'Performance-driven market where copy directly determines revenue. Experienced ClickBank copywriters often negotiate royalty deals on top of flat fees.',
  },
  saas: {
    label: 'SaaS / B2B',
    premiumFactor: 1.25,
    note: 'Higher rates reflect the need to understand complex products, longer sales cycles, and the high lifetime value of SaaS customers.',
  },
  'info-products': {
    label: 'Info Products / Courses',
    premiumFactor: 1.15,
    note: 'Solid market with clear ROI tracking. Launch-based pricing can be higher than evergreen. Some copywriters negotiate percentage-of-revenue deals.',
  },
  general: {
    label: 'General / Local Business',
    premiumFactor: 1.0,
    note: 'Baseline rates. General market clients may have smaller budgets but offer steady work and referral opportunities.',
  },
}

const PRICING_MODELS: Record<PricingModel, PricingModelInfo> = {
  'per-project': {
    label: 'Per Project',
    description: 'Fixed fee for the complete deliverable',
    pros: [
      'Clear expectations for both parties',
      'Rewards efficiency — faster work means higher effective hourly rate',
      'Clients prefer predictable costs',
      'Easier to raise rates over time',
    ],
    cons: [
      'Risk of scope creep without clear boundaries',
      'Must estimate time accurately to maintain profitability',
      'Revision rounds need to be defined upfront',
    ],
  },
  hourly: {
    label: 'Hourly Rate',
    description: 'Billed per hour worked',
    pros: [
      'Simple to track and invoice',
      'Protected against scope creep',
      'Good for consulting and strategy sessions',
    ],
    cons: [
      'Penalizes expertise — faster work means less income',
      'Clients may resist high hourly rates even when total cost is lower',
      'Creates incentive misalignment (client wants speed, hourly billing rewards slowness)',
      'Most experienced copywriters move away from hourly pricing',
    ],
  },
  retainer: {
    label: 'Monthly Retainer',
    description: 'Fixed monthly fee for ongoing work',
    pros: [
      'Predictable recurring income',
      'Deeper client relationships lead to better copy',
      'Less time spent on proposals and client acquisition',
      'Clients get priority access and faster turnaround',
    ],
    cons: [
      'Must manage workload carefully to avoid under- or over-delivering',
      'Can become a "discount" if not scoped properly',
      'Client may expect unlimited revisions',
      'Need clear deliverable definitions in the retainer agreement',
    ],
  },
}

// ─── Hourly rate lookup ──────────────────────────────────────────────────────

const HOURLY_RATES: Record<ExperienceLevel, [number, number, number]> = {
  beginner: [25, 50, 75],
  intermediate: [75, 125, 200],
  advanced: [150, 250, 400],
  expert: [300, 500, 800],
}

// ─── Retainer base (monthly, for ~20 hours/month of work) ────────────────────

const RETAINER_RATES: Record<ExperienceLevel, [number, number, number]> = {
  beginner: [1000, 2000, 3500],
  intermediate: [2500, 5000, 8000],
  advanced: [5000, 8000, 15000],
  expert: [10000, 20000, 40000],
}

// ─── Calculator ──────────────────────────────────────────────────────────────

export function calculateRates(
  experience: ExperienceLevel,
  projectType: ProjectType,
  niche: Niche,
  pricingModel: PricingModel
): RateEstimate {
  const projectInfo = PROJECT_TYPES[projectType]
  const experienceInfo = EXPERIENCE_LEVELS[experience]
  const nicheInfo = NICHES[niche]
  const pricingModelInfo = PRICING_MODELS[pricingModel]

  let low: number
  let mid: number
  let high: number
  let unit: string

  if (pricingModel === 'hourly') {
    const [hLow, hMid, hHigh] = HOURLY_RATES[experience]
    low = Math.round(hLow * nicheInfo.premiumFactor)
    mid = Math.round(hMid * nicheInfo.premiumFactor)
    high = Math.round(hHigh * nicheInfo.premiumFactor)
    unit = '/hour'
  } else if (pricingModel === 'retainer') {
    const [rLow, rMid, rHigh] = RETAINER_RATES[experience]
    low = Math.round(rLow * nicheInfo.premiumFactor)
    mid = Math.round(rMid * nicheInfo.premiumFactor)
    high = Math.round(rHigh * nicheInfo.premiumFactor)
    unit = '/month'
  } else {
    // Per-project: base range × experience multiplier × niche premium
    const [bLow, bMid, bHigh] = projectInfo.baseRange
    low = Math.round(bLow * experienceInfo.multiplier * nicheInfo.premiumFactor)
    mid = Math.round(bMid * experienceInfo.multiplier * nicheInfo.premiumFactor)
    high = Math.round(bHigh * experienceInfo.multiplier * nicheInfo.premiumFactor)
    unit = '/project'
  }

  // Tips
  const tips: string[] = []

  if (experience === 'beginner') {
    tips.push('Focus on building a portfolio of 3-5 strong samples before raising rates. Discounted projects that produce measurable results are worth more than full-price projects with no data.')
    tips.push('Track every result you produce — conversion rates, revenue generated, response rates. Specific numbers justify rate increases faster than anything else.')
  }
  if (experience === 'intermediate') {
    tips.push('Start specializing in 1-2 niches or project types. Specialists command 50-100% higher rates than generalists with the same experience level.')
    tips.push('Begin requesting performance data from clients. Tracked results are the foundation of premium pricing.')
  }
  if (experience === 'advanced') {
    tips.push('Consider adding performance-based components (royalties, revenue share) to your pricing. At this level, your copy should be generating measurable ROI.')
    tips.push('Raise your rates 15-25% and see what happens. Most experienced copywriters undercharge relative to the value they deliver.')
  }
  if (experience === 'expert') {
    tips.push('Your rates should reflect the revenue your copy generates, not the time it takes to write. A sales page that generates $500K+ in revenue is worth a premium fee.')
    tips.push('Consider offering strategy consulting alongside copywriting. Expert-level strategic guidance is often more valuable to clients than the writing itself.')
  }

  if (pricingModel === 'hourly' && experience !== 'beginner') {
    tips.push('Consider switching to per-project pricing. As your speed increases with experience, hourly billing penalizes your expertise.')
  }
  if (pricingModel === 'per-project') {
    tips.push('Always define the number of revision rounds in your contract. Two rounds is standard. Additional rounds should be billed separately.')
  }
  if (pricingModel === 'retainer') {
    tips.push('Define specific deliverables in your retainer agreement (e.g., "4 emails + 1 landing page per month") rather than offering unlimited access to your time.')
  }

  if (niche === 'health-supplement' || niche === 'financial') {
    tips.push('Compliance expertise commands a premium in this niche. If you understand the regulatory landscape, emphasize it in your proposals.')
  }
  if (niche === 'clickbank') {
    tips.push('In the ClickBank space, consider negotiating a base fee plus royalty (1-5% of net revenue). Top ClickBank copywriters earn more from royalties than flat fees.')
  }
  if (niche === 'saas') {
    tips.push('SaaS clients value long-term relationships. Position retainer arrangements as a way to continuously optimize conversion rates across the customer lifecycle.')
  }

  // Upsell opportunities
  const upsellOpportunities: string[] = []

  if (projectType === 'sales-page' || projectType === 'vsl-script') {
    upsellOpportunities.push('Add an email follow-up sequence (5-7 emails) for buyers and non-buyers')
    upsellOpportunities.push('Include upsell/downsell page copy to maximize average order value')
    upsellOpportunities.push('Offer headline and lead A/B test variations')
  }
  if (projectType === 'email-sequence') {
    upsellOpportunities.push('Add a landing page or sales page to complete the funnel')
    upsellOpportunities.push('Include subject line A/B test variations (2-3 per email)')
    upsellOpportunities.push('Offer a monthly retainer for ongoing email campaigns')
  }
  if (projectType === 'landing-page') {
    upsellOpportunities.push('Add a thank-you page with a tripwire offer')
    upsellOpportunities.push('Include an email nurture sequence for leads')
    upsellOpportunities.push('Offer A/B test variations for the headline and CTA')
  }
  if (projectType === 'ad-copy') {
    upsellOpportunities.push('Add the landing page copy the ads drive to')
    upsellOpportunities.push('Offer a monthly retainer for ongoing ad creative refreshes')
    upsellOpportunities.push('Include a competitor ad analysis and messaging strategy document')
  }
  if (projectType === 'sales-funnel') {
    upsellOpportunities.push('Add retargeting ad copy for funnel drop-offs')
    upsellOpportunities.push('Include a post-purchase onboarding email sequence')
    upsellOpportunities.push('Offer ongoing optimization retainer (monthly A/B testing)')
  }

  return {
    low,
    mid,
    high,
    unit,
    projectType: {
      label: projectInfo.label,
      slug: projectInfo.slug,
      description: projectInfo.description,
      typicalDeliverables: projectInfo.typicalDeliverables,
      typicalTimeline: projectInfo.typicalTimeline,
    },
    experienceInfo,
    nicheInfo,
    pricingModelInfo,
    tips,
    upsellOpportunities,
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export const PROJECT_TYPE_OPTIONS: { value: ProjectType; label: string }[] = [
  { value: 'sales-page', label: 'Sales Page' },
  { value: 'vsl-script', label: 'VSL Script' },
  { value: 'email-sequence', label: 'Email Sequence' },
  { value: 'landing-page', label: 'Landing Page' },
  { value: 'ad-copy', label: 'Ad Copy Package' },
  { value: 'sales-letter', label: 'Sales Letter' },
  { value: 'sales-funnel', label: 'Complete Sales Funnel' },
  { value: 'upsell-downsell', label: 'Upsell/Downsell Pages' },
  { value: 'website-copy', label: 'Website Copy' },
  { value: 'case-study', label: 'Case Study' },
]

export const EXPERIENCE_OPTIONS: { value: ExperienceLevel; label: string }[] = [
  { value: 'beginner', label: '0-2 Years (Beginner)' },
  { value: 'intermediate', label: '3-5 Years (Intermediate)' },
  { value: 'advanced', label: '6-10 Years (Advanced)' },
  { value: 'expert', label: '10+ Years (Expert)' },
]

export const NICHE_OPTIONS: { value: Niche; label: string }[] = [
  { value: 'general', label: 'General / Local Business' },
  { value: 'health-supplement', label: 'Health & Supplement' },
  { value: 'financial', label: 'Financial Services' },
  { value: 'ecommerce-dtc', label: 'E-Commerce / DTC' },
  { value: 'clickbank', label: 'ClickBank / Affiliate' },
  { value: 'saas', label: 'SaaS / B2B' },
  { value: 'info-products', label: 'Info Products / Courses' },
]

export const PRICING_MODEL_OPTIONS: { value: PricingModel; label: string }[] = [
  { value: 'per-project', label: 'Per Project' },
  { value: 'hourly', label: 'Hourly Rate' },
  { value: 'retainer', label: 'Monthly Retainer' },
]
