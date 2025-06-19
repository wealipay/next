import LsItemAvatar from '../components/LsItemAvatar';
import NavBar from "./components/NavBar";
import Image from "next/image";
import launch from "./assets/images/launch.jpg";
import Ls from "./components/Ls";

export default function Home() {
  return (
    <div>
      <NavBar blue>支付宝薅羊毛</NavBar>
      <Ls>
        <LsItemAvatar nickname="微信" msg="领取了红包" src={src} unread="9">
          
        </LsItemAvatar>
      </Ls>
    </div>
  );
}
