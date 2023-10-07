import React from 'react';
import style from '../Styles/Home.module.css';
import profile_AS from '../Images/profile_AS.jpg';

/* import { Heading } from '@chakra-ui/react'; */

const Home = () => {
  return (
    <div className={style.home}>

      <div className={style.home_content}>

        <div className={style.intro}>
          <div>
            <p className={style.userDetailName}>Hello! This is Anannya Saikia</p>
            <img className="home-img" src="https://media3.giphy.com/media/w1OBpBd7kJqHrJnJ13/giphy.gif?cid=6c09b9528b33f4329eac26608ec8e54c34ff682d7d1ae5cf&rid=giphy.gif&ct=s" alt="Hello" />
          </div>

          <p id="user-detail-intro">An aspiring Full Stack Web Developer | Proficient in JavaScript 
            and the MERN stack | Collaborative team player with skills in designing and developing scalable 
            web applications
          </p>

        </div>

        <div id={style.profile}>
          <img className="home-img" src={profile_AS} alt="profile_pic" />
        </div>

      </div>

    </div>
  )
}

export default Home