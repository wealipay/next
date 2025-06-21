import LsItem from "./LsItem";
import React from "react";
interface LsItemAvatarProps {
  unread?: string;
  src: string;
  children?: React.ReactNode;
  name: string;
  acount: string;
  msg: string;
}
export default function LsItemAvatar({
  unread,
  src,
  children,
  name,
  acount,
  msg
}: LsItemAvatarProps) {
  return (
    <LsItem
      unread={unread}
      src={src}
      title={name}
      acount={acount}
      type={msg}
      lg={true}
    >
      {children}
    </LsItem>
  );
}
