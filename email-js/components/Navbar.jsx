"use client";
import React, { useState } from "react";
import { navLinks } from "../constants";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav className="flex w-full items-center py-2 px-8 fixed bg-cyan-950 top-0 z-20">
      <div className="flex w-full justify-between items-center">
        <Link className="flex items-center" href="/">
          company Logo
        </Link>
        <ul className=" list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              className={`${
                active === nav.title ? "text-actives" : "text-inactives"
              }`}
              key={nav.id}
              onClick={() => setActive(nav.title)}
            >
              <Link href={`${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
