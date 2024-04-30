'use server'
import { createClient } from '@/lib/supabase/server'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { revalidatePath, unstable_noStore as noStore } from 'next/cache'

import { FormData } from '@/components/ui/auth/login'
import { SignupData } from '@/components/ui/auth/signup'

import { Database, Tables, Enums } from '@/lib/database/supabase.types'
import {
  QueryResult,
  QueryData,
  QueryError,
  AuthError,
} from '@supabase/supabase-js'

export type userProfile = {
  full_name: string
  bio?: string
  twitch_url?: string
  x_url?: string
  youtube_url?: string
  username?: string
}

// * LOGIN
export async function login(data: FormData) {
  const supabase = createClient()
  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    return {
      error: true,
    }
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function loginWithOauth(prov: string) {
  const supabase = createClient()
  const origin = headers().get('origin')
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  })
  if (error) {
    return { error: true }
  } else {
    redirect(data.url)
  }
}

// * Check if the username is picked
export async function checkUsername(potentialUsername: string) {
  try {
    const supabase = createClient()

    const { data, error } = await supabase
      .from('profiles')
      .select('id,username')
      .eq('username', potentialUsername.toLowerCase())
      .single()

    // console.log(error, data)
    if (error?.code == 'PGRST116') {
      return { success: true }
    } else {
      return { success: false }
    }
  } catch (error) {
    return { error }
  }
}

// * SIGNUP
export async function signup(data: SignupData) {
  const supabase = createClient()
  const signupData = {
    email: data.email,
    password: data.password,
    options: {
      data: {
        full_name: data.full_name,
        username: data.username.toLowerCase(),
      },
    },
  }

  const { error } = await supabase.auth.signUp(signupData)
  // console.log(error)
  // const { error } = await supabase.auth.signUp(data)

  if (error) {
    return { error: error.name, message: error.message }
    // redirect(`/login/error?${error.message}`)
  }
  return {
    success: true,
  }

  // revalidatePath('/', 'layout')
  // redirect('/')
}

// * Reset password
export async function resetPasswordServer(email: string, urlBase: string) {
  try {
    const supabase = createClient()
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: urlBase,
    })
    // console.log(error)
    if (error) throw error

    return {
      success: true,
    }
  } catch (error) {
    let message
    if (error instanceof Error) message = error.message
    return { error: message }
  }
}

// * Update Passsword
export async function updatePassword(password: string) {
  try {
    const supabase = createClient()
    const { data, error } = await supabase.auth.updateUser({
      password,
    })
    if (error) throw error
    return { success: true }
  } catch (error) {
    let message
    if (error instanceof Error) message = error.message
    return { error: message }
  }
}

