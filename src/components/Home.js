import self from "../images/SRO_profile.jpg";
import "../Styles/home.scss";

function Home() {
  return (
    <section className="home_container">
      <div className="home_img">
        <img src={self} alt="portrait" />
      </div>
      <div className="home_description">
        <h1>Hello, I am Brendan Woo</h1>
        <h3>Full Stack Developer</h3>
      </div>
    </section>
  );
}

export default Home;
