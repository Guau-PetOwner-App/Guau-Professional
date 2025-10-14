import { supabase, type WaitlistLead } from '../lib/supabase'

export class WaitlistService {
  static async submitLead(leadData: Omit<WaitlistLead, 'id' | 'created_at'>): Promise<{ success: boolean; error?: string }> {
    try {
      const { data, error } = await supabase
        .from('waitlist_leads')
        .insert([
          {
            email: leadData.email,
            full_name: leadData.full_name,
            business_type: leadData.business_type,
            pet_volume: leadData.pet_volume,
            company_name: leadData.company_name || null,
            phone: leadData.phone || null,
            marketing_consent: leadData.marketing_consent,
            created_at: new Date().toISOString()
          }
        ])
        .select()

      if (error) {
        console.error('Supabase error:', error)
        return { 
          success: false, 
          error: error.message || 'Failed to save lead data' 
        }
      }

      console.log('Lead saved successfully:', data)
      return { success: true }

    } catch (error) {
      console.error('Unexpected error:', error)
      return { 
        success: false, 
        error: 'An unexpected error occurred. Please try again.' 
      }
    }
  }

  static async checkEmailExists(email: string): Promise<boolean> {
    try {
      const { data, error } = await supabase
        .from('waitlist_leads')
        .select('email')
        .eq('email', email)
        .limit(1)

      if (error) {
        console.error('Error checking email:', error)
        return false
      }

      return data && data.length > 0
    } catch (error) {
      console.error('Unexpected error checking email:', error)
      return false
    }
  }
}