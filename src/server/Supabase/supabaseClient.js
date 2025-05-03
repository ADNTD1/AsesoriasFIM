import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tjvhpqskboizfzizuncq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqdmhwcXNrYm9pemZ6aXp1bmNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMzcyNTcsImV4cCI6MjA2MTgxMzI1N30.3iIYj5sHCMhlxl8SKt8GfSRCQdx6rHY2B31r70lLlMU' // <-- reemplaza por la clave pública anon

export const supabase = createClient(supabaseUrl, supabaseKey)
