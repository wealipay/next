import Avatar from "./Avatar";
import LsItem from "./LsItem";
import React from "react";

interface LsItemAvatarProps {
  children: React.ReactNode;
  unread?: React.ReactNode;
  name: React.ReactNode;
  msg: React.ReactNode;
}
export default function LsItemAvatar({
  children,
  unread,
  name,
  msg
}: LsItemAvatarProps) {
  return (
    <LsItem title={name} description={msg} lg={true}>
      <Avatar name={name} unread={unread} msg={msg} />

      {children}
    </LsItem>
  );
}
