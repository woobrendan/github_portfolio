import { projects } from '../../seeds/projectInfo.js'
import Project from './ProjectCard'

function ProjectList() {
  const mappedProjects = projects.map((project, index) => (
    <Project project={project} key={index}/>
  ))
  return (
    <>
      <h1>Projects</h1>
      <div id="project-list">
        {mappedProjects}
      </div>
    </>
  )
}

export default ProjectList

