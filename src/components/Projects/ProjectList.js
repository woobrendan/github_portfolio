import { projects } from "../../seeds/projectInfo.js";
import ProjectSide from "./ProjectSide.js";
import "../../Styles/project.scss";

const ProjectList = () => {
  return (
    <section id="project-list">
      {projects.map((project) => (
        <ProjectSide project={project} key={project.name} />
      ))}
    </section>
  );
};

export default ProjectList;
