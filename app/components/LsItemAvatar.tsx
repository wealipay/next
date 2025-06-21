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
  type
}: LsItemAvatarProps) {
  return (
    <LsItem
      unread={unread}
      src={src}
      name={name}
      acount={acount}
      type={type}
      lg={true}
    >
      {children}
    </LsItem>
  );
}
