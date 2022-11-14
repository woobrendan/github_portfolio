function ExperienceItem(props) {
  
  const position = props.position
  const mappedDuties = position.duties.mappedDuties((duty, index) => (
    <li>
      {duty}
    </li>
  ))
 return (
   <>
    <h3>{position.title}</h3>
    <div className="work-info">
        <p>{position.year}</p>
      </div>
      <ul className="job-description-list">
        <li><span>
          Worked a casual contract supporting multiple teams and managers with administrative duties such as  facilitation of official documents, taking meeting notes and manage member absence line
        </span></li>
        <li><span>
          Coordinated manager's schedules, ensuring days and meetings are organized
        </span></li>
        <li><span>
          Facilitated member hearing schedules and caseloads, updating HR software as required
        </span></li>
      </ul>
   </>
 )
}
export default ExperienceItem