import { Card, CardMedia, CardContent } from '@mui/material';

function ExperienceGridCard({ experience, getCompName }) {
  return (

    <div className="experience_grid_card">
      <img 
        src={experience.image} 
        alt={experience.company} 
        name={experience.company}
        onClick={(e) => getCompName(e.target.name)}
      />
    </div>
  )
}

export default ExperienceGridCard