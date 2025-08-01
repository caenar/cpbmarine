"use client";

import Carousel from "@/components/carousel";
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
    <main>
      <section className="px-[20vw] pt-36 pb-20 bg-marine-900 text-white">
        <h1 className="text-6xl font-bold font-secondary mb-4">
          Our Facilities
        </h1>
        <p className="text-lg text-foreground-600 max-w-prose leading-relaxed">
          Our operations are supported by purpose-built facilities designed to
          ensure the safety, readiness, and efficiency of every underwater
          deployment.
        </p>
      </section>

      <section className="px-[20vw] bg-marine-100 text-marine-950 grid grid-cols-2 py-24">
        <div className="flex flex-col gap-7">
          <div>
            <h3 className="w-sm font-bold font-secondary text-2xl">
              Training Facility
            </h3>
            <p className="text-marine-400">Barangay Sula Bacacay, Albay</p>
          </div>
          <div className="text-marine-800">
            <p className="w-sm mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
              aliquid pariatur eius, ipsam consectetur optio aspernatur incidunt
              maxime exercitationem atque adipisci voluptatibus sequi doloremque
              consequatur voluptatum, quidem velit inventore a!
            </p>
            <p className="w-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              quasi doloribus adipisci rem aliquid omnis nulla tempore labore
              voluptas dolorem.
            </p>
          </div>
        </div>
      </section>

      <section className="px-[20vw] bg-marine-900 text-marine-100 grid grid-cols-2 py-24">
        <div>
          <h3 className="w-sm font-bold font-secondary text-2xl">
            Main Office
          </h3>
          <p className="text-marine-400">862 B4 Barriada, Legazpi City</p>
        </div>
        <div className="text-marine-300">
          <p className="w-sm mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
            aliquid pariatur eius, ipsam consectetur optio aspernatur incidunt
            maxime exercitationem atque adipisci voluptatibus sequi doloremque
            consequatur voluptatum, quidem velit inventore a!
          </p>
          <p className="w-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quasi
            doloribus adipisci rem aliquid omnis nulla tempore labore voluptas
            dolorem.
          </p>
        </div>
      </section>
      <Carousel />

      <section className="px-[20vw] bg-marine-100 text-marine-950 grid grid-cols-2 py-24">
        <div></div>
        <div className="flex flex-col gap-7">
          <div>
            <h3 className="w-sm font-bold font-secondary text-2xl">
              Warehouse / Yard
            </h3>
            <p className="text-marine-400">
              48 Diamond St. Imperial Court, Legazpi City
            </p>
          </div>
          <div className="text-marine-800">
            <p className="w-sm mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
              aliquid pariatur eius, ipsam consectetur optio aspernatur incidunt
              maxime exercitationem atque adipisci voluptatibus sequi doloremque
              consequatur voluptatum, quidem velit inventore a!
            </p>
            <p className="w-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              quasi doloribus adipisci rem aliquid omnis nulla tempore labore
              voluptas dolorem.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
