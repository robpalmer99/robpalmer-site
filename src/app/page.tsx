import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/Hero'
import { ClientLogoBar } from '@/components/blocks/ClientLogoBar'
import { StatsBar } from '@/components/blocks/StatsBar'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { ServiceCard } from '@/components/blocks/ServiceCard'
import { TripleBrainVenn } from '@/components/blocks/TripleBrainVenn'
import { CaseStudyCard } from '@/components/blocks/CaseStudyCard'
import { TestimonialCard } from '@/components/blocks/TestimonialCard'
import { CTABanner } from '@/components/blocks/CTABanner'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { JsonLd } from '@/components/seo/JsonLd'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'
import { services } from '@/app/services/_data/services'
import { verticals } from '@/app/verticals/_data/verticals'
import { caseStudies } from '@/app/case-studies/_data/case-studies'
import { testimonials } from '@/content/testimonials'
import { SITE_URL } from '@/lib/constants'

// Homepage testimonial selection — peer-endorsement triangle: Stefan (CA Labs Copy Chief), Justin Goff (industry recognition), Ben Palmer (300% ROAS measurable proof)
const HOMEPAGE_TESTIMONIAL_IDS = ['2', '3', '4'] as const
const homepageTestimonials = HOMEPAGE_TESTIMONIAL_IDS
  .map((id) => testimonials.find((t) => t.id === id))
  .filter((t): t is NonNullable<typeof t> => Boolean(t))

export const metadata: Metadata = {
  title: 'Rob Palmer | Direct-Response Copywriter | Triple Brain Marketing',
  description:
    'Three brains. One engagement. 40+ years of direct-response copywriting + Claude Code with custom copywriting skills + a 1,239-file Obsidian copywriting brain. Behind $523M+ in tracked results. The DR system Stefan Georgi\u2019s team chose for CA Labs.',
  alternates: {
    canonical: SITE_URL,
  },
}

// Tile-sized one-liners for the home Verticals section.
// Each replaces the longer shortDescription used on /verticals/[slug] pages.
const VERTICAL_TAGLINES: Record<string, string> = {
  'health-supplement-copywriter': 'Compliance-aware DR copy that still converts.',
  'financial-copywriter': 'Wall Street credibility with direct-response conversion.',
  'ecommerce-dtc-copywriter': 'Lift conversion, AOV, and customer lifetime value.',
  'clickbank-copywriter': 'Funnels top affiliates fight to promote.',
  'saas-copywriter': 'Direct response on SaaS metrics — MRR, churn, LTV.',
  'info-product-copywriter': 'Launches and evergreen systems that scale.',
}

