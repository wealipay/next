import NavBar from "../components/NavBar";
import { RiArrowGoBackLine } from "@remixicon/react";
import React from "react";
interface ListLayoutProps {
  children: React.ReactNode;
}
export default function ListLayout({ children }: ListLayoutProps) {
  return (
    <>
      <NavBar left={<RiArrowGoBackLine />}></NavBar>
    </>
  );
}
