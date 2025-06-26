import Detail from "../../components/Detail";
import { createClient } from "../../utils/supabase/server";
export default async function ListId() {
  const supabase = await createClient();
  const { data: products }= await supabase
    .from("product")
    .select("*")
    .limit(10);

  return <Detail>{products}</Detail>;
}
