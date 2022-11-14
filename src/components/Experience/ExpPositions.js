function ExperienceItem(props) {

  const position = props.position
  const mappedDuties = position.duties.mappedDuties((duty, index) => (
    <li key={index}>
      {duty}
    </li>
  ))
 return (
   <>
    <div className="work-info">
      <h3>{position.title}</h3>
      <p>{position.year}</p>
    </div>
    <ul className="job-description-list">
      {mappedDuties}
    </ul>
   </>
 )
}
export default ExperienceItem