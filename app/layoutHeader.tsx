"use client";
import Link from "next/link";
import { toggleDarkMode } from "../public/scripts/darkMode";
import { Sun, Sunglasses, House, List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import { useBreakpoint } from "@/utils/hooks/useBreakpoint";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
const NAVIGATION = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  // { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
export default function LayoutHeader({}: {}) {
  const [darkState, setDarkState] = useState<boolean>(false);
  const [navOpen, setNavOpen] = useState<boolean>(false);

  useEffect(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkState(true);
    } else {
      setDarkState(false);
    }
  }, []);

  const { isAboveMd, isBelowMd, md } = useBreakpoint("md");

  return (
    <>
      <div className="z-10 sticky top-2 breakpoint-x flex flex-row justify-end drop-shadow-md">
        {isBelowMd ? (
          <div className="md:min-w-[20rem] md:justify-evenly items-center flex flex-row gap-4 dark:bg-base-100  dark:text-base-400 bg-base-300 bg-opacity-90 dark:bg-opacity-90 text-base-100 rounded-md py-2 px-4 text-sm md:text-base">
            <button onClick={() => setNavOpen(true)}>
              <List size={24} />
            </button>
          </div>
        ) : (
          <nav className="md:min-w-[20rem] md:justify-evenly items-center flex flex-row gap-4 dark:bg-base-100  dark:text-base-400 bg-base-300 bg-opacity-90 dark:bg-opacity-90 text-base-100 rounded-md py-2 px-4 text-sm md:text-base">
            {NAVIGATION.map((item, index: number) =>
              item.href === "#contact" ? (
                <Link
                  className="hover:drop-shadow-md hover:text-base-100 hover:dark:text-base-100 hover:bg-blue-400  hover:dark:bg-orange-400 leading-6 border-theme border-2 p-2 rounded-md
                  flex flex-row gap-1 items-center"
                  href={item.href}
                  key={index}
                >
                  <ArrowUpRight size={18} className="inline" />
                  {item.label}
                </Link>
              ) : (
                <Link
                  className="hover:text-theme leading-6"
                  href={item.href}
                  key={index}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        )}
      </div>
      {navOpen && (
        <Modal>
          <div className="bg-base-300 dark:bg-base-100 text-base-100 dark:text-base-400 h-full w-full text-end py-4 px-4">
            <button onClick={() => setNavOpen(false)}>
              <X size={24} />
            </button>
            <nav className="flex flex-col gap-4 items-end mt-4">
              {NAVIGATION.map((item, index: number) =>
                item.href === "#contact" ? (
                  <Link
                    className="hover:drop-shadow-md hover:text-base-100 hover:dark:text-base-100 hover:bg-blue-400  hover:dark:bg-orange-400 leading-6 border-theme border-2 p-2 rounded-md
                  flex flex-row gap-1 items-center"
                    href={item.href}
                    key={index}
                    onClick={() => setNavOpen(false)}
                  >
                    <ArrowUpRight size={18} className="inline" />
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    className="hover:text-theme leading-6"
                    href={item.href}
                    key={index}
                    onClick={() => setNavOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </div>
        </Modal>
      )}
    </>
  );
}
