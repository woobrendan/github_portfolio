import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { skills } from "../../seeds/skill_info";
import '../../Styles/skills.scss'
import SkillList from "./SkillList";

function Skills() {
  console.log('skills', skills)
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
    <>
      <h1>Skills</h1>
      <div id="skills-list">
        {skills.map((skill, index) => (
          <Card key={index}>
            <CardContent>
                <div className="skill_card" key={skill.title}>
                  <h2>{skill.title}</h2>
                  <SkillList skills={skill.info} />
                </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Skills
