import LsItemAvatar from "./components/LsItemAvatar";
import NavBar from "./components/NavBar";
import Image from "next/image";
import src from "./assets/images/launch.jpg";

export default function Home() {
  return (
    <div>
      <NavBar left="球球" right="哈哈哈就" blue>
        支付宝薅羊毛
      </NavBar>
      <LsItemAvatar
        left={
          <div className="h-12 w-12  relative">
            <div
              v-if="unread > 0"
              className="rounded-lg h-4 text-white min-w-4 text-xs px-1 bg-red absolute -right-1 -top-1 flex items-center"
            >
              5
            </div>
            <Image
              width={100}
              height={100}
              src={src}
              alt=""
              className="w-full h-full object-cover rounded"
            />
          </div>
        }
        name="**雄"
        msg="领取了5.88元红包"
        unread="9"
      >
        <div className="text-xs order-3 text-gray-6 text-right">
          5月20 05:08
        </div>
      </LsItemAvatar>
      <LsItemAvatar name="**雄" msg="领取了5.88元红包" unread="9">
        <div className="text-xs  text-gray-6">5月20 05:08</div>
      </LsItemAvatar>
    </div>
  );
}
