"use client";

import DynamicCarousel from "./components/home/DynamicCarousel";
import KeyStatisticsSection from "./components/home/KeyStatisticsSection";
import FAQAccordion from "./components/home/FAQAccordion";
import Directions from "./components/home/Directions";
import ServicesSection from "./components/home/ServicesSection";

export default function Home() {

  const carouselItems = [
    { caption: "Caption 1", src: "", alt: "Image 1 description" },
    // Add more items as needed
  ];

  return (
    <div>
      <DynamicCarousel items={carouselItems} autoPlay={true} autoPlayInterval={4000} />
      <Directions />
      <ServicesSection />
      <KeyStatisticsSection />
      <FAQAccordion />
    </div>
  );
}
