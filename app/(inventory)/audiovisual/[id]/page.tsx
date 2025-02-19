"use client";

import ImageSlideShow from "@/components/ImageSlideShow";
import { audioVisualSlide } from "@/data";
import React from "react";

const page = () => {
  return (
    <main className="h-screen w-full flex justify-center items-center  bg-white">
      <ImageSlideShow slides={audioVisualSlide} />
    </main>
  );
};

export default page;
