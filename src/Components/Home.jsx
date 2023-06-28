import React from 'react';
import style from '../Styles/Home.module.css';

const Home = () => {
  return (
    <div className={style.home}>

      <div className={style.home_content}>

        <div className={style.intro}>
          <div>
            <h1  id="user-detail-name">Hello! This is Anannya Saikia</h1>
            <img src="https://media3.giphy.com/media/w1OBpBd7kJqHrJnJ13/giphy.gif?cid=6c09b9528b33f4329eac26608ec8e54c34ff682d7d1ae5cf&rid=giphy.gif&ct=s" alt="Hello" />
          </div>

          <p id="user-detail-intro">An aspiring Full Stack Developer |
            Worked on HTML, CSS, JS and React to built multiple projects
          </p>

        </div>

        <div class="home-img" className={style.profile}>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKFD3NU64SaOrS-ryVuLM2O-ocgu8ufhbnQ&usqp=CAU"
            alt="profile_pic" />

        </div>

      </div>

    </div>
  )
}

export default Home