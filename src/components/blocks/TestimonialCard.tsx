import Image from 'next/image'
import { cn } from '@/lib/utils'

export interface Testimonial {
  id: string
  quote: string
  author: string
  title: string
  company?: string
  image?: string
  featured?: boolean
}

interface TestimonialCardProps {
  testimonial: Testimonial
  variant?: 'default' | 'featured'
  className?: string
}

export function TestimonialCard({
  testimonial,
  variant = 'default',
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'rounded-xl p-6 sm:p-8',
        variant === 'featured'
          ? 'bg-ink-950 text-white border border-ink-700'
          : 'bg-white border border-paper-200 shadow-sm',
        className
      )}
    >
      {/* Quote mark */}
      <svg
        aria-hidden="true"
        className={cn(
          'w-8 h-8 mb-4',
          variant === 'featured' ? 'text-gold-400' : 'text-gold-400/60'
        )}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
      </svg>

      <blockquote
        className={cn(
          'text-base leading-relaxed font-body',
          variant === 'featured' ? 'text-paper-200' : 'text-paper-800'
        )}
      >
        {testimonial.quote}
      </blockquote>

      <div className="mt-6 flex items-center gap-3">
        {/* Author photo or initial avatar */}
        {testimonial.image ? (
          <Image
            src={testimonial.image}
            alt={testimonial.author}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div
            className={cn(
              'w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm shrink-0',
              variant === 'featured'
                ? 'bg-gold-400 text-ink-950'
                : 'bg-ink-950 text-white'
            )}
          >
            {testimonial.author.charAt(0)}
          </div>
        )}
        <div>
          <div
            className={cn(
              'font-heading text-sm font-semibold',
              variant === 'featured' ? 'text-white' : 'text-ink-950'
            )}
          >
            {testimonial.author}
          </div>
          <div
            className={cn(
              'text-xs',
              variant === 'featured' ? 'text-paper-400' : 'text-paper-400'
            )}
          >
            {testimonial.title}
            {testimonial.company && `, ${testimonial.company}`}
          </div>
        </div>
      </div>
    </div>
  )
}
