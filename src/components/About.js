import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../Styles/about.scss'
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import BoyIcon from '@mui/icons-material/Boy';
import Box from '@mui/material/Box';
import pwc from '../images/PWC.jpg'

export default function AboutMe() {
  return (
    <div id="About-container">
      <div className="About-cards">
        <Typography variant="h3" gutterBottom component="div">
          About Me
        </Typography>
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
        <div className="Card-list">
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <SchoolIcon />
              <Typography gutterBottom variant="h4" component="div">
                Education
              </Typography>
              <ul>
                <li className="school">Lighthouse Labs</li>
                  <ul>
                    <li>Full Stack Web Development</li>
                  </ul>
                  <br></br>
                <li className="school">Brock University</li>
                  <ul>
                    <li>Sport Management</li>
                  </ul>
              </ul>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <WorkIcon />
              <Typography gutterBottom variant="h4" component="div">
                Working Experience
              </Typography>
              <Typography variant="body2" color="text.secondary">
                7+ Years in Professional Sports
              </Typography>
              <ul>
                <li>SRO Motorsports America</li>
                <li>Toronto Blue Jays</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <Card sx={{ maxWidth: 465 }} id="about-description">
            <CardContent >
              <BoyIcon fontSize="large"/>
              <Typography gutterBottom variant="h4" component="div">
                Life of Brendan
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Hello! I am an aspiring Software Developer transitioning my career from professional sports. After 8 great years of working in sports car racing, I decided to make a change and took a Full Stack Web Development Bootcamp at Lighthouse Labs where in the span of 12 weeks I went from knowing nothing about coding to being able to develop my own functioning app.

              After my bootcamp I was able to identify some areas of high stress and inefficiency at my racing job, and decided to build my own application to see if I could make work flow smoother. I designed my app Podium Assistant that removed the rush of preparing a last minute podium script and instead allowed for easily selectable winners that populated a script with all required information with the click of a button.

              I am super satisfied with the improvement to work life quality that my app provided to my colleagues and myself, and am excited for the next opportunity to contribute within the industry.

              If you would like to learn more or collaborate on future opportunities, please feel free to connect with me.
              </Typography>
            </CardContent>
          </Card>
      </div>
    </div>
  )
}