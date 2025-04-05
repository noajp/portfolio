// =======================
// 1. インポート
// =======================

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link"; // ← 追加：ナビゲーション用
import "./globals.css";

// =======================
// 2. Googleフォント設定
// =======================

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// =======================
// 3. メタデータ定義
// =======================

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My personal portfolio website",
};

// =======================
// 4. レイアウト定義
// =======================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {/* 共通ナビゲーション */}
        <header className="absolute top-0 left-0 w-full z-10 flex gap-6 p-6 text-white text-sm">
          <Link href="/">home</Link>
          <Link href="/vlog">vlog</Link>
          <Link href="/info">info</Link>
        </header>

        {/* 各ページの内容 */}
        <main>{children}</main>
      </body>
    </html>
  );
}