import { experience } from '../../seeds/experience';
import ExperienceGridCard from './ExperienceCard';
import '../../Styles/ExpGrid.scss';

function ExpGrid() {
  const mappedExp = experience.map((exp, index) => (
    <section className="experience_grid">
      <ExperienceGridCard experience={exp}/>
    </section>
  ))
  return (
    <>
      {mappedExp}
    </>
  )
}

export default ExpGrid 