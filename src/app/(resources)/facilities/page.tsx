"use client";

import Carousel from "@/components/carousel";
import Image from "next/image";

export default function FacilitiesPage() {
  return (
    <main>
      <section className="px-[8vw] md:px-[20vw] pt-36 pb-20 bg-marine-900 text-white">
        <h1 className="text-6xl font-bold font-secondary mb-4">Our Facilities</h1>
        <p className="text-lg text-foreground-600 max-w-prose leading-relaxed">
          Our operations are supported by purpose-built facilities designed to ensure the
          safety, readiness, and efficiency of every underwater deployment.
        </p>
      </section>

      <section className="px-[8vw] md:px-[20vw] bg-foreground-100 text-marine-950 grid md:grid-cols-[40%_1fr] items-center gap-10 pt-32 pb-62">
        <div className="flex flex-col gap-7 order-2 md:order-1">
          <div>
            <h3 className="w-sm font-bold font-secondary text-2xl">Training Facility</h3>
            <p className="text-marine-400">Barangay Sula Bacacay, Albay</p>
          </div>
          <div className="text-marine-800">
            <p className="w-sm mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, aliquid
              pariatur eius, ipsam consectetur optio aspernatur incidunt maxime
              exercitationem atque adipisci voluptatibus sequi doloremque consequatur
              voluptatum, quidem velit inventore a!
            </p>
            <p className="w-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quasi
              doloribus adipisci rem aliquid omnis nulla tempore labore voluptas dolorem.
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/images/resources/sula/1.JPG"
            alt="Training Facility Sula"
            height={1500}
            width={1500}
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      <section className="px-[8vw] md:px-[20vw] bg-marine-900 text-marine-100 grid md:grid-cols-2 gap-7 md:gap-0 py-24">
        <div>
          <h3 className="w-sm font-bold font-secondary text-2xl">Main Office</h3>
          <p className="text-marine-400">862 B4 Barriada, Legazpi City</p>
        </div>
        <div className="text-marine-300">
          <p className="w-sm mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, aliquid
            pariatur eius, ipsam consectetur optio aspernatur incidunt maxime
            exercitationem atque adipisci voluptatibus sequi doloremque consequatur
            voluptatum, quidem velit inventore a!
          </p>
          <p className="w-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quasi doloribus
            adipisci rem aliquid omnis nulla tempore labore voluptas dolorem.
          </p>
        </div>
      </section>
      <Carousel />

      <section className="px-[8vw] md:px-[20vw] bg-foreground-100 text-marine-950 grid md:grid-cols-[1fr_40%] gap-15 items-center pt-32 pb-62">
        <div>
          <Image
            src="/images/resources/equipment/1.PNG"
            alt="Training Facility Sula"
            height={1500}
            width={1500}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-7">
          <div>
            <h3 className="w-sm font-bold font-secondary text-2xl">Warehouse / Yard</h3>
            <p className="text-marine-400">48 Diamond St. Imperial Court, Legazpi City</p>
          </div>
          <div className="text-marine-800">
            <p className="w-sm mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, aliquid
              pariatur eius, ipsam consectetur optio aspernatur incidunt maxime
              exercitationem atque adipisci voluptatibus sequi doloremque consequatur
              voluptatum, quidem velit inventore a!
            </p>
            <p className="w-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quasi
              doloribus adipisci rem aliquid omnis nulla tempore labore voluptas dolorem.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
