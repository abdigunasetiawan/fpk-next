"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import FpkLogo from "./svg/FpkLogo";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { push } = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (isMenuOpen) {
    window.addEventListener("click", function handleClickOutside(event) {
      const nav = document.querySelector("nav");
      if (nav && !nav.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    });
  }

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
    {
      href: "/projects",
      label: "Project",
      active: pathname === "/projects",
    },
    {
      href: "/events",
      label: "Event",
      active: pathname === "/events",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 z-[9999] w-full overflow-hidden bg-white/40 shadow-sm backdrop-blur-md ${isMenuOpen ? "active" : ""}`}
    >
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-8 lg:h-16 xl:px-16">
        <Link href="/" className="flex items-center gap-2">
          <FpkLogo></FpkLogo>
          <span className="text-2xl font-bold">FPK</span>
        </Link>

        {/* <button className="rounded-sm p-1.5 hover:bg-neutral-400">
          <div
            className={`z-[9999] flex h-5 w-[25px] cursor-pointer flex-col justify-between lg:hidden ${isMenuOpen ? "active" : ""}`}
            id="hamburger-toggle"
            onClick={toggleMenu}
          >
            <span className="hamburger__line origin-top-left" />
            <span className="hamburger__line" />
            <span className="hamburger__line origin-bottom-left" />
          </div>
        </button> */}

        <button
          onClick={toggleMenu}
          className="rounded-sm border-[3px] border-transparent p-1 hover:bg-neutral-200 focus:border-neutral-200 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={28}
            height={28}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>

        <ul
          id="links-wrapper"
          className="absolute top-14 left-0 box-border flex w-full flex-col items-center gap-y-4 px-4 py-4 transition-transform duration-200 lg:static lg:w-max lg:translate-y-0 lg:flex-row lg:items-center lg:gap-8 lg:p-0"
        >
          {routes.map((route) => (
            <li key={route.href}>
              <Link
                href={route.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block text-lg transition duration-100 lg:text-base",
                  route.active
                    ? "font-bold text-[#F49D03]"
                    : "font-medium text-black/60 hover:text-black",
                )}
              >
                {route.label}
              </Link>
            </li>
          ))}

          <li className="ml-auto w-full lg:ml-4 lg:w-auto">
            <button
              onClick={() => {
                push("/contact");
                setIsMenuOpen(!isMenuOpen);
              }}
              className={cn(
                "relative flex h-11 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-[#F49D03] to-[#FF7E3E] font-bold text-white shadow-md transition-all duration-300 after:absolute after:inset-0 after:block after:bg-[#FF7E3E] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 active:scale-95 lg:w-36",
                pathname === "/contact"
                  ? "ring-2 ring-orange-500 ring-offset-2"
                  : "",
              )}
            >
              <span className="absolute z-10 block">Contact Us</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
