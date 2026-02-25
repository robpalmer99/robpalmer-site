import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'

const services = [
  {
    title: 'Video Sales Letters',
    slug: '/services/vsl-copywriter',
    icon: '🎬',
    description: 'High-converting VSLs that turn cold traffic into customers.',
  },
  {
    title: 'Sales Pages',
    slug: '/services/sales-page-copywriter',
    icon: '📄',
    description: 'Long-form sales pages engineered to convert browsers into buyers.',
  },
  {
    title: 'Email Sequences',
    slug: '/services/email-copywriter',
    icon: '✉️',
    description: 'Revenue-driving launches, nurture sequences, and broadcasts.',
  },
  {
    title: 'Ad Copy',
    slug: '/services/ad-copywriter',
    icon: '📢',
    description: 'Scroll-stopping ads for Facebook, Google, YouTube, and native.',
  },
  {
    title: 'Landing Pages',
    slug: '/services/landing-page-copywriter',
    icon: '🎯',
    description: 'Conversion-optimized pages for lead gen and direct sales.',
  },
  {
    title: 'Sales Funnels',
    slug: '/services/sales-funnel-copywriter',
    icon: '🔄',
    description: 'End-to-end funnel copy from ad to upsell, maximizing AOV.',
  },
]

const industries = [
  {
    title: 'Health & Supplements',
    slug: '/industries/health-supplement-copywriter',
    description: 'Compliance-aware DR copy for supplements and nutraceuticals.',
  },
  {
    title: 'Financial Services',
    slug: '/industries/financial-copywriter',
    description: 'DR copy for investing, trading, and financial products.',
  },
  {
    title: 'E-Commerce & DTC',
    slug: '/industries/ecommerce-dtc-copywriter',
    description: 'Conversion copy for online brands and DTC products.',
  },
  {
    title: 'ClickBank',
    slug: '/industries/clickbank-copywriter',
    description: 'Proven funnels built for the ClickBank marketplace.',
  },
  {
    title: 'SaaS',
    slug: '/industries/saas-copywriter',
    description: 'DR principles applied to software marketing.',
  },
  {
    title: 'Info Products',
    slug: '/industries/info-product-copywriter',
    description: 'Launch sequences and evergreen systems for digital products.',
  },
]

export function SpecialtyGrid() {
  return (
    <>
      {/* Services */}
      <Section variant="alt">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950">
              What I Specialize In
            </h2>
            <p className="mt-4 text-lg text-paper-600 font-body">
              High-stakes direct-response copy. Every project is a strategic
              engagement designed to deliver measurable ROI.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={service.slug}
                className="group block rounded-xl border border-paper-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-gold-200 hover:-translate-y-0.5"
              >
                <div className="text-2xl mb-3">{service.icon}</div>
                <h3 className="font-heading text-lg font-bold text-ink-950 group-hover:text-gold-600 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-paper-600 font-body leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Industries */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950">
              Industries I Work In
            </h2>
            <p className="mt-4 text-lg text-paper-600 font-body">
              Deep vertical expertise across the highest-converting
              direct-response markets.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={industry.slug}
                className="group block rounded-xl border border-paper-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-gold-200 hover:-translate-y-0.5"
              >
                <h3 className="font-heading text-lg font-bold text-ink-950 group-hover:text-gold-600 transition-colors">
                  {industry.title}
                </h3>
                <p className="mt-2 text-sm text-paper-600 font-body leading-relaxed">
                  {industry.description}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
