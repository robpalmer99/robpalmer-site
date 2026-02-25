export interface PortfolioItem {
  title: string
  slug: string
  category: 'VSL' | 'Sales Page' | 'Email' | 'Hybrid'
  niche: string
  description: string
  image: string
  imageAlt: string
  result?: string
  client?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Weight-Loss VSL',
    slug: 'weight-loss-vsl',
    category: 'VSL',
    niche: 'Health',
    description:
      'High-converting video sales letter for a direct-to-consumer weight-loss supplement. Built on a problem-agitation-solution framework with a strong emotional hook and urgency-driven close.',
    image: '/images/portfolio/weight-loss-vsl.jpg',
    imageAlt: 'Woman stretching in a bright fitness studio — weight-loss VSL project',
    result: '8.2% cold traffic conversion',
    client: 'ClickBank Vendor',
  },
  {
    title: 'Dynamic Brain',
    slug: 'dynamic-brain',
    category: 'VSL',
    niche: 'Health',
    description:
      'Nootropic supplement VSL targeting an older demographic concerned about cognitive decline. Research-heavy script with clinical study citations and authority-building narrative.',
    image: '/images/portfolio/dynamic-brain.jpg',
    imageAlt: 'Abstract neural network illustration — Dynamic Brain VSL project',
    result: '$2.1M first 90 days',
    client: 'Stonehenge Health',
  },
  {
    title: 'Abundant',
    slug: 'abundant',
    category: 'Sales Page',
    niche: 'Info Product',
    description:
      'Long-form sales page for a manifestation and personal development info product. Storytelling-driven copy with embedded social proof and a multi-tier pricing structure.',
    image: '/images/portfolio/abundant.jpg',
    imageAlt: 'Laptop showing analytics dashboard — Abundant sales page project',
    result: '340% ROAS on Facebook',
  },
  {
    title: 'Monetari Fund',
    slug: 'monetari-fund',
    category: 'Sales Page',
    niche: 'Finance',
    description:
      'Compliant financial services sales page for a crypto investment education product. Navigated strict regulatory language while maintaining persuasive direct-response structure.',
    image: '/images/portfolio/monetari-fund.jpg',
    imageAlt: 'Stock market data on a trading screen — Monetari Fund sales page project',
    result: '5.7% opt-in to sale',
    client: 'Monetari',
  },
  {
    title: 'Puradrop',
    slug: 'puradrop',
    category: 'VSL',
    niche: 'Health',
    description:
      'Apple cider vinegar gummy supplement VSL targeting women over 40. Conversational script style with relatable storytelling, ingredient deep-dives, and scarcity elements.',
    image: '/images/portfolio/puradrop.jpg',
    imageAlt: 'Healthy supplements and natural ingredients — Puradrop VSL project',
    result: '300% ROAS',
    client: 'ClickBank Vendor',
  },
  {
    title: 'Just Throw Some Sexy On It!',
    slug: 'just-throw-some-sexy-on-it',
    category: 'Sales Page',
    niche: 'Marketing',
    description:
      'Bold, personality-driven sales page for a marketing consulting offer. High-energy voice with pattern interrupts, proof stacking, and a premium positioning strategy.',
    image: '/images/portfolio/sexy-marketing.jpg',
    imageAlt: 'Team brainstorming marketing strategy around a whiteboard',
  },
  {
    title: 'Supernus',
    slug: 'supernus',
    category: 'VSL',
    niche: 'Health',
    description:
      'Pharmaceutical-grade supplement VSL focused on joint health and mobility. Clinical tone balanced with emotional storytelling to build credibility and urgency.',
    image: '/images/portfolio/supernus.jpg',
    imageAlt: 'Medical professional reviewing research data — Supernus VSL project',
    result: '$800K in 60 days',
  },
  {
    title: 'BodyHacker',
    slug: 'bodyhacker',
    category: 'VSL',
    niche: 'Health',
    description:
      'Biohacking and performance supplement VSL targeting men 25–45. Science-forward script with authority positioning, mechanism reveal, and testosterone-related hooks.',
    image: '/images/portfolio/bodyhacker.jpg',
    imageAlt: 'Athletic man training with weights — BodyHacker VSL project',
    result: '6.4% conversion rate',
  },
  {
    title: 'Coffee Slimmer Pro',
    slug: 'coffee-slimmer-pro',
    category: 'VSL',
    niche: 'Health',
    description:
      'Weight-loss coffee supplement VSL with a unique mechanism angle. Leveraged the familiarity of coffee drinking as a gateway to the supplement pitch with strong AOV optimization.',
    image: '/images/portfolio/coffee-slimmer.jpg',
    imageAlt: 'Artisan coffee cup on a wooden table — Coffee Slimmer Pro VSL project',
    result: '$1.4M in 6 months',
    client: 'ClickBank Vendor',
  },
  {
    title: 'Biz-Op Hybrid Sales Page & VSL',
    slug: 'biz-op-hybrid',
    category: 'Hybrid',
    niche: 'Biz-Op',
    description:
      'Combined sales page and embedded VSL for a business opportunity offer. Full-funnel copy including the front-end page, upsell sequence, and email follow-up series.',
    image: '/images/portfolio/biz-op-hybrid.jpg',
    imageAlt: 'Entrepreneur working on laptop in a modern office — Biz-Op project',
    result: '4.8% front-end conversion',
  },
  {
    title: 'Red Oak Capital — Financial VSL',
    slug: 'red-oak-capital',
    category: 'VSL',
    niche: 'Finance',
    description:
      'Investment newsletter VSL for a financial publisher. Compliance-first copywriting with market analysis hooks, credibility stacking, and evergreen urgency mechanics.',
    image: '/images/portfolio/red-oak-capital.jpg',
    imageAlt: 'Financial charts and money management concept — Red Oak Capital project',
    result: '3.2% cold traffic conversion',
    client: 'Red Oak Capital',
  },
  {
    title: 'Chatterkick — SaaS Email Sequence',
    slug: 'chatterkick',
    category: 'Email',
    niche: 'SaaS',
    description:
      'Seven-email onboarding and conversion sequence for a social media management SaaS platform. Behavior-triggered messaging with case study integration and trial-to-paid optimization.',
    image: '/images/portfolio/chatterkick.jpg',
    imageAlt: 'Social media analytics dashboard on screen — Chatterkick email project',
    result: '22% trial-to-paid lift',
    client: 'Chatterkick',
  },
]

export const portfolioCategories = ['All', 'VSL', 'Sales Page', 'Email', 'Hybrid'] as const
export type PortfolioCategory = (typeof portfolioCategories)[number]

export function getPortfolioByCategory(category: PortfolioCategory): PortfolioItem[] {
  if (category === 'All') return portfolioItems
  return portfolioItems.filter((item) => item.category === category)
}
