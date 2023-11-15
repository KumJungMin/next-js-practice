// 1. layout이 기본적인 html 구조를 잡아준다.

import Link from "next/link";
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
      {/* 
        Link를 사용하면, SPA를 구현할 수 있음
        - SPA란, 하나의 페이지에서 모든 작업을 처리하는 앱
          1. 페이지 리로딩이 없어짐 
          2. 방문했던 페이지는 다운로드 하지 않음 
          3. 미리 페이지를 다운로드함   
      */}
      <body>
        <h1>
          <Link href="/">WEB</Link>
        </h1>
        <ol>
          <li>
            <Link href="/read/1">html</Link>
          </li>
          <li>
            <a href="/read/2">css</a>
          </li>
        </ol>
        {children}
        <ul>
          <li>
            <Link href="/create">create</Link>
          </li>
          <li>
            <Link href="/update/id">update</Link>
          </li>
          <li>
            <button>delete</button>
          </li>
        </ul>
      </body>
    </html>
  );
}
