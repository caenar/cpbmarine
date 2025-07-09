import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-marine-950 text-foreground-600 py-16 px-[18vw]">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
        <div className="max-w-md">
          <Image
            src="/logos/landscape_logo.jpg"
            alt="Conrad Paz Marine Services Logo"
            width={180}
            height={60}
            className="mb-5"
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam corporis
            rerum dolorum libero quis explicabo sapiente voluptatem enim, harum fugiat!
          </p>
        </div>

        <div className="flex gap-32 flex-wrap">
          <div>
            <h4 className="font-bold text-foreground-100 mb-3">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gold-500">
                  Home
                </Link>
              </li>
              <li>
                <a href="/services" className="hover:text-gold-500">
                  Services
                </a>
              </li>
              <li>
                <a href="/facilities" className="hover:text-gold-500">
                  Facilities
                </a>
              </li>
              <li>
                <a href="/equipment" className="hover:text-gold-500">
                  Equipment
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-gold-500">
                  Gallery
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground-100 mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="/future-prospects" className="hover:text-gold-500">
                  Future Prospects
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gold-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gold-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="/safety" className="hover:text-gold-500">
                  Safety Standards
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-foreground-100 mb-3">Contact</h4>
          <p className="mb-2">Freeport Zone, Philippines</p>
          <p className="mb-2">help@cbpmarine.ph</p>
          <p>+63 912 345 6789</p>
        </div>
      </div>

      <div className="border-t border-marine-800 pt-6 text-sm text-center">
        <p>
          &copy; {new Date().getFullYear()} Trident CPB Marine Services. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
