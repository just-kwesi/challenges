import { LoginForm } from '@/components/ui/auth/login'
import Terms from '@/components/ui/auth/terms'
import Oauth from '@/components/ui/auth/oauth-component'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Log In to Klipped | Access Your Profile',
  description:
    'Log in to submit your game clips, vote on other highlights, and customize your klipped experience.',
}

export default function Login() {
  return (
    <main>
      <div className="mx-auto flex w-full flex-col justify-center items-center space-y-6 sm:w-[350px] mt-12">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Log in to your Account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <LoginForm />
        {/* <Oauth /> */}
        <Terms />
      </div>
    </main>
  )
}
