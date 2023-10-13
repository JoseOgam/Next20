"use client";
import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex-col w-full  justify-center items-center">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <Image
          src="/vercel.svg"
          alt="sumz_logo"
          height={112}
          width={112}
          className="object-contain"
        />

        <button
          type="button"
          onClick={() => window.open("https://github.com/JoseOgam", "_blank")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="flex justify-center items-center">
        Harry Potter Characters
      </h1>
      <h2 className="flex justify-center items-center font-extrabold">
        List of Harry Potter Characters name and Date of Birth from the API data
      </h2>
    </div>
  );
};

export default NavBar;
