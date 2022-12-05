import { Card, CardMedia, CardContent } from '@mui/material'
import ExpPositions from './ExpPositions';
import { Cancel } from '@mui/icons-material';
import { useState } from 'react'


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

  console.log('show', showingDetails)

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