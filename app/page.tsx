import { createClient } from "./utils/supabase/server";
export default async function Home() {
  const supabase = await createClient();
  const { data: product} = await supabase
    .from("product")
    .select("id")
    .limit(10);
  
  console.log(product);
  return <div>home</div>;
}
