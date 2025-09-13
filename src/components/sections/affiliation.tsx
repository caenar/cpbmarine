"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { affiliations } from "@/lib/data/affiliations";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AffiliationSection() {
  const affilSectionRef = useRef(null);
  const subTitleRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([subTitleRef.current, titleRef.current], {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: affilSectionRef.current,
          start: "top 70%",
          end: "center 60%",
          scrub: true,
        },
      });

      gsap.from(itemsRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: affilSectionRef.current,
          start: "10% 70%",
          end: "center 60%",
          scrub: true,
        },
      });
    }, affilSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={affilSectionRef}
      className="flex flex-col bg-black justify-center items-left md:items-center py-36 px-[8vw] md:px-0"
    >
      <h3
        ref={subTitleRef}
        className="font-secondary text-xl uppercase font-bold text-marine-100 mb-4"
      >
        Licenses & Certifications
      </h3>
      <h2 ref={titleRef} className="font-bold text-3xl mb-6">
        Recognized by National and International Authorities
      </h2>

      <div className="flex flex-wrap md:justify-center gap-x-24 gap-y-10 py-10 md:px-6 w-full md:max-w-[50vw] md:mx-auto">
        {affiliations.map((affil, idx) => (
          <div
            key={`affil-${idx}`}
            ref={(el) => {
              if (el) itemsRef.current[idx] = el;
            }}
            className="flex gap-4 items-center"
          >
            <div className="h-[70px]">
              <Image
                src={affil.from}
                width={1500}
                height={1500}
                alt={`Image of ${affil.label}`}
                className="text-marine-300 shrink-0 w-full h-full object-fit"
              />
            </div>
            <h3 className="font-bold text-xl text-marine-300 text-balance leading-[1]">
              {affil.label}
              {affil.subLabel && (
                <>
                  <br />
                  <span className="uppercase text-sm text-foreground-800">{affil.subLabel}</span>
                </>
              )}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
