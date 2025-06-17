import React from "react";
export default function NavBar({
  title,
  left,
  right
}: {
  title: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
}) {
  return (<>
    <div className="fixed inset-x-0 top-0">
      <div className="h-11 flex justify-between items-center px-3">
        <div>{left}</div>
        <span class="font-bold w-fit h-fit absolute inset-0 m-auto text-white">
          {{ title }}
        </span>
        <div>{right}</div>
      </div>
    </div>
      <div class="h-11"></div>
</>
  );
}
