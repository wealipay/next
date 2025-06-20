import LsItemAvatar from "./components/LsItemAvatar";
import NavBar from "./components/NavBar";
const src = new URL("./assets/images/launch.jpg", import.meta.url).href;
import { createClient } from "./utils/supabase/server";

import Ls from "./components/Ls";
const unread = 5555566;
export default async function Home() {
  const supabase = await createClient();
  const { data: product } = await supabase
    .from("product")
    .select("*")
    .limit(10);
  console.log(product);
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
