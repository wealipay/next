import { createClient } from "./utils/supabase/server";
export default async function Home() {
  const supabase = createClient();
  const { data: product,error } = await supabase
    .from("product")
    .select("id")
    .limit(10);
  console.log(product);
  return <div>home</div>;
}
