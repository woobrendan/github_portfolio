import { Card, CardMedia, CardContent } from '@mui/material'
import ExpPositions from './ExpPositions';
import { Cancel } from '@mui/icons-material';
import { useState } from 'react'
import ExpPositionNoToggle from './ExpPositionNoToggle';


function ExperienceCard({ experience, close }) {

  const positions = experience.positions
  const [showingDetails, setShowingDetails] = useState(false)

  const getDetailStatus = (value) => setShowingDetails(value) 

  const mappedJobs = positions.map((position, index) => (
    <ExpPositions 
      key={index } 
      position={position}
      hasToggle={positions.length > 1 ? true : false} 
      getDetailStatus={getDetailStatus}
    />
  ))

  const mapjobs = positions.map((position, index) => {
    positions.length > 1 
      ? <ExpPositions key={index } position={position} getDetailStatus={getDetailStatus} />
      : <ExpPositionNoToggle key={index } position={position} />
  })

  console.log('show', showingDetails)
  console.log('positions', positions)

  return (
    <Card >
      <Cancel size="large" onClick={() => close()} className="toggle_close"/>
      {experience.company !== 'SRO Motorsports America' 
        && <CardMedia
        component="img"
        image={experience.image}
        alt={experience.company}
        sx={{ height: 195 }}
      />}
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