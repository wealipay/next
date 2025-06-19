import LsItem from "./LsItem";
import React from "react";
import Image from "next/image";

interface LsItemAvatarProps {
  children: React.ReactNode;
  unread?: React.ReactNode;
  name: React.ReactNode;
  msg: React.ReactNode;
}
import src from "../assets/images/launch.jpg";
export default function LsItemAvatar({
  children,
  unread,
  name,
  msg
}: LsItemAvatarProps) {
  return (
    <LsItem title={name} description={msg} lg={true}>
            {children}
      <div className="h-12 w-12 relative">
        <div
          v-if="unread > 0"
          className="rounded-lg h-4 text-white min-w-4 text-xs px-1 bg-red absolute -right-1 -top-1 flex items-center"
        >
          {unread}
        </div>
        <Image
          width={100}
          height={100}
          src={src}
          alt=""
          className="w-full h-full object-cover rounded"
        />
      </div>

    </LsItem>
  );
}
