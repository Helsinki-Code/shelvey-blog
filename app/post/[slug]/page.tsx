import { getPostBySlug } from '@/lib/api'

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-gradient">{post.title}</h1>
      <div className="prose dark:prose-invert max-w-none">{post.content}</div>
    </div>
  )
}

