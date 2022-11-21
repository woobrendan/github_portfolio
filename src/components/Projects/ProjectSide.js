import { Button } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectSide(props) {
  const project = props.project

  return (
    <section className="project_side_view">
      <div className="project_img">

      </div>
      <div className="project_info">
        <h5>{project.name}</h5>
        <p>{project.description}</p>
        <p>Frameworks: {project.frameworks}</p>
        <Button variant="outlined" href={project.link} startIcon={<GitHubIcon />}>
          Code
        </Button>
      </div>
    </section>
  )
}

export default ProjectSide