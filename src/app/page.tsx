import Link from "next/link";

// type props = {
//   text: string[];
// };

// export async function LoremIpsum() {
//   const res = await fetch("https://baconipsum.com/api/?type=meat-and-filler");
//   const text = await res.json();
//   return { props: { text } };
// }

export default function Home({ text }: props) {
  return (
    <div>
      <div className="relative rounded flex bg-slate-700 w-1/2 h-screen m-3">
        <Link href="login">
          <button className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3">
            Login
          </button>
        </Link>
        {text}
        {/* <div className="text-white">
          {text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div> */}
      </div>
    </div>
  );
}
