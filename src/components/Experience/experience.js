import '../../Styles/experience.scss'
import { experience } from '../../seeds/experience';
import ExperienceCard from "./ExperienceCard";

export default function Experience () {

  const mappedExperiences = experience.map((experience, index) => (
    <ExperienceCard key={experience.company} experience={experience}/>
  ))
  return (
    <>
      <h1>Work Experience</h1>
      <div className="experience-container" id="Experience">
        {mappedExperiences}
      </div>
    </>
  )
}