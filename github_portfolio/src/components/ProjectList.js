import {projects} from './projectInfo'
import Project from './Project'
import { Typography } from '@mui/material'

function ProjectList() {
  const mappedProjects = projects.map((project, index) => (
    <Project project={project} key={index}/>
  ))
  return (
    <div id="project-list">
      <Typography variant="h3" gutterBottom component="div">
        Projects
      </Typography>
      {mappedProjects}
    </div>
  )
}

export default ProjectList

