import './App.css';
import style from './Styles/Navbar.module.css';

import { useRef } from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

import AnannyaSaikiaResume from './Anannya-Saikia-Resume.pdf';

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

  const openNewWin = () => {
    window.open('https://drive.google.com/file/d/1bVNrL1emeGZ7mMqdOvrLUcU53s6vc3PG/view?usp=drive_link', '_blank')
  }

  return (
    <div className="App">
      <div id="nav-menu" className={style.navbar}>
        <div className={style.logo}>
          <h3>Anannya</h3>
        </div>
        <div className={style.list}>
          <ul className={style.ul}>
            <li className="nav-link home" id={style.link} onClick={() => scrollToSection(home)}>Home</li>
            <li className="nav-link about" id={style.link} onClick={() => scrollToSection(about)}>About</li>
            <li className="nav-link skills" id={style.link} onClick={() => scrollToSection(skills)}>Skills</li>
            <li className="nav-link projects" id={style.link} onClick={() => scrollToSection(projects)}>Projects</li>
            <li className="nav-link contact" id={style.link} onClick={() => scrollToSection(contact)}>Contact</li>
          </ul>
        </div>
        <div className="nav-link resume" >
          <a id="resume-link-1"
            href={AnannyaSaikiaResume}
            download="Anannya-Saikia-Resume"
            target="_blank"
            rel="noopener noreferrer">
            <button id='resume-button-1' className={style.resumebutton1}
              onClick={openNewWin}
            >Resume</button>
          </a>
        </div>
      </div>

      <div className={style.mainBody}>
        <div id="home" style={{ height: "700px" }} ref={home}>
          <Home />
        </div>
        <div id="about" className="about section" style={{ height: "700px" }} ref={about}>
          <About />
        </div>
        <div id="skills" style={{ height: "700px" }} ref={skills}>
          <Skills />
        </div>
        <div id="projects" style={{ height: "2100px" }} ref={projects}>
          <Projects />
        </div>
        <div id="contact" style={{ height: "700px" }} ref={contact}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
