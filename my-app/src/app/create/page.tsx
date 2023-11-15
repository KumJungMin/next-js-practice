// app 내부의 폴더 혹은 파일명이 주소상 segment가 됨
// (ex. my-app/src/app/create/page.tsx => localhost:3000/create/)

// 동적 라우터는 폴더명을 []로 감싸줘야 한다.
// 데이터를 보여주기만 하므로, 서버 컴포넌트여야 함

"use client";
// 클라이언트 컴포넌트 선언
// - useEffect, useState, onSubmit과 같은 코드를 사용할 수 있음

import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = e.currentTarget.title.value;
    const body = e.currentTarget.body.value;
    const resp = await fetch("http://localhost:9999/topics/", {
      cache: "no-cache", // 랜더링 될 때마다 캐쉬를 사용하지 않고 신선한 데이터를 가져옴
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });
    const topic = await resp.json();

    // router.push를 사용하면 페이지 리로드 없이 사용자의 화면을 해당 페이지로 이동
    router.push(`/read/${topic.id}`);
    router.refresh();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Create</h2>
      <p>
        <input
          type="text"
          name="title"
          placeholder="title"
        />
      </p>
      <p>
        <textarea
          name="body"
          placeholder="body"
        ></textarea>
      </p>
      <p>
        <input
          type="submit"
          value="create"
        />
      </p>
    </form>
  );
}
