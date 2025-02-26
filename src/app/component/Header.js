"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";


export default function Navbar() {

  return (
    <>
      <nav className="flex w-full justify-center items-center p-4 bg-[#DDCCCC] ">
        <div className=" w-full flex justify-between items-center ">
          <a href="/" className="flex items-center gap-4 left-0 z-50 top-0">
            <Image src="/assets/logo22.PNG" width={0} height={0} className="w-[40px] h-auto" alt="Logo" />
            <p className="font-bold text-xl">MetricsZero.com</p>
          </a>

          <div className="  lg:flex flex-col items-center hidden">
            <button className="rounded-full bg-[#D9D9D9] w-[53px] h-[53px] ">
              <p className="text-black font-black">N</p>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}