import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/Hero'
import { ClientLogoBar } from '@/components/blocks/ClientLogoBar'
import { StatsBar } from '@/components/blocks/StatsBar'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { ServiceCard } from '@/components/blocks/ServiceCard'
import { CaseStudyCard } from '@/components/blocks/CaseStudyCard'
import { TestimonialCard } from '@/components/blocks/TestimonialCard'
import { CTABanner } from '@/components/blocks/CTABanner'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { JsonLd } from '@/components/seo/JsonLd'
import Link from 'next/link'
import { services } from '@/app/services/_data/services'
import { verticals } from '@/app/verticals/_data/verticals'
import { caseStudies } from '@/app/case-studies/_data/case-studies'
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

const homepageFaqs = [
  { question: 'What types of copywriting do you specialize in?', answer: 'I specialize in direct-response copywriting — the kind that\'s designed to generate a measurable action. This includes video sales letters (VSLs), text sales letters (TSLs), email sequences, landing pages, sales funnels, upsell/downsell pages, and paid ad copy. Every piece I write is engineered to convert.' },
  { question: 'How much does it cost to hire you?', answer: 'Fees depend on the project scope, complexity, and format. A single email is different from a full VSL + funnel build. I\'ll give you a clear, fixed-price quote after our strategy call — no hourly billing, no surprises. For a general guide, see my blog post on copywriting rates.' },
  { question: 'What industries do you work with?', answer: 'I\'ve written for health & supplement, financial, e-commerce/DTC, SaaS, info-product, and ClickBank markets. My direct-response principles apply across industries — I adapt the strategy and compliance approach to each vertical.' },
  { question: 'How do you use AI in your copywriting process?', answer: 'AI is a force multiplier, not a replacement. I use AI tools for research, headline variation generation, competitive analysis, and first-draft acceleration. But the strategic thinking, emotional intelligence, and persuasion architecture come from 30+ years of direct-response experience. You get AI speed with human craft.' },
  { question: 'What results can I expect?', answer: 'Results vary by market, offer, and traffic quality. That said, my track record includes $523M+ in tracked revenue across campaigns, a 9-year campaign for Belron/Safelite, and consistent wins across ClickBank, DTC, and SaaS markets. I focus on measurable outcomes — conversion rates, AOV, and revenue.' },
  { question: 'How long does a typical project take?', answer: 'Timeline depends on the deliverable. A single email or landing page might take 3-5 business days. A full VSL or sales funnel build typically takes 2-4 weeks including research, drafting, and revisions. I\'ll confirm the timeline during our strategy call.' },
  { question: 'Do you offer revisions?', answer: 'Yes. Every project includes a round of revisions to ensure the copy aligns with your voice, brand, and goals. My goal is copy you\'re confident putting in front of your audience.' },
  { question: 'How do I get started?', answer: 'Book a free strategy call through my contact page. We\'ll discuss your project, goals, and timeline. If we\'re a good fit, I\'ll send you a proposal with a clear scope and fixed price. No pressure, no obligation.' },
]

const homepageFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homepageFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
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

      {/* Problem/Solution — asymmetric layout for rhythm break */}
      <Section divider>
        <Container>
          <div className="max-w-4xl mx-auto lg:flex lg:items-start lg:gap-16">
            <FadeIn className="lg:flex-shrink-0 lg:sticky lg:top-28">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950 lg:max-w-sm">
                Most Copywriters Write Content.{' '}
                <span className="text-gold-500">I Write Conversions.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={150} className="mt-8 lg:mt-0">
              <div className="space-y-6 text-lg text-ink-700 leading-relaxed font-body">
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
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section variant="alt" id="services" divider>
        <Container>
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950">
                Direct-Response Copy That Moves the Needle
              </h2>
              <p className="mt-4 text-lg text-ink-700 font-body max-w-2xl mx-auto">
                From VSLs to email sequences, every piece of copy is engineered for
                one thing: results.
              </p>
            </div>
          </FadeIn>
          <ul role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, index) => (
              <li key={service.slug}>
                <FadeIn delay={index * 100} distance={20} className="h-full">
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
          <FadeIn delay={600}>
            <div className="mt-8 text-center">
              <Button href="/services" variant="ghost">
                View all services →
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Industries / Verticals */}
      <Section divider>
        <Container>
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950">
                Industries I Specialize In
              </h2>
              <p className="mt-4 text-lg text-ink-700 font-body max-w-2xl mx-auto">
                Deep vertical expertise across the industries that demand
                direct-response excellence.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {verticals.map((vertical, index) => (
              <FadeIn key={vertical.slug} delay={index * 80}>
                <Link
                  href={`/verticals/${vertical.slug}`}
                  className="group block rounded-xl border border-paper-200 bg-white p-5 text-center shadow-sm transition-all duration-200 hover:shadow-md hover:border-gold-200 hover:-translate-y-1"
                >
                  <span className="font-heading text-sm font-semibold text-ink-950 group-hover:text-gold-600 transition-colors">
                    {vertical.title}
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={500}>
            <div className="mt-8 text-center">
              <Button href="/verticals" variant="ghost">
                View all verticals →
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Featured Case Studies */}
      <Section divider>
        <Container>
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950">
                Results That Speak for Themselves
              </h2>
            </div>
          </FadeIn>
          <ul role="list" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs, index) => (
              <li key={cs.slug}>
                <FadeIn delay={index * 150} distance={20} className="h-full">
                  <CaseStudyCard
                    title={cs.title}
                    slug={cs.slug}
                    result={cs.result}
                    client={cs.client}
                    description={cs.description}
                    heroImage={cs.heroImage}
                    heroAlt={cs.heroAlt}
                  />
                </FadeIn>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* CTA Banner */}
      <CTABanner
        headline="Ready to put a $523M copywriter to work for your brand?"
        subtext="Let's discuss how I can help you increase conversions and AOV."
        variant="gold"
      />

      {/* Testimonials */}
      <Section variant="alt" divider>
        <Container>
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950">
                What Clients Say
              </h2>
            </div>
          </FadeIn>
          <ul role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTestimonials.slice(0, 3).map((testimonial, index) => (
              <li key={testimonial.id}>
                <FadeIn delay={index * 120} distance={20} className="h-full">
                  <TestimonialCard
                    testimonial={testimonial}
                    variant={index === 1 ? 'featured' : 'default'}
                  />
                </FadeIn>
              </li>
            ))}
          </ul>
          <FadeIn delay={400}>
            <div className="mt-8 text-center">
              <Button href="/testimonials" variant="ghost">
                Read all testimonials →
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* AI Advantage — visual break with left-aligned accent */}
      <Section divider>
        <Container>
          <div className="max-w-4xl mx-auto lg:flex lg:gap-16 lg:items-start">
            <FadeIn className="lg:flex-shrink-0">
              <div className="mb-8 lg:mb-0 lg:sticky lg:top-28">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950 lg:max-w-xs">
                  AI-Powered.{' '}
                  <span className="text-gold-500">Human-Crafted.</span>
                </h2>
                {/* Decorative gold accent bar */}
                <div className="mt-6 w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-200 rounded-full" />
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="space-y-6 text-lg text-ink-700 leading-relaxed font-body">
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
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section variant="alt" divider>
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-10">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950">
                  Frequently Asked Questions
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <FAQAccordion items={homepageFaqs} />
            </FadeIn>
          </div>
        </Container>
      </Section>
      <JsonLd data={homepageFaqJsonLd} />

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
