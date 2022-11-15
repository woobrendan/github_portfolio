import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import ConstructionIcon from '@mui/icons-material/Construction';

export default function IconLinks() {
  return(
    <div className="icon-list">
      <nav>
        <ul>
          <li>
            <a 
              target="_blank" 
              rel="noreferrer"
              href="https://www.linkedin.com/in/woobrendan/"
              className="linkedin-icon"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a 
              target="_blank" 
              rel="noreferrer"
              href="https://github.com/woobrendan"
              className="github-icon"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
              <a href="#About-container" className="about-icon">
                <PersonIcon fontSize="large"/>
              </a>
          </li>
          <li>
              <a href="#project-list" className="project-icon">
                <StickyNote2Icon fontSize="large"/>
              </a>
          </li>
          <li>
              <a href="#skills-list" className="skills-icon">
                <ConstructionIcon fontSize="large"/>
              </a>
          </li>
          <li>
            <a href="#Experience" className="work-icon">
              <WorkHistoryIcon fontSize="large"/>
            </a>
          </li>
          <li>
            <a href="#Contact" className="contact-icon">
              <EmailIcon fontSize="large" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}