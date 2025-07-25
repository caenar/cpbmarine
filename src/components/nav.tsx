"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Phone } from "lucide-react";

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
  { label: "Gallery", href: "/gallery" },
  { label: "Future Prospects", href: "/future-prospects" },
];

export default function Nav() {
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const activePath = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const threshold = window.innerHeight * 0.3;

      if (currentScroll > threshold) {
        if (currentScroll > lastScrollY) {
          setHideNav(true);
        } else {
          setHideNav(false);
        }
      } else {
        setHideNav(false);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        "z-50 fixed w-full flex justify-between items-center py-5 px-12 transition-all duration-500",
        hideNav ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100",
      )}
    >
      <Image
        priority
        src="/logos/landscape_logo.jpg"
        alt="Trident CPB Marine Services Logo"
        width={140}
        height={140}
      />
      <nav>
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
                  isActive && "text-gold-500 font-black",
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
    </div>
  );
}
