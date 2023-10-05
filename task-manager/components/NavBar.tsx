"use client";

import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "@/components";

const NavBar = () => {
  const gitUrl = () => {
    window.open("https://github.com/JoseOgam/Next20/tree/main/task-manager");
  };
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="./next.svg"
            alt="logo"
            height={118}
            width={100}
            className=" object-contain"
          />
        </Link>

        <CustomButton
          title="github"
          containerStyles="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          handleClick={gitUrl}
        />
      </nav>
    </header>
  );
};

export default NavBar;
