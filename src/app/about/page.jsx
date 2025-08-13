"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AboutPage = () => {
  const router = useRouter();
  const isLoggedIn = true;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      <h1>About page</h1>
      <div className="flex flex-col">
        <Link href="/about/address">Address Page</Link>
        <button
          type="button"
          className="btn"
          onClick={handleNavigation}
        >
          Address Page
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
