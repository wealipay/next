import { createClient } from "./utils/supabase/server";
export default async function Home() {
  const supabase = await createClient();
  const { data: product, error } = await supabase
    .from("product")
    .select("id")
    .limit(10);
    if(error){console.log(error)}
  console.log(product);
  return <div>home</div>;
}
