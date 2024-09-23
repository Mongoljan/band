'use client'
import Link from "next/link";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import LogRocket from "logrocket";




interface HeaderDictionary {
  title: string; // Adjust based on the actual structure of your dictionary
}

export default function Header({ dict, lang }: { dict: HeaderDictionary; lang: string }) {
  LogRocket.init('jw1z3h/comex');
  return (
    <div className="header flex justify-between items-center py-4 max-w-[1200px] px-20 w-full">
      <div className="flex-1 text-base font-bold">{dict.title}</div>
      <div className="flex items-end">
        <Link href="/en">
          <div className={`p-3 dark:text-yellow-300 ${lang === "en" ? "font-bold" : "font-light"}`}>
            EN
          </div>
        </Link>
        <Link href="/mn">
          <div className={`p-3 dark:text-yellow-300 ${lang === "mn" ? "font-bold" : "font-light"}`}>
            mn
          </div>
        </Link>
      </div>
      <div className="w-[100px]"></div>
      <ThemeSwitcher />
    </div>
  );
}
