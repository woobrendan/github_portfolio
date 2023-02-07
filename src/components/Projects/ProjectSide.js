import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectSide = ({ project }) => {
  const { name, description, frameworks, link, gif } = project;

  return (
    <section className="project_side_view">
      <div className="project_img">
        <img src={gif} alt={name} />
      </div>
      <div className="project_info">
        <h5>{name}</h5>
        <p>{description}</p>
        <p>Frameworks: {frameworks}</p>
        <Button variant="outlined" href={link} startIcon={<GitHubIcon />}>
          Code
        </Button>
      </div>
    </section>
  );
};

export default ProjectSide;
