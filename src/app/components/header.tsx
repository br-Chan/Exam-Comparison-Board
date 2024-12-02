// import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="flex pt-10 px-12 lg:px-20 xl:px-28 justify-between w-full font-[family-name:var(--font-lexend)] h-25">
      <div className="flex items-end gap-2">
        <div className=" relative w-24 h-24">
          <Image src="/book_2_1.png" alt="logo" fill={true}></Image>
        </div>
        <h1 className="font-semibold text-3xl h-fit pb-3">CROWDED<br/>EXAMS</h1>
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
