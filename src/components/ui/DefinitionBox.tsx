interface DefinitionBoxProps {
  term: string
  definition: string
}

export function DefinitionBox({ term, definition }: DefinitionBoxProps) {
  return (
    <div className="rounded-xl border border-gold-200 bg-gold-50 p-6 sm:p-8">
      <dt className="font-heading text-sm font-semibold uppercase tracking-wider text-gold-600 mb-2">
        What is {term}?
      </dt>
      <dd className="text-lg text-ink-700 leading-relaxed font-body">
        {definition}
      </dd>
    </div>
  )
}
