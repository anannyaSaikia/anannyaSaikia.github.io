import React from 'react';
import style from '../Styles/About.module.css';
import AnannyaSaikiaResume from './Anannya-Saikia-Resume.pdf';

const About = () => {
  const openNewWin = () =>{
    window.open('https://drive.google.com/file/d/1drJaYFu2sJ9lbvGjLpY2X5m5QSwV8099/view?usp=drive_link', '_blank')
  }
  return (
    <div className={style.about}>
      <p className={style.heading}>About Me</p>
      <div className={style.desc}>
        {/* <img src="https://thumbs.gfycat.com/GlisteningAggravatingJunebug-size_restricted.gif" alt="gif" /> */}
        <img src="https://user-images.githubusercontent.com/62280849/128852791-6fb73a65-29a6-4c5e-84c5-e8372ac2bd77.gif" alt="gif" />

        <div>
          <p id="user-detail-intro" className={style.para}>I am a dedicated and passionate Full Stack MERN Developer with a strong foundation in web development technologies.
          My journey of programming began with HTML, CSS, and JavaScript. I have since honed my skills to encompass the entire MERN stack, including React and 
          Chakra UI for frontend development, as well as Node.js, Express.js, and MongoDB for building robust server-side APIs.
          Over the course of my Masai journey, I have had the privilege of working on various frontend projects where I leveraged my skills to craft engaging and user-friendly web applications.
          I have successfully designed and developed RESTful APIs using Node.js and Express.js, with MongoDB as the database of choice.        
          I am currently seeking opportunities to work with like-minded individuals and organizations in the tech world. I am excited to contribute my skills, creativity, and dedication to the 
          team I join and create positive impact.</p>
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