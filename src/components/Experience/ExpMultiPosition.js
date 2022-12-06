import { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


function ExpMultiPosition({ positions }) {
  const [selectedPosition, setSelectedPosition] = useState('')

  const mappedPositions = positions.mappedPositions((position, index) => (
    <>
      <div className="position_header">
        <h3>{position.title}</h3>
        <p>{position.year}</p>
      </div>   
      <div className="details_toggle">
        <h4>Details</h4>
        <Button onClick={()=> handleToggle()}>         
          <AddCircleOutlineIcon fontSize="medium" />        
        </Button>  
      </div>
    </>
  ))

  return (
    <>
    <div className="position_header">
      <h3>{position.title}</h3>
      <p>{position.year}</p>
    </div>   
    <div className="details_toggle">
      <h4>Details</h4>
      <Button onClick={()=> handleToggle()}>
        {selectedPosition
          ? <RemoveCircleOutlineIcon fontSize="medium" /> 
          : <AddCircleOutlineIcon fontSize="medium" /> 
        }
      </Button>  
    </div>

   </>
  )
}

export default ExpMultiPosition
