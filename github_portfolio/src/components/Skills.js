import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { skills } from "./skill_info";
import '../Styles/skills.scss'

function Skills() {
  const mappedSkillList = (someArray) => {
    const skillList = someArray.map((skill, index) => (
        <li key={index}>
          <span>{skill}</span>
        </li>
    ))
    return skillList;
  }

  const mappedSkills = skills.map((skill, index) => (
    <Card key={index}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {skill.title}
        </Typography>
        <ul className="skill-info-list">
          {mappedSkillList(skill.info)}
        </ul>
      </CardContent>
    </Card>
  ));

  return (
    <div id="skills-list">
      <Typography variant="h3" gutterBottom component="div">
        Skills
      </Typography>
      {mappedSkills}
    </div>
  )
}

export default Skills
