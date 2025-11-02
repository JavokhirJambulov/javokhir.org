import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export type PostFrontmatter = {
  title: string
  description?: string
  date: string // ISO
  tags?: string[]
  draft?: boolean
}

export type Post = {
  slug: string
  content: string
  frontmatter: PostFrontmatter
  readTime: string
}

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
  const posts = files.map((file) => {
    const slug = file.replace(/\.(mdx|md)$/, '')
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8')
    const { data, content } = matter(raw)
    const fm = data as PostFrontmatter
    const stats = readingTime(content)
    return {
      slug,
      content,
      frontmatter: fm,
      readTime: stats.text
    }
  })
  .filter(p => process.env.NODE_ENV === 'development' ? true : !p.frontmatter.draft)
  .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())

  return posts
}

export function getPostBySlug(slug: string): Post | null {
  const filepath = ['.mdx', '.md']
    .map(ext => path.join(POSTS_DIR, `${slug}${ext}`))
    .find(fp => fs.existsSync(fp))
  if (!filepath) return null
  const raw = fs.readFileSync(filepath, 'utf8')
  const { data, content } = matter(raw)
  const fm = data as PostFrontmatter
  const stats = readingTime(content)
  return { slug, content, frontmatter: fm, readTime: stats.text }
}
