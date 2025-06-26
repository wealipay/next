import { createClient } from "../utils/supabase/server";
import Ls from "../components/Ls";
import React from "react";
interface ListProps {
  children: React.ReactNode;
}
export default async function List({ children }: ListProps) {
  const supabase = await createClient();
  const { data: products } = await supabase
    .from("product")
    .select("*")
    .limit(10);
  return <>{products && <Ls productList={products}></Ls>}
  idpage</>;
}
