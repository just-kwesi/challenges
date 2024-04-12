import { Tables } from '@/lib/database/supabase.types'
export type userProfileData = {
  id?: string
  full_name: string | undefined
  username: string | undefined
  bio: string | undefined
}

// // Before 😕
// let movie: Database['public']['Tables']['movies']['Row'] = // ...

// // After 😍
// let movie: Tables<'movies'>
