interface FAQItemProps {
  question: string
  children: React.ReactNode
}

export function FAQItem({ question, children }: FAQItemProps) {
  return (
    <div className="not-prose py-6 border-b border-paper-200 last:border-b-0">
      <h3 className="font-heading text-lg font-bold text-ink-950 mb-3">{question}</h3>
      <div className="text-ink-700 font-body text-base leading-relaxed">{children}</div>
    </div>
  )
}

interface FAQSectionProps {
  children: React.ReactNode
}

export function FAQSection({ children }: FAQSectionProps) {
  return (
    <div className="not-prose my-10">
      <div className="flex items-center gap-2 mb-2">
        <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="font-heading text-2xl font-bold text-ink-950">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="divide-y divide-paper-200">{children}</div>
    </div>
  )
}
