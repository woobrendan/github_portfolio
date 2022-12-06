import { Card, CardMedia, CardContent } from '@mui/material'
import ExpPositionToggle from './ExpPositionToggle';
import { Cancel } from '@mui/icons-material';
import { useState } from 'react'
import ExpPositionNoToggle from './ExpPositionNoToggle';


function ExperienceCard({ experience, close }) {

  const [showingDetails, setShowingDetails] = useState(false)
  const positions = experience.positions
  const sro = 'SRO Motorsports America'

  const getDetailStatus = (value) => setShowingDetails(value) 

  const mapJobs = positions.map((position, index) => (
    positions.length > 1 
      ? <ExpPositionToggle key={index } position={position} getDetailStatus={getDetailStatus} />
      : <ExpPositionNoToggle key={index } position={position} />
  ))

  // console.log('show', showingDetails)
  // console.log('positions', positions)

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
          {mapJobs}
        </div>           
      </CardContent>
    </Card>
  )
}

export default ExperienceCard