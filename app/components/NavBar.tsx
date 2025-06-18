import React from "react";
export default function NavBar({
  children,
  title,
  blue
}: {
  children: React.ReactNode;
  title: React.ReactNode;
  blue: boolean;
}) {
  return (
    <>
      <div className={`fixed inset-x-0 top-0 ${blue ? "bg-red-900" : ""}`}>
        <div className="h-11 flex justify-between items-center px-3">
          <span class="font-bold w-fit h-fit absolute inset-0 m-auto text-white">
            {{ title }}
          </span>
          {children}
        </div>
      </div>
      <div class="h-11"></div>
    </>
  );
}
