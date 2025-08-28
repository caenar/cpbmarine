"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
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
    <React.Fragment>
      <header
        ref={headerRef}
        className="rah relative overflow-hidden flex justify-center min-h-screen"
      >
        <div className="z-25 flex flex-col absolute gap-7 bottom-30 right-30 text-right">
          <h1 className="font-black text-white text-9xl leading-[0.85]">
            <span className="text-gold-600">GOLDEN</span>
            {/* GOLDEN */}
            <br />
            TRIDENT
            <br />
            SALVAGE
          </h1>

          <div className="h-[2px] w-full bg-gray-100 opacity-15"></div>

          <h2 className="font-secondary font-bold text-white/40 text-4xl">
            CONRADO PAZ MARINE SERVICES
          </h2>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#03172ec5] via-transparent to-[#03172e] pointer-events-none z-2" />

        <div className="absolute min-h-screen w-full bg-[url('/images/services/welding/diver.png')] bg-cover bg-right bg-no-repeat"></div>

        <div className="absolute bottom-0 left-0 w-full h-full z-20 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-[#01142e] to-transparent" />
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
    </React.Fragment>
  );
}
