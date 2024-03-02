import { QueryResult, QueryData, QueryError } from '@supabase/supabase-js'
import { Database, Tables, Enums } from '@/lib/database/supabase.types'

export type videosWithData = {
  id: string
  title: string
  description: string | null
  url: string
  reviewed: boolean | null
  games: {
    name: string
  } | null
  categories: {
    name: string
  } | null
  profiles: {
    username: string | null
    id: string
  } | null
}[]
