interface ExpertQuoteProps {
  quote: string
  author: string
  title?: string
}

export function ExpertQuote({ quote, author, title }: ExpertQuoteProps) {
  return (
    <figure className="not-prose my-8 rounded-xl bg-gold-50 px-6 py-5 sm:px-8 sm:py-6">
      <blockquote className="font-body text-lg italic text-ink-950 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-3 font-heading text-sm text-paper-600">
        — {author}{title && <span className="text-paper-600/75">, {title}</span>}
      </figcaption>
    </figure>
  )
}
