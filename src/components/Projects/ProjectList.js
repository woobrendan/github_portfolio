import { projects } from '../../seeds/projectInfo.js'
// import Project from './ProjectCard'
import ProjectSide from './ProjectSide.js'

function ProjectList() {

  const testProject = projects.map((project, index) => (
    <ProjectSide
      project={project} 
      key={index}
      index={index + 1}
    
    />
  ))


  return (
    <>
      <h1>Projects</h1>
      <section id="project-list" >
        {testProject}
      </section>
    </>
  )
}

export default ProjectList

