import LsItemAvatar from "./components/LsItemAvatar";
import NavBar from "./components/NavBar";
import Ls from "./components/Ls";
const src = new URL("./assets/images/launch.jpg", import.meta.url).href;

export default function Home() {
  return (
    <div>
      <NavBar blue>支付宝薅羊毛</NavBar>
      <Ls>
        <LsItemAvatar src={src} unread="9">
          ggg
        </LsItemAvatar>
      </Ls>
    </div>
  );
}
