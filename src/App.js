import './Styles/App.scss';
import AboutMe from './components/About/About';
import Sidebar from './components/SideNavBar/Sidebar';
import ProjectList from './components/Projects/ProjectList';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import ToTop from './components/ToTop';
import ExpCarousel from './components/Experience/ExpCarousel';
import { useState } from 'react';
import TopNavBar from './components/TopNavBar/TopNavBar';

function App() {
  const [component, setComponent] = useState('About');

  const currentPage = (page) => {
    switch(page) {
      case 'About': return <AboutMe />
      case 'Education': return <Education />
      case 'Project': return <ProjectList />
      case 'Skills': return <Skills />
      case 'Experience': return <ExpCarousel />
    }
  }
  
  const getSelectedComponent = (value) => setComponent(value)
  
  return (
    <div className="App">
      <h1>Brendan Woo</h1>
      <h3>Full Stack Developer</h3>
      <Sidebar getComponent={getSelectedComponent}/>
      <TopNavBar />
      {currentPage(component)}
      {/* <AboutMe />
      <Education />
      <ProjectList />
      <Skills />
      <ExpCarousel /> */}
      {/* <div id="Contact">
        Email Me
      </div> */}
      <ToTop />
    </div>
  );
}

export default App;
