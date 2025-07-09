"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Facilities", href: "/facilities" },
  { label: "Equipment", href: "/equipment" },
  { label: "Gallery", href: "/gallery" },
  { label: "Future Prospects", href: "/future-prospects" },
];

export default function Nav() {
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

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
        "z-50 fixed w-full flex justify-between items-center py-6 px-16 transition-all duration-500",
        hideNav ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      )}
    >
      <Image
        priority
        src="/logos/landscape_logo.jpg"
        alt="Trident CPB Marine Services Logo"
        width={160}
        height={160}
      />
      <nav>
        <ul className="flex gap-15 items-center font-bold font-secondary">
          {links.map((li, idx) => {
            // const isActive = activePath === li.href;

            return (
              <Link key={`${li}-${idx}`} href={li.href}>
                <li>{li.label}</li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
