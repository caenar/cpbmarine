"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";

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
  const activePath = usePathname();

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

  return (
    <div
      className={cn(
        "z-50 w-full fixed flex justify-between items-center py-5 px-6 md:px-12 transition-all duration-500",
        hideNav ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100",
        hideShadow ? "md:bg-marine-950" : "bg-transparent"
      )}
    >
      <Link href="/">
        <Image
          priority
          src="/logos/landscape_logo.jpg"
          alt="Trident CPB Marine Services Logo"
          className="md:relative md:top-auto sm:absolute top-5"
          width={140}
          height={140}
        />
      </Link>

      <nav className="hidden md:block">
        <ul className="flex gap-10 items-center uppercase font-bold">
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

      <button
        className="md:hidden absolute z-50 right-5 top-7"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <X className="size-7 text-white" />
        ) : (
          <Menu className="size-7 text-white" />
        )}
      </button>

      <div
        className={cn(
          "fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-marine-950 text-white flex flex-col items-start gap-6 p-6 pt-20 transition-transform duration-300 md:hidden",
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
  );
}
