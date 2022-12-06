import { useState } from "react";
import {AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { Button } from "@mui/material";


function ExpMultiPosition({ positions }) {
  const [selectedPosition, setSelectedPosition] = useState('');

  const positionHeader = (position) => {
    return (
      <div className="position_header">
        <h3>{position.title}</h3>
        <p>{position.year}</p>
      </div>  
    )
  }

  // Loop through all positions on array and render header and details button
  const mappedPositions = positions.map((position, index) => (
    <div key={index}>
      {positionHeader(position)} 
      <div className="details_toggle">
        <h4>Details</h4>
        <Button onClick={() => setSelectedPosition(position.title)}>         
          <AddCircleOutline fontSize="medium" />        
        </Button>  
      </div>
    </div>
  ))

  //once selectedPosition is truthy, look for matching titles and return that header with mapped out duties
  const selectedJob = () => {
    for (let position of positions) {
      if (position.title === selectedPosition) {
        return (
          <>
            {positionHeader(position)}
            {position.duties.map((duty, index) => (
              <li key={index}>{duty}</li>
            ))}   
            <div className="details_toggle">
              <h4>Close</h4>
              <Button onClick={() => setSelectedPosition('')}>         
                <RemoveCircleOutline fontSize="medium" />        
              </Button>  
            </div>
          </>
        )
      }
    }
  }

  return (
    <>
      {selectedPosition ? selectedJob() : mappedPositions}
    </>
  )
}

export default ExpMultiPosition
