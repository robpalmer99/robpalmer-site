import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { SITE_URL } from '@/lib/constants'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ label: 'Home', href: '/' }, ...items]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container>
        <nav aria-label="Breadcrumb" className="py-4">
          <ol className="flex items-center gap-2 text-sm font-heading">
            {allItems.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                {index > 0 && (
                  <svg aria-hidden="true" className="w-3 h-3 text-paper-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-paper-400 hover:text-gold-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-paper-600">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </Container>
    </>
  )
}
