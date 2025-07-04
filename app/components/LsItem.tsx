import React from "react";
import Image from "next/image";
const src = new URL("../assets/images/default.jpg", import.meta.url).href;
import Link from "next/link";
interface LsItemProps {
  unread: React.ReactNode;
  children?: React.ReactNode;
  id?: number;
  name: string;
  acount: number;
  type: string;
  lg?: boolean;
}
export default function LsItem({
  unread,
  children,
  id,
  name,
  acount,
  type,
  lg
}: LsItemProps) {
  return (
    <Link href={`/list/${id}`}>
      <div
        className={`ls-item  active:bg-black/10 pl-3 flex items-center ${
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
          <div className="h-4 text-red font-bold font-sans min-w-4 text-[17px] px-1 -translate-x-1/2 -translate-y-1/2  absolute left-1/2 top-1/2 flex items-center">
            {acount}
          </div>
          <Image
            width={100}
            height={100}
            src={src}
            alt=""
            className="w-full h-full object-cover rounded"
          />
        </div>

        <div className="r flex border-b border-b-gray-6 self-stretch items-center flex flex-1 ml-3 pr-3">
          <div className="flex  flex-1 flex-col justify-center mr-3">
            <span>{name}</span>
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
    </Link>
  );
}
