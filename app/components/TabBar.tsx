"use client";
import { createClient } from "../utils/supabase/client";

export default async function TabBar() {
  const supabase = await createClient();
  const { data: product } = supabase.from("product").select("*");
  return (
    <div>
      <ul>{{ product }}</ul>
    </div>
  );
}
