import Link from 'next/link'
import { cn } from '@/lib/utils'

interface CaseStudyCardProps {
  title: string
  slug: string
  result: string
  client: string
  description: string
  className?: string
}

export function CaseStudyCard({
  title,
  slug,
  result,
  client,
  description,
  className,
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${slug}`}
      className={cn(
        'group block rounded-xl border border-paper-200 bg-white overflow-hidden shadow-sm',
        'transition-all duration-200 hover:shadow-md hover:border-gold-200 hover:-translate-y-0.5',
        className
      )}
    >
      {/* Result banner */}
      <div className="bg-ink-950 px-6 py-4 sm:px-8">
        <div className="font-heading text-2xl sm:text-3xl font-bold text-gold-400">
          {result}
        </div>
        <div className="text-sm text-paper-400 font-heading">{client}</div>
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="font-heading text-lg font-bold text-ink-950 group-hover:text-gold-600 transition-colors">
          {title}
        </h3>
        <p className="mt-3 text-sm text-paper-600 leading-relaxed font-body">{description}</p>
        <div className="mt-4 flex items-center gap-1 text-sm font-heading font-semibold text-gold-600 group-hover:text-gold-500 transition-colors">
          Read the case study
          <svg
            aria-hidden="true"
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </Link>
  )
}
