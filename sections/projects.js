import React from "react";
import Divider from "../components/divider";
import ProjectLists from "../components/project_lists";
import Title from "../components/title";

const Projects = () => {
  return (
    <div id="projects" className="background">
      <Divider />
      <Title>Projects..</Title>
      <ProjectLists />
    </div>
  );
};

export default Projects;
