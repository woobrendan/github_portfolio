import { projects } from '../../seeds/projectInfo.js'
import ProjectSide from './ProjectSide.js'
import '../../Styles/project.scss'

function ProjectList() {

  return (
    <>
      <h1>Projects</h1>
      <section id="project-list" >
        {projects.map((project, index) => (
          <ProjectSide
            project={project} 
            key={index}
            index={index + 1}
          />
        ))}
      </section>
    </>
  )
}

export default ProjectList

