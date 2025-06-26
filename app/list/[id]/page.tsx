import Detail from "../../components/Detail";
import { createClient } from "../../utils/supabase/server";
interface Product {
  id: number;
}
export default async function ListId(id) {
  const supabase = await createClient();
  const { data: details } = await supabase
    .from("product")
    .select("*")
    .eq("id", id)
    .single();

  return <>{details && <Detail detail={details}></Detail>}</>;
}
