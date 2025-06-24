import NavBar from "../components/NavBar";
import { RiArrowGoBackLine } from "@remixicon/react";
import React from "react";
import { createClient } from "../utils/supabase/server";
import Ls from "../components/Ls";

export default async function ListLayout({ children }: ListLayoutProps) {
  const supabase = await createClient();
  const { data: products } = await supabase
    .from("product")
    .select("*")
    .limit(10);
  return (
    <>
      <NavBar left={<RiArrowGoBackLine />} blue={true}>
        ggg
      </NavBar>
      {products && <Ls productList={products}></Ls>}

    </>
  );
}
