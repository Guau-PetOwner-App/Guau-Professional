import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our waitlist data
export interface WaitlistLead {
  id?: string
  email: string
  full_name: string
  business_type: string
  pet_volume: string
  company_name?: string
  phone?: string
  marketing_consent: boolean
  created_at?: string
}