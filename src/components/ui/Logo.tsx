interface LogoProps {
  className?: string
  variant?: 'light' | 'dark'
  subtitle?: string
}

export function Logo({
  className = '',
  variant = 'light',
  subtitle = 'CREATIVE STRATEGIST & COPYWRITER',
}: LogoProps) {
  const textColor = variant === 'light' ? 'var(--color-paper-50)' : 'var(--color-ink-950)'
  const accentColor = 'var(--color-gold-400)'
  // ~6.6 viewBox units per char at fontSize 7 with 0.3em tracking; 196 = x 14 → 210.
  const SUBTITLE_MAX_WIDTH = 196
  const subtitleOverflows = subtitle.length * 6.6 > SUBTITLE_MAX_WIDTH

  return (
    <svg
      viewBox="0 0 220 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Rob Palmer"
    >
      {/* Gold accent bar */}
      <rect x="0" y="0" width="3" height="40" rx="1.5" fill={accentColor} />

      {/* ROB */}
      <text
        x="14"
        y="22"
        fontFamily="var(--font-heading), Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize="18"
        letterSpacing="0.15em"
        fill={textColor}
      >
        ROB
      </text>

      {/* PALMER */}
      <text
        x="70"
        y="22"
        fontFamily="var(--font-heading), Inter, system-ui, sans-serif"
        fontWeight="300"
        fontSize="18"
        letterSpacing="0.15em"
        fill={textColor}
      >
        PALMER
      </text>

      {/* Subtitle */}
      <text
        x="14"
        y="35"
        fontFamily="var(--font-heading), Inter, system-ui, sans-serif"
        fontWeight="400"
        fontSize="7"
        letterSpacing="0.3em"
        // Long subtitles are fitted to the viewBox so they never overflow;
        // short ones keep their natural letter-spacing.
        textLength={subtitleOverflows ? SUBTITLE_MAX_WIDTH : undefined}
        lengthAdjust={subtitleOverflows ? 'spacing' : undefined}
        fill={accentColor}
      >
        {subtitle}
      </text>
    </svg>
  )
}
