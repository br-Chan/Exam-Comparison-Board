import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

import logoSquare from "../../../public/logos.png";

export default function Header({
  logo,
  logout,
  fixed,
}: {
  logo?: boolean;
  logout?: boolean;
  fixed?: boolean;
}) {
  const { user } = useUser();
  logout = user ? true : false;
  return (
    <nav
      className={`mt-10 flex w-full items-center justify-between font-[family-name:var(--font-lexend)] ${fixed ? "h-36" : "h-11 md:h-16"}`}
    >
      <div className="relative h-full w-auto">
        {logo && (
          <Link href="/">
            <Image
              src={logoSquare}
              alt="logo"
              sizes="100vw"
              className="h-full w-auto"
            />
          </Link>
        )}
      </div>
      {logout && (
        <div className=" border-b-2 border-white h-fit p-1 md:p-2">
          <Link href="/api/auth/logout">
            <span className=" font-light text-sm md:text-lg">LOG OUT</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
