import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
function Projects() {
  return (
    <>

      <div className="ProjectWrapper" id="projects">
        <div className="Container">
          <div className="SectionTitle">Download</div>
          <ProjectCard />
        </div>
      </div>
    </>
  );
}

export default Projects;
