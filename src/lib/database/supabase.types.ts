export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      gameimages: {
        Row: {
          created_at: string | null
          game_id: string | null
          id: string
          image_url: string
        }
        Insert: {
          created_at?: string | null
          game_id?: string | null
          id?: string
          image_url: string
        }
        Update: {
          created_at?: string | null
          game_id?: string | null
          id?: string
          image_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "gameimages_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      games: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          release_date: string | null
          slug: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          release_date?: string | null
          slug?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          release_date?: string | null
          slug?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          full_name: string | null
          id: string
          twitch_url: string | null
          updated_at: string | null
          username: string | null
          x_url: string | null
          youtube_url: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          full_name?: string | null
          id: string
          twitch_url?: string | null
          updated_at?: string | null
          username?: string | null
          x_url?: string | null
          youtube_url?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          full_name?: string | null
          id?: string
          twitch_url?: string | null
          updated_at?: string | null
          username?: string | null
          x_url?: string | null
          youtube_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      videos: {
        Row: {
          category_id: string | null
          created_at: string | null
          description: string | null
          game_id: string | null
          id: string
          reviewed: boolean | null
          submitted_on: string | null
          title: string
          url: string
          user_id: string | null
        }
        Insert: {
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          game_id?: string | null
          id?: string
          reviewed?: boolean | null
          submitted_on?: string | null
          title: string
          url: string
          user_id?: string | null
        }
        Update: {
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          game_id?: string | null
          id?: string
          reviewed?: boolean | null
          submitted_on?: string | null
          title?: string
          url?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "videos_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
        ]
      }
      votes: {
        Row: {
          created_at: string | null
          id: string
          user_id: string | null
          video_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          user_id?: string | null
          video_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          user_id?: string | null
          video_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "votes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "votes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "votes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "votes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "votes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "votes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "votes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "votes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "votes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "votes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "votes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "votes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "votes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "votes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "votes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "votes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "votes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "votes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "votes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "votes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "votes_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "apex"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "apex_alltime_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "apex_daily_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "apex_monthly_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "apex_weekly_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "cod"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "cod_alltime_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "cod_daily_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "cod_monthly_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "cod_weekly_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "fortnite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "fortnite_alltime_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "fortnite_daily_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "fortnite_monthly_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "fortnite_weekly_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "overwatch"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "overwatch_alltime_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "overwatch_daily_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "overwatch_monthly_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "overwatch_weekly_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "valorant"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "valorant_alltime_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "valorant_daily_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "valorant_monthly_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "valorant_weekly_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "votes_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      apex: {
        Row: {
          category_id: string | null
          created_at: string | null
          description: string | null
          game_id: string | null
          id: string | null
          reviewed: boolean | null
          submitted_on: string | null
          title: string | null
          url: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "videos_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
        ]
      }
      apex_alltime_leaderboard: {
        Row: {
          category_id: string | null
          description: string | null
          game_description: string | null
          game_id: string | null
          id: string | null
          name: string | null
          slug: string | null
          title: string | null
          url: string | null
          user_id: string | null
          username: string | null
          video_category: string | null
          vote_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      apex_daily_leaderboard: {
        Row: {
          category_id: string | null
          description: string | null
          game_description: string | null
          game_id: string | null
          id: string | null
          name: string | null
          slug: string | null
          title: string | null
          url: string | null
          user_id: string | null
          username: string | null
          video_category: string | null
          vote_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      apex_monthly_leaderboard: {
        Row: {
          category_id: string | null
          description: string | null
          game_description: string | null
          game_id: string | null
          id: string | null
          name: string | null
          slug: string | null
          title: string | null
          url: string | null
          user_id: string | null
          username: string | null
          video_category: string | null
          vote_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      apex_weekly_leaderboard: {
        Row: {
          category_id: string | null
          description: string | null
          game_description: string | null
          game_id: string | null
          id: string | null
          name: string | null
          slug: string | null
          title: string | null
          url: string | null
          user_id: string | null
          username: string | null
          video_category: string | null
          vote_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      cod: {
        Row: {
          category_id: string | null
          created_at: string | null
          description: string | null
          game_id: string | null
          id: string | null
          reviewed: boolean | null
          submitted_on: string | null
          title: string | null
          url: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "videos_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
        ]
      }
      cod_alltime_leaderboard: {
        Row: {
          category_id: string | null
          description: string | null
          game_description: string | null
          game_id: string | null
          id: string | null
          name: string | null
          slug: string | null
          title: string | null
          url: string | null
          user_id: string | null
          username: string | null
          video_category: string | null
          vote_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      cod_daily_leaderboard: {
        Row: {
          category_id: string | null
          description: string | null
          game_description: string | null
          game_id: string | null
          id: string | null
          name: string | null
          slug: string | null
          title: string | null
          url: string | null
          user_id: string | null
          username: string | null
          video_category: string | null
          vote_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      cod_monthly_leaderboard: {
        Row: {
          category_id: string | null
          description: string | null
          game_description: string | null
          game_id: string | null
          id: string | null
          name: string | null
          slug: string | null
          title: string | null
          url: string | null
          user_id: string | null
          username: string | null
          video_category: string | null
          vote_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      cod_weekly_leaderboard: {
        Row: {
          category_id: string | null
          description: string | null
          game_description: string | null
          game_id: string | null
          id: string | null
          name: string | null
          slug: string | null
          title: string | null
          url: string | null
          user_id: string | null
          username: string | null
          video_category: string | null
          vote_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      fortnite: {
        Row: {
          category_id: string | null
          created_at: string | null
          description: string | null
          game_id: string | null
          id: string | null
          reviewed: boolean | null
          submitted_on: string | null
          title: string | null
          url: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "videos_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
        ]
      }
      fortnite_alltime_leaderboard: {
        Row: {
          category_id: string | null
          description: string | null
          game_description: string | null
          game_id: string | null
          id: string | null
          name: string | null
          slug: string | null
          title: string | null
          url: string | null
          user_id: string | null
          username: string | null
          video_category: string | null
          vote_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      fortnite_daily_leaderboard: {
        Row: {
          category_id: string | null
          description: string | null
          game_description: string | null
          game_id: string | null
          id: string | null
          name: string | null
          slug: string | null
          title: string | null
          url: string | null
          user_id: string | null
          username: string | null
          video_category: string | null
          vote_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      fortnite_monthly_leaderboard: {
        Row: {
          category_id: string | null
          description: string | null
          game_description: string | null
          game_id: string | null
          id: string | null
          name: string | null
          slug: string | null
          title: string | null
          url: string | null
          user_id: string | null
          username: string | null
          video_category: string | null
          vote_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      fortnite_weekly_leaderboard: {
        Row: {
          category_id: string | null
          description: string | null
          game_description: string | null
          game_id: string | null
          id: string | null
          name: string | null
          slug: string | null
          title: string | null
          url: string | null
          user_id: string | null
          username: string | null
          video_category: string | null
          vote_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      overwatch: {
        Row: {
          category_id: string | null
          created_at: string | null
          description: string | null
          game_id: string | null
          id: string | null
          reviewed: boolean | null
          submitted_on: string | null
          title: string | null
          url: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "videos_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
        ]
      }
      overwatch_alltime_leaderboard: {
        Row: {
          category_id: string | null
          description: string | null
          game_description: string | null
          game_id: string | null
          id: string | null
          name: string | null
          slug: string | null
          title: string | null
          url: string | null
          user_id: string | null
          username: string | null
          video_category: string | null
          vote_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      overwatch_daily_leaderboard: {
        Row: {
          category_id: string | null
          description: string | null
          game_description: string | null
          game_id: string | null
          id: string | null
          name: string | null
          slug: string | null
          title: string | null
          url: string | null
          user_id: string | null
          username: string | null
          video_category: string | null
          vote_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      overwatch_monthly_leaderboard: {
        Row: {
          category_id: string | null
          description: string | null
          game_description: string | null
          game_id: string | null
          id: string | null
          name: string | null
          slug: string | null
          title: string | null
          url: string | null
          user_id: string | null
          username: string | null
          video_category: string | null
          vote_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      overwatch_weekly_leaderboard: {
        Row: {
          category_id: string | null
          description: string | null
          game_description: string | null
          game_id: string | null
          id: string | null
          name: string | null
          slug: string | null
          title: string | null
          url: string | null
          user_id: string | null
          username: string | null
          video_category: string | null
          vote_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      valorant: {
        Row: {
          category_id: string | null
          created_at: string | null
          description: string | null
          game_id: string | null
          id: string | null
          reviewed: boolean | null
          submitted_on: string | null
          title: string | null
          url: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "videos_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "apex_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "cod_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "fortnite_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "overwatch_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_alltime_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_daily_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_monthly_leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "valorant_weekly_leaderboard"
            referencedColumns: ["user_id"]
          },
        ]
      }
      valorant_alltime_leaderboard: {
        Row: {
          category_id: string | null
          description: string | null
          game_description: string | null
          game_id: string | null
          id: string | null
          name: string | null
          slug: string | null
          title: string | null
          url: string | null
          user_id: string | null
          username: string | null
          video_category: string | null
          vote_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      valorant_daily_leaderboard: {
        Row: {
          category_id: string | null
          description: string | null
          game_description: string | null
          game_id: string | null
          id: string | null
          name: string | null
          slug: string | null
          title: string | null
          url: string | null
          user_id: string | null
          username: string | null
          video_category: string | null
          vote_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      valorant_monthly_leaderboard: {
        Row: {
          category_id: string | null
          description: string | null
          game_description: string | null
          game_id: string | null
          id: string | null
          name: string | null
          slug: string | null
          title: string | null
          url: string | null
          user_id: string | null
          username: string | null
          video_category: string | null
          vote_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
      valorant_weekly_leaderboard: {
        Row: {
          category_id: string | null
          description: string | null
          game_description: string | null
          game_id: string | null
          id: string | null
          name: string | null
          slug: string | null
          title: string | null
          url: string | null
          user_id: string | null
          username: string | null
          video_category: string | null
          vote_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
