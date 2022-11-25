import { Person, WorkHistory, StickyNote2, Construction, Home } from '@mui/icons-material'

export default function IconLinks({ getComponent }) {

  return(
    <div className="icon-list">
      <nav>
        <ul>
          <li>
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
          </li>
        </ul>
      </nav>
    </div>
  )
}