import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

export const supabase = createClient(
  'https://huiduezxjjtkxjuyqzxh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1aWR1ZXp4amp0a3hqdXlxenhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5MzQ2OTMsImV4cCI6MjA5NjUxMDY5M30.YCKrHhMerph6hNre855AFx5vJTYr6ksqz0GhuZqQL7o'
)