import Detail from "../../components/Detail";
import { createClient } from "../../utils/supabase/server";
export default async function ListId() {
  const supabase = await createClient();
  const { data: details } = await supabase
    .from("product")
    .select("*")
    .limit(10);

  return <>{details && <Detail detail={ details}></Detail>}</>;
}
