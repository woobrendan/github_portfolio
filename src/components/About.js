import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../Styles/about.scss'
import BoyIcon from '@mui/icons-material/Boy';
import Box from '@mui/material/Box';
import pwc from '../images/PWC.jpg'
import Education from './Education/Education';

export default function AboutMe() {
  return (
    <div id="About-container">
      <div className="About-cards">
        <div className="intro_header">
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
        <Card sx={{ maxWidth: 700 }} id="about-description">
          <CardContent>
            <BoyIcon fontSize="large"/>
            <h4>Life of Brendan Woo</h4>
            <div className="intro_container">
              <p>Hello and welcome to my portfolio!</p>
              <p>I am an aspiring Software Developer transitioning my career from professional sports. After 8 great years of working in sports car racing, I decided to make a change and took a Full Stack Web Development Bootcamp at Lighthouse Labs where in the span of 12 weeks I went from knowing nothing about coding to being able to develop my own functioning app.
              </p>
              <p>
              After my bootcamp I was able to identify some areas of high stress and inefficiency at my racing job, and decided to build my own application to see if I could make work flow smoother. I designed my app Podium Assistant that removed the rush of preparing a last minute podium script and instead allowed for easily selectable winners that populated a script with all required information with the click of a button.
              </p>
              <p>
              I am extremely satisfied with the improvement to work life quality that my app provided to my colleagues and myself, and am excited for the next opportunity to contribute within the industry.
              </p>
              <p>
              If you would like to learn more or collaborate on future opportunities, please feel free to connect with me.
              </p>
            </div>
          </CardContent>
        </Card>
        </div>
        <Education />
      </div>
    </div>
  )
}