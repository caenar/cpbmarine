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
  const conradRef = useRef(null);
  const pazRef = useRef(null);
  const marineRef = useRef(null);
  const servicesRef = useRef(null);
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

      const textRefs = [
        conradRef.current,
        pazRef.current,
        marineRef.current,
        servicesRef.current,
      ];

      tl.to(textRefs, {
        translateY: "100vh",
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: "power2.out",
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
      <header ref={headerRef} className="relative flex justify-center">
        <div
          className="absolute inset-0 pointer-events-none z-2"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 60%, var(--color-marine-900))",
            mixBlendMode: "multiply",
          }}
        />

        <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-[var(--color-marine-900)] via-transparent to-transparent pointer-events-none z-2" />

        <div className="absolute top-0 w-full h-64 bg-gradient-to-b from-marine-950 via-marine-950/70 to-transparent pointer-events-none z-3" />

        <motion.div
          animate={{ translateX: [0, 5, -5, 0], translateY: [0, -5, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="absolute h-screen w-full flex justify-center items-center overflow-hidden z-1"
        >
          <Image
            className="pointer-events-none select-none max-w-none"
            src="/images/underwater_guy.png"
            alt="Picture of a diver"
            width={1200}
            height={1200}
            style={{ translate: "-8vw 6vh" }}
          />
        </motion.div>

        <div
          ref={containerRef}
          className="absolute h-full w-full grid grid-cols-8 grid-rows-9 px-10"
        >
          <span
            ref={conradRef}
            className="font-bold font-secondary text-[clamp(4rem,9vw,15rem)] leading-[0.7] row-start-3 col-span-3"
          >
            CONRAD
          </span>
          <span
            ref={pazRef}
            className="font-bold font-secondary text-[clamp(4rem,9vw,15rem)] leading-[0.7] row-start-4 col-start-6 col-span-3 text-right"
          >
            PAZ
          </span>
          <span
            ref={marineRef}
            className="font-bold font-secondary text-[clamp(4rem,9vw,15rem)] leading-[0.7] row-start-6 col-span-3"
          >
            MARINE
          </span>
          <span
            ref={servicesRef}
            className="font-bold font-secondary text-[clamp(4rem,9vw,15rem)] leading-[0.7] row-start-7 col-start-5 col-span-4 text-right"
          >
            SERVICES
          </span>
        </div>

        {/* background */}
        <div className="min-h-screen w-full bg-[url(/images/underwater_bg2.png)] bg-no-repeat bg-cover"></div>
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
