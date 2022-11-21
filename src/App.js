import './Styles/App.scss';
import AboutMe from './components/About/About';
import Experience from './components/Experience/experience';
import Sidebar from './components/SideNavBar/Sidebar';
import ProjectList from './components/Projects/ProjectList';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import ToTop from './components/ToTop';

function App() {
  return (
    <div className="App">
      <h1>Brendan Woo</h1>
      <h3>Full Stack Developer</h3>
      <Sidebar />
      <AboutMe />
      <Education />
      <ProjectList />
      <Skills />
      <Experience />
      {/* <div id="Contact">
        Email Me
      </div> */}
      <ToTop />
    </div>
  );
}

export default App;
