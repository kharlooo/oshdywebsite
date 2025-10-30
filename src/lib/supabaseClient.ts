import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Runtime safety: fail fast if required env vars are missing
if (!supabaseUrl || !supabaseAnonKey) {
	throw new Error(
		'Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. Make sure they are set in your .env or hosting environment.'
	);
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
