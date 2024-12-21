"use client";

import { useState } from "react";
import Image from "next/image";
import Card from "../components/card";
import Searchbar from "../components/searchbar";
import Header from "../components/header";

import logo_horizontal from "../../../public/logo_horizontal.png";

export default function Search() {
  // temp for ui behaviour purposes
  const [searchActive, setSearchActive] = useState(false);

  const handleSearch = (value: string) => {
    console.log(value);
    setSearchActive(true);
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 -z-50 h-full w-1/5 min-w-44">
        <Image
          src="/background_rotated.png"
          fill={true}
          alt=""
          className="object-cover object-right"
        />
      </div>
      <Header logout logo={searchActive} />
      <div className="mx-auto flex flex-col gap-5 font-[family-name:var(--font-lexend)] md:w-4/6">
        {!searchActive && (
          <Image
            src={logo_horizontal}
            alt="crowded exams"
            sizes="100vw"
            className="mx-auto mb-3 mt-[12vh] h-auto w-5/6 md:w-4/6"
          />
        )}
        <Searchbar
          placeholder="Enter paper here..."
          callback={handleSearch}
          className={searchActive ? "md:mt-[-4.5rem]" : ""}
        />
        <div className="flex flex-col gap-5">
          <h2 className="pl-5 text-xl">
            {searchActive ? "Results" : "Recents"}
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(19rem,1fr))] gap-4">
            {/** Placeholder */}
            <Card
              title="PAPER 001"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Card
              title="PAPER 002"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
            <Card
              title="PAPER 003"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Card
              title="PAPER 004"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Card
              title="PAPER 005"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Card
              title="PAPER 006"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
        </div>
      </div>
    </>
  );
}
