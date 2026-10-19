import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { Badge } from '@/components/ui/Badge'
import { ServiceCard } from '@/components/blocks/ServiceCard'
import { CTABanner } from '@/components/blocks/CTABanner'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SITE_URL } from '@/lib/constants'
import { services } from './_data/services'

export const metadata: Metadata = {
  title: 'Creative Strategy & Direct-Response Copywriting Services',
  description:
    'Creative strategy for brands scaling on paid social, and the direct-response copy that delivers it: ads, VSLs, sales pages, emails, landers, funnels and upsells. $523M+ in tracked results.',
  alternates: { canonical: `${SITE_URL}/services` },
}

const strategy = services.filter((s) => s.tier === 'strategy')
const production = services.filter((s) => s.tier === 'production')

function Tier({
  badge,
  heading,
  intro,
  items,
  variant,
}: {
  badge: string
  heading: string
  intro: string
  items: typeof services
  variant?: 'default' | 'alt'
}) {
  return (
    <Section variant={variant} divider>
      <Container>
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="gold">{badge}</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950 mt-6">{heading}</h2>
            <p className="mt-4 text-lg text-ink-700 font-body">{intro}</p>
          </div>
        </FadeIn>
        <ul role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((service, index) => (
            <li key={service.slug}>
              <FadeIn delay={index * 80} className="h-full">
                <ServiceCard
                  title={service.title}
                  slug={service.slug}
                  description={service.shortDescription}
                  image={service.heroImage}
                  imageAlt={service.heroImageAlt}
                />
              </FadeIn>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

export default function ServicesPage() {
  return (
    <>
      <Hero
        variant="page"
        headline="Creative Strategy First. Then the Copy That Delivers It."
        subheadline="Most engagements start with strategy: the angles, the testing loop, the system. Everything below it is the creative I build to run that strategy."
      />
      <Breadcrumbs items={[{ label: 'Services' }]} />
      <Tier
        badge="Strategy"
        heading="Where an engagement usually starts"
        intro="Creative strategy, AI workflow installation and conversion diagnostics: the work that decides what gets made and why."
        items={strategy}
      />
      <Tier
        badge="Production"
        heading="The creative I build"
        intro="Every format in the direct-response arsenal, written as one argument from ad to order."
        items={production}
        variant="alt"
      />
      <CTABanner
        headline="Not sure where to start?"
        subtext="Book a free strategy call. Retainer or project, whichever fits: we'll work out the right shape on the call."
      />
    </>
  )
}
