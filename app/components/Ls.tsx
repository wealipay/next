import React from "react";
import { IProduct } from "../types/products";
import LsItemAvatar from "./LsItemAvatar";
import Link from "next/link";

type Props = {
  productList: IProduct[];
};
export default function Ls({ productList }: Props) {
  return (
    <div className="ls  border-y border-y-gray-6">
      {productList.map(product => {
        return (
          <LsItemAvatar
            unread={`${product.month}月`}
            name={`${product.name}领取了`}
            acount={product.acount}
            type={product.type}
            key={product.id}
            id={product.id}
          >
            <div className="text-xs order-3 text-gray-6 text-right">
               {product.time}
            </div>
          </LsItemAvatar>
        );
      })}
    </div>
  );
}
