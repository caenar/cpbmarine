"use client";

import Image from "next/image";

const facilities = [
  {
    name: "Main Dive Operations Base",
    description:
      "Located in Legazpi City, our base serves as the hub for all marine operations, equipment staging, and diver preparation.",
    img: "/images/facilities/base.jpg",
  },
  {
    name: "Support Vessels",
    description:
      "We operate a fleet of support vessels equipped for offshore dive work, including CCTV, compressors, and medical kits.",
    img: "/images/facilities/vessels.jpg",
  },
  {
    name: "Dive Equipment Warehouse",
    description:
      "All technical and commercial diving gear is maintained and stored at our secure warehouse, regularly inspected for compliance.",
    img: "/images/facilities/warehouse.jpg",
  },
  {
    name: "Training & Briefing Room",
    description:
      "A dedicated space for pre-dive briefings, safety orientations, and instructional sessions for dive teams and trainees.",
    img: "/images/facilities/training.jpg",
  },
];

export default function FacilitiesPage() {
  return (
    <main className="bg-white px-[18vw] py-24 text-black">
      <section className="mb-16">
        <h1 className="text-6xl font-bold font-secondary text-marine-900 mb-4">
          Our Facilities
        </h1>
        <p className="text-lg text-foreground-600 max-w-prose leading-relaxed">
          Our operations are supported by purpose-built facilities designed to
          ensure the safety, readiness, and efficiency of every underwater
          deployment.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {facilities.map((facility, i) => (
          <div key={i} className="flex flex-col gap-4">
            <div className="relative h-[240px] rounded-lg overflow-hidden">
              <Image
                src={facility.img}
                alt={facility.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-marine-900">
              {facility.name}
            </h3>
            <p className="text-foreground-600">{facility.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
