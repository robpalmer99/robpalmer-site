import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { CTABanner } from '@/components/blocks/CTABanner'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'The $523M Secret Weapon Campaign | Belron/Safelite Case Study',
  description:
    'How Rob Palmer created a direct-response campaign for Belron/Safelite that generated $523 million in sales over 9 years — after 5 previous copywriters had failed.',
  alternates: {
    canonical: `${SITE_URL}/case-studies/belron-safelite-523m-campaign`,
  },
}

export default function BelronCaseStudyPage() {
  return (
    <>
      <Hero
        variant="page"
        headline="The $523M Secret Weapon"
        subheadline='How a single direct-response campaign generated $523 million in sales, ran for 9 years, and earned the title "Secret Weapon" from the CEO of Belron International.'
      />
      <Breadcrumbs
        items={[
          { label: 'Case Studies', href: '/case-studies' },
          { label: 'Belron/Safelite $523M Campaign' },
        ]}
      />

      <Section>
        <Container>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-paper-600 leading-relaxed font-body">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
              The Challenge
            </h2>
            <p>
              Belron International — the world&apos;s largest vehicle glass
              repair and replacement company, known in the US as Safelite
              AutoGlass — needed a direct-response campaign to drive auto glass
              replacement bookings. The stakes were high: windshield damage is a
              safety issue, and the campaign needed to convince vehicle owners to
              take action immediately rather than continuing to drive with
              compromised glass.
            </p>
            <p>
              Five previous award-winning copywriters had attempted the brief
              and failed to produce a campaign that met Belron&apos;s performance
              targets. The company was ready to try a different approach.
            </p>

            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 pt-4">
              The Approach
            </h2>
            <p>
              Rob Palmer took a fundamentally different approach from his
              predecessors. Instead of leading with features and convenience, he
              dug into the emotional core of the decision: safety. Through deep
              audience research, he discovered that the most powerful motivator
              was not the inconvenience of a cracked windshield — it was the
              fear of what could happen if the windshield failed in an accident.
            </p>
            <p>
              The resulting campaign used classic direct-response storytelling
              combined with urgency triggers and social proof to move prospects
              from awareness to action. Every element — from the headline to the
              call to action — was engineered for conversion.
            </p>

            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 pt-4">
              The Results
            </h2>
            <p>
              The campaign exceeded every performance target and ran for nine
              consecutive years — an extraordinary lifespan in direct-response
              marketing. Over its lifetime, the campaign generated $523 million
              in tracked sales for Belron and its subsidiaries worldwide.
            </p>
            <p>
              Beyond the revenue, the campaign contributed to saving hundreds of
              lives by motivating drivers to replace compromised windshields
              before accidents occurred. Gary Lubner, CEO of Belron
              International, called Rob &ldquo;a Secret Weapon.&rdquo;
            </p>

            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 pt-4">
              Key Takeaways
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Research-driven copy that taps into genuine emotional
                motivators outperforms clever creative every time.
              </li>
              <li>
                A well-crafted direct-response campaign can run for years
                without fatigue if the core message resonates.
              </li>
              <li>
                The right copywriter can succeed where multiple previous
                attempts have failed — it is about strategy, not just writing
                ability.
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      <CTABanner
        headline="Want results like these for your brand?"
        subtext="Let's discuss your project on a free strategy call."
      />
    </>
  )
}
