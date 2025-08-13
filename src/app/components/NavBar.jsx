import Link from "next/link";
import React from "react";

export const NavBar = () => {
  return (
    <nav>
      <ul className="flex h-20 bg-[#333] items-center justify-around">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/services"}>
          <li>Services</li>
        </Link>
        <Link href={"/about"}>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};
