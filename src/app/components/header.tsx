import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <ul className=" flex rounded bg-blue-500 p-4 space-x-4 items-center m-3">
        <li>
          <Link href="/">Home </Link>
        </li>
        <li>
          <br />
        </li>
        <li>
          <h1 className=" text-6xl font-serif font-bold">CROWDED EXAMS</h1>
        </li>
      </ul>
    </nav>
  );
}
