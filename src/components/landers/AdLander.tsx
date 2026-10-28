import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { TestimonialCard } from '@/components/blocks/TestimonialCard'
import { CalendlyEmbed } from '@/components/integrations/CalendlyEmbed'
import { testimonials } from '@/content/testimonials'
import { CALENDLY_URL } from '@/lib/constants'

// Paid-traffic lander shell (ChatGPT ads, 2026-10). Unlisted + noindex, same
// fixed-overlay chrome as /create: covers the root Header/Footer so the only
// exits are the booking embed and the slim footer. Pages pass the copy in;
// the copy lives in each page file under src/app/lp/.

export interface LanderSection {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  closing?: string
}

export interface LanderContent {
  logoSubtitle: string
  eyebrow: string
  headline: string
  subhead: string
  ctaLabel: string
  /** One line under the hero CTA saying what the visitor is booking */
  ctaNote?: string
  /** Face + credential under the headline, so ad clicks see who they're dealing with on the first screen */
  byline?: { image: string; name: string; credential: string }
  metrics: { value: string; label: string }[]
  sections: LanderSection[]
  proofHeading: string
  proofParagraphs: string[]
  testimonialIds: string[]
  steps: { title: string; body: string }[]
  capacityNote: string
  bookHeading: string
  bookBody: string
  /** utm_campaign passed to Calendly so the booking records which lander it came from */
  calendlyCampaign: string
}

// The root layout loads GA with lazyOnload to keep it off the critical path
// site-wide (8e98d72). Paid clicks often leave within a second or two, before
// the load event, so they never registered: about half of the ChatGPT ad
// clicks were missing from GA4 (2026-10-28). Landers load the same two scripts
// early; next/script dedupes by src/id, so the layout's copies are skipped.
const GA_ID = 'G-ND4QM9PG6P'

const COPYRIGHT_YEAR = new Date().getFullYear()

// Copy is authored with straight apostrophes for easy editing; render curly
// ones to match the rest of the site's typography.
const t = (s: string) => s.replace(/(\w)'(\w)/g, '$1\u2019$2')

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="mt-6 space-y-5 font-body text-lg leading-relaxed text-paper-800">
      {paragraphs.map((p) => (
        <p key={p}>{t(p)}</p>
      ))}
    </div>
  )
}

