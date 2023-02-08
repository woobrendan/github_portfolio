import { experience } from "../../seeds/experience";
import ExperienceGridCard from "./ExperienceGridCard";
import ExperienceCard from "./ExperienceCard";
import "../../Styles/ExpGrid.scss";
import { useState } from "react";

function ExpGrid() {
  const [selected, setSelected] = useState("");

  const getCompName = (value) => setSelected(value);

  const mappedExp = experience.map((exp, index) => (
    <ExperienceGridCard
      experience={exp}
      getCompName={getCompName}
      key={index}
    />
  ));

  const selectedExpCard = () => {
    const selectedJob = experience.find((job) => job.company === selected);
    return (
      <ExperienceCard experience={selectedJob} close={() => setSelected("")} />
    );
  };

  const expGridClass = selected
    ? "experience_grid selected"
    : "experience_grid";

  return (
    <section className={expGridClass}>
      {selected ? selectedExpCard() : mappedExp}
    </section>
  );
}

export default ExpGrid;
