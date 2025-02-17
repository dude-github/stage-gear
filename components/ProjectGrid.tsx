import Image from "next/image";
import React from "react";

interface Project {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  link?: string;
}

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative overflow-hidden  shadow-lg group"
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
          </div>

          {/* Title and Description */}
          <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-center font-bold tracking-wider text-3xl text-white p-4">
              {/* <h3 className="text-xl font-bold">{project.title}</h3> */}
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
      ))}
    </div>
  );
};

export default ProjectGrid;
