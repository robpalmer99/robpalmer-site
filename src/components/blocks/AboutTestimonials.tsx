import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { TestimonialCard } from '@/components/blocks/TestimonialCard'
import { testimonials } from '@/content/testimonials'
import { TESTIMONIAL_COUNT } from '@/lib/constants'

// Hand-picked testimonials that showcase different credibility angles —
// peer-endorsement triangle (Stefan + Justin + Mark Shay) + Belron CEO + measurable proof
const selectedIds = [
  '1', // Gary Lubner — CEO credibility, "Secret Weapon"
  '2', // Stefan Georgi — industry respect, hired as Copy Chief
  '3', // Justin Goff — peer endorsement, "knocked it out of the park"
  '4', // Ben Palmer — measurable results, 300% ROAS
  '5', // Conor Reynolds — conversion rates, 8% on cold traffic
  '6', // Mark Shay — process praise, "most methodical"
]

const selectedTestimonials = selectedIds
  .map((id) => testimonials.find((t) => t.id === id))
  .filter(Boolean)

export function AboutTestimonials() {
  return (
    <Section variant="gold">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <FadeIn>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950">
              What Clients Say
            </h2>
            <p className="mt-4 text-lg text-ink-700 font-body">
              From Fortune 500 CEOs to ClickBank vendors — here is what it is like
              to work with me.
            </p>
          </FadeIn>
        </div>
        <ul role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {selectedTestimonials.map(
            (testimonial, index) =>
              testimonial && (
                <li key={testimonial.id}>
                  <FadeIn delay={index * 100} className="h-full">
                    <TestimonialCard
                      testimonial={testimonial}
                      variant="default"
                    />
                  </FadeIn>
                </li>
              )
          )}
        </ul>
        <div className="text-center mt-10">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-gold-600 hover:text-gold-500 transition-colors"
          >
            Read all {TESTIMONIAL_COUNT} testimonials
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </Container>
    </Section>
  )
}
