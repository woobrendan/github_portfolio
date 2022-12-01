function SkillList({ skills }) {

  return (
    <ul className="skill-info-list">
      {skills.map((skill, index) => (
        <li key={index}>
          <span>
            {skill}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default SkillList