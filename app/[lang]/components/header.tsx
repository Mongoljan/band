'use client';
import Link from "next/link";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

interface HeaderDictionary {
  title: string;
}

export default function Header({ dict, lang }: { dict: HeaderDictionary; lang: string }) {
  return (
    <div className="flex justify-between items-center max-w-[1200px] fixed top-0 px-20 w-full  pt-[50px] z-10">
      <div className="flex-1 text-base font-bold text-white">{dict.title}</div>
      <div className="flex items-end text-white">
        {/* <Link href="/en">
          <div className={`mr-[30px] dark:text-yellow-300 ${lang === "en" ? "font-bold" : "font-light"}`}>
            EN
          </div>
        </Link>
        <Link href="/mn">
          <div className={`mr-[30px] dark:text-yellow-300 ${lang === "mn" ? "font-bold" : "font-light"}`}>
            mn
          </div>
        </Link> */}
        <Link href="/mn">
          <div className={`mr-[30px] dark:text-yellow-300 ${lang === "mn" ? "font-bold" : "font-light"}`}>
            хөгжимчид
          </div>
        </Link>
        <Link href="/mn">
          <div className={`mr-[30px] dark:text-yellow-300 ${lang === "mn" ? "font-bold" : "font-light"}`}>
            хамтлаг
          </div>
        </Link>
        <Link href="/mn">
          <div className={`mr-[30px] dark:text-yellow-300 ${lang === "mn" ? "font-bold" : "font-light"}`}>
            соло артист
          </div>
        </Link>
        <Link href="/mn">
          <div className={`mr-[30px] dark:text-yellow-300 ${lang === "mn" ? "font-bold" : "font-light"}`}>
            холбоо барих
          </div>
        </Link>
      </div>
      <ThemeSwitcher />
    </div>
  );
}
