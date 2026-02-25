'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={cn('divide-y divide-paper-200', className)}>
        {items.map((item, index) => (
          <div key={index} className="py-4">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between text-left py-2 group cursor-pointer"
            >
              <span className="font-heading text-base font-semibold text-ink-950 pr-4 group-hover:text-gold-600 transition-colors">
                {item.question}
              </span>
              <svg
                className={cn(
                  'w-5 h-5 text-paper-400 shrink-0 transition-transform duration-200',
                  openIndex === index && 'rotate-180'
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={cn(
                'overflow-hidden transition-all duration-200',
                openIndex === index ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
              )}
            >
              <p className="text-paper-600 text-base leading-relaxed font-body pb-2">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
