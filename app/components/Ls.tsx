import React from "react";
import { IProduct } from "../types/products";
import LsItemAvatar from "./LsItemAvatar";
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
            src={product.src}
            name={product.name}
            
            msg={`领取了${product.acount}${product.type}`}
            key={product.id}
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
