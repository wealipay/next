import NavBar from "../components/NavBar";
import { RiArrowGoBackLine } from "@remixicon/react";
import React from "react";


export default async function ListLayout() {
  
  return (
    <>
      <NavBar left={<RiArrowGoBackLine />} blue={true}>
        红包领取列表
      </NavBar>
    </>
  );
}
