import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Facilities", href: "/facilities" },
  { label: "Equipment", href: "/equipment" },
  { label: "Gallery", href: "/gallery" },
  { label: "Future Prospects", href: "/future-prospects" },
];

export default function Nav() {
  const activePath = usePathname();

  return (
    <div className="flex justify-between items-center py-6 px-16">
      <Image
        priority
        src="/logos/landscape_logo.jpg"
        alt="Trident CPB Marine Services Logo"
        width={160}
        height={160}
      />
      <nav>
        <ul className="flex gap-15 items-center font-bold font-secondary">
          {links.map((li, idx) => (
            <Link key={`${li}-${idx}`} href={li.href}>
              <li>{li.label}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}
