import { Badge } from '@/components/ui/Badge'
import { FadeIn } from '@/components/ui/FadeIn'
import { TestimonialCard } from '@/components/blocks/TestimonialCard'
import { testimonials } from '@/content/testimonials'
import { cn } from '@/lib/utils'
import type { FeaturedSample } from '@/app/portfolio/_data/portfolio'

interface SampleExhibitProps {
  sample: FeaturedSample
  index: number
}

const FORMAT_LABEL: Record<FeaturedSample['format'], string> = {
  VSL: 'Video sales letter',
  TSL: 'Text sales page',
  Email: 'Email sequence',
}

const FORMAT_NOUN: Record<FeaturedSample['format'], string> = {
  VSL: 'script',
  TSL: 'sales page',
  Email: 'emails',
}

export function SampleExhibit({ sample, index }: SampleExhibitProps) {
  const flip = index % 2 === 1
  const paragraphs = sample.excerpt.split(/\n\s*\n/)
  const testimonial = sample.testimonialId
    ? testimonials.find((t) => t.id === sample.testimonialId)
    : undefined

  if (sample.testimonialId && !testimonial && process.env.NODE_ENV !== 'production') {
    throw new Error(`SampleExhibit: testimonialId "${sample.testimonialId}" on "${sample.slug}" does not exist in testimonials.ts`)
  }

  return (
    <article
      id={`exhibit-${sample.slug}`}
      aria-labelledby={`exhibit-${sample.slug}-title`}
      className="scroll-mt-28 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-start"
    >
      {/* Brief */}
      <FadeIn className={cn('lg:col-span-5', flip && 'lg:order-2')}>
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-heading text-sm font-bold uppercase tracking-wider text-paper-600">
            Exhibit {index + 1}
          </span>
          <Badge variant="gold">{FORMAT_LABEL[sample.format]}</Badge>
        </div>
        <h3 id={`exhibit-${sample.slug}-title`} className="mt-3 font-heading text-2xl sm:text-3xl font-bold text-ink-950">
          {sample.title}
        </h3>
        <dl className="mt-6 space-y-4 font-body text-ink-700">
          <div>
            <dt className="font-heading text-xs font-bold uppercase tracking-wider text-paper-600">The market</dt>
            <dd className="mt-1">{sample.market}</dd>
          </div>
          <div>
            <dt className="font-heading text-xs font-bold uppercase tracking-wider text-paper-600">Where the reader started</dt>
            <dd className="mt-1">{sample.awareness}</dd>
          </div>
          <div>
            <dt className="font-heading text-xs font-bold uppercase tracking-wider text-paper-600">The angle I chose</dt>
            <dd className="mt-1">{sample.angle}</dd>
          </div>
        </dl>
        {sample.result && (
          <p className="mt-6 border-l-2 border-gold-400 pl-4">
            <span className="font-heading text-lg font-bold text-ink-950">{sample.result.text}</span>
            <span className="block text-sm text-paper-600 font-body">{sample.result.source}</span>
          </p>
        )}
        {testimonial && (
          <div className="mt-6">
            <TestimonialCard testimonial={testimonial} />
          </div>
        )}
        <a
          href={sample.docUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Read the full ${sample.title} ${FORMAT_NOUN[sample.format]} (opens in a new tab)`}
          className="mt-6 inline-flex items-center gap-1 font-heading text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
        >
          {`Read the full ${FORMAT_NOUN[sample.format]}`}
          <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </FadeIn>

      {/* Document frame */}
      <FadeIn delay={120} className={cn('lg:col-span-7', flip && 'lg:order-1')}>
        <div className="relative rounded-xl border border-paper-200 bg-white shadow-sm overflow-hidden">
          <div className="flex items-center justify-between border-b border-paper-200 bg-paper-50 px-5 py-3">
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-paper-600">
              Script excerpt
            </span>
            <span className="font-heading text-xs text-paper-600">Opening, as delivered</span>
          </div>
          <div className="relative max-h-[32rem] overflow-hidden px-6 py-6 sm:px-8 sm:py-8">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={cn(
                  'font-body text-ink-800 leading-relaxed whitespace-pre-line',
                  i > 0 && 'mt-4',
                  i === 0 && sample.format !== 'VSL' && 'font-semibold text-ink-950'
                )}
              >
                {p}
              </p>
            ))}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent"
            />
          </div>
        </div>
      </FadeIn>
    </article>
  )
}
