import ReusableCarousel from "@/components/ReusableCarousel";
import { controlSystemItem } from "@/data";
import React from "react";

const ControlSystem = () => {
  return (
    <main className="flex flex-col h-fit px-10 w-full">
      <h1 className="text-5xl font-extrabold my-4 pt-10 px-10 pb-8 items-start">
        CONTROL SYSTEM
      </h1>
      <ReusableCarousel items={controlSystemItem} />
    </main>
  );
};

export default ControlSystem;
