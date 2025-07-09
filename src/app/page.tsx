"use client";

import React from "react";

import HeaderSection from "@/components/sections/header";
import AboutSection from "@/components/sections/about";
import TestimonialSection from "@/components/sections/testimonial";
import StandardSafetySection from "@/components/sections/standard-safety";
import HistorySection from "@/components/sections/history";
import CtaSection from "@/components/sections/cta";
import AffiliationSection from "@/components/sections/affiliation";

export default function Home() {
  return (
    <main>
      <HeaderSection />
      <AboutSection />
      <AffiliationSection />
      <TestimonialSection />
      <StandardSafetySection />
      <HistorySection />
      <CtaSection />
    </main>
  );
}
