import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { renderMDX } from '@/lib/mdx'
import Prose from '@/components/prose'
import PostMeta from '@/components/post-meta'
import { pageMetadata, SITE } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return pageMetadata(post.frontmatter.title, post.frontmatter.description ?? SITE.description, `/posts/${slug}`, 'article')
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return notFound()
  const { content } = await renderMDX(post.content)
  return (
    <article className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold">{post.frontmatter.title}</h1>
        <PostMeta date={post.frontmatter.date} readingTime={post.readTime} />
        {post.frontmatter.tags?.length ? (
          <p className="text-sm text-gray-600 dark:text-gray-400">{post.frontmatter.tags.join(' · ')}</p>
        ) : null}
      </header>
      <Prose>{content}</Prose>
      <p className="mt-8"><Link href="/posts" className="nav-link underline">← Back to all posts</Link></p>
    </article>
  )
}
