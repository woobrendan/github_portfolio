import './App.css';
import AboutMe from './components/About';
import Experience from './components/experience';
import Sidebar from './components/Sidebar';
import ProjectList from './components/ProjectList';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <h1>Brendan Woo</h1>
      <h3>Full Stack Developer</h3>
      <Sidebar />
      <AboutMe />
      <Skills />
      <Experience />
      <ProjectList />
      <div id="Contact">
        Email Me
      </div>
    </div>
  );
}

export default App;
