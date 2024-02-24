import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { UserNav } from '@/components/ui/auth/UserNav'
import { getUserdata } from '@/app/(auth)/actions'

export default async function AuthButton() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const userProfile = user ? (await getUserdata(user.id)).data : undefined
  // console.log(userProfile)

  const signOut = async () => {
    'use server'

    const supabase = createClient()
    await supabase.auth.signOut()
    return redirect('/login')
  }

  return user ? (
    <div className="flex items-center gap-4">
      <div className="ml-auto flex items-center space-x-4">
        <UserNav signout={signOut} userProfile={userProfile} />
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
