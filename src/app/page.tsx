import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/Hero'
import { ClientLogoBar } from '@/components/blocks/ClientLogoBar'
import { StatsBar } from '@/components/blocks/StatsBar'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { ServiceCard } from '@/components/blocks/ServiceCard'
import { CaseStudyCard } from '@/components/blocks/CaseStudyCard'
import { TestimonialCard } from '@/components/blocks/TestimonialCard'
import { CTABanner } from '@/components/blocks/CTABanner'
import { services } from '@/app/services/_data/services'
import { featuredTestimonials } from '@/content/testimonials'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Rob Palmer | Direct-Response Copywriter | VSLs, Funnels & AI-Powered Copy',
  description:
    'Rob Palmer is a veteran direct-response copywriter with $523M+ in tracked results. Specializing in VSLs, TSLs, email sequences, and sales funnels for ClickBank & DTC brands. AI-powered. Battle-tested.',
  alternates: {
    canonical: SITE_URL,
  },
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        variant="home"
        headline="The Direct-Response Copywriter Behind $523M+ in Results"
        subheadline="AI-powered. Battle-tested. From Apple and Fortune 500 boardrooms to today's highest-converting VSLs, TSLs, and funnels. I write the copy that moves the needle."
        cta={{ label: 'Book a Strategy Call', href: '/contact' }}
        secondaryCta={{ label: 'See Case Studies', href: '/case-studies' }}
        image={{ src: '/images/headshots/rob-palmer-clean.png', alt: 'Rob Palmer - Direct-Response Copywriter' }}
      />

      {/* Client Logos */}
      <ClientLogoBar variant="dark" />

      {/* Stats */}
      <StatsBar variant="dark" />

      {/* Problem/Solution */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950">
              Most Copywriters Write Content.{' '}
              <span className="text-gold-500">I Write Conversions.</span>
            </h2>
            <div className="mt-8 space-y-6 text-lg text-paper-600 leading-relaxed font-body text-left sm:text-center">
              <p>
                There is a difference between a copywriter who can string words
                together and one who can engineer a persuasion sequence that turns
                cold traffic into customers. That difference shows up in your
                conversion rate, your AOV, and your bottom line.
              </p>
              <p>
                I combine 30+ years of direct-response craft — honed writing for
                Apple, IBM, Microsoft, and Citibank — with cutting-edge AI tools
                to deliver copy faster, test more variations, and scale what
                works. The result: campaigns that have generated over $523 million
                in tracked revenue for my clients.
              </p>
              <p>
                If you need a copywriter who treats your project like their
                business depends on it — because mine does — then let&apos;s talk.
              </p>
            </div>
            <div className="mt-10">
              <Button href="/about" variant="ghost">
                Read my full story →
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section variant="alt" id="services">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950">
              Direct-Response Copy That Moves the Needle
            </h2>
            <p className="mt-4 text-lg text-paper-600 font-body max-w-2xl mx-auto">
              From VSLs to email sequences, every piece of copy is engineered for
              one thing: results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                slug={service.slug}
                description={service.shortDescription}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/services" variant="ghost">
              View all services →
            </Button>
          </div>
        </Container>
      </Section>

      {/* Featured Case Study */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950">
              Results That Speak for Themselves
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="The $523M Secret Weapon Campaign"
              slug="belron-safelite-523m-campaign"
              result="$523M"
              client="Belron / Safelite"
              description="A campaign that ran for 9 years, generated $523 million in sales, and saved hundreds of lives. Five previous award-winning copywriters had failed at the task."
            />
            <CaseStudyCard
              title="The Apple UK Direct Mail Campaign"
              slug="apple-direct-mail-campaign"
              result="A/B Winner"
              client="Apple Computer UK"
              description="A direct mail campaign for Apple UK that beat the control and demonstrated the power of research-driven direct-response copywriting."
            />
          </div>
        </Container>
      </Section>

      {/* CTA Banner */}
      <CTABanner
        headline="Ready to put a $523M copywriter to work for your brand?"
        subtext="Let's discuss how I can help you increase conversions and AOV."
        variant="gold"
      />

      {/* Testimonials */}
      <Section variant="alt">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950">
              What Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTestimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                variant="default"
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/testimonials" variant="ghost">
              Read all testimonials →
            </Button>
          </div>
        </Container>
      </Section>

      {/* AI Advantage */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950">
                AI-Powered.{' '}
                <span className="text-gold-500">Human-Crafted.</span>
              </h2>
            </div>
            <div className="space-y-6 text-lg text-paper-600 leading-relaxed font-body">
              <p>
                I was writing copy before the internet existed. I was the
                world&apos;s first blogger in 1993. And today, I am at the
                cutting edge of AI-assisted copywriting — because the best
                copywriters don&apos;t fear new tools, they weaponize them.
              </p>
              <p>
                AI helps me research markets faster, generate more headline
                variations, and analyze competitor funnels at scale. But the
                strategic thinking, the emotional intelligence, the persuasion
                architecture that turns words into revenue — that only comes from
                decades of experience and thousands of tested campaigns.
              </p>
              <p>
                When you hire me, you get the best of both worlds: the speed and
                analytical power of AI, combined with the craft and intuition of
                a 30-year direct-response veteran.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <CTABanner
        headline="Let's talk about your next campaign."
        subtext="Book a free strategy call. No pressure, no obligation — just a conversation about how to move the needle."
        buttonText="Book a Call"
        variant="default"
      />
    </>
  )
}
