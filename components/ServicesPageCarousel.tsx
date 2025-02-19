/* eslint-disable @next/next/no-img-element */
"use client";
import * as React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider, TrackDetails } from "keen-slider/react";

// Array of image sources

const images = [
  "/icons/s1.jpg",
  "/icons/s2.jpg",
  "/icons/s3.jpg",
  "/icons/s4.jpg",
];

// Array of dynamic titles corresponding to each image
const titles = [
  "Lighting Design, Pre-Programmed, & Operation",
  "Lighting Plan & Pre-Visualization Simulation",
  "Production & Stage Design",
  "Creative Visual Design",
];

const ServicesPageCarousel = () => {
  const [details, setDetails] = React.useState<TrackDetails | null>(null);

  // Create a ref for the KeenSlider instance
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    detailsChanged(s: { track: { details: any } }) {
      setDetails(s.track.details);
    },
    initial: 2,
  });

  function scaleStyle(idx: number) {
    if (!details) return {};
    const slide = details.slides[idx];
    const scale_size = 0.7;
    const scale = 1 - (scale_size - scale_size * slide.portion);
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    };
  }

  return (
    <div className="relative w-full ">
      {/* Set the slider container to take 98% of the width */}
      <div ref={sliderRef} className="keen-slider zoom-out w-[98%] mx-auto">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="keen-slider__slide zoom-out__slide relative"
          >
            <div style={scaleStyle(idx)}>
              {/* Dynamic Title */}
              <h1 className="text-5xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 font-bold font-mono">
                {titles[idx]}{" "}
                {/* Displaying dynamic title based on the index */}
              </h1>
              <img alt="src img" src={src} />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={() => slider?.current?.prev()}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full shadow-lg"
      >
        &lt;
      </button>
      <button
        onClick={() => slider?.current?.next()}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full shadow-lg"
      >
        &gt;
      </button>
    </div>
  );
};

export default ServicesPageCarousel;
