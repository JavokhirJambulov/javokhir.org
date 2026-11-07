import { getAllPosts } from '@/lib/posts'
import PostList from '@/components/post-list'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata(
  'Posts',
  'Notes by Javokhir Jambulov on building web and Android products, debugging, performance, and backend systems.',
  '/posts'
)

export default function PostsPage() {
  const posts = getAllPosts()
  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Posts</h1>
      <PostList posts={posts} />
    </section>
  )
}
