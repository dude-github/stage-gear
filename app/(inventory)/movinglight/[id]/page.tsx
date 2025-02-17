"use client";

import ImageSlideShow from "@/components/ImageSlideShow";
import React from "react";

const slide = [
  {
    id: "1",
    src: "/imgs/movinglights/m1.png",
    alt: "Moving Spot",
    title: "MOVING SPOT",
    description: "AYRTON MISTRAL-S",
    link: "/movinglight/1",
  },
  {
    id: "2",
    src: "/imgs/movinglights/m2.jpg",
    alt: "ACME MANA HYBRID IP65",
    title: "MOVING BSW",
    description: "ACME MANA HYBRID IP65",
    link: "/movinglight/2",
  },
  {
    id: "3",
    src: "/imgs/movinglights/m3.jpeg",
    alt: "AYRTON MISTRAL-S",
    title: "MOVING SPOT",
    description: "GTD LIGHTING \nLM-330 ll MOVING SPOT",
    link: "/movinglight/3",
  },
  {
    id: "4",
    src: "/imgs/movinglights/m4.jpeg",
    alt: "ACME MANA HYBRID IP65",
    title: "MOVING WASH",
    description: "LIGHT SKY\nTX1920 WASH ZOOM",
    link: "/movinglight/4",
  },
  {
    id: "5",
    src: "/imgs/movinglights/m5.jpeg",
    alt: "AYRTON MISTRAL-S",
    title: "MOVING BEAM WASH",
    description: "CKC LIGHTING ZB7",
    link: "/movinglight/5",
  },
  {
    id: "6",
    src: "/imgs/movinglights/m6.jpg",
    alt: "ACME MANA HYBRID IP65",
    title: "MOVING WASH",
    description: "CKC LIGHTING Z500",
    link: "/movinglight/6",
  },
  {
    id: "7",
    src: "/imgs/movinglights/m7.jpg",
    alt: "ACME MANA HYBRID IP65",
    title: "LED MOVING BAR",
    description: "ACME SUPER DOTLINE",
    link: "/movinglight/7",
  },
  {
    id: "8",
    src: "/imgs/movinglights/m8.jpg",
    alt: "ACME MANA HYBRID IP65",
    title: "LED STROBE",
    description: "CHAUVET COLOR STRIKE-M",
    link: "/movinglight/8",
  },
];

const page = () => {
  return (
    <main className="h-[800px] w-full flex justify-center items-center  bg-white">
      <div className="w-full h-full flex flex-col justify-center items-center ">
        <ImageSlideShow slides={slide} />
      </div>
    </main>
  );
};

export default page;
