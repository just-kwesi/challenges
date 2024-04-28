import { LoginForm } from '@/components/ui/auth/login'
import Link from 'next/link'
import Terms from '@/components/ui/auth/terms'

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
        <Terms />
      </div>
    </main>
  )
}
