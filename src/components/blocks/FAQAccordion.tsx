'use client'

import { useId, useState } from 'react'
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
  const id = useId()

  return (
    <div className={cn('divide-y divide-paper-200', className)} role="region" aria-label="Frequently asked questions">
      {items.map((item, index) => {
        const triggerId = `${id}-trigger-${index}`
        const panelId = `${id}-panel-${index}`
        const isOpen = openIndex === index

        return (
          <div key={index} className="py-4">
            <button
              id={triggerId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between text-left py-2 group cursor-pointer"
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="font-heading text-base font-semibold text-ink-950 pr-4 group-hover:text-gold-600 transition-colors">
                {item.question}
              </span>
              <svg
                className={cn(
                  'w-5 h-5 text-paper-400 shrink-0 transition-transform duration-200',
                  isOpen && 'rotate-180'
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
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
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className={cn(
                'overflow-hidden transition-all duration-200',
                isOpen ? 'max-h-[2000px] opacity-100 mt-2' : 'max-h-0 opacity-0'
              )}
            >
              <p className="text-paper-600 text-base leading-relaxed font-body pb-2">
                {item.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
