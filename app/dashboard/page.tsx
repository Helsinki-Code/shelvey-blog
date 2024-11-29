import { getUserPosts } from '@/lib/api'
import { PostList } from '@/components/post-list'

export default async function DashboardPage() {
  const posts = await getUserPosts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gradient">Your Posts</h1>
      <PostList posts={posts} />
    </div>
  )
}

