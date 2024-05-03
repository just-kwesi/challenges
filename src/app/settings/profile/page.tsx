import { Metadata } from 'next'
import { Separator } from '@/components/ui/separator'
import { createClient } from '@/lib/supabase/server'
import ProfileForm from '@/components/ui/settings/ProfileForm'
import { getUserdata } from '@/lib/database/actions'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { Tables } from '@/lib/database/supabase.types'

export const metadata: Metadata = {
  title: 'Account Settings | Klipped',
  description:
    'Adjust your account settings to optimize your Klipped experience. Manage notifications, privacy settings, and more.',
}

export default async function SettingsProfilePage() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const userData = user
    ? ((await getUserdata(user.id)).data as Tables<'profiles'>)
    : null

  if (!userData) {
    revalidatePath('/', 'layout')
    redirect('/login')
  }
  return (
    <div className="space-y-6 mt-3">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <ProfileForm userData={userData} />
    </div>
  )
}
