/* eslint-disable @next/next/no-img-element */
// /* eslint-disable @next/next/no-img-element */
// "use client";
// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
// import { useSwipeable } from "react-swipeable";

// const images = [
//   {
//     src: "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     text: "Equipment 1 Description",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     text: "Equipment 2 Description",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     text: "Equipment 3 Description",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     text: "Equipment 4 Description",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     text: "Equipment 5 Description",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     text: "Equipment 6 Description",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     text: "Equipment 7 Description",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     text: "Equipment 8 Description",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     text: "Equipment 9 Description",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     text: "Equipment 10 Description",
//   },
// ];

// const EquipmentSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [liked, setLiked] = useState(Array(images.length).fill(false));
//   const [isPaused, setIsPaused] = useState(false);

//   // Load liked status from localStorage
//   useEffect(() => {
//     const savedLikes = localStorage.getItem("likedImages");
//     const parsedLikes = savedLikes
//       ? JSON.parse(savedLikes)
//       : Array(images.length).fill(false);
//     setLiked(parsedLikes);
//   }, []);

//   // Save liked status to localStorage
//   useEffect(() => {
//     localStorage.setItem("likedImages", JSON.stringify(liked));
//   }, [liked]);

//   useEffect(() => {
//     if (isPaused) return;
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [isPaused]);

//   const toggleLike = (index: number) => {
//     const newLiked = [...liked];
//     newLiked[index] = !newLiked[index];
//     setLiked(newLiked);
//   };

//   const handlers = useSwipeable({
//     onSwipedLeft: () =>
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length),
//     onSwipedRight: () =>
//       setCurrentIndex(
//         (prevIndex) => (prevIndex - 1 + images.length) % images.length
//       ),
//     preventScrollOnSwipe: true,
//   });

//   return (
//     <div
//       {...handlers}
//       className="relative w-full h-screen overflow-hidden"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       <button
//         className="absolute left-4 z-10 p-2 top-[500px] bg-gray-800 text-white rounded-full"
//         onClick={() =>
//           setCurrentIndex(
//             (prevIndex) => (prevIndex - 1 + images.length) % images.length
//           )
//         }
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </button>
//       <div className="relative flex items-center justify-center h-full">
//         <div className="flex gap-0 overflow-hidden w-full h-full">
//           {images.slice(currentIndex, currentIndex + 1).map((image, index) => (
//             <div key={index} className="relative w-full h-full">
//               <img
//                 src={image.src}
//                 alt="equipment"
//                 className="w-full h-full object-cover rounded-lg shadow-lg"
//               />
//               <div className="absolute inset-0 flex items-center justify-center text-white">
//                 <p className="text-lg font-extrabold tracking-wide text-balance">
//                   {image.text}
//                 </p>
//               </div>
//               <button
//                 onClick={() =>
//                   toggleLike((currentIndex + index) % images.length)
//                 }
//                 className={`absolute bottom-4 right-4 p-2 rounded-full shadow-md ${
//                   liked[(currentIndex + index) % images.length]
//                     ? "scale-110 text-red-500"
//                     : "scale-100 text-gray-500"
//                 }`}
//               >
//                 <Heart
//                   className="w-6 h-6"
//                   fill={
//                     liked[(currentIndex + index) % images.length]
//                       ? "red"
//                       : "none"
//                   }
//                 />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//       <button
//         className="absolute right-4 z-10 p-2 top-[500px] bg-gray-800 text-white rounded-full"
//         onClick={() =>
//           setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
//         }
//       >
//         <ChevronRight className="w-6 h-6" />
//       </button>
//     </div>
//   );
// };

// export default EquipmentSlider;

//////////////////////////////

// /* eslint-disable @next/next/no-img-element */
// "use client";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
// import { useSwipeable } from "react-swipeable";

