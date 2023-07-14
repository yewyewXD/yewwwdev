"use client";

import React, { useState } from "react";
import navItems from "../json/navItems.json";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faBarsStaggered,
  faComment,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function AppHeader() {
  const pathname = usePathname();
  const [isShowingSideNav, setIsShowingSideNav] = useState(false);

  return (
    <header className="mt-4">
      <div className="container flex justify-between items-center">
        <Link href="/" passHref>
          <div className="text-main font-bold hoverOpacity">yewww.dev</div>
        </Link>

        {/* Nav Desktop */}
        <nav className="items-center font-bold md:flex hidden">
          {navItems.map((navItem) => (
            <div
              className={navItem.subLinks ? "NavItemExpand relative" : ""}
              key={navItem.link}
            >
              <Link href={navItem.link} passHref>
                <span className="py-4 px-5 flex items-center cursor-pointer">
                  {navItem.name}
                  {navItem.subLinks && (
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="NavItemAccord w-2 ml-3"
                    />
                  )}
                </span>
              </Link>

              {navItem.subLinks && (
                <div className="NavDropdown opacity-0 cursor-pointer whitespace-nowrap absolute flex flex-col pointer-events-none z-50">
                  {navItem.subLinks.map((subLink) => (
                    <Link
                      className="block"
                      href={subLink.link}
                      key={subLink.link}
                      passHref
                    >
                      <span>{subLink.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <button className="NavCTA flex items-center ml-5">
            <FontAwesomeIcon icon={faComment} className="w-4" />
            <span className="leading-tight ml-2">{"Let's Chat"}</span>
          </button>
        </nav>

        {/* Nav Mobile */}
        <div className="md:hidden">
          <FontAwesomeIcon
            icon={faBarsStaggered}
            className="w-5 h-5 cursor-pointer"
            onClick={() => setIsShowingSideNav(true)}
          />

          <div
            className={`SideNav font-bold fixed top-0 transition-all duration-200 ${
              isShowingSideNav ? "left-0 opacity-100" : "left-full opacity-0"
            } right-0 bottom-0 z-50 py-4 px-7 flex flex-col`}
          >
            <div className="flex justify-end">
              <FontAwesomeIcon
                icon={faXmark}
                className="w-6 h-6 cursor-pointer"
                onClick={() => setIsShowingSideNav(false)}
              />
            </div>

            <div className="flex flex-col gap-4">
              {navItems.map((navItem) => (
                <div key={navItem.link}>
                  <Link
                    onClick={() => setIsShowingSideNav(false)}
                    className={`${
                      pathname === navItem.link ? "text-main" : ""
                    } block py-2`}
                    href={navItem.link}
                  >
                    {navItem.name}
                  </Link>

                  <div>
                    {navItem.subLinks.map((subLink) => (
                      <Link
                        onClick={() => setIsShowingSideNav(false)}
                        className="flex items-center py-2 pl-3"
                        href={subLink.link}
                        key={subLink.link}
                      >
                        <FontAwesomeIcon
                          icon={faAngleRight}
                          className="w-3 h-3 mr-2 cursor-pointer"
                          onClick={() => setIsShowingSideNav(false)}
                        />{" "}
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex-grow flex items-end w-full">
              <div className="py-6 border-t w-full flex items-center justify-between">
                <div className="text-main font-bold">yewww.dev</div>

                <div className="flex items-center">
                  <Link
                    className="hoverOpacity"
                    href="https://www.linkedin.com/in/yewyewxd/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/brand/linkedin.png"
                      alt=""
                      height={20}
                      width={20}
                    />
                  </Link>

                  <Link
                    className="ml-2 hoverOpacity"
                    href="https://github.com/yewyewXD"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/brand/github.png"
                      alt=""
                      height={20}
                      width={20}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
