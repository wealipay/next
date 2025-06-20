import LsItemAvatar from "./components/LsItemAvatar";
import NavBar from "./components/NavBar";
import Image from "next/image";
import src from "./assets/images/launch.jpg";
import Ls from "./components/Ls";
const unread = 5555566;
export default function Home() {
  return (
    <div>
      <NavBar left="球球" right="哈哈哈就" blue>
        支付宝薅羊毛
      </NavBar>
      <Ls>
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
      </Ls>
    </div>
  );
}
