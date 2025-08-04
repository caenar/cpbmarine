"use client";

import { futureProspects } from "@/lib/data/future-prospects";
import React from "react";

export default function FutureProspectsPage() {
  return (
    <main>
      <section className="px-[20vw] py-32">
        <h1 className="text-6xl font-bold font-secondary mb-4">Looking Ahead</h1>
        <p className="text-lg text-foreground-600 max-w-prose leading-relaxed">
          At Trident CBP Marine Services, we believe that continuous growth, adaptation,
          and innovation are the cornerstones of long-term success in the marine industry.
          Here’s a look at where we’re headed.
        </p>
      </section>

      <section className="px-[10vw] grid gap-10 bg-foreground-100 pt-32 pb-52">
        {futureProspects.map((item, i) => (
          <React.Fragment key={i}>
            <div className="flex gap-15 pb-5">
              <span className="text-6xl font-bold text-marine-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-3xl font-bold text-marine-800 mb-3">{item.title}</h2>
                <p className="text-foreground-600 leading-relaxed max-w-prose">
                  {item.description}
                </p>
              </div>
            </div>
            {i < futureProspects.length - 1 && (
              <div className="border-b border-foreground-300"></div>
            )}
          </React.Fragment>
        ))}
      </section>
    </main>
  );
}
