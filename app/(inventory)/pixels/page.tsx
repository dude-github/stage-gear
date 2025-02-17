import ReusableCarousel from "@/components/ReusableCarousel";
import React from "react";

const item = [
  {
    id: "1",
    src: "/imgs/pixels/f1.png",
    alt: "LED LINEAR BAR",
    title: "LED LINEAR BAR",
    description: "LED BAR MILKY COVER 64 PIXELS (1M.) 32 PIXELS (0.5M.)",
    link: "/pixels/1",
  },
  {
    id: "2",
    src: "/imgs/pixels/f2.png",
    alt: "LED LINEAR BAR",
    title: "LED LINEAR BAR",
    description: "LED BAR CLEAR COVER 20 PIXELS (1M.) 10 PIXELS (0.5M.)",
    link: "/pixels/2",
  },
  {
    id: "3",
    src: "/imgs/pixels/f3.png",
    alt: "LED TUBE",
    title: "LED TUBE",
    description: "LED 360 TUBE 48 PIXELS (2M.)",
    link: "/pixels/3",
  },
  {
    id: "4",
    src: "/imgs/pixels/f4.png",
    alt: "LED 3D TUBE",
    title: "LED 3D TUBE",
    description: "LED 3D TUBE CLEAR 12 PIXELS (0.5M.)",
    link: "/pixels/4",
  },
  {
    id: "5",
    src: "/imgs/pixels/f5.png",
    alt: "LED NEONFLEX",
    title: "LED NEONFLEX",
    description: "LED PIXEL - SINGLE COLOUR NEON FLEX",
    link: "/pixels/5",
  },
  {
    id: "6",
    src: "/imgs/pixels/f6.jpeg",
    alt: "LED STRIP",
    title: "LED STRIP",
    description: "LED PIXEL - SINGLE COLOUR STRIP",
    link: "/pixels/6",
  },
  {
    id: "7",
    src: "/imgs/pixels/f7.jpeg",
    alt: "LED STRING",
    title: "LED STRING",
    description: "PIXI STRING RGBW 10 Pixels / 1m. (Dome)",
    link: "/pixels/7",
  },
  {
    id: "8",
    src: "/imgs/pixels/f8.jpeg",
    alt: "LED STRING",
    title: "LED STRING",
    description: "PIXI STRING RGBW 10 Pixels / 1m. (Clear)",
    link: "/pixels/8",
  },
  {
    id: "9",
    src: "/imgs/pixels/f9.jpeg",
    alt: "LED ORBS",
    title: "LED ORBS",
    description: "LED ORBS BALL RGB 10CM. / 15CM. / 30CM.",
    link: "/pixels/9",
  },
  {
    id: "10",
    src: "/imgs/pixels/f10.jpeg",
    alt: "LED FESTOON",
    title: "LED FESTOON",
    description: "LED PIXEL FESTOON RGB 10M.",
    link: "/pixels/10",
  },
  {
    id: "11",
    src: "/imgs/pixels/f11.jpeg",
    alt: "LED PIXEL STRING",
    title: "LED PIXEL STRING",
    description: "LED PIXEL SPI RGB",
    link: "/pixels/11",
  },
  {
    id: "12",
    src: "/imgs/pixels/f12.jpeg",
    alt: "LED DOT",
    title: "LED DOT",
    description: "RGB LED PIXEL DOT",
    link: "/pixels/12",
  },
  {
    id: "13",
    src: "/imgs/pixels/f13.jpeg",
    alt: "DMX DECODER",
    title: "DMX DECODER",
    description: "LTECH DMX DECODER RGBW 4/15/16 Output",
    link: "/pixels/13",
  },
  {
    id: "14",
    src: "/imgs/pixels/f14.jpeg",
    alt: "SPI DECODER",
    title: "SPI DECODER",
    description: "LTECH SPI DECODER RGBW 1/2 Output",
    link: "/pixels/14",
  },
];

const Pixels = () => {
  return (
    <main className="flex flex-col h-fit px-10 w-full">
      <h1 className="text-5xl font-extrabold my-4 pt-10 px-10 pb-8 items-start">
        LED PIXELS
      </h1>
      <ReusableCarousel items={item} />
    </main>
  );
};

export default Pixels;
