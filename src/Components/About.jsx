import React from 'react';
import style from '../Styles/About.module.css';
import AnannyaSaikiaResume from './Anannya-Saikia-Resume.pdf';

const About = () => {
  const openNewWin = () =>{
    window.open('https://drive.google.com/file/d/1K4zkK3k278p6XR94hwkss_A9RWeOgFzf/view?usp=drive_link', '_blank')
  }
  return (
    <div className={style.about}>
      <p className={style.heading}>About Me</p>
      <div className={style.desc}>
        <img src="https://thumbs.gfycat.com/GlisteningAggravatingJunebug-size_restricted.gif" alt="gif" />
        <div>
          <p id="user-detail-intro" className={style.para}>I am a Full Stack MERN Developer
            • I have learned and applied my knowledge of HTML, CSS, JavaScript and
            React to built multiple projects and also integrated Chakra UI to enhance my projects • 
            I have designd and developed server-side API using Node.js, Express.js and MongoDB • 
            Currently looking for opportunities to work, build and learn with enthusiasts of the tech world</p>
          <div >

            <a id="resume-link-2" target="_blank" href={AnannyaSaikiaResume}
              download="Anannya-Saikia-Resume"
              rel="noreferrer">
              <button className={style.resume_button} id="resume-button-2"
              onClick={openNewWin} >Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default About