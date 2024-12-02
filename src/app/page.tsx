"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="fixed -z-50 right-0 bottom-0 h-full w-1/2">
        <Image src="/background.png" fill={true} alt="" />
      </div>
      <div className="flex px-20 font-[family-name:var(--font-lexend)] flex-wrap">
        <div className="flex flex-col flex-grow gap-10">
          <div className="text-8xl">
            <h1>Welcome.</h1>
          </div>
          <Link href="/login" className="bg-blue-600 w-fit text-xl px-8 py-3 rounded-full">LOGIN </Link>
        </div>
        <div className="w-80 backdrop-blur-sm p-6 rounded-xl">
          <p>Our goal is to help students around the world study for their exams, by providing a platform that encourages collaboration to solve previous exams. </p>
        </div>
      </div>
    </div>
  );
}
