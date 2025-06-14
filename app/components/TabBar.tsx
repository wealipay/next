"use client";
import { createClient } from "../utils/supabase/client";

export default async function TabBar() {
  const supabase = await createClient();
  const { data: product } = await supabase.from("product").select("*");
  return <div>{product.id}</div>;
}
