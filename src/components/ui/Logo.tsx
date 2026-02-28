interface LogoProps {
  className?: string
  variant?: 'light' | 'dark'
}

export function Logo({ className = '', variant = 'light' }: LogoProps) {
  const textColor = variant === 'light' ? '#FAFAF8' : '#0A0A0F'
  const accentColor = '#F5B731'

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
        fill={accentColor}
      >
        DIRECT-RESPONSE COPYWRITER
      </text>
    </svg>
  )
}
