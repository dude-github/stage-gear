import ReusableCarousel from "@/components/ReusableCarousel";
import { audioVisualItem } from "@/data";
import React from "react";

const AudioVisual = () => {
  return (
    <main className="flex flex-col h-fit px-10 w-full">
      <h1 className="text-5xl font-extrabold my-4 pt-10 px-10 pb-8 items-start">
        AUDIO VISUAL
      </h1>
      <ReusableCarousel items={audioVisualItem} />
    </main>
  );
};

export default AudioVisual;
