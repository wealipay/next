import LsItem from "./LsItem";
import React from "react";
interface LsItemAvatarProps {
  unread?: string;
  children?: React.ReactNode;
  name: string;
  acount: number;
  type: string;
}
export default function LsItemAvatar({
  unread,
  children,
  name,
  acount,
  type
}: LsItemAvatarProps) {
  return (
    <LsItem
      unread={unread}
      name={name}
      acount={acount}
      type={type}
      lg={true}
    >
      {children}
    </LsItem>
  );
}
