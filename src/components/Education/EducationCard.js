import { Card, CardContent, CardMedia } from "@mui/material";

function EducationCard(props) {
  const school = props.schoolDetails;
  return (
    <Card sx={{ maxWidth: 700 }} >
      <CardMedia
          component="img"
          image={school.imageURL}
          alt={school.schoolName}
          height="200"
        />
        <CardContent >
          <div className="education_header">
            <div className="school_info">
              <h1>{school.degree}</h1>
              <h3>{school.year}</h3>
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