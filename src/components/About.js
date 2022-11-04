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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>
            </CardContent>
          </Card>
      </div>
    </div>
  )
}