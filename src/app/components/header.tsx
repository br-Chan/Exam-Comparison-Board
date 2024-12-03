// import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="flex pt-10 px-12 lg:px-20 xl:px-28 justify-between w-full font-[family-name:var(--font-lexend)] h-25">
      <div className="flex items-end gap-2">
        <div className=" relative w-36 h-32">
          <Image src="/logos.png" alt="logo" fill={true}></Image>
        </div>
      </div>
      <ul className="flex gap-20">
        <li>
          <h1 className="">HOMEPAGE</h1>
        </li>
        <li>
          <h1 className="">ENQUIRIES</h1>
        </li>
      </ul>
    </nav>
  );
}
