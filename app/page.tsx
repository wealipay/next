import { createClient } from "./utils/supabase/server";
export default async function Home() {
  const supabase = createClient();
  const { data: product } = await supabase
    .from("product")
    .select("id")
    .limit(10);
  return <div>home</div>;
}
