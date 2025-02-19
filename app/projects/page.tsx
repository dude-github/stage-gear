import ProjectGrid from "@/components/ProjectGrid";
import { projectPageProjects } from "@/data";
import React from "react";

const Projects = () => {
  return (
    <main className="h-fit w-full">
      <ProjectGrid projects={projectPageProjects} />
    </main>
  );
};

export default Projects;
