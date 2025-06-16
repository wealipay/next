// app/layout.tsx
import { ZCOOL_QingKe_HuangYou } from "next/font/google";

// 初始化字体
const zcoolFont = ZCOOL_QingKe_HuangYou({
  weight: "400", // 此字体只有400一个字重
  subsets: ["latin"], // 必须包含'latin'
  display: "swap", // 优化加载体验
  variable: "--font-zcool" // 定义CSS变量
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={zcoolFont.className}>
      <body>{children}</body>
    </html>
  );
}
