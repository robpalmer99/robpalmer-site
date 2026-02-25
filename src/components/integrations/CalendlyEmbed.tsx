'use client'

import dynamic from 'next/dynamic'
import { CALENDLY_URL } from '@/lib/constants'

const InlineWidget = dynamic(
  () => import('react-calendly').then((mod) => mod.InlineWidget),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[660px] bg-paper-100 rounded-xl animate-pulse flex items-center justify-center">
        <p className="text-paper-400 font-heading text-sm">Loading calendar...</p>
      </div>
    ),
  }
)

interface CalendlyEmbedProps {
  url?: string
}

export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  return (
    <div className="min-h-[660px]">
      <InlineWidget
        url={url || CALENDLY_URL}
        styles={{ height: '660px' }}
      />
    </div>
  )
}
