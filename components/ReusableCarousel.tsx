"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface CarouselItem {
  src: string;
  alt: string;
  title: string;
  description?: string;
  link?: string;
  id: string; // Add an ID to each item for unique tracking
}

interface ReusableCarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  infiniteLoop?: boolean;
  interval?: number;
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4, // Show 4 images on desktop view
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const images = ["1", "2", "3", "4", "5", "6"];

const ReusableCarousel: React.FC<ReusableCarouselProps> = ({
  items,
  autoPlay = false,
  infiniteLoop = false,
  interval = 5000,
}) => {
  const [liked, setLiked] = useState(Array(images.length).fill(false));
  const currentIndex = 0;

  const toggleLike = (index: number) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

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

  return (
    <Carousel
      responsive={responsive}
      autoPlay={autoPlay}
      infinite={infiniteLoop}
      autoPlaySpeed={interval}
      className="w-full xl:mx-5 h-[600px] max-w-full mx-auto"
    >
      {items.map((item, index) => (
        <div key={item.id}>
          <Link
            key={item.id}
            href={item.link || "#"}
            // target="_blank"
            rel="noopener noreferrer"
            className="relative pr-1 block"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={500}
              height={600}
              className="w-full h-[600px]  transition duration-300 ease-in-out hover:invert"
            />

            {item.description && (
              <p className="absolute w-full bottom-[45%] left-1/2 transform text-center -translate-x-1/2  text-white text-lg text-bold md:text-lg px-3 py-1 md:px-4 md:py-0 rounded-md">
                <span className="text-3xl font-extrabold">{item.title}</span>
                <br />
                <span className="text-sm font-extralight">
                  {item.description}
                </span>
              </p>
            )}
          </Link>
          <button
            onClick={() => toggleLike((currentIndex + index) % images.length)}
            className={`absolute bottom-4 left-4 p-2  transition-transform transform ${
              liked[(currentIndex + index) % images.length]
                ? "scale-110 text-red-500"
                : "scale-100 text-gray-500"
            }`}
          >
            <Heart
              className="w-6 h-6"
              fill={
                liked[(currentIndex + index) % images.length] ? "red" : "none"
              }
            />
          </button>
        </div>
      ))}
    </Carousel>
  );
};

export default ReusableCarousel;
