"use client";

import ImageSlideShow from "@/components/ImageSlideShow";
import React from "react";

const slide = [
  {
    id: "1",
    src: "/imgs/filmlights/f1.png",
    alt: "LIGHT PANEL",
    title: "LIGHT PANEL",
    description: "APUTURE NOVA P300C",
    link: "/filmlights/1",
  },
  {
    id: "2",
    src: "/imgs/filmlights/f2.png",
    alt: "LIGHT PANEL",
    title: "LIGHT PANEL",
    description: "APUTURE F22C",
    link: "/filmlights/2",
  },
  {
    id: "3",
    src: "/imgs/filmlights/f3.png",
    alt: "LED SPOTLIGHT",
    title: "LED SPOTLIGHT",
    description: "APUTURE LS60 X",
    link: "/filmlights/3",
  },
  {
    id: "4",
    src: "/imgs/filmlights/f4.png",
    alt: "TUBE LIGHT",
    title: "TUBE LIGHT",
    description: "NANLIGHT PAVOTUBE 30 X 1.2M.",
    link: "/filmlights/4",
  },
  {
    id: "5",
    src: "/imgs/filmlights/f5.png",
    alt: "TUBE LIGHT",
    title: "TUBE LIGHT",
    description: "NANLIGHT PAVOTUBE 15 X 0.6M.",
    link: "/filmlights/5",
  },
  {
    id: "6",
    src: "/imgs/filmlights/f6.jpeg",
    alt: "TUBE LIGHT",
    title: "TUBE LIGHT",
    description: "GODOX TL-60",
    link: "/filmlights/6",
  },
  {
    id: "7",
    src: "/imgs/filmlights/f7.jpeg",
    alt: "POCKET LED",
    title: "POCKET LED",
    description: "ROSCO DMG DASH KIT",
    link: "/filmlights/7",
  },
  {
    id: "8",
    src: "/imgs/filmlights/f8.jpeg",
    alt: "POCKET LIGHT",
    title: "POCKET LIGHT",
    description: "APUTURE MC QUAD KIT",
    link: "/filmlights/8",
  },
  {
    id: "9",
    src: "/imgs/filmlights/f9.jpeg",
    alt: "LED BULB",
    title: "LED BULB",
    description: "ASTERA NYX BULB KIT",
    link: "/filmlights/9",
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
