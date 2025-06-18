import React from "react";
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
  return (
    <div>
      <div className={`fixed inset-x-0 top-0 ${blue ? "bg-red-900" : ""}`}>
        <div className="h-11 flex justify-between items-center px-3">
          <div>{left}</div>
          <span className="font-bold w-fit h-fit absolute inset-0 m-auto text-white">
            {children}
          </span>
          <div>{right}</div>
        </div>
        <div className="h-11"></div>
      </div>
    </div>
  );
}
