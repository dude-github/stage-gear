import ProjectGrid from "@/components/ProjectGrid";
// import { LayoutGrid } from "@/components/ui/layout-grid";
import React from "react";

// Skeleton loader
// const SkeletonOne = () => {
//   return (
//     <div>
//       <p className="font-bold md:text-4xl text-xl text-white">
//         House in the woods
//       </p>
//       <p className="font-normal text-base text-white"></p>
//       <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//         A serene and tranquil retreat, this house in the woods offers a peaceful
//         escape from the hustle and bustle of city life.
//       </p>
//     </div>
//   );
// };

// const SkeletonTwo = () => {
//   return (
//     <div>
//       <p className="font-bold md:text-4xl text-xl text-white">
//         House above the clouds
//       </p>
//       <p className="font-normal text-base text-white"></p>
//       <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//         Perched high above the world, this house offers breathtaking views and a
//         unique living experience. It&apos;s a place where the sky meets home,
//         and tranquility is a way of life.
//       </p>
//     </div>
//   );
// };
// const SkeletonThree = () => {
//   return (
//     <div>
//       <p className="font-bold md:text-4xl text-xl text-white">
//         Greens all over
//       </p>
//       <p className="font-normal text-base text-white"></p>
//       <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//         A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
//         perfect place to relax, unwind, and enjoy life.
//       </p>
//     </div>
//   );
// };
// const SkeletonFour = () => {
//   return (
//     <div>
//       <p className="font-bold md:text-4xl text-xl text-white">
//         Rivers are serene
//       </p>
//       <p className="font-normal text-base text-white"></p>
//       <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//         A house by the river is a place of peace and tranquility. It&apos;s the
//         perfect place to relax, unwind, and enjoy life.
//       </p>
//     </div>
//   );
// };

// Cards grid View
// const cards = [
//   {
//     id: 1,
//     content: <SkeletonOne />,
//     className: "md:col-span-2",
//     thumbnail:
//       "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 2,
//     content: <SkeletonTwo />,
//     className: "col-span-1",
//     thumbnail:
//       "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 3,
//     content: <SkeletonThree />,
//     className: "col-span-1",
//     thumbnail:
//       "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 4,
//     content: <SkeletonFour />,
//     className: "md:col-span-2",
//     thumbnail:
//       "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 5,
//     content: <SkeletonOne />,
//     className: "md:col-span-2",
//     thumbnail:
//       "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 6,
//     content: <SkeletonTwo />,
//     className: "col-span-1",
//     thumbnail:
//       "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 7,
//     content: <SkeletonThree />,
//     className: "col-span-1",
//     thumbnail:
//       "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 8,
//     content: <SkeletonFour />,
//     className: "md:col-span-2",
//     thumbnail:
//       "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

// New Grid

const projects = [
  {
    id: "1",
    imageUrl: "https://picsum.photos/600/350?v=1",
    title: "Project 1",
    description: "KOLOR IN THE PARK",
    link: "",
  },
  {
    id: "2",
    imageUrl: "https://picsum.photos/600/350?v=2",
    title: "Project 2",
    description: "CLARIO",
    link: "",
  },
  {
    id: "3",
    imageUrl: "https://picsum.photos/600/350?v=3",
    title: "Project 3",
    description: "GAME OF SOUND",
  },
  {
    id: "4",
    imageUrl: "https://picsum.photos/600/350?v=4",
    title: "Project 3",
    description: "MAGNOSTEEN DETOUR",
  },
  {
    id: "5",
    imageUrl: "https://picsum.photos/600/350?v=5",
    title: "Project 3",
    description: "THE TOYS",
  },
  {
    id: "6",
    imageUrl: "https://picsum.photos/600/350?v=6",
    title: "Project 3",
    description: "JOOX AWARD",
  },
  {
    id: "7",
    imageUrl: "https://picsum.photos/600/350?v=7",
    title: "Project 3",
    description: "MAC AYRES",
  },
  {
    id: "8",
    imageUrl: "https://picsum.photos/600/350?v=8",
    title: "Project 3",
    description: "CATEXPO 5",
  },
  {
    id: "9",
    imageUrl: "https://picsum.photos/600/350?v=9",
    title: "Project 3",
    description: "MARSHMELLO",
  },
  {
    id: "10",
    imageUrl: "https://picsum.photos/600/350?v=10",
    title: "Project 3",
    description: "BETTER WEATHER",
  },
  {
    id: "11",
    imageUrl: "https://picsum.photos/600/350?v=11",
    title: "Project 3",
    description: "BLEN FEST",
  },
  {
    id: "12",
    imageUrl: "https://picsum.photos/600/350?v=12",
    title: "Project 3",
    description: "INSPIRATIVE",
  },
  {
    id: "13",
    imageUrl: "https://picsum.photos/600/350?v=13",
    title: "Project 3",
    description: "SCRUBB 18+",
  },
  {
    id: "14",
    imageUrl: "https://picsum.photos/600/350?v=14",
    title: "Project 3",
    description: "MUSIC IN MEMORIES",
  },
  {
    id: "15",
    imageUrl: "https://picsum.photos/600/350?v=15",
    title: "Project 3",
    description: "BMMF 9",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <main className="h-fit w-full">
      <ProjectGrid projects={projects} />
      {/* <LayoutGrid cards={cards} /> */}
    </main>
  );
};

export default Projects;
