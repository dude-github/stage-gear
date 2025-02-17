import ReusableCarousel from "@/components/ReusableCarousel";
import React from "react";

const item = [
  {
    id: "1",
    src: "/imgs/fxlights/f1.png",
    alt: "MULTICOLOR LASER",
    title: "MULTICOLOR LASER",
    description: "LF-30 WATTS. ANIMATION LASER",
    link: "/fxlights/1",
  },
  {
    id: "2",
    src: "/imgs/fxlights/f2.png",
    alt: "MULTICOLOR LASER",
    title: "MULTICOLOR LASER",
    description: "LF-5 WATTS. CLUB LASER",
    link: "/fxlights/2",
  },
  {
    id: "3",
    src: "/imgs/fxlights/f3.png",
    alt: "MULTICOLOR LASER",
    title: "MULTICOLOR LASER",
    description: "MINI STAR 4.0 RGB LASER",
    link: "/fxlights/3",
  },
  {
    id: "4",
    src: "/imgs/fxlights/f4.png",
    alt: "MULTICOLOR LASER",
    title: "MULTICOLOR LASER",
    description: "LF-2 WATTS. DMX LASER BEAM",
    link: "/fxlights/4",
  },
  {
    id: "5",
    src: "/imgs/fxlights/f5.png",
    alt: "FX LASER",
    title: "FX LASER",
    description: "LF W5000 FIREFLY LASER COOL WHITE",
    link: "/fxlights/5",
  },
  {
    id: "6",
    src: "/imgs/fxlights/f6.jpeg",
    alt: "LED PINSPOT",
    title: "LED PINSPOT",
    description: "TOURPRO LED PINSPOT RGBW",
    link: "/fxlights/6",
  },
  {
    id: "7",
    src: "/imgs/fxlights/f7.jpeg",
    alt: "MINI DEKKER",
    title: "MINI DEKKER",
    description: "LED MINI DEKKER RGBW",
    link: "/fxlights/7",
  },
  {
    id: "8",
    src: "/imgs/fxlights/f8.jpeg",
    alt: "MIRAGE LED",
    title: "MIRAGE LED",
    description: "LED DISCO MIRAGE LED RGBW",
    link: "/fxlights/8",
  },
  {
    id: "9",
    src: "/imgs/fxlights/f9.jpeg",
    alt: "SUPER VENOM",
    title: "SUPER VENOM",
    description: "LED SUPER VENOM DISCO RGBW",
    link: "/fxlights/9",
  },
  {
    id: "10",
    src: "/imgs/fxlights/f10.jpeg",
    alt: "LED RIPPLE PROJEcTOR",
    title: "LED RIPPLE PROJEcTOR",
    description: "CHAUVET ABYSS LED",
    link: "/fxlights/10",
  },
  {
    id: "11",
    src: "/imgs/fxlights/f11.jpeg",
    alt: "MIRROR BALL",
    title: "MIRROR BALL",
    description: "AVAILABLE IN 30CM./50CM./1M.",
    link: "/fxlights/11",
  },
  {
    id: "12",
    src: "/imgs/fxlights/f12.jpeg",
    alt: "MIRRORBALL",
    title: "MIRRORBALL",
    description: "HORIZONTAL MOTOR MIRRORBALL",
    link: "/fxlights/12",
  },
  {
    id: "13",
    src: "/imgs/fxlights/f13.jpeg",
    alt: "MIRRORBALL",
    title: "MIRRORBALL",
    description: "VERTICAL MOTOR MIRRORBALL",
    link: "/fxlights/13",
  },
];

const EffectLights = () => {
  return (
    <main className="flex flex-col h-fit px-10 w-full">
      <h1 className="text-5xl font-extrabold my-4 pt-10 px-10 pb-8 items-start">
        EFFECT LIGHTS
      </h1>
      <ReusableCarousel items={item} />
    </main>
  );
};

export default EffectLights;
