"use client";
import Image from "next/image";
import { motion } from "motion/react";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const conradRef = useRef(null);
  const pazRef = useRef(null);
  const marineRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "30% 30%",
          end: "+=100%",
          scrub: true,
        },
      });

      tl.to(conradRef.current, {
        translateX: "30vw",
        translateY: "98vh",
        zIndex: 10,
        duration: 0.5,
      })
        .to(
          pazRef.current,
          {
            translateX: "-30vw",
            translateY: "100vh",
            zIndex: 10,
            duration: 0.5,
          },
          "<"
        )
        .to(
          marineRef.current,
          {
            translateX: "40vw",
            translateY: "102vh",
            zIndex: 10,
            duration: 0.5,
          },
          "<"
        )
        .to(
          servicesRef.current,
          {
            translateX: "-10vw",
            translateY: "104vh",
            zIndex: 10,
            duration: 0.5,
          },
          "<"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main>
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
            width={1250}
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

      <section className="h-screen"></section>

      <section
        className="flex flex-col items-start justify-center bg-marine-900 py-32"
        style={{
          background:
            "linear-gradient(0deg,rgba(0, 0, 0, 1) 0%, rgba(3, 23, 46, 0) 100%)",
        }}
      >
        <div className="px-[22vw]">
          <h2 className="font-secondary font-bold text-5xl text-balance mb-5">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="text-foreground-600 text-lg max-w-prose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, qui?
            Dignissimos ducimus necessitatibus?
          </p>
        </div>

        <div className="w-full h-px bg-marine-700 my-12"></div>

        <div className="flex gap-7 px-[22vw]">
          <div>
            <Image
              className="rounded-lg w-full object-cover"
              src="/images/vision.jpg"
              alt="Mission image"
              width={450}
              height={450}
            />
          </div>
          <div>
            <h3 className="font-bold text-md text-gold-400 mb-1">Our Mission</h3>
            <h2 className="font-bold text-3xl mb-5">Lorem ipsum dolor sit consectetur</h2>
            <p className="text-foreground-600 leading-relaxed max-w-prose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquid iure
              maxime, beata accusantium nobis dicta. Officiis, earum tenetur voluptatum
              explicabo consectetur labore!
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-marine-700 my-12"></div>

        <div className="flex gap-7 px-[22vw]">
          <div>
            <h3 className="font-bold text-md text-gold-400 mb-1">Our Vision</h3>
            <h2 className="font-bold text-3xl mb-5">Lorem ipsum dolor sit amet</h2>
            <p className="text-foreground-600 leading-relaxed text-balance max-w-prose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem
              quaerat asperiores molestias deserunt hic sint nisi dolor aliquam aspernatur
              molestiae a, quia qui impedit soluta tempora?
            </p>
          </div>
          <div>
            <Image
              className="rounded-lg w-full object-cover"
              src="/images/mission.jpg"
              alt="Mission image"
              width={450}
              height={450}
            />
          </div>
        </div>
      </section>

      <section>
        
      </section>

      <section className="h-screen bg-black"></section>
    </main>
  );
}
