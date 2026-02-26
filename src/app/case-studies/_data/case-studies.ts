export interface CaseStudy {
  slug: string
  title: string
  client: string
  result: string
  description: string
  heroImage: string
  heroAlt: string
  metrics: { value: string; label: string }[]
  testimonial?: {
    quote: string
    author: string
    title: string
    company: string
  }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'belron-safelite-523m-campaign',
    title: 'The $523M Secret Weapon Campaign',
    client: 'Belron / Safelite',
    result: '$523M',
    description:
      'A direct-response campaign that ran for 9 years, generated $523 million in tracked sales, and saved hundreds of lives — after 5 previous award-winning copywriters had failed.',
    heroImage: '/images/case-studies/belron-hero.jpg',
    heroAlt: 'Windshield view from inside a car representing the Belron/Safelite auto glass campaign',
    metrics: [
      { value: '$523M', label: 'Tracked Sales' },
      { value: '9 Years', label: 'Campaign Lifespan' },
      { value: '5', label: 'Failed Before Rob' },
      { value: '35+', label: 'Countries Reached' },
    ],
    testimonial: {
      quote: 'You are our secret weapon. Keep your diary clear, please!',
      author: 'Gary Lubner',
      title: 'CEO',
      company: 'Belron International',
    },
  },
  {
    slug: 'apple-direct-mail-campaign',
    title: 'The Apple UK Direct Mail Campaign',
    client: 'Apple Computer UK',
    result: 'A/B Winner',
    description:
      'A direct mail campaign for Apple UK that was so successful it overwhelmed demand, caused a dealer revolt, and had to be shut down — proving the power of research-driven, A/B tested direct-response copy.',
    heroImage: '/images/case-studies/apple-hero.jpg',
    heroAlt: 'Vintage Apple computer setup representing the Apple UK direct mail campaign',
    metrics: [
      { value: '3', label: 'Offers A/B Tested' },
      { value: '#1', label: 'Response Rate' },
      { value: '3', label: 'Market Segments' },
      { value: '1', label: 'Copywriter (Rob)' },
    ],
    testimonial: undefined,
  },
]
