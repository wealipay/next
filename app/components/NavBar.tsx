"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function NavBar({
  left,
  children,
  right,
  blue
}: {
  left?: React.ReactNode;
  children: React.ReactNode;
  right?: React.ReactNode;
  blue?: boolean;
}) {
  const router = useRouter();
  return (
    <>
      <div className={`fixed inset-x-0 top-0 ${blue ? "bg-navbar" : ""}`}>
        <div className="h-11 flex justify-between items-center px-3">
          <div onClick={() => {router.back()}} className="text-white active:text-red">
            {left}
          </div>
          <span className="font-bold w-fit h-fit absolute inset-0 m-auto text-white">
            {children}
          </span>
          <div>{right}</div>
        </div>
      </div>
      <div className="h-11"></div>
    </>
  );
}
