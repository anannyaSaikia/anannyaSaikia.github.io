import React from 'react';
import style from '../Styles/About.module.css';
import AnannyaSaikiaResume from './AnannyaSaikiaResume.pdf';

const About = () => {
  const openNewWin = () =>{
    window.open('https://drive.google.com/file/d/1bVNrL1emeGZ7mMqdOvrLUcU53s6vc3PG/view?usp=drive_link', '_blank')
  }
  return (
    <div className={style.about}>
      <h1>About Me</h1>
      <div className={style.desc}>
        <img src="https://thumbs.gfycat.com/GlisteningAggravatingJunebug-size_restricted.gif" alt="gif" />
        <div>
          <p id="user-detail-intro" className={style.para}>I am a Full Stack MERN Developer
            • I have learned and applied my knowledge of HTML, CSS, JS and
            React in multiple projects • Broadening my horizon in React, MongoDB and Node.js
            • Currently looking for opportunities to work and build with enthusiasts of Tech world</p>
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