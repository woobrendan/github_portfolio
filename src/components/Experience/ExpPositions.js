import { useState } from "react";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function ExpPositionToggle(props) {
  const [showDetails, setShowDetails] = useState(false);
  const position = props.position

  const handleToggle = () => {
    setShowDetails(!showDetails)
    props.getDetailStatus(!showDetails)
  }
  
  const mappedDuties = position.duties.map((duty, index) => (
    <li key={index}>
      {duty}
    </li>
  ))

 return (
   <>
    <div className="position_header">
      <h3>{position.title}</h3>
      <p>{position.year}</p>
    </div>
    {showDetails && 
      <ul className="job-description-list">
        {mappedDuties}
      </ul>
    }
    {props.hasToggle && 
      <div className="details_toggle">
        <h4>Details</h4>
        <Button onClick={()=> handleToggle()}>
          {showDetails 
            ? <RemoveCircleOutlineIcon fontSize="medium" /> 
            : <AddCircleOutlineIcon fontSize="medium" /> 
          }
        </Button>  
      </div>
      }
   </>
 )
}
export default ExpPositionToggle