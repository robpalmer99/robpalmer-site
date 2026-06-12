import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'
import { cn, formatDate } from '@/lib/utils'

interface BlogPostCardProps {
  title: string
  slug: string
  excerpt: string
  date: string
  category: string
  readingTime?: string
  heroImage?: string
  heroAlt?: string
  className?: string
}

export function BlogPostCard({
  title,
  slug,
  excerpt,
  date,
  category,
  readingTime,
  heroImage,
  heroAlt,
  className,
}: BlogPostCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        'group block rounded-xl border border-paper-200 bg-white shadow-sm overflow-hidden',
        'transition-all duration-200 hover:shadow-md hover:border-gold-200 hover:-translate-y-0.5',
        className
      )}
    >
      {heroImage && (
        <div className="relative w-full h-44 overflow-hidden">
          <Image
            src={heroImage}
            alt={heroAlt || title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <Badge variant="gold">{category}</Badge>
          {readingTime && (
            <span className="text-xs text-paper-600 font-heading">{readingTime}</span>
          )}
        </div>
        <h3 className="font-heading text-lg font-bold text-ink-950 group-hover:text-gold-600 transition-colors leading-snug">
          {title}
        </h3>
        <p className="mt-2 text-base lg:text-[1rem] text-ink-700 leading-relaxed font-body line-clamp-3">
          {excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <time dateTime={date} className="text-xs text-paper-600 font-heading">{formatDate(date)}</time>
          <span className="text-sm font-heading font-semibold text-gold-600 group-hover:text-gold-700 transition-colors">
            Read more →
          </span>
        </div>
      </div>
    </Link>
  )
}
