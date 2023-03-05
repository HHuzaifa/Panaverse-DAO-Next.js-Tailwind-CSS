"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="flex justify-between items-center py-1 xl:py-1 2xl:py-10 bg-[#001038] border-black border-2 z-50 sticky top-0">
      <div className="flex justify-self-start items-center ml-8 lg:ml-10 xl:ml-20">
        <Link href="/">
          <Image
            src="Panaverse Logo.svg"
            width="130"
            height="130"
            alt="header logo"
            className="xl:w-auto xl:h-auto 2xl:h-24"
          />
        </Link>
      </div>

      {/* hamburgur navbar */}
      <div className="flex justify-self-end items-center mr-8 lg:hidden md:flex">
        <button onClick={handleMenuClick}>
          <div className="flex flex-col">
            <div className="w-5 h-1 bg-white rounded-sm"></div>
            <div className="w-5 h-1 bg-white rounded-sm my-1"></div>
            <div className="w-5 h-1 bg-white rounded-sm"></div>
          </div>
        </button>
      </div>

      <ul className="hidden sm:hidden md:hidden lg:flex xl:text-lg 2xl:text-4xl 2xl:space-x-12 xl:space-x-0 lg:space-x-0 justify-between space-x-1 md:text-sm">
        <li className="text-white px-9 pt-2">
          <Link href="/">About</Link>
        </li>
        <li className="text-white px-9 pt-2">
          <Link href="End-Goal">End Goal</Link>
        </li>
        <li className="text-white px-9 pt-2">
          <Link href="Courses">Courses</Link>
        </li>
        <li className="text-white px-9 pt-2">
          <Link href="Fellowship">Fellowship</Link>
        </li>
        <li className="text-white px-9 pt-2">
          <Link href="Detail">Detailed</Link>
        </li>
      </ul>

      <div className="hidden flex-row justify-end px-10 xl:mr-20 lg:flex lg:mr-12 ">
        <button className="bg-white md:py-2 md:px-4 xl:py-2 xl:px-4 rounded-full py-2 px-3 2xl:py-6 2xl:px-11 hover:bg-slate-300">
          <a href="https://portal.piaic.org/" target="_blank">
            <h3 className="text-red-600 font-bold md:font-bold lg:font-bold xl:text-xl 2xl:font-bold 2xl:text-4xl">
              Enroll
            </h3>
          </a>
        </button>
      </div>

      {showMenu && (
        <div className="absolute top-16 right-6 left-6 lg:hidden bg-[#041E48] bg-opacity-90 rounded-3xl shadow-md py-10 px-20 md:px-10">
          <ul className="flex flex-col justify-center lg:hidden text-center space-y-5">
            <li className="py-2 text-white">
              <Link href="/">About</Link>
            </li>
            <li className="py-2 text-white">
              <Link href="End-Goal">End Goal</Link>
            </li>
            <li className="py-2 text-white">
              <Link href="Courses">Courses</Link>
            </li>
            <li className="py-2 text-white">
              <Link href="Fellowship">Fellowship</Link>
            </li>
            <li className="py-2 text-white">
              <Link href="Detail">Detailed</Link>
            </li>
            <li>
              <div className="flex flex-row justify-center px-10 mt-4">
                <button className="bg-white rounded-full py-2 px-4 hover:bg-slate-300 block">
                  <a href="https://portal.piaic.org/" target="_blank">
                    <h3 className="text-red-600 font-bold">Enroll</h3>
                  </a>
                </button>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
