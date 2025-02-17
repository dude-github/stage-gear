/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight, XCircle } from "lucide-react";

interface Slide {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  link: string;
}

interface ImageSlideShowProps {
  slides: Slide[];
}

const ImageSlideShow: React.FC<ImageSlideShowProps> = ({ slides }) => {
  const { id } = useParams();
  const router = useRouter();

  // Extract base route dynamically from current path
  const basePath =
    typeof window !== "undefined"
      ? window.location.pathname.split("/").slice(0, -1).join("/")
      : "";

  // Find the initial slide index
  const initialIndex = slides.findIndex((slide) => slide.id === id);
  const [currentIndex, setCurrentIndex] = useState(
    initialIndex >= 0 ? initialIndex : 0
  );

  useEffect(() => {
    if (slides[currentIndex].id !== id) {
      router.push(`${basePath}/${slides[currentIndex].id}`);
    }
  }, [currentIndex, id, router, basePath]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleClose = () => {
    router.replace(basePath);
  };

  return (
    <main className="flex p-6 w-full min-h-fit items-center justify-center relative">
      <div className="flex flex-col md:flex-row w-full h-[600px] bg-white overflow-hidden gap-32">
        {/* Image Section */}
        <section className="relative w-full md:w-1/2 h-[300px] md:h-auto flex justify-center items-center overflow-hidden">
          <Button
            className="absolute left-0 z-10 bg-white shadow-md"
            onClick={handlePrev}
          >
            <MoveLeft size={24} />
          </Button>
          <div className="px-10 bg-white">
            <img
              src={slides[currentIndex].src}
              alt={slides[currentIndex].alt}
              className="w-full h-[300px] md:h-[500px] object-cover"
            />
          </div>
          <Button
            className="absolute right-0 z-10 bg-white  shadow-md"
            onClick={handleNext}
          >
            <MoveRight size={24} />
          </Button>
        </section>

        {/* Description Section */}
        <section className="w-full md:w-1/2 p-6 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-300">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            {slides[currentIndex].title}
          </h2>
          <p className="text-md md:text-lg text-gray-700">
            {slides[currentIndex].description}
          </p>
        </section>
      </div>

      {/* Close Button */}
      <button
        className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-600 hover:text-gray-900"
        onClick={handleClose}
      >
        <XCircle size={40} />
      </button>
    </main>
  );
};

export default ImageSlideShow;
