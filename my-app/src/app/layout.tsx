// 1. layout이 기본적인 html 구조를 잡아준다.

import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";
import { useEffect } from "react";

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
  // 서버 컴포넌트
  // - useEffect, useState 등의 hook을 사용할 수 없다.
  // - 서버 컴포넌트를 유저와 상호작용하지 않는 컴포넌트로 사용한다.
  // - 보안이 필요한 정보를 서버 컴포넌트에서 처리한다.
  const resp = await fetch("http://localhost:9999/topics/");
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
