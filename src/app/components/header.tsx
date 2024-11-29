import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <ul className=" flex p-4 space-x-4 items-center m-3" style={{ backgroundColor: "black" }}>
        <li>
          <img src="/book_2_1.png" alt="book icon" style={{ width: '200px', height: 'auto',  paddingLeft:'70px'}} />
        </li>
        <li>
          <br />
        </li>
        <li>
          <h1 className="font-lexend font-semibold" style={{ fontSize: "48px", width: '70px', lineHeight: "65px"}}>CROWDED EXAMS</h1>
        </li>
        <li>
          <h1 style={{paddingLeft: "600px"}}></h1>
        </li>
        <li>
          <h1 className="font-lexend" style={{ fontSize: "20px",  width: '250px', fontWeight: "300"}}>HOMEPAGE</h1>
        </li>
        <li>
          <h1 className="font-lexend" style={{ fontSize: "20px",  width: '250px', fontWeight: "300"}}>CONTACT US</h1>
        </li>
        <li>
          <h1 className="font-lexend" style={{ fontSize: "20px",  width: '70px', fontWeight: "300"}}>ENQUIRIES</h1>
        </li>
      </ul>
    </nav>
  );
}
