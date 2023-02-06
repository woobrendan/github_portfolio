import { Card, CardMedia, CardContent } from "@mui/material";
import { Cancel } from "@mui/icons-material";
import ExpPositionNoToggle from "./ExpPositionNoToggle";
import ExpMultiPosition from "./ExpMultiPosition";
import irb from "../../images/IRB.jpeg";
import { useState } from "react";

function ExperienceCard({ experience, close }) {
  const [isToggled, setIsToggled] = useState(false);
  const positions = experience.positions;
  const getImage =
    experience.company !== "Immigration Refugee Board of Canada"
      ? experience.image
      : irb;

  const getToggleStatus = (value) => {
    if (value) {
      setIsToggled(true);
    }
  };

  return (
    <Card>
      <Cancel size="large" onClick={() => close()} className="toggle_close" />
      <CardMedia
        component="img"
        image={getImage}
        alt={experience.company}
        sx={{ height: 195 }}
      />
      <CardContent>
        <h2>{experience.company}</h2>
        <h4>Location: {experience.location}</h4>
        <div className="work-info">
          {positions.length <= 1 ? (
            <ExpPositionNoToggle position={positions[0]} />
          ) : (
            <ExpMultiPosition positions={positions} />
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
