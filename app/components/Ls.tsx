import React from "react";
import { IProduct } from "../types/products";
import LsItemAvatar from "./LsItemAvatar";
const unread = 5555566;
type Props = {
  productList: IProduct[];
};
export default function Ls({ productList }: Props) {
  return (
    <div className="ls  border-y border-y-gray-6">
      {productList.map(product => {
      return(
        <LsItemAvatar
          unread={unread}
          src={product.src}
          name="**雄"
          msg="领取了5.88元红包"
          key={product.id}
        >
          <div className="text-xs order-3 text-gray-6 text-right">
            5月20 05:08
          </div>
        </LsItemAvatar>);
      })}
    </div>
  );
}
