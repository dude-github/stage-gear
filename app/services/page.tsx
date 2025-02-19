import ServicesPageCarousel from "@/components/ServicesPageCarousel";
import React from "react";

const Services = () => {
  return (
    <main className="flex h-full w-full ">
      <section className="top-2 flex w-full justify-center items-center ">
        <ServicesPageCarousel />
      </section>
    </main>
  );
};

export default Services;
