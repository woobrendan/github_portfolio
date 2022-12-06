import { useState } from "react";
import {AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { Button } from "@mui/material";


function ExpMultiPosition({ positions }) {
  const [selectedPosition, setSelectedPosition] = useState('')

  const mappedPositions = positions.map((position, index) => (
    <>
      <div className="position_header">
        <h3>{position.title}</h3>
        <p>{position.year}</p>
      </div>   
      <div className="details_toggle">
        <h4>Details</h4>
        <Button onClick={() => setSelectedPosition(position.title)}>         
          <AddCircleOutline fontSize="medium" />        
        </Button>  
      </div>
    </>
  ))

  const selectedJob = () => {
    for (let position of positions) {
      if (position.title === selectedPosition) {
        return (
          <>
            <div className="position_header">
              <h3>{position.title}</h3>
              <p>{position.year}</p>
            </div>
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
      {!selectedPosition && mappedPositions}
      {selectedPosition && selectedJob()}
    </>
  )
}

export default ExpMultiPosition
