"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { safetyStandards } from "@/lib/data/safety-standards";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function StandardSafetySection() {
  const sectionRef = useRef(null);
  const introRef = useRef<HTMLDivElement | null>(null);

  const mainSectionRef = useRef<HTMLDivElement | null>(null);
  const itemContainersRef = useRef<HTMLDivElement[]>([]);

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
          start: "top 30%",
          end: "bottom 20%",
          scrub: true,
        },
      });

      gsap.to(mainSectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      itemContainersRef.current.forEach((item, idx) => {
        const text = item.querySelector(".text");
        const img = item.querySelector(".placeholder");
        if (!img) return;

        gsap.to(text, {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: `${100 + idx * 30}% center`,
            end: `${100 + idx * 30}% 10%`,
            scrub: true,
          },
        });

        ScrollTrigger.create({
          trigger: item,
          start: `${50 + idx * 30}% center`,
          end: `${100 + idx * 30}% 30%`,

          onEnter: () => {
            gsap.set(img, { display: "block" });
          },
          onUpdate: (self) => {
            const progress = self.progress ?? 0;
            const height = 1 + progress * 340;
            gsap.set(img, {
              height,
              opacity: 1 + progress,
            });
          },
        });

        ScrollTrigger.create({
          trigger: item,
          start: `${230 + idx * 30}% center`,
          end: `${230 + idx * 30}% 30%`,
          scrub: true,

          onUpdate: (self) => {
            const progress = self.progress ?? 0;
            const height = (1 - progress) * 340;
            gsap.set(img, {
              height,
              opacity: 1 - progress,
            });
          },
          onLeave: () => {
            gsap.set(img, { display: "none" });
          },
          onEnterBack: () => {
            gsap.set(img, {
              display: "block",
              opacity: 0,
            });
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
      className="grid grid-cols-2 px-[20vw] py-32"
      style={{
        background:
          "linear-gradient(-180deg,rgba(0, 0, 0, 1) 0%, rgba(3, 34, 66, 1) 100%)",
      }}
    >
      <div ref={introRef} className="h-full">
        <h2 className="text-4xl font-bold font-secondary mb-4">
          Safety Standards
        </h2>
        <p className="text-foreground-600 leading-relaxed text-balance max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          voluptatem quaerat
        </p>
      </div>

      <div ref={mainSectionRef} className="flex flex-col">
        {safetyStandards.map((standard, idx) => (
          <div
            ref={(el) => {
              if (el) itemContainersRef.current[idx] = el;
            }}
            key={idx}
            className="relative"
          >
            <div className="placeholder hidden w-full opacity-0">
              <Image
                src={standard.img}
                alt={"Image of standard item"}
                width={1500}
                height={1500}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="text text-white p-6 z-10 opacity-0">
              <h3 className="text-xl font-bold text-gold-400 mb-2">
                {standard.title}
              </h3>
              <p className="text-foreground-500 mb-3">{standard.description}</p>
              <ul className="list-disc pl-5 text-foreground-600 space-y-1">
                {standard.items.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
