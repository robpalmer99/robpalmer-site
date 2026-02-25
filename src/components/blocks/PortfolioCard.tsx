import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'
import type { PortfolioItem } from '@/app/portfolio/_data/portfolio'

interface PortfolioCardProps {
  item: PortfolioItem
}

export function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <a
      href="https://drive.google.com/drive/folders/1ivFq-UhqthNnaGhlp6nJOc1G9s7H4iDI"
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-paper-200 bg-white shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md hover:border-gold-200 hover:-translate-y-0.5"
    >
      {/* Image */}
      <div className="relative w-full h-40 overflow-hidden">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Badges */}
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="gold">{item.category}</Badge>
          <Badge>{item.niche}</Badge>
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg font-bold text-ink-950 group-hover:text-gold-600 transition-colors leading-tight">
          {item.title}
        </h3>

        {/* Client */}
        {item.client && (
          <p className="mt-1 text-xs font-heading font-medium text-paper-500 uppercase tracking-wide">
            {item.client}
          </p>
        )}

        {/* Description */}
        <p className="mt-2 text-sm text-paper-600 leading-relaxed font-body line-clamp-2">
          {item.description}
        </p>

        {/* Result highlight */}
        {item.result && (
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gold-50 px-3 py-1 text-xs font-heading font-bold text-gold-700 border border-gold-200">
            <svg
              className="w-3.5 h-3.5 text-gold-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
            {item.result}
          </div>
        )}

        {/* View sample link */}
        <div className="mt-4 flex items-center gap-1 text-sm font-heading font-semibold text-gold-500 group-hover:text-gold-600 transition-colors">
          View sample
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </div>
    </a>
  )
}
