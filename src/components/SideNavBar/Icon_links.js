import { Person, Email, WorkHistory, StickyNote2, Construction } from '@mui/icons-material'
import { useState } from 'react'


export default function IconLinks() {

  const [selected, setSelected] = useState('')

  return(
    <div className="icon-list">
      <nav>
        <ul>
          <li>
            <a href="#About-container" className="about-icon" name="About" onClick={getValue}>
              <Person fontSize="large"/>
            </a>
          </li>
          <li>
            <a href="#project-list" className="project-icon" name="Project" onClick={getValue}>
              <StickyNote2 fontSize="large"/>
            </a>
          </li>
          <li>
            <a href="#skills-list" className="skills-icon"  name="Skills" onClick={getValue}>
              <Construction fontSize="large"/>
            </a>
          </li>
          <li>
            <a href="#Experience" className="work-icon"
            name="Experience" onClick={getValue}>
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