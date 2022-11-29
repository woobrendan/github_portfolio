import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { Email } from '@mui/icons-material'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '../../Styles/top_nav.scss'

function TopNavBar({ currentComponent }) {
  return (
    <nav className="top_nav">
      {currentComponent !== 'Home' && 
        <div className="top_nav_title">
          <h3>Brendan Woo - Full Stack Developer</h3>
        </div>
      }
      <div className="top_nav_links">
        <a 
          target="_blank" 
          rel="noreferrer"
          href="https://www.linkedin.com/in/woobrendan/"
          className="linkedin-icon"
        >
          <FontAwesomeIcon icon={faLinkedin} size="xl"/>
        </a>
        <a 
          target="_blank" 
          rel="noreferrer"
          href="https://github.com/woobrendan"
          className="github-icon"
        >
          <FontAwesomeIcon icon={faGithub} size="xl"/>
        </a>
        {/* <a href="#Contact" className="contact-icon">
          <Email fontSize="large" />
        </a> */}
      </div>
  
    </nav>
  )
}

export default TopNavBar