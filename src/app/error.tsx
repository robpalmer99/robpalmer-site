'use client'

import { Button } from '@/components/ui/Button'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-paper-50">
      <div className="max-w-md mx-auto text-center px-6">
        <h1 className="font-heading text-3xl font-bold text-ink-950 mb-4">
          Something went wrong
        </h1>
        <p className="text-ink-700 font-body mb-8">
          An unexpected error occurred. Please try again or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={() => reset()}>Try Again</Button>
          <Button href="/" variant="outline">Go to Homepage</Button>
        </div>
      </div>
    </div>
  )
}
