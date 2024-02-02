'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'
import { FormData } from '@/components/ui/auth/login'

export async function login(data: FormData) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect(`/login/error?${error.message}`)
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(data: FormData) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect(`/login/error?${error.message}`)
  }

  revalidatePath('/', 'layout')
  redirect('/')
}
