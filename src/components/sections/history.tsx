import { timeline } from "@/lib/data/timeline";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Carousel from "../carousel";

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
      gsap.from(titleRef.current!.querySelectorAll("span, h2"), {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "center 70%",
          end: "bottom 60%",
          scrub: true,
        },
      });

      gsap.from(founderRef.current!.querySelectorAll("div, h3, p"), {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: founderRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      });

      gsap.to(dividerRef.current, {
        width: "100%",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: founderRef.current,
          start: "top 70%",
          end: "bottom 60%",
          scrub: true,
        },
      });

      gsap.to(timelineLineRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: timelineSectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      timelineWrappersRef.current.forEach((wrapper) => {
        const date = wrapper.querySelector(".timeline-date");
        const content = wrapper.querySelector(".timeline-content");
        const dot = wrapper.querySelector(".timeline-dot");

        gsap.from([date, content], {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: wrapper,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
        });

        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: wrapper,
                start: "top 80%",
                end: "top 50%",
                scrub: true,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const images = [
    "/images/team/1.webp",
    "/images/team/2.webp",
    "/images/team/3.webp",
    "/images/team/4.webp",
    "/images/team/5.webp",
    "/images/team/6.webp",
    "/images/team/7.webp",
  ];

  return (
    <section
      ref={sectionRef}
      className="py-32 flex flex-col"
      style={{
        background:
          "linear-gradient(0deg,rgba(0, 0, 0, 1) 0%, rgba(3, 23, 46, 0) 100%)",
      }}
    >
      <div ref={titleRef} className="px-[8vw] md:px-[20vw]">
        <span className="uppercase text-3xl text-foreground-600">
          The History
        </span>
        <h2 className="text-6xl md:text-7xl max-w-3xl font-secondary uppercase font-black text-balance">
          Conrado Paz Marine Trident Salvage
        </h2>
      </div>

      <div ref={dividerRef} className="w-0 h-px bg-marine-700 my-12"></div>

      <div
        ref={founderRef}
        className="flex flex-col md:flex-row items-center gap-10 px-[8vw] md:px-[20vw] mb-32"
      >
        <div className="w-full md:w-[600px]">
          <Carousel height={400} images={images} className="rounded-lg" />
        </div>
        <div>
          <h3 className="text-3xl max-w-lg text-balance mb-10">
            &quot;We started with equipment and passion — now we&apos;re shaping
            the future of underwater services in the Philippines.&quot;
          </h3>
          <p className="font-bold">Conrado Paz</p>
          <p className="text-foreground-400">Founder, CBP Marine Solutions</p>
        </div>
      </div>

      <div ref={timelineSectionRef} className="relative flex flex-col gap-12 w-full max-w-4xl mx-auto px-4 md:px-0">
        {/* vertical line */}
        <div
          ref={timelineLineRef}
          className="absolute left-4 -ml-[1px] md:left-1/2 md:-ml-[1px] w-[2px] bg-foreground-800 h-0"
        />

        {/* items */}
        {timeline.map((item, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={idx}
              ref={(el) => {
                if (el) timelineWrappersRef.current[idx] = el;
              }}
              className={cn(
                "relative flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-4 md:gap-0",
                isEven ? "" : "md:flex-row-reverse"
              )}
            >
              {/* Date Column */}
              <div className={cn(
                "timeline-date w-full md:w-[calc(50%-2rem)] flex md:block pl-10 md:pl-0",
                isEven ? "md:text-right" : "md:text-left"
              )}>
                <h4 className="font-secondary font-bold text-white text-lg md:text-xl">
                  {item.date}
                </h4>
              </div>

              {/* Dot Column */}
              <div className="timeline-dot absolute left-4 -ml-2 md:left-1/2 md:-ml-2.5 w-4 h-4 md:w-5 md:h-5 z-10 flex items-center justify-center">
                <div className="bg-gold-500 rounded-full h-full w-full border-4 md:border-6 border-[rgba(3,_34,_66,_1)]" />
              </div>

              {/* Content Card Column */}
              <div className="timeline-content w-full md:w-[calc(50%-2rem)] pl-10 md:pl-0">
                <div className={cn(
                  "bg-foreground-100 py-4 px-6 rounded-lg shadow-md",
                  isEven ? "md:mr-auto" : "md:ml-auto"
                )}>
                  <h4 className="font-bold font-secondary text-lg md:text-xl text-marine-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-foreground-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
