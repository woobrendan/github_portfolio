import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectSide(props) {
  const project = props.project;
  const isEven = props.index % 2 === 0;

  const projectImg = (
    <div className="project_img">
      <img src={project.gif} alt={project.name} />
    </div>
  );
  const projectDetails = (
    <div className="project_info">
      <h5>{project.name}</h5>
      <p>{project.description}</p>
      <p>Frameworks: {project.frameworks}</p>
      <Button variant="outlined" href={project.link} startIcon={<GitHubIcon />}>
        Code
      </Button>
    </div>
  );

  return (
    <section className="project_side_view">
      {projectImg}
      {projectDetails}
    </section>
  );
}

export default ProjectSide;
