import { Card, CardContent, CardMedia, Button } from "@mui/material";
import { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function EducationCard({ schoolDetails }) {
  
  const [showDescription, setShowDescription] = useState(false);
  const handleToggle = () => setShowDescription(!showDescription);

  return (
    <Card sx={{ width: 650 }} className="education_card">
      <CardMedia
        component="img"
        image={schoolDetails.imageURL}
        alt={schoolDetails.schoolName}
        height="200"
      />
      <CardContent>
        {!showDescription && <div className="school_info">
          <h1>{schoolDetails.degree}</h1>
          <h3>{schoolDetails.year}</h3>
        </div>}
        {showDescription && 
          <div className="education_description">
            <p>{schoolDetails.description}</p>
          </div>}
        <div className="description_toggle">
          <h4>Details</h4>
          <Button onClick={()=> handleToggle()}>
            {!showDescription && 
              <AddCircleOutlineIcon fontSize="medium" />}
            {showDescription && 
              <RemoveCircleOutlineIcon fontSize="medium" />}
          </Button>  
        </div> 
      </CardContent>
    </Card>
  )
} 

export default EducationCard