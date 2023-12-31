import React from 'react';
import style from '../Styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={style.contact}>
      <div className={style.heading}>
        <p className={style.subheading}>Connect with me</p>
        <img src="https://media.tenor.com/oC_oaqeZHHoAAAAC/handshake-virtual-hug.gif" alt="virtual_handshake" />
      </div>
      <div className={style.para}>
        <p>
          I am currently looking for opportunities to work with and learn from tech enthusiasts and experts.
          I am eager to be a part of innovative projects and continue growing as a developer within this dynamic field.
          Please drop a mail or connect with me through linkedIn. Looking forward for your valuable response.
        </p>
      </div>

      <div className={style.icons}>

        <div>
          <a href="mailto: anannyasaikia1998@gmail.com">
            <img src="https://seeklogo.com/images/G/gmail-icon-logo-9ADB17D3F3-seeklogo.com.png" alt="gmail" />
          </a>
          <p id="contact-email">anannyasaikia1998@gmail.com</p>
        </div>

        <div id="contact-linkedin">
          <a href="https://www.linkedin.com/in/anannya-saikia-521363239/"><img src="https://static-00.iconduck.com/assets.00/linkedin-icon-1024x1024-z5dvl47c.png" alt="linkedIn" /></a>
        </div>
        {/*         //https://static-00.iconduck.com/assets.00/linkedin-icon-1024x1024-z5dvl47c.png */}

        <div id="contact-github">
          <a href="https://github.com/anannyaSaikia"><img src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png" alt="github" /></a>
        </div>

        <div>
          <a href="tel:+919531067101">
            <img src="https://seeklogo.com/images/P/phone-logo-CA0ABEDEEB-seeklogo.com.png" alt="+919531067101" />
          </a>
          <p id="contact-phone">+91 9531067101</p>
        </div>

      </div>

      <div>
        <a href="https://github.com/anannyaSaikia" style={{ textDecoration: "none", color: "white", fontSize : "medium" }}>
          <p>Designed and Built by Anannya Saikia</p>
        </a>
      </div>
    </div>
  )
}

export default Contact