// * USERDATA
export async function getUserdata(userId: string) {
  const supabase = createClient()
  // const res = {}

  const { data, error } = await supabase
    .from('profiles')
    .select(
      'id, full_name, username, avatar_url, bio,twitch_url,x_url,youtube_url'
    )
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

// * UPDATE USER DATA
export async function updateUserprofile({
  full_name,
  bio,
  youtube_url,
  twitch_url,
  x_url,
  username,
}: userProfile) {
  const supabase = createClient()
  const userSession = (await supabase.auth.getSession()).data.session
  if (!userSession) redirect('/login')

  const { data, error } = await supabase
    .from('profiles')
    .update({ full_name, bio, youtube_url, twitch_url, x_url, username })
    .eq('id', userSession.user.id)
    .single()
  console.log(data)
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

// * SUBMIT VIDEO TO DATABASE
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

// * GET GAMES AND CATEGORIES
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

// *
export async function getSignedInUserProfile() {
  const supabase = createClient()
  const userSession = (await supabase.auth.getSession()).data.session

  if (!userSession) {
    redirect('/login')
  }
  const userId = userSession.user.id

  const { data, error } = await supabase
    .from('profiles')
    .select(
      'id, full_name, username, avatar_url, bio, x_url,twitch_url,youtube_url'
    )
    .eq('id', userId)
    .single()

  if (error) {
    redirect('/error')
  }
  return data
}

// *get a user details
export async function getUserDetails(userId: string) {
  const supabase = createClient()

  const { data, error } = await supabase
    .from('profiles')
    .select('id, full_name, username, avatar_url, bio')
    .eq('username', userId)
    .single()

  if (error) {
    redirect('/error')
  }
  return data
}

// * GET USER VIDEOS
export async function getUserVideos() {
  try {
    const supabase = createClient()
    const userSession = (await supabase.auth.getSession()).data.session
    if (!userSession) {
      redirect('/login')
    }
    const userId = userSession.user.id

    let videosWithDataQuery = supabase
      .from('videos')
      .select(
        `
    id, title, description ,url,reviewed,
    games (
      name
    ), 
    categories (
      name
    ),
    profiles (
      username,
      id
    )
  `
      )
      .eq('user_id', userId)

    type videosWithData = QueryData<typeof videosWithDataQuery>
    const { data, error } = await videosWithDataQuery
    if (error) throw error
    const videoData: videosWithData = data
    return { success: videoData }
  } catch (error) {
    return { error }
  }
}

// * Get game details
// * game title,description,image,id
export async function getGameDetails() {
  try {
    const supabase = createClient()

    const gamesDataQuery = supabase.from('gameimages').select(`image_url,
        games(id,name,description,slug)`)

    type gamesData = QueryData<typeof gamesDataQuery>
    const { data, error } = await gamesDataQuery
    if (error) throw error
    const games: gamesData = data
    return { success: games }
  } catch (error) {
    return {
      error: error,
    }
  }
}

// * get a singular game details
export async function getGameInfo(slug: string) {
  try {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('games')
      .select('id,name')
      .eq('slug', slug)
    if (error) throw error
    return { success: data[0] }
  } catch (error) {
    return {
      error: error,
    }
  }
}

//  * Videos list with infinite scrolling

const videoMapping = {
  '8997b0e9-c765-4226-a676-b4f903a8fe9e': 'apex',
  '78e04f44-0b45-41a6-8645-3c046f26383f': 'overwatch',
  'c4549d44-8d8a-45cb-a884-c01ef963a3cd': 'valorant',
  'ece2105b-a41d-44a8-b5fb-fe28d29abb36': 'cod',
  '1d1570ff-123b-4be5-97da-d1ac04f6723d': 'fortnite',
}
export async function getGameVideos(offset: number, gameId: string) {
  try {
    const supabase = createClient()
    const videTable = videoMapping[gameId as keyof typeof videoMapping]

    const videosQuery = supabase
      .from(videTable)
      .select(
        `
    id, title, description ,url, 
    categories (
      name
    ),
    profiles (
      username,
      id,
      avatar_url
    )
  `
      )
      .eq('game_id', gameId)
      // .not('id', 'in', `(${clipsSeen.join(',')})`)
      .range(offset, offset + 10)

    type videosData = QueryData<typeof videosQuery>

    const { data, error } = await videosQuery
    if (error) throw error
    const videos: videosData = data
    return { success: videos }
  } catch (error) {
    return {
      error: error,
    }
  }
}

// * Get video with the videoId

export async function getVideo(id: string) {
  try {
    const supabase = createClient()
    const videoQuery = supabase
      .from('videos')
      .select(
        `
    id, title, description ,url, 
    categories (
      name
    ),
    profiles (
      username,
      id,
      avatar_url
    )
  `
      )
      .eq('id', id)
      .limit(1)
    type videoType = QueryData<typeof videoQuery>
    const { data, error } = await videoQuery
    // console.log(data)
    if (error) throw error
    const video: videoType = data
    return { success: video }
  } catch (error) {
    return {
      error: error,
    }
  }
}

// * Get video with the videoId

export async function getUserVideosWithId(id: string) {
  try {
    const supabase = createClient()
    const videoQuery = supabase
      .from('videos')
      .select(
        `
    id, title, description ,url, 
    categories (
      name
    ),
    profiles (
      username,
      id,
      avatar_url
    )
  `
      )
      .eq('user_id', id)
    type videoType = QueryData<typeof videoQuery>
    const { data, error } = await videoQuery
    // console.log(data)
    if (error) throw error
    const video: videoType = data
    return { success: video }
  } catch (error) {
    return {
      error: error,
    }
  }
}

// * Voting for a user
export async function hasVoted(videoId: string) {
  try {
    const supabase = createClient()
    const userSession = (await supabase.auth.getSession()).data.session
    if (!userSession) {
      return { loggedIn: false }
    }
    const userId = userSession.user.id

    const { data, error } = await supabase
      .from('votes')
      .select('id')
      .eq('user_id', userId)
      .eq('video_id', videoId)
      .single()

    if (error?.code == 'PGRST116') {
      return { voted: false }
    }
    if (error) throw error
    return data ? { voted: true } : { voted: false }
  } catch (error) {
    return { error: error }
  }
}

export async function vote(videoId: string) {
  try {
    const supabase = createClient()
    if ((await hasVoted(videoId)).voted) {
      return { voted: true }
    }
    const userSession = (await supabase.auth.getSession()).data.session
    if (!userSession) {
      return { loggedIn: false }
    }
    const userId = userSession.user.id
    const { data, error } = await supabase
      .from('votes')
      .insert([{ user_id: userId, video_id: videoId }])
    if (error) throw error
    return { success: true }
  } catch (error) {
    return { error: error }
  }
}

const chartMapping = {
  fortnite: 'fortnite',
  'overwatch-2': 'overwatch',
  'apex-legends': 'apex',
  valorant: 'valorant',
  'call-of-duty': 'cod',
}
// * GET RANKING VIDEO
export async function getVideoChart(game: string, period: string) {
  try {
    const supabase = createClient()

    const table = `${
      chartMapping[game as keyof typeof chartMapping]
    }_${period}_leaderboard`
    // console.log(table)

    let chartVideosQuery = supabase
      .from(table)
      .select(
        `name,username,vote_count,title,id,video_category
  `
      )
      .limit(100)

    type chartVideos = QueryData<typeof chartVideosQuery>
    const { data, error } = await chartVideosQuery
    if (error) throw error
    const chartsVideos: chartVideos = data
    return { success: chartsVideos }
  } catch (error) {
    return { error }
  }
}
