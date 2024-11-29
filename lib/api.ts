// This is a mock API. In a real application, these functions would interact with your backend.

export type Post = {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
};

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  bio: string;
};

const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with ShelVey',
    content: 'ShelVey is an innovative AI-powered blogging platform...',
    excerpt: 'Learn how to get started with ShelVey and revolutionize your blogging experience.',
    slug: 'getting-started-with-shelvey',
  },
  {
    id: '2',
    title: 'Leveraging AI in Your Writing',
    content: 'Artificial Intelligence can significantly enhance your writing process...',
    excerpt: 'Discover how to use ShelVey\'s AI features to improve your writing.',
    slug: 'leveraging-ai-in-your-writing',
  },
];

const mockProfile: UserProfile = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  bio: 'Passionate blogger and tech enthusiast.',
};

export async function getPostBySlug(slug: string): Promise<Post | null> {
  // In a real app, this would fetch the post from your API
  return mockPosts.find(post => post.slug === slug) || null;
}

export async function getUserPosts(): Promise<Post[]> {
  // In a real app, this would fetch the user's posts from your API
  return mockPosts;
}

export async function getUserProfile(): Promise<UserProfile> {
  // In a real app, this would fetch the user's profile from your API
  return mockProfile;
}
