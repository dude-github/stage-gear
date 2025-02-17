import ReusableCarousel from "@/components/ReusableCarousel";
import React from "react";

const item = [
  {
    id: "1",
    src: "/imgs/sfx/f1.png",
    alt: "FAZE MACHINE",
    title: "FAZE MACHINE",
    description: "DJ POWER H3 WATER BASED FAZER MACHINE",
    link: "/sfx/1",
  },
  {
    id: "2",
    src: "/imgs/sfx/f2.png",
    alt: "FAZE MACHINE",
    title: "FAZE MACHINE",
    description: "DJ POWER DFZ-800 WATER BASED FAZER MACHINE",
    link: "/sfx/2",
  },
  {
    id: "3",
    src: "/imgs/sfx/f3.png",
    alt: "HAZER MACHINE",
    title: "HAZER MACHINE",
    description: "DJ POWER DHZ-660 OIL BASED HAZE MACHINE",
    link: "/sfx/3",
  },
  {
    id: "4",
    src: "/imgs/sfx/f4.png",
    alt: "FOG MACHINE",
    title: "FOG MACHINE",
    description: "DJ POWER H7D HIGHPOWER FOG MACHINE",
    link: "/sfx/4",
  },
  {
    id: "5",
    src: "/imgs/sfx/f5.png",
    alt: "LOW FOG MACHINE",
    title: "LOW FOG MACHINE",
    description: "X-SW2200 AQUA LOW FOG MACHINE",
    link: "/sfx/5",
  },
  {
    id: "6",
    src: "/imgs/sfx/f6.jpeg",
    alt: "FOG MACHINE",
    title: "FOG MACHINE",
    description: "ANTARI WIFI800 PORTABLE FOG MACHINE",
    link: "/sfx/6",
  },
  {
    id: "7",
    src: "/imgs/sfx/f7.jpeg",
    alt: "FAZE MACHINE",
    title: "FAZE MACHINE",
    description: "ANTARI Z-350 WATER BASED FAZER MACHINE",
    link: "/sfx/7",
  },
  {
    id: "8",
    src: "/imgs/sfx/f8.jpeg",
    alt: "FOG MACHINE",
    title: "FOG MACHINE",
    description: "ANTARI IP-1500 OUTDOOR FOG MACHINE",
    link: "/sfx/8",
  },
  {
    id: "9",
    src: "/imgs/sfx/f9.jpeg",
    alt: "FOG JET MACHINE",
    title: "FOG JET MACHINE",
    description: "ANTARI M7 RGBA VERTICAL FOG MACHINE",
    link: "/sfx/9",
  },
  {
    id: "10",
    src: "/imgs/sfx/f10.jpeg",
    alt: "CONFETTI",
    title: "CONFETTI",
    description: "PRO STAGE FX CONFETTI LAUNCHER",
    link: "/sfx/10",
  },
  {
    id: "11",
    src: "/imgs/sfx/f11.jpeg",
    alt: "FX LAUNCHER",
    title: "FX LAUNCHER",
    description: "MAGIC FX DMX SWITCH",
    link: "/sfx/11",
  },
  {
    id: "12",
    src: "/imgs/sfx/f12.jpeg",
    alt: "FX LAUNCHER",
    title: "FX LAUNCHER",
    description: "MAGIC FX EFFECTIVATOR 4",
    link: "/sfx/12",
  },
  {
    id: "13",
    src: "/imgs/sfx/f13.jpeg",
    alt: "CURTAIN DROPPER",
    title: "CURTAIN DROPPER",
    description: "STAGE CURTAIN DROPPER",
    link: "/sfx/13",
  },
  {
    id: "14",
    src: "/imgs/sfx/f14.jpeg",
    alt: "BUBBLES MACHINE",
    title: "BUBBLES MACHINE",
    description: "ANTARI B100 BUBBLE MACHINE",
    link: "/sfx/14",
  },
  {
    id: "15",
    src: "/imgs/sfx/f15.jpeg",
    alt: "BUBBLES MACHINE",
    title: "BUBBLES MACHINE",
    description: "ANTARI B200 STADIUM BUBBLE MACHINE",
    link: "/sfx/15",
  },
  {
    id: "16",
    src: "/imgs/sfx/f16.jpeg",
    alt: "FX FANS",
    title: "FX FANS",
    description: "ANTARI AF3 DMX FANS",
    link: "/sfx/16",
  },
  {
    id: "17",
    src: "/imgs/sfx/f17.jpeg",
    alt: "JET FAN",
    title: "JET FAN",
    description: "INDUSTRIAL JET FAN",
    link: "/sfx/17",
  },
  {
    id: "18",
    src: "/imgs/sfx/f18.jpeg",
    alt: "BATTERY FAN",
    title: "BATTERY FAN",
    description: "BONITARE OUTDOOR BATTERY FAN",
    link: "/sfx/18",
  },
];

const SpecialEffects = () => {
  return (
    <main className="flex flex-col h-fit px-10 w-full">
      <h1 className="text-5xl font-extrabold my-4 pt-10 px-10 pb-8 items-start">
        SPECIAL EFFECTS
      </h1>
      <ReusableCarousel items={item} />
    </main>
  );
};

export default SpecialEffects;
