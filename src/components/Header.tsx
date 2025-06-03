"use client";

import Image from "next/image";
import logo from "@/assets/logo.svg";

export default function Header() {
  return (
    <div className="w-full mt-6 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-xl ">
          <Image src={logo} alt="YoubetDaoDev Logo" width={28} height={28} />
          <span className="gradient-text text-3xl font-bold">YoubetDaoDev</span>
        </div>

        {/* 可以在这里添加导航菜单或其他按钮 */}
        <div className="hidden md:flex items-center space-x-6 text-base text-white ">
          <a
            href="https://youbetdao.github.io/weekly/"
            className="cursor-pointer"
          >
            Study Group
          </a>

          <a
            href="mailto:wfnuser@hotmail.com"
            className="px-4 py-2 bg-[#c05cf6] cursor-pointer font-medium text-black transition-all duration-200 text-base rounded-full hover:bg-white hover:text-black"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
