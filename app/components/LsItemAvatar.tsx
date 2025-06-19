import LsItem from "./LsItem";
import React from "react";

interface LsItemAvatarProps {
  children?: React.ReactNode;
  title: string;
  description: string;
  unread?: number;
  src: string;
}
export default function LsItemAvatar({
  children,
  title,
  description,
  unread,
  src
}: LsItemAvatarProps) {
  return (
    <LsItem title={nickname} description={msg} lg={true}>
      <div class="h-12 w-12 relative">
        <div
          v-if="unread > 0"
          class="rounded-lg h-4 text-white min-w-4 text-xs px-1 bg-red absolute -right-1 -top-1 flex items-center"
        >
          {unread}
        </div>
        <img src={src} alt="" class="w-full h-full object-cover rounded" />
      </div>
      {children}
    </LsItem>
  );
}
