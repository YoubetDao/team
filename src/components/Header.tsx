"use client";

import Image from "next/image";
import logo from "@/assets/logo.svg";
import Button from "./common/button";

export default function Header() {
  return (
    <div className="w-full mt-6 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-xl ">
          <Image src={logo} alt="YoubetDaoDev Logo" width={28} height={28} />
          <span className=" text-xl font-bold">YoubetDaoDev</span>
        </div>

        {/* 可以在这里添加导航菜单或其他按钮 */}
        <div className="hidden md:flex items-center space-x-6 text-base text-white ">
          <a
            href="https://youbetdao.github.io/weekly/"
            className="text-white hover:text-[rgb(129,74,200)]"
          >
            Study Group
          </a>

          <Button
            onClick={() => {
              window.open("https://t.me/element14_revival", "_blank");
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
