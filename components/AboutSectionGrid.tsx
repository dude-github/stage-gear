// "use client";

// // import { HeartIcon } from "lucide-react";
// // import { HeartIcon } from "lucide-react";
// import Image from "next/image";
// import React, { useState } from "react";

// import { HeartIcon } from "lucide-react";

// interface Project {
//   id: string;
//   imageUrl: string;
//   title: string;
//   description: string;
//   link?: string;
// }

// interface AboutSectionGridProps {
//   projects: Project[];
// }

// const AboutSectionGrid = ({ projects }: AboutSectionGridProps) => {
//   const [liked, setLiked] = useState(false);

//   const handleClick = () => {
//     setLiked(!liked); // Toggle the liked state
//   };
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
//       {projects.map((project) => (
//         <div
//           key={project.id}
//           className="relative overflow-hidden rounded-lg shadow-lg group"
//         >
//           {/* Image Section with next/image */}
//           <div className="w-full h-96 relative">
//             <Image
//               src={project.imageUrl}
//               alt={project.title}
//               layout="fill"
//               objectFit="cover"
//               className="transition-transform duration-300 group-hover:scale-105"
//             />
//             <div className="absolute bottom-4 left-4 z-10">
//               <HeartIcon
//                 onClick={handleClick}
//                 key={project.id}
//                 className="h-8 w-8 cursor-pointer"
//               />
//             </div>
//           </div>

//           {/* Title and Description */}
//           <div className="absolute inset-0 flex items-center justify-center uppercase">
//             <div className="text-center font-extrabold text-3xl text-white p-4">
//               {/* <h3 className="text-xl font-bold">{project.title}</h3> */}
//               <p className="mt-2">{project.description}</p>
//               {project.link && (
//                 <a
//                   href={project.link}
//                   className="mt-4 inline-block text-yellow-300 hover:text-yellow-400"
//                 >
//                   View Project
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AboutSectionGrid;

//////////// Chat GPT
"use client";

import { HeartIcon } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface Project {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  link?: string;
}

interface AboutSectionGridProps {
  projects: Project[];
}

const AboutSectionGrid = ({ projects }: AboutSectionGridProps) => {
  const [likedProjects, setLikedProjects] = useState<{
    [key: string]: boolean;
  }>({});

  // Load liked projects from localStorage when the component mounts
  useEffect(() => {
    const savedLikes = localStorage.getItem("likedProjects");
    if (savedLikes) {
      setLikedProjects(JSON.parse(savedLikes));
    }
  }, []);

  // Handle like/unlike toggle and store in localStorage
  const handleClick = (projectId: string) => {
    const newLikedProjects = {
      ...likedProjects,
      [projectId]: !likedProjects[projectId],
    };
    setLikedProjects(newLikedProjects);
    localStorage.setItem("likedProjects", JSON.stringify(newLikedProjects));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
      {projects.map((project) => {
        const isLiked = likedProjects[project.id] || false;

        return (
          <div
            key={project.id}
            className="relative overflow-hidden shadow-lg group"
          >
            {/* Image Section with next/image */}
            <div className="w-full h-96 relative">
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 z-10">
                {isLiked ? (
                  <HeartIcon
                    onClick={() => handleClick(project.id)}
                    key={project.id}
                    className="h-6 w-6 cursor-pointe text-red-500 fill-red-500"
                  />
                ) : (
                  <HeartIcon
                    onClick={() => handleClick(project.id)}
                    key={project.id}
                    className="h-6 w-6 cursor-pointer text-white"
                  />
                )}
              </div>
            </div>

            {/* Title and Description */}
            <div className="absolute inset-0 flex items-center justify-center uppercase">
              <div className="text-center font-extrabold text-3xl text-white p-4">
                <p className="mt-2">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    className="mt-4 inline-block text-yellow-300 hover:text-yellow-400"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutSectionGrid;
