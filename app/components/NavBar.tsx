"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { NTR } from "next/font/google";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ntr = NTR({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-ntr",
});

interface Navitem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<Navitem> = [
  {
    label: "Accueil",
    page: "/",
  },
  {
    label: "Projets",
    page: "/project",
  },
  {
    label: "À propos",
    page: "/about",
  },

  {
    label: "Contact",
    page: "/contact",
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);
  const path = usePathname();
  console.log(path);

  return (
    <header
      className={` ${ntr.className} w-full mx-auto px-4 shadow top-0 z-50 sm:px-36 dark:border-stone-600 bg-custom-nav-light dark:bg-custom-nav-dark`}
    >
      <div className="justify-between md:items-center md:flex ">
        <div>
          <div className="flex items-center justify-between py-3">
            <div className="md:py-5 md-block">
              <h2 className="text-2xl font-semibold">Marc-Antoine Hovington</h2>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => {
                  setNavbar(!navbar);
                }}
              >
                {navbar ? (
                  <IoMdClose
                    className="hover:scale-125 hover:transform"
                    size={30}
                  />
                ) : (
                  <IoMdMenu size={30} />
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <div className=" items-center justify-end space-y-8 md:flex md:space-x-6 md:space-y-0">
            {NAV_ITEMS.map((link, idx) => {
              return (
                <Link
                  key={idx}
                  href={link.page}
                  className=" text-xl block relative lg:inline-block text-neutral-700 transition-transform hover:text-neutral-900 hover:transform origin-top-left font-bold hover:scale-110 dark:text-neutral-100 dark:hover:text-custom-highlight-light"
                  onClick={() => {
                    setNavbar(!navbar);
                  }}
                >
                  {link.page === path && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full block h-[1px] w-full bg-slate-800 dark:bg-slate-100"
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
            {currentTheme === "dark" ? (
              <button
                onClick={() => setTheme("light")}
                className="bg-slate-100 p-2 rounded-xl hover:transform hover:scale-125 origin-center transition"
              >
                <RiSunLine size={25} color="black" />
              </button>
            ) : (
              <button
                onClick={() => setTheme("dark")}
                className="bg-slate-100 p-2 rounded-xl hover:transform hover:scale-125 origin-center transition"
              >
                <RiMoonFill size={25} color="black" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
