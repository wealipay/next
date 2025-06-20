import React from "react";

interface LsProps {
  children: React.ReactNode;
}
export default function Ls({ children }: LsProps) {
  return <div className="ls  border-y border-y-gray-6">
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
  </div>;
}
