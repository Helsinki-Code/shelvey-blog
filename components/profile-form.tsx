'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { UserProfile, updateProfile } from '@/lib/api'
import { useSession } from 'next-auth/react'

export function ProfileForm({ initialData }: { initialData: UserProfile }) {
  const [name, setName] = useState(initialData.name)
  const [email, setEmail] = useState(initialData.email)
  const [bio, setBio] = useState(initialData.bio)
  const { data: session } = useSession()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (session?.user?.id) {
      await updateProfile(session.user.id, { name, email, bio })
      // TODO: Add success message or redirect
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Textarea
        placeholder="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        rows={4}
      />
      <Button type="submit">Update Profile</Button>
    </form>
  )
}

