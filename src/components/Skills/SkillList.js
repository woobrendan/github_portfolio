function SkillList(props) {

  return (
    <>
      <ul className="skill-info-list">
        {props.skills.map((skill, index) => (
          <li key={index}>
            <span>
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default SkillList