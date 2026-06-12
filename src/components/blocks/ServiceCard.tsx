import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  title: string
  slug: string
  description: string
  image?: string
  imageAlt?: string
  className?: string
  basePath?: string
}

export function ServiceCard({
  title,
  slug,
  description,
  image,
  imageAlt,
  className,
  basePath = '/services',
}: ServiceCardProps) {
  return (
    <Link
      href={`${basePath}/${slug}`}
      className={cn(
        'group flex flex-col h-full rounded-xl border border-paper-200 border-t-2 border-t-gold-400/40 bg-white shadow-sm overflow-hidden',
        'transition-all duration-200 hover:shadow-lg hover:shadow-gold-400/5 hover:border-gold-200 hover:-translate-y-1',
        className
      )}
    >
      {image && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      <div className={cn('flex flex-col flex-1 p-6 sm:p-8', image && 'sm:p-6')}>
        <h3 className="font-heading text-lg font-bold text-ink-950 group-hover:text-gold-600 transition-colors">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-base lg:text-[1rem] text-ink-700 leading-relaxed font-body">
          {description}
        </p>
        <div className="mt-4 flex items-center gap-1 text-sm font-heading font-semibold text-gold-600 group-hover:text-gold-700 transition-colors">
          Learn more
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
