import type { Metadata } from "next";
import { Ma_Shan_Zheng, Noto_Sans_SC } from "next/font/google";

const font1 = Ma_Shan_Zheng({
  weight: "400",
  subsets: ["latin"],
  display: "optional",
  variable: "--font-mashan",
  preload: true
});

const font2 = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-noto"
});

export const metadata: Metadata = {
  title: {
    default: "wealipay.top",
    template: "%s | wealipay.top"
  },
  description: "薅支付宝羊毛就访问wealipay.top",
  keywords: ["薅羊毛", "支付宝", "wealipay.top"],
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={`${font1.className} ${font2.className}`}>
      <body className="h-dvh h-full">{children}</body>
    </html>
  );
}
