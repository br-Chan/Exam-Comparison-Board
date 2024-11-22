"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className=" rounded flex bg-slate-700 w-1/2 h-screen m-3">
        {" "}
        <Link href="app/login">login </Link>
      </div>
    </div>
  );
}
