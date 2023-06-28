import React from 'react';
import style from '../Styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={style.contact}>
      <div className={style.heading}>
        <h1>Connect with me</h1>
        <img src="https://media.tenor.com/oC_oaqeZHHoAAAAC/handshake-virtual-hug.gif" alt="virtual_handshake" />
      </div>
      <div className={style.para}>
        <p>
          I am currently looking for opportunities to work with tech enthusiasts.
          Please drop a mail or connect with me through linkedIn. Looking forward for your valuable response.
        </p>
      </div>

      <div className={style.icons}>

        <div id="contact-email">
          <a href="mailto: anannyasaikia1998@gmail.com"><img src="https://seeklogo.com/images/G/gmail-icon-logo-9ADB17D3F3-seeklogo.com.png" alt="gmail" /></a>
        </div>

        <div id="contact-linkedin">
          <a href="https://www.linkedin.com/in/anannya-saikia-521363239/"><img src="https://static-00.iconduck.com/assets.00/linkedin-icon-1024x1024-z5dvl47c.png" alt="linkedIn" /></a>
        </div>

        <div id="contact-github">
          <a href="https://github.com/anannyaSaikia"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF72pIveLkF8gozEwJGsGQzUE0Dj3Ygkk6qA&usqp=CAU" alt="github" /></a>
        </div>

        <div id="contact-phone">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIeB7gj1vUMOblVroHq60PWxq15e-781H44Q&usqp=CAU" alt="+91 9531067101" />
        </div>

      </div>
    </div>
  )
}

export default Contact