import ReusableCarousel from "@/components/ReusableCarousel";
import React from "react";

const item = [
  {
    id: "1",
    src: "/imgs/audiovisual/f1.png",
    alt: "HDMI TO SDI",
    title: "HDMI TO SDI",
    description: "AV MATRIX SC1221",
    link: "/audiovisual/1",
  },
  {
    id: "2",
    src: "/imgs/audiovisual/f2.png",
    alt: "SDI TO HDMI",
    title: "SDI TO HDMI",
    description: "AV MATRIX 1112",
    link: "/audiovisual/2",
  },
  {
    id: "3",
    src: "/imgs/audiovisual/f3.png",
    alt: "SDI SPLITTER",
    title: "SDI SPLITTER",
    description: "AV MATRIX 3G SDI 4X1",
    link: "/audiovisual/3",
  },
  {
    id: "4",
    src: "/imgs/audiovisual/f4.png",
    alt: "CAPTURE CARD",
    title: "CAPTURE CARD",
    description: "BLACKMAGIC MINI RECORDER",
    link: "/audiovisual/4",
  },
  {
    id: "5",
    src: "/imgs/audiovisual/f5.png",
    alt: "CAPTURE CARD",
    title: "CAPTURE CARD",
    description: "BLACKMAGIC MINI MONITOR",
    link: "/audiovisual/5",
  },
  {
    id: "6",
    src: "/imgs/audiovisual/f6.jpeg",
    alt: "CAPTURE CARD",
    title: "CAPTURE CARD",
    description: "AVERMEDIA 4K CAPTURE CARD",
    link: "/audiovisual/6",
  },
  {
    id: "7",
    src: "/imgs/audiovisual/f7.jpeg",
    alt: "PROJECTOR",
    title: "PROJECTOR",
    description: "EPSON EF 100 LASER PROJECTOR",
    link: "/audiovisual/7",
  },
  {
    id: "8",
    src: "/imgs/audiovisual/f8.jpeg",
    alt: "MONITOR",
    title: "MONITOR",
    description: "ATMOS SHINOBI",
    link: "/audiovisual/8",
  },
  {
    id: "9",
    src: "/imgs/audiovisual/f9.jpeg",
    alt: "MONITOR",
    title: "MONITOR",
    description: "DELL 24inc TOUCH MONITOR ",
    link: "/audiovisual/9",
  },
  {
    id: "10",
    src: "/imgs/audiovisual/f10.jpeg",
    alt: "MONITOR",
    title: "MONITOR",
    description: "DELL 24-27inc MONITOR",
    link: "/audiovisual/10",
  },
  {
    id: "11",
    src: "/imgs/audiovisual/f11.jpeg",
    alt: "HDMI OVER ETHERNET",
    title: "HDMI OVER ETHERNET",
    description: "ATLONA HDMI OVER CAT6",
    link: "/audiovisual/11",
  },
  {
    id: "12",
    src: "/imgs/audiovisual/f12.jpeg",
    alt: "MINIMAD",
    title: "MINIMAD",
    description: "MAD MAPPER MINI MAD",
    link: "/audiovisual/12",
  },
  {
    id: "13",
    src: "/imgs/audiovisual/f13.jpeg",
    alt: "ACTIVE SPEAKER",
    title: "ACTIVE SPEAKER",
    description: "QUEST QSA-200l",
    link: "/audiovisual/13",
  },
  {
    id: "14",
    src: "/imgs/audiovisual/f14.jpeg",
    alt: "ACTIVE SPEAKER",
    title: "ACTIVE SPEAKER",
    description: "YAMAHA DXR 8",
    link: "/audiovisual/14",
  },
  {
    id: "15",
    src: "/imgs/audiovisual/f15.jpeg",
    alt: "OUTDOOR SPEAKER",
    title: "OUTDOOR SPEAKER",
    description: "YAMAHA 8inc OUTDOOR PASSIVE",
    link: "/audiovisual/15",
  },
  {
    id: "16",
    src: "/imgs/audiovisual/f16.jpeg",
    alt: "MICROPHONE",
    title: "MICROPHONE",
    description: "SHURE SM58",
    link: "/audiovisual/16",
  },
  {
    id: "17",
    src: "/imgs/audiovisual/f17.jpeg",
    alt: "MICROPHONE",
    title: "MICROPHONE",
    description: "RODE CONDENSER",
    link: "/audiovisual/17",
  },
  {
    id: "18",
    src: "/imgs/audiovisual/f18.jpeg",
    alt: "IEM SYSTEM",
    title: "IEM SYSTEM",
    description: "SENNHEISER G4",
    link: "/audiovisual/18",
  },
  {
    id: "19",
    src: "/imgs/audiovisual/f19.jpeg",
    alt: "IEM SYSTEM",
    title: "BATTERY FAN",
    description: "BEHRINGER P2",
    link: "/audiovisual/19",
  },
  {
    id: "20",
    src: "/imgs/audiovisual/f20.jpeg",
    alt: "MIXER",
    title: "MIXER",
    description: "BEHRINGER XAIR 12",
    link: "/audiovisual/20",
  },
  {
    id: "21",
    src: "/imgs/audiovisual/f21.jpeg",
    alt: "MIXER",
    title: "MIXER",
    description: "MACKIE MIX 5",
    link: "/audiovisual/21",
  },
  {
    id: "22",
    src: "/imgs/audiovisual/f22.jpeg",
    alt: "AUDIO INTERFACE",
    title: "AUDIO INTERFACE",
    description: "FOCUSRITE SCARLET SOLO",
    link: "/audiovisual/22",
  },
  {
    id: "23",
    src: "/imgs/audiovisual/f23.jpeg",
    alt: "AUDIO INTERFACE",
    title: "AUDIO INTERFACE",
    description: "FOCUSRITE SCARLET 18l20",
    link: "/audiovisual/23",
  },
  {
    id: "24",
    src: "/imgs/audiovisual/f24.jpeg",
    alt: "WIRELESS INTERCOM",
    title: "WIRELESS INTERCOM",
    description: "HOLLYLAND MARS KIT",
    link: "/audiovisual/24",
  },
];

const AudioVisual = () => {
  return (
    <main className="flex flex-col h-fit px-10 w-full">
      <h1 className="text-5xl font-extrabold my-4 pt-10 px-10 pb-8 items-start">
        AUDIO VISUAL
      </h1>
      <ReusableCarousel items={item} />
    </main>
  );
};

export default AudioVisual;
