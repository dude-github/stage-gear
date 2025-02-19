"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import { EquipmentSliderImages } from "@/data";

const EquipmentSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prevIndex) =>
        prevIndex < EquipmentSliderImages.length - 1 ? prevIndex + 1 : prevIndex
      ),
    onSwipedRight: () =>
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      ),
    preventScrollOnSwipe: true,
  });

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < EquipmentSliderImages.length - 1 ? prevIndex + 1 : prevIndex
      );
    }, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  return (
    <div
      {...handlers}
      className="relative w-full h-[60vh] sm:h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left Arrow */}
      <button
        className="absolute left-4 z-10 p-2 top-[50%] bg-gray-800 text-white rounded-full sm:left-2 disabled:opacity-50"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
          )
        }
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Image Carousel */}
      <div className="relative flex items-center justify-center h-full">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative w-full h-full cursor-pointer transition duration-1000"
          onClick={() =>
            (window.location.href = EquipmentSliderImages[currentIndex].link)
          }
        >
          <img
            src={EquipmentSliderImages[currentIndex].src}
            alt="slide"
            className="w-full h-full object-cover shadow-lg transition duration-300"
          />
          <motion.div className="absolute inset-0 flex flex-col space-y-3 items-center justify-center text-white bg-black bg-opacity-40">
            <p className="text-xl font-extrabold uppercase tracking-wide">
              {EquipmentSliderImages[currentIndex].text}
            </p>
            <p className="text-center uppercase text-gray-300">
              {EquipmentSliderImages[currentIndex].desc}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-4 z-10 p-2 top-[50%] bg-gray-800 text-white rounded-full sm:right-2 disabled:opacity-50"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex < EquipmentSliderImages.length - 1
              ? prevIndex + 1
              : prevIndex
          )
        }
        disabled={currentIndex === EquipmentSliderImages.length - 1}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default EquipmentSlider;
