import education from '../../seeds/education.json'
import EducationCard from './EducationCard';
import '../../Styles/education.scss'

function Education() { 
  return (
    <>
      <h1>Education</h1>
      <div className="education_card_list">
        {education.map((school) => (
          <EducationCard schoolDetails={school} key={school.schoolName} />
        ))}
      </div>
    </>
  )
}

export default Education