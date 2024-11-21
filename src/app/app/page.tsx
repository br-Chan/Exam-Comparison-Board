"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = (id: string) => {
    router.push(`/${id}`);
  };
  return (
    <div>
      <nav>
        <ul>
          <button onClick={() => handleClick("app")}>home</button>
        </ul>
      </nav>
      <h1>Home</h1>
      <button onClick={() => handleClick("engsci211")}>engsci211</button>
      <input />
    </div>
  );
}
