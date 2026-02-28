import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { ServiceCard } from '@/components/blocks/ServiceCard'
import { CTABanner } from '@/components/blocks/CTABanner'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SITE_URL } from '@/lib/constants'
import { verticals } from '@/app/verticals/_data/verticals'

export const metadata: Metadata = {
  title: 'Verticals | Direct-Response Copywriting by Niche',
  description:
    'Rob Palmer writes high-converting direct-response copy for health supplements, financial services, e-commerce, ClickBank, SaaS, and info products.',
  alternates: {
    canonical: `${SITE_URL}/verticals`,
  },
}

export default function VerticalsPage() {
  return (
    <>
      <Hero
        variant="page"
        headline="Vertical Expertise"
        subheadline="Direct-response copy tailored to the specific demands, compliance requirements, and buyer psychology of your niche."
      />
      <Breadcrumbs items={[{ label: 'Verticals' }]} />

      <Section>
        <Container>
          <ul role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticals.map((vertical) => (
              <li key={vertical.slug}>
                <ServiceCard
                  title={vertical.title}
                  slug={vertical.slug}
                  description={vertical.shortDescription}
                  image={vertical.heroImage}
                  imageAlt={vertical.heroImageAlt}
                  basePath="/verticals"
                />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CTABanner
        headline="Need copy for a different niche?"
        subtext="I have written for dozens of verticals. Let's talk about yours."
      />
    </>
  )
}
