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
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {portfolioCategories.map((category) => {
          const count =
            category === 'All'
              ? items.length
              : items.filter((i) => i.category === category).length
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-heading font-semibold transition-all duration-200',
                activeCategory === category
                  ? 'bg-gold-500 text-white shadow-sm'
                  : 'bg-paper-100 text-paper-600 hover:bg-paper-200 hover:text-ink-950'
              )}
            >
              {category}
              <span
                className={cn(
                  'text-xs rounded-full px-1.5 py-0.5 min-w-[1.25rem] text-center',
                  activeCategory === category
                    ? 'bg-gold-600 text-gold-100'
                    : 'bg-paper-200 text-paper-500'
                )}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <PortfolioCard key={item.slug} item={item} />
        ))}
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
