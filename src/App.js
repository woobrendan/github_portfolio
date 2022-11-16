import './Styles/App.scss';
import AboutMe from './components/About';
import Experience from './components/Experience/experience';
import Sidebar from './components/SideNavBar/Sidebar';
import ProjectList from './components/Projects/ProjectList';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <h1>Brendan Woo</h1>
      <h3>Full Stack Developer</h3>
      <Sidebar />
      <AboutMe />
      <ProjectList />
      <Skills />
      <Experience />
      {/* <div id="Contact">
        Email Me
      </div> */}
    </div>
  );
}

export default App;