const homepageFaqs = [
  { question: 'What is Triple Brain Marketing?', answer: 'Triple Brain Marketing is the integration of three brains into one engagement: my copywriting brain (40+ years of direct-response craft for the world\'s top brands, with $523M+ in tracked results), Claude Code\'s brain augmented by my custom-built copywriting skills (proprietary skill files that encode 40 years of frameworks into a working AI workflow), and my Obsidian copywriting brain (a 1,239-file knowledge base spanning the old direct-response masters through current AI marketing strategies). No copywriter and no AI tool can replicate the combination.' },
  { question: 'What types of copywriting do you specialize in?', answer: 'I specialize in direct-response copywriting — the kind that\'s designed to generate a measurable action. This includes video sales letters (VSLs), text sales letters (TSLs), email sequences, landing pages, sales funnels, upsell/downsell pages, and paid ad copy. Every piece I write is engineered to convert.' },
  { question: 'Are you taking new clients?', answer: 'I take a selective number of new engagements each quarter to maintain quality. Most kickoffs happen within two weeks of the strategy call. If we\'re a fit, I\'ll send you a fixed-price proposal within 48 hours. If we\'re not, I\'ll tell you on the call and refer you to someone in my network.' },
  { question: 'How much does it cost to hire you?', answer: 'Fees depend on the project scope, complexity, and format. Engagements typically start at $10K for single assets and run higher for full funnel builds. I\'ll give you a clear, fixed-price quote after our strategy call — no hourly billing, no surprises. For a general guide, see my blog post on copywriting rates.' },
  { question: 'What industries do you work with?', answer: 'I\'ve written for health & supplement, financial, e-commerce/DTC, SaaS, info-product, and ClickBank markets. My direct-response principles apply across industries — I adapt the strategy and compliance approach to each vertical.' },
  { question: 'How do you use AI in your copywriting process?', answer: 'I don\'t use AI the way most people use AI. I use Claude Code — the most capable AI writing tool available — augmented by my own custom-built copywriting skills. These are proprietary skill files that encode specific direct-response frameworks, headline formulas, and evaluation criteria into a workflow Claude applies on every project. Combined with my 1,239-file Obsidian copywriting brain (190 frameworks, 193 swipes, 512 pieces of my own tested copy), the AI has access to four decades of proven reference material — not generic training data.' },
  { question: 'What results can I expect?', answer: 'Results vary by market, offer, and traffic quality. My track record includes $523M+ in tracked revenue across campaigns, a 9-year campaign for Belron/Safelite, the $40M Gluco 6 supplement subscription funnel, $30M Mobile Profits #1 on ClickBank, 5.7% Monetari Fund opt-in-to-sale, 22% Chatterkick SaaS trial-to-paid lift, 340% Abundant TSL on Facebook cold, 8% conversion on cold traffic (Conor Reynolds VSL), and 300% ROAS on a ClickBank email funnel (Ben Palmer). I focus on measurable outcomes — conversion rates, AOV, and revenue.' },
  { question: 'How long does a typical project take?', answer: 'Timeline depends on the deliverable. A single email or landing page might take 3-5 business days. A full VSL or sales funnel build typically takes 2-4 weeks including research, drafting, and revisions. The Triple Brain workflow compresses traditional research and drafting timelines without sacrificing depth.' },
  { question: 'Do you offer revisions?', answer: 'Yes. Every project includes a round of revisions to ensure the copy aligns with your voice, brand, and goals. My goal is copy you\'re confident putting in front of your audience.' },
  { question: 'How do I get started?', answer: 'Book a free strategy call — the calendar is at robpalmer.com/call. We\'ll discuss your project, goals, and timeline. If we\'re a good fit, I\'ll send you a fixed-price proposal within 48 hours. No pressure, no obligation.' },
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
        headline="Three Brains. One Engagement. Behind $523M in Tracked Results."
        subheadline="40+ years of direct-response copywriting + Claude Code with my custom copywriting skills + a 1,239-file Obsidian copywriting brain. The DR system Stefan Georgi's team chose for CA Labs."
        cta={{ label: 'Book a Strategy Call', href: '/call' }}
        secondaryCta={{ label: 'See Case Studies', href: '/case-studies' }}
        image={{ src: '/images/headshots/rob-palmer-clean.png', alt: 'Rob Palmer - Direct-Response Copywriter' }}
      >
        <FadeIn delay={450} duration={800}>
          <p className="mt-5 text-sm sm:text-base lg:text-[0.95rem] text-paper-300 font-body">
            Selective engagements. Fixed-price, custom-quoted. No hourly billing.
          </p>
        </FadeIn>
      </Hero>

      {/* Client Logos */}
      <ClientLogoBar variant="dark" />

      {/* Stats */}
      <StatsBar variant="dark" />

      {/* Peer endorsement strip — Stefan + Justin + Ben Palmer named above-fold per offer brief 18.A */}
      <Section divider>
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <Badge variant="gold">Peer endorsement</Badge>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 mt-4">
                Vouched for by the operators who set the bar.
              </h2>
            </div>
          </FadeIn>
          <ul role="list" className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 mt-10 max-w-4xl mx-auto">
            <li>
              <FadeIn delay={0} className="h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-paper-200">
                    <Image
                      src="/images/testimonials/stefan-georgi.jpeg"
                      alt="Stefan Georgi"
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <p className="mt-4 font-heading text-lg font-bold text-ink-950">Stefan Georgi</p>
                  <p className="text-sm text-paper-600 font-body">Founder, Copy Accelerator</p>
                  <p className="mt-3 text-sm text-ink-700 italic font-body leading-snug">&ldquo;Hired as our Copy Chief for CA Labs.&rdquo;</p>
                </div>
              </FadeIn>
            </li>
            <li>
              <FadeIn delay={100} className="h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-paper-200">
                    <Image
                      src="/images/testimonials/justin-goff.jpeg"
                      alt="Justin Goff"
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <p className="mt-4 font-heading text-lg font-bold text-ink-950">Justin Goff</p>
                  <p className="text-sm text-paper-600 font-body">Co-founder, Copy Accelerator</p>
                  <p className="mt-3 text-sm text-ink-700 italic font-body leading-snug">&ldquo;Stepped up and knocked it out of the park.&rdquo;</p>
                </div>
              </FadeIn>
            </li>
            <li>
              <FadeIn delay={200} className="h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-paper-200">
                    <Image
                      src="/images/testimonials/ben-palmer.png"
                      alt="Ben Palmer"
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <p className="mt-4 font-heading text-lg font-bold text-ink-950">Ben Palmer</p>
                  <p className="text-sm text-paper-600 font-body">ClickBank Platinum Vendor</p>
                  <p className="mt-3 text-sm text-ink-700 italic font-body leading-snug">&ldquo;300% Return on Ad Spend.&rdquo;</p>
                </div>
              </FadeIn>
            </li>
          </ul>
        </Container>
      </Section>

      {/* Triple Brain Marketing — the named mechanism */}
      <Section divider>
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="gold">Triple Brain Marketing</Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950 mt-6">
                Three brains.{' '}
                <span className="text-gold-500">One engagement.</span>
              </h2>
              <p className="mt-5 text-lg text-ink-700 font-body leading-relaxed">
                You don&apos;t need a copywriter. You need a persuasion architect with three brains working as one. The combination behind every winning DR campaign in 2026 — and one almost nobody else has fused.
              </p>
            </div>
          </FadeIn>
          <ul role="list" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            <li>
              <FadeIn delay={0} distance={20} className="h-full">
                <div className="h-full rounded-xl border border-paper-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-gold-200 hover:-translate-y-0.5">
                  <div className="font-heading text-xs font-bold uppercase tracking-wide text-gold-600">
                    Brain 1
                  </div>
                  <h3 className="mt-3 font-heading text-xl font-bold text-ink-950 leading-tight">
                    My copywriting brain
                  </h3>
                  <p className="mt-3 text-base text-ink-700 leading-relaxed font-body">
                    40+ years of direct-response copywriting for the world&apos;s top brands — Apple, IBM, Microsoft, Citibank, Morgan Stanley, plus the campaign behind $523M for Belron. Pattern recognition you can&apos;t fake or buy.
                  </p>
                </div>
              </FadeIn>
            </li>
            <li>
              <FadeIn delay={100} distance={20} className="h-full">
                <div className="h-full rounded-xl border border-paper-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-gold-200 hover:-translate-y-0.5">
                  <div className="font-heading text-xs font-bold uppercase tracking-wide text-gold-600">
                    Brain 2
                  </div>
                  <h3 className="mt-3 font-heading text-xl font-bold text-ink-950 leading-tight">
                    Claude Code, with my custom copywriting skills
                  </h3>
                  <p className="mt-3 text-base text-ink-700 leading-relaxed font-body">
                    Anthropic&apos;s most capable model, augmented by my own custom-built skill files. Not generic AI prompting — proprietary frameworks, formulas, and evaluation criteria from real campaigns, encoded for Claude to apply on every project. <a href="https://github.com/robpalmer99/claude-code-copywriting-skills" target="_blank" rel="noopener noreferrer" className="text-gold-600 underline-offset-4 hover:underline">Open-sourced on GitHub</a> (CC-BY-4.0) — <Link href="/blog/claude-code-copywriting-skills" className="text-gold-600 underline-offset-4 hover:underline">read the blog post</Link> for the full breakdown.
                  </p>
                </div>
              </FadeIn>
            </li>
            <li>
              <FadeIn delay={200} distance={20} className="h-full">
                <div className="h-full rounded-xl border border-paper-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-gold-200 hover:-translate-y-0.5">
                  <div className="font-heading text-xs font-bold uppercase tracking-wide text-gold-600">
                    Brain 3
                  </div>
                  <h3 className="mt-3 font-heading text-xl font-bold text-ink-950 leading-tight">
                    My Obsidian copywriting brain
                  </h3>
                  <p className="mt-3 text-base text-ink-700 leading-relaxed font-body">
                    A 1,239-file knowledge base spanning the old direct-response masters through today&apos;s AI marketing strategies. 190 frameworks, 193 swipes, 512 pieces of my own tested copy — all indexed and instantly retrievable.
                  </p>
                </div>
              </FadeIn>
            </li>
          </ul>
          <TripleBrainVenn />
          <FadeIn delay={500}>
            <p className="mt-14 text-center text-lg text-ink-700 font-body leading-relaxed max-w-3xl mx-auto">
              Each brain multiplies the others &mdash; and the math compounds:{' '}
              <strong className="text-ink-950">$40M Gluco 6</strong> supplement subscription funnel.{' '}
              <strong className="text-ink-950">$30M Mobile Profits</strong> #1 on ClickBank.{' '}
              <strong className="text-ink-950">5.7% Monetari Fund</strong> opt-in-to-sale.{' '}
              <strong className="text-ink-950">22% Chatterkick</strong> SaaS trial-to-paid lift.{' '}
              <strong className="text-ink-950">340% Abundant</strong> TSL on Facebook cold. The same Triple Brain combination behind every campaign listed.
            </p>
            <div className="mt-8 text-center">
              <Button href="/blog/triple-brain-marketing" variant="ghost">
                How Triple Brain Marketing works →
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Problem/Solution — asymmetric layout for rhythm break */}
      <Section divider>
        <Container>
          <div className="max-w-4xl mx-auto lg:flex lg:items-start lg:gap-16">
            <FadeIn className="lg:flex-shrink-0 lg:sticky lg:top-28">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950 lg:max-w-sm">
                Most Copywriters Write Content.{' '}
                <span className="text-gold-500">I Architect Conversions.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={150} className="mt-8 lg:mt-0">
              <div className="space-y-6 text-lg text-ink-700 leading-relaxed font-body">
                <p>
                  There is a difference between a copywriter who can string words
                  together and one who can engineer a persuasion sequence that
                  turns cold traffic into customers. That difference shows up in
                  your conversion rate, your AOV, and your bottom line.
                </p>
                <p>
                  In 2026, that difference also shows up in tooling. The senior
                  copywriters with the craft mostly haven&apos;t built the AI
                  workflow. The AI tools don&apos;t have the craft. The Triple
                  Brain combination is rare on purpose — three assets that took
                  decades to assemble, working as one.
                </p>
                <p>
                  Campaigns powered by it have generated over $523 million in
                  tracked revenue for my clients. If you need a writer who treats
                  your project like their business depends on it — because mine
                  does — let&apos;s talk.
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

      {/* Capacity / Fit / Timeline — answers Marcus's "is he taking clients?" before he shops services */}
      <Section divider>
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-10">
                <Badge variant="gold">Working together</Badge>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950 mt-6">
                  Before you book.
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <ul role="list" className="space-y-5 text-lg text-ink-700 leading-relaxed font-body">
                <li className="flex items-start gap-4">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                  <span><strong className="text-ink-950">Capacity.</strong> I take a small number of new engagements each quarter. It&apos;s how the work stays good.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                  <span><strong className="text-ink-950">Timeline.</strong> Most kickoffs happen within two weeks of a strategy call.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                  <span><strong className="text-ink-950">Fit.</strong> Engagements typically start at $10K. If yours is below, I&apos;ll refer you to a writer in my network &mdash; no finder&apos;s fee, just an honest match.</span>
                </li>
              </ul>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="mt-10 text-lg text-ink-700 font-body leading-relaxed text-center italic">
                I&apos;d rather refer a project than ship copy that won&apos;t beat your control.
              </p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {verticals.map((vertical, index) => (
              <FadeIn key={vertical.slug} delay={index * 80} className="h-full">
                <Link
                  href={`/verticals/${vertical.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-paper-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-gold-200 hover:-translate-y-1"
                >
                  <h3 className="font-heading text-base sm:text-lg font-bold text-ink-950 group-hover:text-gold-600 transition-colors leading-tight">
                    {vertical.title.replace(' Copywriter', '')}
                  </h3>
                  <p className="mt-2 text-base lg:text-[1rem] text-ink-700 leading-snug font-body">
                    {VERTICAL_TAGLINES[vertical.slug] ?? vertical.shortDescription}
                  </p>
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
        headline="Ready to put all three brains to work on your funnel?"
        subtext="Let's discuss how Triple Brain Marketing can lift your conversion rate, your AOV, and your back-end revenue."
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
            {homepageTestimonials.map((testimonial, index) => (
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

      {/* AI Advantage — Brain 2 deep dive: the AI-replaced-then-rehired narrative */}
      <Section divider>
        <Container>
          <div className="max-w-4xl mx-auto lg:flex lg:gap-16 lg:items-start">
            <FadeIn className="lg:flex-shrink-0">
              <div className="mb-8 lg:mb-0 lg:sticky lg:top-28">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950 lg:max-w-xs">
                  Why the AI-only{' '}
                  <span className="text-gold-500">experiment failed.</span>
                </h2>
                <p className="mt-5 text-lg text-ink-700 font-body leading-relaxed lg:max-w-xs">
                  Companies that fired their copywriters for AI in 2024 are quietly rehiring in 2026. There&apos;s a reason.
                </p>
                {/* Decorative gold accent bar */}
                <div className="mt-6 w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-200 rounded-full" />
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="space-y-6 text-lg text-ink-700 leading-relaxed font-body">
                <p>
                  Between 2023 and 2025, a wave of companies fired their copywriting teams and replaced them with ChatGPT, Jasper, and Copy.ai. Conversion rates dropped. Brand voice flattened. Cold traffic stopped converting. By 2026, most of those companies are quietly rehiring senior copywriters at higher rates than before.
                </p>
                <p>
                  AI alone produces fluent, generic, bland copy — the kind that
                  doesn&apos;t offend anyone and doesn&apos;t convince anyone either. It can&apos;t architect a persuasion sequence. It can&apos;t read what a prospect isn&apos;t saying out loud. It doesn&apos;t know which lead type to use at which awareness level. Those decisions come from craft.
                </p>
                <p>
                  My approach is different. I was the world&apos;s first blogger in 1993, writing copy before the internet had pictures. I built my own AI workflow because nothing off-the-shelf was good enough — and what it actually does is concrete:
                </p>
                <ul role="list" className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                    <span><strong className="text-ink-950">Skill files encode 190+ proven DR frameworks.</strong> Claude routes through a headline-formula matrix, lead-type evaluator, and awareness-stage routing on every draft. Not generic instruction-following; not single-prompt thinking. The frameworks come from forty years of campaigns I&apos;ve shipped.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                    <span><strong className="text-ink-950">Compliance posture from line 1.</strong> FDA structure/function-claim discipline, FTC substantiation, SEC/FINRA disclosure standards baked into the writing layer through skill files. Not retrofitted by legal at the end. The discipline behind why $40M Gluco 6 cleared review every time.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                    <span><strong className="text-ink-950">1,239-file Obsidian retrieval.</strong> Claude pulls from my personal swipe library (193 swipes), 512 pieces of my own tested copy, and 125 book/course notes. Not generic LLM training data — my actual proven reference material, indexed and instantly retrievable.</span>
                  </li>
                </ul>
                <p>
                  The output is something neither a human alone nor an AI alone can produce. Same brief into both &mdash; here is what the difference looks like:
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Output proof — same brief, vanilla AI vs Triple Brain (offer brief 18.D-c) */}
          <FadeIn delay={300}>
            <div className="mt-14 max-w-4xl mx-auto">
              <div className="mb-6 text-center">
                <div className="font-heading text-xs font-bold uppercase tracking-wider text-gold-600 mb-2">
                  Output proof
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
                  Same brief. Different output.
                </h3>
              </div>

              <div className="rounded-xl border border-paper-200 bg-paper-50 p-6 sm:p-8">
                <div className="mb-6">
                  <div className="font-heading text-xs font-bold uppercase tracking-wider text-paper-600 mb-2">
                    The brief
                  </div>
                  <p className="text-sm text-ink-700 italic font-body leading-relaxed">
                    Write a headline for the sales page of a glucose-support supplement. Audience: adults 50+ concerned about glucose levels. Solution-aware &mdash; they have tried 1&ndash;2 supplements already. Compliance: FDA structure/function claims only.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  {/* Generic AI side */}
                  <div className="rounded-lg border border-paper-300 bg-white p-5">
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <span className="text-xs font-heading font-bold uppercase tracking-wider text-paper-600">
                        Generic AI
                      </span>
                      <span className="text-xs text-paper-500 font-body">
                        vanilla ChatGPT / Claude
                      </span>
                    </div>
                    <p className="font-heading text-base sm:text-lg font-bold text-ink-700 leading-snug">
                      &ldquo;Discover the Natural Way to Support Healthy Blood Sugar &mdash; Doctors Are Stunned by This Breakthrough Glucose Formula&rdquo;
                    </p>
                    <ul role="list" className="mt-4 space-y-2 text-sm text-ink-700 font-body">
                      <li className="flex items-start gap-2">
                        <span className="text-paper-500 flex-shrink-0 mt-0.5" aria-hidden="true">✗</span>
                        <span>Three AI-pattern tells in one line (&ldquo;Discover&rdquo;, &ldquo;Doctors are stunned&rdquo;, &ldquo;Breakthrough&rdquo;)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-paper-500 flex-shrink-0 mt-0.5" aria-hidden="true">✗</span>
                        <span>Awareness mismatch &mdash; written for Stage 2 problem-aware; audience is Stage 3 solution-aware</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-paper-500 flex-shrink-0 mt-0.5" aria-hidden="true">✗</span>
                        <span>&ldquo;Doctors are stunned&rdquo; verges on implied disease-treatment claim &mdash; compliance reviewer flags it</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-paper-500 flex-shrink-0 mt-0.5" aria-hidden="true">✗</span>
                        <span>No mechanism, no specificity, no timeframe</span>
                      </li>
                    </ul>
                  </div>

                  {/* Triple Brain side */}
                  <div className="rounded-lg border-2 border-gold-300 bg-white p-5">
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <span className="text-xs font-heading font-bold uppercase tracking-wider text-gold-600">
                        Triple Brain
                      </span>
                      <span className="text-xs text-paper-500 font-body">
                        Claude Code + custom skills + vault
                      </span>
                    </div>
                    <p className="font-heading text-base sm:text-lg font-bold text-ink-950 leading-snug">
                      &ldquo;The 12-Second Berry Ritual That Helps Adults 50+ Maintain Healthy Glucose Levels &mdash; Even After &lsquo;Already Tried That&rsquo;&rdquo;
                    </p>
                    <ul role="list" className="mt-4 space-y-2 text-sm text-ink-700 font-body">
                      <li className="flex items-start gap-2">
                        <span className="text-gold-600 flex-shrink-0 mt-0.5" aria-hidden="true">✓</span>
                        <span><strong className="text-ink-950">Sultanic mechanism formula</strong> &mdash; ritual + timeframe + specific ingredient</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold-600 flex-shrink-0 mt-0.5" aria-hidden="true">✓</span>
                        <span><strong className="text-ink-950">Schwartz Stage 3 awareness</strong> &mdash; &ldquo;Even After &lsquo;Already Tried That&rsquo;&rdquo; acknowledges the audience has shopped the category</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold-600 flex-shrink-0 mt-0.5" aria-hidden="true">✓</span>
                        <span><strong className="text-ink-950">FDA structure/function compliance</strong> &mdash; allowed language, no disease claim</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold-600 flex-shrink-0 mt-0.5" aria-hidden="true">✓</span>
                        <span><strong className="text-ink-950">Vault retrieval</strong> &mdash; ritual-hook pattern from $40M Gluco 6 + supplement-vertical swipe library</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
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
        headline="Three brains. Your next campaign. One conversation."
        subtext="Book a free strategy call. No pressure, no obligation — just an honest conversation about whether Triple Brain Marketing is the right fit for your offer."
        variant="default"
      />
    </>
  )
}
