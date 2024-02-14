import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <header className=" w-full absolute z-10">
      <nav className=" max-w-[1440px] mx-auto flex items-center  justify-between sm:px-16 px-6 py-4">
        <Link href="">
          <Image
            src="/food.png"
            alt="logo"
            width={118}
            height={118}
            className=" object-contain rounded"
          />
        </Link>

        <button>GitHub</button>
      </nav>
    </header>
  );
};

export default NavBar;
