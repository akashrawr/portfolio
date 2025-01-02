import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://itmneflkaorqwzmgfhnr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0bW5lZmxrYW9ycXd6bWdmaG5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU2MjExMzEsImV4cCI6MjA1MTE5NzEzMX0.yaI0S3GAcLAi9Lws09rEfq9eBns0DfJBceb42jmyfc0';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
