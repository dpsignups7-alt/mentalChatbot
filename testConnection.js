import { supabase } from './supabaseClient.js';

async function test() {
  const { data, error } = await supabase.from('test').select('*');

  console.log("DATA:", data);
  console.log("ERROR:", error);
}

test();
