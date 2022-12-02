import { experience } from '../../seeds/experience';
import ExperienceGridCard from './ExperienceGridCard';
import '../../Styles/ExpGrid.scss';
import { useState } from 'react'; 

function ExpGrid() {
  const [selected, setSelected] = useState('');

  const getCompName = (value) => {
    console.log('value', value)
    setSelected(value)
  }
  const mappedExp = experience.map((exp, index) => (
      <ExperienceGridCard 
        experience={exp} 
        getCompName={getCompName}
        key={index}
      />
  ))
  return (
    <section className="experience_grid">
      {mappedExp}
    </section>
  )
}

export default ExpGrid 