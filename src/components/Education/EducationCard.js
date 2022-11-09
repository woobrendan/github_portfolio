import { Card, CardContent, CardMedia, Button } from "@mui/material";
import { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function EducationCard(props) {
  
  const [showDescription, setShowDescription] = useState(false);
  const school = props.schoolDetails;

  const handleToggle = () => setShowDescription(!showDescription)
  return (
    <Card sx={{ maxWidth: 700 }} className="education_card">
      <CardMedia
          component="img"
          image={school.imageURL}
          alt={school.schoolName}
          height="200"
        />
        <CardContent >
          {!showDescription && <div className="school_info">
            <h1>{school.degree}</h1>
            <h3>{school.year}</h3>
          </div>}
          {showDescription && 
            <div className="education_description">
              <p>{school.description}</p>
            </div>}
          <div className="description_toggle">
            <h4>Description</h4>
            <Button onClick={()=> handleToggle()}>
              {!showDescription && 
                <AddCircleOutlineIcon fontSize="large" />}
              {showDescription && 
                <RemoveCircleOutlineIcon fontSize="large" />}
            </Button>  
          </div> 
      </CardContent>
    </Card>
  )
} 

export default EducationCard