'use server'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export type userProfile = {
  full_name: string
  bio: string
}
export async function updateUserprofile({ full_name, bio }: userProfile) {
  const supabase = createClient()

  const userSession = (await supabase.auth.getSession()).data.session

  if (!userSession) redirect('/login')

  const { data, error } = await supabase
    .from('profiles')
    .update({ full_name, bio })
    .eq('id', userSession.user.id)
    .single()

  if (error) {
    return {
      error: { error: error.code, message: error.message },
    }
  }

  revalidatePath('/settings', 'layout')

  // const { data, error } = await supabase
  //   .from('profiles')
  //   .console.log(full_name, bio)
}
