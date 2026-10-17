import { getSiteSearchIndex } from '@/lib/search'

// Prerendered at build time. The blog search box fetches this lazily on first
// focus instead of having the whole index serialised into every listing page.
export const dynamic = 'force-static'

export function GET() {
  return Response.json(getSiteSearchIndex())
}
