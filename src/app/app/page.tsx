"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex w-1/2 h-screen m-3" style={{ borderRadius: '30px', backgroundColor: '#2a2a2a' }}>
        {" "}
        <Link href="app/login" >login </Link>
      </div>
    </div>
  );
}
