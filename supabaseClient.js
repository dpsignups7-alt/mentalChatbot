import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://skrjbjebjcssurxrwxwi.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrcmpiamViamNzc3VyeHJ3eHdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1NDczMjUsImV4cCI6MjA3OTEyMzMyNX0.LSaVPFpx9bbaEWbEp2gCHN0j0oI00x4iPHCmkqH3qmk";

export const supabase = createClient(supabaseUrl, supabaseKey);
