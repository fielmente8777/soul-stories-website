"use client";

import { useWebContext } from "@/context-api/WebContext";
import { BottomNav } from "./navData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const MobileNav = () => {
  const pathName = usePathname();
  const { isMobile, setIsMobile } = useWebContext();
  const isActive = (href: string) => pathName === href;
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobile]);
  return (
    <div
      className={`fixed md:top-[5rem] top-[6.8rem] z-50 md:w-[350px] w-full h-full duration-300 transition-all ease-in-out bg-primary p-4 text-white ${
        !isMobile ? "-right-full" : "-right-0"
      }`}
    >
      <ul>
        {BottomNav.links.map((link, index) => (
          <li key={index} className="mb-4">
            <Link
              href={link.href}
              onClick={() => setIsMobile(false)}
              className={`uppercase ps-2 text-lg transition-all duration-300 ease-in-out hover:border-l-2 hover:border-white${
                isActive(link.href) ? " border-l-2" : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
