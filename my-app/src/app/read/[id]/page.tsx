// 동적 라우터는 폴더명을 []로 감싸줘야 한다.

export default function Read({ params }: { params: { id: string } }) {
  return (
    <>
      <h2>Read Page</h2>
      {params.id}
    </>
  );
}
