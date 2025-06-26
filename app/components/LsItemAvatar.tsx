import LsItem from "./LsItem";
import React from "react";
interface LsItemAvatarProps {
  unread?: string;
  children?: React.ReactNode;
  id?: number;
  name: string;
  acount: number;
  type: string;
}
export default function LsItemAvatar({
  unread,
  children,
  id,
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
      id={id}
    >
      {children}
    </LsItem>
  );
}
