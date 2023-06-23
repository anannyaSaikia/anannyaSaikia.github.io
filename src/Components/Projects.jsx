import React from 'react';
import style from '../Styles/Projects.module.css';
import mrchef1 from '../Images/mr_chef_image1.png';
import mrchef2 from '../Images/mr_chef_image2.png';
import mrchef3 from '../Images/mr_chef_image3.png';

const Projects = () => {
  return (
    <div className={style.projects}>
      <h1>My Projects Catalogue</h1>
      <div className={style.catalouge}>

        <div className={style.singleProject}>
          <img className={style.mid} src={mrchef2} alt="image2" />
          <img className={style.first} src={mrchef1} alt="image1" />
          <img className={style.last} src={mrchef3} alt="image3" />
        </div>

        <div className={style.singleProject}>
          <img className={style.first} src="" alt="image1" />
          <img className={style.mid} src="" alt="image2" />
          <img className={style.last} src="" alt="image3" />
        </div>

      </div>
    </div>
  )
}

export default Projects