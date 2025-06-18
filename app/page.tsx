import NavBar from "./components/NavBar";
export default function Home() {
  return (
    <div>
      <NavBar blue left={<div>磊哥</div>} right={<div>王良</div>}>
        支付宝薅羊毛
      </NavBar>
    </div>
  );
}
