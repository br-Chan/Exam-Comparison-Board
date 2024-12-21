import { ChangeEvent, KeyboardEvent, useState } from "react";
import Image from "next/image";

export default function Searchbar({
  placeholder,
  callback,
  className,
}: {
  placeholder: string;
  callback: (value: string) => unknown;
  className: string;
}) {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") callback(value);
  };

  return (
    <div
      className={`flex h-12 gap-4 rounded-full border-2 border-white px-5 ${className}`}
    >
      <Image
        src="/magnifying.svg"
        className="white-filter"
        alt="search"
        width="24"
        height="24"
      />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleEnter}
        className="flex-grow bg-transparent text-base font-light outline-none"
      />
    </div>
  );
}
