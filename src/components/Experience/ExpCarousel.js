import { useState } from 'react'
import { experience } from '../../seeds/experience';
import ExperienceCard from './ExperienceCard';

function ExpCarousel() {

  const [current, setCurrent] = useState(0);
  const length = experience.length;

  const handleNextClick = (next) => {
    next === 'next' 
      ? current === length - 1 ? setCurrent(0) : setCurrent(current + 1)
      : current === 0 ? setCurrent(length - 1) : setCurrent(current - 1) 
  }

  const experienceCards = experience.map((job, index) => (
    <div className={index === current ? 'slide_active' : 'slide'} key={job.company}>
      {index === current && <ExperienceCard experience={job} />}
    </div>
  ))
  
  return (
    <>
    </>
  )
}

export default ExpCarousel