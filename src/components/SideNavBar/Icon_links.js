import { Person, Email, WorkHistory, StickyNote2, Construction } from '@mui/icons-material'


export default function IconLinks() {
  return(
    <div className="icon-list">
      <nav>
        <ul>
          <li>
              <a href="#About-container" className="about-icon">
                <Person fontSize="large"/>
              </a>
          </li>
          <li>
              <a href="#project-list" className="project-icon">
                <StickyNote2 fontSize="large"/>
              </a>
          </li>
          <li>
              <a href="#skills-list" className="skills-icon">
                <Construction fontSize="large"/>
              </a>
          </li>
          <li>
            <a href="#Experience" className="work-icon">
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