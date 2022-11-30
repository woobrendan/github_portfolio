import { useState } from 'react'
import { experience } from '../../seeds/experience';
import ExperienceCard from './ExperienceCard';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { IconButton } from '@mui/material'
import '../../Styles/ExpCarousel.scss'

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
    <section className="experience-carousel" id="Experience">
      <div className="exp_nav">
        <ArrowCircleLeftIcon onClick={() => handleNextClick()} 
        className="nav_arrow"/>
        <ArrowCircleRightIcon onClick={() => handleNextClick('next')} className="nav_arrow"/>
      </div>
      {experienceCards}
    </section>
  )
}

export default ExpCarousel