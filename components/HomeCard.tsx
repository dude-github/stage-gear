import React from "react";
import EmblaCarousel from "./EmblaCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const HomeCard = () => {
  return (
    <main className="">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </main>
  );
};

export default HomeCard;
