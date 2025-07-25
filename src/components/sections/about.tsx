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
          start: "top 60%",
          end: "bottom 50%",
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
          start: "top 60%",
          end: "bottom 50%",
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
          start: "top 60%",
          end: "bottom 50%",
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
            start: `top 60%`,
            end: "bottom 30%",
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-start justify-center bg-marine-900 py-32"
      style={{
        background:
          "linear-gradient(0deg,rgba(0, 0, 0, 1) 0%, rgba(3, 23, 46, 0) 100%)",
      }}
    >
      <div ref={introRef} className="px-[20vw]">
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

      <div ref={missionRef} className="flex gap-7 px-[20vw]">
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
          <h2 className="font-bold text-3xl mb-5 text-balance max-w-prose">
            Affordable and Reliable Marine Expertise, Delivered Safely
          </h2>
          <p className="text-foreground-600 leading-relaxed text-balance w-lg">
            At Trident CBP Marine Service, our mission is to deliver
            high-quality underwater services that are accessible and
            cost-effective, without compromising safety. Since 2012, we've
            supported marine operations through expert salvage, maintenance,
            construction, and training — always guided by professionalism,
            innovation, and a deep respect for the marine environment.
          </p>
        </div>
      </div>

      <div ref={divider2Ref} className="w-0 h-px bg-marine-700 my-12" />

      <div ref={visionRef} className="flex gap-7 px-[20vw]">
        <div>
          <h3 className="font-bold text-md text-gold-400 mb-1">Our Vision</h3>
          <h2 className="font-bold text-3xl mb-5 text-balance max-w-prose">
            Setting the Standard for Safe and Affordable Underwater Solutions
          </h2>
          <p className="text-foreground-600 leading-relaxed text-balance w-lg">
            To be the Philippines’ leading partner in reliable, affordable, and
            safe underwater solutions — trusted by industries and institutions
            for our commitment to service excellence and operational integrity.
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
  );
}
