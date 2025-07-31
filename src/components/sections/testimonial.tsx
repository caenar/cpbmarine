import { testimonials as clients } from "@/lib/data/testimonials";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialSection() {
  const testSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(testSectionRef.current!.querySelectorAll("div, h2, p"), {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: testSectionRef.current,
          start: "20% 40%",
          end: "80% 30%",
          scrub: true,
        },
      });

      const listItems = testSectionRef.current!.querySelectorAll("ul li");
      gsap.from(listItems, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: testSectionRef.current,
          start: "80% 70%",
          end: "bottom 60%",
          scrub: true,
        },
      });
    }, testSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={testSectionRef}
      className="flex flex-col bg-[rgba(3,_34,_66,_1)] py-36 px-[22vw] justify-center items-center"
    >
      <div className="max-w-prose mb-18">
        <h2 className="text-marine-100 font-bold font-secondary text-7xl text-center mb-5 text-balance">
          Companies we&apos;ve worked with
        </h2>
        <p className="text-gray-300 text-center">
          These are just some of the organizations and institutions that have
          trusted Trident CBP Marine Services through the years.
        </p>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-white text-lg font-medium">
        {clients.map((c, i) => (
          <li
            key={i}
            className="bg-marine-900 p-4 text-balance font-secondary font-semibold text-xl rounded-lg border border-marine-700"
          >
            {c.name}
          </li>
        ))}
      </ul>{" "}
    </section>
  );
}
