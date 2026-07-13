const SUPABASE_URL = "https://sydmnnrkscrqhpfzaxbz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Wfntv5W86L_ucY3TJVGSNA_jp-RuxAO";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  }
);
