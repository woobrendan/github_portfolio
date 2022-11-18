import { Card, CardContent, CardActions, CardMedia, Button } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import '../../Styles/project.scss'
 
 function ProjectCard(props) {
   const project = props.project
   return (
    <div className="project-container">
      <Card sx={{ width: 650 }}>
        <CardMedia
          component="img"
          image={project.gif}
          alt={project.name}
          sx={{ height: 550 }}
        />
        <CardContent>
          <h5>{project.name}</h5>
          <p>{project.description}</p>
          <p>Frameworks: {project.frameworks}</p>
        </CardContent>
        <CardActions>
          <Button variant="outlined" href={project.link} startIcon={<GitHubIcon />}>
            Code
          </Button>
        </CardActions>
      </Card>
    </div>
   )
 }
 
 export default ProjectCard
 