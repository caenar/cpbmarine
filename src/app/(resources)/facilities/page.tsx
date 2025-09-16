"use client";

import Carousel from "@/components/carousel";
import Image from "next/image";

const images = ["/images/resources/office/1.JPG", "/images/resources/office/2.JPG"];

export default function FacilitiesPage() {
  return (
    <main>
      <section className="px-[8vw] md:px-[20vw] pt-36 pb-20 bg-marine-900 text-white">
        <h1 className="text-6xl font-bold font-secondary mb-4">Our Facilities</h1>
        <p className="text-lg text-foreground-600 max-w-prose leading-relaxed">
          Designed to function together as a full-service industrial dive center. From
          offices and logistics support to training, fabrication, and active scuba
          operations, each site contributes to delivering reliable and comprehensive
          marine services.
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
              A dedicated dive center in Barangay Sula Bacacay, Albay, currently used for
              scuba diving sessions and activities. The facility is being developed into a
              full training hub with direct access to open water, office support, and
              equipment areas, with future plans to offer both recreational and commercial
              programs.
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
            Serving as the company’s registered base of operations. While primarily a
            residential space, it also functions as the administrative hub for
            coordinating projects, managing client communications, and handling day-to-day
            business operations.
          </p>
        </div>
      </section>
      <Carousel images={images} />

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
              Our storage and logistics area, it provides space for equipment, supplies,
              and materials essential to operations, ensuring readiness for projects and
              field deployment.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
