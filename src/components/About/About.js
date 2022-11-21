import '../../Styles/about.scss'
import Box from '@mui/material/Box';
import pwc from '../../images/PWC.jpg'
import ImageSlider from './ImageSlider';
import AboutDescription from './AboutDescription';

export default function AboutMe() {
  return (
    <div id="About-container">
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
    </div>
  )
}