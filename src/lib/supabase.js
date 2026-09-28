import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jfevellrygwdywzfikxj.supabase.co";
const supabaseKey = "sb_publishable_n1vDHaDg_G87-KR3v09pSA_zQYtSl5l";

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or publishable key is missing");
}

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);