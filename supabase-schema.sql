-- SQL to create the waitlist_leads table in Supabase
-- Go to your Supabase dashboard > SQL Editor and run this query

CREATE TABLE IF NOT EXISTS waitlist_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  business_type VARCHAR(100) NOT NULL,
  pet_volume VARCHAR(50) NOT NULL,
  company_name VARCHAR(255),
  phone VARCHAR(50),
  marketing_consent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- OPTION 1: Temporarily disable RLS for testing (RECOMMENDED FOR NOW)
-- Run this first to test if the form works:
ALTER TABLE waitlist_leads DISABLE ROW LEVEL SECURITY;

-- OPTION 2: If you want to keep RLS enabled, use this instead:
-- ALTER TABLE waitlist_leads ENABLE ROW LEVEL SECURITY;
-- 
-- -- Drop existing policies if they exist
-- DROP POLICY IF EXISTS "Allow public inserts" ON waitlist_leads;
-- DROP POLICY IF EXISTS "Allow authenticated reads" ON waitlist_leads;
-- DROP POLICY IF EXISTS "Enable insert for anonymous users" ON waitlist_leads;
-- DROP POLICY IF EXISTS "Enable insert for authenticated users" ON waitlist_leads;
-- DROP POLICY IF EXISTS "Enable read for authenticated users only" ON waitlist_leads;
-- 
-- -- Simple policy that allows all operations for now
-- CREATE POLICY "Allow all operations" ON waitlist_leads
--   FOR ALL 
--   USING (true)
--   WITH CHECK (true);

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_waitlist_leads_email ON waitlist_leads(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_leads_created_at ON waitlist_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_waitlist_leads_business_type ON waitlist_leads(business_type);