// const images = [
//   {
//     src: "https://picsum.photos/400/900?v=1",
//     text: "Intelligent Lights ",
//     desc: "LED LAMP SOURCE CMY & RGB MOVING FIXTURE",
//   },
//   {
//     src: "https://picsum.photos/400/900?v=1",
//     text: "Static Lights",
//     desc: "LED LAMP SOURCE SPOT & WASH & STROBE FIXTURE",
//   },
//   {
//     src: "https://picsum.photos/400/900?v=3",
//     text: "EFFECT LIGHTS",
//     desc: "ripple-projector dj effects pinspots blinders",
//   },
//   {
//     src: "https://picsum.photos/400/900?v=4",
//     text: "film lights",
//     desc: "LED light-panel tube fresnel & spotlights",
//   },
//   {
//     src: "https://picsum.photos/400/900?v=5",
//     text: "led pixels",
//     desc: "led pixel product bars orbs festoons & tubes",
//   },
//   {
//     src: "https://picsum.photos/400/900?v=6",
//     text: "special effects",
//     desc: "atmospheric effects smoke haze confetti & etc.",
//   },
//   {
//     src: "https://picsum.photos/400/900?v=7",
//     text: "Audio visual",
//     desc: "Speakers projector media sever & etc.",
//   },
//   {
//     src: "https://picsum.photos/400/900?v=8",
//     text: "Control system",
//     desc: "lighting consoles & distribution system",
//   },
// ];

// const EquipmentSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [liked, setLiked] = useState(Array(images.length).fill(false));
//   const [isPaused, setIsPaused] = useState(false);

//   // Load liked status from localStorage
//   useEffect(() => {
//     const savedLikes = localStorage.getItem("likedImages");
//     const parsedLikes = savedLikes
//       ? JSON.parse(savedLikes)
//       : Array(images.length).fill(false);
//     setLiked(parsedLikes);
//   }, []);

//   // Save liked status to localStorage
//   useEffect(() => {
//     localStorage.setItem("likedImages", JSON.stringify(liked));
//   }, [liked]);

//   useEffect(() => {
//     if (isPaused) return;
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [isPaused]);

//   const toggleLike = (index: number) => {
//     const newLiked = [...liked];
//     newLiked[index] = !newLiked[index];
//     setLiked(newLiked);
//   };

//   const handlers = useSwipeable({
//     onSwipedLeft: () =>
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length),
//     onSwipedRight: () =>
//       setCurrentIndex(
//         (prevIndex) => (prevIndex - 1 + images.length) % images.length
//       ),
//     preventScrollOnSwipe: true,
//   });

//   return (
//     <div
//       {...handlers}
//       className="relative w-full h-screen overflow-hidden"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       <button
//         className="absolute left-4 z-10 p-2 top-[500px] bg-gray-800 text-white rounded-full"
//         onClick={() =>
//           setCurrentIndex(
//             (prevIndex) => (prevIndex - 1 + images.length) % images.length
//           )
//         }
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </button>
//       <div className="relative flex items-center justify-center h-full">
//         <div className="flex gap-0 overflow-hidden w-full h-full">
//           {[...images, ...images]
//             .slice(currentIndex, currentIndex + 5)
//             .map((image, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 // transition={{ duration: 0.8, ease: "easeInOut" }}
//                 className="relative w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 h-full" // Updated width classes
//               >
//                 <img
//                   // src={`https://picsum.photos/600/350?v=${index}`}
//                   src={image.src}
//                   alt="slide"
//                   className="w-full h-full object-cover rounded-lg shadow-lg"
//                 />
//                 <motion.div className="absolute inset-0 flex  flex-col space-y-3 items-center justify-center text-white transition-opacity duration-300">
//                   <p className="text-xl font-extrabold uppercase tracking-wide text-balance">
//                     {image.text}
//                   </p>

