import Image from "next/image";

// nextJS에서는 이미지를 사용할 때, Image 컴포넌트를 사용
// https://nextjs.org/docs/pages/api-reference/components/image
export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      {/* public 폴더에 있는 이미지는 경로를 '/' 형식으로 시작하면 됨 */}
      <Image
        src="/next.svg"
        width={100}
        height={50}
        alt="nextJS logo"
      />
    </>
  );
}
