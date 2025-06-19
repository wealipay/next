import LsItem from './LsItem';
import React from "react";
interface LsItemAvatarProps {
  left?: React.ReactNode;
  children?: React.ReactNode;
  name: React.ReactNode;
  msg: React.ReactNode;
  unread: React.ReactNode;
}
export default function LsItemAvatar({
  left,
  children,
  name,
  msg
}: LsItemAvatarProps) {
  return (
    <LsItem left={left}
 title={name} description={msg} lg={true}>
      {children}
    </LsItem>
  );
}
