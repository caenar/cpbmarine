"use client";

import { services } from "@/lib/data/services";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main>
      <section className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/gov-training/training.JPG"
            alt="Underwater service background"
            fill
            className="object-cover brightness-[0.35]"
            priority
          />
        </div>

        <div className="z-10 text-center px-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-secondary font-bold text-balance mb-6">
            Commercial Diving Services You Can Trust
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            From underwater construction to salvage and inspections, our
            certified team delivers precise, safe, and cost-effective marine
            solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold-500 hover:bg-gold-400 transition-colors font-bold text-black py-3 px-6 rounded-lg text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <section className="bg-foreground-100 pt-22 py-38">
        <div className="px-[20vw] mb-20">
          <h1 className="text-6xl font-bold font-secondary text-marine-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-foreground-700 max-w-prose leading-relaxed">
            Trident CBP Marine Services offers a wide range of underwater and
            marine solutions, designed to meet the demands of both public and
            private marine infrastructure projects across the Philippines.
          </p>
        </div>

        <div className="px-[10vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <div key={i} className="flex flex-col overflow-hidden bg-marine-50">
              <div className="h-[500px] w-full bg-gray-300">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="py-5 flex flex-col">
                <span className="text-gold-700 font-bold mb-1">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="text-2xl font-bold font-secondary text-marine-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-foreground-700 mb-4 leading-relaxed flex-grow">
                  {service.desc}
                </p>

                <div className="border-t border-marine-200 my-4" />

                <button className="font-bold text-marine-950 hover:underline self-start flex items-center gap-2 cursor-pointer">
                  Learn more <ArrowRight className="text-marine-400 size-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
