"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp, ChevronDown, Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  {
    label: "Resources",
    submenu: [
      { label: "Facilities", href: "/facilities" },
      { label: "Equipment", href: "/equipment" },
    ],
  },
  // { label: "Gallery", href: "/gallery" },
  { label: "Future Prospects", href: "/future-prospects" },
];

export default function Nav() {
  const [hideShadow, setHideShadow] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const activePath = usePathname();
  const [topButtonVisible, setTopButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const threshold = window.innerHeight * 0.3;

      if (currentScroll > threshold) {
        setHideNav(currentScroll > lastScrollY);
        setHideShadow(true);
      } else {
        setHideNav(false);
        setHideShadow(false);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setTopButtonVisible(true);
      } else {
        setTopButtonVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <button
        onClick={scrollToTop}
        className={`z-99 fixed cursor-pointer bottom-6 right-6 p-3 rounded-full transition-all ${
          topButtonVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 pointer-events-none translate-y-4"
        } bg-gold-600 hover:bg-gold-900 text-white shadow-lg`}
      >
        <ArrowUp className="text-marine-950" />
      </button>

      <div
        className={cn(
          "z-50 fixed w-full transition-all duration-500",
          hideNav ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100",
          hideShadow ? "md:bg-marine-950" : "bg-transparent"
        )}
      >
        <AnimatePresence>
          {showBanner && (
            <motion.div className="w-full bg-gold-500 text-foreground-950 col-span-2 uppercase font-bold">
              <div className="flex items-center justify-center gap-3 px-4 py-2">
                <span>Page Under Construction and Development</span>
                <button onClick={() => setShowBanner(false)}>
                  <X className="size-4.5 cursor-pointer" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap justify-between items-center px-5 py-4">
          <Link href="/" className="">
            <Image
              priority
              src="/logos/landscape_logo.jpg"
              alt="Trident CPB Marine Services Logo"
              width={140}
              height={140}
            />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex gap-10 justify-end items-center uppercase font-bold">
              {links.map((li, idx) => {
                const isActive = activePath === li.href;

                return li.submenu ? (
                  <li
                    className="relative group hover:text-gray-400 transition-colors"
                    key={li.label}
                  >
                    <span className="flex gap-1 items-center cursor-pointer">
                      {li.label} <ChevronDown className="size-4.5" />
                    </span>
                    <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                      {li.submenu.map((sublink) => (
                        <li key={sublink.href}>
                          <Link
                            href={sublink.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                          >
                            {sublink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <Link
                    className={cn(
                      !isActive && "hover:text-gray-400 transition-colors",
                      isActive && "text-gold-500 font-black"
                    )}
                    key={`${li}-${idx}`}
                    href={li.href}
                  >
                    <li>{li.label}</li>
                  </Link>
                );
              })}
              <Link
                className="flex gap-2 items-center text-black-950 px-4 h-9.5 bg-gold-500 rounded-lg"
                href="/contact"
              >
                <Phone className="size-4.5" />
                Contact us
              </Link>
            </ul>
          </nav>

          <button className="z-50 block md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="size-7 text-white" />
            ) : (
              <Menu className="size-7 text-white" />
            )}
          </button>
        </div>

        <div
          className={cn(
            "fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-marine-950 text-white flex flex-col items-start gap-6 p-6 pt-30 transition-transform duration-300 md:hidden",
            menuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <ul className="flex flex-col gap-6 uppercase font-bold w-full">
            {links.map((li, idx) => {
              const isActive = activePath === li.href;

              return li.submenu ? (
                <li key={li.label}>
                  <details className="w-full">
                    <summary className="flex items-center justify-between cursor-pointer">
                      {li.label} <ChevronDown className="size-4.5" />
                    </summary>
                    <ul className="mt-2 ml-4 flex flex-col gap-2">
                      {li.submenu.map((sublink) => (
                        <li key={sublink.href}>
                          <Link
                            href={sublink.href}
                            className="block py-1 text-gray-300 hover:text-gold-500"
                            onClick={() => setMenuOpen(false)}
                          >
                            {sublink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={`${li}-${idx}`}>
                  <Link
                    href={li.href}
                    className={cn(
                      "block",
                      isActive ? "text-gold-500 font-black" : "hover:text-gray-400"
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    {li.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                className="flex gap-2 items-center px-4 py-2 bg-gold-500 rounded-lg text-black-950"
                href="/contact"
                onClick={() => setMenuOpen(false)}
              >
                <Phone className="size-4.5" />
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
