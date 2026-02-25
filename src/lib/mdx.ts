import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

export interface BlogFAQ {
  question: string
  answer: string
}

export interface BlogPostMeta {
  title: string
  description: string
  date: string
  category: string
  tags: string[]
  slug: string
  readingTime: string
  published: boolean
  heroImage?: string
  heroAlt?: string
  faqs?: BlogFAQ[]
}

export function getAllBlogPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return []
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))

  const posts = files
    .map((filename) => {
      const slug = filename.replace('.mdx', '')
      return getBlogPostMeta(slug)
    })
    .filter((post): post is BlogPostMeta => post !== null && post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export function getBlogPostMeta(slug: string): BlogPostMeta | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const source = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(source)
  const stats = readingTime(content)

  return {
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    category: data.category || 'Copywriting',
    tags: data.tags || [],
    slug,
    readingTime: stats.text,
    published: data.published !== false,
    heroImage: data.heroImage || undefined,
    heroAlt: data.heroAlt || undefined,
    faqs: data.faqs || undefined,
  }
}

export function getBlogPostContent(slug: string): {
  meta: BlogPostMeta
  content: string
} | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const source = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(source)
  const stats = readingTime(content)

  return {
    meta: {
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      category: data.category || 'Copywriting',
      tags: data.tags || [],
      slug,
      readingTime: stats.text,
      published: data.published !== false,
      heroImage: data.heroImage || undefined,
      heroAlt: data.heroAlt || undefined,
      faqs: data.faqs || undefined,
    },
    content,
  }
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return []
  }

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''))
}
