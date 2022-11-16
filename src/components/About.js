import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../Styles/about.scss'
import BoyIcon from '@mui/icons-material/Boy';
import Box from '@mui/material/Box';
import pwc from '../images/PWC.jpg'
import Education from './Education/Education';
import ImageSlider from './ImageSlider';
import AboutDescription from './AboutDescription';

export default function AboutMe() {
  return (
    <div id="About-container">
      <div className="About-cards">
        <div className="intro_header">
          <div className="intro_left">
            <Box
              component="img"
              sx={{
                width: 300,
                height: 300,
              }}
              alt="SRO Portrait"
              src={pwc}
              id="About-img"
            />
            <ImageSlider />
          </div>
          <AboutDescription />
        </div>
        <Education />
      </div>
    </div>
  )
}