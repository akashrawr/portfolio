import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL or key not defined!');
} else {
  console.log('Supabase URL:', supabaseUrl);
  console.log('Supabase Key:', supabaseKey);
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
