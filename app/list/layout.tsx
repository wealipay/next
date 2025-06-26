import NavBar from "../components/NavBar";
import { RiArrowGoBackLine } from "@remixicon/react";
import React from "react";
interface ListLayoutProps {
  children: React.ReactNode;
}

export default async function ListLayout({children}:ListLayoutProps) {
  return (
    <>
      <NavBar left={<RiArrowGoBackLine />} blue={true}>
        红包领取列表
      </NavBar>
      {children}
    </>
  );
}
