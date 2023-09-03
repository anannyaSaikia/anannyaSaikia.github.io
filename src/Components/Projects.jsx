import React from 'react';
import style from '../Styles/Projects.module.css';

import Ajio_1 from '../Images/Ajio_1.png';
import Ajio_2 from '../Images/Ajio_2.png';
import Ajio_3 from '../Images/Ajio_3.png';
import mrchef1 from '../Images/mr_chef_image1.png';
import mrchef2 from '../Images/mr_chef_image2.png';
import mrchef3 from '../Images/mr_chef_image3.png';
import ShopClues_1 from '../Images/ShopClues_1.png';
import ShopClues_2 from '../Images/ShopClues_2.png';
import ShopClues_3 from '../Images/ShopClues_3.png';
import Portfolio_1 from '../Images/Portfolio_1.png';
import Portfolio_2 from '../Images/Portfolio_2.png';
import Portfolio_3 from '../Images/Portfolio_3.png';


import GitHubCalendar from 'react-github-calendar';


const Projects = () => {
  return (
    <div className={style.projects}>
      <p className={style.heading}>My Projects Catalogue</p>
      <div className={style.catalouge}>

        {/* project 1 */}

        <div className="project-card" >
          <div id={style.singleProject}>
            <img className={style.mid} src={mrchef2} alt="image1" />
            <img className={style.first} src={mrchef1} alt="image2" />
            <img className={style.last} src={mrchef3} alt="image3" />
          </div>
          <div className={style.projectDesc}>
            <h3 className="project-title">MR.CHEF</h3>
            <p className="project-description">
              Mr Chef is an online application for ordering meal
            </p>
            <p className="project-tech-stack">
              [HTML, CSS, JavaScript, React, React-Router, Redux, Chakra UI]
            </p>
          </div>
          <div className={style.deployDesc}>
            <p className="project-github-link">
              <a href="https://github.com/Sunil-JJ/mrchefproject">
                <img className={style.bottom_icons} src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png" alt="github" />
              </a>
            </p>
            <p className="project-deployed-link">
              <a href="https://mrchef-sand.vercel.app/">
                <img className={style.bottom_icons} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKgbyEDH3jC4dVL45m9ryFps3amh1rOEdKVA&usqp=CAU" alt="deployed-link" />
              </a>
            </p>
          </div>
        </div>

        {/* project 2 */}

        <div className="project-card" /* style={{ height: "90%" }} */>
          <div id={style.singleProject}>
            <img className={style.mid} src={Ajio_1} alt="image1" />
            <img className={style.first} src={Ajio_2} alt="image2" />
            <img className={style.last} src={Ajio_3} alt="image3" />
          </div>
          <div className={style.projectDesc}>
            <h3 className="project-title">AJIO</h3>
            <p className="project-description">
              Ajio is an online shopping plateform for clothings, footware and other accessories
            </p>
            <p className="project-tech-stack">
              [HTML, CSS, JavaScript, BootStrap]
            </p>
          </div>
          <div className={style.deployDesc}>
            <p className="project-github-link">
              <a href="https://github.com/samarthbsss/Ajio-Clone">
                <img className={style.bottom_icons} src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png" alt="github" />
              </a>
            </p>
            <p className="project-deployed-link">
              <a href="https://ajio-clone-ashen.vercel.app/">
                <img className={style.bottom_icons} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKgbyEDH3jC4dVL45m9ryFps3amh1rOEdKVA&usqp=CAU" alt="deployed-link" />
              </a>
            </p>
          </div>
        </div>

        {/* project 3 */}

        <div className="project-card" /* style={{ height: "90%" }} */>
          <div id={style.singleProject}>
            <img className={style.mid} src={ShopClues_1} alt="image1" />
            <img className={style.first} src={ShopClues_2} alt="image2" />
            <img className={style.last} src={ShopClues_3} alt="image3" />
          </div>
          <div className={style.projectDesc}>
            <h3 className="project-title">SHOPCLUES.COM</h3>
            <p className="project-description">
              An e-marketplace with clothings, home and kitchen appliances
            </p>
            <p className="project-tech-stack">
              [HTML, CSS, JavaScript, BootStrap]
            </p>
          </div>
          <div className={style.deployDesc}>
            <p className="project-github-link">
              <a href="https://github.com/ShubhamRaut187/Shopclues.com-Masai_Unit-5_CW">
                <img className={style.bottom_icons} src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png" alt="github" />
              </a>
            </p>
            <p className="project-deployed-link">
              <a href="https://ephemeral-cascaron-81f7e8.netlify.app/">
                <img className={style.bottom_icons} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZjsI8HvqpewQnYDh4tzNyBRvOx8LWH0_VjQ&usqp=CAU" alt="github" />
              </a>
            </p>
          </div>
        </div>

        {/* project 4 */}

        <div className="project-card" /* style={{ height: "90%" }} */>
          <div id={style.singleProject}>
            <img className={style.mid} src={Portfolio_1} alt="image1" />
            <img className={style.first} src={Portfolio_2} alt="image2" />
            <img className={style.last} src={Portfolio_3} alt="image3" />
          </div>
          <div className={style.projectDesc}>
            <h3 className="project-title">PERSONAL PORTFOLIO</h3>
            <p className="project-description">
              It's a portfolio app showcasing my work and achievements in the field of web development
            </p>
            <p className="project-tech-stack">
              [HTML, CSS, JavaScript, React]
            </p>
          </div>
          <div className={style.deployDesc}>
            <p className="project-github-link">
              <a href="https://github.com/anannyaSaikia/anannyaSaikia.github.io">
                <img className={style.bottom_icons} src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png" alt="github" />
              </a>
            </p>
            <p className="project-deployed-link">
              <a href="https://anannyasaikia.github.io/">
                <img className={style.bottom_icons} src="https://seeklogo.com/images/G/github-colored-logo-FDDF6EB1F0-seeklogo.com.png" alt="github" />
              </a>
            </p>
          </div>
        </div>

      </div>
      <p className={style.githubHead}>My Github Stats & Contributions</p>

      {/* <div style={{ display: "block", paddingTop: "20px" }} className={style.github}>        
        <div style={{ display: "flex", margin: "auto", justifyContent: "space-evenly", paddingTop: "20px" }}>
          <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=anannyaSaikia&theme=rose&border_radius=5" alt="img1" />
          <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=anannyaSaikia&theme=rose&show_icons=true" alt="img2" />
        </div>
        <div style={{ paddingTop: "20px" }}>
          <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=anannyaSaikia&layout=compact&theme=rose" alt="img3" />
        </div>
        
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "20px" }}>
          <GitHubCalendar className="react-activity-calendar"
            fontSize={17}
            blockSize={15}
            year={2023}
            username='anannyaSaikia' />
        </div>
      </div> */}

      <div className={style.github}>
        {/* <div style={{ display: "flex", margin: "auto", justifyContent: "space-evenly", paddingTop: "20px" }}> */}
        <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=anannyaSaikia&theme=rose&border_radius=5" alt="img1" />
        <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=anannyaSaikia&theme=rose&show_icons=true" alt="img2" />
        {/* </div>
        <div style={{ paddingTop: "20px" }}> */}
        <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=anannyaSaikia&layout=compact&theme=rose" alt="img3" />
        {/* </div>

        <div style={{ display: "flex", justifyContent: "center", paddingTop: "20px" }}> */}
        <GitHubCalendar className="react-activity-calendar"
          fontSize={17}
          blockSize={15}
          year={2023}
          username='anannyaSaikia' />
        {/* </div> */}
      </div>

    </div>
  )
}

export default Projects