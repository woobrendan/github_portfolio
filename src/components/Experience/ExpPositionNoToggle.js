function ExpPositionNoToggle({ position }) {
  return (
    <>
      <div className="position_header">
        <h3>{position.title}</h3>
        <p>{position.year}</p>
      </div>
      <ul className="job-description-list">
        {position.duties.map((duty, index) => (
          <li key={index}>{duty}</li>
        ))}
      </ul>
   </>
  )
}

export default ExpPositionNoToggle
