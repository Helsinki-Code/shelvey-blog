import { CreatePostForm } from '@/components/create-post-form'

export default function CreatePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gradient">Create New Post</h1>
      <CreatePostForm />
    </div>
  )
}

