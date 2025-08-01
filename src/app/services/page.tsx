"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="bg-white text-black px-[18vw] py-24">
      <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/placeholder-services.jpg"
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

      <section className="mb-20">
        <h1 className="text-6xl font-bold font-secondary text-marine-900 mb-4">
          Our Services
        </h1>
        <p className="text-lg text-foreground-600 max-w-prose leading-relaxed">
          Trident CBP Marine Services offers a wide range of underwater and
          marine solutions, designed to meet the demands of both public and
          private marine infrastructure projects across the Philippines.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {[
          {
            title: "Underwater Inspection & Survey",
            desc: "Comprehensive structural integrity checks using advanced imaging and monitoring equipment.",
          },
          {
            title: "Surface-Supplied Air Diving",
            desc: "Safe, surface-monitored diving using Kirby Morgan band masks, CCTV, and two-way comms.",
          },
          {
            title: "Marine Salvage & Recovery",
            desc: "Refloating sunken equipment, barge retrieval, and shipwreck handling with expert teams.",
          },
          {
            title: "Pier Maintenance & Construction",
            desc: "Support for marine infrastructure projects through underwater welding, drilling, and repairs.",
          },
          {
            title: "Environmental Marine Surveys",
            desc: "Partnering with LGUs and agencies to assess reef health, water quality, and marine park feasibility.",
          },
          {
            title: "Diving Equipment Rental",
            desc: "Available through Adventure Bound Philippines. Technical and recreational diving gear rentals.",
          },
        ].map((service, i) => (
          <div
            key={i}
            className="bg-marine-50 border border-marine-200 p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-marine-900 mb-2">
              {service.title}
            </h3>
            <p className="text-foreground-600">{service.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
