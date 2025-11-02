import { getAllPosts } from '@/lib/posts'
import PostList from '@/components/post-list'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Posts' }

export default function PostsPage() {
  const posts = getAllPosts()
  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Posts</h1>
      <PostList posts={posts} />
    </section>
  )
}
