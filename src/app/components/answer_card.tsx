import Image from "next/image";

import tick from "../../../public/tick.svg";
import cross from "../../../public/cross.svg";

export default function AnswerCard({
  author,
  content,
  votes,
}: {
  author: string;
  content: string;
  votes: { up: number; down: number };
}) {
  return (
    <div className="flex w-72 flex-col gap-2 rounded-lg bg-neutral-900 p-5">
      <h2 className="text-lg">{author}</h2>
      <p className="text-sm">{content}</p>
      <div className="text-md flex gap-5">
        <button className="flex items-center gap-1">
          <Image
            src={tick}
            width={20}
            height={20}
            alt="tick"
            className="invert"
          />
          <span>{votes.up}</span>
        </button>
        <button className="flex items-center gap-1">
          <Image
            src={cross}
            width={20}
            height={20}
            alt="cross"
            className="invert"
          />
          <span>{votes.down}</span>
        </button>
      </div>
    </div>
  );
}
