import { IProduct } from "../types/products";

type Props = {
  detail: IProduct[];
};
export default function Detail({ detail }: Props) {
  return <>
    {detail.map((item)=>{return(
    <div key={item.id}>{item.id}</div>
    )})}
  </>;
}