//                   <p className="text-center uppercase text-gray-300 font-mono">
//                     {image.desc}
//                   </p>
//                 </motion.div>
//                 <button
//                   onClick={() =>
//                     toggleLike((currentIndex + index) % images.length)
//                   }
//                   className={`absolute bottom-4 right-4 p-2 rounded-full shadow-md transition-transform transform ${
//                     liked[(currentIndex + index) % images.length]
//                       ? "scale-110 text-red-500"
//                       : "scale-100 text-gray-500"
//                   }`}
//                 >
//                   <Heart
//                     className="w-6 h-6"
//                     fill={
//                       liked[(currentIndex + index) % images.length]
//                         ? "red"
//                         : "none"
//                     }
//                   />
//                 </button>
//               </motion.div>
//             ))}
//           <button
//             className="absolute right-4 z-10 p-2 top-[500px] bg-gray-800 text-white rounded-full"
//             onClick={() =>
//               setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
//             }
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EquipmentSlider;

// ! CHAT GPT CODE

"use client";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   ChevronLeft,
//   ChevronRight,
//   // Heart
// } from "lucide-react";
// import { useSwipeable } from "react-swipeable";

// const images = [
//   {
//     src: "/img/1.png",
//     text: "Intelligent Lights ",
//     desc: "LED LAMP SOURCE CMY & RGB MOVING FIXTURE",
//     link: "/movinglight",
//   },
//   {
//     src: "/img/2.png",
//     text: "Static Lights",
//     desc: "LED LAMP SOURCE SPOT & WASH & STROBE FIXTURE",
//     link: "/staticlights",
//   },
//   {
//     src: "/img/3.png",
//     text: "EFFECT LIGHTS",
//     desc: "ripple-projector dj effects pinspots blinders",
//     link: "/fxlights",
//   },
//   {
//     src: "/img/4.png",
//     text: "film lights",
//     desc: "LED light-panel tube fresnel & spotlights",
//     link: "/filmlights",
//   },
//   {
//     src: "/img/5.png",
//     text: "led pixels",
//     desc: "led pixel product bars orbs festoons & tubes",
//     link: "/pixels",
//   },
//   {
//     src: "/img/6.png",
//     text: "special effects",
//     desc: "atmospheric effects smoke haze confetti & etc.",
//     link: "/sfx",
//   },
//   {
//     src: "/img/1.png",
//     text: "Audio visual",
//     desc: "Speakers projector media sever & etc.",
//     link: "/audiovisual",
//   },
//   {
//     src: "/img/2.png",
//     text: "Control system",
//     desc: "lighting consoles & distribution system",
//     link: "/controlsystem",
//   },
// ];

// const EquipmentSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [liked, setLiked] = useState(Array(images.length).fill(false));
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     const savedLikes = localStorage.getItem("likedImages");
//     setLiked(
//       savedLikes ? JSON.parse(savedLikes) : Array(images.length).fill(false)
//     );
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("likedImages", JSON.stringify(liked));
//   }, [liked]);

//   useEffect(() => {
//     if (isPaused) return;
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [isPaused]);

//   // const toggleLike = (index: number) => {
//   //   const newLiked = [...liked];
//   //   newLiked[index] = !newLiked[index];
//   //   setLiked(newLiked);
//   // };

//   const handlers = useSwipeable({
//     onSwipedLeft: () =>
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length),
//     onSwipedRight: () =>
//       setCurrentIndex(
//         (prevIndex) => (prevIndex - 1 + images.length) % images.length
//       ),
//     preventScrollOnSwipe: true,
//   });

//   return (
//     <div
//       {...handlers}
//       className="relative w-full h-screen overflow-hidden"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       {/* Left Arrow */}
//       <button
//         className="absolute left-4 z-10 p-2 top-[50%] bg-gray-800 text-white rounded-full"
//         onClick={() =>
//           setCurrentIndex(
//             (prevIndex) => (prevIndex - 1 + images.length) % images.length
//           )
//         }
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </button>

//       {/* Image Carousel */}
//       <div className="relative flex items-center justify-center h-full">
//         <div className="flex gap-0 overflow-hidden w-full h-full">
//           {[...images, ...images]
//             .slice(currentIndex, currentIndex + 5)
//             .map((image, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 className="relative w-1/2 md:w-1/5 h-full cursor-pointer transition duration-1000 hover:grayscale"
//                 onClick={() => (window.location.href = image.link)}
//               >
//                 {/* Image with Grayscale Hover Effect */}
//                 <img
//                   src={image.src}
//                   alt="slide"
//                   className="w-full h-full object-cover shadow-lg transition duration-300 hover:grayscale"
//                 />

