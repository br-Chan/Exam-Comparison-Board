import Link from "next/link";
import Image from "next/image";

import logoSquare from "../../../public/logos.png"

export default function Header({ logo, logout, fixed }: {logo?: boolean, logout?: boolean, fixed?: boolean }) {
  return (
    <nav className={` flex mt-10 justify-between w-full font-[family-name:var(--font-lexend)] items-center ${fixed ? "h-36" : "h-11 md:h-16"}`}>
        <div className="relative w-auto h-full">
          {logo && 
          <Link href="/">
            <Image src={logoSquare} alt="logo" sizes="100vw" className=" h-full w-auto"/>
          </Link>}
        </div>
        {logout && 
        <div className=" border-b-2 border-white h-fit p-1 md:p-2">
          <span className=" font-light text-sm md:text-lg">LOG OUT</span>
        </div>
      }
        
    </nav>
  );
}
