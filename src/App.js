import './App.css';
import style from './Styles/Navbar.module.css';

import { useRef, useEffect, useState } from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

import AnannyaSaikiaResume from './Anannya-Saikia-Resume.pdf';

import { GiHamburgerMenu } from 'react-icons/gi';
import {
  Drawer,
  DrawerBody,
  /* DrawerFooter, */
  /* DrawerHeader, */
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Stack,
  Box
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react';

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const [collapse, setCollapse] = useState(window.innerWidth < 768);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef();

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  const openNewWin = () => {
    window.open('https://drive.google.com/file/d/1K4zkK3k278p6XR94hwkss_A9RWeOgFzf/view?usp=drive_link', '_blank')
  }

  /* console.log(window.innerWidth); */

  useEffect(() => {
    /* if (window.innerWidth < 768) setCollapse(true);
    else setCollapse(false); */

    function handleResize() {
      setCollapse(window.innerWidth < 768);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, [])

  return (
    <div className="App">
      <div id="nav-menu" >
        {
          collapse
            ? <Box >
              <Box display={"flex"} justifyContent={"space-between"} padding={"10px"}
                style={{position: "fixed", width : "100%", zIndex : "1", color: "rgb(247, 180, 180)", backgroundColor: "#363f52", borderBottom: "1px solid rgba(179, 131, 131)", boxShadow: "rgba(179, 131, 131) 0px 25px 20px -20px" }}>
                <Box onClick={() => scrollToSection(home)}>
                  Anannya
                </Box>
                <GiHamburgerMenu ref={btnRef} onClick={onOpen}/>
              </Box>
              <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton style={{color: "rgb(247, 180, 180)", backgroundColor: "#363f52", border: "1px solid rgba(179, 131, 131)", boxShadow: "rgba(179, 131, 131) 0px 25px 20px -20px"}}/>
                  {/*  <DrawerHeader>Create your account</DrawerHeader> */}

                  <DrawerBody padding={"20px"} marginTop={"30px"}
                    style={{ backgroundColor: "#363f52", border: "1px solid rgba(179, 131, 131)" }}>
                    <Stack>
                      <Button onClick={() => scrollToSection(home)}
                        style={{ color: "rgb(247, 180, 180)", backgroundColor: "#363f52", border: "1px solid rgba(179, 131, 131)", boxShadow: "rgba(179, 131, 131) 0px 25px 20px -20px" }}>Home</Button>
                      <Button onClick={() => scrollToSection(about)}
                        style={{ color: "rgb(247, 180, 180)", backgroundColor: "#363f52", border: "1px solid rgba(179, 131, 131)", boxShadow: "rgba(179, 131, 131) 0px 25px 20px -20px" }}>About</Button>
                      <Button onClick={() => scrollToSection(skills)}
                        style={{ color: "rgb(247, 180, 180)", backgroundColor: "#363f52", border: "1px solid rgba(179, 131, 131)", boxShadow: "rgba(179, 131, 131) 0px 25px 20px -20px" }}>Skills</Button>
                      <Button onClick={() => scrollToSection(projects)}
                        style={{ color: "rgb(247, 180, 180)", backgroundColor: "#363f52", border: "1px solid rgba(179, 131, 131)", boxShadow: "rgba(179, 131, 131) 0px 25px 20px -20px" }}>Projects</Button>
                      <Button onClick={() => scrollToSection(contact)}
                        style={{ color: "rgb(247, 180, 180)", backgroundColor: "#363f52", border: "1px solid rgba(179, 131, 131)", boxShadow: "rgba(179, 131, 131) 0px 25px 20px -20px" }}>Contact</Button>
                      <a id="resume-link-1"
                        href={AnannyaSaikiaResume}
                        download="Anannya-Saikia-Resume"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Button id="resume-link-1"
                          onClick={openNewWin}
                          style={{color: "rgb(247, 180, 180)", backgroundColor: "#363f52", border: "1px solid rgba(179, 131, 131)", boxShadow: "rgba(179, 131, 131) 0px 25px 20px -20px"}}
                        >Resume</Button>
                      </a>
                    </Stack>
                  </DrawerBody>

                  {/* <DrawerFooter>
                  <Button variant='outline' mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme='blue'>Save</Button>
                </DrawerFooter> */}
                </DrawerContent>
              </Drawer>
            </Box>

            : <div className={style.navbar}>
              <div className={style.logo} onClick={() => scrollToSection(home)}>
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
        }
      </div>

      <div className={style.mainBody}>
        <div id="home" /* style={{ height: "700px" }} */ ref={home}>
          <Home />
        </div>
        <div id="about" className="about section" /* style={{ height: "700px" }} */ ref={about}>
          <About />
        </div>
        <div id="skills" /* style={{ height: "700px" }} */ ref={skills}>
          <Skills />
        </div>
        <div id="projects" /* style={{ height: "2100px" }} */ ref={projects}>
          <Projects />
        </div>
        <div id="contact" /* style={{ height: "700px" }} */ ref={contact}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
