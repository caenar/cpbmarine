"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { affiliations } from "@/lib/data/affiliations";

gsap.registerPlugin(ScrollTrigger);

export default function AffiliationSection() {
  const affilSectionRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const dividerRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: affilSectionRef.current,
          start: "50% center",
          end: "center 10%",
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
          start: "50% center",
          end: "center 10%",
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
            start: "50% center",
            end: "center 10%",
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
      className="flex flex-col bg-black justify-center items-center py-32 h-[10vh]"
    >
      <h2
        ref={titleRef}
        className="font-secondary text-xl uppercase font-bold text-marine-100"
      >
        Our Affiliates
      </h2>

      <div className="flex flex-wrap py-10 px-6">
        {affiliations.map((affil, idx) => (
          <React.Fragment key={`affiliate-${idx}`}>
            <div
              ref={(el) => {
                if (el) itemsRef.current[idx] = el;
              }}
              className="flex gap-5 items-center max-w-[28ch]"
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

            {affiliations.length - 1 !== idx && (
              <div
                ref={(el) => {
                  if (el) dividerRefs.current[idx] = el;
                }}
                className="h-0 w-px bg-foreground-950 mx-10"
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