//                 {/* Text Overlay */}
//                 <motion.div className="absolute inset-0 flex flex-col space-y-3 items-center justify-center text-white transition-opacity duration-300">
//                   <p className="text-xl font-extrabold uppercase tracking-wide text-balance">
//                     {image.text}
//                   </p>
//                   <p className="text-center uppercase text-gray-300 font-mono">
//                     {image.desc}
//                   </p>
//                 </motion.div>

//                 {/* Like Button */}
//                 {/* <button
//                   onClick={(e) => {
//                     e.stopPropagation(); // Prevents redirect on like button click
//                     toggleLike((currentIndex + index) % images.length);
//                   }}
//                   className={`absolute bottom-4 right-4 p-2 rounded-full shadow-md transition-transform transform ${
//                     liked[(currentIndex + index) % images.length]
//                       ? "scale-110 text-red-500"
//                       : "scale-100 text-gray-500"
//                   }`}
//                 >
//                   <Heart
//                     className="w-6 h-6"
//                     fill={
//                       liked[(currentIndex + index) % images.length]
//                         ? "red"
//                         : "none"
//                     }
//                   />
//                 </button> */}
//               </motion.div>
//             ))}
//         </div>
//       </div>

//       {/* Right Arrow */}
//       <button
//         className="absolute right-4 z-10 p-2 top-[50%] bg-gray-800 text-white rounded-full"
//         onClick={() =>
//           setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
//         }
//       >
//         <ChevronRight className="w-6 h-6" />
//       </button>
//     </div>

//     // ! CHAT GPT CODE
//   );
// };

// export default EquipmentSlider;

// * ///////////////////////////////////////////////////////////////////
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";

const images = [
  {
    src: "/img/1.png",
    text: "Intelligent Lights ",
    desc: "LED LAMP SOURCE CMY & RGB MOVING FIXTURE",
    link: "/movinglight",
  },
  {
    src: "/img/2.png",
    text: "Static Lights",
    desc: "LED LAMP SOURCE SPOT & WASH & STROBE FIXTURE",
    link: "/staticlights",
  },
  {
    src: "/img/3.png",
    text: "EFFECT LIGHTS",
    desc: "ripple-projector dj effects pinspots blinders",
    link: "/fxlights",
  },
  {
    src: "/img/4.png",
    text: "film lights",
    desc: "LED light-panel tube fresnel & spotlights",
    link: "/filmlights",
  },
  {
    src: "/img/5.png",
    text: "led pixels",
    desc: "led pixel product bars orbs festoons & tubes",
    link: "/pixels",
  },
  {
    src: "/img/6.png",
    text: "special effects",
    desc: "atmospheric effects smoke haze confetti & etc.",
    link: "/sfx",
  },
  {
    src: "/img/1.png",
    text: "Audio visual",
    desc: "Speakers projector media sever & etc.",
    link: "/audiovisual",
  },
  {
    src: "/img/2.png",
    text: "Control system",
    desc: "lighting consoles & distribution system",
    link: "/controlsystem",
  },
];

const EquipmentSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex
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
        prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex
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
          onClick={() => (window.location.href = images[currentIndex].link)}
        >
          <img
            src={images[currentIndex].src}
            alt="slide"
            className="w-full h-full object-cover shadow-lg transition duration-300"
          />
          <motion.div className="absolute inset-0 flex flex-col space-y-3 items-center justify-center text-white bg-black bg-opacity-40">
            <p className="text-xl font-extrabold uppercase tracking-wide">
              {images[currentIndex].text}
            </p>
            <p className="text-center uppercase text-gray-300">
              {images[currentIndex].desc}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-4 z-10 p-2 top-[50%] bg-gray-800 text-white rounded-full sm:right-2 disabled:opacity-50"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex
          )
        }
        disabled={currentIndex === images.length - 1}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default EquipmentSlider;
