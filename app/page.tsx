import LsItemAvatar from "./components/LsItemAvatar";
import NavBar from "./components/NavBar";
import Ls from "./components/Ls";

export default function Home() {
  return (
    <div>
      <NavBar blue>支付宝薅羊毛</NavBar>
      <Ls>
        <LsItemAvatar name="**雄" msg="领取了5.88元红包" unread="9">
          <span className="text-xs text-gray-6 bg-red">5月20 05:08</span>
        </LsItemAvatar>
        <LsItemAvatar name="**雄" msg="领取了5.88元红包" unread="9">
          <span className="text-xs text-white">5月20 05:08</span>
        </LsItemAvatar>
      </Ls>
    </div>
  );
}
