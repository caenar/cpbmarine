"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const introRef = useRef<HTMLDivElement | null>(null);

  const sectionRef = useRef(null);
  const missionRef = useRef<HTMLDivElement | null>(null);
  const visionRef = useRef<HTMLDivElement | null>(null);

  const divider1Ref = useRef(null);
  const divider2Ref = useRef(null);
  const dividerRefs = [divider1Ref, divider2Ref];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(introRef.current!.querySelectorAll("h2, p"), {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 80%",
          end: "bottom 70%",
          scrub: true,
        },
      });

      gsap.from(missionRef.current!.querySelectorAll("div, img"), {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 80%",
          end: "bottom 70%",
          scrub: true,
        },
      });

      gsap.from(visionRef.current!.querySelectorAll("div, img"), {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 80%",
          end: "bottom 70%",
          scrub: true,
        },
      });

      dividerRefs.forEach((ref) => {
        gsap.to(ref.current, {
          width: "100%",
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: `top 80%`,
            end: "bottom 70%",
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-start justify-center bg-[rgba(3,_23,_46,_0)] md:pt-36 md:pb-44"
    >
      <div ref={introRef} className="px-[8vw] md:px-[20vw]">
        <h2 className="font-secondary font-bold text-5xl text-balance mb-5">
          Trusted Underwater Solutions Since 2012
        </h2>
        <p className="text-foreground-600 text-lg max-w-prose">
          Trident CBP Marine Service delivers expert underwater services — from
          salvage and welding to scientific surveys — with a commitment to
          quality, affordability, and safety. Proudly serving industries
          nationwide since 2012.
        </p>
      </div>

      <div ref={divider1Ref} className="w-0 h-px bg-marine-700 my-12" />

      <div ref={missionRef} className="grid md:grid-cols-2 gap-15 px-[8vw] md:px-[20vw]">
        <div>
          <Image
            className="rounded-lg object-cover md:h-[400px] md:w-[550px]"
            src="/images/services/uw-cutting/1.png"
            alt="Mission image"
            width={400}
            height={400}
          />
        </div>
        <div>
          <h3 className="font-bold text-md text-gold-400 mb-1">Our Mission</h3>
          <h2 className="font-bold text-3xl mb-5 text-balance md:max-w-lg">
            Affordable and Reliable Marine Expertise, Delivered Safely
          </h2>
          <p className="text-foreground-600 leading-relaxed text-balance md:w-lg">
            At Trident CBP Marine Service, our mission is to deliver
            high-quality underwater services that are accessible and
            cost-effective, without compromising safety. Since 2012, we&apos;ve
            supported marine operations through expert salvage, maintenance,
            construction, and training — always guided by professionalism,
            innovation, and a deep respect for the marine environment.
          </p>
        </div>
      </div>

      <div ref={divider2Ref} className="w-0 h-px bg-marine-700 my-12" />

      <div ref={visionRef} className="grid md:grid-cols-2 gap-15 px-[8vw] md:px-[20vw]">
        <div className="order-2 md:order-1">
          <h3 className="font-bold text-md text-gold-400 mb-1">Our Vision</h3>
          <h2 className="font-bold text-3xl mb-5 text-balance md:max-w-lg">
            Setting the Standard for Safe and Affordable Underwater Solutions
          </h2>
          <p className="text-foreground-600 leading-relaxed text-balance md:w-lg">
            To be the Philippines’ leading partner in reliable, affordable, and
            safe underwater solutions — trusted by industries and institutions
            for our commitment to service excellence and operational integrity.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <Image
            className="rounded-lg md:h-[400px] md:w-[550px] object-cover"
            src="/images/services/port-maintenance/maintenance-1.JPG"
            alt="Mission image"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
