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
      <div className={style.navbar}>
        <div className={style.logo}>
          <h3>Anannya</h3>
        </div>
        <div className={style.list}>
          <ul className={style.ul}>
            <li className={style.link} onClick={() => scrollToSection(home)}>Home</li>
            <li className={style.link} onClick={() => scrollToSection(about)}>About</li>
            <li className={style.link} onClick={() => scrollToSection(skills)}>Skills</li>
            <li className={style.link} onClick={() => scrollToSection(projects)}>Projects</li>
            <li className={style.link} onClick={() => scrollToSection(contact)}>Contact</li>
          </ul>
        </div>
        <div >
          <button className={style.resume_button}>Resume</button>
        </div>
        {/*  <li className={style.link} onClick={() => scrollToSection(resume)}>Resume</li> */}

      </div>

      <div className={style.mainBody}>
        <div style={{ height: "700px", paddingTop: "53px" }} ref={home}>
          <Home />
        </div>
        <div style={{ height: "700px", paddingTop: "53px" }} ref={about}>
          <About />
        </div>
        <div style={{ height: "700px", paddingTop: "53px" }} ref={skills}>
          <Skills />
        </div>
        <div style={{ height: "700px", paddingTop: "53px" }} ref={projects}>
          <Projects />
        </div>
        <div style={{ height: "700px", paddingTop: "53px" }} ref={contact}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
