import React from "react";
import type { Metadata } from "next";
import { Ma_Shan_Zheng } from "next/font/google";
import "./globals.css";

const font1 = Ma_Shan_Zheng({
  weight: "400",
  subsets: ["latin"],
  display: "optional",
  variable: "--font-mashan",
  preload: true
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
    <html lang="zh-CN" className={font1.className}>
      <body className="h-dvh h-full">{children}</body>
    </html>
  );
}
