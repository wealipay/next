import React from "react";

interface LsProps {
  children: React.ReactNode;
}
export default function Ls({ children }: LsProps) {
  return <div className="ls flex justify-between border-y border-y-gray-6">{children}</div>;
}
