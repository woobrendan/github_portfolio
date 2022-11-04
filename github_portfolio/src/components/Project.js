import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../Styles/project.scss'
 
 function Project(props) {
   return (
    <div className="project-container">
      <Card>
        <CardMedia
          component="img"
          image={props.project.gif}
          alt={props.project.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.project.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.project.description}
            <br></br>
            <br></br>
            Frameworks: {props.project.frameworks}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" href={props.project.link} startIcon={<GitHubIcon />}>
            Code
          </Button>
        </CardActions>
      </Card>
    </div>
   )
 }
 
 export default Project
 