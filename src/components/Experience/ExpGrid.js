import { experience } from '../../seeds/experience';
import ExperienceGridCard from './ExperienceGridCard';
import ExperienceCard from './ExperienceCard';
import '../../Styles/ExpGrid.scss';
import { useState } from 'react'; 

function ExpGrid() {
  const [selected, setSelected] = useState('');

  const getCompName = (value) => setSelected(value)

  const closeCard = () => setSelected('')

  const mappedExp = experience.map((exp, index) => (
      <ExperienceGridCard 
        experience={exp} 
        getCompName={getCompName}
        key={index}
      />
  ))

  const selectedExpCard = () => {
    const selectedJob = experience.find(job => job.company === selected)
    return (
      <ExperienceCard experience={selectedJob} close={closeCard}/>
    )
  }

  return (
    <section className="experience_grid">
      {!selected && mappedExp}
      {selected && selectedExpCard()}
    </section>
  )
}

export default ExpGrid 