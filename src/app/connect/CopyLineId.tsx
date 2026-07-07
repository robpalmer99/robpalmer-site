'use client'

import { useState } from 'react'

export function CopyLineId({ lineId }: { lineId: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(lineId)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable (very old browser) — the ID is still visible to copy manually
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="mt-4 block w-full rounded-2xl border-2 border-[#06C755] bg-white px-6 py-3 transition active:scale-[0.98]"
    >
      <span className="block whitespace-nowrap text-lg font-semibold text-[#332C25]">
        LINE ID: <span className="text-[#06C755]">{lineId}</span>
      </span>
      <span className="block whitespace-nowrap text-sm font-medium text-[#332C25]/60">
        {copied ? 'คัดลอกแล้ว ✓' : 'แตะเพื่อคัดลอก'}
      </span>
    </button>
  )
}
