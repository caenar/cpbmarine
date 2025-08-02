"use client";

import { equipment } from "@/lib/data/equipment";
import Image from "next/image";
import React from "react";

export default function EquipmentPage() {
  return (
    <main>
      <section className="px-[20vw] pt-32 pb-28 text-white-100">
        <h1 className="text-6xl font-bold font-secondary mb-4">
          Equipment & Technology
        </h1>
        <p className="text-lg text-foreground-600 max-w-prose leading-relaxed">
          Our operations are powered by industry-grade diving equipment,
          real-time communication tools, and specialized marine technology built
          for safety and precision.
        </p>
      </section>

      <section className="px-[10vw] pt-32 pb-62 bg-marine-100 grid grid-cols-3 gap-15">
        {equipment.map((item, i) => (
          <div>
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
