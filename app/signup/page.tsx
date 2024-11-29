import { SignUpForm } from '@/components/sign-up-form'

export default function SignUpPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h1 className="text-3xl font-bold mb-6 text-gradient">Sign Up</h1>
      <SignUpForm />
    </div>
  )
}

