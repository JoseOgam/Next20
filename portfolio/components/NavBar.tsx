import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">Joseph's Portfolio</Link>
      </div>
      <a href="" className="cta-btn">
        Resume
      </a>
    </div>
  );
};

export default NavBar;
