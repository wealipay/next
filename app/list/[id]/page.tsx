import { createClient } from "../../utils/supabase/server";
interface IProduct {
  id: string;
  name: string;
  // 其他产品字段...
}
export default async function ListId() {
  const supabase = await createClient();
  const { data: products } = await supabase
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
