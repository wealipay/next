import { createClient } from "../../utils/supabase/server";
interface IProduct {
  id: string;
  name: string;
}
export default async function ListId() {
  const supabase = await createClient();
  const { data: products }:IProduct[] = await supabase
    .from("product")
    .select("*")
    .limit(10);
  return (
    <div>
      {products.map(product => (
        <li key={product.id} className="product-item">
          <h2>{product.name}</h2>
        </li>
      ))}
    </div>
  );
}
