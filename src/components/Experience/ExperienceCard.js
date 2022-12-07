import { Card, CardMedia, CardContent } from '@mui/material'
import { Cancel } from '@mui/icons-material';
import ExpPositionNoToggle from './ExpPositionNoToggle';
import ExpMultiPosition from './ExpMultiPosition';


function ExperienceCard({ experience, close }) {

  const positions = experience.positions
  const sro = 'SRO Motorsports America'

  return (
    <Card >
      <Cancel size="large" onClick={() => close()} className="toggle_close"/>
       <CardMedia
        component="img"
        image={experience.image}
        alt={experience.company}
        sx={{ height: experience.company === sro ? 150 : 195 }}
      />
      <CardContent>
        <h2>{experience.company}</h2>
        <h4>Location: {experience.location}</h4>
        <div className="work-info">
          {positions.length <= 1 
            ? <ExpPositionNoToggle position={positions[0]} />
            : <ExpMultiPosition positions={positions}/>
          }
        </div>           
      </CardContent>
    </Card>
  )
}

export default ExperienceCard