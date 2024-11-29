'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { AnimatedButton } from '@/components/ui/animated-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'react-hot-toast'

type AuthType = 'signin' | 'signup'

export function AuthForm({ type }: { type: AuthType }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    if (type === 'signup') {
      try {
        const res = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password }),
        })

        if (res.ok) {
          toast.success('Sign up successful! Please sign in.')
          router.push('/signin')
        } else {
          const data = await res.json()
          throw new Error(data.error || 'Something went wrong')
        }
      } catch (error) {
        toast.error(error.message)
      }
    } else {
      try {
        const result = await signIn('credentials', {
          redirect: false,
          email,
          password,
        })

        if (result?.error) {
          throw new Error(result.error)
        }

        router.push('/dashboard')
        toast.success('Signed in successfully!')
      } catch (error) {
        toast.error(error.message)
      }
    }

    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {type === 'signup' && (
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
      )}
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <AnimatedButton type="submit" disabled={isLoading}>
        {isLoading ? 'Processing...' : type === 'signin' ? 'Sign In' : 'Sign Up'}
      </AnimatedButton>
    </form>
  )
}

