"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { affiliations } from "@/lib/data/affiliations";

gsap.registerPlugin(ScrollTrigger);

export default function AffiliationSection() {
  const affilSectionRef = useRef(null);
  const subTitleRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const dividerRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([subTitleRef.current, titleRef.current], {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: affilSectionRef.current,
          start: "center 70%",
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
          start: "center 70%",
          end: "center 60%",
          scrub: true,
        },
      });

      dividerRefs.current.forEach((el) => {
        gsap.to(el, {
          height: "100%",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: affilSectionRef.current,
            start: "center 70%",
            end: "center 60%",
            scrub: true,
          },
        });
      });
    }, affilSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={affilSectionRef}
      className="flex flex-col bg-black justify-center items-center py-36"
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

      <div className="flex flex-wrap justify-center gap-x-24 gap-y-10 py-10 px-6 w-full max-w-[45vw] mx-auto">
        {affiliations.map((affil, idx) => (
          <div
            key={`affil-${idx}`}
            ref={(el) => {
              if (el) itemsRef.current[idx] = el;
            }}
            className="flex gap-4 items-center max-w-[28ch]"
          >
            <affil.icon
              size={42}
              strokeWidth={1.5}
              className="text-marine-300 shrink-0"
            />
            <h3 className="font-bold text-xl text-marine-300 text-balance">
              {affil.label}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
