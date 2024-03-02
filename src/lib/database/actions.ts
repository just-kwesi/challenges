'use server'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { revalidatePath, unstable_noStore as noStore } from 'next/cache'

import { FormData } from '@/components/ui/auth/login'
import { SignupData } from '@/components/ui/auth/signup'

import { Database, Tables, Enums } from '@/lib/database/supabase.types'

export type userProfile = {
  full_name: string
  bio: string
}
// supabase client

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
  // const res = {}

  const { data, error } = await supabase
    .from('profiles')
    .select('id, full_name, username, avatar_url, bio')
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
}

type videoDataAfterSubmit = Tables<'videos'>
export type videoData = Omit<
  videoDataAfterSubmit,
  'id' | 'created_at' | 'submitted_on' | 'user_id'
>

export async function submitVideo(videoData: videoData) {
  const supabase = createClient()
  const user = (await supabase.auth.getUser()).data.user

  if (!user) redirect('/login')

  const videofields = { ...videoData, user_id: user.id }

  const { data, error } = await supabase.from('videos').insert(videofields)
  if (error) {
    return {
      error: { error: error.code, message: error.message },
    }
  }
  revalidatePath('/videos', 'page')
  redirect('/videos')
}

// get video games data, and categories
type metadata = {
  name: string
  id: string
  description: string | null
}[]

export type GameCategories =
  | {
      error: {
        error: string
        message: string
      }
      gamesData?: undefined
      categoriesData?: undefined
    }
  | {
      gamesData: {
        name: string
        id: string
        description: string | null
      }[]
      categoriesData: {
        id: string
        name: string
        description: string | null
      }[]
      error?: undefined
    }

export async function getGamesAndCategories() {
  const supabase = createClient()
  const { data: gamesData, error: gamesError } = await supabase
    .from('games')
    .select('name, id,description')

  const { data: categoriesData, error: categoriesError } = await supabase
    .from('categories')
    .select('id,name,description')

  if (gamesError) {
    return {
      error: { error: gamesError.code, message: gamesError.message },
    }
  }

  if (categoriesError) {
    return {
      error: { error: categoriesError.code, message: categoriesError.message },
    }
  }
  // console.log(gamesData)

  return {
    gamesData,
    categoriesData,
  }
}

export async function getSignedInUserProfile() {
  const supabase = createClient()
  const userSession = (await supabase.auth.getSession()).data.session

  if (!userSession) {
    redirect('/login')
  }
  const userId = userSession.user.id

  const { data, error } = await supabase
    .from('profiles')
    .select('id, full_name, username, avatar_url, bio')
    .eq('id', userId)
    .single()

  if (error) {
    redirect('/error')
  }
  return data
}
