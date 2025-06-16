import { Ma_Shan_Zheng } from "next/font/google";
// 初始化字体
const font = Ma_Shan_Zheng({
  weight: "400", // 此字体只有400一个字重
  subsets: ["latin"], // 必须包含'latin'
  display: "optional", // 优化加载体验
  variable: "--font-mashan",// 定义CSS变量
  preload:true
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={font.className}>
      <body>{children}</body>
    </html>
  );
}
