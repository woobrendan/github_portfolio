import './Styles/App.scss';
import AboutMe from './components/About/About';
import Sidebar from './components/SideNavBar/Sidebar';
import ProjectList from './components/Projects/ProjectList';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import ToTop from './components/ToTop';
import Home from './components/Home'
import ExpCarousel from './components/Experience/ExpCarousel';
import { useState } from 'react';
import TopNavBar from './components/TopNavBar/TopNavBar';

function App() {
  const [component, setComponent] = useState('Home');

  const currentPage = (page) => {
    switch(page) {
      case 'About': return <AboutMe />
      case 'Education': return <Education />
      case 'Project': return <ProjectList />
      case 'Skills': return <Skills />
      case 'Experience': return <ExpCarousel />
      default: return <Home />
    }
  }
  
  const getSelectedComponent = (value) => setComponent(value)
  
  return (
    <div className="App">
      <Sidebar 
        getComponent={getSelectedComponent} 
        currentComponent={component} 
      />
      <TopNavBar currentComponent={component} />
      {currentPage(component)}
      {/* <div id="Contact">
        Email Me
      </div> */}
      <ToTop />
    </div>
  );
}

export default App;
