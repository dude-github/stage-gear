/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { useSwipeable } from "react-swipeable";

const images = [
  {
    src: "https://picsum.photos/400/900?v=1",
    text: "COncert",
  },
  {
    src: "https://picsum.photos/400/900?v=2",
    text: "installation",
  },
  {
    src: "https://picsum.photos/400/900?v=3",
    text: "Festival",
  },
  {
    src: "https://picsum.photos/400/900?v=4",
    text: "Ceremony",
  },
  {
    src: "https://picsum.photos/400/900?v=5",
    text: "Live session & Television",
  },
  {
    src: "https://picsum.photos/400/900?v=6",
    text: "Corporate event",
  },
];

const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState(Array(images.length).fill(false));
  const [isPaused, setIsPaused] = useState(false);

  // Load liked status from localStorage
  useEffect(() => {
    const savedLikes = localStorage.getItem("likedImages");
    const parsedLikes = savedLikes
      ? JSON.parse(savedLikes)
      : Array(images.length).fill(false);
    setLiked(parsedLikes);
  }, []);

  // Save liked status to localStorage
  useEffect(() => {
    localStorage.setItem("likedImages", JSON.stringify(liked));
  }, [liked]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const toggleLike = (index: number) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length),
    onSwipedRight: () =>
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      ),
    preventScrollOnSwipe: true,
  });

  return (
    <div
      {...handlers}
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button
        className="absolute left-4 z-10 p-2 top-[500px] bg-gray-800 text-white rounded-full"
        onClick={() =>
          setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
          )
        }
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <div className="relative flex items-center justify-center h-full">
        <div className="flex gap-0 overflow-hidden w-full h-full">
          {[...images, ...images]
            .slice(currentIndex, currentIndex + 5)
            .map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                // transition={{ duration: 0.8, ease: "easeInOut" }}
                className="relative w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 h-full" // Updated width classes
              >
                <img
                  // src={`https://picsum.photos/600/350?v=${index}`}
                  src={image.src}
                  alt="slide"
                  className="w-full h-full object-cover  shadow-lg"
                />
                <motion.div className="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300">
                  <p className="text-lg font-extrabold tracking-wide uppercase text-balance">
                    {image.text}
                  </p>
                </motion.div>
                <button
                  onClick={() =>
                    toggleLike((currentIndex + index) % images.length)
                  }
                  className={`absolute bottom-4 right-4 p-2 rounded-full shadow-md transition-transform transform ${
                    liked[(currentIndex + index) % images.length]
                      ? "scale-110 text-red-500"
                      : "scale-100 text-gray-500"
                  }`}
                >
                  <Heart
                    className="w-6 h-6"
                    fill={
                      liked[(currentIndex + index) % images.length]
                        ? "red"
                        : "none"
                    }
                  />
                </button>
              </motion.div>
            ))}
          <button
            className="absolute right-4 z-10 p-2 top-[500px] bg-gray-800 text-white rounded-full"
            onClick={() =>
              setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
            }
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
