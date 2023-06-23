import React from 'react';
import style from '../Styles/About.module.css';

const About = () => {
  return (
    <div className={style.about}>
      <h1>About Me</h1>
      <div className={style.desc}>
        <img src="https://thumbs.gfycat.com/GlisteningAggravatingJunebug-size_restricted.gif" alt="gif" />
        <p className={style.para}>I am a Full Stack MERN Developer
          • I have learned and applied my knowledge of HTML, CSS, JS and
          React in multiple projects • Broadening my horizon in React, MongoDB and Node.js
          • Currently looking for opportunities to work and build with enthusiasts of Tech world</p>
      </div>

    </div>
  )
}

export default About