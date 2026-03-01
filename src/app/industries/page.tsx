import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { ServiceCard } from '@/components/blocks/ServiceCard'
import { CTABanner } from '@/components/blocks/CTABanner'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SITE_URL } from '@/lib/constants'
import { industries } from '@/app/industries/_data/industries'

export const metadata: Metadata = {
  title: 'Industries | Direct-Response Copywriting by Niche',
  description:
    'Rob Palmer writes high-converting direct-response copy for health supplements, financial services, e-commerce, ClickBank, SaaS, and info products.',
  alternates: {
    canonical: `${SITE_URL}/industries`,
  },
}

export default function IndustriesPage() {
  return (
    <>
      <Hero
        variant="page"
        headline="Industry Expertise"
        subheadline="Direct-response copy tailored to the specific demands, compliance requirements, and buyer psychology of your niche."
      />
      <Breadcrumbs items={[{ label: 'Industries' }]} />

      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <FadeIn key={industry.slug} delay={index * 80} className="h-full">
                <ServiceCard
                  title={industry.title}
                  slug={industry.slug}
                  description={industry.shortDescription}
                  image={industry.heroImage}
                  imageAlt={industry.heroImageAlt}
                  basePath="/industries"
                />
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner
        headline="Need copy for a different niche?"
        subtext="I have written for dozens of industries. Let's talk about yours."
      />
    </>
  )
}
