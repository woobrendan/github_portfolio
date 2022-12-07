import { Card, CardContent } from "@mui/material";
import { skills } from "../../seeds/skill_info";
import '../../Styles/skills.scss'
import SkillList from "./SkillList";

function Skills() {

  return (
    <section id="skills-list">
      {skills.map((skill, index) => (
        <Card key={index} sx={{ width: 420, minHeight: 275 }}>
          <CardContent>
            <div className="skill_card" key={skill.title}>
              <h2>{skill.title}</h2>
              <SkillList skills={skill.info} />
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  )
}

export default Skills
