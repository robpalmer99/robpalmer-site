'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { BlogPostCard } from './BlogPostCard'
import { useDebounce } from '@/hooks/useDebounce'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/Badge'
import type { BlogPostMeta } from '@/lib/mdx'
import type { SiteSearchResult } from '@/lib/search'

interface BlogGridProps {
  posts: BlogPostMeta[]
  allPosts?: BlogPostMeta[]
  siteSearchIndex?: SiteSearchResult[]
  currentPage?: number
  totalPages?: number
}

export function BlogGrid({ posts, allPosts = posts, siteSearchIndex = [], currentPage = 1, totalPages = 1 }: BlogGridProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const debouncedQuery = useDebounce(searchQuery, 200)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const searchParams = useSearchParams()

  // Auto-focus search input when arriving via nav search icon
  useEffect(() => {
    if (searchParams.get('search') === 'true' && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchParams])

  // Derive categories from all posts (not just current page)
  const categories = useMemo(() => {
    const cats = Array.from(new Set(allPosts.map((p) => p.category))).sort()
    return ['All', ...cats]
  }, [allPosts])

  const isFiltered = activeCategory !== 'All' || debouncedQuery.trim() !== ''
  const isSearching = debouncedQuery.trim() !== ''

  // Filter posts: when filtering, search across ALL posts; otherwise show paginated posts
  const filteredPosts = useMemo(() => {
    let results = isFiltered ? allPosts : posts

    // Category filter
    if (activeCategory !== 'All') {
      results = results.filter((post) => post.category === activeCategory)
    }

    // Search filter
    const query = debouncedQuery.toLowerCase().trim()
    if (query) {
      results = results.filter((post) => {
        const searchableText = [
          post.title,
          post.description,
          post.category,
          ...post.tags,
        ]
          .join(' ')
          .toLowerCase()
        return searchableText.includes(query)
      })
    }

    return results
  }, [posts, allPosts, activeCategory, debouncedQuery, isFiltered])

  // Site-wide search results (services, verticals, case studies, portfolio)
  const siteResults = useMemo(() => {
    const query = debouncedQuery.toLowerCase().trim()
    if (!query) return []
    return siteSearchIndex.filter((item) => item.searchableText.includes(query))
  }, [siteSearchIndex, debouncedQuery])

  const totalResults = isSearching
    ? filteredPosts.length + siteResults.length
    : filteredPosts.length

  function clearFilters() {
    setSearchQuery('')
    setActiveCategory('All')
  }

  // Pagination helpers
  const hasPagination = totalPages > 1
  const prevHref = currentPage === 2 ? '/blog' : `/blog/page/${currentPage - 1}`
  const nextHref = `/blog/page/${currentPage + 1}`

  return (
    <>
      {/* Search Input */}
      <div className="max-w-xl mx-auto mb-8">
        <label htmlFor="blog-search" className="sr-only">
          Search all content
        </label>
        <div className="relative">
          {/* Magnifying glass icon */}
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-paper-400 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            ref={searchInputRef}
            id="blog-search"
            type="search"
            placeholder="Search all content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-10 py-3 rounded-lg border border-paper-200 bg-white text-ink-950 font-body text-sm transition-shadow placeholder:text-paper-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400"
          />
          {/* Clear button */}
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-paper-400 hover:text-ink-950 hover:bg-paper-100 transition-colors"
              aria-label="Clear search"
            >
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div
        role="group"
        aria-label="Filter posts by category"
        className="flex flex-wrap items-center justify-center gap-2 mb-8"
      >
        {categories.map((category) => {
          const count =
            category === 'All'
              ? allPosts.length
              : allPosts.filter((p) => p.category === category).length
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-heading font-semibold transition-all duration-200',
                activeCategory === category
                  ? 'bg-ink-950 text-white shadow-sm'
                  : 'bg-paper-100 text-paper-600 hover:bg-paper-200 hover:text-ink-950'
              )}
            >
              {category}
              <span
                className={cn(
                  'text-xs rounded-full px-1.5 py-0.5 min-w-[1.25rem] text-center',
                  activeCategory === category
                    ? 'bg-ink-700 text-paper-200'
                    : 'bg-paper-200 text-paper-500'
                )}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Results count */}
      {isFiltered && totalResults > 0 && (
        <p className="text-sm text-paper-500 font-body text-center mb-6">
          Showing {totalResults} result{totalResults !== 1 ? 's' : ''}
          {debouncedQuery.trim() && (
            <>
              {' '}
              matching &ldquo;{debouncedQuery.trim()}&rdquo;
            </>
          )}
        </p>
      )}

      {/* Grid with aria-live for filter changes */}
      <div aria-live="polite" aria-atomic="false">
        <p className="sr-only">
          {totalResults === 0 && isFiltered
            ? 'No results match your current filters.'
            : `Showing ${totalResults} ${totalResults === 1 ? 'result' : 'results'}.`}
        </p>

        {/* Site-wide results (shown when searching) */}
        {isSearching && siteResults.length > 0 && (
          <div className="mb-10">
            <h2 className="text-lg font-heading font-bold text-ink-950 mb-4">
              Pages
            </h2>
            <ul role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {siteResults.map((result) => (
                <li key={result.url + result.title}>
                  <Link
                    href={result.url}
                    className="group block rounded-xl border border-paper-200 bg-white shadow-sm overflow-hidden p-5 transition-all duration-200 hover:shadow-md hover:border-gold-200 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="default">{result.type}</Badge>
                    </div>
                    <h3 className="font-heading text-base font-bold text-ink-950 group-hover:text-gold-600 transition-colors leading-snug">
                      {result.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-ink-700 leading-relaxed font-body line-clamp-2">
                      {result.description}
                    </p>
                    <span className="mt-3 inline-block text-sm font-heading font-semibold text-gold-600 group-hover:text-gold-500 transition-colors">
                      View page →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Blog post results */}
        {filteredPosts.length > 0 ? (
          <>
            {isSearching && siteResults.length > 0 && (
              <h2 className="text-lg font-heading font-bold text-ink-950 mb-4">
                Articles
              </h2>
            )}
            <ul role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <li key={post.slug}>
                  <BlogPostCard
                    title={post.title}
                    slug={post.slug}
                    excerpt={post.description}
                    date={post.date}
                    category={post.category}
                    readingTime={post.readingTime}
                    heroImage={post.heroImage}
                    heroAlt={post.heroAlt}
                  />
                </li>
              ))}
            </ul>
          </>
        ) : isFiltered && siteResults.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-paper-500 font-body mb-4">
              No results match your current filters.
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-heading font-semibold bg-gold-500 text-white hover:bg-gold-600 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        ) : null}
      </div>

      {/* Pagination */}
      {hasPagination && !isFiltered && (
        <nav aria-label="Blog pagination" className="flex items-center justify-center gap-4 mt-12 pt-8 border-t border-paper-200">
          {currentPage > 1 ? (
            <Link
              href={prevHref}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-heading font-semibold bg-paper-100 text-ink-950 hover:bg-paper-200 transition-colors"
            >
              ← Previous
            </Link>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-heading font-semibold bg-paper-50 text-paper-300 cursor-not-allowed">
              ← Previous
            </span>
          )}

          <span className="text-sm font-heading font-medium text-paper-500">
            Page {currentPage} of {totalPages}
          </span>

          {currentPage < totalPages ? (
            <Link
              href={nextHref}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-heading font-semibold bg-paper-100 text-ink-950 hover:bg-paper-200 transition-colors"
            >
              Next →
            </Link>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-heading font-semibold bg-paper-50 text-paper-300 cursor-not-allowed">
              Next →
            </span>
          )}
        </nav>
      )}
    </>
  )
}
