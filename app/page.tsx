import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AIFeatures } from '@/components/ai-features'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <header className="w-full p-4 text-center">
        <h1 className="text-4xl font-bold mb-2">ShelVey</h1>
        <p className="text-xl">AI-Powered Blogging Platform</p>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-5xl font-extrabold mb-4">Revolutionize Your Blogging Experience</h2>
        <p className="text-xl mb-8">Create, enhance, and share your ideas with cutting-edge AI assistance.</p>
        
        <Button asChild size="lg" className="mb-8">
          <Link href="/create">Get Started For Free</Link>
        </Button>
        
        <p className="text-sm mb-8">No signup required. Start blogging in seconds.</p>
        
        <AIFeatures />
      </main>
      
      <footer className="w-full p-4 text-center">
        <nav className="space-x-4">
          <Link href="/signin" className="hover:underline">Sign In</Link>
          <Link href="/terms" className="hover:underline">Terms</Link>
          <Link href="https://twitter.com/shelvey" className="hover:underline">Follow us on Twitter</Link>
          <Link href="mailto:info@shelvey.com" className="hover:underline">Email</Link>
        </nav>
      </footer>
    </div>
  )
}

