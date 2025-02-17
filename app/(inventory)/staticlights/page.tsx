import ReusableCarousel from "@/components/ReusableCarousel";
import React from "react";

const item = [
  {
    id: "1",
    src: "/imgs/staticlights/s1.jpeg",
    alt: "LED Strobe",
    title: "LED Strobe",
    description: "ACME VOLTAKA RGB",
    link: "/staticlights/1",
  },
  {
    id: "2",
    src: "/imgs/staticlights/s5.jpeg",
    alt: "LED STROBE BAR",
    title: "LED STROBE BAR",
    description: "ACME FLASHDOT",
    link: "/staticlights/2",
  },
  {
    id: "3",
    src: "/imgs/staticlights/s4.jpeg",
    alt: "CYCLORAMA",
    title: "CYCLORAMA",
    description: "CKC LED CYC-M",
    link: "/staticlights/3",
  },
  {
    id: "4",
    src: "/imgs/staticlights/s2.jpeg",
    alt: "LED STROBE",
    title: "LED STROBE",
    description: "SILVERSTAR RAYTHEON RGBW STROBE",
    link: "/staticlights/4",
  },
  {
    id: "5",
    src: "/imgs/staticlights/s3.jpeg",
    alt: "LED FRESNEL",
    title: "LED FRESNEL",
    description: "SILVERSTAR LED FRENZO 250 HEX",
    link: "/staticlights/5",
  },
  {
    id: "6",
    src: "/imgs/staticlights/s11.jpeg",
    alt: "LED FRESNEL",
    title: "LED FRESNEL",
    description: "SILVERSTAR LED FRENZO ZM1 RGBAL",
    link: "/staticlights/6",
  },
  {
    id: "7",
    src: "/imgs/staticlights/s12.jpeg",
    alt: "LED FRESNEL",
    title: "LED FRESNEL",
    description: "OVATION LED MINI FRESNEL 50 CTO-CTB ADJUSTABLE",
    link: "/staticlights/7",
  },
  {
    id: "8",
    src: "/imgs/staticlights/s13.jpeg",
    alt: "LED WASH",
    title: "LED WASH",
    description: "CKC W350 WASH",
    link: "/staticlights/8",
  },
  {
    id: "9",
    src: "/imgs/staticlights/s14.jpeg",
    alt: "LED PIXEL BAR",
    title: "LED PIXEL BAR",
    description: "EK LIGHT LED LIGHTBAR 12Q RGBW",
    link: "/staticlights/9",
  },
  {
    id: "10",
    src: "/imgs/staticlights/s15.jpeg",
    alt: "LED STROBE",
    title: "LED STROBE",
    description: "MARTIN ATOMIC LED STROBE WHITE",
    link: "/staticlights/10",
  },
  {
    id: "11",
    src: "/imgs/staticlights/s16.jpeg",
    alt: "STROBE",
    title: "STROBE",
    description: "MARTIN ATOMIC 3000",
    link: "/staticlights/11",
  },
  {
    id: "12",
    src: "/imgs/staticlights/s17.jpeg",
    alt: "LED PAR",
    title: "LED PAR",
    description: "TAURUS LIGHTING LED TOUR PAR 150 OUTDOOR RGBW",
    link: "/staticlights/12",
  },
  {
    id: "13",
    src: "/imgs/staticlights/s18.jpeg",
    alt: "LED BLINDER",
    title: "LED BLINDER",
    description: "ACME BL200WW IP",
    link: "/staticlights/13",
  },
  {
    id: "14",
    src: "/imgs/staticlights/s19.jpeg",
    alt: "LED BLINDER",
    title: "LED BLINDER",
    description: "ACME BL200 RGBW IP",
    link: "/staticlights/14",
  },
  {
    id: "15",
    src: "/imgs/staticlights/s20.jpeg",
    alt: "LED BLINDER",
    title: "LED BLINDER",
    description: "NITEC BLINDER ll LED WW",
    link: "/staticlights/15",
  },
  {
    id: "16",
    src: "/imgs/staticlights/s21.jpeg",
    alt: "LED PAR UV",
    title: "LED PAR UV",
    description: "TAURUS LIGHTING LED TOUR PAR 150OUTDOOR UV",
    link: "/staticlights/16",
  },
  {
    id: "17",
    src: "/imgs/staticlights/s9.png",
    alt: "LED PROFILE",
    title: "LED PROFILE",
    description: "SILVERSTAR ECLIPSE 1000 RGBAL",
    link: "/staticlights/17",
  },
  {
    id: "18",
    src: "/imgs/staticlights/s8.png",
    alt: "LED PROFILE",
    title: "LED PROFILE",
    description: "OVATION LED PROFILE LEKO60 CTO-CTB ADJUSTABLE 15-30D",
    link: "/staticlights/18",
  },
  {
    id: "19",
    src: "/imgs/staticlights/s6.png",
    alt: "LED PROFILE",
    title: "LED PROFILE",
    description: "OVATION LED MINI PROFILE 203200K 26D/36D",
    link: "/staticlights/19",
  },
  {
    id: "20",
    src: "/imgs/staticlights/s10.png",
    alt: "BLINDER",
    title: "BLINDER",
    description: "KUPO MOLEFAY 2X750W.",
    link: "/staticlights/20",
  },
  {
    id: "21",
    src: "/imgs/staticlights/s7.png",
    alt: "PAR",
    title: "PAR",
    description: "KUPO PAR16/20",
    link: "/staticlights/21",
  },
];

const StaticLights = () => {
  return (
    <main className="flex flex-col h-fit px-10 w-full">
      <h1 className="text-5xl font-extrabold my-4 pt-10 px-10 pb-8 items-start">
        STATIC LIGHTS
      </h1>
      <ReusableCarousel items={item} />
    </main>
  );
};

export default StaticLights;
