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

export type videoRowData = {
  id: string
  title: string
  description: string | null
  url: string
  reviewed: boolean | null
  approved?: boolean | null
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
}

export type chartRowData = {
  name: string
  username: string
  vote_count: Number
  title: string
  id: string
  video_category: string
}

export interface videosList {
  id: any
  title: any
  description: any
  url: any
  categories: {
    name: string
  }[]
  profiles: {
    username: string | null
    id: string
    avatar_url: string | null
  } | null
}

export type EditVideoType = {
  id: string
  title: string
  description: string | null
  url: string
  categories: {
    name: string
  } | null
  profiles: {
    username: string | null
    id: string
    avatar_url: string | null
  } | null
}
