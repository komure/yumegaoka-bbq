import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ベリーBBQ | 横浜・下飯田のバーベキュー場",
  description:
    "神奈川県横浜市、相鉄いずみ野線 下飯田駅から徒歩10分。手ぶらでOK！大型モール「ソラトス」で食材の買い出しも便利。1人1,500円（3時間）で楽しめるベリーBBQです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
