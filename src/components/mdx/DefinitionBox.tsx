interface DefinitionBoxProps {
  term: string
  children: React.ReactNode
}

export function DefinitionBox({ term, children }: DefinitionBoxProps) {
  return (
    <div className="not-prose my-8 rounded-xl bg-gold-50 p-6 sm:p-8">
      <p className="font-heading text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">
        Definition
      </p>
      <p className="font-heading text-lg font-bold text-ink-950 mb-3">{term}</p>
      <div className="text-ink-700 font-body text-base leading-relaxed">{children}</div>
    </div>
  )
}
