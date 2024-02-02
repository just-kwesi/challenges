import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { UserNav } from '@/components/ui/auth/UserNav'

export default async function AuthButton() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const signOut = async () => {
    'use server'

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    await supabase.auth.signOut()
    return redirect('/login')
  }

  return user ? (
    <div className="flex items-center gap-4">
      <div className="ml-auto flex items-center space-x-4">
        <UserNav signout={signOut} />
      </div>
    </div>
  ) : (
    <div className="flex justify-end gap-2">
      <Button asChild variant="outline">
        <Link href="/login">Login</Link>
      </Button>
      <Button asChild>
        <Link href="/signup">Signup</Link>
      </Button>
    </div>
  )
}
