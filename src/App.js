import './App.css';
import style from './Styles/Navbar.module.css';

import { useRef } from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }
  return (
    <div className="App">
      <div id="nav-menu" className={style.navbar}>
        <div className={style.logo}>
          <h3>Anannya</h3>
        </div>
        <div className={style.list}>
          <ul className={style.ul}>
            <li class="nav-link.home" className={style.link} onClick={() => scrollToSection(home)}>Home</li>
            <li class="nav-link.about" className={style.link} onClick={() => scrollToSection(about)}>About</li>
            <li class="nav-link.skills" className={style.link} onClick={() => scrollToSection(skills)}>Skills</li>
            <li class="nav-link.projects" className={style.link} onClick={() => scrollToSection(projects)}>Projects</li>
            <li class="nav-link.contact" className={style.link} onClick={() => scrollToSection(contact)}>Contact</li>
          </ul>
        </div>
        <div >
          <button class="nav-link resume" id="resume-button-1" className={style.resume_button}>Resume</button>
        </div>
        {/*  <li className={style.link} onClick={() => scrollToSection(resume)}>Resume</li> */}

      </div>

      <div className={style.mainBody}>
        <div id="home" style={{ height: "700px", paddingTop: "53px" }} ref={home}>
          <Home />
        </div>
        <div id="about" class="about section" style={{ height: "700px", paddingTop: "53px" }} ref={about}>
          <About />
        </div>
        <div id="skills" style={{ height: "700px", paddingTop: "53px" }} ref={skills}>
          <Skills />
        </div>
        <div id="projects" style={{ height: "2100px", paddingTop: "53px" }} ref={projects}>
          <Projects />
        </div>
        <div id="contact" style={{ height: "700px", paddingTop: "53px" }} ref={contact}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
