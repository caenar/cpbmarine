"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { safetyStandards } from "@/lib/data/safety-standards";

gsap.registerPlugin(ScrollTrigger);

export default function StandardSafetySection() {
  const sectionRef = useRef(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<HTMLLIElement[]>([]);
  const dividerRefs = useRef<HTMLDivElement[]>([]);

  const titleRefs = useRef<HTMLHeadingElement[]>([]);
  const descRefs = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(introRef.current!.children, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "30% 40%",
          end: "80% 30%",
          scrub: true,
        },
      });

      gsap.from(titleRefs.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "30% 40%",
          end: "80% 30%",
          scrub: true,
        },
      });

      gsap.from(descRefs.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "30% 40%",
          end: "80% 30%",
          scrub: true,
        },
      });

      gsap.from(itemRefs.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "30% 40%",
          end: "80% 30%",
          scrub: true,
        },
      });

      dividerRefs.current.forEach((ref) => {
        gsap.from(ref, {
          width: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref,
            start: "20% 40%",
            end: "center 30%",
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
      className="grid grid-cols-2 h-screen px-[20vw] py-32"
      style={{
        background:
          "linear-gradient(-180deg,rgba(0, 0, 0, 1) 0%, rgba(3, 34, 66, 1) 100%)",
      }}
    >
      <div ref={introRef}>
        <h2 className="text-4xl font-bold font-secondary mb-4">Safety Standards</h2>
        <p className="text-foreground-600 leading-relaxed text-balance max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem quaerat
        </p>
      </div>

      <div className="flex flex-col">
        {safetyStandards.slice(3).map((standard, idx) => (
          <React.Fragment key={`safetyStandard-${idx}`}>
            <div>
              <h3
                ref={(el) => {
                  if (el) titleRefs.current.push(el);
                }}
                className="font-bold text-xl text-gold-400"
              >
                {standard.title}
              </h3>{" "}
              <p
                ref={(el) => {
                  if (el) descRefs.current.push(el);
                }}
                className="text-foreground-500 mb-3"
              >
                {standard.description}
              </p>
              <ul className="list-disc pl-5 text-foreground-600 space-y-1">
                {standard.items.map((point, i) => (
                  <li
                    key={i}
                    ref={(el) => {
                      if (el) itemRefs.current.push(el);
                    }}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {safetyStandards.slice(3).length - 1 !== idx && (
              <div
                ref={(el) => {
                  if (el) dividerRefs.current.push(el);
                }}
                className="h-px w-full bg-foreground-950 my-7"
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
