import ReusableCarousel from "@/components/ReusableCarousel";
import React from "react";

const item = [
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

const FilmLights = () => {
  return (
    <main className="flex flex-col h-fit px-10 w-full">
      <h1 className="text-5xl font-extrabold my-4 pt-10 px-10 pb-8 items-start">
        FILM LIGHTS
      </h1>
      <ReusableCarousel items={item} />
    </main>
  );
};

export default FilmLights;
