import { SITE } from '@/lib/site'
import { getAllPosts } from '@/lib/posts'

export default async function sitemap() {
  const now = new Date().toISOString()
  const routes = ['/', '/projects', '/posts', '/about', '/contact']
    .map((r) => ({ url: `${SITE.url}${r}`, lastModified: now }))

  const posts = getAllPosts().map(p => ({
    url: `${SITE.url}/posts/${p.slug}`,
    lastModified: p.frontmatter.date
  }))

  return [...routes, ...posts]
}
