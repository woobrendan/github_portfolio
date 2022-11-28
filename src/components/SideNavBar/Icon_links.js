import { Person, WorkHistory, StickyNote2, Construction, Home } from '@mui/icons-material'

export default function IconLinks({ getComponent, currentComponent }) {
  console.log('side current', currentComponent)

  const sections = [
    {
    className: 'home-icon',
    name: 'Home',
    display: 'HOME',
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
      {currentComponent !== section.name 
        ? <a 
            className={section.className} 
            name={section.name} 
            onClick={section.onClick}
            href={`#${section.name}`}
          >
            {section.component}
          </a>
        : <a className="selected">
            {section.name.toUpperCase()}
          </a>
      }
    </li>
  ))

  return(
    <div className="icon-list">
      <nav>
        <ul>
          {mappedSections}
        </ul>
      </nav>
    </div>
  )
}