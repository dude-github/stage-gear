import ReusableCarousel from "@/components/ReusableCarousel";
import { fxLightsItem } from "@/data";
import React from "react";

const EffectLights = () => {
  return (
    <main className="flex flex-col h-fit px-10 w-full">
      <h1 className="text-5xl font-extrabold my-4 pt-10 px-10 pb-8 items-start">
        EFFECT LIGHTS
      </h1>
      <ReusableCarousel items={fxLightsItem} />
    </main>
  );
};

export default EffectLights;
