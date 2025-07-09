"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { safetyStandards } from "@/lib/data/safety-standards";

gsap.registerPlugin(ScrollTrigger);

export default function StandardSafetySection() {
  const sectionRef = useRef(null);
  const introRef = useRef<HTMLDivElement | null>(null);

  const mainSectionRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

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

      itemsRef.current.forEach((img) => {
        ScrollTrigger.create({
          trigger: img.parentElement,
          start: "top 40%",
          end: "bottom 30%",
          scrub: true,
          markers: true,

          onUpdate(self) {
            const progress = self.progress ?? 0;
            const height = (1 - progress) * 300;
            gsap.set(img, { height: `${height}px` });
          },

          onLeave() {
            gsap.set(img, { display: "none" });
          },

          onEnterBack() {
            gsap.set(img, { display: "block" });
          },
        });
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="sticky grid grid-cols-2 px-[20vw] py-32"
      style={{
        background:
          "linear-gradient(-180deg,rgba(0, 0, 0, 1) 0%, rgba(3, 34, 66, 1) 100%)",
      }}
    >
      <div ref={introRef}>
        <h2 className="text-4xl font-bold font-secondary mb-4">
          Safety Standards
        </h2>
        <p className="text-foreground-600 leading-relaxed text-balance max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          voluptatem quaerat
        </p>
      </div>

      <div ref={mainSectionRef} className="flex flex-col">
        {Array.from({ length: 5 }).map((_, idx) => (
          <div key={idx} className="relative">
            {/* Placeholder visual block */}
            <div
              ref={(el) => {
                if (el) itemsRef.current[idx] = el;
              }}
              className="placeholder h-[300px] w-full bg-white"
            />

            {/* Sticky text block */}
            <div
              className="bg-black text-white p-6 z-10 rounded shadow"
              style={{ top: `${5 + idx * 5}vh` }} // stacking effect
            >
              <h3 className="text-xl font-bold text-gold-400 mb-2">
                Section {idx + 1}
              </h3>
              <p className="text-foreground-500 mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <ul className="list-disc pl-5 text-foreground-600 space-y-1">
                <li>Point 1</li>
                <li>Point 2</li>
                <li>Point 3</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
