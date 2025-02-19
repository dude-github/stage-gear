import ReusableCarousel from "@/components/ReusableCarousel";
import { movingLightItem } from "@/data";
import React from "react";

const MovingLight = () => {
  return (
    <main className="flex flex-col h-fit px-10 w-full">
      <h2 className="text-5xl font-extrabold my-4 pt-10 px-10 pb-8 items-start">
        INTELLIGENT LIGHTS
      </h2>
      <ReusableCarousel items={movingLightItem} />
    </main>
  );
};

export default MovingLight;
