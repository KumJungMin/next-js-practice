// 1. layout이 기본적인 html 구조를 잡아준다.

import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";
import { Control } from "./Control";

// 3. layout.js 혹은 page.js에서 metadata를 export하면 html의 head 안에 내용을 생성할 수 있음
export const metadata: Metadata = {
  title: "Next.JS Practice",
  description: "Next.JS 연습하기",
};

// 2. children은 page.tsx에서 넘겨준다.
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resp = await fetch("http://localhost:9999/topics", {
    cache: "no-store",
  });
  const topics = await resp.json();
  return (
    <html>
      <body>
        <h1>
          <Link href="/">WEB</Link>
        </h1>
        <ol>
          {topics.map((topic: { id: number; title: string }) => {
            return (
              <li key={topic.id}>
                <Link href={`/read/${topic.id}`}>{topic.title}</Link>
              </li>
            );
          })}
        </ol>
        {children}
        <Control />
      </body>
    </html>
  );
}
