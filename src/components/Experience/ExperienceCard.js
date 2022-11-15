import { Card, CardMedia, CardContent } from '@mui/material'
import ExpPositions from './ExpPositions';


function ExperienceCard(props) {

  const experience = props.experience;
  const positions = experience.positions

  const mappedJobs = positions.map((position, index) => (
    <ExpPositions 
      key={index } 
      position={position}
      hasToggle={index > 0 ? true : false} 
    />
  ))

  return (
    <Card sx={{ width: 650 }}>
      <CardMedia
        component="img"
        image={experience.image}
        alt={experience.company}
        sx={{ height: 195 }}
      />
      <CardContent>
        <h2>{experience.company}</h2>
        <h4>Location: {experience.location}</h4>
        <div className="work-info">
          {mappedJobs}
        </div>           
      </CardContent>
    </Card>
  )
}

export default ExperienceCard