export function AdLander({ content }: { content: LanderContent }) {
  const proof = content.testimonialIds
    .map((id) => testimonials.find((t) => t.id === id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t))

  const calendlyUrl = `${CALENDLY_URL}?utm_source=chatgpt&utm_medium=cpc&utm_campaign=${encodeURIComponent(content.calendlyCampaign)}`

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto bg-paper-50">
      <style>{`body { overflow: hidden; }`}</style>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}');`}
      </Script>

      {/* Hero */}
      <section className="bg-ink-950 text-paper-100 noise-overlay">
        <Container>
          <header className="py-6">
            <Link href="/" className="inline-block" aria-label="Rob Palmer home">
              <Logo className="h-9 w-auto" variant="light" subtitle={content.logoSubtitle} />
            </Link>
          </header>
        </Container>
        <Container>
          <div className="pb-12 pt-6 md:py-20">
            <FadeIn immediate>
              <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
                {content.eyebrow}
              </p>
              <h1 className="mt-4 max-w-4xl font-heading text-4xl font-semibold leading-tight text-paper-50 md:mt-6 md:text-5xl lg:text-6xl">
                {t(content.headline)}
              </h1>
              {content.byline && (
                <div className="mt-6 flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-gold-400">
                    <Image
                      src={content.byline.image}
                      alt={content.byline.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                      priority
                    />
                  </div>
                  <p className="font-body leading-snug">
                    <span className="block font-heading font-semibold text-paper-50">{content.byline.name}</span>
                    <span className="block text-sm text-paper-300">{t(content.byline.credential)}</span>
                  </p>
                </div>
              )}
              <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-paper-300 md:mt-8 md:text-xl">
                {t(content.subhead)}
              </p>
              <div className="mt-8 md:mt-10">
                <Button href="#book" size="lg">
                  {content.ctaLabel}
                </Button>
                {content.ctaNote && (
                  <p className="mt-3 font-body text-sm text-paper-300">{t(content.ctaNote)}</p>
                )}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Proof strip: numbers before argument */}
      <section className="border-b border-paper-200 bg-white py-10">
        <Container>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {content.metrics.map((m, index) => (
              <FadeIn key={m.label} delay={index * 80}>
                <p className="font-heading text-3xl font-semibold text-gold-600 md:text-4xl">
                  {m.value}
                </p>
                <p className="mt-2 font-body text-sm leading-snug text-paper-600">{t(m.label)}</p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Argument sections */}
      {content.sections.map((section, index) => (
        <section
          key={t(section.heading)}
          className={
            index % 2 === 0
              ? 'bg-paper-50 py-16 md:py-20'
              : 'bg-gradient-to-b from-paper-100 to-paper-50 py-16 md:py-20'
          }
        >
          <Container>
            <FadeIn>
              <div className="max-w-3xl">
                <h2 className="font-heading text-3xl font-semibold text-ink-950 md:text-4xl">
                  {t(section.heading)}
                </h2>
                {section.paragraphs && <Prose paragraphs={section.paragraphs} />}
                {section.bullets && (
                  <ul className="mt-6 space-y-4 font-body text-lg leading-relaxed text-paper-800">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-gold-500" />
                        <span>{t(b)}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.closing && (
                  <p className="mt-6 font-body text-lg font-semibold leading-relaxed text-ink-950">
                    {t(section.closing)}
                  </p>
                )}
              </div>
            </FadeIn>
          </Container>
        </section>
      ))}

      {/* Proof */}
      <section className="bg-ink-950 text-paper-100 noise-overlay py-16 md:py-20">
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl font-semibold text-paper-50 md:text-4xl">
                {content.proofHeading}
              </h2>
              <div className="mt-6 space-y-5 font-body text-lg leading-relaxed text-paper-300">
                {content.proofParagraphs.map((p) => (
                  <p key={p}>{t(p)}</p>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
      <section className="bg-gradient-to-b from-paper-100 to-paper-50 py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {proof.map((testimonial, index) => (
              <FadeIn key={testimonial.id} delay={index * 80}>
                <TestimonialCard testimonial={testimonial} className="h-full" />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="bg-paper-50 py-16 md:py-20">
        <Container>
          <FadeIn>
            <h2 className="font-heading text-3xl font-semibold text-ink-950 md:text-4xl">
              How It Works
            </h2>
          </FadeIn>
          {/* Steps are divs, not <ol>/<li>: FadeIn must never wrap an <li>
              (hydration failure leaves the whole page at opacity 0). */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {content.steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 100}>
                <div className="h-full rounded-xl border border-paper-200 bg-white p-6 shadow-sm">
                  <p className="font-heading text-sm font-semibold uppercase tracking-[0.15em] text-gold-600">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-3 font-heading text-xl font-semibold text-ink-950">{t(step.title)}</h3>
                  <p className="mt-3 font-body leading-relaxed text-paper-800">{t(step.body)}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p className="mt-8 max-w-3xl font-body text-lg leading-relaxed text-paper-800">
              {t(content.capacityNote)}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Booking: the embed is the page's conversion point */}
      <section id="book" className="scroll-mt-4 bg-ink-950 text-paper-100 noise-overlay py-16 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl font-semibold text-paper-50 md:text-4xl">
              {content.bookHeading}
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-paper-300">{t(content.bookBody)}</p>
          </div>
          <div className="mt-10 overflow-hidden rounded-xl bg-white">
            <CalendlyEmbed url={calendlyUrl} />
          </div>
        </Container>
      </section>

      <footer className="border-t border-ink-700 bg-ink-950 py-8 text-paper-300">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 text-sm sm:flex-row sm:items-center">
            <p>&copy; {COPYRIGHT_YEAR} Rob Palmer &middot; rob@robpalmer.com</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="transition-colors hover:text-paper-100">
                Privacy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-paper-100">
                Terms
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  )
}
