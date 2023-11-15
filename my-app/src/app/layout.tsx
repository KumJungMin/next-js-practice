// 1. layout이 기본적인 html 구조를 잡아준다.

import type { Metadata } from "next";
import "./globals.css";

// 3. layout.js 혹은 page.js에서 metadata를 export하면 html의 head 안에 내용을 생성할 수 있음
export const metadata: Metadata = {
  title: "Next.JS Practice",
  description: "Next.JS 연습하기",
};

// 2. children은 page.tsx에서 넘겨준다.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
