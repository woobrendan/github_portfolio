import { Card, CardContent } from "@mui/material";
import { skills } from "../../seeds/skill_info";
import "../../Styles/skills.scss";
import SkillList from "./SkillList";

const Skills = () => {
  return (
    <section id="skills-list">
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
    </section>
  );
};

export default Skills;
