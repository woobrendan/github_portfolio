import { Typography } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import autograph from '../images/Laguna-Autograph.jpg'
import irb from '../images/IRB.jpeg'
import tbj from '../images/TBJ.jpeg';
import sro from '../images/sro.jpeg'
import '../Styles/experience.scss'

export default function Experience () {
  return (
    <div className="experience-container" id="Experience">
      <Typography variant="h3" gutterBottom component="div">
        Work Experience
      </Typography>
      <Card >
        <CardMedia
          component="img"
          image={irb}
          alt="Immigration Refugee Board of Canada"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Immigration Refugee Board of Canada
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Assistant to Coordinating Member
          </Typography>
          <div className="work-info">
            <p>Location: Toronto, ON</p>
            <p>Sept 2021 - Dec 2021</p>
          </div>
          <ul className="job-description-list">
            <li><span>
              Worked a casual contract supporting multiple teams and managers with administrative duties such as  facilitation of official documents, taking meeting notes and manage member absence line
            </span></li>
            <li><span>
              Coordinated manager's schedules, ensuring days and meetings are organized
            </span></li>
            <li><span>
              Facilitated member hearing schedules and caseloads, updating HR software as required
            </span></li>
          </ul>
        </CardContent>
      </Card>
      <Card >
        <CardMedia
          component="img"
          image={sro}
          alt="SRO Motorsports Group"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            SRO Motorsports America
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Team Relations Coodinator
          </Typography>
          <div className="work-info">
            <p>Location: Various, USA</p>
            <p>May 2014 - Sept 2021</p>
          </div>
          <ul className="job-description-list">
            <li><span>
              Advised on marketing plans for partnership activations, such as branding, car parades, autograph sessions, and more, improving the overall fan experience
            </span></li>
            <li><span>
              Maintained communication with clients and partners, whilst ensuring the success of events by planning and managing operations
            </span></li>
            <li><span>
              Prepared various official documents and coordinate their distribution to constituents
            </span></li>
          </ul>
          <CardMedia
          component="img"
          image={autograph}
          alt="Laguna Seca Autograph Session"
        />
        </CardContent>
      </Card>
      <Card >
        <CardMedia
          component="img"
          image={tbj}
          alt="Toronto Blue Jays"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Toronto Blue Jays
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            Warehouse Assistant
          </Typography>
          <div className="work-info">
            <p>Location: Toronto, ON</p>
            <p>Feb 2018 - Nov 2018</p>
          </div>
          <ul className="job-description-list">
            <li><span>
              Coordinated the movement of product, receiving the product and its distribution to various vendor locations throughout the stadium and stores
            </span></li>
            <li><span>
              Maintained and managed multiple warehouses to ensure cleanliness and inventory accuracy
            </span></li>
            <li><span>
              Re-organized warehouses to a new organizational style leading to better work efficiency
            </span></li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}