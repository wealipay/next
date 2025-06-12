import { createClient } from "./utils/supabase/server";
 const Home=async()=> {
  const supabase = createClient();
  const { data: product } = await supabase
    .from("product")
    .select("*")
    .limit(10);
  console.log(product);
  return <div>home</div>;
}
export default Home;