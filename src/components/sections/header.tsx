"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeaderSection() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const diverRef2 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "40% 30%",
          end: "+=150%",
          scrub: true,
        },
      });

      tl.to(
        diverRef2.current,
        {
          translateY: "30vh",
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "<+0.5",
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="relative flex justify-center min-h-screen"
      >
        <div className="grid p-12 grid-cols-4 grid-rows-5 items-center w-full font-secondary">
          <span className="row-start-2 col-start-2 text-right justify-self-start uppercase font-bold text-5xl leading-[1]">
            Golden <br />
            Trident <br /> Salvage
          </span>
          <span className="justify row-start-4 col-start-3 justify-self-end uppercase font-bold text-5xl leading-[1]">
            Conrado <br /> Paz Marine <br /> Services
          </span>
        </div>
      </header>

      <section className="flex justify-center items-center h-screen">
        <div ref={diverRef2}>
          <Image
            src="/images/asset1_rah.png"
            alt="Picture of scuba diver"
            width={1100}
            height={1100}
            className="mb-5 -translate-x-1/4 translate-y-[5vh] z-5"
          />
        </div>
      </section>
    </>
  );
}
