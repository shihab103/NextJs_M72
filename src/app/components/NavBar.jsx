import Link from "next/link";
import React from "react";

export const NavBar = () => {
  return (
    <nav>
      <ul className="flex justify-around">
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
