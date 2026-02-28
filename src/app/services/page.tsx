import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { ServiceCard } from '@/components/blocks/ServiceCard'
import { CTABanner } from '@/components/blocks/CTABanner'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SITE_URL } from '@/lib/constants'
import { services } from './_data/services'

export const metadata: Metadata = {
  title: 'Direct-Response Copywriting Services',
  description:
    'Expert direct-response copywriting services: VSLs, sales pages, email sequences, ads, landing pages, funnels, and upsells. $523M+ in tracked results.',
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
}

export default function ServicesPage() {
  return (
    <>
      <Hero
        variant="page"
        headline="Direct-Response Copywriting Services"
        subheadline="Every service is engineered for one thing: moving the needle on your conversions and revenue."
      />
      <Breadcrumbs items={[{ label: 'Services' }]} />

      <Section>
        <Container>
          <ul role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <li key={service.slug}>
                <ServiceCard
                  title={service.title}
                  slug={service.slug}
                  description={service.shortDescription}
                  image={service.heroImage}
                  imageAlt={service.heroImageAlt}
                />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CTABanner
        headline="Not sure which service you need?"
        subtext="Book a free strategy call and we'll figure out the best approach for your business."
      />
    </>
  )
}
