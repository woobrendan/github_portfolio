import { Person, Email, WorkHistory, StickyNote2, Construction } from '@mui/icons-material'
import { useState } from 'react'


export default function IconLinks({ getComponent }) {

  const [selected, setSelected] = useState('');

  const getValue = (event) => {
    console.log('event', event.target.name)
    setSelected(event.target.name)
  }

  return(
    <div className="icon-list">
      <nav>
        <ul>
          <li>
            <a href="#About-container" className="about-icon" name="About" onClick={(e) => getComponent(e.target.name)}>
              <Person fontSize="large"/>
            </a>
          </li>
          <li>
            <a href="#project-list" className="project-icon" name="Project" onClick={(e) => getComponent(e.target.name)}>
              <StickyNote2 fontSize="large"/>
            </a>
          </li>
          <li>
            <a href="#skills-list" className="skills-icon"  name="Skills" onClick={(e) => getComponent(e.target.name)}>
              <Construction fontSize="large"/>
            </a>
          </li>
          <li>
            <a href="#Experience" className="work-icon"
            name="Experience" onClick={(e) => getComponent(e.target.name)}>
              <WorkHistory fontSize="large"/>
            </a>
          </li>
          <li>
            <a href="#Contact" className="contact-icon">
              <Email fontSize="large" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}