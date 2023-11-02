"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import { transform } from "next/dist/build/swc";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = ()=> setMenuOpened(!menuOpened);
  return (
    <nav className="flexBetween max-container px-12 z-30 py-2 rounded-full bg-white shadow-xl ring-1 ring-slate-100 fixed w-[95%] left-[50%] top-1 translate-x-[-50%]">
      <Link href="/" className="bold-28">
        <span>TRAVEL</span>
      </Link>
      {/* DESKTOP */}
      <ul className="hidden lg:flex h-full">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="flex gap-2 mx-8 relative group text-gray-50"
          >
            <Image
              src={link.iconURL}
              alt={link.label}
              height={20}
              width={20}
              className="h-auto w-4"
            />
            {link.label}
            <span className="inline-block absolute h-[2px] w-0 bg-black -bottom-2 group-hover:w-full transition-all duration-500"></span>
          </Link>
        ))}
      </ul>
      <div className="hidden lg:block">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_rounded"
        />
      </div>

      {/* MOBILE */}

      {!menuOpened ? (
        <Image
          src="menu.svg"
          alt="menu"
          width={28}
          height={28}
          className="lg:hidden inline-block cursor-pointer"
          onClick={toggleMenu}
        />
      ) : (
        <Image
          src="close.svg"
          alt="menu"
          width={28}
          height={28}
          className="lg:hidden inline-block cursor-pointer"
          onClick={toggleMenu}
        />
      )}
      <ul
        className={menuOpened ? "flex flex-col justify-center p-12 fixed top-14 bg-slate-100 rounded-lg transition-all duration-500 shadow-md right-0" : "flex flex-col justify-center p-12 fixed top-14 bg-slate-100 rounded-lg transition-all duration-500 shadow-md right-[-100%]"}
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="flex gap-1 m-6 relative group"
          >
            <Image
              src={link.iconURL}
              alt={link.label}
              height={20}
              width={20}
              className="h-auto w-4"
            />
            {link.label}
            <span className="inline-block absolute h-[2px] w-0 bg-black -bottom-2 group-hover:w-full transition-all duration-500"></span>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
