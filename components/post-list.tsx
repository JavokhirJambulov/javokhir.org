import Link from 'next/link'
import type { Post } from '@/lib/posts'
import PostMeta from './post-meta'

export default function PostList({ posts }: { posts: Post[] }) {
  const byYear = posts.reduce<Record<string, Post[]>>((acc, p) => {
    const year = new Date(p.frontmatter.date).getFullYear().toString()
    acc[year] ||= []
    acc[year].push(p)
    return acc
  }, {})

  const years = Object.keys(byYear).sort((a,b) => Number(b) - Number(a))
  return (
    <div className="space-y-10">
      {years.map(year => (
        <section key={year}>
          <h2 className="mb-4 text-xl font-semibold">{year}</h2>
          <ul className="space-y-3">
            {byYear[year].map(post => (
              <li key={post.slug} >
                <div>
                  <div  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <Link href={`/posts/${post.slug}`} className="font-medium hover:underline">
                      {post.frontmatter.title}
                    </Link>
                    <div className="sm:text-right">
                      <PostMeta date={post.frontmatter.date} readingTime={post.readTime} />
                      {post.frontmatter.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">{post.frontmatter.description}</p>
                      )}
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r mt-5 from-transparent via-black to-transparent dark:via-gray-100" />
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
