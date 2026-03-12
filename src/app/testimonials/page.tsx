import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { TestimonialCard } from '@/components/blocks/TestimonialCard'
import { CTABanner } from '@/components/blocks/CTABanner'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SITE_URL, TESTIMONIAL_COUNT } from '@/lib/constants'
import { testimonials } from '@/content/testimonials'

export const metadata: Metadata = {
  title: 'Client Testimonials | Rob Palmer – Direct-Response Copywriter',
  description:
    `Read what clients say about working with Rob Palmer. ${TESTIMONIAL_COUNT} testimonials from CEOs, marketing directors, and top direct-response marketers.`,
  alternates: {
    canonical: `${SITE_URL}/testimonials`,
  },
}

export default function TestimonialsPage() {
  return (
    <>
      <Hero
        variant="page"
        headline="What Clients Say"
        subheadline={`${TESTIMONIAL_COUNT} testimonials from CEOs, marketing directors, and top direct-response marketers.`}
      />
      <Breadcrumbs items={[{ label: 'Testimonials' }]} />

      <Section>
        <Container>
          <ul role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <li key={testimonial.id}>
                <FadeIn delay={(index % 6) * 80} className="h-full">
                  <TestimonialCard
                    testimonial={testimonial}
                    variant={testimonial.featured ? 'featured' : 'default'}
                  />
                </FadeIn>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CTABanner
        headline="Ready to become the next success story?"
        subtext="Book a free strategy call to discuss your project."
      />
    </>
  )
}
