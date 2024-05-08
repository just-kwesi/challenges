import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { UserNav } from '@/components/ui/auth/UserNav'
import { getUserdata } from '@/lib/database/actions'
import { FileVideo } from 'lucide-react'
import { Tables } from '@/lib/database/supabase.types'

export default async function AuthButton() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const userProfile = user
    ? ((await getUserdata(user.id)).data as Tables<'profiles'>)
    : null
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
        <Button asChild>
          <Link href="/submit-video">
            <FileVideo className="mr-2 h-4 w-4" /> Submit Video
          </Link>
        </Button>
        <UserNav signout={signOut} userProfile={userProfile || undefined} />
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
