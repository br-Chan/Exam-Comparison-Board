import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <ul className=" flex p-4 space-x-4 items-center m-3" style={{ borderRadius: '30px', backgroundColor: '#2b47a1' }}>
        <li>
          <Link href="/">Home </Link>
        </li>
        <li>
          <br />
        </li>
        <li>
          <h1 className=" text-6xl font-lexend font-bold">CROWDED EXAMS</h1>
        </li>
      </ul>
    </nav>
  );
}
