"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CtaSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "90% 60%",
          end: "bottom 40%",
          scrub: true,
        },
      });

      gsap.from(paragraphRef.current, {
        opacity: 0,
        y: 40,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "90% 60%",
          end: "bottom 40%",
          scrub: true,
        },
      });

      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 40,
        ease: "power2.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "90% 60%",
          end: "bottom 50%",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col justify-center items-center py-52 px-[18vw] text-foreground-100 text-center"
      style={{
        background:
          "linear-gradient(0deg,rgba(1, 13, 26, 1) 0%, rgba(3, 34, 66, 1) 100%)",
      }}
    >
      <h2
        ref={headingRef}
        className="text-6xl font-secondary font-bold mb-6 text-balance"
      >
        Ready to work with us?
      </h2>
      <p
        ref={paragraphRef}
        className="text-foreground-600 text-lg mb-10 max-w-2xl mx-auto"
      >
        Whether it&apos;s underwater inspection, marine repairs, or subsea engineering —
        our team is equipped and ready to dive into your needs. Let&apos;s make waves
        together.
      </p>

      <Link
        ref={buttonRef}
        href="/contact"
        className="flex gap-2 w-fit items-center bg-gold-500 hover:bg-gold-600 text-marine-950 font-bold py-2.5 px-5 rounded-md shadow transition duration-200"
      >
        Get In Touch
        <ArrowRight size={20} />
      </Link>
    </section>
  );
}
