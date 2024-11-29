import Link from 'next/link'

type Post = {
  id: string
  title: string
  excerpt: string
  slug: string
}

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">
            <Link href={`/post/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
        </div>
      ))}
    </div>
  )
}

