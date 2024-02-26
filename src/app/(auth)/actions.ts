'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'
import { FormData } from '@/components/ui/auth/login'
import { SignupData } from '@/components/ui/auth/signup'

export async function login(data: FormData) {
  const supabase = createClient()
  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    return {
      error: { error: error.name, message: error.message },
    }
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(data: SignupData) {
  const supabase = createClient()

  const signupData = {
    email: data.email,
    password: data.password,
    options: {
      data: {
        full_name: data.full_name,
        username: data.username,
      },
    },
  }

  const { error } = await supabase.auth.signUp(signupData)
  // const { error } = await supabase.auth.signUp(data)

  if (error) {
    return { error: error.name, message: error.message }
    // redirect(`/login/error?${error.message}`)
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function getUserdata(userId: string) {
  const supabase = createClient()
  const res = {}

  const { data, error } = await supabase
    .from('profiles')
    .select('id, full_name, username, avatar_url')
    .eq('id', userId)
    .single()

  if (error) {
    return {
      error: { error: error.code, message: error.message },
    }
  }
  return {
    data: { ...data },
  }
}
