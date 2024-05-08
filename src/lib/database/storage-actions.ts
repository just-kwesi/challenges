'use server'
import { createClient } from '@/lib/supabase/server'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { revalidatePath, unstable_noStore as noStore } from 'next/cache'

import { Database, Tables, Enums } from '@/lib/database/supabase.types'
import {
  QueryResult,
  QueryData,
  QueryError,
  AuthError,
} from '@supabase/supabase-js'

export async function uploadProfilePicture(file: File) {
  try {
    const supabase = createClient()
    const userSession = (await supabase.auth.getSession()).data.session
    if (!userSession) redirect('/login')
    if (file.size > 1024 * 1024 * 5) {
      // for example, limit to 5MB
      return { error: 'File size exceeds the limit' }
    }
    const fileExtension = file.name.split('.').pop()
    const fileName = `avatars/${Date.now()}.${fileExtension}`
    const { data, error } = await supabase.storage
      .from('avatars')
      .upload(fileName, file)

    if (error) throw error
    console.log(data)
    return { success: data }
  } catch (error) {
    return {
      error: error,
    }
  }
}

export async function updateUserprofilePicture(avatar_url: string) {
  const supabase = createClient()
  const userSession = (await supabase.auth.getSession()).data.session
  if (!userSession) redirect('/login')

  const { data, error } = await supabase
    .from('profiles')
    .update({ avatar_url })
    .eq('id', userSession.user.id)
    .single()
  // console.log(data)
  if (error) {
    return {
      error: { error: error.code, message: error.message },
    }
  }

  revalidatePath('/settings', 'layout')
}
