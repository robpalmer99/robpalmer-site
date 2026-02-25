interface ExpertQuoteProps {
  quote: string
  author: string
  title?: string
}

export function ExpertQuote({ quote, author, title }: ExpertQuoteProps) {
  return (
    <figure className="not-prose my-8 border-l-4 border-gold-400 pl-6 py-2">
      <blockquote className="font-body text-lg italic text-ink-950 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-3 font-heading text-sm text-paper-500">
        — {author}{title && <span className="text-paper-400">, {title}</span>}
      </figcaption>
    </figure>
  )
}
