import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "クソ資格検定 - 誰も知らない資格を探そう",
  description: "世界の珍しい資格、マイナー資格、ネタ資格を紹介。クイズで楽しく学べる資格情報サイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
