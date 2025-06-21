import React from "react";
import Image from "next/image";
interface LsItemProps {
  unread: React.ReactNode;
  src: string;
  children?: React.ReactNode;
  name: string;
  acount: number;
  type: string;
  lg?: boolean;
}
export default function LsItem({
  unread,
  src,
  children,
  name,
  acount,
  type,
  lg
}: LsItemProps) {
  return (
    <div
      className={`ls-item bg-red-900 active:bg-black/10 pl-3 flex items-center ${
        lg ? "h-16" : "h-12"
      }`}
    >
      <div className="h-12 w-12  relative">
        <div
          v-if="unread > 0"
          className="rounded-lg h-4 text-white min-w-4 text-xs px-1 bg-red absolute -right-1 -top-1 flex items-center"
        >
          {unread}
        </div>
        <Image
          width={100}
          height={100}
          src={src || "../assets/images/launch.jpg"}
          alt=""
          className="w-full h-full object-cover rounded"
        />
      </div>

      <div className="r flex border-b border-b-gray-6 self-stretch items-center flex flex-1 ml-3 pr-3">
        <div className="flex  flex-1 flex-col justify-center mr-3">
          <span>{title}</span>
          <div v-if="type" className="mt-2 flex">
            <div className="w-0 flex-1 truncate text-gray-6 text-xs">
              {acount}
              {type}
            </div>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
