import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import ExpPositions from './ExpPositions';


function ExperienceCard(props) {
  const experience = props.experience;
  const positions = experience.positions

  const mappedJobs = positions.map((position, index) => (
    <ExpPositions key={index }position={position} />
  ))

  return (
    <>
      <Card >
        <CardMedia
          component="img"
          image={experience.image}
          alt={experience.company}
        />
        <CardContent>
          <h2>{experience.company}</h2>
          <h5>Location: {experience.location}</h5>
          <div className="work-info">
            {mappedJobs}
          </div>           
        </CardContent>
      </Card>
    </>
  )
}

export default ExperienceCard