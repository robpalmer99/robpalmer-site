import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { TestimonialCard } from '@/components/blocks/TestimonialCard'
import { testimonials } from '@/content/testimonials'

// Hand-picked testimonials that showcase different credibility angles
const selectedIds = [
  '1', // Gary Lubner — CEO credibility, "Secret Weapon"
  '2', // Stefan Georgi — industry respect, hired as Copy Chief
  '4', // Ben Palmer — measurable results, 300% ROAS
  '5', // Conor Reynolds — conversion rates, 8% on cold traffic
  '6', // Mark Shay — process praise, "most methodical"
  '10', // Keith Mueller — quality praise, "Moses receiving the Ten Commandments"
]

const selectedTestimonials = selectedIds
  .map((id) => testimonials.find((t) => t.id === id))
  .filter(Boolean)

export function AboutTestimonials() {
  return (
    <Section variant="gold">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950">
            What Clients Say
          </h2>
          <p className="mt-4 text-lg text-ink-700 font-body">
            From Fortune 500 CEOs to ClickBank vendors — here is what it is like
            to work with me.
          </p>
        </div>
        <ul role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {selectedTestimonials.map(
            (testimonial) =>
              testimonial && (
                <li key={testimonial.id}>
                  <TestimonialCard
                    testimonial={testimonial}
                    variant="default"
                  />
                </li>
              )
          )}
        </ul>
        <div className="text-center mt-10">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
          >
            Read all 36+ testimonials
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </Container>
    </Section>
  )
}
