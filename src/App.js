import "./Styles/App.scss";
import About from "./components/About/About";
import Sidebar from "./components/SideNavBar/Sidebar";
import ProjectList from "./components/Projects/ProjectList";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import ToTop from "./components/ToTop";
import Home from "./components/Home";
import { useState } from "react";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import ExpGrid from "./components/Experience/ExpGrid";

const App = () => {
  const [component, setComponent] = useState("Home");

  const currentPage = (page) => {
    switch (page) {
      case "About":
        return <About />;
      case "Education":
        return <Education />;
      case "Project":
        return <ProjectList />;
      case "Skills":
        return <Skills />;
      case "Experience":
        return <ExpGrid />;
      default:
        return <Home />;
    }
  };

  const getSelectedComponent = (value) => setComponent(value);

  return (
    <div className="App">
      <Sidebar
        getComponent={getSelectedComponent}
        currentComponent={component}
      />
      <TopNavBar currentComponent={component} />
      {currentPage(component)}
      <ToTop />
    </div>
  );
};

export default App;
