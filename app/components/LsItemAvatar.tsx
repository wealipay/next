import LsItem from "./LsItem";
import React from "react";
interface LsItemAvatarProps {
  unread?: React.ReactNode;
  src:React.ReactNode;
  children?: React.ReactNode;
  name: React.ReactNode;
  msg: React.ReactNode;
}
export default function LsItemAvatar({
  unread,
  src,
  children,
  name,
  msg
}: LsItemAvatarProps) {
  return (
    <LsItem  
unread={unread} src={src} title={name} description={msg} lg={true}>
      {children}
    </LsItem>
  );
}
