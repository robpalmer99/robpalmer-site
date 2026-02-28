'use client'

import { useState } from 'react'
import { PortfolioCard } from './PortfolioCard'
import type { PortfolioItem } from '@/app/portfolio/_data/portfolio'
import { portfolioCategories, type PortfolioCategory } from '@/app/portfolio/_data/portfolio'
import { cn } from '@/lib/utils'

interface PortfolioGridProps {
  items: PortfolioItem[]
}

export function PortfolioGrid({ items }: PortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All')

  const filteredItems =
    activeCategory === 'All'
      ? items
      : items.filter((item) => item.category === activeCategory)

  return (
    <>
      {/* Filter Tabs */}
      <div role="group" aria-label="Filter portfolio by category" className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {portfolioCategories.map((category) => {
          const count =
            category === 'All'
              ? items.length
              : items.filter((i) => i.category === category).length
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

      {/* Grid with aria-live for filter changes */}
      <div aria-live="polite" aria-atomic="false">
        <p className="sr-only">
          {filteredItems.length === 0
            ? 'No portfolio items in this category.'
            : `Showing ${filteredItems.length} portfolio ${filteredItems.length === 1 ? 'item' : 'items'}.`}
        </p>
        <ul role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <li key={item.slug}>
              <PortfolioCard item={item} />
            </li>
          ))}
        </ul>
      </div>

      {/* Empty state */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-paper-500 font-body">
            No portfolio items in this category yet.
          </p>
        </div>
      )}
    </>
  )
}
