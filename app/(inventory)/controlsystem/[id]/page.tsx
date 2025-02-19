"use client";

import ImageSlideShow from "@/components/ImageSlideShow";
import { controlSystemSlide } from "@/data";
import React from "react";

const page = () => {
  return (
    <main className="h-[800px] w-full flex justify-center items-center  bg-white">
      <div className="w-full h-full flex flex-col justify-center items-center ">
        <ImageSlideShow slides={controlSystemSlide} />
      </div>
    </main>
  );
};

export default page;
