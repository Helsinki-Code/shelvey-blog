import Link from 'next/link'
import { AnimatedLogo } from '../animated-logo'
import { ThemeToggle } from '../theme-toggle'

export function Header() {
  return (
    <header className="w-full p-4 flex justify-between items-center z-10">
      <Link href="/" className="flex items-center space-x-2">
        <AnimatedLogo />
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">ShelVey</h1>
      </Link>
      <nav className="space-x-4">
        <Link href="/dashboard" className="hover:text-purple-400 transition-colors">Dashboard</Link>
        <Link href="/create" className="hover:text-purple-400 transition-colors">Create Post</Link>
        <ThemeToggle />
      </nav>
    </header>
  )
}

