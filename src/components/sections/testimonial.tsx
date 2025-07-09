import { testimonials } from "@/lib/data/testimonials";
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
          start: "center 40%",
          end: "80% 30%",
          scrub: true,
        },
      });
    }, testSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={testSectionRef}
      className="flex flex-col bg-black h-screen px-[22vw] justify-center items-center"
    >
      <div className="max-w-[75ch] mb-18">
        <h2 className="text-marine-100 font-bold font-secondary text-7xl text-center mb-5 text-balance">
          What they say about us
        </h2>
        <p className="text-gray-300 text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe eius provident,
          officia laudantium similique consequuntur itaque accusantium nemo fugit.
        </p>
      </div>

      <div className="grid grid-rows-2 gap-6">
        {[0, 1].map((row) => {
          const rowTestimonials = testimonials.filter((_, i) => i % 2 === row);

          return (
            <div key={`${row}`} className="relative w-[65vw] overflow-hidden">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-50 bg-gradient-to-r from-black to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-50 bg-gradient-to-l from-black to-transparent z-10" />

              <div
                className={`
          flex gap-6 w-max animate-marquee-left
          ${row === 1 ? "animate-delay-15s" : ""}
        `}
              >
                {[...rowTestimonials, ...rowTestimonials].map((t, idx) => (
                  <div
                    key={`${row}-${idx}`}
                    className="flex flex-col justify-between border border-black-800 bg-black-950 w-sm h-[180px] rounded-lg p-5 min-w-[300px]"
                  >
                    <h3 className="text-md leading-snug text-balance">{t.quote}</h3>
                    <div className="flex justify-between items-center mt-4">
                      <div>
                        <h4 className="font-medium text-sm">{t.name}</h4>
                        <p className="text-gray-400 text-sm">{t.position}</p>
                      </div>
                      <div className="flex justify-center items-center rounded-full h-10 w-10 bg-marine-500">
                        <span className="text-sm">{t.initials}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
