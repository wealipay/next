import React from "react";

interface LsItemProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  title: string;
  description: string;
  lg?: boolean;
}
export default function LsItem({ left,right,title,description,lg }: LsItemProps) {
  <div
    className={`ls-item bg-white active:bg-black/10 pl-3 flex items-center ${
      lg ? "h-16" : "h-12"
    }`}
  >
    {left}
    <div className="r border-b border-b-gray-6 self-stretch items-center flex flex-1 ml-3 pr-3">
      <div className="flex flex-1 flex-col justify-center mr-3">
        <span>{title}</span>
        <div v-if="description" className="mt-2 flex">
          <div className="w-0 flex-1 truncate text-gray-6 text-xs">
            {description}
          </div>
        </div>
      </div>
      {right}
    </div>
  </div>;
}
