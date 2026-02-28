interface KeyTakeawaysProps {
  children: React.ReactNode
}

export function KeyTakeaways({ children }: KeyTakeawaysProps) {
  return (
    <div className="not-prose my-8 rounded-xl bg-ink-950 p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-4">
        <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold-400">
          Key Takeaways
        </p>
      </div>
      <div className="text-paper-200 font-body text-base leading-relaxed [&_ul]:space-y-2 [&_li]:flex [&_li]:gap-2 [&_li]:before:content-['✓'] [&_li]:before:text-gold-400 [&_li]:before:font-bold">
        {children}
      </div>
    </div>
  )
}
