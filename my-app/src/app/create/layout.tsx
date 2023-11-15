// layout.tsx 파일은 page.tsx 파일의 children을 받아서 html의 body 안에 넣어준다.
// layout.tsx가 해당 라우터의 메인 화면 역할을 함

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <form>
      <h2>Create Page</h2>
      {children}
    </form>
  );
}
