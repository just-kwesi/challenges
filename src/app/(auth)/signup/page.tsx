import Oauth from '@/components/ui/auth/oauth-component'
import { SignupForm } from '@/components/ui/auth/signup'
import Terms from '@/components/ui/auth/terms'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up to Klipped | Submit Video Clips',
  description:
    'Sign Up to submit your game clips, vote on other highlights, and customize your klipped experience.',
}
export default function Signup() {
  return (
    <main className="mb-36 h-screen">
      <div className="mx-auto flex w-full flex-col justify-center items-center space-y-6 sm:w-[350px] mt-12">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email below to create your account
          </p>
        </div>
        <SignupForm />
        {/* <Oauth /> */}
        <Terms />
      </div>
    </main>
  )
}
