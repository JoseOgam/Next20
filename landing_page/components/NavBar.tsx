import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <header className=" w-full">
      <nav className="flex mx-auto justify-between m-5 p-5">
        <div className="">
          <Link href="/">
            <Image src="/next.svg" alt="Logo" width={118} height={118} />
          </Link>
        </div>
        <div className="">
          <div className="flex space-x-3">
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
