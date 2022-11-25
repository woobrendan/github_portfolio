import { Person, WorkHistory, StickyNote2, Construction, Home } from '@mui/icons-material'

export default function IconLinks({ getComponent, currentComponent }) {

  const sections = [
    {
    className: 'home-icon',
    name: 'Home',
    component: (<Home fontSize="large" />),
    onClick: ((e) => getComponent(e.target.name))
    },
    {
      className: 'about-icon',
      name: 'About',
      component: (<Person fontSize="large" />),
      onClick: ((e) => getComponent(e.target.name))
    },
    {
      className: 'project-icon',
      name: 'Project',
      component: (<StickyNote2 fontSize="large" />),
      onClick: ((e) => getComponent(e.target.name))
    },
    {
      className: 'skills-icon',
      name: 'Skills',
      component: (<Construction fontSize="large"/>),
      onClick: ((e) => getComponent(e.target.name))
    },
    {
      className: 'work-icon',
      name: 'Experience',
      component: (<WorkHistory fontSize="large"/>),
      onClick: ((e) => getComponent(e.target.name))
    }
  ]

  const mappedSections = sections.map((section, index) => (
    <li key={index}>
      <a className={section.className} name={section.name} onClick={section.onClick}>
        {section.component}
      </a>
    </li>
  ))

  return(
    <div className="icon-list">
      <nav>
        <ul>
          {/* <li>
            <a className="home-icon" name="Home" onClick={(e) => getComponent(e.target.name)}>
              <Home fontSize="large"/>
            </a>
          </li>
          <li>
            <a className="about-icon" name="About" onClick={(e) => getComponent(e.target.name)}>
              <Person fontSize="large"/>
            </a>
          </li>
          <li>
            <a className="project-icon" name="Project" onClick={(e) => getComponent(e.target.name)}>
              <StickyNote2 fontSize="large"/>
            </a>
          </li>
          <li>
            <a className="skills-icon" name="Skills" onClick={(e) => getComponent(e.target.name)}>
              <Construction fontSize="large"/>
            </a>
          </li>
          <li>
            <a className="work-icon" name="Experience" onClick={(e) => getComponent(e.target.name)}>
              <WorkHistory fontSize="large"/>
            </a>
          </li> */}
          {mappedSections}
        </ul>
      </nav>
    </div>
  )
}