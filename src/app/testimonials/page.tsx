import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { TestimonialCard } from '@/components/blocks/TestimonialCard'
import { CTABanner } from '@/components/blocks/CTABanner'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { testimonials } from '@/content/testimonials'

export const metadata: Metadata = {
  title: 'Client Testimonials',
  description:
    'Read what clients say about working with Rob Palmer. 36+ testimonials from CEOs, marketing directors, and top direct-response marketers.',
}

export default function TestimonialsPage() {
  return (
    <>
      <Hero
        variant="page"
        headline="What Clients Say"
        subheadline="36+ testimonials from CEOs, marketing directors, and top direct-response marketers."
      />
      <Breadcrumbs items={[{ label: 'Testimonials' }]} />

      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                variant={testimonial.featured ? 'featured' : 'default'}
              />
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner
        headline="Ready to become the next success story?"
        subtext="Book a free strategy call to discuss your project."
      />
    </>
  )
}
