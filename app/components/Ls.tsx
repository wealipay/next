import React from "react";
import LsItemAvatar from "./components/LsItemAvatar";
const src = new URL("./assets/images/launch.jpg", import.meta.url).href;
const unread = 5555566;

export default function Ls() {
  return (
    <div className="ls  border-y border-y-gray-6">
      <LsItemAvatar
        unread={unread}
        src={src}
        name="**雄"
        msg="领取了5.88元红包"
      >
        <div className="text-xs order-3 text-gray-6 text-right">
          5月20 05:08
        </div>
      </LsItemAvatar>
    </div>
  );
}
