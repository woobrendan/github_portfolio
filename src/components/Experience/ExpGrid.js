import { experience } from '../../seeds/experience';
import ExperienceCard from './ExperienceCard';

function ExpGrid() {
  const mappedExp = experience.maps((exp, index) => (
    <>
      <ExperienceCard />
    </>
  ))
  return (
    <>
      {mappedExp}
    </>
  )
}

export default ExpGrid 