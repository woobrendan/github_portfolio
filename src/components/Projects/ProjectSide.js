import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectSide = ({ project }) => {
  const { name, description, frameworks, link, gif } = project;

  const projectImg = (
    <div className="project_img">
      <img src={gif} alt={name} />
    </div>
  );

  const projectDetails = (
    <div className="project_info">
      <h5>{name}</h5>
      <p>{description}</p>
      <p>Frameworks: {frameworks}</p>
      <Button variant="outlined" href={link} startIcon={<GitHubIcon />}>
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
};

export default ProjectSide;
