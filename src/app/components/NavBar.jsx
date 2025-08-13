"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const NavBar = () => {
  const pathName = usePathname();
  if (!pathName.includes("dashboard")){
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
  }
  else{
    return <></>
  }
    
};
