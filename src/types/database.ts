export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string
          avatar_url: string | null
          location_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          full_name: string
          avatar_url?: string | null
          location_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          avatar_url?: string | null
          location_id?: string | null
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: string
          title: string
          description: string
          price: number
          seller_id: string
          category: string
          images: string[]
          organic: boolean
          available: boolean
          location_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          price: number
          seller_id: string
          category: string
          images: string[]
          organic: boolean
          available?: boolean
          location_id: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          title?: string
          description?: string
          price?: number
          category?: string
          images?: string[]
          organic?: boolean
          available?: boolean
          location_id?: string
          updated_at?: string
        }
      }
      locations: {
        Row: {
          id: string
          country: string
          city: string
          state: string
          latitude: number
          longitude: number
          created_at: string
        }
        Insert: {
          id?: string
          country: string
          city: string
          state: string
          latitude: number
          longitude: number
          created_at?: string
        }
        Update: {
          country?: string
          city?: string
          state?: string
          latitude?: number
          longitude?: number
        }
      }
      communities: {
        Row: {
          id: string
          name: string
          description: string
          location_id: string
          member_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          location_id: string
          member_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          name?: string
          description?: string
          location_id?: string
          member_count?: number
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}