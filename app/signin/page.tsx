import { SignInForm } from '@/components/sign-in-form'

export default function SignInPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h1 className="text-3xl font-bold mb-6 text-gradient">Sign In</h1>
      <SignInForm />
    </div>
  )
}

