import { Card, CardMedia, CardContent } from '@mui/material';

function ExperienceGridCard({ experience }) {
  return (

    <div className="experience_grid_card">
      <img src={experience.image} alt={experience.company} />
    </div>
    // <Card sx={{ width: 200 }} className="experience_grid_card">
    //   <CardMedia
    //     component="img"
    //     image={experience.image}
    //     alt={experience.company}
    //     sx={{ height: 195 }}
    //   />
    //   <CardContent>
    //     <h2>{experience.company}</h2>
    //     <h4>Location: {experience.location}</h4>
    //     <div className="work-info">
    //       {mappedJobs}
    //     </div>           
    //   </CardContent>
    // </Card>
  )
}

export default ExperienceGridCard