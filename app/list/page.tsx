import { createClient } from "../utils/supabase/server";
import Ls from "../components/Ls";

export default async function List() {
  const supabase = await createClient();
  const { data: products } = await supabase
    .from("product")
    .select("*")
    .limit(10);
  return <> {products && <Ls productList={products}></Ls>}</>;
}
