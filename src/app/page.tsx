"use client";
import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <div className="fixed bottom-0 left-1/2 -z-50 h-full w-1/2">
        <Image
          src="/background.png"
          fill={true}
          alt=""
          className="object-cover object-left"
        />
      </div>
      <Header logo fixed />
      <div className="flex h-full w-full items-center">
        <div className="flex w-full flex-col justify-between gap-10 font-[family-name:var(--font-lexend)] lg:flex-row">
          <div className="flex flex-col gap-10">
            <div className="text-header font-bold leading-none">
              <h1>Welcome.</h1>
            </div>
            <a
              href={`/api/auth/login?returnTo=search`}
              className="bg-blue w-fit text-xl px-8 py-3 rounded-full flex gap-2"
            >
              <span>LOGIN</span>
              <Image
                src="/external.svg"
                width="20"
                height="20"
                alt="redirect icon"
                className=" "
              />
            </a>
          </div>
          <div className=" flex lg:w-2/5 lg:justify-center">
            <div className="max-w-80 lg:backdrop-blur-md lg:p-6 rounded-xl flex flex-col gap-2">
              <h2 className=" text-xl font-bold">What do we do?</h2>
              <p className=" text-md">
                Our goal is to help students around the world study for their
                exams, by providing a platform that encourages collaboration to
                solve previous exams.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
//junk to test deployment
