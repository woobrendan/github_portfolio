import { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
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
          <AddCircleOutlineIcon fontSize="medium" />        
        </Button>  
      </div>
    </>
  ))

  return (
    <>
      {!selectedPosition && mappedPositions}
    </>
  )
}

export default ExpMultiPosition
