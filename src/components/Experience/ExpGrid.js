import { experience } from '../../seeds/experience';
import ExperienceGridCard from './ExperienceGridCard';
import '../../Styles/ExpGrid.scss';

function ExpGrid() {
  const mappedExp = experience.map((exp, index) => (
    <section className="experience_grid">
      <ExperienceGridCard experience={exp}/>
    </section>
  ))
  return (
    <section className="experience_grid">
      {mappedExp}
    </section>
  )
}

export default ExpGrid 