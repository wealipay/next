import Avatar from './Avatar';
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
<Avatar />

      {children}
    </LsItem>
  );
}
