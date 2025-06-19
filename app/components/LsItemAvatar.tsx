import LsItem from "./LsItem";
import React from "react";
interface LsItemAvatarProps {
  left?: React.ReactNode;
  children?: React.ReactNode;
  name: React.ReactNode;
  msg: React.ReactNode;
}
export default function LsItemAvatar({
  left,
  children,
  name,
  msg
}: LsItemAvatarProps) {
  return (
    <LsItem title={name} description={msg} lg={true}>
      {left}
      {children}
    </LsItem>
  );
}
