import { FadeIn } from '@/components/ui/FadeIn'

const CIRCLE_FILL = 'var(--color-gold-400)'
const CIRCLE_STROKE = 'var(--color-gold-500)'
const LABEL_FILL = 'var(--color-ink-950)'

export function TripleBrainVenn() {
  return (
    <FadeIn delay={400}>
      <figure className="mt-14 max-w-md mx-auto" aria-labelledby="triple-brain-venn-caption">
        <svg
          viewBox="0 0 360 320"
          role="img"
          aria-label="Venn diagram showing Craft, AI, and Vault overlapping into Triple Brain Marketing"
          className="w-full h-auto"
        >
          <circle cx="130" cy="120" r="85" fill={CIRCLE_FILL} fillOpacity="0.2" stroke={CIRCLE_STROKE} strokeWidth="1.5" />
          <circle cx="230" cy="120" r="85" fill={CIRCLE_FILL} fillOpacity="0.2" stroke={CIRCLE_STROKE} strokeWidth="1.5" />
          <circle cx="180" cy="200" r="85" fill={CIRCLE_FILL} fillOpacity="0.2" stroke={CIRCLE_STROKE} strokeWidth="1.5" />
          <text x="93"  y="95"  fill={LABEL_FILL} style={{ fontFamily: 'var(--font-heading)' }} fontSize="16" fontWeight="700">Craft</text>
          <text x="240" y="95"  fill={LABEL_FILL} style={{ fontFamily: 'var(--font-heading)' }} fontSize="16" fontWeight="700">AI</text>
          <text x="158" y="240" fill={LABEL_FILL} style={{ fontFamily: 'var(--font-heading)' }} fontSize="16" fontWeight="700">Vault</text>
        </svg>
        <figcaption
          id="triple-brain-venn-caption"
          className="mt-4 text-center font-heading text-sm font-bold uppercase tracking-wider text-gold-600"
        >
          Triple Brain Marketing
        </figcaption>
      </figure>
    </FadeIn>
  )
}
