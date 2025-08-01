"use client";

import Image from "next/image";

const equipment = [
  {
    name: "Surface-Supplied Air Systems",
    description:
      "We use surface-supplied diving systems with Kirby Morgan band masks, providing divers with two-way communication, CCTV monitoring, and real-time supervision.",
    img: "/images/equipment/surface-supplied.jpg",
  },
  {
    name: "Halcyon Evolve & Explorer Systems",
    description:
      "Advanced recreational and technical dive gear for deep, complex underwater missions. Reliable and fully maintained.",
    img: "/images/equipment/halcyon.jpg",
  },
  {
    name: "Digital Inspection Tools",
    description:
      "Our team uses underwater cameras, sonar, and remotely monitored systems to capture accurate data and structural imagery.",
    img: "/images/equipment/inspection.jpg",
  },
  {
    name: "Dive Communications & CCTV",
    description:
      "All dive helmets are integrated with surface communications and live video feeds, enabling safety teams to monitor divers closely.",
    img: "/images/equipment/cctv-comms.jpg",
  },
  {
    name: "Compressor & Gas Management",
    description:
      "We maintain certified compressors and backup tanks, regularly tested and logged for safe underwater breathing operations.",
    img: "/images/equipment/compressors.jpg",
  },
];

export default function EquipmentPage() {
  return (
    <main className="bg-white px-[18vw] py-24 text-black">
      <section className="mb-16">
        <h1 className="text-6xl font-bold font-secondary text-marine-900 mb-4">
          Equipment & Technology
        </h1>
        <p className="text-lg text-foreground-600 max-w-prose leading-relaxed">
          Our operations are powered by industry-grade diving equipment,
          real-time communication tools, and specialized marine technology built
          for safety and precision.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {equipment.map((item, i) => (
          <div key={i} className="flex flex-col gap-4">
            <div className="relative h-[240px] rounded-lg overflow-hidden">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-marine-900">
              {item.name}
            </h3>
            <p className="text-foreground-600">{item.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
