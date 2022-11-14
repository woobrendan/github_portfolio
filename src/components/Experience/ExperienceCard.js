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
          <Typography gutterBottom variant="subtitle1" component="div">
            Assistant to Coordinating Member
          </Typography>
          <div className="work-info">
            <p>Location: Toronto, ON</p>
            <p>Sept 2021 - Dec 2021</p>
          </div>
          <ul className="job-description-list">
            <li><span>
              Worked a casual contract supporting multiple teams and managers with administrative duties such as  facilitation of official documents, taking meeting notes and manage member absence line
            </span></li>
            <li><span>
              Coordinated manager's schedules, ensuring days and meetings are organized
            </span></li>
            <li><span>
              Facilitated member hearing schedules and caseloads, updating HR software as required
            </span></li>
          </ul>
        </CardContent>
      </Card>
    </>
  )
}

export default ExperienceCard