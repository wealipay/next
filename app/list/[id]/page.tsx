import { createClient } from "../../utils/supabase/server";
import { IProduct } from "../../types/products";

type Props = {
  products: IProduct[];
  // 其他产品字段...
};
export default async function ListId() {
  const supabase = await createClient();
  const { data: products }:Props = await supabase
    .from("product")
    .select("*")
    .limit(10);
  if (!products || products.length === 0) {
    return <div>No products found</div>;
  }
  return (
    <div>
      {products.map(product => (
        <li key={product.id} className="product-item">
          <h2>{product.id}</h2>
          <h2>{product.name}</h2>
        </li>
      ))}
    </div>
  );
}
