"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const images = [
  "/images/resources/office/1.JPG",
  "/images/resources/office/2.JPG",
];

export default function Carousel() {
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const interval = setInterval(() => {
        const next = (current + 1) % images.length;

        gsap.to(slidesRef.current[current], {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });

        gsap.to(slidesRef.current[next], {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        });

        setCurrent(next);
      }, 4000);

      return () => clearInterval(interval);
    });

    return () => ctx.revert();
  }, [current]);

  return (
    <div className="relative w-screen h-[100vw] md:h-screen overflow-hidden">
      {images.map((src, i) => (
        <div
          key={i}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ref={(el: any) => el && (slidesRef.current[i] = el)}
          className="absolute inset-0 w-full h-full transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === 0 ? 1 : 0,
          }}
        />
      ))}

      <div className="absolute bottom-5 right-5 flex gap-2 z-10">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-white scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
