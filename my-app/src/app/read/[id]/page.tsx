// 동적 라우터는 폴더명을 []로 감싸줘야 한다.
// 데이터를 보여주기만 하므로, 서버 컴포넌트여야 함

export default async function Read({ params }: { params: { id: string } }) {
  const id = params.id;
  const resp = await fetch(`http://localhost:9999/topics/${id}`);
  const topic = await resp.json();
  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
    </>
  );
}
