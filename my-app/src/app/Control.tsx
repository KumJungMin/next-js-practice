"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

// Control은 주소에 params.id가 있을 때만 보여준다.
// 사용자와의 상호작용이 필요하므로 클라이언트 컴포넌트여야 함
export function Control() {
  const params = useParams();
  const id = params.id;
  return (
    <ul>
      <li>
        <Link href="/create">Create</Link>
      </li>
      {id ? (
        <>
          <li>
            <Link href={`/update/${id}`}>Update</Link>
          </li>
          <li>
            <input
              type="button"
              value="delete"
            />
          </li>
        </>
      ) : null}
    </ul>
  );
}
