import { Card, CardContent } from "@mui/material";

function EducationCard(props) {
  const school = props.schoolDetails;
  return (
    <Card sx={{ maxWidth: 700 }} >
        <CardContent >
          <div className="education_header">
            <div className="education_img_container">
              <img src={school.imageURL} alt={school.schoolName}/>
            </div>
            <div className="school_info">
              <h1>{school.schoolName}</h1>
              <p>{school.degree}</p>
            </div>
          </div>
          <div className="education_description">
            <p>{school.description}</p>
          </div>   
      </CardContent>
    </Card>
  )
} 

export default EducationCard