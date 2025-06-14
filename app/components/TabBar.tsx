"use client";
import { createClient } from "@/app/util/supabase/client";

export default async function TabBar() {
  const supabase = createClient();
  const { data: product } = await supabase.from("product").select("*");
  return (
    <div>
      <ul>{{product}}</ul>
    </div>
  );
}
