import LsItemAvatar from "./components/LsItemAvatar";
import NavBar from "./components/NavBar";
import Ls from "./components/Ls";

export default function Home() {
  return (
    <div>
      <NavBar blue>支付宝薅羊毛</NavBar>
      <Ls>
        <LsItemAvatar name="玨" msg="gggg" unread="9">
          ggg
        </LsItemAvatar>
      </Ls>
    </div>
  );
}
