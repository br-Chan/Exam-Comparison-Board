import Link from "next/link";
import Image from "next/image";

export default function Header({ logo, logout}: {logo?: boolean, logout?: boolean}) {
  return (
    <nav className="flex pt-10 justify-between w-full font-[family-name:var(--font-lexend)] h-25">
        <div className="relative w-36 h-32">
          {logo && 
          <Link href="/">
            <Image src="/logos.png" alt="logo" fill={true}></Image>
          </Link>}
        </div>
        {logout && 
        <div className=" border-b-2 border-white h-fit p-2 md:p-3">
          <span className=" font-light text-sm md:text-xl">LOG OUT</span>
        </div>
      }
        
    </nav>
  );
}
