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