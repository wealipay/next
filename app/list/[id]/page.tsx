import { createClient } from "../../utils/supabase/server";
import { IProduct } from "../../types/products";
type Props = {
  productList: IProduct[];
};
export default async function ListId() {
  const supabase = await createClient();
  const { data: products }:Props = await supabase
    .from("product")
    .select("*")
    .limit(10);
  return (
    <div>
      {products.map(product => {
        return <div key={product.id}>{product.id}</div>;
      })}
    </div>
  );
}
