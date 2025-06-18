import NavBar from "./components/NavBar";
import LsItem from "./components/LsItem";
import Image from "next/image";
import launch from "./assets/images/launch.jpg";
export default function Home() {
  return (
    <div>
      <NavBar blue>支付宝薅羊毛</NavBar>
      <LsItem left={<Image src={launch} fill />} description="领取了15.元红包">gggg磊</LsItem>
    </div>
  );
}
