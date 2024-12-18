import { ChangeEvent, KeyboardEvent, useState } from "react";
import Image from "next/image"

export default function Searchbar({ placeholder, callback }: { placeholder: string, callback: ( value: string ) => any }) {
    const [value, setValue] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") callback(value)
  }

    return (
        <div className=" rounded-full h-12 border-white border-2 flex px-5 gap-4">
            <Image src="/magnifying.svg" className=" dark:invert" alt="search" width="24" height="24"/>
            <input type="text" placeholder={placeholder} value={value} onChange={handleChange} onKeyDown={handleEnter} className="flex-grow outline-none bg-transparent text-base font-light"/>
        </div>
    )
} 
