import Detail from "../../components/Detail";
import { createClient } from "../../utils/supabase/server";
export default async function ListId({
  params,
}: {
  params: { id: string };
}) {
  const supabase = await createClient();
  const { data: details } = await supabase
    .from("product")
    .select("id")
    .eq("id", params.id)
    .single();

  return <>{details && <Detail detail={details}></Detail>}</>;
}
