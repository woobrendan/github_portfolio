import { projects } from '../../seeds/projectInfo.js'
import Project from './ProjectCard'
import ProjectSide from './ProjectSide.js'

function ProjectList() {
  const mappedProjects = projects.map((project, index) => (
    <Project project={project} key={index}/>
  ))

  const testProject = projects.map((project, index) => (
    <ProjectSide
      project={project} 
      key={index}
      index={index}
    
    />
  ))


  return (
    <>
      <h1>Projects</h1>
      <div id="project-list">
        {mappedProjects}
      </div>
      <div className="test">
        {testProject}
      </div>
    </>
  )
}

export default ProjectList

