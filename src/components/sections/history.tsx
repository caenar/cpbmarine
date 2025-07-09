import Image from "next/image";
import { timeline } from "@/lib/data/timeline";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HistorySection() {
  const sectionRef = useRef(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const founderRef = useRef<HTMLDivElement | null>(null);
  const dividerRef = useRef(null);
  const timelineLineRef = useRef<HTMLDivElement | null>(null);
  const timelineWrappersRef = useRef<HTMLDivElement[]>([]);
  const timelineSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "50% 40%",
          end: "bottom 20%",
          scrub: true,
        },
      });

      gsap.from(founderRef.current!.querySelectorAll("img, h3, p"), {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: founderRef.current,
          start: "50% 40%",
          end: "bottom 20%",
          scrub: true,
        },
      });

      gsap.to(dividerRef.current, {
        width: "100%",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: founderRef.current,
          start: "top 40%",
          end: "bottom 20%",
          scrub: true,
        },
      });

      gsap.to(timelineLineRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: timelineSectionRef.current,
          start: "center 40%",
          end: "bottom 20%",
          scrub: true,
        },
      });

      timelineWrappersRef.current.forEach((wrapper) => {
        const targets = wrapper.querySelectorAll("div, h4, p");

        gsap.from(targets, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.5,
          scrollTrigger: {
            trigger: timelineSectionRef.current,
            start: "20% 40%",
            end: "80% 35%",
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[rgba(3,_34,_66,_1)] py-32">
      <div className="px-[18vw]">
        <h2 ref={titleRef} className="text-7xl font-secondary font-black text-balance">
          The History of Conrad Paz Marine Solutions
        </h2>
      </div>

      <div ref={dividerRef} className="w-0 h-px bg-marine-700 my-12"></div>

      <div ref={founderRef} className="flex items-center gap-10 px-[18vw] mb-32">
        <Image
          className="rounded-lg h-[300px] w-[500px] object-cover"
          src="/images/founder.jpg"
          alt="Mission image"
          width={2000}
          height={2000}
        />
        <div>
          <h3 className="text-3xl max-w-lg text-balance mb-10">
            &quot;Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quo
            laboriosam voluptatem veritatis voluptates aspernatur&quot;
          </h3>
          <p className="font-bold">Conrad Paz</p>
          <p className="text-foreground-400">Founder, CBP Marine Solutions</p>
        </div>
      </div>

      <div
        ref={timelineSectionRef}
        className="flex flex-col gap-30 relative bg-[rgba(3,_34,_66,_1)]"
      >
        <div
          ref={timelineLineRef}
          className="absolute left-1/2 transform -translate-x-1/2 h-0 w-[1.5px] bg-marine-800"
        />

        {timeline.map((item, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={idx}
              ref={(el) => {
                if (el) timelineWrappersRef.current[idx] = el;
              }}
              className={`relative flex items-start justify-center gap-5 overflow-hidden ${
                isEven ? "flex-row pl-[9.1vw]" : "flex-row-reverse pr-[9.1vw]"
              }`}
            >
              <div
                className={cn(
                  "w-[150px] pr-4 shrink-0",
                  isEven ? "text-right" : "text-left"
                )}
              >
                <h4 className="font-secondary font-bold text-white">{item.date}</h4>
              </div>

              <div className="relative z-10 shrink-0">
                <div className="bg-gold-500 rounded-full h-5 w-5 border-6 border-[rgba(3,_34,_66,_1)]" />
              </div>

              <div className="bg-foreground-100 py-4 px-6 rounded shadow-lg max-w-xs">
                <h4 className="font-bold font-secondary text-xl text-marine-800 mb-1">
                  {item.title}
                </h4>
                <p className="text-foreground-600 text-sm">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
