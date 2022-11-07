import { Card, CardContent, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import education from '../../seeds/education.json'
import EducationCard from './EducationCard';
import '../../Styles/education.scss'

function Education() {
  
  const mappedEducation = education.map((school) => (
    <EducationCard schoolDetails={school} key={school.schoolName}/>
  ))
  return (
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
      {mappedEducation}
      {/* <Card sx={{ maxWidth: 345 }}>
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
      </Card> */}
    </div>
  )
}

export default Education