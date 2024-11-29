import { getUserProfile } from '@/lib/api'
import { ProfileForm } from '@/components/profile-form'

export default async function ProfilePage() {
  const profile = await getUserProfile()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gradient">Your Profile</h1>
      <ProfileForm initialData={profile} />
    </div>
  )
}

