import "../../Styles/about.scss";
import Box from "@mui/material/Box";
import pwc from "../../images/PWC.jpg";
import ImageSlider from "./ImageSlider";
import AboutDescription from "./AboutDescription";

export default function About() {
  return (
    <section id="About">
      <div className="intro_header">
        <div className="intro_left">
          <Box component="img" alt="SRO Portrait" src={pwc} id="About-img" />
          <ImageSlider />
        </div>
        <AboutDescription />
      </div>
    </section>
  );
}
