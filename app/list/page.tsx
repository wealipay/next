import NavBar from "../components/NavBar";
import { createClient } from "../utils/supabase/server";
import Ls from "../components/Ls";

export default async function List() {
  const supabase = await createClient();
  const { data: products } = await supabase
    .from("product")
    .select("*")
    .limit(10);
  return (
    <>
      <NavBar blue>支付宝薅羊毛</NavBar>
      {products && <Ls productList={products}></Ls>}
    </>
  );
}
