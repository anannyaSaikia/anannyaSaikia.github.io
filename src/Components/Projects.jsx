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

        <div className="project-card" style={{ height: "100%" }}>
          <div className={style.singleProject}>
            <img className={style.mid} src={mrchef2} alt="image2" />
            <img className={style.first} src={mrchef1} alt="image1" />
            <img className={style.last} src={mrchef3} alt="image3" />
          </div>
          <h3 className="project-title">Mr.Chef</h3>
          <p className="project-description">
            Mr Chef is an online application to grab your meal with cuisines from around the globe.
            There is a wide range of categories to choose from, super easy to place orders and do a quick checkout.
          </p>
          <p className="project-tech-stack">
            Tech Stack : HTML, CSS, JavaScript, React, React-Router, Redux, Chakra UI
          </p>
          <p className="project-github-link">
            <a href="https://github.com/Sunil-JJ/mrchefproject">Github Repo</a>
          </p>
          <p className="project-deployed-link">
            <a href="https://mrchef-sand.vercel.app/">Check our app here</a>
          </p>
        </div>
        <div className="project-card">
          <div className="project-card" id={style.singleProject}>
            <img className={style.first} src="" alt="image1" />
            <img className={style.mid} src="" alt="image2" />
            <img className={style.last} src="" alt="image3" />
          </div>
          <h3 className="project-title">Ajio</h3>
          <p className="project-description">
            Ajio is an online shopping plateform with mainly clothings, footware and other accessories for men, women and kids.
            The main sections of the app are Home page, Products page, Cart page and Payment & Checkout page.
          </p>
          <p className="project-tech-stack">
            Tech Stack : HTML, CSS, JavaScript, BootStrap
          </p>
          <p className="project-github-link">
            <a href="https://github.com/samarthbsss/Ajio-Clone">Github Repo</a>
          </p>
          <p className="project-deployed-link">
            <a href="https://ajio-clone-ashen.vercel.app/">Check our app here</a>
          </p>
        </div>

        <div className="project-card">
          <div className="project-card" id={style.singleProject}>
            <img className={style.first} src="" alt="image1" />
            <img className={style.mid} src="" alt="image2" />
            <img className={style.last} src="" alt="image3" />
          </div>
          <h3 className="project-title">ShopClues.com</h3>
          <p className="project-description">

          </p>
          <p className="project-tech-stack">
            Tech Stack : HTML, CSS, JavaScript, BootStrap
          </p>
          <p className="project-github-link">
            <a href="https://github.com/ShubhamRaut187/Shopclues.com-Masai_Unit-5_CW">Github Repo</a>
          </p>
          <p className="project-deployed-link">
            <a href="https://ephemeral-cascaron-81f7e8.netlify.app/">Check our app here</a>
          </p>
        </div>

        <div className="project-card">
          <div className="project-card" id={style.singleProject}>
            <img className={style.first} src="" alt="image1" />
            <img className={style.mid} src="" alt="image2" />
            <img className={style.last} src="" alt="image3" />
          </div>
          <h3 className="project-title">Personal Portfolio</h3>
          <p className="project-description">
            It's a portfolio app showcasing my work and achievements in th field of web development
          </p>
          <p className="project-tech-stack">
            Tech Stack : HTML, CSS, JavaScript, React
          </p>
          <p className="project-github-link">
            <a href="https://github.com/anannyaSaikia/anannyaSaikia.github.io">Github Repo</a>
          </p>
          <p className="project-deployed-link">
            <a href="https://anannyasaikia.github.io/">My Portfolio</a>
          </p>
        </div>

      </div>
      <h1 style={{ paddingTop: "30px" }}>My Github Contributions : </h1>
      <div style={{ display: "block", paddingTop: "20px" }} id="github">
        <div style={{ display: "flex", margin: "auto", justifyContent: "space-evenly", paddingTop: "20px" }}>
          <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=anannyaSaikia&theme=rose&border_radius=5" alt="img1" />
          <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=anannyaSaikia&theme=rose&show_icons=true" alt="img2" />
        </div>
        <div style={{ paddingTop: "20px" }}>
          <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=anannyaSaikia&layout=compact&theme=rose" alt="img3" />
        </div>
      </div>
    </div>
  )
}

export default Projects